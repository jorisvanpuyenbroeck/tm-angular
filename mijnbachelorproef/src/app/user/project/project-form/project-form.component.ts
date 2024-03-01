import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from '../../../models/project';
import { ProjectService } from '../project.service';
import { TopicService } from '../../topic/topic.service';
import { Topic } from '../../../models/topic';
import { Location } from '@angular/common';
import {Proposal} from "../../../models/proposal";
import {Organisation} from "../../../models/organisation";
import {User} from "../../../models/user";
import {UserService} from "../../../security/user.service";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class UserProjectFormComponent implements OnInit, OnDestroy {
  isAdd: boolean = false;
  isEdit: boolean = false;
  projectId: number = 0;
  origins: string[] = ['student', 'docent', 'werkveld'];
  allTopics: Topic[] = [];
  canProposeProject: boolean = false;

  project: Project = {
    projectId: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    title: '',
    description: '',
    stage: '',
    active: false,
    supported: false,
    reviewed: false,
    approved: false,
    feedback: '',
    studentId: 0,
    coachId: 0,
    organisationId: 0,
    proposalId: 0,
    student: {} as User,
    coach: {} as User,
    organisation: {} as Organisation,
    proposal: {} as Proposal,
    topics: [],
  };


  isSubmitted: boolean = false;
  errorMessage: string = '';

  project$: Subscription = new Subscription();
  postProject$: Subscription = new Subscription();
  putProject$: Subscription = new Subscription();
  allTopics$: Subscription = new Subscription();

  constructor(
      private router: Router,
      private projectService: ProjectService,
      private topicService: TopicService,
      private location: Location,
      public  userService: UserService
  ) {}

  ngOnInit(): void {
    this.isAdd =
        this.router.getCurrentNavigation()?.extras.state?.['mode'] === 'add';
    this.isEdit =
        this.router.getCurrentNavigation()?.extras.state?.['mode'] === 'edit';
    this.projectId = +this.router.getCurrentNavigation()?.extras.state?.['id'];

    if (!this.isAdd && !this.isEdit) {
      this.isAdd = true;
    }

    if (this.projectId != null && this.projectId > 0) {
      this.project$ = this.projectService
          .getProjectById(this.projectId)
          .subscribe((result) => (this.project = result));

      // console.log(this.project);
    }

    this.allTopics$ = this.topicService.getTopics().subscribe((result) => {
      this.allTopics = result.map((t) => t);
    });

    this.canProposeProject = this.userService.canProposeProject;
  }

  ngOnDestroy(): void {
    this.project$.unsubscribe();
    this.postProject$.unsubscribe();
    this.putProject$.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postProject$ = this.projectService
          .postProject(this.project)
          .subscribe({
            next: (v) => this.router.navigateByUrl('/admin/project'),
            error: (e) => (this.errorMessage = e.message),
          });
    }
    if (this.isEdit) {
      // console.log(this.project);
      this.putProject$ = this.projectService
          .putProject(this.project)
          .subscribe({
            next: (v) => this.router.navigateByUrl('/admin/project'),
            error: (e) => (this.errorMessage = e.message),
          });
      //console.log(this.project);
    }
  }

  goBack() {
    this.location.back();
  }
}
