import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organisation } from '../../models/organisation';

@Injectable({
  providedIn: 'root',
})
export class OrganisationService {
  constructor(private httpClient: HttpClient) {}

  getOrganisations(): Observable<Organisation[]> {
    return this.httpClient.get<Organisation[]>('https://localhost:7026/api/organisations');
  }

  getOrganisationById(id: number): Observable<Organisation> {
    return this.httpClient.get<Organisation>(
      'https://localhost:7026/api/organisations/' + id,
    );
  }

  postOrganisation(Organisation: Organisation): Observable<Organisation> {
    return this.httpClient.post<Organisation>(
      'https://localhost:7026/api/organisations',
      Organisation,
    );
  }

  putOrganisation(id: number, organisation: Organisation): Observable<Organisation> {
    return this.httpClient.put<Organisation>(
      'https://localhost:7026/api/organisations/' + id,
      organisation,
    );
  }

  deleteOrganisation(id: number): Observable<Organisation> {
    return this.httpClient.delete<Organisation>(
      'https://localhost:7026/api/organisations/' + id,
    );
  }
}
