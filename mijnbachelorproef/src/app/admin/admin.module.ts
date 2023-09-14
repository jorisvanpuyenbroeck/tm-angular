import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TopicModule } from './topic/topic.module';
import { ProposalModule } from './proposal/proposal.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, AdminRoutingModule, TopicModule, ProposalModule],
  exports: [TopicModule, ProposalModule],
})
export class AdminModule {}
