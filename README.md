
## Getting Started
npm s-flag-input provides the country flag dropdown along with country code and country name.

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


## Methods

| Name          | Parameters | Description  |
| ------------- | -----------| ------------ |
| flagdata |   event         | It returns the selected value of flag data |
| phoneNumberInput |   event         | It returns the given phone number input |

