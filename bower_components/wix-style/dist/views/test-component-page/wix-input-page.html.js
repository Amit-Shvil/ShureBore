'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/test-component-page/wix-input-page.html',
    "<h4>This is the wix-input test page</h4>\n" +
    "<div ng-init=\"main.someModel1=''; main.someModel2=''; main.someModel3=''\"></div>\n" +
    "<wix-input class='error' error-message='Some error message' error-type='tooltip' name='testInput' ng-model='main.someModel1' type='email'></wix-input>\n" +
    "<wix-input class='error' name='testInput' ng-model='main.someModel2' type='email'></wix-input>\n" +
    "<wix-input error-message='Some error message' error-type='tooltip' name='testInput' ng-model='main.someModel3' type='email'></wix-input>\n" +
    "<form name='TestForm' ng-init=\"main.someModel5 = 'data'\" novalidate>\n" +
    "  <wix-input class='error' data-hook='input-form-required-input' error-message='Some error message' error-type='tooltip' name='testInputRequired' ng-model='main.someModel4' required='true' type='text'></wix-input>\n" +
    "  <wix-input class='error' data-hook='input-form-required-input-with-data' error-message='Some error message' error-type='tooltip' name='testInputRequired' ng-model='main.someModel5' required='true' type='text'></wix-input>\n" +
    "  <button data-hook='input-submit-form-button' type='submit'>Submit</button>\n" +
    "</form>\n"
  );
}]);