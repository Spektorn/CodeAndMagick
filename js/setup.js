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
var FIREBALL_COLOR_PATTERN = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
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

var openSetup = function (evt) {
  evt.preventDefault();
  setupElement.classList.remove('hidden');

  setupCloseButtonElement.addEventListener('click', setupCloseClickHandler);
  setupCloseButtonElement.addEventListener('keydown', setupClosePressEnterHandler);
  document.addEventListener('keydown', setupClosePressEscHandler);
  setupNameInputElement.addEventListener('focus', usernameInputFocusHandler);
  setupNameInputElement.addEventListener('blur', usernameInputBlurHandler);
};

var closeSetup = function (evt) {
  evt.preventDefault();
  setupElement.classList.add('hidden');

  setupCloseButtonElement.removeEventListener('click', setupCloseClickHandler);
  setupCloseButtonElement.removeEventListener('keydown', setupClosePressEnterHandler);
  document.removeEventListener('keydown', setupClosePressEscHandler);
  setupNameInputElement.removeEventListener('focus', usernameInputFocusHandler);
  setupNameInputElement.removeEventListener('blur', usernameInputBlurHandler);
};

var usernameInputFocusHandler = function () {
  document.removeEventListener('keydown', setupClosePressEscHandler);
};

var usernameInputBlurHandler = function () {
  document.addEventListener('keydown', setupClosePressEscHandler);
};

var setupCloseClickHandler = function (evt) {
  closeSetup(evt);
};

var setupClosePressEnterHandler = function (evt) {
  if (evt.key === 'Enter') {
    closeSetup(evt);
  }
};

var setupClosePressEscHandler = function (evt) {
  if (evt.key === 'Escape') {
    closeSetup(evt);
  }
};

var setupOpenClickHandler = function (evt) {
  openSetup(evt);
};

var setupOpenPressEnterHandler = function (evt) {
  if (evt.key === 'Enter') {
    openSetup(evt);
  }
};

var wizards = getRandomWizards();

var setupElement = document.querySelector('.setup');

var setupOpenButtonElement = document.querySelector('.setup-open');
var setupOpenIconElement = setupOpenButtonElement.querySelector('.setup-open-icon');
var setupCloseButtonElement = setupElement.querySelector('.setup-close');

var setupWizardElement = setupElement.querySelector('.setup-wizard');
var setupWizardFireballElement = setupElement.querySelector('.setup-fireball-wrap');
var setupWizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
var setupWizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');

var setupNameInputElement = setupElement.querySelector('#username-modal');
var setupFireballInputElement = setupWizardFireballElement.querySelector('#fireball-color-modal');
var setupCoatInputElement = setupElement.querySelector('#coat-color-modal');
var setupEyesInputElement = setupElement.querySelector('#eyes-color-modal');

var similarWizardList = setupElement.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardsFragment = renderWizardsFragment(wizards);
similarWizardList.appendChild(wizardsFragment);

setupElement.querySelector('.setup-similar').classList.remove('hidden');

setupOpenButtonElement.addEventListener('click', setupOpenClickHandler);
setupOpenIconElement.addEventListener('keydown', setupOpenPressEnterHandler);

setupWizardCoatElement.addEventListener('click', function () {
  var newColor = getRandomArrValue(COAT_COLOR_PATTERN);

  setupWizardCoatElement.style.fill = newColor;
  setupCoatInputElement.value = newColor;
});

setupWizardEyesElement.addEventListener('click', function () {
  var newColor = getRandomArrValue(EYES_COLOR_PATTERN);

  setupWizardEyesElement.style.fill = newColor;
  setupEyesInputElement.value = newColor;
});

setupWizardFireballElement.addEventListener('click', function () {
  var newColor = getRandomArrValue(FIREBALL_COLOR_PATTERN);

  setupWizardFireballElement.style.backgroundColor = newColor;
  setupFireballInputElement.value = newColor;
});
