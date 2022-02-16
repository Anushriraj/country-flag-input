## Getting Started
npm s-flag-input provides the country flag dropdown along with country code and country name.

## Installation
Install npm s-flag-input from npm:

npm i s-flag-input


Add wanted package to NgModule imports:

import { SCountryFlagInputModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  ...
  imports: [SCountryFlagInputModule,...]
  ...
})

Add component to your page:

<s-country-flag-input></s-country-flag-input> 

## Properties

| Name          | Type          | Default | Description  |
| ------------- | ------------- | ------------- | ------------- |
| showFlags     | Boolean       | false | If the showFlags is true, the dropdown flag is shown |
| countriesData | any           | null | It contains the data of JSON file  |
| countryFullDetail  | Object  | Indian flag and country code is set as default  | The data of selected flag is set as a value for this property.  |
| flagdata  | any  | null  | It is the event emitter, which the emits the output value of selected flag data |

