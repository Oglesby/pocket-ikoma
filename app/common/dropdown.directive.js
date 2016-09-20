'use strict';

angular.module('pocketIkoma').directive('piDropdown', function ($, $timeout) {
    return {
        restrict: 'C',
        link: function (scope, element, attr) {
            $timeout(function () {
                $(element).dropdown();

                $(element).dropdown('set selected', scope[attr.ngModel]);

                $(element).dropdown('setting', {
                    onChange: function (value) {
                        scope[attr.ngModel] = value;
                        scope.$apply();
                    }
                });
            }, 0);
        }
    };
});