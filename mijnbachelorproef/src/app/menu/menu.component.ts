import { ChangeDetectionStrategy, Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {SharedModule} from "../shared/shared.module";
import { AuthService } from '@auth0/auth0-angular';
import { RoleService } from '../security/role.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
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

  constructor(
    public authService: AuthService,
    public roleService: RoleService,
    private router: Router,
  ) {
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

  ngOnInit(): void {}

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
