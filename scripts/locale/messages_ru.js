"use strict";try{angular.module("documentsTranslations")}catch(e){angular.module("documentsTranslations",["pascalprecht.translate"])}angular.module("documentsTranslations").config(["$translateProvider",function(a){var b={general:{YO:"привет"}};a.translations("ru",b),a.translations(b),a.preferredLanguage&&a.preferredLanguage("ru")}]).value("preferredLanguage","ru");