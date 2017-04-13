AtmApp.controller('AccController', ['$scope','transactions',function($scope, transactions) {
 $scope.newBal= 0;
 $scope.date = new Date();
        transactions.success(function(data){
            $scope.account = data[0].startingBalance ;
            $scope.transactions = data[0].transactions; 
            $scope.newBal = $scope.transactions[9].balance;  
           
        });
        $scope.withdraw = function(){
            if ($scope.userAmount != '') {
                if($scope.userAmount > $scope.newBal){
                    
                   return alert("OverDrafted! You only have $"+$scope.newBal + " in your account." + " You are $"+ ( $scope.userAmount - $scope.newBal)+ " dollars over your balance "), $scope.userAmount= " "; 
                   
                }
               else if($scope.newBal>0){
                    $scope.newBal-=$scope.userAmount;
                    transactions = {"type":'Withdrawal',
                                "amount": $scope.userAmount,
                                "date": $scope.date,
                                "balance":   $scope.newBal
                                 };
                 $scope.transactions.push(transactions);
                $scope.userAmount = " ";
                    if($scope.userAmount > 1000){
                        alert("Your withdrawal: " + $scope.userAmount + " is over 1000");
                     }
                }
                
                
                
                
             
             }
             
        };
         $scope.deposit = function(){
             if ($scope.userAmount != '') {
                if($scope.newBal>0){
                $scope.newBal = parseFloat($scope.newBal) + parseFloat($scope.userAmount);
                transactions = {"type":'Deposit',
                                "amount": $scope.userAmount,
                                "date": $scope.date,
                                "balance":   $scope.newBal
                };
                $scope.transactions.push(transactions);
                $scope.userAmount = " ";}
                else{
                    return alert("OverDrafted!");
                }
             }
                
                
    
        }
        $scope.hi=function(){
           
            console.log($scope.newBal);
             console.log($scope.account);
        }
}]);