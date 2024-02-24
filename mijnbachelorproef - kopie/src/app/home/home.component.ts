import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  //Signals https://angular.dev/guide/signals
  isAuthenticated = signal(false);

  constructor(private authService: AuthService) {
    this.authService.isAuthenticated$.subscribe((auth) => {
      this.isAuthenticated.set(auth);
    });
  }
}
