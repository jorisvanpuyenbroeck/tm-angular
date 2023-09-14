import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TopicModule } from './topic/topic.module';
import { ProposalModule } from './proposal/proposal.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, TopicModule, ProposalModule],
  exports: [TopicModule, ProposalModule],
})
export class AdminModule {}
