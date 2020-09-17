import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { DateUtilService, MfaHttpService, MfasnackbarService } from 'src/app/core/services';
import { Response } from '../../../core/models';
import { FundNavDetails, NavDataModel, NavSearchForm, RawNavData } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NavSearchService {

  validationMessages = {
    fundCode: {
      required: 'Please enter fund code.',
      minlength: 'The fund code must be longer than 3 characters.',
    },
    horizon: {
      required: 'Please enter horizon.',
      min: 'Minimum 1 year.'
    },
    period: {
      required: 'Please enter investment period (In year).',
      min: 'Minimum 1 year.'
    },
  }

  constructor(private http: MfaHttpService, private mfaSnackbarService: MfasnackbarService, private dateUtil: DateUtilService) {
  }

  private _populateData(searchModel: NavSearchForm, res: Response): FundNavDetails {
    let details = new FundNavDetails();
    if (res && res.meta) {
      details.fund_house = res.meta.fund_house;
      details.scheme_code = res.meta.scheme_code;
      details.scheme_name = res.meta.scheme_name;
      if (res.data && res.data.length > 0) {
        details.nav_data = this._populateNavData(res.data, searchModel);
      }
    }
    return details;
  }

  private _populateNavData(data: RawNavData[], searchModel: NavSearchForm): NavDataModel[] {
    let result: NavDataModel[] = [];
    let dateNavMap = this._getDayNavMap(data, searchModel);

    let currentDate = new Date();
    let lastDate = new Date(currentDate.getFullYear() - (searchModel.horizon + searchModel.period), currentDate.getMonth(), currentDate.getDate() - 1);
    let navStartMonth = new Date(currentDate.getFullYear() - searchModel.horizon, currentDate.getMonth(), currentDate.getDate() - 1)
    let monthDiff = this.dateUtil.getMonthDiff(navStartMonth, currentDate);

    for (let idx = 0; idx < monthDiff; idx++) {
      let data = new NavDataModel();
      let navStartDate = this.dateUtil.getNextMonthDate(lastDate, idx);
      let navEndDate = this.dateUtil.getNextYeardate(navStartDate, searchModel.period);

      data.month = this.dateUtil.getDisplayMonthDate(navEndDate);
      data.description = `Start Nav - ${this.dateUtil.getDisplayMonthDate(navStartDate)} End Nav - ${this.dateUtil.getDisplayMonthDate(navEndDate)}`

      let navStart = dateNavMap.get(navStartDate.toDateString());
      let navEnd = dateNavMap.get(navEndDate.toDateString());
      // to avoid other falsy values like 0;
      if (navStart !== undefined && navEnd != undefined) {
        const navReturn = (Math.pow((navEnd / navStart), (1 / searchModel.period)) - 1) * 100;
        data.return = Math.round((navReturn + Number.EPSILON) * 100) / 100;
      } else {
        data.return = 0;
      }
      result.push(data);
    }
    return result;
  }



  private _getDayNavMap(data: RawNavData[], searchModel: NavSearchForm) {
    let mappedData = new Map<string, number>();
    if (data && data.length > 0) {
      let currentDate = new Date();
      let lastDate = new Date(currentDate.getFullYear() - (searchModel.horizon + searchModel.period), currentDate.getMonth(), currentDate.getDate() - 1);
      let prevNavDate: Date;
      let prevNav: number;

      // since data is already in shorted order

      for (let idx = 0; idx < data.length; idx++) {
        const element = data[idx];
        let elementDate = this.dateUtil.getDateFromString(element.date);
        if (elementDate.getTime() >= lastDate.getTime()) {
          if (prevNavDate) {
            let diff = this.dateUtil.getDurationInDays(elementDate, prevNavDate);
            if (diff > 1) {
              for (let i = 1; i < diff; i++) {
                // There is doubt, if on current day NAV is missing, should we take next day or prev day nav ?
                // For now its next day nav
                const navDay = this.dateUtil.getPreviousDayDate(prevNavDate, i)?.toDateString();
                mappedData.set(navDay, prevNav);
              }
            }
          }
          prevNav = +element.nav;
          prevNavDate = elementDate;
          mappedData.set(elementDate.toDateString(), +element.nav);
        } else {
          break;
        }
      }
    }
    return mappedData;
  }

  searchNavData(searchModel: NavSearchForm) {

    // Supposed to write spring boot app and get these values calculated from server app
    // to avoid cross origin requests and data filtering part on server rather client machine

    const url = `https://api.mfapi.in/mf/${searchModel.fundCode}`;

    return this.http.get(url).pipe(
      tap(res => {
        if (!res.data || res.data.length < 1) {
          this.mfaSnackbarService.openSnackBar(`No Data Available for Fund Code ${searchModel.fundCode}`)
        }
      }),
      map((res: Response) => {
        return this._populateData(searchModel, res);
      })
    );
  }
}
