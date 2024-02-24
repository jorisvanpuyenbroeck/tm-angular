import { Component, OnInit } from '@angular/core';
import { Organisation } from '../../../models/organisation';
import { OrganisationService } from '../organisation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-organisation-list',
  templateUrl: './organisation-list.component.html',
  styleUrls: ['./organisation-list.component.css'],
})
export class UserOrganisationListComponent implements OnInit {
  color: String = 'primary';
  organisations: Organisation[] = [];
  organisations$: Subscription = new Subscription();

  constructor(private organisationService: OrganisationService) {}

  ngOnInit(): void {
    this.getOrganisations();
  }

  ngOnDestroy(): void {
    this.organisations$.unsubscribe();
  }

  getOrganisations() {
    this.organisations$ = this.organisationService
      .getOrganisations()
      .subscribe((result) => (this.organisations = result));
  }

  openOrganisation(organisation: Organisation) {
    console.log('get organisation');
  }
}
