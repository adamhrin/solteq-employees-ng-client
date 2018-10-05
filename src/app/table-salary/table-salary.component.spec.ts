
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSalaryComponent } from './table-salary.component';

describe('TableSalaryComponent', () => {
  let component: TableSalaryComponent;
  let fixture: ComponentFixture<TableSalaryComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
