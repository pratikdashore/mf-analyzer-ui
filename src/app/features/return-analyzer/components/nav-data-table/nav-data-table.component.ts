import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { FundNavDetails, NavDataModel } from '../../models';

@Component({
  selector: 'mfa-nav-data-table',
  templateUrl: './nav-data-table.component.html',
  styleUrls: ['./nav-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDataTableComponent implements OnChanges {

  @Input() searchedResult: Observable<FundNavDetails>;
  displayedColumns: string[] = ['month', 'return', 'description'];
  dataSource: MatTableDataSource<NavDataModel> = new MatTableDataSource<NavDataModel>();
  fundHouse:string;
  schemeName:string;
  schemeCode:string;


  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() {

  }

  ngOnChanges(changes:SimpleChanges){
    let resultSearchChange = changes['searchedResult'];
    if(!resultSearchChange.isFirstChange() && resultSearchChange.currentValue){
      const change = resultSearchChange.currentValue;
      this.dataSource.data = change.nav_data;
      this.fundHouse = change.fund_house;
      this.schemeCode = change.scheme_code;
      this.schemeName = change.scheme_name;
    }
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
