import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FundNavDetails } from '../../models';

@Component({
  selector: 'mfa-nav-data-table',
  templateUrl: './nav-data-table.component.html',
  styleUrls: ['./nav-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDataTableComponent implements OnInit {

  @Input() searchedResult: FundNavDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
