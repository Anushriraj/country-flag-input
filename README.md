
## Getting Started
npm s-flag-input provides the country flag dropdown along with country code and country name.

## Installation
Install npm s-flag-input from npm:

```bash
npm i s-flag-input
```

Add wanted package to NgModule imports:

```bash
import { SCountryFlagInputModule } from 'ngx-bootstrap/tooltip';
```

```bash
@NgModule({
  ...
  imports: [SCountryFlagInputModule,...]
  ...
})
```

Add component to your page:

```bash
<s-country-flag-input></s-country-flag-input> 
```

## [Installation in local](https://github.com/anushri-sfw/country-flag-input/wiki/Package-Installation---Local)

## Properties

| Name          | Type          | Default | Description  |
| ------------- | ------------- | ------------- | ------------- |
| showFlags     | Boolean       | false | If the showFlags is true, the dropdown flag data is displayed |
| countriesData | any           | null | It contains the data of JSON file  |
| countryFullDetail  | Object  | Indian flag and country code is set as default  | The data of selected flag is set as a value for this property.  |
| flagdata  | any  | null  | It is the event emitter, which the emits the output value of selected flag data |

## Methods

| Name          | Parameters | Description  |
| ------------- | -----------| ------------ |
| onClickFlag   |     -      | On clicking the flag dropdown, the onClickFlag function is triggered and showflags is set to true. |
| getCountryDetails |   event         | When the value is selected from the dropdown, using the event the selected flag data is set as the value of countryFullDetail|

## Events

| Name          | Parameters | Description  |
| ------------- | -----------| ------------ |
| onClick  |     -      | Callback to trigger the function when the dropdown is clicked |