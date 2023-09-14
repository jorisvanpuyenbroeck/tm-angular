import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AdminTopicListComponent } from './topic-list/topic-list.component';
import { TopicService } from './topic.service';
import { AdminTopicFormComponent } from './topic-form/topic-form.component';

@NgModule({
  declarations: [AdminTopicListComponent, AdminTopicFormComponent],
  imports: [SharedModule],
  exports: [AdminTopicListComponent, AdminTopicFormComponent],
  providers: [TopicService],
})
export class TopicModule {}
