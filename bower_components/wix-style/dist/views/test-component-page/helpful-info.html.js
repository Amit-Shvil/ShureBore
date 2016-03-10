'use strict';

try {
  angular.module('wixStyleInternal');
} catch (e) {
  angular.module('wixStyleInternal', []);
}

angular.module('wixStyleInternal').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('views/test-component-page/helpful-info.html',
    "<h3> Testing directives in e2e</h3>\n" +
    "<h3> List of all the test pages for the angular components </h3>\n" +
    "<div ng-repeat=\"componentName in main.angularComponents\">\n" +
    "    <a ng-href=\"/#/test-component-page/{{componentName}}\">{{componentName}} page</a>\n" +
    "</div>\n" +
    "<h3> Configuration </h3>\n" +
    "<style>\n" +
    "    .yellow {\n" +
    "        background: yellow;\n" +
    "    }\n" +
    "\n" +
    "    .aqua {\n" +
    "        background: aqua;\n" +
    "    }\n" +
    "</style>\n" +
    "<div>\n" +
    "    <p>\n" +
    "        <label>If the name of your component is:</label>\n" +
    "        <input ng-model=\"main.componentName\">\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        <h4>Edit app.js</h4>\n" +
    "        You need to go to app.js and add your component name to the router array:\n" +
    "        <code>[.. other components .., <span class=\"yellow\">'{{main.componentName}}'</span>].forEach(</code>\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        <h4>Add the following files</h4>\n" +
    "        You need to add these files to your project:\n" +
    "        <br/><br>\n" +
    "        <code>views/test-component-page/<span class=\"yellow\">{{main.componentName}}</span>-page.html</code> - This is your html test page\n" +
    "        <br/><br>\n" +
    "        <code>test/e2e/spec/<span class=\"yellow\">{{main.componentName}}</span>.js</code> - This is your spec page\n" +
    "        <br>\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        <h4>main-page.js</h4>\n" +
    "        Use test/e2e/pages/main-page.js to set up your component object (you can copy from other examples)\n" +
    "        </p>\n" +
    "    <p>\n" +
    "    <p>\n" +
    "        <h4>Adding scope parameters</h4>\n" +
    "        Go to <code>app/scripts/controllers/main.js</code> and add this variable on your scope:\n" +
    "        <br/>\n" +
    "        <br/>\n" +
    "        <code>\n" +
    "            this.<span class=\"aqua\">{{main.camelCase(main.componentName)}}</span> = {\n" +
    "                yourKey: yourValue\n" +
    "            }\n" +
    "        </code>\n" +
    "        <br/>\n" +
    "        <br/>\n" +
    "        Then you can use your parameter in your html file:\n" +
    "        <br/>\n" +
    "        <br/>\n" +
    "        <code>\n" +
    "            <{{main.componentName}} some-attribute=\"main.<span class=\"aqua\">{{main.camelCase(main.componentName)}}</span>\">&lt;{{main.componentName}}></code>\n" +
    "        </code>\n" +
    "    </p>\n" +
    "    <p>\n" +
    "    <h4>View Directive page</h4>\n" +
    "        Now you can route to <a ng-href=\"/#/test-component-page/{{main.componentName}}\">/#/test-component-page/<span class=\"yellow\">{{main.componentName}}</span></a> to check your component.\n" +
    "    </p><p>\n" +
    "        <h4>How to use mainPage model to navigate to your component</h4>\n" +
    "        You can easily use this method to see your component: <code>mainPage.navigateToDirective('<span class=\"yellow\">{{main.componentName}}</span>')</code>;\n" +
    "    </p>\n" +
    "</div>"
  );
}]);