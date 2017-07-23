var app = angular.module("home", []);
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});


app.controller("homeController", ['$scope','$window','$http', function($scope,$window,$http)  {

$scope.student=function()
{


$window.location.href='/student';

}
$scope.teacher=function()
{
   $window.location.href='/teacher';
}

    
}]);

