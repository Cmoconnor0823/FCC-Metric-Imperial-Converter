/*
*
*
*       Complete the handler logic below
*       
*       
*/

const validateInput = /([\d.s]+)([A-z]+)/g;

function ConvertHandler() {
  
  this.getNum = (input) => {
    let result = validateInput.exec(input)[1];
    validateInput.lastIndex = 0;
    console.log('The Result getNum: ', result[0]);
    console.log('The Result getNum: ', result[1]);
    console.log('The Result getNum: ', result[2]);
    return result;
  };
  
  this.getUnit = input => {
    var result;
    
    return result;
  };
  
  this.getReturnUnit = initUnit => {
    var result;
    
    return result;
  };

  this.spellOutUnit = unit => {
    var result;
    
    return result;
  };
  
  this.convert = (initNum, initUnit) => {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
