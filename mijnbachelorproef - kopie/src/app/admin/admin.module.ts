import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {AdminTopicListComponent} from "./topic/topic-list/topic-list.component";
import {AdminTopicFormComponent} from "./topic/topic-form/topic-form.component";
import {AdminProposalListComponent} from "./proposal/proposal-list/proposal-list.component";
import {AdminProposalFormComponent} from "./proposal/proposal-form/proposal-form.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AdminTopicListComponent, AdminTopicFormComponent, AdminProposalListComponent, AdminProposalFormComponent],
  imports: [SharedModule],
  exports: [AdminTopicListComponent, AdminTopicFormComponent, AdminProposalListComponent, AdminProposalFormComponent],
})
export class AdminModule {}
