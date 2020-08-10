/*
*
*
*       Complete the handler logic below
*       
*       
*/



function ConvertHandler() {
  
  this.getNum = input => {
  // Using regex find where the units begin in the user input 
  const unitStartIndex = input.search(/[a-zA-z]/);
  // Next create a variable to hold the input number
  let inputNumbers;

  // Due to the requrements for the tests with chai we need to be able to retun "invalid unit"
  // if no unit is present in the input. 
  // This can be done with an if else where if unitStartIndex = -1 return "invalid unit"

  if(unitStartIndexs === -1) {
    inputNumbers = input;
    // if there is a unit present, we need to strip off the unit and leave only the numbers
    // to be converted
  } else {
    inputNumbers = input.substring(0, unitStartIndexs);
  }

  // then a if check for a user story that states if a unit is present but no numbers
  // assume a number input of one (1)

  if (inputNumbers.length == 0) {
    inputNumbers = "1"; // this needs to be saved as a string to match how we grabed the input numbers above
  }

  // now a check to cover the user story where we will have a invaild double fraction as an input
  // remember at this point our inpitNumbers are a string
  if(inputNumbers.split(/\//).length > 2) return "invalid number";

  };
  
  this.getUnit = input => {
    // much in the same way as before we will start with finding where the units start in the input
    // this time with a slight adjustment to account for spaces
    let startUnitIndexs = input.search(/[\sa-zA-Z]/);

    // now that we have the indexs we can pull out a substring containing the entire unit
    let units = input.substring(input.search(/[\sa-zA-Z]/), input.length);
    // next we build an array of the acceptable inputs --note these are FCC specific---
    let acceptableUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      // now we create an array of the acceptable output units determined by FCC
    let outputUnits = ['gal','l','mi','km','lbs','kg','gal','l','mi','km','lbs','kg',]

    // now lets build a check to see if our input is acceptable
    let acceptableInput = acceptableUnits.indexOf(units);

    if ( acceptableInput >=0 ) {
      return outputUnits[acceptableInput];
    } else {
      return "invalid unit";
    }
  };
  
  this.getReturnUnit = initUnit => {
    if(initUnit === null){
        return "invalid unit";
    }
    return units[initUnit];
  };
  
  this.spellOutUnit = unit => {
    
    var result;
    
    return result;
  };
  
  this.convert = (initNum, initUnit) => {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const LToGal = 1 / galToL;
    const kgToLbs = 1 / lbsToKg;
    const kmToMi = 1 / miToKm;
    if(initNum === null) {
      return null;
    }
    
    switch(initUnit) {
      case 'GAL':
      case 'gal': {
        return initNum * galToL;
      }
      case 'L':
      case 'l': {
        return initNum * LToGal;
      }
      case 'LBS':
      case 'lbs': {
        return initNum * lbsToKg;
      }
      
      case 'MI':
      case 'mi': {
        return initNum * miToKm;
      }
      case 'KM':
      case 'km': {
        return initNum * kmToMi;
      }
      case 'KG':
      case 'kg': {
        return initNum * kgToLbs;
      }
      default: {
        return null;
      }
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if(initNum === null || initUnit === null || returnNum === null || returnUnit === null){
      return null;
    }
    return `${initNum} ${initUnit} will convert to ${returnNum} ${returnUnit}`;
  };
  
}

module.exports = ConvertHandler;
