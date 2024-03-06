import { NgModule } from '@angular/core';
import { SharedModule } from '../layout/shared.module';
import { UserProposalListComponent } from './proposal/proposal-list/proposal-list.component';
import { UserTopicListComponent } from './topic/topic-list/topic-list.component';
import { UserOrganisationListComponent } from './organisation/organisation-list/organisation-list.component';
import {UserProjectFormComponent} from "./project/project-form/project-form.component";
import {UserProposalCardComponent} from "./proposal/proposal-card/proposal-card.component";

@NgModule({
  declarations: [UserProposalListComponent, UserTopicListComponent, UserOrganisationListComponent, UserProjectFormComponent, UserProposalCardComponent],
  imports: [SharedModule],
  exports: [UserProposalListComponent, UserTopicListComponent],
})
export class UserModule {}
