import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proposal } from '../../proposal';

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
}
