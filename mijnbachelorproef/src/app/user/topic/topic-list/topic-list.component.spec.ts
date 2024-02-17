import { ComponentFixture, TestBed } from '@angular/core/testing';

import {UserTopicListComponent } from './topic-list.component';

describe('TopicComponent', () => {
  let component: UserTopicListComponent;
  let fixture: ComponentFixture<UserTopicListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTopicListComponent],
    });
    fixture = TestBed.createComponent(UserTopicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
