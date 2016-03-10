/// <reference path="../../reference.ts" />
'use strict';

declare module jasmine {
  interface Matchers {
    toHaveBeenCalledOnce(): boolean;
    toBeOneOf(expected?: any): boolean;
    toHaveClass(expected?: any): boolean;
    toBeAPromise(): boolean;
    toContainMenuItemWith(expected: any): boolean;
    toMatchBiAdapter(expected: any): boolean;
    toMatchBiUrl(expected: any): boolean;
    toBeVisible(): boolean;
  }
}

beforeEach(function () {

  jasmine.addMatchers({
    toEqualData: () => ({compare: (actual, expected) => {
      return {pass: angular.equals(actual, expected)};
    }}),
    toHaveBeenCalledOnce: () => ({compare: (actual) => {
      let msg = 'Expected spy ' + actual.identity + ' to have been called once, but was ',
        count = actual.calls.count();
      if (count === 1) {
        return {pass: true, message: msg.replace('to have', 'not to have') + 'called once.'};
      } else {
        return {pass: false, message: count === 0 ? msg + 'never called.' :
        msg + 'called ' + count + ' times.'};
      }
    }}),
    toBeOneOf: () => ({compare: (actual, ...expected) => {
      return {pass: expected.indexOf(actual) !== -1};
    }}),
    toBeVisible: () => ({compare: (actual, ...expected) => {
      let msg = actual.length > 0 ?
      'Expected \'' + angular.mock.dump(actual) + '\' to be visible.' :
        'Expected an element that is not present to be visible';
      let pass = actual.length > 0 && !isSelfOrAncestorHasClass(actual, 'ng-hide');
      return {pass: pass, message: msg};
    }}),
    toHaveClass: () => ({compare: (actual, expected) => {
      let msg = 'Expected \'' + angular.mock.dump(this.actual) + '\' to have class \'' + expected + '\'.';
      let pass = actual.hasClass ? actual.hasClass(expected) : angular.element(actual).hasClass(expected);
      return {pass, message: pass ? msg.replace('to have', 'not to have') : msg};
    }}),
    toBeAPromise: () => ({compare: (actual, ...expected) => {
      return {pass: typeof actual.then === 'function'};
    }}),
    toContainMenuItemWith: (utils, properties) => ({compare: (actual, ...expected) => {
      return {pass: actual.some(menuItem => {
        return Object.keys(properties).every(key => {
          return menuItem[key] === properties[key];
        });
      })};
    }}),
  });
});

function isSelfOrAncestorHasClass(actual, clazz) {
  let ancestorHasClass = elm => elm.closest(`.${clazz}`).length !== 0;
  return isHasClass(actual, clazz) || ancestorHasClass(actual.closest ? actual : angular.element(actual));
}

function isHasClass(actual, clazz) {
  return actual.hasClass ? actual.hasClass(clazz) : angular.element(actual).hasClass(clazz);
}
