"use strict";

(function() {
    executeScript.$inject = [ "$window" ];
    function executeScript($window) {
        return {
            restrict: "E",
            template: '<button class="wix-button" ng-click="onClick()">{{onClickCallback}}()</button>',
            transclude: true,
            scope: {
                onClickCallback: "@onClickCallback"
            },
            link: function postLink(scope, element, attrs, ctrl, transclude) {
                scope.onClick = function() {
                    $window[scope.onClickCallback]();
                };
                transclude(scope, function(clone) {
                    var text = "window['" + scope.onClickCallback + "'] = function () {" + clone.html() + "}";
                    var script = angular.element("<script></script>");
                    script.prop("type", "text/javascript");
                    script.prop("text", text);
                    element.append(script);
                });
            }
        };
    }
    angular.module("wixStyleInternal").directive("executeScript", executeScript);
})();

"use strict";

(function() {
    parameterProvider.$inject = [ "$rootScope" ];
    function parameterProvider($rootScope) {
        return {
            restrict: "A",
            scope: {
                parameterProvider: "@parameterProvider",
                html: "=?"
            },
            link: function postLink(scope, element) {
                if (scope.html) {
                    $rootScope[scope.parameterProvider] = element.html();
                } else {
                    $rootScope[scope.parameterProvider] = JSON.parse(element.text());
                }
                element.remove();
            }
        };
    }
    angular.module("wixStyleInternal").directive("parameterProvider", parameterProvider);
})();