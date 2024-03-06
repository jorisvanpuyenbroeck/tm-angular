import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoachHomeComponent} from "./home/home.component";



@NgModule({
  declarations: [CoachHomeComponent],
  imports: [
    CommonModule
  ],
    exports: [CoachHomeComponent]
})
export class CoachModule { }
