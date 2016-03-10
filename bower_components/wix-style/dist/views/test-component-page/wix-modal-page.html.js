'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/test-component-page/wix-modal-page.html',
    "<div class=\"modal-test\">\n" +
    "    This is the modal e2e test page\n" +
    "    <button ng-click=\"main.wixModalObject.openAlert()\" class='button1'>Open Modal</button>\n" +
    "    <br>\n" +
    "    <button ng-click=\"main.wixModalObject.openCustom()\" class='button2'>Open Custom modal</button>\n" +
    "    <br>\n" +
    "    <button ng-click=\"main.wixModalObject.open2Modal()\" class='button3'>Open 2 modal at once</button>\n" +
    "    <br>\n" +
    "    <button ng-click=\"main.wixModalObject.openDangerModal()\" class='button4'>Open Danger Modal</button>\n" +
    "    <br>\n" +
    "    <button ng-click=\"main.wixModalObject.openPremium()\" class='button5'>Open Premium</button>\n" +
    "    <br>\n" +
    "    Return message\n" +
    "    <div class=\"return-message\">{{message}}</div>\n" +
    "</div>\n"
  );
}]);