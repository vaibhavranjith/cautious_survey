import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReportComponent } from './data-report.component';

describe('DataReportComponent', () => {
  let component: DataReportComponent;
  let fixture: ComponentFixture<DataReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
