'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/test-component-page/modal-content-example.html',
    "<div>This is loaded content. The title is: <strong>{{title}}</strong></div>"
  );
}]);