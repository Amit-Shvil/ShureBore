'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/test-component-page/wix-dialog-builder-page.html',
    "<div class=\"modal-test\">\n" +
    "  This is the dialog builder e2e test page\n" +
    "  <button ng-click=\"main.wixMaterialModalObject.openAlert()\" class='button1'>Open Modal</button>\n" +
    "  <br>\n" +
    "  <button ng-click=\"main.wixMaterialModalObject.openPremium()\" class='button5'>Open Premium modal</button>\n" +
    "  <br>\n" +
    "  Return message\n" +
    "  <div class=\"return-message\">{{message}}</div>\n" +
    "</div>\n"
  );
}]);