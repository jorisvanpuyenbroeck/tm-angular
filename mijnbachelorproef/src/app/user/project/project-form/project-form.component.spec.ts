import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProjectFormComponent } from './project-form.component';

describe('UserProjectFormComponent', () => {
  let component: UserProjectFormComponent;
  let fixture: ComponentFixture<UserProjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProjectFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
