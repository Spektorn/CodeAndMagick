'use strict';

window.data = (function () {
  var getRandomWizards = function () {
    var wizards = [];

    for (var i = 0; i < window.constants.WIZARDS_QUANTITY; i++) {
      var newWizard = {
        name: window.utilities.getRandomArrValue(window.constants.NAME_PATTERN) + ' ' + window.utilities.getRandomArrValue(window.constants.SURNAME_PATTERN),
        coatColor: window.utilities.getRandomArrValue(window.constants.COAT_COLOR_PATTERN),
        eyesColor: window.utilities.getRandomArrValue(window.constants.EYES_COLOR_PATTERN),
      };

      wizards.push(newWizard);
    }

    return wizards;
  };

  var wizards = getRandomWizards();

  return {
    wizards: wizards,
  };
})();
