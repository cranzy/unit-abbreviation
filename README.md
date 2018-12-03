# unit-abbreviation
A npm library that converts units or terms to their respective abbreviations

## Features

- Convert the most common units for Height, Length, Distance, Range, Depth, Weight, Volume, Capacity, Temperature, and Speed.
- Parses and converts the plural form of the unit to its respective abbreviation if it exists in our data.
- Passing capitalized unit returns its respective abbreviation also capitalized.
## Prerequisites 

You need npm installed.
```bash
$ npm install npm@latest -g
```

## Installing

Using npm:

```bash
$ npm install unit-abbreviation
```

## Example

```js
const abbr = require('unit-abbreviation');

// Convert the unit 'kilometer' to 'km'
abbr('kilometer');

// Convert the unit 'degrees celsius' to 'C'
abbr('degrees celsius');

// Convert the unit 'Kilogram' to 'Kg'
abbr('kilogram');

// Conver the unit 'meters' to 'm'
abbr('meters');
```

## Supported conversions

* Height/Length/Distance/Range/Depth
  * centimeter
  * feet
  * foot
  * inch
  * inches
  * kilometer 
  * meter
  * mile
  * millimeter
  * yard

* Weight
  * kilogram
  * gram
  * milligram
  * ounce
  * pound

* Volume/C
  * cup 
  * gallon
  * liter
  * milliliter:
  * pint
  * quart
  * teaspoon

* Temperature
  * calorie
  * celsius
  * 'degrees celsius'
  * 'degrees centigrade'
  * 'degrees fahrenheit'
  * fahrenheit
  * kilocalorie

* Speed
  * knots
  * 'kilometers per hour'
  * 'miles per hour'
  * 'nautical miles per hour'

## Thanks
Robert Dimitrov - https://github.com/robbdimitrov

## License
MIT
