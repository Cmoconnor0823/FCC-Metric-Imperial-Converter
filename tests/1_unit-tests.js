/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

var chai = require("chai");
var assert = chai.assert;
var ConvertHandler = require("../controllers/convertHandler.js");
const { expect } = require("chai");

var convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  suite("Function convertHandler.getNum(input)", function () {
    test("Whole number input", function (done) {
      var input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test("Decimal Input", function (done) {
      var input = "32.5L";
      assert.equal(convertHandler.getNum(input), 32.5);
      done();
    });

    test("Fractional Input", function (done) {
      var input = "4/2/10";
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });

    test("Fractional Input w/ Decimal", function (done) {
      var input = "6.0/3L";
      assert.equal(convertHandler.getNum(input), 2);
      done();
    });

    test("Invalid Input (double fraction)", function (done) {
      var input = "6/3/3";
      // console.log(assert.equal(convertHandler.getNum(input),null))
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });

    test("No Numerical Input", function (done) {
      var input = "mi";
      // console.log(assert.equal(convertHandler.getNum(input),null))
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", function () {
    test("For Each Valid Unit Inputs", function (done) {
      var input = [
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
      var expected = [
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
      input.forEach(function (ele, i) {
        //assert
        console.log(ele);
        assert.equal(convertHandler.getUnit(ele), expected[i]);
      });
      done();
    });

    test("Unknown Unit Input", function (done) {
      var input = ["20.0", "17.3 pounds", "2/3kilograms"];
      input.forEach(function (ele) {
        //assert
        assert.equal(convertHandler.getUnit(ele), "invalid unit");
      });
      done();
    });
  });

  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','L','mi','km','lbs','kg'];
      let expected = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expected[i]);
      });
      
      done();
    });
    
  });  

  suite("Function convertHandler.spellOutUnit(unit)", function () {
    test("For Each Valid Unit Inputs", function (done) {
      //see above example for hint
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", function () {
    test("Gal to L", function (done) {
      var input = [5, "gal"];
      var expected = 18.9271;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("L to Gal", function (done) {
      //done();
    });

    test("Mi to Km", function (done) {
      //done();
    });

    test("Km to Mi", function (done) {
      //done();
    });

    test("Lbs to Kg", function (done) {
      //done();
    });

    test("Kg to Lbs", function (done) {
      //done();
    });
  });
});
