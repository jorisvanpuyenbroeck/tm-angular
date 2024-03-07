import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CoachHomeComponent} from "./home/home.component";

const routes: Routes = [

  { path: '', component: CoachHomeComponent},

//    { path: 'proposal/form', component: CoachProposalFormComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachRoutingModule {}
