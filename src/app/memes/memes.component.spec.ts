import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesComponent } from './memes.component';

describe('MemesComponent', () => {
  let component: MemesComponent;
  let fixture: ComponentFixture<MemesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemesComponent]
    });
    fixture = TestBed.createComponent(MemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
