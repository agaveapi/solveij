angular.module('AgaveToGo').controller('MetaResourceDetailsController', function($scope, $stateParams, AppsController, ActionsService, PermissionsService) {

  $scope.$parent.error = false;

  $scope.app = null;

  $scope.getApp = function(){
    if ($stateParams.appId !== ''){
      AppsController.getAppDetails($stateParams.appId)
        .then(
          function(response){
            $scope.app = response;
          },
          function(response){
            $scope.$parent.error = true;
            App.alert({type: 'danger', message: 'Error: Could not retrieve app'});
          }
        );
    } else {
      $scope.$parent.error = true;
      App.alert({type: 'danger', message: 'Error: Could not retrieve app'});
    }
  };

  $scope.confirmAction = function(resourceType, resource, resourceAction, resourceIndex){
    ActionsService.confirmAction(resourceType, resource, resourceAction, resourceIndex);
  };

  $scope.editPermissions = function(resource) {
    PermissionsService.editPermissions(resource);
  }

  $scope.edit = function(resourceType, resource){
    ActionsService.edit(resourceType, resource);
  };

  $scope.getApp();

});