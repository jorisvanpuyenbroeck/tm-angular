import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserStore} from "../../../store/user-store";
import {first} from "rxjs";
import {UserService} from "../../../user/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  user$;

  constructor(private userStore: UserStore, private userService: UserService) {
    this.user$ = this.userStore.state$;
    this.user$.subscribe(user => {
      if (user && user.sub) {
        this.userService.userExists(user.sub).subscribe(exists => {
          console.log('student exists:', exists)
          if (!exists) {
            this.userService.createUser(user).subscribe();
          }
        });
      }
    });
  }
}
