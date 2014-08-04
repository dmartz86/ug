app.controller('Controller', function Controller($scope, $http) {
    $scope.title = "UUID Generator App";
    $scope.units = 0;
    $scope.uuids = [];
    $scope.execTime = 0;

    $scope.generate = function() {
      if(parseInt($scope.units)>1000){
        $scope.units = 1000;
      }

      $http.post('/generate/'+$scope.units)
      .success(function(data){
        $scope.uuids = data.uuids;
        $scope.execTime = data.time;
      })
      .error(function(err){
        console.log('error');
        console.log(err);
      });
    };

});
