SuggestApp.controller('MainController', ['$scope', function($scope) {
$scope.count=1;
$scope.down= false;
$scope.up= true;
$scope.comment = [];
$scope.rpycomment=[];
$scope.clicked = true;
$scope.custom = true;
$scope.btn_add = function () {
    if ($scope.txtcomment != '') {
        $scope.comment.push($scope.txtcomment);
        $scope.txtcomment = "";
      
    }
$scope.btn_rply = function(){
  if ($scope.rplycomment != '') {
        $scope.rpycomment.push($scope.rplycomment);
        $scope.rplycomment = "";
      $scope.clicked=false;
     
    }
};
$scope.remItem = function ($index) {
    $scope.comment.splice($index, 1);
};
$scope.rem1Item = function($index){
  $scope.rpycomment.splice($index,1);
};
$scope.btn_click = function(){
 $scope.clicked=true;
};
$scope.decrease = function(){
  this.count -=1;
  if(this.count == 0){
  $scope.down=true;
  $scope.up= false;
    
  }
  
};
$scope.increase = function(){
  this.count +=1;
if(this.count == 1){
  $scope.up = true;
  $scope.down = false;
}
  
}
};
}]);









