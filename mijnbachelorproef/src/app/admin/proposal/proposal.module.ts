import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { ProposalService } from './proposal.service';

@NgModule({
  declarations: [ProposalListComponent],
  imports: [SharedModule],
  exports: [ProposalListComponent],
  providers: [ProposalService],
})
export class ProposalModule {}
