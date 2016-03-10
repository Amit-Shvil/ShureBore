"use strict";

if (angular.version.minor < 5) {
    var hooked = angular.module;
    angular.module = function() {
        var moduleInstance = hooked.apply(this, arguments);
        var CNTRL_REG = /^(\S+)(\s+as\s+(\w+))?$/;
        function identifierForController(controller) {
            if (angular.isString(controller)) {
                var match = CNTRL_REG.exec(controller);
                return match && match[3];
            }
        }
        if (!moduleInstance.component) {
            moduleInstance.component = function(name, options) {
                function factory($injector) {
                    function makeInjectable(fn) {
                        if (angular.isFunction(fn) || angular.isArray(fn)) {
                            return function(tElement, tAttrs) {
                                return $injector.invoke(fn, this, {
                                    $element: tElement,
                                    $attrs: tAttrs
                                });
                            };
                        } else {
                            return fn;
                        }
                    }
                    var template = !options.template && !options.templateUrl ? "" : options.template;
                    return {
                        controller: options.controller || function() {},
                        controllerAs: identifierForController(options.controller) || options.controllerAs || "$ctrl",
                        template: makeInjectable(template),
                        templateUrl: makeInjectable(options.templateUrl),
                        transclude: options.transclude,
                        scope: options.bindings || {},
                        bindToController: true,
                        restrict: options.restrict || "E"
                    };
                }
                factory.$inject = [ "$injector" ];
                return moduleInstance.directive(name, factory);
            };
        }
        return moduleInstance;
    };
}

(function() {
    var ngRoute;
    try {
        ngRoute = angular.module("ngRoute");
    } catch (e) {}
    if (ngRoute) {
        ngRoute.config([ "$routeProvider", function($routeProvider) {
            function fix(obj) {
                if (obj.resolve && !obj.controller) {
                    var route = {};
                    route.controllerAs = "$resolve";
                    route.controller = function() {
                        var _this = this;
                        var args = arguments;
                        Object.keys(obj.resolve).forEach(function(key, index) {
                            return _this[key] = args[index];
                        });
                    };
                    route.controller.$inject = Object.keys(obj.resolve);
                    return angular.extend(route, obj);
                } else {
                    return obj;
                }
            }
            var hooked = $routeProvider.when;
            $routeProvider.when = function() {
                arguments[1] = fix(arguments[1]);
                return hooked.apply(this, arguments);
            };
        } ]);
    }
})();

var PermissionsDefinition = function() {
    function PermissionsDefinition(json) {
        this.permissions = json.permissions;
        this.isOwner = json.isOwner;
        this.$$ownerId = json.ownerId;
        this.$$roles = json.roles;
    }
    return PermissionsDefinition;
}();

var PermissionsDefinitionBuilder = function() {
    function PermissionsDefinitionBuilder() {
        this.roles = [];
        this.permissions = [];
    }
    PermissionsDefinitionBuilder.prototype.withPermissions = function(permissions) {
        this.permissions = permissions;
        return this;
    };
    PermissionsDefinitionBuilder.prototype.withIsOwner = function(isOwner) {
        this.isOwner = isOwner;
        return this;
    };
    PermissionsDefinitionBuilder.prototype.withOwnerId = function(ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    PermissionsDefinitionBuilder.prototype.withRoles = function(roles) {
        this.roles = roles;
        return this;
    };
    PermissionsDefinitionBuilder.prototype.build = function() {
        return new PermissionsDefinition({
            permissions: this.permissions,
            isOwner: this.isOwner,
            roles: this.roles,
            ownerId: this.ownerId
        });
    };
    return PermissionsDefinitionBuilder;
}();

"use strict";

angular.module("wixAngularExperiments", []);

angular.module("wixAngularPermissionsConstants", []);

angular.module("wixAngularPermissions", [ "wixAngularPermissionsConstants" ]);

angular.module("wixAngularBackwardCompatibility", [ "wixAngularAppInternal", "wixAngularExperiments" ]);

angular.module("wixAngularStorage", [ "wixAngularAppInternal" ]);

angular.module("wixAngularStorageHub", [ "wixAngularStorage" ]);

angular.module("wixAngularAppInternal", []);

angular.module("wixAngularInterceptor", [ "wixAngularAppInternal" ]).config([ "$httpProvider", "wixAngularTopologyProvider", function($httpProvider, wixAngularTopologyProvider) {
    $httpProvider.interceptors.push("wixAngularInterceptor");
    if (!wixAngularTopologyProvider.getStaticsUrl()) {
        wixAngularTopologyProvider.setStaticsUrl(angular.element(document).find("base").attr("href"));
    }
} ]);

angular.module("wixAngularTranslateCompile", [ "pascalprecht.translate" ]);

angular.module("wixAngularConstants", []);

angular.module("wixAngular", [ "wixAngularAppInternal", "wixAngularTranslateCompile", "wixAngularStorage", "wixAngularExperiments", "wixAngularInterceptor", "wixAngularBackwardCompatibility", "wixAngularPermissions", "wixAngularConstants" ]);

"use strict";

angular.module("wixAngularStorage").constant("ANGULAR_STORAGE_PREFIX", "wixAngularStorage").constant("KEY_SEPARATOR", "|").constant("DEFAULT_AGE_IN_SEC", 60 * 60).constant("CLEANING_INTERVAL", 1e3 * 60 * 10).constant("CLEAN_EPSILON", 100).constant("MAX_KEY_LENGTH", 100).constant("MAX_VALUE_SIZE_IN_BYTES", 4 * 1024).constant("MAX_AGE_IN_SEC", 60 * 60 * 24 * 2).constant("MAX_STORAGE_SIZE_IN_BYTES", 1024 * 1024).constant("DATA_TYPE", "data").constant("ADHOC_TYPE", "adhoc").constant("REMOTE_TYPE", "remote").constant("wixAngularStorageErrors", {
    LOGGED_OUT: 1,
    NOT_FOUND: 2,
    RUNTIME_EXCEPTION: 3,
    SERVER_ERROR: 4,
    QUOTA_EXCEEDED: 5
});

angular.module("wixAngularConstants").constant("letterUnicode", "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-" + "ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-" + "ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓ" + "ەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺ" + "ࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-" + "ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰ" + "ৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-" + "ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌ" + "ଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊ" + "எ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-" + "ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-" + "ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-" + "ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄ" + "ງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-" + "ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥ" + "ၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-" + "ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕ" + "ጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱ" + "ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-" + "ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯ" + "ᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕ" + "ἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌ" + "ῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-" + "ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-" + "ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶ" + "ⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-" + "ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-" + "ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-" + "ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥ" + "ꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵ" + "ꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-" + "ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨ" + "שׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-" + "ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ").constant("numberUnicode", "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹" + "੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵๐-๙" + "໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏" + "᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-" + "ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-" + "㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꩐-" + "꩙꯰-꯹０-９").constant("dashPunctuationUnicode", "-֊־᐀᠆‐-―⸗⸚⸺⸻〜〰゠︱︲﹘﹣－");

"use strict";

var WixRoles = function() {
    function WixRoles() {
        this.OWNER = "owner";
        this.CONTRIBUTOR = "contributor";
        this.WIX_STAFF = "wixStaff";
    }
    return WixRoles;
}();

angular.module("wixAngularPermissionsConstants").constant("wixRoles", new WixRoles());

"use strict";

(function() {
    WixAngularStorageController.$inject = [ "wixCache", "wixStorage" ];
    function WixAngularStorageController(wixCache, wixStorage) {
        var that = this;
        function getOptions() {
            return {
                siteId: that.siteId,
                noCache: that.noCache
            };
        }
        var writeData = function(res) {
            that.data = res;
        };
        var eraseData = function() {
            that.data = null;
        };
        this.cache = {
            set: function(key, data) {
                wixCache.set(key, data, getOptions());
            },
            setWithGUID: function(data) {
                wixCache.setWithGUID(data).then(function(key) {
                    that.key = key;
                });
            },
            get: function(key) {
                wixCache.get(key, getOptions()).then(writeData, eraseData);
            },
            remove: function(key) {
                wixCache.remove(key, getOptions()).then(eraseData);
            }
        };
        this.remote = {
            set: function(key, value) {
                wixStorage.set(key, value, getOptions());
            },
            get: function(key) {
                wixStorage.get(key, getOptions()).then(writeData, eraseData);
            },
            remove: function(key) {
                wixStorage.remove(key, getOptions()).then(eraseData);
            }
        };
    }
    angular.module("wixAngularAppInternal").controller("WixAngularStorageController", WixAngularStorageController);
})();

"use strict";

(function() {
    wixTranslateCompile.$inject = [ "$translate", "$compile", "$parse" ];
    function wixTranslateCompile($translate, $compile, $parse) {
        return {
            restrict: "A",
            replace: true,
            link: function(scope, element, attrs) {
                function compileTranslation() {
                    var values = attrs.translateValues ? $parse(attrs.translateValues)(scope) : {};
                    var content = $translate(attrs.wixTranslateCompile, values);
                    element.html(content);
                    $compile(element.contents())(scope);
                }
                compileTranslation();
                scope.$watch(function() {
                    return attrs.wixTranslateCompile;
                }, compileTranslation);
            }
        };
    }
    angular.module("wixAngularTranslateCompile").directive("wixTranslateCompile", wixTranslateCompile);
})();

"use strict";

(function() {
    relativeHref.$inject = [ "wixAngularTopology" ];
    function relativeHref(wixAngularTopology) {
        return {
            priority: 99,
            link: function(scope, element, attr) {
                attr.$observe("relativeHref", function(url) {
                    if (url) {
                        attr.$set("href", wixAngularTopology.staticsUrl + url);
                    }
                });
            }
        };
    }
    angular.module("wixAngularAppInternal").directive("relativeHref", relativeHref);
})();

"use strict";

(function() {
    relativeSrc.$inject = [ "wixAngularTopology" ];
    ngSrc.$inject = [ "wixAngularTopology" ];
    function relativeSrc(wixAngularTopology) {
        return {
            priority: 99,
            link: function(scope, element, attr) {
                attr.$observe("relativeSrc", function(url) {
                    if (url) {
                        attr.$set("src", shouldSetStatics(url) ? wixAngularTopology.staticsUrl + url : url);
                    }
                });
            }
        };
    }
    function ngSrc(wixAngularTopology) {
        return {
            priority: 9999,
            link: function(scope, element, attr) {
                attr.$observe("ngSrc", function(url) {
                    if (shouldSetStatics(url)) {
                        attr.$set("src", wixAngularTopology.staticsUrl + url);
                    }
                });
            }
        };
    }
    function shouldSetStatics(url) {
        return url && (url.indexOf("images/") === 0 || url.indexOf("bower_components/") === 0);
    }
    angular.module("wixAngularAppInternal").directive("relativeSrc", relativeSrc).directive("ngSrc", ngSrc);
})();

"use strict";

(function() {
    wixManagersNgDirective.$inject = [ "manager", "ngDirective", "directiveName", "ngAttributeName", "wixManagerEval" ];
    function hookPreLink(link, fn) {
        if (typeof link === "function") {
            return {
                pre: fn,
                post: link
            };
        } else {
            var hooked = link.pre;
            link.pre = function() {
                fn.apply(undefined, arguments);
                return hooked.apply(undefined, arguments);
            };
            return link;
        }
    }
    function wixManagersNgDirective(manager, ngDirective, directiveName, ngAttributeName, wixManagerEval) {
        var ngDir = ngDirective[0];
        var ddo = angular.copy(ngDir);
        ddo.compile = function() {
            var ret = ngDir.compile.apply(ngDir, arguments);
            return hookPreLink(ret, function(scope, element, attr) {
                attr[ngAttributeName] = function() {
                    var expr = attr[directiveName];
                    return wixManagerEval.eval(manager, expr, attr.wixPermissionContext);
                };
            });
        };
        return ddo;
    }
    function defineNgDirective($injector, manager, name, ngDirective, ngAttributeName) {
        return $injector.invoke(wixManagersNgDirective, this, {
            manager: manager,
            directiveName: name,
            ngDirective: ngDirective,
            ngAttributeName: ngAttributeName
        });
    }
    angular.module("wixAngularExperiments").directive("wixExperimentIf", [ "$injector", "experimentManager", "ngIfDirective", function($injector, experimentManager, ngIfDirective) {
        return defineNgDirective($injector, experimentManager, "wixExperimentIf", ngIfDirective, "ngIf");
    } ]);
    angular.module("wixAngularPermissions").directive("wixPermissionIf", [ "$injector", "permissionsManager", "ngIfDirective", function($injector, permissionsManager, ngIfDirective) {
        return defineNgDirective($injector, permissionsManager, "wixPermissionIf", ngIfDirective, "ngIf");
    } ]);
    angular.module("wixAngularExperiments").directive("wixExperimentDisabled", [ "$injector", "experimentManager", "ngDisabledDirective", function($injector, experimentManager, ngDisabledDirective) {
        return defineNgDirective($injector, experimentManager, "wixExperimentDisabled", ngDisabledDirective, "ngDisabled");
    } ]);
    angular.module("wixAngularPermissions").directive("wixPermissionDisabled", [ "$injector", "permissionsManager", "ngDisabledDirective", function($injector, permissionsManager, ngDisabledDirective) {
        return defineNgDirective($injector, permissionsManager, "wixPermissionDisabled", ngDisabledDirective, "ngDisabled");
    } ]);
})();

"use strict";

(function() {
    wixManagersClass.$inject = [ "manager", "directiveName", "valuesToCheck", "$parse", "wixConstValue" ];
    function wixManagersClass(manager, directiveName, valuesToCheck, $parse, wixConstValue) {
        return {
            restrict: "A",
            link: function postLink(scope, element, attr) {
                var values = $parse(attr[valuesToCheck])(scope);
                var name = attr[directiveName];
                if (values) {
                    var classToAdd = values[manager.get(wixConstValue(name))];
                    if (classToAdd) {
                        element.addClass(classToAdd);
                    }
                }
            }
        };
    }
    function defineClassDirective($injector, manager, name, valuesToCheck) {
        return $injector.invoke(wixManagersClass, this, {
            manager: manager,
            directiveName: name,
            valuesToCheck: valuesToCheck
        });
    }
    angular.module("wixAngularExperiments").directive("wixExperimentClass", [ "$injector", "experimentManager", function($injector, experimentManager) {
        return defineClassDirective($injector, experimentManager, "wixExperimentClass", "experimentValues");
    } ]);
    angular.module("wixAngularPermissions").directive("wixPermissionClass", [ "$injector", "permissionsManager", function($injector, permissionsManager) {
        return defineClassDirective($injector, permissionsManager, "wixPermissionClass", "permissionValues");
    } ]);
})();

"use strict";

(function() {
    wixMailValidator.$inject = [ "letterUnicode", "numberUnicode", "dashPunctuationUnicode" ];
    function wixMailValidator(letterUnicode, numberUnicode, dashPunctuationUnicode) {
        var L = letterUnicode;
        var N = numberUnicode;
        var Pd = dashPunctuationUnicode;
        var ALL_VALID_CHARS_EXCEPT_DOT = "([" + N + L + Pd + "_+/!#$%&'*=?^`{}|~])";
        var EMAIL_LOCAL_PART_REGEX = ALL_VALID_CHARS_EXCEPT_DOT + "([" + N + L + Pd + "._+/!#$%&'*=?^`{}|~])*" + ALL_VALID_CHARS_EXCEPT_DOT;
        var EMAIL_DOMAIN_REGEX = "[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,63}";
        var EMAIL_REGEXP = new RegExp("^(" + ALL_VALID_CHARS_EXCEPT_DOT + "|" + EMAIL_LOCAL_PART_REGEX + ")@" + EMAIL_DOMAIN_REGEX + "$");
        return {
            require: "ngModel",
            restrict: "A",
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    if (!viewValue || EMAIL_REGEXP.test(viewValue)) {
                        ctrl.$setValidity("wixMailValidator", true);
                        return viewValue;
                    } else {
                        ctrl.$setValidity("wixMailValidator", false);
                        return undefined;
                    }
                });
            }
        };
    }
    angular.module("wixAngularAppInternal").directive("wixMailValidator", wixMailValidator);
})();

"use strict";

(function() {
    angular.module("wixAngularAppInternal").factory("wixConstValue", [ "$injector", function($injector) {
        return function(name) {
            var constantValueOrName = $injector.has(name) ? $injector.get(name) : name;
            return constantValueOrName;
        };
    } ]);
})();

"use strict";

(function() {
    wixAngularInterceptorFactory.$inject = [ "$q", "wixCookies", "$rootScope", "wixAngularEvents", "wixAngularTopology", "$injector" ];
    decorateHttpBackend.$inject = [ "$provide" ];
    function wixAngularInterceptorFactory($q, wixCookies, $rootScope, wixAngularEvents, wixAngularTopology, $injector) {
        var wixAngularInterceptor = {};
        var firstUserSwitchTest = true;
        var previousUserGUID;
        function errorHandler(response) {
            return $q.reject(response);
        }
        function checkUserSwitch() {
            if (!firstUserSwitchTest && previousUserGUID !== wixCookies.userGUID) {
                $rootScope.$emit(wixAngularEvents.userSwitch, wixCookies.userGUID, previousUserGUID);
            }
            previousUserGUID = wixCookies.userGUID;
            firstUserSwitchTest = false;
        }
        wixAngularInterceptor.request = function(config) {
            checkUserSwitch();
            if (config.url.match(/\.(?:html|svg)$/)) {
                if (!config.url.match(/(:|^)\/\//)) {
                    if (!config.cache || !config.cache.get || !config.cache.get(config.url)) {
                        config.url = wixAngularTopology.calcPartialsUrl(wixAngularTopology.staticsUrl) + config.url.replace(/^\//, "");
                    }
                }
            } else if (config.url.indexOf("/_api/") === 0) {
                config.url = wixAngularTopology.fixOrigin(config.url);
                if (config.method === "GET" && $injector.has("experimentManager") && $injector.get("experimentManager").isExperimentEnabled("specs.wos.CachBustingAPI")) {
                    config.url = URI(config.url).addSearch("cb339", Math.floor(Math.random() * 9e4) + 1e4).toString();
                }
                if (wixAngularTopology.instance && !config.headers["X-Wix-Instance"]) {
                    config.headers["X-Wix-Instance"] = wixAngularTopology.instance;
                }
            }
            return config;
        };
        wixAngularInterceptor.response = function(response) {
            if (response.data) {
                if (response.data.success === false) {
                    response.status = 500;
                    return errorHandler(response);
                } else if (response.data.success === true && response.data.payload !== undefined) {
                    response.data = response.data.payload;
                }
            }
            return response;
        };
        wixAngularInterceptor.responseError = function(response) {
            return errorHandler(response);
        };
        return wixAngularInterceptor;
    }
    angular.module("wixAngularAppInternal").factory("wixAngularInterceptor", wixAngularInterceptorFactory).constant("wixAngularEvents", {
        userSwitch: "userSwitch"
    });
    function decorateHttpBackend($provide) {
        $provide.decorator("$httpBackend", [ "$delegate", function($delegate) {
            [ "expect", "when" ].forEach(function(prefix) {
                var hooked = $delegate[prefix];
                $delegate[prefix] = function(method, url) {
                    if (typeof url === "string") {
                        var str = url;
                        arguments[1] = {
                            test: function(input) {
                                return URI(input).removeSearch("cb339").equals(str);
                            },
                            toString: function() {
                                return str;
                            }
                        };
                    }
                    return hooked.apply(this, arguments);
                };
            });
            return $delegate;
        } ]);
    }
    try {
        angular.module("ngMock").config(decorateHttpBackend);
    } catch (e) {}
    try {
        angular.module("ngMockE2E").config(decorateHttpBackend);
    } catch (e) {}
})();

"use strict";

(function() {
    WixAngular.$inject = [ "wixAngularTopologyProvider", "experimentManagerProvider" ];
    function WixAngular(wixAngularTopologyProvider, experimentManagerProvider) {
        this.getStaticsUrl = wixAngularTopologyProvider.getStaticsUrl;
        this.setStaticsUrl = wixAngularTopologyProvider.setStaticsUrl;
        var isExperimentEnabled = experimentManagerProvider.isExperimentEnabled.bind(experimentManagerProvider);
        this.setExperiments = experimentManagerProvider.setExperiments.bind(experimentManagerProvider);
        this.isExperimentEnabled = isExperimentEnabled;
        this.$get = [ "wixAngularTopology", "experimentManager", function(wixAngularTopology, experimentManager) {
            var wixAngular = {};
            wixAngular.experiments = experimentManager.$$getExperimentsObj();
            wixAngular.isExperimentEnabled = isExperimentEnabled;
            wixAngular.fixOrigin = wixAngularTopology.fixOrigin;
            wixAngular.staticsUrl = wixAngularTopology.staticsUrl;
            wixAngular.partialsUrl = wixAngularTopology.partialsUrl;
            return wixAngular;
        } ];
        this.$get.$inject = [ "wixAngularTopology", "experimentManager" ];
    }
    angular.module("wixAngularBackwardCompatibility").provider("wixAngular", WixAngular);
})();

"use strict";

(function() {
    wixCacheFactory.$inject = [ "$q", "recordUtils", "cleanableStorage", "wixAngularStorageErrors", "DEFAULT_AGE_IN_SEC", "DATA_TYPE", "ADHOC_TYPE", "REMOTE_TYPE", "CLEAN_EPSILON" ];
    function wixCacheFactory($q, recordUtils, cleanableStorage, wixAngularStorageErrors, DEFAULT_AGE_IN_SEC, DATA_TYPE, ADHOC_TYPE, REMOTE_TYPE, CLEAN_EPSILON) {
        var wixCache = {};
        function rejectWithRuntimeException() {
            return $q.reject(wixAngularStorageErrors.RUNTIME_EXCEPTION);
        }
        function tryToSet(key, value) {
            var cacheKey = recordUtils.getCacheKey(key, value.options);
            function returnKey() {
                return key;
            }
            return cleanableStorage.set(cacheKey, value).then(returnKey, function(reason) {
                if (reason === wixAngularStorageErrors.RUNTIME_EXCEPTION) {
                    return rejectWithRuntimeException();
                }
                if (value.options.type === REMOTE_TYPE) {
                    return $q.reject();
                } else {
                    return cleanableStorage.clear(recordUtils.getRecordSize(cacheKey, value) + CLEAN_EPSILON).then(function() {
                        return cleanableStorage.set(cacheKey, value).then(returnKey, rejectWithRuntimeException);
                    }, function() {
                        return $q.reject(wixAngularStorageErrors.QUOTA_EXCEEDED);
                    });
                }
            });
        }
        wixCache.set = function(key, data, options) {
            recordUtils.validateKey(key);
            recordUtils.validateData(data);
            recordUtils.validateExpiration(options);
            var value = {
                createdAt: Date.now(),
                data: data,
                options: angular.extend({
                    expiration: DEFAULT_AGE_IN_SEC,
                    type: DATA_TYPE
                }, options)
            };
            return tryToSet(key, value);
        };
        wixCache.setWithGUID = function(data) {
            var key = recordUtils.generateRandomKey();
            return this.set(key, data, {
                expiration: null,
                type: ADHOC_TYPE
            });
        };
        wixCache.get = function(key, opts) {
            return cleanableStorage.get(recordUtils.getCacheKey(key, opts)).then(function(record) {
                if (record && !recordUtils.isExpired(record)) {
                    return record.data;
                } else {
                    return $q.reject(wixAngularStorageErrors.NOT_FOUND);
                }
            }, rejectWithRuntimeException);
        };
        wixCache.remove = function(key, opts) {
            return cleanableStorage.del(recordUtils.getCacheKey(key, opts)).catch(rejectWithRuntimeException);
        };
        if (!recordUtils.isUserLoggedIn()) {
            wixCache.set = wixCache.get = wixCache.remove = function() {
                return $q.reject(wixAngularStorageErrors.LOGGED_OUT);
            };
        }
        return wixCache;
    }
    angular.module("wixAngularStorage").factory("wixCache", wixCacheFactory);
})();

"use strict";

(function() {
    wixCookiesFactory.$inject = [ "cookieStr" ];
    function wixCookiesFactory(cookieStr) {
        var parsedUser, prevCookies;
        function parseUserCookie(cookie) {
            var cookieParts = cookie ? cookie.split("|") : [];
            return {
                guid: cookieParts[6],
                userName: cookieParts[0]
            };
        }
        function parseAllCookies(cookies) {
            return cookies.split(";").map(function(str) {
                return str.trim();
            }).reduce(function(acc, curr) {
                var args = curr.split("=");
                acc[args[0]] = args[1];
                return acc;
            }, {});
        }
        function getParsedUserCookie() {
            var cookies = cookieStr() || "";
            if (cookies !== prevCookies) {
                prevCookies = cookies;
                parsedUser = parseUserCookie(parseAllCookies(cookies).wixClient);
            }
            return parsedUser;
        }
        return {
            get userGUID() {
                return getParsedUserCookie().guid;
            },
            get userName() {
                return getParsedUserCookie().userName;
            }
        };
    }
    angular.module("wixAngularAppInternal").factory("wixCookies", wixCookiesFactory).factory("cookieStr", [ "$document", function($document) {
        return function() {
            return $document[0] && $document[0].cookie || "";
        };
    } ]);
})();

"use strict";

(function() {
    cleanableStorage.$inject = [ "$interval", "$q", "recordUtils", "DATA_TYPE", "CLEANING_INTERVAL", "MAX_STORAGE_SIZE_IN_BYTES" ];
    function cleanableStorage($interval, $q, recordUtils, DATA_TYPE, CLEANING_INTERVAL, MAX_STORAGE_SIZE_IN_BYTES) {
        var dataKeys = [];
        var remoteAndAdhocKeys = [];
        function getValue(key) {
            return localStorage[key] && JSON.parse(localStorage[key]);
        }
        function clearRecord(key) {
            var record = getValue(key);
            if (record) {
                var recordSize = recordUtils.getRecordSize(key, record);
                delete localStorage[key];
                return recordSize;
            } else {
                return 0;
            }
        }
        function clearRecords(keys) {
            return keys.reduce(function(acc, key) {
                acc += clearRecord(key);
                return acc;
            }, 0);
        }
        function getWixCacheKeys() {
            return Object.keys(localStorage).filter(recordUtils.hasPrefix);
        }
        function getWixCacheSize() {
            return getWixCacheKeys().reduce(function(acc, key) {
                return acc + recordUtils.getRecordSize(key, getValue(key));
            }, 0);
        }
        function loadExistingWixCacheKeys() {
            var createdAtSort = function(a, b) {
                return a.createdAt - b.createdAt;
            };
            var getKey = function(item) {
                return item.key;
            };
            dataKeys = [];
            remoteAndAdhocKeys = [];
            getWixCacheKeys().forEach(function(key) {
                var item = getValue(key);
                var arr = item.options.type === DATA_TYPE ? dataKeys : remoteAndAdhocKeys;
                arr.push({
                    key: key,
                    createdAt: item.createdAt
                });
            });
            dataKeys.sort(createdAtSort);
            remoteAndAdhocKeys.sort(createdAtSort);
            dataKeys = dataKeys.map(getKey);
            remoteAndAdhocKeys = remoteAndAdhocKeys.map(getKey);
        }
        function clearOtherUsers() {
            return clearRecords(getWixCacheKeys().filter(function(key) {
                return !recordUtils.belongsToCurrentUser(key);
            }));
        }
        function clearExpiredRecords() {
            return clearRecords(getWixCacheKeys().filter(function(cacheKey) {
                var record = getValue(cacheKey);
                return recordUtils.isExpired(record);
            }));
        }
        function clearNonExpiredRecord() {
            var arr = remoteAndAdhocKeys.length === 0 ? dataKeys : remoteAndAdhocKeys;
            var key = arr.shift();
            return clearRecord(key);
        }
        function clear(amount) {
            var requiredSpace = amount || 0;
            var clearedSpace = 0;
            clearedSpace += clearOtherUsers();
            clearedSpace += clearExpiredRecords();
            var size = getWixCacheSize();
            var removedRecordsSpace = 0;
            loadExistingWixCacheKeys();
            while (size - removedRecordsSpace > MAX_STORAGE_SIZE_IN_BYTES) {
                var removed = clearNonExpiredRecord();
                clearedSpace += removed;
                removedRecordsSpace += removed;
            }
            if (size - removedRecordsSpace < requiredSpace - clearedSpace) {
                return false;
            }
            while (clearedSpace < requiredSpace) {
                clearedSpace += clearNonExpiredRecord();
            }
            return true;
        }
        function promiseWrapper(fn) {
            var defer = $q.defer();
            try {
                var done;
                var result = fn(function() {
                    done = true;
                    defer.resolve();
                }, function() {
                    done = true;
                    defer.reject();
                });
                if (!done) {
                    defer.resolve(result);
                }
            } catch (e) {
                defer.reject();
            }
            return defer.promise;
        }
        clear();
        $interval(function() {
            clear();
        }, CLEANING_INTERVAL);
        return {
            set: function(key, value) {
                return promiseWrapper(function() {
                    localStorage[key] = JSON.stringify(value);
                });
            },
            get: function(key) {
                return promiseWrapper(function() {
                    return getValue(key);
                });
            },
            del: function(key) {
                return promiseWrapper(function() {
                    delete localStorage[key];
                });
            },
            clear: function(amount) {
                return promiseWrapper(function(resolve, reject) {
                    if (clear(amount)) {
                        resolve();
                    } else {
                        reject();
                    }
                });
            }
        };
    }
    angular.module("wixAngularStorage").factory("cleanableStorage", cleanableStorage);
})();

"use strict";

(function() {
    wixStorageFactory.$inject = [ "$q", "$http", "recordUtils", "wixCache", "wixAngularStorageErrors", "ANGULAR_STORAGE_PREFIX", "REMOTE_TYPE", "DEFAULT_AGE_IN_SEC" ];
    function wixStorageFactory($q, $http, recordUtils, wixCache, wixAngularStorageErrors, ANGULAR_STORAGE_PREFIX, REMOTE_TYPE, DEFAULT_AGE_IN_SEC) {
        var wixStorage = {};
        function cacheRemoteData(key, data, options) {
            if (!options.noCache) {
                return wixCache.set(key, data, angular.extend({}, options, {
                    type: REMOTE_TYPE,
                    expiration: DEFAULT_AGE_IN_SEC
                }));
            }
        }
        function getRemote(key, options) {
            var path = options.siteId ? "getVolatilePrefForSite" : "getVolatilePrefForKey";
            var url = [ "/_api/wix-user-preferences-webapp", path, ANGULAR_STORAGE_PREFIX, options.siteId, key ].filter(angular.identity).join("/");
            return $http.get(url).then(function(res) {
                if (res.data[key] === null) {
                    return $q.reject(wixAngularStorageErrors.NOT_FOUND);
                }
                cacheRemoteData(key, res.data[key], options);
                return res.data[key];
            }, function(err) {
                if (err.status === 404) {
                    cacheRemoteData(key, null, options);
                    return $q.reject(wixAngularStorageErrors.NOT_FOUND);
                }
                return $q.reject(wixAngularStorageErrors.SERVER_ERROR);
            });
        }
        function tryCache(key, options) {
            return wixCache.get(key, options).then(function(res) {
                if (res === null) {
                    return $q.reject(wixAngularStorageErrors.NOT_FOUND);
                }
                return res;
            }, function() {
                return getRemote(key, options);
            });
        }
        wixStorage.set = function(key, data, opts) {
            var options = opts || {};
            recordUtils.validateKey(key);
            recordUtils.validateData(data);
            recordUtils.validateExpiration(options);
            var dto = {
                nameSpace: ANGULAR_STORAGE_PREFIX,
                key: key,
                blob: data
            };
            if (options.siteId) {
                dto.siteId = options.siteId;
            }
            if (options.expiration) {
                dto.TTLInDays = Math.ceil(options.expiration / (60 * 60 * 24));
            }
            return $http.post("/_api/wix-user-preferences-webapp/set", dto).then(function() {
                cacheRemoteData(key, data, options);
                return key;
            });
        };
        wixStorage.get = function(key, opts) {
            var options = opts || {};
            return !options.noCache ? tryCache(key, options) : getRemote(key, options);
        };
        wixStorage.remove = function(key, opts) {
            return wixStorage.set(key, null, opts);
        };
        if (!recordUtils.isUserLoggedIn()) {
            wixStorage.set = wixStorage.get = wixStorage.remove = function() {
                return $q.reject(wixAngularStorageErrors.LOGGED_OUT);
            };
        }
        return wixStorage;
    }
    angular.module("wixAngularStorage").factory("wixStorage", wixStorageFactory);
})();

"use strict";

(function() {
    recordUtilsFactory.$inject = [ "wixCookies", "ANGULAR_STORAGE_PREFIX", "KEY_SEPARATOR", "MAX_KEY_LENGTH", "MAX_VALUE_SIZE_IN_BYTES", "MAX_AGE_IN_SEC" ];
    function recordUtilsFactory(wixCookies, ANGULAR_STORAGE_PREFIX, KEY_SEPARATOR, MAX_KEY_LENGTH, MAX_VALUE_SIZE_IN_BYTES, MAX_AGE_IN_SEC) {
        var recordUtils = {};
        function countBytes(str) {
            return encodeURI(str).match(/%..|./g).length;
        }
        function hasExpiration(options) {
            return options && !!options.expiration;
        }
        recordUtils.isUserLoggedIn = function() {
            return wixCookies.userGUID !== undefined;
        };
        recordUtils.validateKey = function(key) {
            if (typeof key !== "string" || key.length > MAX_KEY_LENGTH) {
                throw new Error("Key length should be no more than " + MAX_KEY_LENGTH + " chars");
            }
        };
        recordUtils.validateData = function(data) {
            var val = JSON.stringify(data);
            if (countBytes(val) > MAX_VALUE_SIZE_IN_BYTES) {
                throw new Error("The size of passed data exceeds the allowed " + MAX_VALUE_SIZE_IN_BYTES / 1024 + " KB");
            }
        };
        recordUtils.validateExpiration = function(options) {
            if (hasExpiration(options) && (typeof options.expiration !== "number" || options.expiration > MAX_AGE_IN_SEC)) {
                throw new Error("Expiration should be a number and cannot increase " + MAX_AGE_IN_SEC + " seconds");
            }
        };
        recordUtils.isExpired = function(record) {
            if (hasExpiration(record.options)) {
                return record.createdAt + record.options.expiration * 1e3 <= Date.now();
            } else {
                return false;
            }
        };
        recordUtils.getRecordSize = function(key, value) {
            return countBytes(key) + countBytes(JSON.stringify(value));
        };
        recordUtils.getCacheKey = function(key, opts) {
            var options = opts || {};
            return [ ANGULAR_STORAGE_PREFIX, wixCookies.userGUID, options.siteId, key ].filter(angular.identity).join(KEY_SEPARATOR);
        };
        recordUtils.generateRandomKey = function() {
            return Math.random().toString(36).slice(2);
        };
        recordUtils.hasPrefix = function(key) {
            return key.indexOf(ANGULAR_STORAGE_PREFIX) === 0;
        };
        recordUtils.belongsToCurrentUser = function(key) {
            if (recordUtils.isUserLoggedIn()) {
                return key.split(KEY_SEPARATOR)[1] === wixCookies.userGUID;
            } else {
                return false;
            }
        };
        return recordUtils;
    }
    angular.module("wixAngularStorage").factory("recordUtils", recordUtilsFactory);
})();

"use strict";

(function() {
    WixAngularTopology.$inject = [ "$sceDelegateProvider" ];
    function WixAngularTopology($sceDelegateProvider) {
        var staticsUrl = "";
        var instance;
        this.getStaticsUrl = function() {
            return staticsUrl;
        };
        this.setStaticsUrl = function(url) {
            staticsUrl = url && url.replace(/\/?$/, "/").replace(/^\/\//, location.protocol + "//");
            $sceDelegateProvider.resourceUrlWhitelist([ staticsUrl + "**", "self" ]);
        };
        this.setInstance = function(_instance) {
            instance = _instance;
        };
        this.$get = [ "$window", "$document", "$location", function($window, $document, $location) {
            var origin = $document.find && $document.find("base").attr("href") ? $window.location.protocol + "//" + $window.location.host : "";
            function isStaging() {
                return /\.wixpress\.com$/.test($window.location.hostname);
            }
            function fixOrigin(url) {
                return url.replace(/^([^\/]*\/\/+)?[^\/]*/, origin);
            }
            var wixAngularTopology = {};
            wixAngularTopology.fixOrigin = fixOrigin;
            wixAngularTopology.calcPartialsUrl = function(staticsUrl, force) {
                if (!force && $location.protocol && $location.protocol() === "https") {
                    return staticsUrl;
                } else {
                    return staticsUrl ? fixOrigin(staticsUrl.replace("/services/", "/_partials/")) : "";
                }
            };
            wixAngularTopology.staticsUrl = staticsUrl ? staticsUrl : "";
            wixAngularTopology.partialsUrl = staticsUrl ? fixOrigin(staticsUrl.replace("/services/", "/_partials/")) : "";
            wixAngularTopology.isStaging = isStaging;
            wixAngularTopology.instance = instance;
            return wixAngularTopology;
        } ];
        this.$get.$inject = [ "$window", "$document", "$location" ];
    }
    angular.module("wixAngularAppInternal").provider("wixAngularTopology", WixAngularTopology);
})();

"use strict";

window.jsonpExperiemts = {};

window.loadExperimentScopeSync = function(scope) {
    var url = "//www.wix.com/_api/wix-laboratory-server/laboratory/conductAllInScope?scope=" + scope + "&accept=jsonp&callback=setExperimentsSync";
    document.write('<script src="' + url + '"></script>');
    window.setExperimentsSync = function(junk, experiments) {
        angular.extend(window.jsonpExperiemts, experiments);
    };
};

var ExperimentManager = function() {
    ExperimentManager.$inject = [ "provider", "$http" ];
    function ExperimentManager(provider, $http) {
        this.provider = provider;
        this.$http = $http;
        this.petriUrlPrefix = "/_api/wix-laboratory-server/laboratory/";
        this.getExperimentValue = provider.getExperimentValue.bind(provider);
        this.isExperimentEnabled = provider.isExperimentEnabled.bind(provider);
    }
    ExperimentManager.prototype.get = function(value) {
        return this.getExperimentValue(value);
    };
    ExperimentManager.prototype.contains = function(value) {
        return this.isExperimentEnabled(value);
    };
    ExperimentManager.prototype.loadScope = function(scope) {
        var _this = this;
        return this.$$queryPetri({
            scope: scope
        }).then(function(experiments) {
            _this.provider.setExperiments(experiments);
            return experiments;
        });
    };
    ExperimentManager.prototype.loadExperiment = function(name, fallback) {
        var _this = this;
        return this.$$queryPetri({
            name: name,
            fallback: fallback
        }).then(function(value) {
            var singleExperiment = {};
            singleExperiment[name] = value;
            _this.provider.setExperiments(singleExperiment);
            return value;
        });
    };
    ExperimentManager.prototype.$$queryPetri = function(params) {
        return this.$http.get(this.getPetriUrl(params), {
            params: this.getQueryParams(params),
            cache: true
        }).then(function(result) {
            return result.data;
        });
    };
    ExperimentManager.prototype.$$getExperimentsObj = function() {
        return this.provider.experiments;
    };
    ExperimentManager.prototype.getPetriUrl = function(params) {
        return this.petriUrlPrefix + (params.scope ? "conductAllInScope/" : "conductExperiment/");
    };
    ExperimentManager.prototype.getQueryParams = function(params) {
        return params.scope ? {
            scope: params.scope
        } : {
            key: params.name,
            fallback: params.fallback
        };
    };
    return ExperimentManager;
}();

var ExperimentManagerProvider = function() {
    function ExperimentManagerProvider() {
        this.experiments = angular.copy(window.jsonpExperiemts);
    }
    ExperimentManagerProvider.prototype.clearExperiments = function() {
        this.experiments = {};
    };
    ExperimentManagerProvider.prototype.isExperimentEnabled = function(name) {
        return this.experiments[name] === "true";
    };
    ExperimentManagerProvider.prototype.setExperiments = function(map) {
        angular.extend(this.experiments, map);
    };
    ExperimentManagerProvider.prototype.getExperimentValue = function(name) {
        return this.experiments[name];
    };
    ExperimentManagerProvider.prototype.$get = function($injector) {
        return $injector.instantiate(ExperimentManager, {
            provider: this
        });
    };
    ExperimentManagerProvider.prototype.$get.$inject = [ "$injector" ];
    return ExperimentManagerProvider;
}();

angular.module("wixAngularExperiments").provider("experimentManager", ExperimentManagerProvider).run([ "$rootScope", "experimentManager", function($rootScope, experimentManager) {
    $rootScope.experimentManager = experimentManager;
} ]);

"use strict";

if (window.beforeEach) {
    window.beforeEach(function() {
        angular.module("experimentManagerMock").config([ "experimentManagerProvider", function(experimentManagerProvider) {
            experimentManagerProvider.clearExperiments();
        } ]);
    });
}

angular.module("experimentManagerMock", []).config([ "$provide", function($provide) {
    $provide.decorator("experimentManager", [ "$delegate", "$q", function($delegate, $q) {
        var originalGetExperimentValue = $delegate.getExperimentValue.bind($delegate);
        var originalIsExperimentEnabled = $delegate.isExperimentEnabled.bind($delegate);
        var scopeToExperiments = {};
        var unexpected = [];
        var used = [];
        function addIfNotExist(val, group) {
            if (group.indexOf(val) === -1) {
                group.push(val);
            }
        }
        function markAsUsedOrUnexpected(experiment) {
            if (originalGetExperimentValue(experiment) === undefined) {
                addIfNotExist(experiment, unexpected);
            } else {
                addIfNotExist(experiment, used);
            }
        }
        function resolvePromise(params) {
            var deferred = $q.defer();
            if (params.scope) {
                deferred.resolve(scopeToExperiments[params.scope] || {});
            } else {
                deferred.resolve(Object.keys(scopeToExperiments).reduce(function(prev, scope) {
                    return prev || scopeToExperiments[scope][params.name];
                }, undefined) || params.fallback);
            }
            return deferred.promise;
        }
        $delegate.getExperimentValue = function(name) {
            markAsUsedOrUnexpected(name);
            return originalGetExperimentValue(name);
        };
        $delegate.isExperimentEnabled = function(name) {
            markAsUsedOrUnexpected(name);
            return originalIsExperimentEnabled(name);
        };
        $delegate.$$queryPetri = function(params) {
            return $q.when(params).then(resolvePromise);
        };
        $delegate.setScopeExperiments = function(str, map) {
            scopeToExperiments[str] = map;
        };
        $delegate.verifyNoUnexpectedExperiments = function() {
            if (unexpected.length) {
                throw "unexpected experiments: " + unexpected.join(", ");
            }
        };
        $delegate.verifyNoUnusedExperiments = function() {
            var unused = Object.keys($delegate.$$getExperimentsObj()).filter(function(experiment) {
                return used.indexOf(experiment) === -1;
            });
            if (unused.length) {
                throw "unused experiments: " + unused.join(", ");
            }
        };
        return $delegate;
    } ]);
} ]);

"use strict";

var PermissionsManager = function() {
    PermissionsManager.$inject = [ "provider", "wixRoles" ];
    function PermissionsManager(provider, wixRoles) {
        var _this = this;
        this.provider = provider;
        this.wixRoles = wixRoles;
        this.defaultContextKey = "default-context";
        this.defaultContextGetter = function() {
            return _this.defaultContextKey;
        };
        this.contextGetter = this.defaultContextGetter;
        this.permissionsContextMap = {};
        this.permissionsContextMap[this.defaultContextKey] = this.provider.permissionsDefinition;
    }
    PermissionsManager.prototype.contains = function(value, context) {
        var ctx = context || this.contextGetter();
        var permissionsDefinition = this.permissionsContextMap[ctx];
        return permissionsDefinition ? this.hasPermission(permissionsDefinition, value) : false;
    };
    PermissionsManager.prototype.get = function(value) {
        return this.contains(value).toString();
    };
    PermissionsManager.prototype.loadScope = function(scope) {
        throw new Error("This method is not implemented.");
    };
    PermissionsManager.prototype.assignPermissionsMap = function(permissionsMap) {
        angular.extend(this.permissionsContextMap, permissionsMap);
    };
    PermissionsManager.prototype.setContextGetter = function(contextGetter) {
        this.contextGetter = contextGetter;
    };
    PermissionsManager.prototype.resetContextGetter = function() {
        this.contextGetter = this.defaultContextGetter;
    };
    PermissionsManager.prototype.$$getOwnerId = function() {
        return this.getCurrentPermissionsDefinition().$$ownerId;
    };
    PermissionsManager.prototype.$$getRoles = function() {
        return this.getCurrentPermissionsDefinition().$$roles;
    };
    PermissionsManager.prototype.$$isOwner = function() {
        return this.getCurrentPermissionsDefinition().isOwner;
    };
    PermissionsManager.prototype.isWixStaff = function(roles) {
        return roles.indexOf(this.wixRoles.WIX_STAFF) !== -1;
    };
    PermissionsManager.prototype.getCurrentPermissionsDefinition = function() {
        return this.permissionsContextMap[this.contextGetter()];
    };
    PermissionsManager.prototype.hasPermission = function(permissionsDefinition, permission) {
        var isWixStaff = this.isWixStaff(permissionsDefinition.$$roles);
        var isHavePermission = permissionsDefinition.permissions.indexOf(permission) !== -1;
        return permissionsDefinition.isOwner || isWixStaff || isHavePermission;
    };
    return PermissionsManager;
}();

var PermissionsManagerProvider = function() {
    function PermissionsManagerProvider() {
        this.permissionsDefinition = new PermissionsDefinition({
            permissions: [],
            isOwner: false,
            ownerId: undefined,
            roles: []
        });
    }
    PermissionsManagerProvider.prototype.setAuthorizationInfo = function(authorizationInfo) {
        this.permissionsDefinition = new PermissionsDefinition(authorizationInfo);
    };
    PermissionsManagerProvider.prototype.setPermissions = function(permissionsDefinition) {
        this.permissionsDefinition = permissionsDefinition;
    };
    PermissionsManagerProvider.prototype.$get = function($injector) {
        return $injector.instantiate(PermissionsManager, {
            provider: this
        });
    };
    PermissionsManagerProvider.prototype.$get.$inject = [ "$injector" ];
    return PermissionsManagerProvider;
}();

angular.module("wixAngularPermissions").provider("permissionsManager", PermissionsManagerProvider);

"use strict";

var IsPermitted = function() {
    IsPermitted.$inject = [ "permissionsManager", "wixManagerEval" ];
    function IsPermitted(permissionsManager, wixManagerEval) {
        this.permissionsManager = permissionsManager;
        this.wixManagerEval = wixManagerEval;
    }
    IsPermitted.prototype.filter = function(input, permissionId, fallback, context) {
        var result = this.wixManagerEval.eval(this.permissionsManager, permissionId, context);
        return result ? input : fallback;
    };
    return IsPermitted;
}();

angular.module("wixAngularPermissions").filter("isPermitted", [ "$injector", function($injector) {
    var isPermitted = $injector.instantiate(IsPermitted);
    return isPermitted.filter.bind(isPermitted);
} ]);

"use strict";

var WixManagerEval = function() {
    WixManagerEval.$inject = [ "wixConstValue" ];
    function WixManagerEval(wixConstValue) {
        this.wixConstValue = wixConstValue;
    }
    WixManagerEval.prototype.eval = function(manager, expr, context) {
        var negationGroups = /^(\!*)([^!].*)/.exec(expr);
        var negation = negationGroups[1];
        var name = negationGroups[2];
        var value = manager.contains(this.wixConstValue(name), context);
        return negation.length % 2 ? !value : value;
    };
    return WixManagerEval;
}();

angular.module("wixAngularAppInternal").service("wixManagerEval", WixManagerEval);

"use strict";

angular.module("wixAngularAppInternal").value("angularVersion", angular.version).factory("cookieReaderFacade", [ "$injector", "$browser", "angularVersion", function($injector, $browser, angularVersion) {
    if (angularVersion.minor > 3) {
        return $injector.get("$$cookieReader");
    } else {
        return function() {
            return $browser.cookies();
        };
    }
} ]);

"use strict";

(function() {
    WixDebounce.$inject = [ "$timeout" ];
    function WixDebounce($timeout) {
        return function(func, wait, immediate, invokeApply) {
            var timeout, args, context, result;
            function debounce() {
                context = this;
                args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) {
                        result = func.apply(context, args);
                    }
                };
                var callNow = immediate && !timeout;
                if (timeout) {
                    $timeout.cancel(timeout);
                }
                timeout = $timeout(later, wait, invokeApply);
                if (callNow) {
                    result = func.apply(context, args);
                }
                return result;
            }
            debounce.cancel = function() {
                $timeout.cancel(timeout);
                timeout = null;
            };
            return debounce;
        };
    }
    angular.module("wixAngularAppInternal").service("wixDebounce", WixDebounce);
})();

"use strict";

var WixHeightWatcherModule;

(function(WixHeightWatcherModule) {
    WixHeightWatcherModule.HEIGHT_CHANGED_EVENT = "wix-height-changed-event";
})(WixHeightWatcherModule || (WixHeightWatcherModule = {}));

var WixHeightWatcher = function() {
    WixHeightWatcher.$inject = [ "wixDebounce", "$document", "$rootScope", "$timeout" ];
    function WixHeightWatcher(wixDebounce, $document, $rootScope, $timeout) {
        var _this = this;
        this.wixDebounce = wixDebounce;
        this.$document = $document;
        this.$rootScope = $rootScope;
        this.$timeout = $timeout;
        this.height = 0;
        this.checkHeight = this.wixDebounce(this.checkHeight, 50, false, false);
        this.$rootScope.$watch(function() {
            return _this.checkHeight();
        });
    }
    WixHeightWatcher.prototype.reportHeight = function(height) {
        var _this = this;
        this.$rootScope.$apply(function() {
            return _this.$rootScope.$emit(WixHeightWatcherModule.HEIGHT_CHANGED_EVENT, height);
        });
    };
    WixHeightWatcher.prototype.checkHeight = function() {
        var document = this.$document;
        var body = document[0].body;
        var html = document[0].documentElement;
        var height = Math.max(body.offsetHeight, html.offsetHeight);
        if (this.height !== height) {
            this.height = height;
            this.reportHeight(height);
        }
    };
    WixHeightWatcher.prototype.subscribe = function(func) {
        return this.$rootScope.$on(WixHeightWatcherModule.HEIGHT_CHANGED_EVENT, function(event, height) {
            func(height);
        });
    };
    return WixHeightWatcher;
}();

angular.module("wixAngularAppInternal").service("wixHeightWatcher", WixHeightWatcher);

"use strict";

var WixTpaHeightChangedDirectiveCtrl = function() {
    WixTpaHeightChangedDirectiveCtrl.$inject = [ "$scope", "wixHeightWatcher" ];
    function WixTpaHeightChangedDirectiveCtrl($scope, wixHeightWatcher) {
        var unsubscribe = wixHeightWatcher.subscribe(function(height) {
            return Wix.setHeight(height);
        });
        $scope.$on("$destroy", function() {
            return unsubscribe();
        });
    }
    return WixTpaHeightChangedDirectiveCtrl;
}();

angular.module("wixAngularAppInternal").directive("wixTpaHeightChanged", function() {
    return {
        restrict: "A",
        controller: WixTpaHeightChangedDirectiveCtrl,
        controllerAs: "wixTpaHeightChangedDirectiveCtrl",
        bindToController: true
    };
});

"use strict";

var WixHeightChangedCtrl = function() {
    WixHeightChangedCtrl.$inject = [ "$scope", "$attrs", "wixHeightWatcher" ];
    function WixHeightChangedCtrl($scope, $attrs, wixHeightWatcher) {
        var unsubscribe = wixHeightWatcher.subscribe(function(height) {
            $scope.$eval($attrs.wixHeightChanged, {
                height: height
            });
        });
        $scope.$on("$destroy", function() {
            return unsubscribe();
        });
    }
    return WixHeightChangedCtrl;
}();

angular.module("wixAngularAppInternal").directive("wixHeightChanged", function() {
    return {
        controller: WixHeightChangedCtrl,
        controllerAs: "wixHeightChangedCtrl",
        bindToController: true,
        restrict: "A"
    };
});

"use strict";

angular.module("wixAngularAppInternal").run([ "$injector", "$locale", "$log", "$window", function($injector, $locale, $log, $window) {
    var translationLanguage = $injector.has("preferredLanguage") && $injector.get("preferredLanguage");
    var locale = $locale.id.slice(0, 2);
    if (translationLanguage && translationLanguage !== locale) {
        var error = "Translation language (" + translationLanguage + ") does not match locale (" + locale + ")";
        $log.error(error);
        if ($window.NREUM) {
            $window.NREUM.noticeError(new Error(error));
        }
    }
} ]);