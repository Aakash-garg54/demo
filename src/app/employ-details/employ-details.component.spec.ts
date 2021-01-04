import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployDetailsComponent } from './employ-details.component';

describe('EmployDetailsComponent', () => {
  let component: EmployDetailsComponent;
  let fixture: ComponentFixture<EmployDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
