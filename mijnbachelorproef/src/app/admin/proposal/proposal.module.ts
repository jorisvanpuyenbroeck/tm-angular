import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AdminProposalListComponent } from './proposal-list/proposal-list.component';
import { ProposalService } from './proposal.service';
import { AdminProposalFormComponent } from './proposal-form/proposal-form.component';
import { SecurityInterceptor } from '../../security/security.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AdminProposalListComponent, AdminProposalFormComponent],
  imports: [SharedModule],
  exports: [AdminProposalListComponent, AdminProposalFormComponent],
  providers: [
    ProposalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true,
    },
  ],
})
export class ProposalModule {}
