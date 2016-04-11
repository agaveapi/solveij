angular.module('AgaveToGo').controller('AppsResourceDetailsController', function($scope, $stateParams, AppsController, ActionsService) {

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
  }

  $scope.getApp();

});
