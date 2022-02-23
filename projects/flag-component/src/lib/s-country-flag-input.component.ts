import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as countries from '../assets/data.json';

@Component({
  selector: 's-country-flag-input',
  templateUrl: './s-country-flag-input.component.html',
  styleUrls: ['./s-country-flag-input.component.css'],
})
export class SCountryFlagInputComponent implements OnInit {
  showFlags = false;
  countriesData: any = (countries as any).default;
  defaultCountry: any = {
    countryName: 'India',
    countryCode: '+91',
    flag: 'https://cdn.countryflags.com/thumbs/india/flag-400.png',
  };
  @Output() flagdata = new EventEmitter();
  flagComponentForm!: FormGroup;
  @Output() private phoneNumberInput = new EventEmitter<any>();
  isNotValid = false;
  isValid = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.flagComponentForm = this._formBuilder.group({
      phonenumber: new FormControl(''),
    });
    this.flagComponentForm.controls['phonenumber'].setValidators([
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      Validators.minLength(5),
    ]);
    
  }
  
  onClickFlag() {
    this.showFlags = true;
  }

  getCountryDetails(data: any) {
    this.flagdata.emit({ value: data });
    this.showFlags = false;
    this.defaultCountry = data;
  }

  ngDoCheck() {
    if (this.flagComponentForm.controls['phonenumber'].value.length >= 5) {
      this.phoneNumberInput.emit(this.flagComponentForm.controls['phonenumber']);
      this.isNotValid = false;
      this.isValid = true;
    } else {
      this.isNotValid = true;
      this.isValid = false;
    }
  }
}
