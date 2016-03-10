'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/directives/wix-list.html',
    "<wix-list-item ng-repeat=\"item in items track by $index\" ng-class=\"{'empty': item.empty}\" index=\"{{$index}}\" ng-if=\"!transcluded\">\n" +
    "    <div class=\"wix-list-item-blue-section\" ng-if=\"!checkableItem() && !imageSquare()\"></div>\n" +
    "    <wix-checkbox ng-class=\"{'wix-list-item-checkbox-circular-image': !imageSquare()}\"\n" +
    "                  ng-if=\"checkableProperty\" ng-model=\"item.checked\"></wix-checkbox>\n" +
    "    <div class=\"wix-list-item-content\" ng-include=\"contentTemplate\"\n" +
    "         ng-class=\"imageSquare() ? 'wix-list-square-image' : 'wix-list-circular-image'\"></div>\n" +
    "    <div class=\"wix-list-draggable\" ng-if=\"draggableItem\"></div>\n" +
    "</wix-list-item>\n" +
    "<div ng-transclude=\"true\"></div>"
  );
}]);