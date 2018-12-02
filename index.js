'use strict';

// Units/Terms data
const Units = {

    // Height/Length/Distance/Range/Depth
    centimeter: 'cm',
    feet: 'ft',
    foot: 'ft',
    inch: 'in',
    kilometer: 'km',
    meter: 'm',
    mile: 'mi',
    millimeter: 'mm',
    yard: 'yd',

    // Weight
    kg: 'kg',
    gram: 'g',
    milligram: 'mg',
    ounce: 'oz',
    pound: 'lb',

    // Volume/Capacity 
    cup: 'c',
    gallon: 'gal',
    liter: 'l',
    milliliter: 'ml',
    pint: 'p',
    quart: 'qt',
    teaspoon: 'tsp',

    // Temperature
    calorie: 'cal',
    celsius: 'C',
    'degrees celsius': 'C',
    'degrees centigrade': 'C',
    'degrees fahrenheit': 'F',
    fahrenheit: 'F',
    kilocalorie: 'Cal',

    // Speed
    knots: 'kn',
    'kilometers per hour': 'kph',
    'miles per hour': 'mph',
    'nautical miles per hour': 'kn'
};

// If the unit is plural convert it to singular form
function toSingular(unit) {
    if(unit.endsWith('es')) {
        return unit.slice(0, -2);
    } else if (unit.endsWith('s')) {
        return unit.slice(0, -1);
    }
    return unit;
};

// Check if the original unit was capitalize and capitalize the first letter of the abbreviation
function capitalFirstLetter(unit, abbr) {
    return unit.charAt(0) === unit.charAt(0).toUpperCase() ? abbr.charAt(0).toUpperCase() : abbr;
};

// The public abbreviation conversion method
export function toAbbreviation(unit) {
    if(unit) {
        let abbr = getAbbr(toSingular(unit.toLowerCase()));
        if(typeof abbr !== 'undefined') {
            return capitalFirstLetter(unit, abbr);
        }
        return `No abbreviation found for ${unit}.`;
    }
    return 'No unit passed';
};
