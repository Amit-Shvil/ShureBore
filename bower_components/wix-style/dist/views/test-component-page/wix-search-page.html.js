'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/test-component-page/wix-search-page.html',
    "This is the search page do whatever you want here no one will interfere {{main.searchObject}}\n" +
    "</br>\n" +
    "</br>\n" +
    "<div>\n" +
    "    <wix-search class=\"animated\" skin=\"transparent\" placeholder=\"Search\"\n" +
    "                on-search=\"main.alertSearch(main.searchObject.myModel)\"\n" +
    "                ng-model=\"main.searchObject.myModel\"></wix-search>\n" +
    "</div>"
  );
}]);