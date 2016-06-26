/**
 * Created by zoodoo92 on 16/06/16.
 */
// alert('Hi');
angular
    .module('gts', [
        'ui.router'
])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            // .state('login', {
            //     url: '/',
            //     templateUrl: '/login.html'
            // })
            .state('map', {
                url: '/map',
                templateUrl: 'templates/index.html'
            })
            .state('management', {
                url: '/management',
                templateUrl: 'templates/management.html'
            })
            .state('report', {
                url: '/report',
                templateUrl: 'templates/report.html'
            })
            .state('search', {
                url: '/search',
                templateUrl: 'templates/search.html'
            })
            .state('settings', {
                url: '/settings',
                templateUrl: 'templates/settings.html'
            });
    }])

    //angular soap
    // .factory("testService", ['$soap',function($soap){
    //     var base_url = "http://86.96.194.194:8002/WebServices/Webservice.asmx";
    //
    //     return {
    //         AuthenticateUser: function(id){
    //             return $soap.post(base_url,"AuthenticateUser");
    //         }
    //     }
    // }])
    //
    // .controller('MainCtrl', function($scope, testService) {
    //
    //     testService.AuthenticateUser($scope.username, $scope.password).then(function(user){
    //         // console.log(user.username);
    //         // console.log(user.password);
    //         $scope.user = user;
    //     });
    //
    // })
