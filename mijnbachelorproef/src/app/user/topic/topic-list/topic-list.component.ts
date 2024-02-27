import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Topic } from '../../../models/topic';
import { TopicService } from '../topic.service';
import { Subscription } from 'rxjs';
import {User} from "../../../models/user";
import {UserService} from "../../../security/user.service";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css'],
})
export class UserTopicListComponent implements OnInit {

  // local
  public topics: Topic[] = [];
  public user: User = {} as User;


  // Subscriptions
  topicsSubscription: Subscription = new Subscription();
  userSubscription: Subscription = new Subscription();

  constructor(
    public topicService: TopicService,
    public userService: UserService) {}

  ngOnInit(): void {
    this.getTopics();
    this.userSubscription = this.userService.userStore$.subscribe(user => {
      console.log("topic list component initialized");
      // Update the local user property
      this.user = user;
    });

  }

  ngOnDestroy(): void {
    this.topicsSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  getTopics() {
    this.topicsSubscription = this.topicService
        .getTopics()
        .subscribe((result) => (this.topics = result));
  }

  toggleFavourite(topicId: number) {

      // If application is defined
      if (this.isFavourite(topicId)) {
        // If the topic is already in the topics array, remove it
        const index = this.user.application.topics.indexOf(topicId);
        this.user.application.topics.splice(index, 1);
      } else {
        // If the topic is not in the topics array, add it
        this.user.application.topics.push(topicId);
      }

  }

  isFavourite(topicId: number): boolean {
    return this.user.application.topics ? this.user.application.topics.includes(topicId) : false;
  }

  saveTopics() {
    if (this.userService.checkApplicationProgress(this.user, "topics")) {
      this.user.application.topicsSaved = true;
      console.log("saved", this.user || "user triggered");
      // this.user$.subscribe(user => {
      //   this.topicService.saveTopics(user.application.topics);
    }
  }
}
