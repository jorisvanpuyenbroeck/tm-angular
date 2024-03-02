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
import {ProposalService} from "../../proposal/proposal.service";
import {OrganisationService} from "../../organisation/organisation.service";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class UserProjectFormComponent implements OnInit, OnDestroy {

  //locals
  isAdd: boolean = false;
  isEdit: boolean = false;
  user: User = {} as User;
  projectId: number = 0;
  origins: string[] = ['student', 'docent', 'werkveld'];
  allTopics: Topic[] = [];
  topic: Topic = {} as Topic;
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

  // Subscriptions

  projectSubscription: Subscription = new Subscription();
  postProjectSubscription: Subscription = new Subscription();
  putProjectSubscription: Subscription = new Subscription();
  allTopicsSubscription: Subscription = new Subscription();
  userSubscription: Subscription = new Subscription();
  topicSubscription: Subscription = new Subscription();
  proposalSubscription: Subscription = new Subscription();
  organisationSubscription: Subscription = new Subscription();

  constructor(
      private router: Router,
      private projectService: ProjectService,
      private topicService: TopicService,
      private location: Location,
      private userService: UserService,
      private proposalService: ProposalService,
      private organisationService: OrganisationService
  ) {}

  ngOnInit(): void {
    this.isAdd =
        this.router.getCurrentNavigation()?.extras.state?.['mode'] === 'add';
    this.isEdit =
        this.router.getCurrentNavigation()?.extras.state?.['mode'] === 'edit';
    this.projectId = +this.router.getCurrentNavigation()?.extras.state?.['id'];
    this.userSubscription = this.userService.userStore$.subscribe(user => {
      this.project.student = user;
    });
    this.proposalSubscription = this.proposalService.getProposalById(this.project.student.application.proposals[0]).subscribe((result) => {
        this.project.proposal = result;
    });
    this.organisationSubscription = this.organisationService.getOrganisationById(this.project.student.application.organisations[0]).subscribe((result) => {
        this.project.organisation = result;
    });
    this.project.student.application.topics.forEach((topicId) => {
      this.topicSubscription = this.topicService.getTopicById(topicId).subscribe((result) => {
        this.project.topics = [...this.project.topics, result];
      });
    });

    if (!this.isAdd && !this.isEdit) {
      this.isAdd = true;
    }

    if (this.projectId != null && this.projectId > 0) {
      this.projectSubscription = this.projectService
          .getProjectById(this.projectId)
          .subscribe((result) => (this.project = result));
    }

    this.allTopicsSubscription = this.topicService.getTopics().subscribe((result) => {
      this.allTopics = result.map((t) => t);
    });

    this.canProposeProject = this.userService.canProposeProject;
  }

  ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
    this.postProjectSubscription.unsubscribe();
    this.putProjectSubscription.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postProjectSubscription = this.projectService
          .postProject(this.project)
          .subscribe({
            next: (v) => this.router.navigateByUrl('/admin/project'),
            error: (e) => (this.errorMessage = e.message),
          });
    }
    if (this.isEdit) {
      // console.log(this.project);
      this.putProjectSubscription = this.projectService
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
