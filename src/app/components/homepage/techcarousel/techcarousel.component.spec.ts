import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechcarouselComponent } from './techcarousel.component';

describe('TechcarouselComponent', () => {
  let component: TechcarouselComponent;
  let fixture: ComponentFixture<TechcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechcarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
