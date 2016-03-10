'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/main.html',
    "<div class='hero-unit' ng-controller='MainController as main'>\n" +
    "  <h1>{{'general.YO' | translate}}</h1>\n" +
    "  <p>You now have</p>\n" +
    "  <ul>\n" +
    "    <li ng-repeat='thing in main.awesomeThings'>{{thing}}</li>\n" +
    "  </ul>\n" +
    "  <p>installed.</p>\n" +
    "  <h3>Enjoy coding! - Yeoman</h3>\n" +
    "</div>\n" +
    "<div>ng-include='views/components/messageWindow.html'</div>\n"
  );
}]);