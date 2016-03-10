"use strict";

try {
    angular.module("wixStyleInternal");
} catch (e) {
    angular.module("wixStyleInternal", []);
}

angular.module("wixStyleInternal").run([ "$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("views/directives/wix-dropdown.html", "<div ng-class=\"{'dropdown-no-hover': openOnClick, 'dropdown-open': isOpen}\" class=\"wix-dropdown\">\n" + '    <div class="dropdown-title" ng-click="openOnClick && openDropdown()">{{selectedItem.text}}</div>\n' + "    <ul>\n" + '        <li ng-repeat="item in items" ng-class="{\'selected\': item.selected}">\n' + '            <a ng-click="selectOption(item)">\n' + "               {{item.text}}\n" + "             </a>\n" + "        </li>\n" + "    </ul>\n" + "</div>");
} ]);

"use strict";

try {
    angular.module("wixStyleInternal");
} catch (e) {
    angular.module("wixStyleInternal", []);
}

angular.module("wixStyleInternal").run([ "$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("views/directives/wix-tabs.html", '<div class="tabs-wrapper">\n' + '    <a ng-repeat="tab in wixTabsVM.tabControllers" class="tab-container tab-title" ng-class="{\'active\': wixTabsVM.isActive(tab), \'disabled\': tab.disabled}" href ng-click="wixTabsVM.onTabClick(tab)">{{tab.getLabel()}}</a>\n' + "</div>\n" + '<!--<div ng-repeat="tab in wixTabsVM.tabsArray" class="tab-content" ng-class="{\'active-tab-content\': wixTabsVM.isActive(tab)}" ng-bind-html="wixTabsVM.getTabContent(tab)">\n' + "</div>-->\n" + "\n" + '<div class="active-tab-content" ng-transclude></div>\n' + "\n");
} ]);

"use strict";

try {
    angular.module("wixStyleInternal");
} catch (e) {
    angular.module("wixStyleInternal", []);
}

angular.module("wixStyleInternal").run([ "$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("views/directives/wix-wizard.html", '<ul class="wizard-steps">\n' + '    <li class="step" ng-repeat="step in steps">\n' + "        <div class=\"step-status\" ng-class=\"{'active': step.state==='active'}\"><span>1</span></div>\n" + '        <a class="step-name">{{step.name}}</a>\n' + "        </li>\n" + "    </ul>\n" + '<button class="next-button wix-button is-button-large">Next</button>');
} ]);

"use strict";

try {
    angular.module("wixStyleInternal");
} catch (e) {
    angular.module("wixStyleInternal", []);
}

angular.module("wixStyleInternal").run([ "$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("views/directives/wix-search.html", '<label class="wix-search-icon wix-style-svg-font-icons-search"></label>\n' + '<span class="wix-search-wrapper">\n' + '  <input type="text" ng-focus="onFocusIn($event)" ng-blur="onFocusOut($event)">\n' + '  <span class="wix-search-clear wix-style-svg-font-icons-x" ng-mousedown="clearSearch($event)" ng-class="{\'visible\': shouldShowClear()}"></span>\n' + "</span>\n" + "\n");
} ]);

"use strict";

try {
    angular.module("wixStyleInternal");
} catch (e) {
    angular.module("wixStyleInternal", []);
}

angular.module("wixStyleInternal").run([ "$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("views/directives/wix-list.html", '<wix-list-item ng-repeat="item in items track by $index" ng-class="{\'empty\': item.empty}" index="{{$index}}" ng-if="!transcluded">\n' + '    <div class="wix-list-item-blue-section" ng-if="!checkableItem() && !imageSquare()"></div>\n' + "    <wix-checkbox ng-class=\"{'wix-list-item-checkbox-circular-image': !imageSquare()}\"\n" + '                  ng-if="checkableProperty" ng-model="item.checked"></wix-checkbox>\n' + '    <div class="wix-list-item-content" ng-include="contentTemplate"\n' + "         ng-class=\"imageSquare() ? 'wix-list-square-image' : 'wix-list-circular-image'\"></div>\n" + '    <div class="wix-list-draggable" ng-if="draggableItem"></div>\n' + "</wix-list-item>\n" + '<div ng-transclude="true"></div>');
} ]);

"use strict";

try {
    angular.module("wixStyleInternal");
} catch (e) {
    angular.module("wixStyleInternal", []);
}

angular.module("wixStyleInternal").run([ "$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("views/components/modals/wix-message-window.html", "<div class='wix-modal'>\n" + "  <div class='wix-modal--message-window' data-hook='modal-container' ng-class='style'>\n" + "    <div class='wix-modal--header' data-hook='modal-header' ng-if='title'>\n" + "      <div class='wix-modal--title' data-hook='modal-title'>{{title}}</div>\n" + "      <button class='wix-modal--close-button wix-style-svg-font-icons-close' data-hook='close-button' md-autofocus ng-click='windowCtrl.close($event)' type='button'></button>\n" + "    </div>\n" + "    <div class='wix-modal--body'>\n" + "      <div class='wix-modal--icon-wrapper' data-hook='modal-icon-wrapper' ng-if='iconUrl'>\n" + "        <img class='wix-modal--icon' ng-src='{{iconUrl}}'>\n" + "      </div>\n" + "      <div class='wix-modal--content' data-hook='modal-content-inline' ng-bind-html='htmlContent' ng-if='htmlContent'></div>\n" + "      <div class='wix-modal--content' data-hook='modal-content-external' ng-if='contentUrl' ng-include='contentUrl'></div>\n" + "    </div>\n" + "    <div class='wix-modal--footer' data-hook='modal-footer' ng-if='confirmButton.label || cancelButton.label'>\n" + "      <button class='modal-button wix-modal--confirm-button' data-hook='modal-confirm-button' ng-class='confirmButton.buttonClass' ng-click='windowCtrl.confirm($event)' ng-if='confirmButton.label'>{{confirmButton.label}}</button>\n" + "      <button class='modal-button is-button-outline wix-modal--cancel-button' data-hook='modal-cancel-button' ng-class='cancelButton.buttonClass' ng-click='windowCtrl.cancel($event)' ng-if='cancelButton.label'>{{cancelButton.label}}</button>\n" + "    </div>\n" + "  </div>\n" + "</div>\n");
} ]);

"use strict";

try {
    angular.module("wixStyleInternal");
} catch (e) {
    angular.module("wixStyleInternal", []);
}

angular.module("wixStyleInternal").run([ "$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("views/components/modals/wix-premium-window.html", "<div class='wix-modal'>\n" + "  <div class='wix-modal--premium-window'>\n" + "    <div class='wix-modal--premium-header'>\n" + "      <button class='wix-modal--premium-close-button wix-style-svg-font-icons-close' md-autofocus ng-click='windowCtrl.close($event)'></button>\n" + "      <div class='wix-modal--premium-title'>{{title}}</div>\n" + "      <div class='wix-modal--premium-sub-title'>{{subtitle}}</div>\n" + "    </div>\n" + "    <div class='wix-modal--premium-modal-body'>\n" + "      <img class='wix-modal--premium-icon' ng-show='iconUrl' ng-src='{{iconUrl}}'>\n" + "      <div class='wix-modal--premium-content'>{{htmlContent}}</div>\n" + "      <div class='wix-modal--premium-buttons'>\n" + "        <button class='wix-modal--premium-confirm-button' ng-class='confirmButton.buttonClass' ng-click='windowCtrl.confirm($event)' ng-show='confirmButton'>{{confirmButton.label}}</button>\n" + "        <button class='wix-modal--premium-cancel-button' ng-class='cancelButton.buttonClass' ng-click='windowCtrl.cancel($event)' ng-show='cancelButton'>{{cancelButton.label}}</button>\n" + "      </div>\n" + "    </div>\n" + "  </div>\n" + "</div>\n");
} ]);

"use strict";

try {
    angular.module("wixStyleInternal");
} catch (e) {
    angular.module("wixStyleInternal", []);
}

angular.module("wixStyleInternal").run([ "$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("views/components/modals/wix-modal-custom-example.html", "<div class='wix-modal-custom-example-class'>\n" + "  <div>Hey I'm a custom modal</div>\n" + "  <button class='wix-button' ng-click='myCustomController.confirm($event)'>Click to Close</button>\n" + "</div>\n");
} ]);

"use strict";

try {
    angular.module("wixStyleInternal");
} catch (e) {
    angular.module("wixStyleInternal", []);
}

angular.module("wixStyle", [ "wixStyleInternal", "styleTranslations" ]).config(function() {
    return;
});

angular.module("wixStyleMaterialInternal", []);

angular.module("wixStyleMaterial", [ "wixStyleMaterialInternal", "wixStyle", "ngMaterial" ]).config(function() {
    return;
});

"use strict";

(function() {
    WixMdDialogBuilder.$inject = [ "$sce", "$rootScope" ];
    function WixMdDialogBuilder($sce, $rootScope) {
        var ALERT_TYPES = {
            DANGER: {
                wrapperClass: "wix-modal--danger",
                buttonClass: "wix-button-danger is-button-small"
            },
            ALERT: {
                wrapperClass: "wix-modal--alert",
                buttonClass: "wix-button is-button-small"
            }
        };
        function BaseModal(scope) {
            this.scope = scope;
            this.title = function(value) {
                scope.title = value;
                return this;
            };
            this.content = function(value) {
                scope.htmlContent = $sce.trustAsHtml(value);
                return this;
            };
            this.contentUrl = function(url) {
                scope.contentUrl = url;
                return this;
            };
            this.iconUrl = function(url) {
                scope.iconUrl = url;
                return this;
            };
            this.windowClass = function(value) {
                this.modalClass = value;
                return this;
            };
            this.modalController = function(controllerName) {
                this.controller = controllerName;
                return this;
            };
            this.modalControllerAs = function(controllerAs) {
                this.controllerAs = controllerAs;
                return this;
            };
            this.windowClass("").modalController("mdMessageWindowCtrl").modalControllerAs("windowCtrl");
        }
        this.alert = function() {
            var scope = $rootScope.$new();
            var alertModal = new BaseModal(scope);
            alertModal.scope.style = ALERT_TYPES.ALERT.wrapperClass;
            alertModal.scope.confirmButton = {
                buttonClass: ALERT_TYPES.ALERT.buttonClass
            };
            alertModal.scope.cancelButton = {
                buttonClass: ALERT_TYPES.ALERT.buttonClass
            };
            alertModal.templateUrl = "views/components/modals/wix-message-window.html";
            alertModal.confirm = function(text) {
                alertModal.scope.confirmButton.label = text;
                return this;
            };
            alertModal.cancel = function(text) {
                alertModal.scope.cancelButton.label = text;
                return this;
            };
            alertModal.style = function(type) {
                var selectedType = ALERT_TYPES[type];
                if (selectedType !== undefined) {
                    this.scope.style = selectedType.wrapperClass;
                    this.scope.confirmButton.buttonClass = selectedType.buttonClass;
                    this.scope.cancelButton.buttonClass = selectedType.buttonClass;
                }
                return this;
            };
            return alertModal;
        };
        this.premium = function() {
            var scope = $rootScope.$new();
            var premiumModal = new BaseModal(scope);
            premiumModal.templateUrl = "views/components/modals/wix-premium-window.html";
            premiumModal.subtitle = function(text) {
                this.scope.subtitle = text;
                return this;
            };
            premiumModal.confirm = function(label, buttonClass) {
                this.scope.confirmButton = {
                    label: label,
                    buttonClass: buttonClass
                };
                return this;
            };
            premiumModal.cancel = function(label, buttonClass) {
                this.scope.cancelButton = {
                    label: label,
                    buttonClass: buttonClass
                };
                return this;
            };
            return premiumModal;
        };
    }
    angular.module("wixStyleMaterialInternal").service("wixMdDialogBuilder", WixMdDialogBuilder);
})();

"use strict";

(function() {
    WixMdToastBuilder.$inject = [ "provider", "$log" ];
    function WixMdToastBuilder(provider, $log) {
        var template = '<md-toast ng-class="toastCtrl.getToastClass()">' + '<div class="wix-md-notification-wrapper">' + '<div ng-class="toastCtrl.icon.cssClasses" ng-show = "toastCtrl.icon.visible">' + '<img ng-src = "{{toastCtrl.icon.url}}"/>' + "</div>" + '<div class="wix-md-notification-content" ng-bind-html="toastCtrl.content"></div>' + '<a ng-class="toastCtrl.action.cssClass" ng-show="toastCtrl.action.visible" ng-click="toastCtrl.action.onClick($event)" ng-href="{{toastCtrl.action.url}}" target="{{toastCtrl.action.targetType}}">{{toastCtrl.action.text}}</a>' + '<button class="wix-md-notification-button wix-md-notification-close" ng-show="toastCtrl.closeVisible" ng-click="toastCtrl.close()"><svg version="1.1" id="Layer_1" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" x="0px" y="0px" viewBox="-2.4 21.6 9.7 9.7" style="enable-background:new -2.4 21.6 9.7 9.7;" xml:space="preserve"><polygon points="7.3,22.4 6.6,21.6 2.5,25.8 -1.6,21.6 -2.4,22.4 1.8,26.5 -2.4,30.6 -1.6,31.3 2.5,27.2 6.6,31.3 7.3,30.6 3.2,26.5 "/></svg></button>' + "</div>" + "</md-toast>";
        var allowedTypes = {
            general: "general",
            warning: "warning",
            error: "error",
            success: "success"
        };
        var allowedActionTypes = {
            none: "none",
            button: "button",
            link: "link"
        };
        var allowedTargetTypes = {
            blank: "_blank",
            self: "_self"
        };
        var unSupportedFeatures = {
            warning: {
                showAction: {
                    name: "action",
                    functionName: "showAction"
                },
                showIcon: {
                    name: "icon",
                    functionName: "showIcon"
                },
                showCloseButton: {
                    name: "close",
                    functionName: "showCloseButton"
                },
                showFullWidth: {
                    name: "full width",
                    functionName: "showFullWidth"
                }
            }
        };
        function removeUnSupportedFeatures(toastType, toastObject) {
            angular.forEach(unSupportedFeatures[toastType], function(unSupportedFeature) {
                toastObject[unSupportedFeature.functionName] = function() {
                    $log.error(unSupportedFeature.name + " on " + toastType + " is not supported");
                    return this;
                };
            });
        }
        function BaseToast(tType) {
            var toastType = allowedTypes[tType] || allowedTypes.general;
            this.controller = "wixToastController";
            this.controllerAs = "toastCtrl";
            this.position = "top";
            this.template = template;
            this.autoHide = 5e3;
            this.promise = {};
            this.locals = {
                content: "",
                isFullWidth: false,
                type: toastType,
                isLightColored: false,
                action: {
                    type: allowedActionTypes.none,
                    text: "",
                    onClick: angular.noop,
                    url: "",
                    targetType: allowedTargetTypes.blank
                },
                icon: {
                    url: "",
                    cssClass: "",
                    isDark: false
                }
            };
            this.autoHide = function(milliSeconds) {
                this.hideDelay = parseInt(milliSeconds, 10);
                return this;
            };
            this.content = function(value) {
                this.locals.content = value;
                return this;
            };
            this.showLightColored = function() {
                this.locals.isLightColored = true;
                return this;
            };
            this.showFullWidth = function() {
                this.locals.isFullWidth = true;
                return this;
            };
            this.showCloseButton = function() {
                this.locals.closeVisible = true;
                return this;
            };
            this.showAction = function(opts) {
                var options = opts || {}, actionType, actionOnClick, actionUrl, actionTargetType;
                actionType = allowedActionTypes[options.type] || "";
                actionOnClick = options.onClick ? options.onClick : angular.noop;
                actionUrl = options.url ? options.url : "";
                actionTargetType = options.url && options.targetType ? options.targetType : allowedTargetTypes.blank;
                if (actionType) {
                    this.locals.action = {
                        type: actionType,
                        text: options.text,
                        onClick: actionOnClick,
                        url: actionUrl,
                        targetType: actionTargetType
                    };
                }
                return this;
            };
            this.showIcon = function(opts) {
                var options = opts || {};
                this.locals.icon.url = options.url || "";
                this.locals.icon.cssClass = options.cssClass || "";
                this.locals.icon.isDark = options.isDark || false;
                return this;
            };
            this.withParent = function(elementOrSelector) {
                var element = typeof elementOrSelector === "string" ? angular.element(document.querySelector(elementOrSelector)) : elementOrSelector;
                this.parent = element;
                this.locals.parent = element;
                this.locals.hasParent = true;
                return this;
            };
            if (provider.parent) {
                this.withParent(provider.parent);
            }
        }
        this.toastTypes = allowedTypes;
        this.actionTypes = allowedActionTypes;
        this.targetTypes = allowedTargetTypes;
        angular.forEach(allowedTypes, function(value, key) {
            this[key] = function() {
                var alertToast = new BaseToast(allowedTypes[key]);
                removeUnSupportedFeatures(key, alertToast);
                return alertToast;
            };
        }, this);
    }
    angular.module("wixStyleMaterialInternal").provider("wixMdToastBuilder", function() {
        this.setParent = function(parent) {
            this.parent = parent;
        };
        this.$get = [ "$injector", function($injector) {
            return $injector.instantiate(WixMdToastBuilder, {
                provider: this
            });
        } ];
        this.$get.$inject = [ "$injector" ];
    });
})();

"use strict";

var MdMessageWindowCtrl = function() {
    MdMessageWindowCtrl.$inject = [ "$mdDialog" ];
    function MdMessageWindowCtrl($mdDialog) {
        this.$mdDialog = $mdDialog;
    }
    MdMessageWindowCtrl.prototype.close = function($event) {
        this.$mdDialog.cancel();
        $event.stopImmediatePropagation();
    };
    MdMessageWindowCtrl.prototype.cancel = function($event) {
        this.$mdDialog.cancel();
        $event.stopImmediatePropagation();
    };
    MdMessageWindowCtrl.prototype.confirm = function($event) {
        this.$mdDialog.hide();
        $event.stopImmediatePropagation();
    };
    return MdMessageWindowCtrl;
}();

angular.module("wixStyleMaterialInternal").controller("mdMessageWindowCtrl", MdMessageWindowCtrl);

"use strict";

(function() {
    WixToastController.$inject = [ "$scope", "$sce", "$mdToast", "locals", "$document", "$timeout" ];
    function WixToastController($scope, $sce, $mdToast, locals, $document, $timeout) {
        var _self = this;
        var placeholderElementClass = "wix-style-md-material-toast-full-width-placeholder";
        var placeholderElement = angular.element('<div class="' + placeholderElementClass + '"></div>');
        var parentElement = locals.hasParent ? locals.parent : $document.find("body");
        var SHOW_DURATION = 450;
        var HIDE_DURATION = 300;
        function displayPlaceholder() {
            parentElement.prepend(placeholderElement);
            $timeout(function() {
                placeholderElement.addClass(placeholderElementClass + "-open");
            }, 0);
        }
        function removePlaceholder() {
            placeholderElement.removeClass(placeholderElementClass + "-open");
            $timeout(function() {
                placeholderElement.remove();
            }, HIDE_DURATION);
        }
        function manageParentOverflowStyle(duration) {
            parentElement.css("overflow", "hidden");
            $timeout(function() {
                parentElement.css("overflow", "");
            }, duration);
        }
        if (locals.hasParent) {
            manageParentOverflowStyle(SHOW_DURATION);
        }
        if (locals.isFullWidth) {
            displayPlaceholder();
        }
        this.closeVisible = locals.closeVisible;
        this.content = $sce.trustAsHtml(locals.content);
        this.action = angular.extend(locals.action);
        this.action.visible = locals.action.type !== "none";
        Object.defineProperty(this.action, "cssClass", {
            get: function() {
                var cssClasses = [ "wix-md-notification-action", "wix-md-notification-action-" + locals.action.type ];
                if (locals.action.type === "button") {
                    cssClasses.push("wix-button");
                    cssClasses.push("wix-md-notification-button");
                    cssClasses.push("is-button-small");
                }
                return cssClasses;
            }
        });
        this.icon = angular.extend(locals.icon);
        this.icon.visible = locals.icon.url !== "";
        Object.defineProperty(this.icon, "cssClasses", {
            get: function() {
                var cssClasses = [ "wix-md-notification-icon-wrapper" ];
                if (locals.icon.cssClass) {
                    cssClasses.push(locals.icon.cssClass);
                }
                if (locals.icon.isDark) {
                    cssClasses.push("wix-md-notification-icon-wrapper-dark");
                }
                return cssClasses;
            }
        });
        this.getToastClass = function() {
            var cssClasses = [ "wix-md-notification-container", "wix-md-notification-" + locals.type ];
            if (locals.isLightColored) {
                cssClasses.push("wix-md-notification-light");
            }
            if (locals.isFullWidth) {
                cssClasses.push("wix-md-notification-full-width");
            }
            if (_self.closeVisible) {
                cssClasses.push("wix-md-notification-with-close");
            }
            if (locals.hasParent) {
                cssClasses.push("wix-md-notification-under-parent");
            }
            return cssClasses;
        };
        this.close = function() {
            $mdToast.hide();
            onClose();
        };
        $scope.$on("$destroy", function() {
            onClose();
        });
        function onClose() {
            removePlaceholder();
            if (locals.hasParent) {
                manageParentOverflowStyle(HIDE_DURATION);
            }
        }
    }
    angular.module("wixStyleMaterialInternal").controller("wixToastController", WixToastController);
})();

"use strict";

var MessageWindowCtrl = function() {
    MessageWindowCtrl.$inject = [ "wixModal" ];
    function MessageWindowCtrl(wixModal) {
        this.wixModal = wixModal;
    }
    MessageWindowCtrl.prototype.close = function($event) {
        this.wixModal.close("CLOSE");
        $event.stopImmediatePropagation();
    };
    MessageWindowCtrl.prototype.cancel = function($event) {
        this.wixModal.close("CANCEL");
        $event.stopImmediatePropagation();
    };
    MessageWindowCtrl.prototype.confirm = function($event) {
        this.wixModal.close("CONFIRM");
        $event.stopImmediatePropagation();
    };
    return MessageWindowCtrl;
}();

angular.module("wixStyleInternal").controller("MessageWindowCtrl", MessageWindowCtrl);

"use strict";

var WixModalCustomExample = function() {
    WixModalCustomExample.$inject = [ "wixModal" ];
    function WixModalCustomExample(wixModal) {
        this.wixModal = wixModal;
    }
    WixModalCustomExample.prototype.confirm = function($event) {
        this.wixModal.close("CONFIRM");
        $event.stopImmediatePropagation();
    };
    return WixModalCustomExample;
}();

angular.module("wixStyleInternal").controller("WixModalCustomExample", WixModalCustomExample);

"use strict";

(function() {
    function dropdown() {
        return {
            templateUrl: "views/directives/wix-dropdown.html",
            restrict: "E",
            scope: {
                openOnClick: "=openOnClick",
                items: "=items",
                selectedItem: "=?selectedItem",
                ngDisabled: "=ngDisabled"
            },
            link: function postLink(scope) {
                if (scope.items && !scope.selectedItem) {
                    var firstItem = scope.items[0];
                    firstItem.selected = true;
                    scope.selectedItem = firstItem;
                }
                scope.openDropdown = function() {
                    scope.isOpen = !scope.isOpen && !scope.ngDisabled;
                };
                scope.selectOption = function(item) {
                    if (!item) {
                        throw new Error("item is missing");
                    }
                    if (scope.selectedItem) {
                        scope.selectedItem.selected = false;
                    }
                    item.selected = true;
                    scope.selectedItem = item;
                    scope.isOpen = false;
                };
            }
        };
    }
    angular.module("wixStyleInternal").directive("wixDropdown", dropdown);
})();

(function() {
    function toggle() {
        return {
            template: '<label class="wix-toggle">\n          <input type="checkbox" />\n          <span>\n            <i class="toggle-circle"></i>\n          </span>\n        </label>',
            replace: true,
            restrict: "E",
            compile: function($element, $attrs) {
                var input = $element.find("input");
                for (var attrCamelCase in $attrs.$attr) {
                    if ($attrs.$attr.hasOwnProperty(attrCamelCase)) {
                        var attrKebabCase = $attrs.$attr[attrCamelCase];
                        var attrValue = $attrs[attrCamelCase];
                        input.attr(attrKebabCase, attrValue);
                    }
                }
                return function postLink() {};
            }
        };
    }
    angular.module("wixStyleInternal").directive("wixToggle", toggle);
})();

"use strict";

(function() {
    function wixInput() {
        return {
            restrict: "E",
            template: '<div class="wix-input"><input/><i class="icon wix-style-svg-font-icons-validation"></i></div>',
            compile: function(element, $attrs) {
                function replaceToTextArea() {
                    var input = element.find("input");
                    input.replaceWith(angular.element("<textarea></textarea>"));
                }
                function addTooltip(errorMessage) {
                    var icon = element.find("i");
                    icon.attr("wix-tooltip", errorMessage);
                    icon.attr("placement", "top");
                    icon.attr("append-to-body", "true");
                    icon.attr("max-width", "250px");
                }
                var rows = $attrs.$attr.rows;
                if (rows) {
                    replaceToTextArea();
                }
                var errorMessage = $attrs.errorMessage;
                if (errorMessage) {
                    var errorType = $attrs.errorType || "tooltip";
                    if (errorType === "tooltip") {
                        addTooltip(errorMessage);
                    }
                }
                var inputOrTextarea = element.find(rows ? "textarea" : "input");
                for (var attrCamelCase in $attrs.$attr) {
                    if ($attrs.$attr.hasOwnProperty(attrCamelCase)) {
                        var attrKebabCase = $attrs.$attr[attrCamelCase];
                        var attrValue = $attrs[attrCamelCase];
                        inputOrTextarea.attr(attrKebabCase, attrValue);
                        element.removeAttr(attrKebabCase);
                    }
                }
            }
        };
    }
    angular.module("wixStyleInternal").directive("wixInput", wixInput);
})();

"use strict";

(function() {
    WixModal.$inject = [ "$q", "$sce", "$templateCache", "$http", "$rootScope", "$controller", "$compile", "$document" ];
    function WixModal($q, $sce, $templateCache, $http, $rootScope, $controller, $compile, $document) {
        var ALERT_TYPES = {
            DANGER: {
                wrapperClass: "wix-modal--danger",
                buttonClass: "wix-button-danger is-button-small"
            },
            ALERT: {
                wrapperClass: "wix-modal--alert",
                buttonClass: "wix-button is-button-small"
            }
        };
        var body = $document.find("body");
        var modalStack = [];
        var self = this;
        self.modalContainer = null;
        function BaseModal(scope) {
            this.scope = scope;
            this.modalClass = "";
            this.title = function(value) {
                scope.title = value;
                return this;
            };
            this.content = function(value) {
                scope.htmlContent = $sce.trustAsHtml(value);
                return this;
            };
            this.iconUrl = function(url) {
                scope.iconUrl = url;
                return this;
            };
            this.windowClass = function(value) {
                this.modalClass = value;
            };
        }
        this.alert = function() {
            var scope = $rootScope.$new();
            var alertModal = new BaseModal(scope);
            alertModal.scope.style = ALERT_TYPES.ALERT.wrapperClass;
            alertModal.scope.confirmButton = {
                buttonClass: ALERT_TYPES.ALERT.buttonClass
            };
            alertModal.scope.cancelButton = {
                buttonClass: ALERT_TYPES.ALERT.buttonClass
            };
            alertModal.templateUrl = "views/components/modals/wix-message-window.html";
            alertModal.controller = "MessageWindowCtrl";
            alertModal.controllerAs = "windowCtrl";
            alertModal.confirm = function(text) {
                alertModal.scope.confirmButton.label = text;
                return this;
            };
            alertModal.cancel = function(text) {
                alertModal.scope.cancelButton.label = text;
                return this;
            };
            alertModal.style = function(type) {
                var selectedType = ALERT_TYPES[type];
                if (selectedType !== undefined) {
                    this.scope.style = selectedType.wrapperClass;
                    this.scope.confirmButton.buttonClass = selectedType.buttonClass;
                    this.scope.cancelButton.buttonClass = selectedType.buttonClass;
                }
                return this;
            };
            return alertModal;
        };
        this.premium = function() {
            var scope = $rootScope.$new();
            var premiumModal = new BaseModal(scope);
            premiumModal.templateUrl = "views/components/modals/wix-premium-window.html";
            premiumModal.controller = "MessageWindowCtrl";
            premiumModal.controllerAs = "windowCtrl";
            premiumModal.subtitle = function(text) {
                this.scope.subtitle = text;
                return this;
            };
            premiumModal.confirm = function(label, buttonClass) {
                this.scope.confirmButton = {
                    label: label,
                    buttonClass: buttonClass
                };
                return this;
            };
            premiumModal.cancel = function(label, buttonClass) {
                this.scope.cancelButton = {
                    label: label,
                    buttonClass: buttonClass
                };
                return this;
            };
            return premiumModal;
        };
        function getTemplate(template, templateUrl) {
            if (templateUrl) {
                return $http({
                    method: "GET",
                    url: templateUrl,
                    cache: $templateCache
                }).then(function(response) {
                    return response.data;
                });
            } else {
                return $q.when(template);
            }
        }
        function removeModal(modalElement) {
            removeBackDrop();
            modalElement.remove();
        }
        function removeBackDrop() {
            if (modalStack.length === 0) {
                self.modalContainer.off("click");
                self.modalContainer.remove();
                self.modalContainer = null;
                body.removeClass("wix-modal-body-open");
            }
        }
        function addBackDrop() {
            if (self.modalContainer === null) {
                self.modalContainer = angular.element('<div class="wix-modal wix-modal--container"></div>');
                body.append(self.modalContainer);
                body.addClass("wix-modal-body-open");
                self.modalContainer.on("click", function(e) {
                    var modal = angular.element(".wix-modal--window");
                    if (modal.has(e.target).length === 0) {
                        self.close("BLUR");
                    }
                });
            }
        }
        function createController(options) {
            var controllerName = options.controller;
            if (options.controllerAs) {
                controllerName = controllerName + " as " + options.controllerAs;
            }
            $controller(controllerName, {
                $scope: options.scope
            });
        }
        function createModalElement(options, result) {
            var renderTemplate = "" + '<div class="wix-modal-window-wrapper">' + '<div class="wix-modal--window ' + options.modalClass + '" style="width:' + options.width + 'px;">' + result + "</div>" + "</div>";
            angular.element(renderTemplate);
            var linkFn = $compile(renderTemplate);
            var modalElement = linkFn(options.scope);
            return modalElement;
        }
        function createModalWindow(options) {
            return getTemplate(options.template, options.templateUrl).then(function(result) {
                addBackDrop();
                createController(options);
                if (options.width === undefined) {
                    options.width = 564;
                }
                var modalElement = createModalElement(options, result);
                self.modalContainer.append(modalElement);
                return modalElement;
            });
        }
        this.confirm = function(result) {
            var defer = modalStack.pop();
            if (defer) {
                defer.reject(result);
            }
        };
        this.close = function(reason) {
            var defer = modalStack.pop();
            if (defer) {
                defer.resolve(reason);
            }
        };
        this.open = function(options) {
            var modalElement = null;
            return createModalWindow(options).then(function(result) {
                var defer = $q.defer();
                modalElement = result;
                modalStack.push(defer);
                return defer.promise;
            }).then(function(result) {
                removeModal(modalElement);
                return result;
            }).catch(function(reason) {
                removeModal(modalElement);
                return reason;
            });
        };
    }
    angular.module("wixStyleInternal").service("wixModal", WixModal);
})();

"use strict";

(function() {
    function wixCheckbox() {
        return {
            template: "<label>" + '<input type="checkbox"/>' + '<span class="wix-checkbox-inner"></span>' + "</label>",
            restrict: "E",
            compile: function(element, $attrs) {
                var input = element.find("input");
                for (var attrCamelCase in $attrs.$attr) {
                    if ($attrs.$attr.hasOwnProperty(attrCamelCase)) {
                        var attrKebabCase = $attrs.$attr[attrCamelCase];
                        var attrValue = $attrs[attrCamelCase];
                        input.attr(attrKebabCase, attrValue);
                    }
                }
                return function postLink() {};
            }
        };
    }
    angular.module("wixStyleInternal").directive("wixCheckbox", wixCheckbox);
})();

"use strict";

(function() {
    notification.$inject = [ "$timeout" ];
    function notification($timeout) {
        return {
            template: '<div class="wix-notification-container" ng-if="notificationTemplate === \'with-shadow\'"><div class="wix-notification-{{ notificationType }} is-notification-with-shadow" ng-transclude></div></div>' + '<div ng-if="notificationTemplate === \'with-close-button\'" class="wix-notification-{{ notificationType }} is-notification-closable"><span ng-transclude></span><span class="wix-notification-close-button" ng-click="close()"></span></div>' + '<div ng-if="notificationTemplate === \'with-inner-button\'" class="wix-notification-{{ notificationType }} is-notification-closable-with-inner-button"><span ng-transclude></span><span class="wix-notification-close-button" ng-click="close()"></span></div>' + '<div ng-if="notificationTemplate === \'with-icon\'" class="wix-notification-{{ notificationType }} is-notification-closable-with-icon"><span class="wix-notification-icon"></span><span ng-transclude></span><span class="wix-notification-close-button" ng-click="close()"></span></div>' + '<div ng-if="notificationTemplate === \'with-icon-dark\'" class="wix-notification-{{ notificationType }} is-notification-closable-with-icon-dark"><span class="wix-notification-icon"></span><span ng-transclude></span><span class="wix-notification-close-button" ng-click="close()"></span></div>',
            restrict: "E",
            transclude: true,
            scope: {
                template: "@",
                type: "@",
                onClose: "&",
                autoHide: "@"
            },
            link: function postLink(scope, element) {
                var notificationTypes = {
                    general: "general",
                    error: "error",
                    warning: "warning",
                    success: "success"
                };
                var templateTypes = {
                    "with-shadow": "with-shadow",
                    "with-close-button": "with-close-button",
                    "with-inner-button": "with-inner-button",
                    "with-icon": "with-icon",
                    "with-icon-dark": "with-icon-dark"
                };
                scope.notificationTemplate = templateTypes[scope.template] || "with-close-button";
                scope.notificationType = notificationTypes[scope.type] || "general";
                scope.close = function() {
                    scope.onClose();
                    element.remove();
                };
                if (scope.notificationTemplate === "with-shadow") {
                    scope.timeout = scope.autoHide > 0 ? scope.autoHide : 5e3;
                    $timeout(scope.close, scope.timeout);
                }
            }
        };
    }
    angular.module("wixStyleInternal").directive("wixNotification", notification);
})();

"use strict";

var WixWizard = function() {
    WixWizard.$inject = [ "$scope", "$element" ];
    function WixWizard($scope, $element) {
        var firstStep = $scope.steps[0];
        firstStep.state = "active";
    }
    return WixWizard;
}();

angular.module("wixStyle").directive("wixWizard", function() {
    return {
        templateUrl: "views/directives/wix-wizard.html",
        restrict: "E",
        scope: {
            steps: "="
        },
        controller: WixWizard,
        controllerAs: "wixWizard"
    };
});

"use strict";

(function() {
    wixRadio.$inject = [ "$parse" ];
    function wixRadio($parse) {
        return {
            template: "<label>" + '<input type="radio"/>' + '<span class="wix-radio-inner"></span>' + "</label>",
            restrict: "E",
            compile: function(element, $attrs) {
                var input = element.find("input");
                for (var attrCamelCase in $attrs.$attr) {
                    if ($attrs.$attr.hasOwnProperty(attrCamelCase)) {
                        var attrKebabCase = $attrs.$attr[attrCamelCase];
                        var attrValue = $attrs[attrCamelCase];
                        input.attr(attrKebabCase, attrValue);
                    }
                }
                removeIdAttrFromElement(element);
                return function postLink() {};
            }
        };
    }
    function removeIdAttrFromElement(element) {
        if (element.attr("id")) {
            element.attr("id", "");
        }
    }
    angular.module("wixStyleInternal").directive("wixRadio", wixRadio);
})();

"use strict";

(function() {
    wixTooltip.$inject = [ "$timeout", "$compile", "wixPosition", "$sce", "$document" ];
    function wixTooltip($timeout, $compile, wixPosition, $sce, $document) {
        return {
            restrict: "A",
            scope: {
                maxWidth: "@",
                appendToBody: "=?",
                debug: "=?",
                tooltipTemplate: "@?",
                tooltipScope: "=?",
                tooltipTrigger: "@?",
                isOpen: "=?",
                tooltipCloseOnContent: "=?"
            },
            controllerAs: "vm",
            compile: function() {
                return function link(scope, element, attrs) {
                    var isDebug = attrs.debug === "" || attrs.debug === "true";
                    var closeOnContent = !!scope.tooltipCloseOnContent;
                    var ttScope;
                    var allowedPlacements = {
                        top: "top",
                        bottom: "bottom",
                        left: "left",
                        right: "right"
                    };
                    var defaultOptions = {
                        placement: "top"
                    };
                    var tooltipDestroyTimeout;
                    var placement = defaultOptions.placement;
                    var tooltipElement;
                    var shouldAppendToBody;
                    var hasEnableExp = angular.isDefined(attrs.tooltipEnable);
                    scope.$watch("isOpen", function(newVal, oldVal) {
                        if (oldVal && newVal === false && tooltipElement) {
                            destroyTooltipGracefully();
                        } else if (newVal === true && !tooltipElement) {
                            $timeout(function() {
                                setPlacement();
                                showTooltip();
                            }, 0);
                        }
                    });
                    function positionTooltip() {
                        if (!tooltipElement) {
                            return;
                        }
                        tooltipElement.addClass("placement-" + placement);
                        if (scope.maxWidth && typeof scope.maxWidth === "string") {
                            tooltipElement.css({
                                "max-width": scope.maxWidth
                            });
                        }
                        var ttPosition = wixPosition.positionElements(element, tooltipElement, placement, shouldAppendToBody);
                        switch (placement) {
                          case allowedPlacements.bottom:
                            ttPosition.top += -2;
                            break;

                          case allowedPlacements.left:
                            ttPosition.left += 2;
                            break;

                          case allowedPlacements.right:
                            ttPosition.left += -2;
                            break;

                          default:
                            ttPosition.top += 2;
                            break;
                        }
                        ttPosition.top += "px";
                        ttPosition.left += "px";
                        tooltipElement.css(ttPosition);
                    }
                    function cancelTooltipRemove() {
                        $timeout.cancel(tooltipDestroyTimeout);
                        tooltipDestroyTimeout = null;
                    }
                    function onElementMouseOver() {
                        if (tooltipDestroyTimeout) {
                            cancelTooltipRemove();
                        } else {
                            showTooltip();
                        }
                    }
                    function showTooltip() {
                        if (hasEnableExp && !scope.$eval(attrs.tooltipEnable)) {
                            return;
                        }
                        createTooltip();
                        ttScope.$apply();
                        positionTooltip();
                        ttScope.$apply();
                    }
                    function onElementMouseLeave() {
                        if (isDebug || isClickSelectorTrigger()) {
                            return;
                        }
                        destroyTooltipGracefully();
                    }
                    function onTooltipMouseOver() {
                        if (!closeOnContent) {
                            cancelTooltipRemove();
                        }
                    }
                    function onTooltipMouseLeave() {
                        onElementMouseLeave();
                    }
                    function createScope() {
                        var res = scope.$new(true);
                        angular.extend(res, scope.tooltipScope || {});
                        return res;
                    }
                    function getTooltipTemplate() {
                        var placeholder = '<div class="wix-tooltip-content" ng-bind-html="htmlContent"></div>';
                        if (typeof scope.tooltipTemplate === "string") {
                            placeholder = "<div>" + scope.tooltipTemplate + "</div>";
                        }
                        return '<div class="wix-tooltip" ng-mouseover="onTooltipMouseOver()" ng-mouseleave="onTooltipMouseLeave()">' + '<div class="wix-tooltip-container">' + '<div class="wix-tooltip-arrow"></div>' + placeholder + "</div>" + "</div>";
                    }
                    function setVisibility(visible) {
                        ttScope.tooltipVisible = visible;
                        scope.isOpen = visible;
                    }
                    function createTooltip() {
                        if (tooltipElement) {
                            destroyTooltip();
                        }
                        ttScope = createScope();
                        shouldAppendToBody = scope.appendToBody ? scope.appendToBody : false;
                        ttScope.htmlContent = $sce.trustAsHtml(attrs.wixTooltip);
                        setVisibility(false);
                        ttScope.onTooltipMouseOver = onTooltipMouseOver;
                        ttScope.onTooltipMouseLeave = onTooltipMouseLeave;
                        tooltipElement = $compile(getTooltipTemplate())(ttScope, function(tooltip) {
                            if (shouldAppendToBody) {
                                $document.find("body").append(tooltip);
                            } else {
                                element.after(tooltip);
                            }
                        });
                        tooltipElement.addClass(attrs.tooltipClass);
                        setVisibility(true);
                    }
                    function destroyTooltip() {
                        if (tooltipElement) {
                            setVisibility(false);
                            tooltipElement.remove();
                            tooltipElement = null;
                            ttScope.$destroy();
                            ttScope = null;
                        }
                    }
                    function setPlacement() {
                        var userDefinedPlacement = attrs.placement;
                        if (userDefinedPlacement && allowedPlacements[userDefinedPlacement]) {
                            placement = userDefinedPlacement;
                        }
                    }
                    function destroyTooltipGracefully() {
                        tooltipDestroyTimeout = $timeout(function() {
                            destroyTooltip();
                            tooltipDestroyTimeout = null;
                        }, 0);
                    }
                    function onElementClick() {
                        if (scope.isOpen && tooltipElement) {
                            destroyTooltipGracefully();
                        } else {
                            showTooltip();
                        }
                    }
                    function isClickSelectorTrigger() {
                        return scope.tooltipTrigger === "click click-selector";
                    }
                    function setTooltipTriggers() {
                        if (isClickSelectorTrigger()) {
                            element.bind("click", onElementClick);
                        } else {
                            element.bind(scope.tooltipTrigger === "click hover" ? "click" : "mouseenter", onElementMouseOver);
                            element.bind("mouseleave", onElementMouseLeave);
                        }
                    }
                    function init() {
                        setPlacement();
                        setTooltipTriggers();
                    }
                    init();
                };
            }
        };
    }
    angular.module("wixStyle").directive("wixTooltip", wixTooltip).factory("wixPosition", [ "$document", "$window", function($document, $window) {
        function getStyle(el, cssprop) {
            if (el.currentStyle) {
                return el.currentStyle[cssprop];
            } else if ($window.getComputedStyle) {
                return $window.getComputedStyle(el)[cssprop];
            }
            return el.style[cssprop];
        }
        function isStaticPositioned(element) {
            return (getStyle(element, "position") || "static") === "static";
        }
        var parentOffsetEl = function(element) {
            var docDomEl = $document[0];
            var offsetParent = element.offsetParent || docDomEl;
            while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent)) {
                offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || docDomEl;
        };
        var fixMarginBelowBody = function(rect) {
            rect.top = rect.top - $document.find("body")[0].getBoundingClientRect().top - ($window.pageYOffset || $document[0].documentElement.scrollTop);
            return rect;
        };
        return {
            position: function(element) {
                var elBCR = this.offset(element);
                var offsetParentBCR = {
                    top: 0,
                    left: 0
                };
                var offsetParentEl = parentOffsetEl(element[0]);
                if (offsetParentEl !== $document[0]) {
                    offsetParentBCR = this.offset(angular.element(offsetParentEl));
                    offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
                    offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
                }
                var boundingClientRect = element[0].getBoundingClientRect();
                return {
                    width: boundingClientRect.width || element.prop("offsetWidth"),
                    height: boundingClientRect.height || element.prop("offsetHeight"),
                    top: elBCR.top - offsetParentBCR.top,
                    left: elBCR.left - offsetParentBCR.left
                };
            },
            offset: function(element) {
                var boundingClientRect = element[0].getBoundingClientRect();
                return {
                    width: boundingClientRect.width || element.prop("offsetWidth"),
                    height: boundingClientRect.height || element.prop("offsetHeight"),
                    top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
                    left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
                };
            },
            positionElements: function(hostEl, targetEl, positionStr, appendToBody) {
                var positionStrParts = positionStr.split("-");
                var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || "center";
                var hostElPos, targetElWidth, targetElHeight, targetElPos;
                hostElPos = appendToBody ? fixMarginBelowBody(this.offset(hostEl)) : this.position(hostEl);
                targetElWidth = targetEl.prop("offsetWidth");
                targetElHeight = targetEl.prop("offsetHeight");
                var shiftWidth = {
                    center: function() {
                        return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
                    },
                    left: function() {
                        return hostElPos.left;
                    },
                    right: function() {
                        return hostElPos.left + hostElPos.width;
                    }
                };
                var shiftHeight = {
                    center: function() {
                        return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
                    },
                    top: function() {
                        return hostElPos.top;
                    },
                    bottom: function() {
                        return hostElPos.top + hostElPos.height;
                    }
                };
                switch (pos0) {
                  case "right":
                    targetElPos = {
                        top: shiftHeight[pos1](),
                        left: shiftWidth[pos0]()
                    };
                    break;

                  case "left":
                    targetElPos = {
                        top: shiftHeight[pos1](),
                        left: hostElPos.left - targetElWidth
                    };
                    break;

                  case "bottom":
                    targetElPos = {
                        top: shiftHeight[pos0](),
                        left: shiftWidth[pos1]()
                    };
                    break;

                  default:
                    targetElPos = {
                        top: hostElPos.top - targetElHeight,
                        left: shiftWidth[pos1]()
                    };
                    break;
                }
                return targetElPos;
            }
        };
    } ]);
})();

"use strict";

var directives;

(function(directives) {
    var WixTabController = function() {
        WixTabController.$inject = [ "$scope" ];
        function WixTabController($scope) {
            this.$scope = $scope;
            this.isActive = true;
        }
        WixTabController.prototype.getLabel = function() {
            return this.label;
        };
        return WixTabController;
    }();
    directives.WixTabController = WixTabController;
    function wixTab() {
        return {
            template: '<div ng-show="wixTabVM.isActive" ng-transclude></div>',
            controller: WixTabController,
            controllerAs: "wixTabVM",
            bindToController: {
                label: "@"
            },
            transclude: true,
            scope: true,
            link: function($scope, $element, attrs, ctrl) {
                ctrl.isActive = attrs.hasOwnProperty("active");
                ctrl.disabled = attrs.hasOwnProperty("disabled");
                ctrl.label = attrs.label;
            },
            restrict: "E"
        };
    }
    directives.wixTab = wixTab;
    var WixTabsController = function() {
        function WixTabsController() {}
        WixTabsController.prototype.onTabClick = function(tab) {
            if (!tab.disabled) {
                this.activeTabIndex = this.tabControllers.indexOf(tab);
            }
        };
        Object.defineProperty(WixTabsController.prototype, "activeTabIndex", {
            get: function() {
                return this._activeTabIndex;
            },
            set: function(value) {
                this._activeTabIndex = value;
                for (var i = 0; i < this.tabControllers.length; i++) {
                    this.tabControllers[i].isActive = false;
                }
                this.tabControllers[value].isActive = true;
            },
            enumerable: true,
            configurable: true
        });
        WixTabsController.prototype.isActive = function(tab) {
            return this.tabControllers.indexOf(tab) === this.activeTabIndex;
        };
        return WixTabsController;
    }();
    directives.WixTabsController = WixTabsController;
    function wixTabs() {
        function getActiveTabIndex(tabsElements) {
            var activeIndex = 0;
            angular.forEach(tabsElements, function(value, index) {
                if (value.isActive === true) {
                    activeIndex = index;
                }
            });
            return activeIndex;
        }
        return {
            templateUrl: "views/directives/wix-tabs.html",
            controller: WixTabsController,
            controllerAs: "wixTabsVM",
            transclude: true,
            scope: true,
            link: function($scope, $element, attrs, ctrl) {
                $element.addClass("wix-tabs");
                var tabControllers = [];
                angular.forEach($element.find("wix-tab"), function(element, index) {
                    var jqLiteElement = angular.element(element);
                    tabControllers.push(jqLiteElement.controller("wixTab"));
                });
                ctrl.tabControllers = tabControllers;
                ctrl.activeTabIndex = getActiveTabIndex(tabControllers);
            },
            restrict: "E"
        };
    }
    directives.wixTabs = wixTabs;
})(directives || (directives = {}));

angular.module("wixStyle").directive("wixTab", directives.wixTab);

angular.module("wixStyle").directive("wixTabs", directives.wixTabs);

"use strict";

(function() {
    function wixSearch() {
        return {
            templateUrl: "views/directives/wix-search.html",
            restrict: "E",
            compile: function(element, $attrs) {
                var input = element.find("input");
                for (var attrCamelCase in $attrs.$attr) {
                    if ($attrs.$attr.hasOwnProperty(attrCamelCase)) {
                        var attrKebabCase = $attrs.$attr[attrCamelCase];
                        var attrValue = $attrs[attrCamelCase];
                        input.attr(attrKebabCase, attrValue);
                    }
                }
                element.addClass("wix-search");
                return function postLink(scope, element, attr) {
                    var input = element.find("input");
                    var width = element.prop("offsetWidth");
                    var wider = width * 1.2;
                    function setWidth(newWidth) {
                        if (element.hasClass("animated")) {
                            element.css("width", (newWidth || width) + "px");
                        }
                    }
                    function evalOnClear(event) {
                        scope.$eval(attr.onClear, {
                            event: event,
                            oldValue: input.val()
                        });
                    }
                    scope.clearSearch = function(event) {
                        evalOnClear(event);
                        input.val("").triggerHandler("input");
                    };
                    scope.shouldShowClear = function() {
                        return input.val();
                    };
                    scope.onFocusIn = function() {
                        element.addClass("focus");
                        setWidth(wider);
                    };
                    scope.onFocusOut = function() {
                        element.removeClass("focus");
                        setWidth();
                    };
                    input.bind("keyup", function(event) {
                        if (event.which === 13 && input.val()) {
                            scope.$eval(attr.onSearch, {
                                event: event
                            });
                            event.preventDefault();
                        }
                    });
                };
            }
        };
    }
    angular.module("wixStyleInternal").directive("wixSearch", wixSearch);
})();

"use strict";

(function() {
    function list() {
        return {
            restrict: "E",
            transclude: true,
            require: "ngModel",
            scope: {
                draggableItem: "&",
                checkableProperty: "&",
                imageSquare: "&",
                contentTemplate: "@",
                transcluded: "="
            },
            templateUrl: "views/directives/wix-list.html",
            link: function postLink(scope, element, attr, ngModelCtrl) {
                var dragSrcEl, dragTempEl;
                var dragSrcElItem;
                var startY = 0, y = 0;
                ngModelCtrl.$render = function() {
                    scope.items = ngModelCtrl.$viewValue;
                };
                scope.checkableProperty = attr.checkableProperty;
                var list = {
                    indexOfPlaceholder: undefined,
                    movePlaceholder: function(target) {
                        if (target === undefined) {
                            return;
                        }
                        var placeholder = scope.items.splice(this.indexOfPlaceholder, 1);
                        scope.items.splice(target, 0, placeholder[0]);
                        this.indexOfPlaceholder = target;
                        scope.$digest();
                    },
                    replacePlaceholderWithSrcItem: function(target) {
                        if (target === undefined) {
                            target = this.indexOfPlaceholder;
                        }
                        scope.items.splice(this.indexOfPlaceholder, 1);
                        scope.items.splice(target, 0, dragSrcElItem);
                        scope.$apply(function() {
                            ngModelCtrl.$setViewValue(scope.items);
                        });
                    },
                    replaceSrcItemWithPlaceholder: function(itemIndex) {
                        dragSrcElItem = scope.items[itemIndex];
                        this.indexOfPlaceholder = itemIndex;
                        scope.items.splice(itemIndex, 1);
                        scope.items.splice(itemIndex, 0, {
                            empty: true
                        });
                        scope.$digest();
                    }
                };
                var getIndex = function(target) {
                    if (target.attr("index")) {
                        return target.attr("index");
                    } else if (target.parent().attr("index")) {
                        return target.parent().attr("index");
                    }
                };
                element.on("mousedown", function(event) {
                    event.preventDefault();
                    var dragButton = angular.element(event.target);
                    if (dragButton.hasClass("wix-list-draggable")) {
                        dragSrcEl = dragButton.parent();
                        dragTempEl = angular.element('<div><div class="wix-list-item">' + dragSrcEl[0].innerHTML + "</div></div>");
                        element.append(dragTempEl);
                        dragTempEl.css({
                            position: "absolute",
                            width: "calc(100% - 18px)",
                            top: dragSrcEl[0].offsetTop + "px",
                            "pointer-events": "none"
                        });
                        startY = dragSrcEl[0].offsetTop - y;
                        list.replaceSrcItemWithPlaceholder(dragButton.parent().scope().$index);
                    }
                });
                var getCorrectPosition = function(event, target) {
                    var currentY = event.screenY + window.scrollY - target.offsetHeight * 1.5;
                    var heightMax = element[0].offsetHeight - target.offsetHeight + element[0].offsetTop;
                    var heightMin = element[0].offsetTop;
                    if (currentY < heightMin) {
                        return y;
                    } else if (heightMax < currentY) {
                        return y;
                    } else {
                        return currentY;
                    }
                };
                element.on("mousemove", function(event) {
                    if (dragSrcEl) {
                        if (event.preventDefault) {
                            event.preventDefault();
                        }
                        if (dragSrcEl !== event.target) {
                            list.movePlaceholder(getIndex(angular.element(event.target)));
                            y = getCorrectPosition(event, dragSrcEl[0]);
                            dragTempEl.css({
                                top: y + "px"
                            });
                        }
                    }
                    return false;
                });
                element.on("mouseup", function(event) {
                    if (dragSrcEl) {
                        if (event.stopPropagation) {
                            event.stopPropagation();
                        }
                        if (dragSrcEl !== event.target) {
                            list.replacePlaceholderWithSrcItem(getIndex(angular.element(event.target)));
                        }
                        dragSrcEl = null;
                        dragSrcElItem = null;
                        dragTempEl.remove();
                        return false;
                    }
                });
            }
        };
    }
    angular.module("wixStyleInternal").directive("wixList", list);
})();

"use strict";

(function() {
    angular.module("wixStyleInternal").directive("mdDatepicker", function() {
        return {
            priority: 9999,
            link: function(scope, element, attrs) {
                var datepickerInput = element.find("input");
                var datepickerButton = element.find("button")[1];
                if (attrs.mdClickOnInput) {
                    datepickerInput.attr("readonly", true);
                    datepickerInput.bind("click", function($event) {
                        angular.element($event.target).blur();
                        datepickerButton.click();
                    });
                }
            }
        };
    });
})();

"use strict";

angular.module("wixStyleInternal").directive("mdAutocomplete", [ "$compile", "$timeout", function($compile, $timeout) {
    var itemHeight = 36;
    var updateHeight = function(container, height) {
        $timeout(function() {
            container.css("height", height + "px");
        }, 0);
    };
    var recalculateHeight = function(container, amountOfItems) {
        if (amountOfItems === 0) {
            updateHeight(container, 2 * itemHeight);
        } else if (amountOfItems <= 4 && amountOfItems >= 1) {
            updateHeight(container, (amountOfItems + 1) * itemHeight);
        } else if (amountOfItems >= 5) {
            updateHeight(container, 6 * itemHeight);
        }
    };
    var actionTemplate = '<div class="md-autocomplete-action">\n                            <div ng-click="actionFn()">{{actionText}}</div>\n                          </div>';
    var iconTemplate = '<i class="icon wix-style-svg-font-icons-validation"\n                                  wix-tooltip="{{errorMessage}}"\n                                  append-to-body="true"\n                                  placement="top"\n                                  max-width="250px">\n                        </i>';
    return {
        require: "mdAutocomplete",
        link: function(scope, element, attrs, ctrl) {
            var container = element.find("md-virtual-repeat-container");
            var addIconTooltip = function(errorMessage) {
                scope.errorMessage = errorMessage;
                $timeout(function() {
                    var inputElement = element.find("input");
                    inputElement.addClass("error md-autocomplete-input");
                    var iconElement = $compile(iconTemplate)(scope);
                    inputElement.after(iconElement);
                }, 0);
            };
            if (attrs["mdActionText"]) {
                scope.actionText = attrs.mdActionText;
                scope.actionFn = function() {
                    element.find("input").blur().attr("disabled", "");
                    scope.$eval(attrs.mdAction).finally(function() {
                        element.find("input").removeAttr("disabled");
                    });
                };
                element.find(".md-autocomplete-suggestions-container").append($compile(actionTemplate)(scope));
                scope.ctrl = ctrl;
                scope.$watch("ctrl.matches.length", function(amountOfItems) {
                    recalculateHeight(container, amountOfItems);
                });
            }
            if (attrs["errorMessage"]) {
                var errorType = attrs["errorType"] || "tooltip";
                if (errorType === "tooltip") {
                    addIconTooltip(attrs["errorMessage"]);
                }
            }
        }
    };
} ]);