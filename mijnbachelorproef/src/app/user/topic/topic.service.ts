import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../../models/topic';
import {Proposal} from "../../models/proposal";

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  constructor(private httpClient: HttpClient) {}

  getTopics(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>('https://localhost:7026/api/topics');
  }

   getTopicById(topicId: number): Observable<Topic> {
      return this.httpClient.get<Topic>(
      `https://localhost:7026/api/topics/${topicId}`,
      );
  }
}
