import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalariesChartComponent } from './salaries-chart.component';

describe('SalariesChartComponent', () => {
  let component: SalariesChartComponent;
  let fixture: ComponentFixture<SalariesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalariesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalariesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
