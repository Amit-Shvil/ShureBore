/// <reference path="../../../reference.ts" />
'use strict';
var ScoreTable = (function () {
    function ScoreTable() {
    }
    return ScoreTable;
}());
angular
    .module('documentsAppInternal')
    .component('scoreTable', {
    template: "\n<section class=\"score-table\">\n  <div class=\"score-table-title\">Score Table:</div>\n  <div class=\"player-entry\" ng-repeat=\"player in $ctrl.players\">\n    <div class=\"player-name\">{{player.name}}</div>\n    <div class=\"player-score\">{{player.getScore()}}</div>\n  </div>\n</section>\n    ",
    controller: ScoreTable,
    bindings: {
        players: '='
    }
});
//# sourceMappingURL=score-table.js.map