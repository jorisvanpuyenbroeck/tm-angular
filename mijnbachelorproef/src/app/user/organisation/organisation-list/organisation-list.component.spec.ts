import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrganisationListComponent } from './organisation-list.component';

describe('OrganisationListComponent', () => {
  let component: UserOrganisationListComponent;
  let fixture: ComponentFixture<UserOrganisationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserOrganisationListComponent]
    });
    fixture = TestBed.createComponent(UserOrganisationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
