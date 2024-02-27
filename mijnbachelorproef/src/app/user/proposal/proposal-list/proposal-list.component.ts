import { Component, OnInit } from '@angular/core';
import { Proposal } from '../../../models/proposal';
import { ProposalService } from '../proposal.service';
import { Subscription } from 'rxjs';
import {User} from "../../../models/user";
import {UserService} from "../../../security/user.service";

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css'],
})
export class UserProposalListComponent implements OnInit {

  // local
  public proposals: Proposal[] = [];
  public user: User = {} as User;

  // Subscriptions
  proposalsSubscription: Subscription = new Subscription();
  userSubscription: Subscription = new Subscription();


  constructor(
      public proposalService: ProposalService,
      public userService: UserService) {}

  ngOnInit(): void {

    this.userSubscription = this.userService.userStore$.subscribe(user => {
      console.log("topic list component initialized");
      // Update the local user property
      this.user = user;
      console.log(user.application.topics);
      // does the next arrow need to be green?
    });
    this.getProposalsByTopics(this.user.application.topics);
  }

  ngOnDestroy(): void {
    this.proposalsSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  getProposals() {
    this.proposalsSubscription = this.proposalService
      .getProposals()
      .subscribe((result) => (this.proposals = result));
  }

  getProposalsByTopics(topics: number[]) {
    this.proposalsSubscription = this.proposalService
        .getProposalsByTopics(topics)
        .subscribe((result) => (this.proposals = result));
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

  openProposal(proposal: Proposal) {
    console.log('get proposal');
  }

  saveProposals() {
    if (this.userService.checkApplicationProgress(this.user, "proposals")) {
      this.user.application.proposalsSaved = true;
      console.log("saved", this.user || "user triggered");
      // this.user$.subscribe(user => {
      //   this.topicService.saveTopics(user.application.topics);
    }
  }


}
