import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTopicListComponent } from './topic/topic-list/topic-list.component';
import { AdminTopicFormComponent } from './topic/topic-form/topic-form.component';
import { AdminProposalListComponent } from './proposal/proposal-list/proposal-list.component';
import { AdminProposalFormComponent } from './proposal/proposal-form/proposal-form.component';
import { AdminOrganisationFormComponent } from "./organisation/organisation-form/organisation-form.component";
import { AdminOrganisationListComponent } from "./organisation/organisation-list/organisation-list.component";
import { AdminProjectListComponent } from "./project/project-list/project-list.component";

const routes: Routes = [
  { path: 'topic', component: AdminTopicListComponent },
  { path: 'topic/form', component: AdminTopicFormComponent },
  { path: 'proposal', component: AdminProposalListComponent },
  { path: 'proposal/form', component: AdminProposalFormComponent },
  { path: 'organisation', component: AdminOrganisationListComponent },
  { path: 'organisation/form', component: AdminOrganisationFormComponent },
  { path: 'project', component: AdminProjectListComponent },
  { path: 'project/form', component: AdminProjectListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
