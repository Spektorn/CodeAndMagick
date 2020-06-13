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

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomArrValue = function (patternName) {
  return patternName[getRandomInt(0, patternName.length - 1)];
};

var getRandomWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARDS_QUANTITY; i++) {
    var newWizard = {
      name: getRandomArrValue(NAME_PATTERN) + ' ' + getRandomArrValue(SURNAME_PATTERN),
      coatColor: getRandomArrValue(COAT_COLOR_PATTERN),
      eyesColor: getRandomArrValue(EYES_COLOR_PATTERN),
    };

    wizards.push(newWizard);
  }

  return wizards;
};

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

var wizards = getRandomWizards();

var setupElement = document.querySelector('.setup');

var similarWizardList = setupElement.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardsFragment = renderWizardsFragment(wizards);
similarWizardList.appendChild(wizardsFragment);

setupElement.querySelector('.setup-similar').classList.remove('hidden');

var setupOpenButtonElement = document.querySelector('.setup-open');
var setupOpenIconElement = setupOpenButtonElement.querySelector('.setup-open-icon');
var setupCloseButtonElement = setupElement.querySelector('.setup-close');

var setupCloseClickHandler = function (evt) {
  evt.preventDefault();
  setupElement.classList.add('hidden');

  setupCloseButtonElement.removeEventListener('click', setupCloseClickHandler);
  document.removeEventListener('keydown', setupClosePressEscHandler);
};

var setupClosePressEscHandler = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    setupElement.classList.add('hidden');
  }

  setupCloseButtonElement.removeEventListener('click', setupCloseClickHandler);
  document.removeEventListener('keydown', setupClosePressEscHandler);
};

var setupOpenClickHandler = function (evt) {
  evt.preventDefault();
  setupElement.classList.remove('hidden');

  setupCloseButtonElement.addEventListener('click', setupCloseClickHandler);
  document.addEventListener('keydown', setupClosePressEscHandler);
};

var setupOpenPressEnterHandler = function (evt) {
  if (evt.key === 'Enter') {
    evt.preventDefault();
    setupElement.classList.remove('hidden');
  }

  setupCloseButtonElement.addEventListener('click', setupCloseClickHandler);
  document.addEventListener('keydown', setupClosePressEscHandler);
};

setupOpenButtonElement.addEventListener('click', setupOpenClickHandler);
setupOpenIconElement.addEventListener('keydown', setupOpenPressEnterHandler);
