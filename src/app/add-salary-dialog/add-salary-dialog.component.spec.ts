import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalaryDialogComponent } from './add-salary-dialog.component';

describe('AddSalaryDialogComponent', () => {
  let component: AddSalaryDialogComponent;
  let fixture: ComponentFixture<AddSalaryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalaryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
