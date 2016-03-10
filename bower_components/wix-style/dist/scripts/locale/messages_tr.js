"use strict";

try {
    angular.module("styleTranslations");
} catch (e) {
    angular.module("styleTranslations", [ "pascalprecht.translate" ]);
}

angular.module("styleTranslations").config([ "$translateProvider", function($translateProvider) {
    var translations = {
        general: {
            YO: "Merhaba"
        }
    };
    $translateProvider.translations("tr", translations);
    $translateProvider.translations(translations);
    if ($translateProvider.preferredLanguage) {
        $translateProvider.preferredLanguage("tr");
    }
} ]).value("preferredLanguage", "tr");