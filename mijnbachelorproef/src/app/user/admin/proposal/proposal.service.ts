import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proposal } from '../../../models/proposal';

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

  getProposalById(id: number): Observable<Proposal> {
    return this.httpClient.get<Proposal>(
      'https://localhost:7026/api/proposals/' + id,
    );
  }

  postProposal(Proposal: Proposal): Observable<Proposal> {
    return this.httpClient.post<Proposal>(
      'https://localhost:7026/api/proposals',
      Proposal,
    );
  }

  putProposal(id: number, proposal: Proposal): Observable<Proposal> {
    return this.httpClient.put<Proposal>(
      'https://localhost:7026/api/proposals/' + id,
      proposal,
    );
  }

  deleteProposal(id: number): Observable<Proposal> {
    return this.httpClient.delete<Proposal>(
      'https://localhost:7026/api/proposals/' + id,
    );
  }
}
