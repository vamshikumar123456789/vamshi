import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeProductComponent } from './creative-product.component';

describe('CreativeProductComponent', () => {
  let component: CreativeProductComponent;
  let fixture: ComponentFixture<CreativeProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreativeProductComponent]
    });
    fixture = TestBed.createComponent(CreativeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
