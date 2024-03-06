import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/body/home/home.component';
import { StudentTopicListComponent } from './user/student/topic/topic-list/topic-list.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { AdminRoutingModule } from "./user/admin/admin-routing.module";
import {StudentProposalListComponent} from "./user/student/proposal/proposal-list/proposal-list.component";
import {StudentOrganisationListComponent} from "./user/student/organisation/organisation-list/organisation-list.component";
import {StudentProjectFormComponent} from "./user/student/project/project-form/project-form.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topics', component: StudentTopicListComponent},
  { path: 'proposals', component: StudentProposalListComponent},
  { path: 'organisations', component: StudentOrganisationListComponent},
  { path: 'project', component: StudentProjectFormComponent},
  {
    path: 'admin',
    loadChildren: () => AdminRoutingModule,
    canActivateChild: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
