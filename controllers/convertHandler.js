/*
*
*
*       Complete the handler logic below
*       
*       
*/

//const validateInput = /([\d.s]+)([A-z]+\s*)/g;
const units = {
  lbs: 'kg',
  kg: 'lbs',
  mi: 'km',
  km: 'mi',
  gal: 'L',
  L: 'gal',
  lbs: 'kg',
}


function ConvertHandler() {
  
  this.getNum = (input) => {
    const unit = this.getUnit(input);
    console.log(unit);

    if(unit === null){
      return null;
    }
    const conversion = input.split(unit)[0];
    console.log(conversion);

    try {
      const result = eval(conversion === '' ? 1 : conversion);
      return result;
    } catch(e){
      return null;
    }
  };
  
  this.getUnit = input => {
    // Due to the regex set-up above to get the unit all we need is
    // const unit = validateInput.exec(input)[2];
    // validateInput.lastIndex = 0;
    const regex = /(gal)|(L)|(lbs)|(kg)|(mi)|(km)$/;
    const result = input.match(regex);

    //console.log('Input Unit: ', result)
    return result === null ? null : result[0];
  };
  
  this.getReturnUnit = initUnit => {
    if(initUnit === null){
        return null;
    }
    return units[initUnit];
  };
  
  this.spellOutUnit = unit => {
    
    const validUnits = [
      'gal',
      'gallon',
      'g',
      'kg',
      'killogram',
      'kg',
      'killograme',
      'killometer',
      'killometere',
      'l',
      'lb',
      'litre',
      'liter',
      'mi',
      'mile',
      'pound']
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
      case 'gal': {
        return initNum * galToL;
      }
      case 'L': {
        return initNum * LToGal;
      }
      case 'lbs': {
        return initNum * lbsToKg;
      }
      case 'kg': {
        return initNum * kgToLbs;
      }
      case 'mi': {
        return initNum * miToKm;
      }
      case 'km': {
        return initNum * kmToMi;
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
