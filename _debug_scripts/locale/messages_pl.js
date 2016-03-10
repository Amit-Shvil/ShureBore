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
        'YO': 'Halo'
      }
    };
    $translateProvider.translations('pl', translations);
    $translateProvider.translations(translations);
    if ($translateProvider.preferredLanguage) {
      $translateProvider.preferredLanguage('pl');
    }
  }
]).value('preferredLanguage', 'pl');
