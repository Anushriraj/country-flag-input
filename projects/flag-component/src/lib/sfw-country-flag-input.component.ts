import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as countries from '../assets/data.json';

@Component({
  selector: 'sfw-country-flag-input',
  templateUrl: './sfw-country-flag-input.component.html',
  styleUrls: ['./sfw-country-flag-input.component.css'],
})
export class SfwCountryFlagInputComponent implements OnInit {
  @Input() name!: string;
  showFlags = false;
  currentURL = window.location.origin;
  countriesData: any = (countries as any).default;
  countriesDatas: any;
  ipaddress: any;
  country: any;
  currentCountryName: any;
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
