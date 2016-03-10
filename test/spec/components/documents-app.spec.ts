///// <reference path="../../../reference.ts" />
//'use strict';
//
//class DocumentsAppDriver extends WixBaseViewUnitDriver {
//
//  render(name = '') {
//    this.renderFromTemplate(`<documents-app name="name"></documents-app>`, {name});
//  }
//
//  getContainerElement() {
//    return this.findByDataHook('container');
//  }
//
//  getCounterElement() {
//    return this.findByDataHook('counter');
//  }
//}
//
//describe('Component: documentsApp', () => {
//  let driver: DocumentsAppDriver;
//
//  beforeEach(() => {
//    module('documentsAppInternal');
//    driver = new DocumentsAppDriver();
//  });
//
//  afterEach(() => {
//    driver.disconnectFromBody();
//  });
//
//  it('should display name', () => {
//    driver.render('kukuchumuku');
//    expect(driver.element.text()).toContain('This is kukuchumuku');
//  });
//
//  it('should increase counter on click', () => {
//    driver.render();
//    expect(driver.getCounterElement().text()).toBe('0');
//
//    driver.getContainerElement().click();
//    expect(driver.getCounterElement().text()).toBe('1');
//  });
//});
