import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mfa-nav-data-table',
  templateUrl: './nav-data-table.component.html',
  styleUrls: ['./nav-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDataTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
