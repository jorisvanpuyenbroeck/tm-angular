import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AdminProposalListComponent } from './proposal-list/proposal-list.component';
import { ProposalService } from './proposal.service';
import { AdminProposalFormComponent } from './proposal-form/proposal-form.component';

@NgModule({
  declarations: [AdminProposalListComponent, AdminProposalFormComponent],
  imports: [SharedModule],
  exports: [AdminProposalListComponent, AdminProposalFormComponent],
  providers: [ProposalService],
})
export class ProposalModule {}
