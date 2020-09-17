import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  getDateFromString(dateStr: string) {
    // 16-09-2020
    try {
      return moment(dateStr,'DD-MM-YYYY').toDate();
    } catch (error) {
      return null;
    }
  }

  getDurationInDays(start: Date, end: Date) {
    const diff = end.getTime() - start.getTime();
    return diff / (24 * 60 * 60 * 1000);
  }

  getPreviousDayDate(date: Date, days: number) {
    return moment(date).add(-days, 'd').toDate();
  }

  getPreviousMonthData(date:Date, months:number){
    return moment(date).add(-months, 'M').toDate();
  }

  getNextMonthDate(date:Date, months:number){
    return moment(date).add(months,'M').toDate();
  }

  getNextYeardate(date:Date, year:number){
    return moment(date).add(year,'years').toDate();
  }

  getMonthDiff(start:Date, end:Date){
    return moment(end).diff(moment(start), 'months');
  }

  getDisplayMonthDate(start:Date){
    return moment(start).format('MMM-YY');
  }
}
