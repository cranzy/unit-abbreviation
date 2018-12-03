const assert = require('assert'); 
const abbr = require('../index');

describe('Lower case unit conversions', function() {
  describe('Abbreviation conversion of "kilometer"', function() {
    it('should return "km" when the unit passed is kilometer', function() {
      assert.equal(abbr('kilometer'), 'km');
    });
  });

  describe('Abbreviation conversion of "yard"', function() {
    it('should return "yd" when the unit passed is "yard', function() {
      assert.equal(abbr('yard'), 'yd');
    });
  });

  describe('Abbreviation conversion of "kilogram"', function() {
    it('should return "kg" when the unit passed is "kilogram', function() {
      assert.equal(abbr('kilogram'), 'kg');
    });
  });

  describe('Abbreviation conversion of "milliliter"', function() {
    it('should return "ml" when the unit passed is "milliliter', function() {
      assert.equal(abbr('milliliter'), 'ml');
    });
  });

  describe('Abbreviation conversion of "degrees celsius"', function() {
    it('should return "C" when the unit passed is "degrees celsius', function() {
      assert.equal(abbr('degrees celsius'), 'C');
    });
  });

  describe('Abbreviation conversion of "degrees centigrade"', function() {
    it('should return "C" when the unit passed is "degrees centigrade', function() {
      assert.equal(abbr('degrees centigrade'), 'C');
    });
  });

  describe('Abbreviation conversion of "kilocalorie"', function() {
    it('should return "Cal" when the unit passed is "kilocalorie', function() {
      assert.equal(abbr('kilocalorie'), 'Cal');
    });
  });

  describe('Abbreviation conversion of "nautical miles per hour"', function() {
    it('should return "kn" when the unit passed is "nautical miles per hour', function() {
      assert.equal(abbr('nautical miles per hour'), 'kn');
    });
  });
});

describe('Plural unit conversions', function() {
  describe('Abbreviation conversion of "kilometers"', function() {
    it('should return "km" when the unit passed is kilometers', function() {
      assert.equal(abbr('kilometers'), 'km');
    });
  });

  describe('Abbreviation conversion of "yards"', function() {
    it('should return "yd" when the unit passed is "yards', function() {
      assert.equal(abbr('yards'), 'yd');
    });
  });

  describe('Abbreviation conversion of "kilograms"', function() {
    it('should return "kg" when the unit passed is "kilograms', function() {
      assert.equal(abbr('kilograms'), 'kg');
    });
  });

  describe('Abbreviation conversion of "milliliters"', function() {
    it('should return "ml" when the unit passed is "milliliters', function() {
      assert.equal(abbr('milliliters'), 'ml');
    });
  });

  describe('Abbreviation conversion of "degrees centigrades"', function() {
    it('should return "C" when the unit passed is "degrees centigrades', function() {
      assert.equal(abbr('degrees centigrades'), 'C');
    });
  });

  describe('Abbreviation conversion of "kilocalories"', function() {
    it('should return "Cal" when the unit passed is "kilocalories', function() {
      assert.equal(abbr('kilocalories'), 'Cal');
    });
  });

  describe('Abbreviation conversion of "nautical miles per hours"', function() {
    it('should return "kn" when the unit passed is "nautical miles per hours', function() {
      assert.equal(abbr('nautical miles per hours'), 'kn');
    });
  });
});


describe('First capital letter unit conversions', function() {
    describe('Abbreviation conversion of "Kilometer"', function() {
      it('should return "Km" when the unit passed is "Kilometer"', function() {
        assert.equal(abbr('Kilometer'), 'Km');
      });
    });

    describe('Abbreviation conversion of "Degrees fahrenheit"', function() {
      it('should return "F" when the unit passed is "Degrees fahrenheit"', function() {
        assert.equal(abbr('Degrees fahrenheit'), 'F');
      });
    });
});
