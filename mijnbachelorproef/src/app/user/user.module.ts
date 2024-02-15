import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserProposalListComponent } from './proposal/proposal-list/proposal-list.component';
import { UserTopicListComponent } from './topic/topic-list/topic-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {ProposalService} from "./proposal/proposal.service";
import {TopicService} from "./topic/topic.service";

@NgModule({
  declarations: [UserProposalListComponent, UserTopicListComponent],
  imports: [SharedModule, MatButtonModule, MatCardModule],
  exports: [UserProposalListComponent, UserTopicListComponent],
})
export class UserModule {}
