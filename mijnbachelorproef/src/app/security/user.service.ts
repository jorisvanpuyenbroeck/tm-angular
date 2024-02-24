import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserStore } from '../store/user-store';
import { map, tap } from 'rxjs/operators';
import {Observable, BehaviorSubject, first, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    userStore$: Observable<User> ;

    constructor(public auth: AuthService, private userStore: UserStore, private http: HttpClient) {
        this.updateUserState();
        this.userStore$ = this.userStore.select(state => state);
    }

    updateUserState(): void {
        console.log('trying to update user state')
        this.auth.user$.pipe(
            take(1),
            map(user => {
                if (user && user.sub) {
                    // Update the user state
                    this.userStore.setUser({
                        sub: user.sub,
                        name: user.name,
                        email: user.email,
                        picture: user.picture,
                        givenName: user.given_name,
                        familyName: user.family_name,
                        nickname: user.nickname,
                        emailVerified: user.email_verified,
                        // map other properties...
                    });
                }
            }),
        ).subscribe();
    }


    userExists(sub: string): Observable<boolean> {
        console.log('trying to check if user exists:', sub)
        return this.http.get<boolean>(`https://localhost:7026/api/Users/sub/${sub}`);
    }

    createUser(user: User): Observable<any> {
        console.log('trying to post user:', user);
        return this.http.post('https://localhost:7026/api/Users/', user);
    }



}
