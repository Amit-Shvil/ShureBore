"use strict";try{angular.module("documentsTranslations")}catch(e){angular.module("documentsTranslations",["pascalprecht.translate"])}angular.module("documentsTranslations").config(["$translateProvider",function(a){var b={general:{YO:"Hallo"}};a.translations("nl",b),a.translations(b),a.preferredLanguage&&a.preferredLanguage("nl")}]).value("preferredLanguage","nl");