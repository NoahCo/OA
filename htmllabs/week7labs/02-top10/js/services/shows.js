Top10App.factory('shows',['$http',function($http){
    return $http.get('/htmllabs/week7labs/02-top10/js/shows.json')
                .success(function(data){
                    return data;
                })
                .error(function(err){
                    return err ;
                });
}]);