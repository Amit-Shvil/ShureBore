/// <reference path="../../../reference.ts" />
'use strict';

class ScoreTable {
  players: Player[];

  /* @ngInject */
  constructor() {
  }
}

angular
  .module('documentsAppInternal')
  .component('scoreTable', {
    template: `
<section class="score-table">
  <div class="player-entry" ng-repeat="player in $ctrl.players">
    <div class="player-name">{{player.name}}</div>
    <div class="player-score">{{player.getScore()}}</div>
  </div>
</section>
    `,
    controller: ScoreTable,
    bindings: {
      players: '='
    }
  });
