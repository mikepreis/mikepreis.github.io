 export {}
 // JBCC -- a simple contract-checking library
// // Copyright 2012 John Brinckerhoff Clements <aoeuclements@brinckerhoff.org>
// // 
// // Editted by Tim Sweeney 4/21/15

// // this file provides contract-checking functions for use elsewhere.

// // hide the whole thing in a thunk:
// export const contractChecker = module.exports = function() {
//     "use strict";
  
//     // this only begins to address the underlying problems....
//     var valPrint = function(v : number) {
//       if (isNumber(v)) {
//         return v;
//       } else {
//         return JSON.stringify(v);
//       }
//     };
//     // check that the number of arguments is correct:
//     var argNumCheck = function(funname : string, actual : Array<string>, expected : Array<string>) {
//       if (actual !== expected) {
//         throw (funname + ': expected ' + expected + ' arguments, got ' + actual + '.');
//       }
//     };
  
//     // check that an argument satisfies a given predicate:
//     var argCheck = function(funName : string, pred :number, argName : string, arg : string) {
//       if (typeof pred !== 'function') {
//         throw ('INTERNAL ERROR: ' + funName + ': contract on ' + argName + ' was ' + valPrint(pred));
//       }
//       if (!(pred(arg))) {
//         throw (funName + ': contract fail for argument named ' + argName + ', got ' + valPrint(arg) + '.');
//       }
//     };
  
//     // an arguments-contract is an array of contract-pairs
//     // a contract pair is {a : <string>, c : <string>}
//     var checkArgsContract = function(funName : string, args : Array<string>, contractPairs : Object) {
//       argNumCheck(funName, args.length, contractPairs.length);
//       var i;
//       for (i = 0; i < contractPairs.length; i++) {
//         var pred = contractPairs[i].c;
//         argCheck(funName, pred, contractPairs[i].a, args[i]);
//       }
//     };
  
  
//     // combine two contracts:
//     var andC = function(c1, c2) {
//       return function(a) {
//         return c1(a) && c2(a);
//       };
//     };
  
//     var isBlank = function(b) {
//       return (b === 'blank');
//     };
//     var isBoolean = function(b) {
//       return ((typeof b) === 'boolean');
//     };
//     var isNumber = function(n) {
//       return ((typeof n) === 'number');
//     };
//     // this one could be expensive....:
//     var isInteger = function(n) {
//       return (isNumber(n) && (n % 1 === 0));
//     };
//     var isPosInt = function(n) {
//       return (isInteger(n) && isPositive(n));
//     };
//     var isPositive = function(n) {
//       return (n >= 0);
//     };
//     var isNegative = function(n) {
//       return (n <= 0);
//     };
//     var isPositiveNumber = andC(isNumber, isPositive);
//     var isNegativeNumber = andC(isNumber, isNegative);
//     // a number that is not infinite:
//     var isNonInf = function(n) {
//       return isNumber(n) && (!((n === Infinity) || (n === -Infinity)));
//     };
//     // a number that may be used as a payment or valuation; can't be
//     // infinite or NaN
//     var isNumVal = function(n) {
//       return (isNonInf(n) && (!(isNaN(n))));
//     };
//     var isNumValOrBlank = function(n) {
//       return (isNumVal(n) || isBlank(n));
//     };
//     // a number that can be used as a growth. (a.k.a. (1+n)^a )
//     var isGrowth = function(n) {
//       return (isNumber(n) && (n > -1) && (n < Infinity));
//     };
//     var isGrowthOrBlank = function(n) {
//       return (isGrowth(n) || isBlank(n));
//     };
//     // a number that refers to a number of periods:
//     var isPeriod = function(n) {
//       return isNumber(n) && (n === Infinity || isPosInt(n));
//     };
//     var isString = function(s) {
//       return ((typeof s) === 'string');
//     };
//     var isArray = function(a) {
//       return ((typeof a) === 'object') && (a.hasOwnProperty('length'));
//     };
//     var isArrayOf = function(pred) {
//       return function(a) {
//         return isArray(a) && andMap(pred, a);
//       };
//     };
  
//     // are all the arrays of the same length?
//     var checkAllSameLength = function(arrays) {
//       if (arrays.length === 0) {
//         return true;
//       } else {
//         var len = arrays[0].length;
//         return JBCC.andMap(function(a) {
//           return a.length === len;
//         }, arrays);
//       }
//     };
  
  
//     // does the function hold for all elements of the array?
//     // var andMap = function(fun, arr) {
//     //   var j;
//     //   for (j = 0; j < arr.length; j++) {
//     //     if (!(fun(arr[j]))) {
//     //       return false;
//     //     }
//     //   }
//     //   return true;
//     // };
  
//     // return the array formed by applying the given function
//     // to the elements of the supplied arrays.
//     // var map = function(mapper, arrays) {
//     //   if (arrays.length === 0) {
//     //     throw ("map: expected non-empty array as second argument, got: " + valPrint(arrays));
//     //   }
//     //   if (!(checkAllSameLength(arrays))) {
//     //     throw ("map: expected arrays of same length, got: " + arrays);
//     //   }
//     //   var accum = [];
//     //   var j;
//     //   for (j = 0; j < arrays[0].length; j++) {
//     //     var arr = [];
//     //     var k;
//     //     // slice sideways across the arrays:
//     //     for (k = 0; k < arrays.length; k++) {
//     //       arr = arr.concat([arrays[k][j]]);
//     //     }
//     //     accum = accum.concat([mapper.apply(false, arr)]);
//     //   }
//     //   return accum;
//     // };
  
//     // added by TSS
//     // var filter = function(arr, func) {
//     //   var retArr = [];
//     //   for (var i = 0; i < arr.length; i++) {
//     //     if (func.apply(false, [arr[i]])) {
//     //       retArr.push(arr[i]);
//     //     }
//     //   }
  
//     //   return retArr;
//     // };
  
//     var retval = {
//     //   filter: filter,
//       checkArgsContract: checkArgsContract,
//     //   map: map,
//     //   andMap: andMap,
//       andC: andC,
//       isBoolean: isBoolean,
//       isNumber: isNumber,
//       isInteger: isInteger,
//       isPosInt: isPosInt,
//       isPositive: isPositive,
//       isNegative: isNegative,
//       isPositiveNumber: isPositiveNumber,
//       isNegativeNumber: isNegativeNumber,
//       isNonInf: isNonInf,
//       isNumVal: isNumVal,
//       isGrowth: isGrowth,
//       isPeriod: isPeriod,
//       isString: isString,
//       isArray: isArray,
//       isArrayOf: isArrayOf,
//       isNumValOrBlank: isNumValOrBlank,
//       isGrowthOrBlank: isGrowthOrBlank,
//       valPrint: valPrint,
//       checkAllSameLength: checkAllSameLength
//     };
  
//     return retval;
  
//   }();
  