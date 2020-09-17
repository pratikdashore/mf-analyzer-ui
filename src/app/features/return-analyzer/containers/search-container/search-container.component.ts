import { Component, OnInit } from '@angular/core';
import { NavSearchForm } from '../../models';
import { NavSearchService } from '../../services';

@Component({
  selector: 'mfa-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  constructor(private navSearchService: NavSearchService) { }

  ngOnInit(): void {
  }

  onNavSearch(searchModel: NavSearchForm) {
    this.navSearchService.searchNavData(searchModel);
  }

}
