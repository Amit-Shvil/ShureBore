'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/directives/wix-dropdown.html',
    "<div ng-class=\"{'dropdown-no-hover': openOnClick, 'dropdown-open': isOpen}\" class=\"wix-dropdown\">\n" +
    "    <div class=\"dropdown-title\" ng-click=\"openOnClick && openDropdown()\">{{selectedItem.text}}</div>\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"item in items\" ng-class=\"{'selected': item.selected}\">\n" +
    "            <a ng-click=\"selectOption(item)\">\n" +
    "               {{item.text}}\n" +
    "             </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );
}]);