import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserTopicListComponent } from './user/topic/topic-list/topic-list.component';
import { UserProposalListComponent } from './user/proposal/proposal-list/proposal-list.component';
import { SecurityComponent } from './security/security/security.component';
import { AuthGuard } from './security/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topics', component: UserTopicListComponent },
  { path: 'proposals', component: UserProposalListComponent },
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
