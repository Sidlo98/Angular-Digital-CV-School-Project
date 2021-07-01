import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalcvComponent } from './digitalcv.component';

describe('DigitalcvComponent', () => {
  let component: DigitalcvComponent;
  let fixture: ComponentFixture<DigitalcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalcvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
