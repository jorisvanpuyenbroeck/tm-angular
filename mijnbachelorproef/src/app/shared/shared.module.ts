import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule],
  exports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
