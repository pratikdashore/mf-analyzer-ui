import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDataTableComponent } from './nav-data-table.component';

describe('NavDataTableComponent', () => {
  let component: NavDataTableComponent;
  let fixture: ComponentFixture<NavDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
