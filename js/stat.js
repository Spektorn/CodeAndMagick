'use strict';

window.stat = (function () {
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, window.constants.CLOUD_WIDTH, window.constants.CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, window.constants.CLOUD_X + window.constants.CLOUD_GAP,
        window.constants.CLOUD_Y + window.constants.CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, window.constants.CLOUD_X, window.constants.CLOUD_Y, '#FFFFFF');

    ctx.font = 'PT Mono 16px';
    ctx.fillStyle = '#000000';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', window.constants.CLOUD_X + window.constants.GAP,
        window.constants.CLOUD_Y + window.constants.GAP);
    ctx.fillText('Список результатов:', window.constants.CLOUD_X + window.constants.GAP,
        window.constants.CLOUD_Y + window.constants.GAP + window.constants.TEXT_HEIGHT);

    var maxTime = window.utilities.getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = '#000000';
      ctx.fillText(players[i],
          window.constants.CLOUD_X + window.constants.GAP + (window.constants.COLUMN_GAP + window.constants.BAR_WIDTH) * i,
          window.constants.CLOUD_Y + window.constants.CLOUD_HEIGHT - window.constants.GAP - window.constants.TEXT_HEIGHT);
      ctx.fillText(Math.round(times[i]),
          window.constants.CLOUD_X + window.constants.GAP + (window.constants.COLUMN_GAP + window.constants.BAR_WIDTH) * i,
          window.constants.CLOUD_Y + window.constants.GAP * 2 + window.constants.TEXT_HEIGHT * 2 +
          window.constants.BAR_MAX_HEIGHT - (window.constants.BAR_MAX_HEIGHT * times[i] / maxTime));

      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(235, ' + window.utilities.getRandomInt(0, 100) + '%, 50%)';
      }

      ctx.fillRect(window.constants.CLOUD_X + window.constants.GAP + (window.constants.COLUMN_GAP + window.constants.BAR_WIDTH) * i,
          window.constants.CLOUD_Y + window.constants.GAP * 2 + window.constants.TEXT_HEIGHT * 3 + window.constants.BAR_MAX_HEIGHT -
          (window.constants.BAR_MAX_HEIGHT * times[i] / maxTime),
          window.constants.BAR_WIDTH,
          window.constants.BAR_MAX_HEIGHT * times[i] / maxTime);
    }
  };
})();
