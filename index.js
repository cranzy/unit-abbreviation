'use strict';

/** Units/Terms data */
const Units = {

    // Height/Length/Distance/Range/Depth
    centimeter: 'cm',
    feet: 'ft',
    foot: 'ft',
    inch: 'in',
    inches: 'in',
    kilometer: 'km',
    meter: 'm',
    mile: 'mi',
    millimeter: 'mm',
    yard: 'yd',

    // Weight
    kilogram: 'kg',
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

/**
 * If the unit is plural convert it to singular form
 * @param {string} unit - The unit we are obtaining the abbreviation of
 * @returns {string} - The converted unit to singular form
 */
function toSingular(unit) {
    if (unit.endsWith('s')) {
        return unit.slice(0, -1);
    }
    return unit;
}

/**
 * Check if the original unit was capitalize and capitalize the first letter of the abbreviation
 * @param {string} unit - The unit we are obtaining the abbreviation of
 * @param {string} abbr - The abbreviation
 * @returns {string} - First letter capitalized of the abbreviation
 */
function capitalFirstLetter(unit, abbr) {
    if (unit.charAt(0) === unit.charAt(0).toUpperCase()) {
        return abbr.charAt(0).toUpperCase() + abbr.substr(1);
    }
    return abbr;
}

/**
 * Tries to retrieve the abbreviation
 * @param {string} unit - The unit we are retrieving the abbr. for
 * @returns {string} - The abbreviation for the given unit
 */
function getAbbr(unit) {
    let abbr = Units[(unit.toLowerCase())];
    if(typeof abbr === 'undefined') {
        abbr = Units[toSingular((unit.toLowerCase()))];
    }
    return abbr;
}

/**
 * The public abbreviation conversion method
 * @param {string} unit - The unit we are obtaining the abbreviation of
 * @returns {string} - The abbreviation of the unit if it exists in our Units data
 */
function toAbbreviation(unit) {
    if(unit) {
        let abbr = getAbbr(unit);
        if(typeof abbr !== 'undefined') {
            return capitalFirstLetter(unit, abbr);
        }
        return `No abbreviation found for ${unit}.`;
    }
    return 'No unit passed';
}

module.exports = toAbbreviation;

// Allow use of default import syntax in TypeScript
module.exports.default = toAbbreviation;