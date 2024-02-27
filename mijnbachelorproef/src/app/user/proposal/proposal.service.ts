import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proposal } from '../../models/proposal';

@Injectable({
  providedIn: 'root',
})
export class ProposalService {
  constructor(private httpClient: HttpClient) {}

  getProposals(): Observable<Proposal[]> {
    return this.httpClient.get<Proposal[]>(
      'https://localhost:7026/api/proposals',
    );
  }

  getProposalsByTopics(topicIds: number[]): Observable<Proposal[]> {
    const queryString = topicIds.map(id => `topicIds=${id}`).join('&');
    const apiUrl = `https://localhost:7026/api/proposals/by-topic?${queryString}`;
    return this.httpClient.get<Proposal[]>(apiUrl);
  }
}
