import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../../models/project";
import {Observable} from "rxjs";
import {ProjectDto} from "../../models/dto/project.dto";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) {}

  postProject(project: ProjectDto) {
    return this.httpClient.post('https://localhost:7026/api/projects', project);
  }

  putProject(project: ProjectDto) {
    return this.httpClient.put('https://localhost:7026/api/projects', project);
  }

  getProjectById(projectId: number): Observable<Project> {
    return this.httpClient.get<Project>(`https://localhost:7026/api/projects/${projectId}`);
  }



}
