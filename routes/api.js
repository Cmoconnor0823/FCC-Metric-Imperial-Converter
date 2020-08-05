/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

var expect = require("chai").expect;
var ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  var convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    var input = req.query.input;
    //console.log('User Input', input);
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    // console.log('the route values \ngetNum: ' + initNum, '\n getUnit: '+ initUnit);
    var returnNum = convertHandler.convert(initNum, initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    var toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );
    var string = toString.toString();
    console.log(string, "i am not object");

    let result;
    console.log(initUnit,"init unit")

    if (initUnit === null && initNum === null) {
      result = {
        error: "invalid unit and number",
      };
    } else if (initUnit === null) {
      result = {
        error: "invalid unit",
      };
    } else if (initNum === null) {
      result = {
        error: "invalid number",
      };
    } else {
      result = {
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: toString,
      };
      // add.to string to allow json to print return
    }
    //res.json
    res.json(result);
  });
};
