import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Topic } from '../../../models/topic';
import { TopicService } from '../topic.service';
import { Subscription } from 'rxjs';
import {Application} from "../../../models/application";
import {UserStore} from "../../../store/user-store";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css'],
})
export class UserTopicListComponent implements OnInit, OnDestroy {
  topics: Topic[] = [];
  topics$: Subscription = new Subscription();
  user$;
  user: any; // Add a user property
  userSubscription: Subscription = new Subscription();
  hasApplicationTopics: boolean = false;

  constructor(private topicService: TopicService, private userStore: UserStore) {
    this.user$ = this.userStore.state$;
  }

  ngOnInit(): void {
    this.getTopics();
    this.userSubscription = this.user$.subscribe(user => {
      // Update the local user property
      this.user = user;
      // If the user doesn't have an application property, initialize it
      if (!user.application) {
        user.application = {
          topics: [],
          organisations: [],
          proposals: [],
          project: null,
          topicsSaved: false,
          organisationsSaved: false,
          proposalsSaved: false,
          projectSaved: false
        } as Application;
      }
      // does the next arrow need to be green?
      this.hasApplicationTopics = user && user.application && user.application.topics && user.application.topics.length > 0 || false;

    });
  }

  ngOnDestroy(): void {
    this.topics$.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  getTopics() {
    this.topics$ = this.topicService
        .getTopics()
        .subscribe((result) => (this.topics = result));
  }

  toggleFavourite(topic: Topic) {
    if (this.user && this.user.application) {
      console.log('user', this.user);
      // If application is defined
      if (this.isFavourite(topic)) {
        // If the topic is already in the topics array, remove it
        const index = this.user.application.topics.indexOf(topic);
        this.user.application.topics.splice(index, 1);
      } else {
        // If the topic is not in the topics array, add it
        this.user.application.topics.push(topic);
      }
      // Update the user in the UserStore
      this.userStore.setUser(this.user);

      // Update hasApplicationTopics
      this.hasApplicationTopics = this.user && this.user.application && this.user.application.topics && this.user.application.topics.length > 0 || false;

    } else {
      // Handle the case where application is undefined
      console.error('Application is undefined');
    }
  }

  isFavourite(topic: Topic): boolean {
    return this.user && this.user.application && this.user.application.topics.includes(topic) || false;
  }

  saveTopics() {
    if (this.hasApplicationTopics) {
      console.log('saveTopics');
      // this.user$.subscribe(user => {
      //   this.topicService.saveTopics(user.application.topics);
    }
  }
}
