import { ComponentStore } from '@ngrx/component-store';
import { User } from '../models/user';
import {Injectable} from "@angular/core";


@Injectable()
export class UserStore extends ComponentStore<User> {
  constructor() {
    super({
      sub: '',
      coachProjects: null,
      expertise: "",
      givenName: "",
      familyName: "",
      nickname: "",
      password: "",
      picture: "",
      programType: "",
      studentProjects: null,
      token: "",
      userId: 0,
      userLevel: "",
      userName: "",
      userTopics: null,
      name: '',
      email: '',
      emailVerified: false
    });
  }

  // Define a setter method for updating the user state
  readonly setUser = this.updater((state, user: User) => {
    return user;
  });}
