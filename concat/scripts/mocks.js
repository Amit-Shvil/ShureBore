/// <reference path="../../reference.ts" />
'use strict';
angular.module('documentsAppMocks', ['ngMockE2E'])
    .run(["$httpBackend", function ($httpBackend) {
    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
}]);
//# sourceMappingURL=server-api.js.map