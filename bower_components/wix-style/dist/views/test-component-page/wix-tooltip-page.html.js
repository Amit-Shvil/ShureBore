'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/test-component-page/wix-tooltip-page.html',
    "<style>\n" +
    "    .feature-test-section {\n" +
    "        padding: 5px;\n" +
    "        margin: 5px;\n" +
    "        border: 1px solid #b1b1b1;\n" +
    "        border-radius: 10px;\n" +
    "    }\n" +
    "    h4 {\n" +
    "        margin-top: 5px;\n" +
    "        margin-bottom: 15px;\n" +
    "    }\n" +
    "    h4:before {\n" +
    "        content: 'Test feature: ';\n" +
    "    }\n" +
    "    button {\n" +
    "        color: white;\n" +
    "        background-color: #3a95d1;\n" +
    "        padding: 5px 10px;\n" +
    "        border-radius: 15px;\n" +
    "        border: none;\n" +
    "    }\n" +
    "</style>\n" +
    "<div style=\"padding: 20px;\">\n" +
    "    <h2>This is the tooltip test page</h2>\n" +
    "    <div class=\"feature-test-section\">\n" +
    "        <h4><code>tooltip-enable</code></h4>\n" +
    "        <input type=\"checkbox\" ng-init=\"main.wixTooltipEnabled = true\" id=\"wix-tooltip-enable-checkbox\" ng-model=\"main.wixTooltipEnabled\"></input>\n" +
    "        <span ng-show=\"main.wixTooltipEnabled\">Tooltip is enabled</span>\n" +
    "        <span ng-hide=\"main.wixTooltipEnabled\">Tooltip is disabled</span>\n" +
    "        <a class=\"tooltip-holder\" href=\"#\" wix-tooltip=\"{{main.wixTooltip}}\" append-to-body=\"true\" placement=\"right\" tooltip-class=\"some-class\" tooltip-enable=\"{{main.wixTooltipEnabled}}\" style=\"width: 300px;\">hover me</a>\n" +
    "    </div>\n" +
    "    <div class=\"feature-test-section\">\n" +
    "        <h4><code>debug</code></h4>\n" +
    "        <div class=\"another-location\">just another location on the page that is not the tooltip</div>\n" +
    "        <a class=\"tooltip-holder-with-debug\" href=\"#\" wix-tooltip=\"{{main.wixTooltip}}\" append-to-body=\"true\" debug>hover me - I'm with a debug attribute</a>\n" +
    "    </div>\n" +
    "    <div class=\"feature-test-section\">\n" +
    "        <h4><code>tooltip-template</code> and <code>tooltip-scope</code></h4>\n" +
    "        <a class=\"tooltip-scoped-template\" href=\"#\" wix-tooltip tooltip-scope=\"main.myScope\" append-to-body=\"true\" tooltip-template=\"{{main.wixTooltipScoped}}\" placement=\"right\" debug>hover me</a>\n" +
    "    </div>\n" +
    "    <div class=\"feature-test-section\">\n" +
    "        <h4><code>tooltip-trigger=\"click hover\"</code></h4>\n" +
    "        <button class=\"tooltip-click-hover-trigger\" wix-tooltip=\"hellllo\" append-to-body=\"true\" tooltip-trigger=\"click hover\" placement=\"right\">click me</button>\n" +
    "        <br/>\n" +
    "        <i class=\"dummy-holder\">I'm just a holder...</i>\n" +
    "    </div>\n" +
    "    <div class=\"feature-test-section\">\n" +
    "        <h4><code>tooltip-trigger=\"click click-selector\"</code></h4>\n" +
    "        <button class=\"tooltip-click-trigger\" wix-tooltip=\"hellllo\" append-to-body=\"true\" tooltip-trigger=\"click click-selector\" placement=\"right\">click me</button>\n" +
    "    </div>\n" +
    "    <div class=\"feature-test-section\">\n" +
    "        <h4><code>is-open</code></h4>\n" +
    "        {{isHoverTooltipOpen;\"\"}}\n" +
    "        <a href=\"#\" class=\"tooltip-is-open-hover\" wix-tooltip=\"see that I'm opened\" append-to-body=\"true\" placement=\"top\" is-open=\"isHoverTooltipOpen\">hover me</a>\n" +
    "        <span class=\"is-open-hover-result\">\n" +
    "            hover-tooltip is <b>{{isHoverTooltipOpen ? 'open' : 'closed'}}</b>\n" +
    "        </span>\n" +
    "        <br/>\n" +
    "        {{isClickTooltipOpen;\"\"}}\n" +
    "        <button class=\"tooltip-is-open-click\" wix-tooltip=\"see that I'm opened\" tooltip-trigger=\"click click-selector\" placement=\"top\" is-open=\"isClickTooltipOpen\">click me</button>\n" +
    "        <span class=\"is-open-click-result\">\n" +
    "            click-tooltip is <b>{{isClickTooltipOpen ? 'open' : 'closed'}}</b>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <div class=\"feature-test-section\">\n" +
    "        <h4><code>is-open</code></h4>\n" +
    "        <button class=\"tooltip-is-open-change\" wix-tooltip=\"hellllo\" append-to-body=\"true\" tooltip-trigger=\"click click-selector\" placement=\"top\" is-open=\"isOpen\">click me</button>\n" +
    "        <br>\n" +
    "        <input type=\"checkbox\" ng-model=\"isOpen\" class=\"tooltip-is-open-checkbox\"/> check me to close the tooltip\n" +
    "    </div>\n" +
    "    <div class=\"feature-test-section\">\n" +
    "        <h4><code>tooltip-close-on-content</code></h4>\n" +
    "        {{isOpen;\"\"}}\n" +
    "        <a href=\"#\" class=\"tooltip-with-close-on-content-attribute\" wix-tooltip=\"should be closed\" append-to-body=\"true\" placement=\"top\" tooltip-close-on-content=\"true\">hover me</a>\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );
}]);