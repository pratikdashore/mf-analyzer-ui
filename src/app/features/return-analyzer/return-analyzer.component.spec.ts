import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnAnalyzerComponent } from './return-analyzer.component';

describe('ReturnAnalyzerComponent', () => {
  let component: ReturnAnalyzerComponent;
  let fixture: ComponentFixture<ReturnAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnAnalyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
