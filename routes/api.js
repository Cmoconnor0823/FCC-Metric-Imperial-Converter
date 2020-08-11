/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

var ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  var convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    var input = req.query.input;
    console.log("User Input", input);
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    //console.log('the route values \ngetNum: ' + initNum, '\n getUnit: '+ initUnit);
    var returnNum = convertHandler.convert(initNum, initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    var toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );

    if (initUnit === "invalid unit" && initNum === "invalid number") {
      return res.json("invalid unit and number");
    } else if (initUnit === "invalid unit") {
      return res.json("invalid unit");
    } else if (initNum === "invalid number") {
      return res.json("invalid number");
    } else {
      return res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: toString,
      });
    }
  });
};
