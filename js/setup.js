'use strict';

var NAME_PATTERN = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAME_PATTERN = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLOR_PATTERN = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];
var EYES_COLOR_PATTERN = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];
var WIZARDS_QUANTITY = 4;

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARDS_QUANTITY; i++) {
    var newWizard = {
      name: NAME_PATTERN[getRandomInt(0, NAME_PATTERN.length - 1)] + ' ' + SURNAME_PATTERN[getRandomInt(0, SURNAME_PATTERN.length - 1)],
      coatColor: COAT_COLOR_PATTERN[getRandomInt(0, COAT_COLOR_PATTERN.length - 1)],
      eyesColor: EYES_COLOR_PATTERN[getRandomInt(0, EYES_COLOR_PATTERN.length - 1)],
    };

    wizards.push(newWizard);
  }

  return wizards;
};

var wizards = getRandomWizards();

var similarWizardList = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createWizardsFragment = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  return fragment;
};

var fragment = createWizardsFragment();

similarWizardList.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');


