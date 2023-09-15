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
      return JSON.parse(localStorage.getItem('user') ?? '{}');
    } else {
      return null;
    }
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }

  deleteUser(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isAdmin(): boolean {
    return this.getUser()?.userLevel === 'admin';
  }

  isStudent(): boolean {
    return this.getUser()?.userLevel === 'student';
  }

  isCoach(): boolean {
    return this.getUser()?.userLevel === 'coach';
  }

  authenticate(user: User): Observable<User> {
    return this.httpClient.post<User>(
      'https://localhost:7026/api/users/authenticate',
      user,
    );
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(
      'https://localhost:7026/api/users/register',
      user,
    );
  }
}
