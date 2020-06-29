'use strict';

var FIRST_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATS_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;

var userDialog = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = userDialog.querySelector('.setup-similar-list');

var getRandomElement = function (arr) {
  var i = Math.floor(Math.random() * arr.length);
  return arr[i];
};

var showDialog = function () {
  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

var createWizard = function () {
  return {
    name: getRandomElement(FIRST_NAMES) + ' ' + getRandomElement(SECOND_NAMES),
    coatColor: getRandomElement(COATS_COLOR),
    eyesColor: getRandomElement(EYES_COLOR)
  };
};

var createWizards = function () {
  var wizards = [];
  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    wizards.push(createWizard());
  }
  return wizards;
};

var createWizardCard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizard = function () {
  var wizardsArray = createWizards();
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsArray.length; i++) {
    fragment.appendChild(createWizardCard(wizardsArray[i]));
  }
  similarListElement.appendChild(fragment);
};

renderWizard();
showDialog();
