import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProposalCardComponent } from './proposal-card.component';


// @ts-ignore
describe('UserProposalCardComponent', () => {
  let component: UserProposalCardComponent;
  let fixture: ComponentFixture<UserProposalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProposalCardComponent]
    })
        .compileComponents();

    fixture = TestBed.createComponent(UserProposalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

