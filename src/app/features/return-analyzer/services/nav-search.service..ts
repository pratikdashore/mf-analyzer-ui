import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavSearchForm } from '../models';

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

  constructor(private httpClient: HttpClient) {
  }

  searchNavData(searchModel: NavSearchForm) {
    console.log(searchModel);
  }
}
