'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/components/modals/wix-premium-window.html',
    "<div class='wix-modal'>\n" +
    "  <div class='wix-modal--premium-window'>\n" +
    "    <div class='wix-modal--premium-header'>\n" +
    "      <button class='wix-modal--premium-close-button wix-style-svg-font-icons-close' md-autofocus ng-click='windowCtrl.close($event)'></button>\n" +
    "      <div class='wix-modal--premium-title'>{{title}}</div>\n" +
    "      <div class='wix-modal--premium-sub-title'>{{subtitle}}</div>\n" +
    "    </div>\n" +
    "    <div class='wix-modal--premium-modal-body'>\n" +
    "      <img class='wix-modal--premium-icon' ng-show='iconUrl' ng-src='{{iconUrl}}'>\n" +
    "      <div class='wix-modal--premium-content'>{{htmlContent}}</div>\n" +
    "      <div class='wix-modal--premium-buttons'>\n" +
    "        <button class='wix-modal--premium-confirm-button' ng-class='confirmButton.buttonClass' ng-click='windowCtrl.confirm($event)' ng-show='confirmButton'>{{confirmButton.label}}</button>\n" +
    "        <button class='wix-modal--premium-cancel-button' ng-class='cancelButton.buttonClass' ng-click='windowCtrl.cancel($event)' ng-show='cancelButton'>{{cancelButton.label}}</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );
}]);