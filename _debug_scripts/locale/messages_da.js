'use strict';

try {
  angular.module('documentsTranslations');
} catch (e) {
  angular.module('documentsTranslations', ['pascalprecht.translate']);
}

angular.module('documentsTranslations').config(['$translateProvider',
  function ($translateProvider) {
    var translations = {
      'general': {
        'YO': 'Hej'
      }
    };
    $translateProvider.translations('da', translations);
    $translateProvider.translations(translations);
    if ($translateProvider.preferredLanguage) {
      $translateProvider.preferredLanguage('da');
    }
  }
]).value('preferredLanguage', 'da');
