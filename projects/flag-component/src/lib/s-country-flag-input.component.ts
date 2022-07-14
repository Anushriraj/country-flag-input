import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
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
    mobile_format: "9999-999999"
  };
  @Output() flagdata = new EventEmitter();
  flagComponentForm!: UntypedFormGroup;
  @Output() private phoneNumberInput = new EventEmitter<any>();

  constructor(private _formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.flagComponentForm = this._formBuilder.group({
      phonenumber: new UntypedFormControl(''),
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
      this.phoneNumberInput.emit(this.flagComponentForm.controls['phonenumber']);
  }

  getMobileNumber(event: KeyboardEvent) {
    return (
      (event.code.includes('Digit') && event.shiftKey === false) ||
      event.code.includes('Numpad1') ||
      event.code.includes('Numpad2') ||
      event.code.includes('Numpad3') ||
      event.code.includes('Numpad4') ||
      event.code.includes('Numpad5') ||
      event.code.includes('Numpad6') ||
      event.code.includes('Numpad7') ||
      event.code.includes('Numpad8') ||
      event.code.includes('Numpad9')
    );
  }
}
