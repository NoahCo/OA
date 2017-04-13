AtmApp.factory('transactions',['$http',function($http){
    return $http.get('/htmllabs/week8labs/02-atmapp/js/transactions.json')
                    .success(function(data){
                        return data ;
                    })
                    
                    .error(function(err){
                        return err;
                    });
}]);