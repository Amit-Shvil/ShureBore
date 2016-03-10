"use strict";

try {
    angular.module("styleTranslations");
} catch (e) {
    angular.module("styleTranslations", [ "pascalprecht.translate" ]);
}

angular.module("styleTranslations").config([ "$translateProvider", function($translateProvider) {
    var translations = {
        general: {
            YO: "Hello"
        }
    };
    $translateProvider.translations("fi", translations);
    $translateProvider.translations(translations);
    if ($translateProvider.preferredLanguage) {
        $translateProvider.preferredLanguage("fi");
    }
} ]).value("preferredLanguage", "fi");