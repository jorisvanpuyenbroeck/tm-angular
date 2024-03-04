import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(
      'https://localhost:7026/api/projects',
    );
  }

  getProjectById(id: number): Observable<Project> {
    return this.httpClient.get<Project>(
      'https://localhost:7026/api/projects/' + id,
    );
  }

  postProject(Project: Project): Observable<Project> {
    return this.httpClient.post<Project>(
      'https://localhost:7026/api/projects',
      Project,
    );
  }

  putProject(id: number, project: Project): Observable<Project> {
    return this.httpClient.put<Project>(
      'https://localhost:7026/api/projects/' + id,
      project,
    );
  }

  deleteProject(id: number): Observable<Project> {
    return this.httpClient.delete<Project>(
      'https://localhost:7026/api/projects/' + id,
    );
  }
}
