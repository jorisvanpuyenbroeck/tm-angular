import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserTopicListComponent } from './user/topic/topic-list/topic-list.component';
import { AdminTopicListComponent } from './admin/topic/topic-list/topic-list.component';
import { AdminTopicFormComponent } from './admin/topic/topic-form/topic-form.component';
import { UserProposalListComponent } from './user/proposal/proposal-list/proposal-list.component';
import { AdminProposalListComponent } from './admin/proposal/proposal-list/proposal-list.component';
import { AdminProposalFormComponent } from './admin/proposal/proposal-form/proposal-form.component';
import { SecurityComponent } from './security/security/security.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topics', component: UserTopicListComponent },
  { path: 'proposals', component: UserProposalListComponent },
  /*  { path: 'admin/topic', component: AdminTopicListComponent },
    { path: 'admin/topic/form', component: AdminTopicFormComponent },
    { path: 'admin/proposal', component: AdminProposalListComponent },
    { path: 'admin/proposal/form', component: AdminProposalFormComponent },*/
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  { path: 'login', component: SecurityComponent },
  { path: 'register', component: SecurityComponent },
  { path: 'logout', component: SecurityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
