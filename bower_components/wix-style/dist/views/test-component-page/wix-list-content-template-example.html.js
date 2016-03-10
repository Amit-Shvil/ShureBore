'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/test-component-page/wix-list-content-template-example.html',
    "<img class=\"wix-list-item-image\">\n" +
    "<div class=\"wix-list-item-content-body\">\n" +
    "    <div class=\"wix-list-item-title\">{{item.name}}</div>\n" +
    "    {{item.name}}\n" +
    "\n" +
    "    <div>\n" +
    "        <div class=\"wix-list-item-title\">{{item.name}}</div>\n" +
    "        {{item.name}}\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "        <div class=\"wix-list-item-title\">{{item.name}}</div>\n" +
    "        {{item.name}}\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"wix-list-item-title\">{{item.id}}</div>\n" +
    "</div>\n"
  );
}]);