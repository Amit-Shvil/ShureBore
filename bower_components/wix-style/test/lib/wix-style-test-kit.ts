/// <reference path="../../reference.ts" />
'use strict';

class WixModalServiceMock {
  dialogs: WixModalMock[];

  constructor() {
    this.alert = jasmine.createSpy('alert').and.callFake(this.alert);
    this.dialogs = [];
  }

  alert() {
    let dialog = new WixModalMock();
    return dialog;
  }

  open(dialog) {
    this.dialogs.push(dialog);
    return this;
  }

  then(callback) {
    this.dialogs[0]._thenCallback = callback;
    return this;
  }

  onConfirm() {
    this.dialogs[0]._thenCallback('CONFIRM');
  }

  onClose() {
    this.dialogs[0]._thenCallback('CLOSE');
  }

}

class WixModalMock {
  private _title: string = '';
  private _content: string = '';
  private _confirm: string = '';
  private _cancel: string = '';
  _thenCallback: Function;

  title(title): WixModalMock {
    this._title = title;
    return this;
  }

  content(content): WixModalMock {
    this._content = content;
    return this;
  }

  confirm(confirm): WixModalMock {
    this._confirm = confirm;
    return this;
  }

  cancel(cancel): WixModalMock {
    this._cancel = cancel;
    return this;
  }

  matches(expected: WixModalMatcher) {
    let actual: any = this.serialize();
    return jasmine.objectContaining(expected.serialize()).jasmineMatches(actual, [], []);
  }

  serialize() {
    return {title: this._title, content: this._content, confirm: this._confirm, cancel: this._cancel};
  }
}

class WixModalMatcher {
  private _title: any;
  private _content: any;
  private _confirm: any;
  private _cancel: any;

  constructor() {
    this._title = jasmine.any(String);
    this._content = jasmine.any(String);
    this._confirm = jasmine.any(String);
    this._cancel = jasmine.any(String);
  }

  withTitle(title): WixModalMatcher {
    this._title = title;
    return this;
  }

  withContent(content): WixModalMatcher {
    this._content = content;
    return this;
  }

  withConfirm(confirm): WixModalMatcher {
    this._confirm = confirm;
    return this;
  }

  withCancel(cancel): WixModalMatcher {
    this._cancel = cancel;
    return this;
  }

  serialize() {
    return {title: this._title, content: this._content, confirm: this._confirm, cancel: this._cancel};
  }
}

beforeEach(function () {

  var customMatchers: any = {
    toDisplayWixModal: function (expected: WixModalMatcher) {
      return this.actual.dialogs.some((dialog: WixModalMock) => {
        return dialog.matches(expected);
      });
    }
  };

  jasmine.addMatchers(customMatchers);
});
