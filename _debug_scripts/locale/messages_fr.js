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
        'YO': 'Bonjour'
      }
    };
    $translateProvider.translations('fr', translations);
    $translateProvider.translations(translations);
    if ($translateProvider.preferredLanguage) {
      $translateProvider.preferredLanguage('fr');
    }
  }
]).value('preferredLanguage', 'fr');
