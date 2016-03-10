'use strict';
class Player {
  name: string;
  score: number;
  color: string;
  public lines: Array<Line>;

  constructor(name, color) {
    this.name = name;
    this.score = 0;
    this.lines = [];
    this.color = color;
  }

  getScore() {
    let score = 0;
    this.lines.forEach(line => {
      score += line.length;
    });
    return score;
  }

  hasLine(line: Line): boolean {
    let hasLineFlag = false;
    this.lines.forEach((_line) => {
      hasLineFlag = _line.isEqual(line) || hasLineFlag;
    });
    return hasLineFlag;
  }
}
