'use strict';

window.setup = (function () {
  var setupElement = document.querySelector('.setup');
  var setupDefaultX;
  var setupDefaultY;

  var setupOpenButtonElement = document.querySelector('.setup-open');
  var setupOpenIconElement = setupOpenButtonElement.querySelector('.setup-open-icon');
  var setupCloseButtonElement = setupElement.querySelector('.setup-close');
  var setupMoveHandleElement = setupElement.querySelector('.upload');

  var setupWizardElement = setupElement.querySelector('.setup-wizard');
  var setupWizardFireballElement = setupElement.querySelector('.setup-fireball-wrap');
  var setupWizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var setupWizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');

  var setupNameInputElement = setupElement.querySelector('#username-modal');
  var setupFireballInputElement = setupWizardFireballElement.querySelector('#fireball-color-modal');
  var setupCoatInputElement = setupElement.querySelector('#coat-color-modal');
  var setupEyesInputElement = setupElement.querySelector('#eyes-color-modal');

  var openSetup = function (evt) {
    evt.preventDefault();
    setupElement.classList.remove('hidden');

    setupDefaultX = setupElement.offsetLeft;
    setupDefaultY = setupElement.offsetTop;

    setupCloseButtonElement.addEventListener('click', setupCloseClickHandler);
    setupCloseButtonElement.addEventListener('keydown', setupClosePressEnterHandler);
    document.addEventListener('keydown', setupClosePressEscHandler);
    setupMoveHandleElement.addEventListener('mousedown', setupMoveHandler);
    setupNameInputElement.addEventListener('focus', usernameInputFocusHandler);
    setupNameInputElement.addEventListener('blur', usernameInputBlurHandler);
  };

  var closeSetup = function (evt) {
    evt.preventDefault();
    setupElement.classList.add('hidden');

    setupElement.style.left = setupDefaultX + 'px';
    setupElement.style.top = setupDefaultY + 'px';

    setupCloseButtonElement.removeEventListener('click', setupCloseClickHandler);
    setupCloseButtonElement.removeEventListener('keydown', setupClosePressEnterHandler);
    document.removeEventListener('keydown', setupClosePressEscHandler);
    setupMoveHandleElement.removeEventListener('mousedown', setupMoveHandler);
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

  var setupMoveHandler = function (evt) {
    evt.preventDefault();

    var startLocation = {
      x: evt.clientX,
      y: evt.clientY,
    };

    var dragged = false;

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startLocation.x - moveEvt.clientX,
        y: startLocation.y - moveEvt.clientY,
      };

      startLocation = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      setupElement.style.top = (setupElement.offsetTop - shift.y) + 'px';
      setupElement.style.left = (setupElement.offsetLeft - shift.x) + 'px';
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      if (dragged) {
        var clickPreventDefaultHandler = function (clickEvt) {
          clickEvt.preventDefault();
          setupMoveHandleElement.removeEventListener('click', clickPreventDefaultHandler);
        };

        setupMoveHandleElement.addEventListener('click', clickPreventDefaultHandler);
      }
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  setupOpenButtonElement.addEventListener('click', setupOpenClickHandler);
  setupOpenIconElement.addEventListener('keydown', setupOpenPressEnterHandler);

  setupWizardCoatElement.addEventListener('click', function () {
    var newColor = window.utilities.getRandomArrValue(window.constants.COAT_COLOR_PATTERN);

    setupWizardCoatElement.style.fill = newColor;
    setupCoatInputElement.value = newColor;
  });

  setupWizardEyesElement.addEventListener('click', function () {
    var newColor = window.utilities.getRandomArrValue(window.constants.EYES_COLOR_PATTERN);

    setupWizardEyesElement.style.fill = newColor;
    setupEyesInputElement.value = newColor;
  });

  setupWizardFireballElement.addEventListener('click', function () {
    var newColor = window.utilities.getRandomArrValue(window.constants.FIREBALL_COLOR_PATTERN);

    setupWizardFireballElement.style.backgroundColor = newColor;
    setupFireballInputElement.value = newColor;
  });
})();
