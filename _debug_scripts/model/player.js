'use strict';
var Player = (function () {
    function Player(name, color) {
        this.name = name;
        this.score = 0;
        this.lines = [];
        this.color = color;
    }
    Player.prototype.getScore = function () {
        var score = 0;
        this.lines.forEach(function (line) {
            score += line.length;
        });
        return score;
    };
    Player.prototype.hasLine = function (line) {
        var hasLineFlag = false;
        this.lines.forEach(function (_line) {
            hasLineFlag = _line.isEqual(line) || hasLineFlag;
        });
        return hasLineFlag;
    };
    return Player;
}());
//# sourceMappingURL=player.js.map