import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AdminTopicListComponent } from './topic-list/topic-list.component';
import { TopicService } from './topic.service';
import { AdminTopicFormComponent } from './topic-form/topic-form.component';
import { SecurityInterceptor } from '../../security/security.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AdminTopicListComponent, AdminTopicFormComponent],
  imports: [SharedModule],
  exports: [AdminTopicListComponent, AdminTopicFormComponent],
  providers: [
    TopicService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true,
    },
  ],
})
export class TopicModule {}
