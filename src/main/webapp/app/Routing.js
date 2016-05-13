//routing
angular.module('App')
    .config(['$routeProvider',function($routeProvider) {
                     $routeProvider
                     .when('/registrationCollaborator', {
                         templateUrl: 'templates/registrationCollaborator.html',
                         controller: 'CtrlCol as EC',
                         controllerAs:'EC'
                     })
                   ;  
                 }
             ]);