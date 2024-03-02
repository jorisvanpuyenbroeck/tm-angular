import {Component, Input} from '@angular/core';
import {Proposal} from "../../../models/proposal";
import {User} from "../../../models/user";

@Component({
  selector: 'app-proposal-card',
  templateUrl: './proposal-card.component.html',
  styleUrl: './proposal-card.component.css'
})
export class UserProposalCardComponent {

  @Input() proposal: Proposal = {} as Proposal;
  @Input() user: User = {} as User;

  constructor() {
  }

  toggleFavourite(proposalId: number) {

    // If application is defined
    if (this.isFavourite(proposalId)) {
      // If the topic is already in the topics array, remove it
      const index = this.user.application.proposals.indexOf(proposalId);
      this.user.application.proposals.splice(index, 1);
    } else {
      // If the topic is not in the topics array, add it
      this.user.application.proposals.push(proposalId);
    }

  }

  isFavourite(proposalId: number): boolean {
    return this.user.application.proposals ? this.user.application.proposals.includes(proposalId) : false;
  }


}
