import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTopicListComponent } from './topic/topic-list/topic-list.component';
import { AdminTopicFormComponent } from './topic/topic-form/topic-form.component';
import { AdminProposalListComponent } from './proposal/proposal-list/proposal-list.component';
import { AdminProposalFormComponent } from './proposal/proposal-form/proposal-form.component';

const routes: Routes = [
  { path: 'topic', component: AdminTopicListComponent },
  { path: 'topic/form', component: AdminTopicFormComponent },
  { path: 'proposal', component: AdminProposalListComponent },
  { path: 'proposal/form', component: AdminProposalFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
