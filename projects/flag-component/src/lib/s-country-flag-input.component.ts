import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as countries from '../assets/data.json';

@Component({
  selector: 's-country-flag-input',
  templateUrl: './s-country-flag-input.component.html',
  styleUrls: ['./s-country-flag-input.component.css'],
})
export class SCountryFlagInputComponent implements OnInit {
  showFlags = false;
  countriesData: any = (countries as any).default;
  countryFullDetail: any = {
    countryName: 'India',
    countryCode: '+91',
    flag: 'https://cdn.countryflags.com/thumbs/india/flag-400.png',
  };
  @Output() flagdata = new EventEmitter();
  ngOnInit() {}
  onClickFlag() {
    this.showFlags = true;
  }

  getCountryDetails(data: any) {
    this.flagdata.emit({ value: data });
    this.showFlags = false;
    this.countryFullDetail = data;
  }
}
