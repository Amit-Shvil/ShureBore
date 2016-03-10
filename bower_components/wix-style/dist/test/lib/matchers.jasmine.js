/// <reference path="../../reference.ts" />
'use strict';
beforeEach(function () {
    var _this = this;
    jasmine.addMatchers({
        toEqualData: function () { return ({ compare: function (actual, expected) {
                return { pass: angular.equals(actual, expected) };
            } }); },
        toHaveBeenCalledOnce: function () { return ({ compare: function (actual) {
                var msg = 'Expected spy ' + actual.identity + ' to have been called once, but was ', count = actual.calls.count();
                if (count === 1) {
                    return { pass: true, message: msg.replace('to have', 'not to have') + 'called once.' };
                }
                else {
                    return { pass: false, message: count === 0 ? msg + 'never called.' :
                            msg + 'called ' + count + ' times.' };
                }
            } }); },
        toBeOneOf: function () { return ({ compare: function (actual) {
                var expected = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    expected[_i - 1] = arguments[_i];
                }
                return { pass: expected.indexOf(actual) !== -1 };
            } }); },
        toBeVisible: function () { return ({ compare: function (actual) {
                var expected = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    expected[_i - 1] = arguments[_i];
                }
                var msg = actual.length > 0 ?
                    'Expected \'' + angular.mock.dump(actual) + '\' to be visible.' :
                    'Expected an element that is not present to be visible';
                var pass = actual.length > 0 && !isSelfOrAncestorHasClass(actual, 'ng-hide');
                return { pass: pass, message: msg };
            } }); },
        toHaveClass: function () { return ({ compare: function (actual, expected) {
                var msg = 'Expected \'' + angular.mock.dump(_this.actual) + '\' to have class \'' + expected + '\'.';
                var pass = actual.hasClass ? actual.hasClass(expected) : angular.element(actual).hasClass(expected);
                return { pass: pass, message: pass ? msg.replace('to have', 'not to have') : msg };
            } }); },
        toBeAPromise: function () { return ({ compare: function (actual) {
                var expected = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    expected[_i - 1] = arguments[_i];
                }
                return { pass: typeof actual.then === 'function' };
            } }); },
        toContainMenuItemWith: function (utils, properties) { return ({ compare: function (actual) {
                var expected = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    expected[_i - 1] = arguments[_i];
                }
                return { pass: actual.some(function (menuItem) {
                        return Object.keys(properties).every(function (key) {
                            return menuItem[key] === properties[key];
                        });
                    }) };
            } }); },
    });
});
function isSelfOrAncestorHasClass(actual, clazz) {
    var ancestorHasClass = function (elm) { return elm.closest("." + clazz).length !== 0; };
    return isHasClass(actual, clazz) || ancestorHasClass(actual.closest ? actual : angular.element(actual));
}
function isHasClass(actual, clazz) {
    return actual.hasClass ? actual.hasClass(clazz) : angular.element(actual).hasClass(clazz);
}
//# sourceMappingURL=matchers.jasmine.js.map