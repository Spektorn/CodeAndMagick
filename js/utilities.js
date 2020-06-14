'use strict';

window.utilities = (function () {
  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var getRandomArrValue = function (patternName) {
    return patternName[getRandomInt(0, patternName.length - 1)];
  };

  return {
    getRandomInt: getRandomInt,
    getMaxElement: getMaxElement,
    getRandomArrValue: getRandomArrValue,
  };
})();
