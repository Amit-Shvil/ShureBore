'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/test-component-page/angular-material-documentation-page.html',
    "<div class='doc-page'>\n" +
    "  <div>&nbsp;</div>\n" +
    "  <h1>Angular Material Theme Documentation</h1>\n" +
    "  <h2>Introduction</h2>\n" +
    "  <p>explanation how to use it goes here</p>\n" +
    "  <h2>Components</h2>\n" +
    "  <h3 id='md-select'>\n" +
    "    md-select directive\n" +
    "    <a href='https://material.angularjs.org/latest/api/directive/mdSelect'>(angular material docs)</a>\n" +
    "  </h3>\n" +
    "  <md-select ng-model='main.currentOption' placeholder='Choose an option'>\n" +
    "    <md-option md-no-ink='true' ng-repeat='item in main.materialSelectOptions' ng-value='item.code'>\n" +
    "      {{ item.label }}\n" +
    "    </md-option>\n" +
    "  </md-select>\n" +
    "  <div class='md-stylguide-separator'></div>\n" +
    "  <h3 id='md-date-picker'>\n" +
    "    md-datepicker directive\n" +
    "    <a href='https://material.angularjs.org/latest/api/directive/mdDatepicker'>(angular material docs)</a>\n" +
    "  </h3>\n" +
    "  <md-datepicker md-click-on-input='true' ng-model='main.materialDatePicker.date' type='date'></md-datepicker>\n" +
    "  <div class='md-stylguide-separator'></div>\n" +
    "  <h3 id='md-autocomplete'>md-autocomplete</h3>\n" +
    "  <md-autocomplete md-item-text='item' md-items='item in main.getMatches(searchText)' md-min-length='0' md-search-text='searchText' md-selected-item='main.selectedItem' placeholder='Select a US State'>\n" +
    "    <span md-highlight-text='searchText'>{{item}}</span>\n" +
    "  </md-autocomplete>\n" +
    "  <div class='md-stylguide-separator'></div>\n" +
    "  <h3 id='md-dialog'></h3>\n" +
    "  $mdDialog service\n" +
    "  <a href='https://material.angularjs.org/latest/api/service/$mdDialog'>(angular material docs)</a>\n" +
    "  <wix-tabs class='is-tabs-textual' md-dynamic-height='true'>\n" +
    "    <wix-tab label='openAlert()'>\n" +
    "      <br>\n" +
    "      <button class='button1 wix-button' ng-click='main.wixMaterialModalObject.openAlert()'>openAlert()</button>\n" +
    "      <pre>var alertModal = wixMdDialogBuilder.alert();\n" +
    "      alertModal.title('Set Up Payments');\n" +
    "      alertModal.iconUrl('images/modal-v-icon.png');\n" +
    "      alertModal.content('You havent set up any payment methods for your customers. Choose how you want to get paid in your Store Manager.');\n" +
    "      alertModal.confirm('Exit Page');\n" +
    "      alertModal.cancel('Close');\n" +
    "      $mdDialog.show(alertModal).then(function () {\n" +
    "        console.log('resolve');\n" +
    "        $scope.message = 'resolve';\n" +
    "      }).catch(function () {\n" +
    "        console.log('catch');\n" +
    "        $scope.message = 'catch';\n" +
    "      });</pre>\n" +
    "    </wix-tab>\n" +
    "    <wix-tab label='openWarning()'>\n" +
    "      <br>\n" +
    "      <button class='button1 wix-button' ng-click='main.wixMaterialModalObject.openDangerModal()'>openDangerModal()</button>\n" +
    "      <pre>var alertModal = wixMdDialogBuilder.alert();\n" +
    "      alertModal.title('Set Up Payments');\n" +
    "      alertModal.iconUrl('images/modal-v-icon.png');\n" +
    "      alertModal.content('You havent set up any payment methods for your customers. Choose how you want to get paid in your Store Manager.');\n" +
    "      alertModal.confirm('Exit Page');\n" +
    "      alertModal.cancel('Close');\n" +
    "      alertModal.style('DANGER');\n" +
    "      $mdDialog.show(alertModal).then(function () {\n" +
    "        console.log('resolve');\n" +
    "        $scope.message = 'resolve';\n" +
    "      }).catch(function () {\n" +
    "        console.log('catch');\n" +
    "        $scope.message = 'catch';\n" +
    "      });</pre>\n" +
    "    </wix-tab>\n" +
    "    <wix-tab label='openPremium()'>\n" +
    "      <br>\n" +
    "      <button class='button1 wix-button' ng-click='main.wixMaterialModalObject.openPremium()'>openPremium()</button>\n" +
    "      <pre>var premiumModal = wixMdDialogBuilder.premium();\n" +
    "      premiumModal.title('Set Up Payments');\n" +
    "      premiumModal.subtitle('I am sub');\n" +
    "      premiumModal.iconUrl('images/modal-v-icon.png');\n" +
    "      premiumModal.content('You havent set up any payment methods for your customers. Choose how you want to get paid in your Store Manager.');\n" +
    "      premiumModal.confirm('Get My FREE Month', 'wix-button-premium');\n" +
    "      premiumModal.cancel('Next Time', 'wix-button-premium is-button-outline');\n" +
    "        $mdDialog.show(premiumModal).then(function () {\n" +
    "        console.log('resolve');\n" +
    "        $scope.message = 'resolve';\n" +
    "      }).catch(function () {\n" +
    "        console.log('catch');\n" +
    "        $scope.message = 'catch';\n" +
    "      });</pre>\n" +
    "    </wix-tab>\n" +
    "    <wix-tab label='openCustomAlert()'>\n" +
    "      <br>\n" +
    "      <button class='button1 wix-button' ng-click='main.wixMaterialModalObject.openCustomAlert()'>openCustomAlert()</button>\n" +
    "      <h3>Example</h3>\n" +
    "      <pre>var customContentModal = wixMdDialogBuilder.alert();\n" +
    "      customContentModal\n" +
    "        .title('Custom content modal')\n" +
    "        .contentUrl('views/test-component-page/modal-content-example.html')\n" +
    "        .confirm('OK')\n" +
    "        .cancel('Cancel');\n" +
    "      \n" +
    "      $mdDialog.show(customContentModal).then(function () {\n" +
    "        console.log('resolve');\n" +
    "        $scope.message = 'resolve';\n" +
    "      }).catch(function () {\n" +
    "        console.log('catch');\n" +
    "        $scope.message = 'catch';\n" +
    "      });</pre>\n" +
    "      <h3>Customizations</h3>\n" +
    "      <p>you can also remove some of the fields if you don't need to use them (Check/Uncheck and click the dialog button</p>\n" +
    "      <p>\n" +
    "        <input ng-model='main.wixMdDialogOptions.title' type='checkbox'>Display Title</input>\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        <input ng-model='main.wixMdDialogOptions.confirm' type='checkbox'>Display Confirm Button</input>\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        <input ng-model='main.wixMdDialogOptions.cancel' type='checkbox'>Display Cancel Button</input>\n" +
    "      </p>\n" +
    "    </wix-tab>\n" +
    "  </wix-tabs>\n" +
    "  <br>\n" +
    "  <br>\n" +
    "  Return message\n" +
    "  <div class='return-message'>{{message}}</div>\n" +
    "  <div class='md-stylguide-separator'></div>\n" +
    "  <div class='md-stylguide-toast'>\n" +
    "    <h3 id='md-toast'>\n" +
    "      $mdToast service\n" +
    "      <a href='https://material.angularjs.org/latest/api/service/$mdToast'>(angular material docs)</a>\n" +
    "    </h3>\n" +
    "    <ul>\n" +
    "      <li class='md-toast-comments'>\n" +
    "        Icon should be provided in max size 32px * 32px\n" +
    "      </li>\n" +
    "      <li class='md-toast-comments'>\n" +
    "        Not all combinations of features are allowed in design (eg. Icon and Action on the same toast). Get design details from your favourite UX person\n" +
    "      </li>\n" +
    "      <li class='md-toast-comments'>\n" +
    "        'Warning' toast does not support all features (notice the console errors)\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <div class='indent-me'>\n" +
    "      <div>\n" +
    "        <input id='hideDelay' ng-model='main.wixToastOptions.hideDelay.active' type='checkbox'>\n" +
    "        <label for='hideDelay'>hideDelay</label>\n" +
    "        <wix-input class='toast-delay-input' ng-disabled='!main.wixToastOptions.hideDelay.active' ng-model='main.wixToastOptions.hideDelay.within' type='input'></wix-input>\n" +
    "        <label>(0 for always opened)</label>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <input id='showLightColored' ng-model='main.wixToastOptions.showLightColored' type='checkbox'>\n" +
    "        <label for='showLightColored'>showLightColored</label>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <input id='showCloseButton' ng-model='main.wixToastOptions.showCloseButton' type='checkbox'>\n" +
    "        <label for='showCloseButton'>showCloseButton</label>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <input id='showFullWidth' ng-model='main.wixToastOptions.showFullWidth' type='checkbox'>\n" +
    "        <label for='showFullWidth'>showFullWidth</label>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <input id='showAction' ng-model='main.wixToastOptions.showAction' type='checkbox'>\n" +
    "        <label for='showAction'>showAction</label>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <input id='showIcon' ng-model='main.wixToastOptions.showIcon' type='checkbox'>\n" +
    "        <label for='showIcon'>showIcon</label>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <input id='withParent' ng-model='main.wixToastOptions.withParent' type='checkbox'>\n" +
    "        <label for='withParent'>withParent</label>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <button class='wix-button md-toast-button' ng-click='main.openToast(value)' ng-repeat='(key, value) in main.wixToastOptions.toastTypes'>open {{value}}</button>\n" +
    "      </div>\n" +
    "      <div class='md-toast-parent' id='mdToastParentId'>\n" +
    "        This is some content inside the md-toast-parent, You can active 'withParent' checkbox to see how it looks. you can also activate the following checkboxes to see how a full width will look like:\n" +
    "        'hideDelay' with '0' value, showCloseButton, showFullWidth, withParent.\n" +
    "        Then click on 'open general' button to see how it works nicely. It will add padding to the container, we found out that this is the most common use-case.\n" +
    "      </div>\n" +
    "      <wix-tabs class='is-tabs-textual' md-dynamic-height='true'>\n" +
    "        <wix-tab label='general'>\n" +
    "          <pre>var obj = wixMdToastBuilder.general()\n" +
    "          .content('this is a message')\n" +
    "          .autoHide(1000)\n" +
    "          .showLightColored()\n" +
    "          .showCloseButton()\n" +
    "          .showFullWidth();</pre>\n" +
    "        </wix-tab>\n" +
    "        <wix-tab label='showIcon'>\n" +
    "          <pre>var obj = wixMdToastBuilder.general()\n" +
    "          .content('this is a message')\n" +
    "          .showIcon({\n" +
    "            isDark: true,\n" +
    "            cssClass: 'someClass',\n" +
    "            url: 'images/toast/ic-default.png'\n" +
    "          })</pre>\n" +
    "        </wix-tab>\n" +
    "        <wix-tab label='withParent'>\n" +
    "          <pre>.\n" +
    "          var el = angular.element($document[0].getElementById('mdToastParentId'));\n" +
    "          var obj = wixMdToastBuilder.general()\n" +
    "            .content('this is a message')\n" +
    "            .withParent(el);</pre>\n" +
    "        </wix-tab>\n" +
    "        <wix-tab label='showAction - link'>\n" +
    "          <pre>var obj = wixMdToastBuilder.general()\n" +
    "          .content('this is a message')\n" +
    "          .showAction({\n" +
    "            type: wixMdToastBuilder.actionTypes.link,\n" +
    "            text: 'Undo',\n" +
    "            url: 'http://www.wix.com',\n" +
    "            targetType: wixMdToastBuilder.targetTypes.blank\n" +
    "          })</pre>\n" +
    "        </wix-tab>\n" +
    "        <wix-tab label='showAction - button'>\n" +
    "          <pre>var obj = wixMdToastBuilder.general()\n" +
    "          .content('this is a message')\n" +
    "          .showAction({\n" +
    "            type: wixMdToastBuilder.actionTypes.button,\n" +
    "            text: 'click',\n" +
    "            onClick: function () { alert('walla'); },\n" +
    "          })</pre>\n" +
    "        </wix-tab>\n" +
    "        <wix-tab label='Predefined Configuration'>\n" +
    "          You can also add the following configuration in the .config phase:\n" +
    "          <pre>.config(function (wixMdToastBuilderProvider) {\n" +
    "            wixMdToastBuilderProvider.setParent(parentElement);\n" +
    "          })</pre>\n" +
    "        </wix-tab>\n" +
    "      </wix-tabs>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class='md-stylguide-separator'></div>\n" +
    "  <h3 name='md-layout'>\n" +
    "    md-layout directives\n" +
    "    <a href='https://material.angularjs.org/latest/layout/introduction' target='_blank'>(angular material docs)</a>\n" +
    "  </h3>\n" +
    "  <p>\n" +
    "    <span>in order to use (md) layout classes with wix-style customizations wrap eveything with</span>\n" +
    "    <b>wix-layout</b>\n" +
    "    <span>class</span>\n" +
    "  </p>\n" +
    "  <p>\n" +
    "    <b>layout-padding</b>\n" +
    "    <span>- attribute used to padd a container with half the size of our configured grid-gutter-width(36px)</span>\n" +
    "    <div>*checkout examples for better understanding of how to use this attribute</div>\n" +
    "  </p>\n" +
    "  <p>\n" +
    "    <b>grid-gutter-width</b>\n" +
    "    <span>- is the width of space we keep between our blocks, we use 36px for our gutter width.</span>\n" +
    "  </p>\n" +
    "  <wix-tabs class='is-tabs-textual' md-dynamic-height='true'>\n" +
    "    <wix-tab label='{{main.layoutExamples[0].title}}'>\n" +
    "      <div class='wix-layout' style='width:1044px; background:lavender'>\n" +
    "        <div layout-padding layout='row' ng-repeat='row in main.layoutExamples[0].layout'>\n" +
    "          <div flex='{{block}}' layout-padding ng-repeat='block in row track by $index' style='background:lavender'>\n" +
    "            <div class='wix-block-example'>\n" +
    "              content block, size-{{block}}\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </wix-tab>\n" +
    "    <wix-tab label='{{main.layoutExamples[1].title}}'>\n" +
    "      <div class='wix-layout' style='width:1044px; background:lavender'>\n" +
    "        <div layout-padding layout='row' ng-repeat='row in main.layoutExamples[1].layout'>\n" +
    "          <div flex='{{block}}' layout-padding ng-repeat='block in row track by $index' style='background:lavender'>\n" +
    "            <div class='wix-block-example'>\n" +
    "              content block, size-{{block}}\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </wix-tab>\n" +
    "    <wix-tab label='{{main.layoutExamples[2].title}}'>\n" +
    "      <div class='wix-layout' layout-padding style='width:1044px; background:lavender; box-sizing: border-box'>\n" +
    "        <div layout='row' ng-repeat='row in main.layoutExamples[2].layout'>\n" +
    "          <div flex='{{block}}' layout-padding ng-repeat='block in row track by $index' style='background:lavender'>\n" +
    "            <div class='wix-block-example'>\n" +
    "              content block, size-{{block}}\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </wix-tab>\n" +
    "    <wix-tab label='page layout'>\n" +
    "      <div class='wix-layout' layout-padding style='width:1044px; background:lavender; box-sizing: border-box'>\n" +
    "        <div layout='row'>\n" +
    "          <div flex='80' style='background:lavender'>\n" +
    "            <div layout='row'>\n" +
    "              <div flex='60' layout-padding style='background:lavender'>\n" +
    "                <div class='wix-block-example'>\n" +
    "                  content block, size-60\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div flex='60' layout-padding style='background:lavender'>\n" +
    "                <div class='wix-block-example'>\n" +
    "                  content block, size-60\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div layout-padding layout='row'>\n" +
    "              <div flex style='background:lavender'>\n" +
    "                <div class='wix-block-example'>\n" +
    "                  content block, full-size\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div flex='40' layout-padding style='background:lavender'>\n" +
    "            <div class='wix-block-example' style='height:326px'>\n" +
    "              content block, size-40\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div layout='row'>\n" +
    "          <div flex layout-padding style='background:lavender'>\n" +
    "            <div class='wix-block-example'>\n" +
    "              content block, size-120\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </wix-tab>\n" +
    "  </wix-tabs>\n" +
    "  <div class='md-stylguide-bottom-margin'></div>\n" +
    "</div>\n"
  );
}]);