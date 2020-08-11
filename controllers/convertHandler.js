/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = (input) => {
    // Using regex find where the units begin in the user input
    const unitStartIndexs = input.search(/[a-zA-z]/);
    // Next create a variable to hold the input number
    let inputNumbers;
    // Due to the requrements for the tests with chai we need to be able to retun "invalid unit"
    // if no unit is present in the input.
    // This can be done with an if else where if unitStartIndex = -1 return "invalid unit"
    if (unitStartIndexs === -1) {
      inputNumbers = input;
      // if there is a unit present, we need to strip off the unit and leave only the numbers
      // to be converted
    } else {
      inputNumbers = input.substring(0, unitStartIndexs);
     console.log( inputNumbers, "should be a string of numbers")
    }
    // then a if check for a user story that states if a unit is present but no numbers
    // assume a number input of one (1)
    if (inputNumbers.length == 0) {
      inputNumbers = "1"; // this needs to be saved as a string to match how we grabed the input numbers above
    }
    // now a check to cover the user story where we will have a invaild double fraction as an input
    // remember at this point our inpitNumbers are a string
    if (inputNumbers.split(/\//).length > 2) return "invalid number";
    return inputNumbers
  };

  this.getUnit = (input) => {
    // much in the same way as before we will start with finding where the units start in the input
    // this time with a slight adjustment to account for spaces
    let startUnitIndexs = input.search(/[\sa-zA-Z]/);

    // now that we have the indexs we can pull out a substring containing the entire unit
    let units = input.substring(input.search(/[\sa-zA-Z]/), input.length);
    // next we build an array of the acceptable inputs --note these are FCC specific---
    let acceptableUnits = [
      "gal",
      "l",
      "mi",
      "km",
      "lbs",
      "kg",
      "GAL",
      "L",
      "MI",
      "KM",
      "LBS",
      "KG",
    ];
    // now we create an array of the acceptable output units determined by FCC
    let outputUnits = [
      "gal",
      "l",
      "mi",
      "km",
      "lbs",
      "kg",
      "gal",
      "l",
      "mi",
      "km",
      "lbs",
      "kg",
    ];

    // now lets build a check to see if our input is acceptable
    let acceptableInput = acceptableUnits.indexOf(units);

    if (acceptableInput >= 0) {
      return outputUnits[acceptableInput];
    } else {
      return "invalid unit";
    }
  };

  this.getReturnUnit = (initUnit) => {
    // this function us used to find the counterpoint for the input unit ex km is equavalent to mi
    let input = [
      "gal",
      "l",
      "mi",
      "km",
      "lbs",
      "kg",
      "GAL",
      "L",
      "MI",
      "KM",
      "LBS",
      "KG",
    ];
    let output = [
      "L",
      "gal",
      "km",
      "mi",
      "kg",
      "lbs",
      "L",
      "gal",
      "km",
      "mi",
      "kg",
      "lbs",
    ];

    // Now we will find the index of the initUnit in our input array,
    // and then return the corresponding unit in the output array:
    let inputIndex = input.indexOf(initUnit);
    // If inputIndex is >=0, then there's a match and we can return it...
    if (inputIndex >= 0) {
      return output[inputIndex];
    } else {
      return "invalid unit";
    }
  };

  this.spellOutUnit = (unit) => {
    // this function will take in the abbreviated unit and will convert it to the full word
    let input = [
      "gal",
      "l",
      "mi",
      "km",
      "lbs",
      "kg",
      "GAL",
      "L",
      "MI",
      "KM",
      "LBS",
      "KG",
    ];
    let fullUnit = [
      "gallons",
      "liters",
      "miles",
      "kilometers",
      "pounds",
      "kilograms",
      "gallons",
      "liters",
      "miles",
      "kilometers",
      "pounds",
      "kilograms",
    ];
    let inputIndex = input.indexOf(unit);

    // If inputIndex is >=0, then there's a match and we can return it...
    if (inputIndex >= 0) {
      return fullUnit[inputIndex];
    } else {
      return "invalid unit";
    }
  };

  this.convert = (initNum, initUnit) => {
    // for easier access lets store our conversion rates in an object
    const convertRates = {
      gal: 3.78541,
      L: 1/3.78541,
      lbs: 0.453592,
      kg: 1/0.453592,
      mi: 1.60934,
      km: 1/1.60934
    }

      // according to the user stories the solution should be no more than 5 decimal places
      // look into parse float with .tofixed or math .round
      console.log(initNum, "init")
      let convert = parseFloat((initNum * convertRates[initUnit]).toFixed(5) );
      console.log(convert)
      // now create and if else statement to handle errors or invalid data
      if (initNum == "invalid number" && initUnit == "invalid unit") {
        return "invalid number and unit";
      }
      else if (initNum == "invalid number") {
        return "invalid number";
      }
      else if (initUnit == "invalid unit") {
        return "invalid unit";
      } else {
        return convert;
      }

  };
    
  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    
    return `${initNum} ${this.spellOutUnit(initUnit)} will convert to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
