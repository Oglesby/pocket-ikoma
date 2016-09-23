'use strict';

angular.module('pocketIkoma').directive('piLog', function (_) {
    return {
        restrict: 'E',
        templateUrl: 'log/log.html',
        controller: function($scope, modelService) {

            function resetChanges() {
                $scope.deletingLogView = null;
                $scope.editingLogView = null;
            }
            resetChanges();

            $scope.startEditLog = function(logView) {
                $scope.editingLogView = logView;
            };

            $scope.finishEditingLog = function() {
                resetChanges();
            };

            $scope.startDeleteLog = function(logItem) {
                $scope.deletingLogView = logItem;
            };

            $scope.finishDeletingLog = function() {
                modelService.removeLogFromModel($scope.deletingLogView.logModel.id);
                resetChanges();
            };

            $scope.cancelChangingLog = function() {
                resetChanges();
            };

            $scope.isMandatoryEntry = modelService.isMandatoryLogModel;
        }
    };
});
