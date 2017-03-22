MailboxApp.factory('emails',['$http', function($http){
    return $http.get('/htmllabs/week7labs/01-mailbox/js/emails.json')
                    .success(function(data){
                        return data;
                    })
                    .error(function(err){
                        return err;
                    });
}]);