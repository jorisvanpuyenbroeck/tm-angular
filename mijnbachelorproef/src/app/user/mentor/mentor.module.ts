import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MentorHomeComponent} from "./home/home.component";



@NgModule({
  declarations: [MentorHomeComponent],
  imports: [
    CommonModule
  ],
    exports: [MentorHomeComponent]
})
export class MentorModule { }
