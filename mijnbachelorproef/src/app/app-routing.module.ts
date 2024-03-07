import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AdminRoutingModule } from "./user/admin/admin-routing.module";
import {CoachRoutingModule} from "./user/coach/coach-routing.module";
import {StudentRoutingModule} from "./user/student/student-routing.module";
import {MentorRoutingModule} from "./user/mentor/mentor-routing.module";
import {HomeComponent} from "./layout/body/home/home.component";

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
  {
        path: 'admin',
        loadChildren: () => AdminRoutingModule,
        canActivateChild: [AuthGuard]
  },
  {
      path: 'mentor',
      loadChildren: () => MentorRoutingModule
  },
  {
      path: 'coach',
      loadChildren: () => CoachRoutingModule
  },
  {
      path: 'student',
      loadChildren: () => StudentRoutingModule
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
