'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/components/modals/wix-modal-custom-example.html',
    "<div class='wix-modal-custom-example-class'>\n" +
    "  <div>Hey I'm a custom modal</div>\n" +
    "  <button class='wix-button' ng-click='myCustomController.confirm($event)'>Click to Close</button>\n" +
    "</div>\n"
  );
}]);