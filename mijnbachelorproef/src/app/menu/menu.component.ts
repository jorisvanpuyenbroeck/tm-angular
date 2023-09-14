import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  hamburgerOpen = false;
  adminDropdownOpen = false;

  constructor(
    public authService: AuthService,
    private router: Router,
  ) {}

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

  navigateTo(path: string) {
    this.closeAdminDropDown();

    this.hamburgerOpen = false;
    this.router.navigate([path]);
  }
}
