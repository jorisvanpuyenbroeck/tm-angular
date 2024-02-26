import {Component, OnDestroy, OnInit} from '@angular/core';
import { Organisation } from '../../../models/organisation';
import { OrganisationService } from '../organisation.service';
import { Subscription } from 'rxjs';
import {User} from "../../../models/user";
import {UserService} from "../../../security/user.service";

@Component({
  selector: 'app-organisation-list',
  templateUrl: './organisation-list.component.html',
  styleUrls: ['./organisation-list.component.css'],
})
export class UserOrganisationListComponent implements OnInit {

  //local
  // color: String = 'primary';
  organisations: Organisation[] = [];
  user: User = {} as User;
  hasApplicationOrganisations: boolean = false;


  // Subscriptions
  organisationSubscription: Subscription = new Subscription();
  userSubscription: Subscription = new Subscription();


  constructor(
      public organisationService: OrganisationService,
      public userService: UserService)
  {}

  ngOnInit(): void {
    this.getOrganisations();
    this.userSubscription = this.userService.userStore$.subscribe(user => {
      console.log("organisation component initialized");
      // Update the local user property
      this.user = user;
      // does the next arrow need to be green?
      // this.hasApplicationOrganisations = user.application.organisations.length > 0;
    });
  }

  ngOnDestroy(): void {
    this.organisationSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  getOrganisations() {
    this.organisationSubscription = this.organisationService
      .getOrganisations()
      .subscribe((result) => (this.organisations = result));
  }

  openOrganisation(organisation: Organisation) {
    console.log('get organisation');
  }

  toggleFavourite(organisationId: number) {

    // If application is defined
    if (this.isFavourite(organisationId)) {
      // If the topic is already in the topics array, remove it
      const index = this.user.application.organisations.indexOf(organisationId);
      this.user.application.organisations.splice(index, 1);
    } else {
      // If the topic is not in the topics array, add it
      this.user.application.organisations.push(organisationId);
    }

    // Update hasApplicationTopics
    this.hasApplicationOrganisations = this.user.application.organisations.length > 0;

  }

  isFavourite(organisationId: number): boolean {
    return this.user.application.organisations ? this.user.application.organisations.includes(organisationId) : false;
  }


  saveOrganisations() {
    if (this.hasApplicationOrganisations) {
      this.user.application.organisationsSaved = true;
      console.log("saved", this.user || "user triggered");
      // this.user$.subscribe(user => {
      //   this.topicService.saveTopics(user.application.topics);
    }
  }

}
