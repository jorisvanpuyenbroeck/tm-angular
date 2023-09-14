import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserTopicListComponent } from './user/topic/topic-list/topic-list.component';
import { AdminTopicListComponent } from './admin/topic/topic-list/topic-list.component';
import { AdminTopicFormComponent } from './admin/topic/topic-form/topic-form.component';
import { UserProposalListComponent } from './user/proposal/proposal-list/proposal-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topics', component: UserTopicListComponent },
  { path: 'proposals', component: UserProposalListComponent },
  { path: 'admin/topic', component: AdminTopicListComponent },
  { path: 'admin/topic/form', component: AdminTopicFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
