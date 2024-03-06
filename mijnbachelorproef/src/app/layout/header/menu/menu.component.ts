import {ChangeDetectionStrategy, Component, signal, OnInit, OnDestroy} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { RoleService } from '../../../user/role.service';
import { UserStore } from '../../../store/user-store';
import {Observable, Subscription} from 'rxjs';
import {User} from "../../../models/user";
import {UserService} from "../../../user/user.service";



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {
  hamburgerOpen = false;
  adminDropdownOpen = false;
  coachDropdownOpen = false;
  studentDropdownOpen = false;
  mentorDropdownOpen = false;

  //Signals https://angular.dev/guide/signals
  isAuthenticated = signal(false);
  isAdmin = signal(false);
  isCoach = signal(false);
  isStudent = signal(false);
  isMentor = signal(false);

  // local
  user: User = {} as User;

  // Subscription
  userSubscription: Subscription = new Subscription();

  constructor(
    public authService: AuthService,
    public roleService: RoleService,
    public userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.userStore$.subscribe(user => {
      this.user = user;
    });
    this.authService.isAuthenticated$.subscribe((auth) => {
      this.isAuthenticated.set(auth);
    });
    this.roleService.hasPermission('isAdmin').subscribe((admin) => {
      this.isAdmin.set(admin);
    });
    this.roleService.hasPermission('isCoach').subscribe((coach) => {
      this.isCoach.set(coach);
    });
    this.roleService.hasPermission('isStudent').subscribe((student) => {
      this.isStudent.set(student);
    });
    this.roleService.hasPermission('isMentor').subscribe((mentor) => {
      this.isMentor.set(mentor);
    });

  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  toggleHamburger(): void {
    this.hamburgerOpen = !this.hamburgerOpen;
  }

  onHamburgerItemClick() {
    if (this.hamburgerOpen) {
      this.hamburgerOpen = false;
    }
  }

  onAdminDropDownClick() {
    this.adminDropdownOpen = !this.adminDropdownOpen;
  }

  closeAdminDropDown() {
    this.adminDropdownOpen = false;
  }

  onCoachDropDownClick() {
    this.coachDropdownOpen = !this.coachDropdownOpen;
  }

  closeCoachDropDown() {
    this.coachDropdownOpen = false;
  }
  onMentorDropDownClick() {
    this.mentorDropdownOpen = !this.mentorDropdownOpen;
  }

  closeMentorDropDown() {
    this.mentorDropdownOpen = false;
  }

  onStudentDropDownClick() {
    this.studentDropdownOpen = !this.studentDropdownOpen;
  }

  closeStudentDropDown() {
    this.studentDropdownOpen = false;
  }

  navigateTo(path: string) {
    this.closeAdminDropDown();

    this.hamburgerOpen = false;
    this.router.navigate([path]);
  }

}
