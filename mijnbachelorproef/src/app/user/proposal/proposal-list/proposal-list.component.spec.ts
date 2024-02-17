import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProposalListComponent } from './proposal-list.component';

describe('ProposalListComponent', () => {
  let component: UserProposalListComponent;
  let fixture: ComponentFixture<UserProposalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProposalListComponent]
    });
    fixture = TestBed.createComponent(UserProposalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
