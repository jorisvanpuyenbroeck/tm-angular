import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organisation } from '../../organisation';

@Injectable({
  providedIn: 'root',
})
export class OrganisationService {
  constructor(private httpClient: HttpClient) {}

  getOrganisations(): Observable<Organisation[]> {
    return this.httpClient.get<Organisation[]>(
      'https://localhost:7026/api/organisations',
    );
  }
}
