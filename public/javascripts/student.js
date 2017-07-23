
var app = angular.module('student', ['gm']);
app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});
app.controller('studentController', ['$scope','submitData', function ($scope, submitData) {
    $scope.lat = undefined;
    $scope.lng = undefined;

    $scope.$on('gmPlacesAutocomplete::placeChanged', function () {
        $scope.location = $scope.autocomplete.getPlace().geometry.location;
        $scope.lat = $scope.location.lat();
        $scope.lng = $scope.location.lng();
        $scope.$apply();
    });
   
$scope.data = {
            'name': '',
            'subject': '',
            'contact': ''
        }
    $scope.submit = function () {
        $scope.data.longitude=$scope.lng;
        $scope.data.latitude=$scope.lat;
        submitData.postData($scope.data);
       
    }
      
}]);

app.service("submitData", ['$http', function ($http) {
    return {
        postData: function (data) {
            alert(JSON.stringify(data));
            $http({
                url: '/submit_data',
                method: "POST",
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (resp) {
                if (resp.data.errorcode == 1) {
                    alert("Updated Successfully");
                }
                if (resp.data.errorcode == 0) {
                    alert("some thing went wrong please try again");
                }
            })

        }
    }
}]);