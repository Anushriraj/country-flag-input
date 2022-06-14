
## Getting Started
npm s-flag-input provides the country flag dropdown along with country code and country name. Based on the default region which is given as the input in the application, the country list is displayed in the dropdown.

## Installation
Install npm s-flag-input from npm:

```bash
npm i s-flag-input
```

Add wanted package to NgModule imports:

```bash
import { SCountryFlagInputModule } from 's-flag-input';
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
| defaultCountry     | Object       | India | Flag should on loading the component |
| showFlags | Boolean | false | If it is set to true, the dropdown values are shown |
| countriesDataList | array | - | It contains the list of countries List |
| flagComponentForm | FormGroup | - | It contains the formgroup and validation of phone number input |
| country | array | - | It contains the list of filtered countries List based on the default region input |


## Methods

| Name          | Parameters | Description  |
| ------------- | -----------| ------------ |
| flagdata |   event         | It returns the selected value of flag data |
| phoneNumberInput |   event         | It returns the given phone number input |
| defaultRegion | string | It is input of default region which is given in the application. |

