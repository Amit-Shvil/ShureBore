'use strict';
class Player {
  name: string;
  score: number;
  public lines: Array<Line>;

  constructor(name) {
    this.name = name;
    this.score = 0;
    this.lines = [];
  }

  hasLine(line: Line): boolean {
    let hasLineFlag = false;
    this.lines.forEach((_line) => {
      hasLineFlag = _line.isEqual(line) || hasLineFlag;
    });
    return hasLineFlag;
  }
}
