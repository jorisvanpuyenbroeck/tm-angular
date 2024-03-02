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

  saveProposals() {
    if (this.userService.checkApplicationProgress(this.user, "proposals")) {
      this.user.application.proposalsSaved = true;
      console.log("saved", this.user || "user triggered");
      // this.user$.subscribe(user => {
      //   this.topicService.saveTopics(user.application.topics);
    }
  }


}
