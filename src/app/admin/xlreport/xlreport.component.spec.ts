import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XlreportComponent } from './xlreport.component';

describe('XlreportComponent', () => {
  let component: XlreportComponent;
  let fixture: ComponentFixture<XlreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XlreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XlreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
