'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/test-component-page/wix-tabs-page.html',
    "<wix-tabs class=\"wix-tabs is-tabs-blue is-tabs-toggle\">\n" +
    "    <wix-tab label=\"{{'general.YO' | translate}}\">{{'general.YO' | translate}}</wix-tab>\n" +
    "    <wix-tab label=\"Title2\"><div ng-init=\"arr=[1, 2, 3]\"><div ng-repeat=\"item in arr\">{{item}}</div></div></wix-tab>\n" +
    "    <wix-tab label=\"Title3\" active>Content Tab 3</wix-tab>\n" +
    "</wix-tabs>\n" +
    "\n" +
    "<wix-tabs class=\"wix-tabs is-tabs-blue\">\n" +
    "    <wix-tab label=\"Title1\" active>Content Tab 1</wix-tab>\n" +
    "    <wix-tab label=\"Title2\">Content Tab 2</wix-tab>\n" +
    "    <wix-tab label=\"Title3\">Content Tab 3</wix-tab>\n" +
    "    <wix-tab label=\"Title4\">Content Tab 4</wix-tab>\n" +
    "</wix-tabs>\n" +
    "\n" +
    "<wix-tabs class=\"wix-tabs is-tabs-toggle\">\n" +
    "    <wix-tab label=\"Title1\" active>Content Tab 1</wix-tab>\n" +
    "    <wix-tab label=\"Title2\">Content Tab 2</wix-tab>\n" +
    "    <wix-tab label=\"Title3\">Content Tab 3</wix-tab>\n" +
    "</wix-tabs>\n" +
    "\n" +
    "<wix-tabs class=\"wix-tabs is-tabs-blue is-tabs-toggle\">\n" +
    "    <wix-tab label=\"Title1\" active>Content Tab 1</wix-tab>\n" +
    "    <wix-tab label=\"Title2\">Content Tab 2</wix-tab>\n" +
    "    <wix-tab label=\"Title3\">Content Tab 3</wix-tab>\n" +
    "</wix-tabs>\n" +
    "\n" +
    "<wix-tabs class=\"wix-tabs is-tabs-toggle is-tabs-large\">\n" +
    "    <wix-tab label=\"Title1\" active>Content Tab 1</wix-tab>\n" +
    "    <wix-tab label=\"Title2\">Content Tab 2</wix-tab>\n" +
    "    <wix-tab label=\"Title3\">Content Tab 3</wix-tab>\n" +
    "</wix-tabs>\n"
  );
}]);