'use strict';

window.constants = (function () {
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

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 15;
  var CLOUD_GAP = 10;
  var COLUMN_GAP = 50;
  var TEXT_HEIGHT = 16;
  var BAR_WIDTH = 40;
  var BAR_MAX_HEIGHT = 150;

  return {
    NAME_PATTERN: NAME_PATTERN,
    SURNAME_PATTERN: SURNAME_PATTERN,
    COAT_COLOR_PATTERN: COAT_COLOR_PATTERN,
    EYES_COLOR_PATTERN: EYES_COLOR_PATTERN,
    FIREBALL_COLOR_PATTERN: FIREBALL_COLOR_PATTERN,
    WIZARDS_QUANTITY: WIZARDS_QUANTITY,
    CLOUD_WIDTH: CLOUD_WIDTH,
    CLOUD_HEIGHT: CLOUD_HEIGHT,
    CLOUD_X: CLOUD_X,
    CLOUD_Y: CLOUD_Y,
    GAP: GAP,
    CLOUD_GAP: CLOUD_GAP,
    COLUMN_GAP: COLUMN_GAP,
    TEXT_HEIGHT: TEXT_HEIGHT,
    BAR_WIDTH: BAR_WIDTH,
    BAR_MAX_HEIGHT: BAR_MAX_HEIGHT,
  };
})();
