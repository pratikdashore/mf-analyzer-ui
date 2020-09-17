import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FundNavDetails, NavSearchForm } from '../../models';
import { NavSearchService } from '../../services';

@Component({
  selector: 'mfa-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  fundDetails$: Observable<FundNavDetails>;
  constructor(private navSearchService: NavSearchService) { }

  ngOnInit(): void {
  }

  onNavSearch(searchModel: NavSearchForm) {
    this.fundDetails$ = this.navSearchService.searchNavData(searchModel);
  }

}
