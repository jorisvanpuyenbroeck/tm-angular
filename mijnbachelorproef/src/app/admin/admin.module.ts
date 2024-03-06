import { NgModule } from '@angular/core';
import { SharedModule } from '../layout/shared.module';
import {AdminTopicListComponent} from "./topic/topic-list/topic-list.component";
import {AdminTopicFormComponent} from "./topic/topic-form/topic-form.component";
import {AdminProposalListComponent} from "./proposal/proposal-list/proposal-list.component";
import {AdminProposalFormComponent} from "./proposal/proposal-form/proposal-form.component";
import {CommonModule} from "@angular/common";
import {AdminOrganisationFormComponent} from "./organisation/organisation-form/organisation-form.component";
import {AdminOrganisationListComponent} from "./organisation/organisation-list/organisation-list.component";
import {AdminProjectFormComponent} from "./project/project-form/project-form.component";
import {AdminProjectListComponent} from "./project/project-list/project-list.component";

@NgModule({
  declarations: [
    AdminTopicListComponent,
    AdminTopicFormComponent,
    AdminProposalListComponent,
    AdminProposalFormComponent,
    AdminOrganisationFormComponent,
    AdminOrganisationListComponent,
    AdminProjectFormComponent,
    AdminProjectListComponent
  ],
  imports: [SharedModule],
  exports: [
    AdminTopicListComponent,
    AdminTopicFormComponent,
    AdminProposalListComponent,
    AdminProposalFormComponent,
    AdminOrganisationFormComponent,
    AdminOrganisationListComponent,
    AdminProjectFormComponent,
    AdminProjectListComponent
  ],
})
export class AdminModule {}
