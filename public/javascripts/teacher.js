var app = angular.module('teacher', []);
app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});

app.controller('teacherController',['$scope','getLocation','$window', function($scope,getLocation,$window) {
$scope.data={
  'subject':''
}

$scope.submit=function(){
//alert($scope.subject);
getLocation.getData($scope.data).then(function(data){
alert(JSON.stringify(data));
  $scope.locationData= data;
  $window.locations=[]; 
  $scope.labelsData=[];  
  for(i=0;i<$scope.locationData.length;i++){
     var data= {
          'lat':$scope.locationData[i].latitude,
          'lng':$scope.locationData[i].longitude
      }
     $window.locations.push(data);
  }
    for(i=0;i<$scope.locationData.length;i++){
     var data= {
          'Name':$scope.locationData[i].name,
          'Contact':$scope.locationData[i].contact,
          'number':i+1
      }
     $scope.labelsData.push(data);
  }  
   
    initMap();
  
});

}

}]);

app.service("getLocation", ['$http', function ($http) {
    return {
        getData: function (data) {
            //alert(JSON.stringify(data));
           data1= $http({
                url: '/get_location',
                method: "POST",
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (resp) {
                alert(JSON.stringify(resp.data));
                return resp.data;
                
            })
            return data1;
        }
        
    }
}]);
