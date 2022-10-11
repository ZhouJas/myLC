import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecsListComponent } from './recs-list.component';

describe('RecsListComponent', () => {
  let component: RecsListComponent;
  let fixture: ComponentFixture<RecsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
