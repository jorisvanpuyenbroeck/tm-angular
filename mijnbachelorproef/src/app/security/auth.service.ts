import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { UserResponse } from './user-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  getUser(): User | null {
    if (this.isLoggedIn()) {
      return {
        userId: parseInt(localStorage.getItem('userid') ?? '0'),
        email: localStorage.getItem('email') ?? '',
        userName: localStorage.getItem('username') ?? '',
        password: '',
        firstName: localStorage.getItem('firstname') ?? '',
        lastName: localStorage.getItem('lastname') ?? '',
        programType: localStorage.getItem('programtype') ?? '',
        userLevel: localStorage.getItem('userlevel') ?? '',
        expertise: localStorage.getItem('expertise') ?? '',
        token: this.getToken(),
        studentProjects: null,
        coachProjects: null,
        userTopics: null,
      };
    } else {
      return null;
    }
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  authenticate(user: User): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(
      'https://localhost:7026/api/users/authenticate',
      user,
    );
  }

  register(user: User): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(
      'https://localhost:7026/api/users/register',
      user,
    );
  }
}
