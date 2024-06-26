import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeptComponent } from './add-edit-dept.component';

describe('AddEditDeptComponent', () => {
  let component: AddEditDeptComponent;
  let fixture: ComponentFixture<AddEditDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditDeptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
