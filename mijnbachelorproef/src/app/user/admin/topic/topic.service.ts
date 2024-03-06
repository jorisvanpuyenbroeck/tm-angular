import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../../../models/topic';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  constructor(private httpClient: HttpClient) {}

  getTopics(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>('https://localhost:7026/api/topics');
  }

  getTopicById(id: number): Observable<Topic> {
    return this.httpClient.get<Topic>(
      'https://localhost:7026/api/topics/' + id,
    );
  }

  postTopic(Topic: Topic): Observable<Topic> {
    return this.httpClient.post<Topic>(
      'https://localhost:7026/api/topics',
      Topic,
    );
  }

  putTopic(id: number, topic: Topic): Observable<Topic> {
    return this.httpClient.put<Topic>(
      'https://localhost:7026/api/topics/' + id,
      topic,
    );
  }

  deleteTopic(id: number): Observable<Topic> {
    return this.httpClient.delete<Topic>(
      'https://localhost:7026/api/topics/' + id,
    );
  }
}
