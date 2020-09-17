import { Injectable } from '@angular/core';
import { flatMap, map, mergeMap, tap } from 'rxjs/operators';
import { MfaHttpService, MfasnackbarService } from 'src/app/core/services';
import { FundNavDetails, NavDataModel, NavSearchForm, RawNavData } from '../models';
import { Response } from '../../../core/models';

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

  constructor(private http: MfaHttpService, private mfaSnackbarService: MfasnackbarService) {
  }

  private _populateData(searchModel: NavSearchForm, res: Response) : FundNavDetails {
    let details = new FundNavDetails();
    if (res && res.meta) {
      for (const key in res.meta) {
        if (Object.prototype.hasOwnProperty.call(details, key)) {
          details[key] = res.meta[key];
        }
      }
      if (res.data && res.data.length > 0) {
        details.nav_data = this._calculateNavData(res.data, searchModel);
      }
    }
    return details;
  }

  private _calculateNavData(data: RawNavData[], searchModel: NavSearchForm): NavDataModel[] {
    return [];
  }

  searchNavData(searchModel: NavSearchForm) {
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
