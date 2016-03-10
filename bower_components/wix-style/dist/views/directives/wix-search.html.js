'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/directives/wix-search.html',
    "<label class=\"wix-search-icon wix-style-svg-font-icons-search\"></label>\n" +
    "<span class=\"wix-search-wrapper\">\n" +
    "  <input type=\"text\" ng-focus=\"onFocusIn($event)\" ng-blur=\"onFocusOut($event)\">\n" +
    "  <span class=\"wix-search-clear wix-style-svg-font-icons-x\" ng-mousedown=\"clearSearch($event)\" ng-class=\"{'visible': shouldShowClear()}\"></span>\n" +
    "</span>\n" +
    "\n"
  );
}]);