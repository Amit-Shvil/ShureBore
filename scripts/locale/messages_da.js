"use strict";try{angular.module("documentsTranslations")}catch(e){angular.module("documentsTranslations",["pascalprecht.translate"])}angular.module("documentsTranslations").config(["$translateProvider",function(a){var b={general:{YO:"Hej"}};a.translations("da",b),a.translations(b),a.preferredLanguage&&a.preferredLanguage("da")}]).value("preferredLanguage","da");