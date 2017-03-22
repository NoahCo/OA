CalendarApp.factory('events',['$http',function($http){
    return $http.get('/htmllabs/week7labs/04-calendar/js/events.json')
                    .success(function(data){
                        return data ;
                    })
                    
                    .error(function(err){
                        return err;
                    });
}]);