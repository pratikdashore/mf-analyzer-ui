import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfaMaterialModule } from '../shared/mfa-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MfaMaterialModule
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MfaMaterialModule]
})
export class SharedModule { }
