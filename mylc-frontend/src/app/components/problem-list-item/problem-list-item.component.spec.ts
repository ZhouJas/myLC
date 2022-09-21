import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemListItemComponent } from './problem-list-item.component';

describe('ProblemListItemComponent', () => {
  let component: ProblemListItemComponent;
  let fixture: ComponentFixture<ProblemListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
