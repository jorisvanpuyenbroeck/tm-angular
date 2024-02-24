import { Component, OnInit } from '@angular/core';
import { Proposal } from '../../../proposal';
import { ProposalService } from '../proposal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css'],
})
export class UserProposalListComponent implements OnInit {
  color: String = 'primary';
  proposals: Proposal[] = [];
  proposals$: Subscription = new Subscription();

  constructor(private proposalService: ProposalService) {}

  ngOnInit(): void {
    this.getProposals();
  }

  ngOnDestroy(): void {
    this.proposals$.unsubscribe();
  }

  getProposals() {
    this.proposals$ = this.proposalService
      .getProposals()
      .subscribe((result) => (this.proposals = result));
  }

  openProposal(proposal: Proposal) {
    console.log('get proposal');
  }
}
