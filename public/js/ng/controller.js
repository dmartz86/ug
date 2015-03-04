window.app.controller('Generator', ['$scope', '$http', function($scope, $http) {
  var limit = 1000;
  $scope.title = "UUID Generator App";
  $scope.units = 0;
  $scope.uuids = [];
  $scope.execTime = 0;
  $scope.wait = false;

  $scope.generate = function () {
    if( parseInt( $scope.units ) > limit ) {
      $scope.units = limit;
    }

    $scope.wait = true;
    $http.get( '/generate/' + $scope.units )
    .success( function( data ) {
      $scope.uuids = data.uuids;
      $scope.execTime = data.time;
      $scope.wait = false;
    })
    .error( function ( err ) {
      console.log( 'error' );
      console.log( err );
      $scope.wait = false;
    });
  };

}]);
