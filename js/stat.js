'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_COLOR = '#fff';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var TEXT_HEIGTH = 20;
var BAR_WIDTH = 40;
var barHeigth = CLOUD_HEIGTH - TEXT_HEIGTH - (GAP * 2);
var USER_COLOR = 'rgba(255, 0, 0, 1)';
var TEXT_COLOR = '#000';

var renderCloud = function (ctx) {
  ctx.fillStyle = SHADOW_COLOR;
  ctx.fillRect(CLOUD_X + GAP - BAR_WIDTH, CLOUD_Y + GAP - BAR_WIDTH, CLOUD_WIDTH, CLOUD_HEIGTH);
  ctx.fillStyle = CLOUD_COLOR;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGTH);
};

var renderHeader = function (ctx) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx);
  renderHeader(ctx);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var calcBarHeight = (-barHeigth * times[i]) / maxTime;
    var xCoord = CLOUD_WIDTH - CLOUD_HEIGTH + (GAP + BAR_WIDTH) * i;
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(players[i], xCoord, CLOUD_HEIGTH - CLOUD_Y);
    ctx.fillText(Math.round(times[i]), xCoord, calcBarHeight + CLOUD_HEIGTH - BAR_WIDTH);

    if (players[i] === 'Вы') {
      ctx.fillStyle = USER_COLOR;
    } else {
      var saturationColorBar = 'hsl(215, ' + Math.random() * 100 + '%, 50%)';
      ctx.fillStyle = saturationColorBar;
    }

    ctx.fillRect(xCoord, CLOUD_HEIGTH - CLOUD_Y - TEXT_HEIGTH, BAR_WIDTH, calcBarHeight);
  }
};
