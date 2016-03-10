"use strict";

angular.module("wixStyleApp", [ "ngRoute", "wixStyleMaterial" ]).config([ "$routeProvider", "angularComponents", function($routeProvider, angularComponents) {
    angularComponents.forEach(function(directiveName) {
        $routeProvider.when("/test-component-page/:" + directiveName, {
            controller: "MainController as main",
            templateUrl: "views/test-component-page/" + directiveName + "-page.html"
        });
    });
    $routeProvider.otherwise({
        controller: "MainController as main",
        templateUrl: "views/test-component-page/helpful-info.html"
    });
    return;
} ]).constant("angularComponents", [ "angular-material-documentation", "wix-notification", "wix-modal", "wix-material-modal", "wix-tooltip", "wix-search", "wix-tabs", "wix-list", "wix-input", "wix-dialog-builder" ]);

"use strict";

(function() {
    MainController.$inject = [ "$scope", "wixModal", "$rootScope", "angularComponents", "wixMdDialogBuilder", "wixMdToastBuilder", "$mdDialog", "$mdToast", "$document" ];
    function MainController($scope, wixModal, $rootScope, angularComponents, wixMdDialogBuilder, wixMdToastBuilder, $mdDialog, $mdToast, $document) {
        var _self = this;
        this.angularComponents = angularComponents;
        $scope.$emit("we are using controllerAs syntax, scope is used only for events and watches");
        this.wixDropdownItems = [ {
            text: "First Item",
            href: "http://www.wix.com"
        }, {
            text: "Second Item",
            click: "http://www.wix1.com"
        }, {
            text: "Third Item",
            click: "http://www.wix1.com"
        } ];
        this.materialSelectOptions = [ {
            label: "Option 1",
            code: "one"
        }, {
            label: "Option 2",
            code: "two"
        }, {
            label: "Option 3",
            code: "three"
        } ];
        this.materialDatePicker = {
            date: new Date()
        };
        this.getMatches = function(text) {
            var ll = [];
            for (var index in this.materialAutocomplete.items) {
                var item = this.materialAutocomplete.items[index];
                if (item.indexOf(text) > -1) {
                    ll.push(item);
                }
            }
            return ll;
        };
        this.materialAutocomplete = {
            items: [ "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming" ]
        };
        this.componentName = "wix-notification";
        this.wixTooltip = "<div>here is some html</br><a href=http://wix.com target=_blank>Click Me</a></div>";
        var bestNumber = 72;
        this.myScope = {
            num: 0,
            closureCallback: function() {
                return bestNumber + 1;
            }
        };
        this.wixTooltipScoped = "<ul>" + '<li><input id="num-input" type="number" ng-model="num"><span id="result"> {{num}} + 1 = {{num + 1}}</span></li>' + '<li><span id="best-number">best number = {{closureCallback()}}</span></li>' + "</ul>";
        this.camelCase = function(str) {
            return str.replace(/-([a-z])/g, function(g) {
                return g[1].toUpperCase();
            });
        };
        this.searchObject = {
            myModel: "Some search term"
        };
        this.alertSearch = function(term) {
            alert("Searching now: " + term);
        };
        this.wixModalObject = {
            message: "",
            open2Modal: function() {
                var alertModal1 = wixModal.alert().title("test");
                wixModal.open(alertModal1).then(function(result) {
                    console.log("resolve", result);
                    $scope.message = result;
                }).catch(function(reason) {
                    console.log("catch", reason);
                    $scope.message = reason;
                });
                var alertModal2 = wixModal.alert().title("test2");
                wixModal.open(alertModal2).then(function(result) {
                    console.log("resolve", result);
                    $scope.message = result;
                }).catch(function(reason) {
                    console.log("catch", reason);
                    $scope.message = reason;
                });
            },
            openCustom: function() {
                var options = {
                    scope: $rootScope.$new(),
                    template: "<div>" + "<div class=modal-cutom>I am a custom Modal sorry not buttons</div>" + "<div class=modal-scope-param>{{param}}</div> " + '<div class=modal-custom-close ng-click="windowCtrl.close()">Close</div>' + "</div>",
                    controller: "MessageWindowCtrl",
                    controllerAs: "windowCtrl",
                    width: 1e3
                };
                options.scope.param = "scope param";
                wixModal.open(options).then(function(result) {
                    console.log("resolve", result);
                    $scope.message = result;
                }).catch(function(reason) {
                    console.log("catch", reason);
                    $scope.message = reason;
                });
            },
            openDangerModal: function() {
                var alertModal = wixModal.alert();
                alertModal.title("Set Up Payments");
                alertModal.iconUrl("images/modal-v-icon.png");
                alertModal.content("You havent set up any payment methods for your customers. Choose how you want to get paid in your Store Manager.");
                alertModal.confirm("Exit Page");
                alertModal.cancel("Close");
                alertModal.style("DANGER");
                wixModal.open(alertModal).then(function(result) {
                    console.log("resolve", result);
                    $scope.message = result;
                }).catch(function(reason) {
                    console.log("catch", reason);
                    $scope.message = reason;
                });
            },
            openAlert: function() {
                var alertModal = wixModal.alert();
                alertModal.title("Set Up Payments");
                alertModal.iconUrl("images/modal-v-icon.png");
                alertModal.content("You havent set up any payment methods for your customers. Choose how you want to get paid in your Store Manager.");
                alertModal.confirm("Exit Page");
                alertModal.cancel("Close");
                wixModal.open(alertModal).then(function(result) {
                    console.log("resolve", result);
                    $scope.message = result;
                }).catch(function(reason) {
                    console.log("catch", reason);
                    $scope.message = reason;
                });
            },
            openPremium: function() {
                var premiumModal = wixModal.premium();
                premiumModal.title("Set Up Payments");
                premiumModal.subtitle("I am sub");
                premiumModal.iconUrl("images/modal-v-icon.png");
                premiumModal.content("You havent set up any payment methods for your customers. Choose how you want to get paid in your Store Manager.");
                premiumModal.confirm("Get My FREE Month", "wix-button-premium");
                premiumModal.cancel("Next Time", "wix-button-premium is-button-outline");
                wixModal.open(premiumModal).then(function(result) {
                    console.log("resolve", result);
                    $scope.message = result;
                }).catch(function(reason) {
                    console.log("catch", reason);
                    $scope.message = reason;
                });
            }
        };
        this.wixMaterialModalObject = {
            message: "",
            open2Modal: function() {
                var alertModal1 = wixMdDialogBuilder.alert();
                $mdDialog.show(alertModal1).then(function() {
                    console.log("resolve");
                    $scope.message = "resolve";
                }).catch(function() {
                    console.log("catch");
                    $scope.message = "catch";
                });
                var alertModal2 = wixMdDialogBuilder.alert();
                $mdDialog.show(alertModal2).then(function() {
                    console.log("resolve");
                    $scope.message = "resolve";
                }).catch(function() {
                    console.log("catch");
                    $scope.message = "catch";
                });
            },
            openDangerModal: function() {
                var alertModal = wixMdDialogBuilder.alert();
                alertModal.title("Set Up Payments");
                alertModal.iconUrl("images/modal-v-icon.png");
                alertModal.content("You havent set up any payment methods for your customers. Choose how you want to get paid in your Store Manager.");
                alertModal.confirm("Exit Page");
                alertModal.cancel("Close");
                alertModal.style("DANGER");
                $mdDialog.show(alertModal).then(function() {
                    console.log("resolve");
                    $scope.message = "resolve";
                }).catch(function() {
                    console.log("catch");
                    $scope.message = "catch";
                });
            },
            openAlert: function() {
                var alertModal = wixMdDialogBuilder.alert();
                alertModal.title("Set Up Payments");
                alertModal.iconUrl("images/modal-v-icon.png");
                alertModal.content("You havent set up any payment methods for your customers. Choose how you want to get paid in your Store Manager.");
                alertModal.confirm("Exit Page");
                alertModal.cancel("Close");
                $mdDialog.show(alertModal).then(function() {
                    console.log("resolve");
                    $scope.message = "resolve";
                }).catch(function() {
                    console.log("catch");
                    $scope.message = "catch";
                });
            },
            openPremium: function() {
                var premiumModal = wixMdDialogBuilder.premium();
                premiumModal.title("Set Up Payments");
                premiumModal.subtitle("I am sub");
                premiumModal.iconUrl("images/modal-v-icon.png");
                premiumModal.content("You havent set up any payment methods for your customers. Choose how you want to get paid in your Store Manager.");
                premiumModal.confirm("Get My FREE Month", "wix-button-premium");
                premiumModal.cancel("Next Time", "wix-button-premium is-button-outline");
                $mdDialog.show(premiumModal).then(function() {
                    console.log("resolve");
                    $scope.message = "resolve";
                }).catch(function() {
                    console.log("catch");
                    $scope.message = "catch";
                });
            },
            openCustomAlert: function() {
                var customContentModal = wixMdDialogBuilder.alert();
                customContentModal.contentUrl("views/test-component-page/modal-content-example.html");
                if (_self.wixMdDialogOptions.title) {
                    customContentModal.title("Custom content modal");
                }
                if (_self.wixMdDialogOptions.confirm) {
                    customContentModal.confirm("OK");
                }
                if (_self.wixMdDialogOptions.cancel) {
                    customContentModal.cancel("Cancel");
                }
                $mdDialog.show(customContentModal).then(function() {
                    console.log("resolve");
                    $scope.message = "resolve";
                }).catch(function() {
                    console.log("catch");
                    $scope.message = "catch";
                });
            }
        };
        function getToastObject(toastType, options) {
            var obj = wixMdToastBuilder[toastType || "general"]().content("This is a message");
            if (options.hideDelay.active) {
                obj.autoHide(options.hideDelay.within);
            }
            if (options.showLightColored) {
                obj.showLightColored();
            }
            if (options.showCloseButton) {
                obj.showCloseButton();
            }
            if (options.showFullWidth) {
                obj.showFullWidth();
            }
            if (options.withParent) {
                var el = angular.element($document[0].getElementById("mdToastParentId"));
                obj.withParent(el);
            }
            if (options.showAction) {
                obj.showAction({
                    type: wixMdToastBuilder.actionTypes.button,
                    text: "Undo",
                    onClick: function(event) {
                        alert("function called and it also passing the event as first argument (you can see it in the console)");
                        console.log("this is the event from the toaster's click", event);
                    },
                    url: "http://wix.com",
                    targetType: wixMdToastBuilder.actionTypes.blank
                });
            }
            if (options.showIcon) {
                obj.showIcon({
                    isDark: true,
                    url: "images/toast/ic-default.png"
                });
            }
            return obj;
        }
        this.wixToastOptions = {
            toastTypes: wixMdToastBuilder.toastTypes,
            selectedMessageType: "",
            hideDelay: {
                active: false,
                within: 0
            },
            showLightColored: false,
            showCloseButton: false,
            showFullWidth: false,
            showAction: false,
            showIcon: false,
            setParent: false,
            parentId: "mdToastParentId"
        };
        this.wixMdDialogOptions = {
            title: true,
            confirm: true,
            cancel: true
        };
        this.openToast = function(toastType) {
            $mdToast.show(getToastObject(toastType, _self.wixToastOptions));
        };
        this.layoutExamples = [ {
            title: "80+40",
            layout: [ [ 80, 40 ] ]
        }, {
            title: "70+50",
            layout: [ [ 70, 50 ] ]
        }, {
            title: "2 rows",
            layout: [ [ 70, 50 ], [ 100, 20 ] ]
        } ];
    }
    angular.module("wixStyleApp").controller("MainController", MainController);
})();