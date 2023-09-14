import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserProposalListComponent } from './proposal/proposal-list/proposal-list.component';
import { UserTopicListComponent } from './topic/topic-list/topic-list.component';

@NgModule({
  declarations: [UserProposalListComponent, UserTopicListComponent],
  imports: [SharedModule],
  exports: [UserProposalListComponent, UserTopicListComponent],
})
export class UserModule {}
