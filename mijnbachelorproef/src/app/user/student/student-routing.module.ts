import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProposalListComponent } from './proposal/proposal-list/proposal-list.component';
import { StudentOrganisationListComponent } from "./organisation/organisation-list/organisation-list.component";
import { StudentTopicListComponent} from "./topic/topic-list/topic-list.component";
import {StudentHomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: StudentHomeComponent},
  { path: 'topic', component: StudentTopicListComponent },
  { path: 'proposal', component: StudentProposalListComponent },
  { path: 'organisation', component: StudentOrganisationListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
