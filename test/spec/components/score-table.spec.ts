/// <reference path="../../../reference.ts" />
'use strict';

class ScoreTableDriver extends WixBaseViewUnitDriver {

  render(name = '') {
    this.renderFromTemplate(`<score-table name="name"></score-table>`, {name});
  }

  getContainerElement() {
    return this.findByDataHook('container');
  }

  getCounterElement() {
    return this.findByDataHook('counter');
  }
}

describe('Component: scoreTable', () => {
  let driver: ScoreTableDriver;

  beforeEach(() => {
    module('documentsAppInternal');
    driver = new ScoreTableDriver();
  });

  afterEach(() => {
    driver.disconnectFromBody();
  });

});
