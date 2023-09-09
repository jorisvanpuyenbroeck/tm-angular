import { NgModule } from '@angular/core';
import { SecurityComponent } from './security/security.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SecurityComponent],
  imports: [SharedModule],
})
export class SecurityModule {}
