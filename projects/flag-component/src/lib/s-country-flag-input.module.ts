import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SCountryFlagInputComponent } from './s-country-flag-input.component';



@NgModule({
  declarations: [
    SCountryFlagInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SCountryFlagInputComponent
  ]
})
export class SCountryFlagInputModule { }
