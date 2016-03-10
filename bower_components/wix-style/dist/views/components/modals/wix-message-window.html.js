'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/components/modals/wix-message-window.html',
    "<div class='wix-modal'>\n" +
    "  <div class='wix-modal--message-window' data-hook='modal-container' ng-class='style'>\n" +
    "    <div class='wix-modal--header' data-hook='modal-header' ng-if='title'>\n" +
    "      <div class='wix-modal--title' data-hook='modal-title'>{{title}}</div>\n" +
    "      <button class='wix-modal--close-button wix-style-svg-font-icons-close' data-hook='close-button' md-autofocus ng-click='windowCtrl.close($event)' type='button'></button>\n" +
    "    </div>\n" +
    "    <div class='wix-modal--body'>\n" +
    "      <div class='wix-modal--icon-wrapper' data-hook='modal-icon-wrapper' ng-if='iconUrl'>\n" +
    "        <img class='wix-modal--icon' ng-src='{{iconUrl}}'>\n" +
    "      </div>\n" +
    "      <div class='wix-modal--content' data-hook='modal-content-inline' ng-bind-html='htmlContent' ng-if='htmlContent'></div>\n" +
    "      <div class='wix-modal--content' data-hook='modal-content-external' ng-if='contentUrl' ng-include='contentUrl'></div>\n" +
    "    </div>\n" +
    "    <div class='wix-modal--footer' data-hook='modal-footer' ng-if='confirmButton.label || cancelButton.label'>\n" +
    "      <button class='modal-button wix-modal--confirm-button' data-hook='modal-confirm-button' ng-class='confirmButton.buttonClass' ng-click='windowCtrl.confirm($event)' ng-if='confirmButton.label'>{{confirmButton.label}}</button>\n" +
    "      <button class='modal-button is-button-outline wix-modal--cancel-button' data-hook='modal-cancel-button' ng-class='cancelButton.buttonClass' ng-click='windowCtrl.cancel($event)' ng-if='cancelButton.label'>{{cancelButton.label}}</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );
}]);