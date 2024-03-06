import {Injectable, signal} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserStore } from '../store/user-store';
import { map, tap } from 'rxjs/operators';
import {Observable, BehaviorSubject, first, take, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../shared/models/user";
import {Application} from "../shared/models/application";
import {UserDto} from "../shared/models/dto/user.dto";
import {RoleService} from "./role.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    // local
    public userStore$: Observable<User> = new BehaviorSubject<User>({} as User);
    user: User = {} as User;
    userStore: UserStore = new UserStore();
    //Signals https://angular.dev/guide/signals
    isAuthenticated = signal(false);
    isAdmin = signal(false);
    isCoach = signal(false);
    isStudent = signal(false);
    isMentor = signal(false);

    // Subscription
    userSubscription: Subscription = new Subscription();
    hasApplicationTopics: boolean = false;
    hasApplicationOrganisations: boolean = false;
    hasApplicationProposals: boolean = false;
    hasApplicationProject: boolean = false;
    hasApplicationOneOrganisation: boolean = false;
    hasApplicationOneProposal: boolean = false;
    canProposeProject: boolean = false;

    constructor(private auth: AuthService, private roleService: RoleService, userStore: UserStore, private http: HttpClient) {

        console.log("user service constructor")
        this.updateUserState();

        auth.isAuthenticated$.subscribe((auth) => {
            this.isAuthenticated.set(auth);
        });
        roleService.hasPermission('isAdmin').subscribe((admin) => {
            this.isAdmin.set(admin);
        });
        roleService.hasPermission('isCoach').subscribe((coach) => {
            this.isCoach.set(coach);
        });
        roleService.hasPermission('isStudent').subscribe((student) => {
            this.isStudent.set(student);
        });
        roleService.hasPermission('isMentor').subscribe((mentor) => {
            this.isMentor.set(mentor);
        });
    }

    updateUserState(): void {
        console.log('trying to update student state')
        this.userStore$ = this.userStore.select(state => state);
        this.userSubscription = this.userStore$.subscribe(user => {
            this.user = user;
        });
        this.auth.user$.pipe(
            take(1),
            map(user => {
                if (user && user.sub) {
                    // Update the student state
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
        console.log('trying to check if student exists:', sub)
        return this.http.get<boolean>(`https://localhost:7026/api/Users/sub/${sub}`);
    }

    createUser(user: User): Observable<any> {
        const userDto = this.mapUserToUserDto(user);
        console.log('trying to post student:', userDto);
        return this.http.post('https://localhost:7026/api/Users/', userDto);
    }

    setUser(user: User) {
        this.userStore.setUser(user);
    }

    checkApplicationProgress(user: User, phase: string) {
        this.hasApplicationTopics = user.application.topics.length > 0;
        this.hasApplicationOrganisations = user.application.organisations.length > 0;
        this.hasApplicationProposals = user.application.proposals.length > 0;
        this.hasApplicationProject = user.application.project > 0 ;
        this.hasApplicationOneOrganisation = user.application.organisations.length === 1;
        this.hasApplicationOneProposal = user.application.proposals.length === 1;

        this.canProposeProject = this.hasApplicationTopics && this.hasApplicationOneOrganisation  && this.hasApplicationOneProposal;

        switch (phase) {
            case 'topics':
                return this.hasApplicationTopics;
            case 'organisations':
                return this.hasApplicationOrganisations;
            case 'proposals':
                return this.hasApplicationProposals;
            case 'canProposeProject':
                return this.canProposeProject;
            case 'project':
                return this.hasApplicationProject;
            default:
                return false;
        }
    }

    mapUserToUserDto(user: User): UserDto {
        const { application, ...userDto } = user;
        return userDto;
    }


}
