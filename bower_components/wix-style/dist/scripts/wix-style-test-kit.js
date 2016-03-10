"use strict";

var WixModalServiceMock = function() {
    function WixModalServiceMock() {
        this.alert = jasmine.createSpy("alert").and.callFake(this.alert);
        this.dialogs = [];
    }
    WixModalServiceMock.prototype.alert = function() {
        var dialog = new WixModalMock();
        return dialog;
    };
    WixModalServiceMock.prototype.open = function(dialog) {
        this.dialogs.push(dialog);
        return this;
    };
    WixModalServiceMock.prototype.then = function(callback) {
        this.dialogs[0]._thenCallback = callback;
        return this;
    };
    WixModalServiceMock.prototype.onConfirm = function() {
        this.dialogs[0]._thenCallback("CONFIRM");
    };
    WixModalServiceMock.prototype.onClose = function() {
        this.dialogs[0]._thenCallback("CLOSE");
    };
    return WixModalServiceMock;
}();

var WixModalMock = function() {
    function WixModalMock() {
        this._title = "";
        this._content = "";
        this._confirm = "";
        this._cancel = "";
    }
    WixModalMock.prototype.title = function(title) {
        this._title = title;
        return this;
    };
    WixModalMock.prototype.content = function(content) {
        this._content = content;
        return this;
    };
    WixModalMock.prototype.confirm = function(confirm) {
        this._confirm = confirm;
        return this;
    };
    WixModalMock.prototype.cancel = function(cancel) {
        this._cancel = cancel;
        return this;
    };
    WixModalMock.prototype.matches = function(expected) {
        var actual = this.serialize();
        return jasmine.objectContaining(expected.serialize()).jasmineMatches(actual, [], []);
    };
    WixModalMock.prototype.serialize = function() {
        return {
            title: this._title,
            content: this._content,
            confirm: this._confirm,
            cancel: this._cancel
        };
    };
    return WixModalMock;
}();

var WixModalMatcher = function() {
    function WixModalMatcher() {
        this._title = jasmine.any(String);
        this._content = jasmine.any(String);
        this._confirm = jasmine.any(String);
        this._cancel = jasmine.any(String);
    }
    WixModalMatcher.prototype.withTitle = function(title) {
        this._title = title;
        return this;
    };
    WixModalMatcher.prototype.withContent = function(content) {
        this._content = content;
        return this;
    };
    WixModalMatcher.prototype.withConfirm = function(confirm) {
        this._confirm = confirm;
        return this;
    };
    WixModalMatcher.prototype.withCancel = function(cancel) {
        this._cancel = cancel;
        return this;
    };
    WixModalMatcher.prototype.serialize = function() {
        return {
            title: this._title,
            content: this._content,
            confirm: this._confirm,
            cancel: this._cancel
        };
    };
    return WixModalMatcher;
}();

beforeEach(function() {
    var customMatchers = {
        toDisplayWixModal: function(expected) {
            return this.actual.dialogs.some(function(dialog) {
                return dialog.matches(expected);
            });
        }
    };
    jasmine.addMatchers(customMatchers);
});