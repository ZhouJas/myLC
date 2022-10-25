import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyIndicatorComponent } from './difficulty-indicator.component';

describe('DifficultyIndicatorComponent', () => {
  let component: DifficultyIndicatorComponent;
  let fixture: ComponentFixture<DifficultyIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifficultyIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifficultyIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
