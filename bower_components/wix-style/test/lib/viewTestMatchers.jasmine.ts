/// <reference path="../reference.ts" />

module helpers {
  beforeEach(function () {
    var toBePresent = function (util, customEqualityTesters) {
      return {
        compare: function (actual, expected) {
          let passed: boolean = actual.length > 0;
          return {
            pass: passed
          };
        }
      };
    };

    var toBeDisplayed = function (util, customEqualityTesters) {
      return {
        compare: function (actual, expected) {
          var element = actual;

          // check if present
          var isShown = true;
          if (!element.length) {
            isShown = false;
          }

          // check ng-hide class
          while (isShown && element.length) {
            isShown = !element.attr('class') || element.attr('class').indexOf('ng-hide') < 0;
            element = element.parent();
          }

          return {
            pass: isShown
          }
        }
      };
    };

    var toBeDisabled = function (util, customEqualityTesters) {
      return {
        compare: function (actual, expected) {
          var element = actual;

          let passed = element.length > 0 && element.attr('disabled');
          return {
            pass: passed
          }
        }
      };
    };

    var toHaveText = function (util, customEqualityTesters) {
      return {
        compare: function (actual, expected) {
          let passed;
          actual = actual.text().trim();
          passed = actual === expected;
          return {
            pass: passed,
            message: `Expect ${actual}${passed ? '' : ' not'} to have text '${expected}'`
          };
        }
      };
    };

    var toHaveClass = function (util, customEqualityTesters) {
      return {
        compare: function (actual, expected) {
          let passed = actual.hasClass ? actual.hasClass(expected) : angular.element(actual).hasClass(expected);
          return {
            pass: passed,
            message: `Expect ${actual}${passed ? '' : ' not'} to have class '${expected}'`
          };
        }
      };
    };

    jasmine.addMatchers({
      toBePresent: toBePresent,
      toBeDisplayed: toBeDisplayed,
      toBeDisabled: toBeDisabled,
      toHaveText: toHaveText,
      toHaveClass: toHaveClass,
    });
  });
}
