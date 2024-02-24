import { Component, OnInit } from '@angular/core';
import { Topic } from '../../../topic';
import { TopicService } from '../topic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css'],
})
export class UserTopicListComponent implements OnInit {
  topics: Topic[] = [];
  topics$: Subscription = new Subscription();

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.getTopics();
  }

  ngOnDestroy(): void {
    this.topics$.unsubscribe();
  }

  getTopics() {
    this.topics$ = this.topicService
      .getTopics()
      .subscribe((result) => (this.topics = result));
  }
}
