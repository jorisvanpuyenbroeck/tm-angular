import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserTopicListComponent } from './user/topic/topic-list/topic-list.component';
import { UserProposalListComponent } from './user/proposal/proposal-list/proposal-list.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { AdminRoutingModule } from "./admin/admin-routing.module";
import {UserOrganisationListComponent} from "./user/organisation/organisation-list/organisation-list.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topics', component: UserTopicListComponent},
  { path: 'proposals', component: UserProposalListComponent},
  { path: 'organisations', component: UserOrganisationListComponent},
  {
    path: 'admin',
    loadChildren: () => AdminRoutingModule,
    canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
