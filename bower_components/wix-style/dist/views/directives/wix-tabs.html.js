'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/directives/wix-tabs.html',
    "<div class=\"tabs-wrapper\">\n" +
    "    <a ng-repeat=\"tab in wixTabsVM.tabControllers\" class=\"tab-container tab-title\" ng-class=\"{'active': wixTabsVM.isActive(tab), 'disabled': tab.disabled}\" href ng-click=\"wixTabsVM.onTabClick(tab)\">{{tab.getLabel()}}</a>\n" +
    "</div>\n" +
    "<!--<div ng-repeat=\"tab in wixTabsVM.tabsArray\" class=\"tab-content\" ng-class=\"{'active-tab-content': wixTabsVM.isActive(tab)}\" ng-bind-html=\"wixTabsVM.getTabContent(tab)\">\n" +
    "</div>-->\n" +
    "\n" +
    "<div class=\"active-tab-content\" ng-transclude></div>\n" +
    "\n"
  );
}]);