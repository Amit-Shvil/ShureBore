'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/directives/wix-wizard.html',
    "<ul class=\"wizard-steps\">\n" +
    "    <li class=\"step\" ng-repeat=\"step in steps\">\n" +
    "        <div class=\"step-status\" ng-class=\"{'active': step.state==='active'}\"><span>1</span></div>\n" +
    "        <a class=\"step-name\">{{step.name}}</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "<button class=\"next-button wix-button is-button-large\">Next</button>"
  );
}]);