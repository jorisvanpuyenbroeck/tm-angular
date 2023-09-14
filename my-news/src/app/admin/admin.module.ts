import { NgModule } from '@angular/core';
import { CategoryModule } from './category/category.module';
import { StatusModule } from './status/status.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CategoryModule, StatusModule],
  exports: [CategoryModule, StatusModule],
})
export class AdminModule {}
