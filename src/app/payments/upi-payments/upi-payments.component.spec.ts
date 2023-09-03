import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiPaymentsComponent } from './upi-payments.component';

describe('UpiPaymentsComponent', () => {
  let component: UpiPaymentsComponent;
  let fixture: ComponentFixture<UpiPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpiPaymentsComponent]
    });
    fixture = TestBed.createComponent(UpiPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
