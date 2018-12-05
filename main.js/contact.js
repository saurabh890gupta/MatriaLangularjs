app.controller('contactCtrl' , function($scope){
    $scope.IsVisible = false;

$scope.ShowHide = function(){
    $scope.IsVisible = $scope.IsVisible  ? false : true;
    }

 
});