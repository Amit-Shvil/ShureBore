'use strict';

angular.element.prototype.findByQuery = function (clazz) {
  return angular.element(this[0].querySelector(clazz));
};

angular.element.prototype.each = function (fn) {
  angular.forEach(this, function (value, index) {
    fn.bind(this, index, value);
  });
};

angular.element.prototype.get = function (index) {
  return angular.element(this[index]);
};
