angular.module('ChangelogParserService', []).service('ChangelogParser', ['$rootScope', '$http', '$q',
function ($rootScope, $http, $q) {

    this.baseUrl = "https://agaveapi.co/changelog-parser/";

    this.failedPromise = function (message) {
        "use strict";
        var deferred = $q.defer();
        deferred.reject({data: {message: [message], code: 400}});
        return deferred.promise;
    };

    this.latest = function() {
      var options = {
          url: this.baseUrl + '?force=true&latest=true&source=https://bitbucket.org/agaveapi/agave-flat/raw/master/CHANGELOG.md',
          method: 'GET'
      };
      var deferred = $q.defer();
      var response = $http(options);

      response.then(function(resp) {
          deferred.resolve(resp.data);

        }, function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    };
}]);
