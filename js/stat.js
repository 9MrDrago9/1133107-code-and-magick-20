'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var TEXT_HEIGTH = 20;
var BAR_WIDTH = 40;
var barHeigth = CLOUD_HEIGTH - GAP - TEXT_HEIGTH - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
};

var getMaxElement = function (times) {
  var maxElement = times[0];

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP - BAR_WIDTH, CLOUD_Y + GAP - BAR_WIDTH, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_WIDTH - CLOUD_HEIGTH + (GAP + BAR_WIDTH) * i, CLOUD_HEIGTH - CLOUD_Y);
    ctx.fillText(Math.round(times[i]), CLOUD_WIDTH - CLOUD_HEIGTH + (GAP + BAR_WIDTH) * i, (-barHeigth * times[i]) / maxTime + CLOUD_HEIGTH - BAR_WIDTH);
  }

  for (i = 0; i < players.length; i++) {
    if (players[i] === players[0]) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturationColorBar = 'hsl(215, ' + (Math.floor(Math.random() * (100 - 0)) + 0) + '%, 50%)';
      ctx.fillStyle = saturationColorBar;
    }
    ctx.fillRect(CLOUD_WIDTH - CLOUD_HEIGTH + (GAP + BAR_WIDTH) * i, CLOUD_HEIGTH - CLOUD_Y - TEXT_HEIGTH, BAR_WIDTH, (-barHeigth * times[i]) / maxTime);
  }
};
