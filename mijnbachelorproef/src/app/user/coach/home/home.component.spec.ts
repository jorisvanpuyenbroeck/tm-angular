import { ComponentFixture, TestBed } from '@angular/core/testing';

import {CoachHomeComponent} from './home.component';

describe('CoachHomeComponent', () => {
  let component: CoachHomeComponent;
  let fixture: ComponentFixture<CoachHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoachHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
