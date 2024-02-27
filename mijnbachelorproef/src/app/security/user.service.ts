import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserStore } from '../store/user-store';
import { map, tap } from 'rxjs/operators';
import {Observable, BehaviorSubject, first, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Application} from "../models/application";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public userStore$: Observable<User> ;
    hasApplicationTopics: boolean = false;
    hasApplicationOrganisations: boolean = false;
    hasApplicationProposals: boolean = false;
    hasApplicationProject: boolean = false;

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
                        application: {
                            topics: [],
                            organisations: [],
                            proposals: [],
                            project: 0,
                            topicsSaved: false,
                            organisationsSaved: false,
                            proposalsSaved: false,
                            projectSaved: false,
                        } as Application,
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

    setUser(user: User) {
        this.userStore.setUser(user);
    }

    checkApplicationProgress(user: User, phase: string) {
        this.hasApplicationTopics = user.application.topics.length > 0;
        this.hasApplicationOrganisations = user.application.organisations.length > 0;
        this.hasApplicationProposals = user.application.proposals.length > 0;
        this.hasApplicationProject = user.application.project > 0;

        switch (phase) {
            case 'topics':
                return this.hasApplicationTopics;
            case 'organisations':
                return this.hasApplicationOrganisations;
            case 'proposals':
                return this.hasApplicationProposals;
            case 'project':
                return this.hasApplicationProject;
            default:
                return false;
        }
    }



}
