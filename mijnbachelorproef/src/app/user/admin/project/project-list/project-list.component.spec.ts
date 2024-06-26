import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectListComponent } from './project-list.component';

describe('ProjectListComponent', () => {
  let component: AdminProjectListComponent;
  let fixture: ComponentFixture<AdminProjectListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProjectListComponent]
    });
    fixture = TestBed.createComponent(AdminProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
