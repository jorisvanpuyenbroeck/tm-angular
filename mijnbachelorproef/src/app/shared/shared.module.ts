import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from "../store/store.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TopicService} from "./services/topic.service";
import {OrganisationService} from "./services/organisation.service";
import {ProposalService} from "./services/proposal.service";
import {ProjectService} from "./services/project.service";

@NgModule({
  imports: [
    StoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    StoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
      TopicService,
      OrganisationService,
      ProposalService,
      ProjectService
  ],
})
export class SharedModule {}
