import { Component, OnInit } from '@angular/core';
import {Organisation} from "../../../shared/models/organisation";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {OrganisationService} from "../../../shared/services/organisation.service";
import {Location} from "@angular/common";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {errors} from "jose";

@Component({
  selector: 'app-mentor-organisation-form',
  templateUrl: './organisation-form.component.html',
  styleUrl: './organisation-form.component.css'
})
export class MentorOrganisationFormComponent implements OnInit{

  // local variables
  organisationForm: FormGroup = new FormGroup({});
  organisations: Organisation[] = [];
  organisationsSubscription: Subscription = new Subscription();
  takenOrganisationNames: string[] = [];

  organisationId: number = 0;
  organisation: Organisation = {
    organisationId: 0,
    name: '',
    address: '',
    postalCode: '',
    city: '',
    phone: '',
    email: '',
    url: '',
    contact: ''
  };

  isSubmitted: boolean = false;
  errorMessage: string = '';

  // subscriptions
  organisationSubscription: Subscription = new Subscription();
  postOrganisationSubscription: Subscription = new Subscription();
  putOrganisationSubscription: Subscription = new Subscription();

  constructor(
      private router: Router,
      private organisationService: OrganisationService,
      private location: Location
  ) {}

  ngOnInit(): void {
    this.organisationForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
    });
    this.getTakenOrganisationNames();
  }

  getTakenOrganisationNames() {
    this.organisationsSubscription = this.organisationService
        .getOrganisations()
        .subscribe((result: Organisation[]) => (this.organisations = result))
    this.takenOrganisationNames = this.organisations.map(organisation => organisation.name);
  }

  onSubmit() {
    console.log(this.organisationForm);

  }
  goBack() {
    this.location.back();
  }


  protected readonly errors = errors;
}
