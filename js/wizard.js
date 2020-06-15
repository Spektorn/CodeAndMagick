'use strict';

window.wizard = (function () {
  var setupElement = document.querySelector('.setup');

  var similarWizardList = setupElement.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var newWizard = similarWizardTemplate.cloneNode(true);

    newWizard.querySelector('.setup-similar-label').textContent = wizard.name;
    newWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    newWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return newWizard;
  };

  var renderWizardsFragment = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    return fragment;
  };

  var wizardsFragment = renderWizardsFragment(window.data.wizards);

  similarWizardList.appendChild(wizardsFragment);
  setupElement.querySelector('.setup-similar').classList.remove('hidden');
})();
