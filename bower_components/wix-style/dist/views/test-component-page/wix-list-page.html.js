'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/test-component-page/wix-list-page.html',
    "<div ng-init=\"items=[{'name':'List Item 1', 'id': 1}, {'name':'List Item 2', 'id': 2}]; a=2;\">\n" +
    "    <button ng-click=\"a=a+1; items.push({'name':'List Item '+a, 'id': a});\">Add</button>\n" +
    "    <wix-list\n" +
    "            ng-model=\"items\"\n" +
    "            draggable-item=\"true\"\n" +
    "            checkable-property=\"checked\"\n" +
    "            content-template=\"views/test-component-page/wix-list-content-template-example.html\"\n" +
    "            transcluded=\"false\"\n" +
    "           >\n" +
    "        <!--<wix-list-item ng-repeat=\"item in items track by $index\" ng-class=\"{'empty': item.empty}\" index=\"{{$index}}\">-->\n" +
    "            <!--<div class=\"wix-list-item-blue-section\" ng-if=\"!checkableItem() && !imageSquare()\"></div>-->\n" +
    "            <!--<wix-checkbox ng-class=\"{'wix-list-item-checkbox-circular-image': !imageSquare()}\"-->\n" +
    "                          <!--ng-if=\"checkableItem()\"></wix-checkbox>-->\n" +
    "            <!--<div class=\"wix-list-item-content\"-->\n" +
    "                 <!--ng-class=\"imageSquare() ? 'wix-list-square-image' : 'wix-list-circular-image'\">-->\n" +
    "                <!--<img class=\"wix-list-item-image\">-->\n" +
    "                <!--<div class=\"wix-list-item-content-body\">-->\n" +
    "                    <!--<div class=\"wix-list-item-title\">{{item.name}}</div>-->\n" +
    "                    <!--{{item.name}}-->\n" +
    "\n" +
    "                    <!--<div>-->\n" +
    "                        <!--<div class=\"wix-list-item-title\">{{item.name}}</div>-->\n" +
    "                        <!--{{item.name}}-->\n" +
    "                    <!--</div>-->\n" +
    "\n" +
    "                    <!--<div>-->\n" +
    "                        <!--<div class=\"wix-list-item-title\">{{item.name}}</div>-->\n" +
    "                        <!--{{item.name}}-->\n" +
    "                    <!--</div>-->\n" +
    "\n" +
    "                    <!--<div class=\"wix-list-item-title\">{{item.id}}</div>-->\n" +
    "                <!--</div>-->\n" +
    "            <!--</div>-->\n" +
    "            <!--<div class=\"wix-list-draggable\" ></div>-->\n" +
    "        <!--</wix-list-item>-->\n" +
    "    </wix-list>\n" +
    "    <p id=\"wix-list-dump\">{{items}}</p>\n" +
    "</div>"
  );
}]);