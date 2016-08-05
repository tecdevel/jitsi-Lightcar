'use strict';
import angular from 'angular'
import "angular-ui-router"


angular.module("lightcar", ['ui.router'])
.config(($stateProvider, $urlRouterProvider)=>{
    $urlRouterProvider.otherwise('/signin');

    $stateProvider
        .state('sign-in',{
            url:'/signin',
            templateUrl: '/user-login/signin.html',
            resolve: {
                usersService: function($http) {
                    return $http.get('/usersDB/checkUserExist');
                }
            },
            controller: function ($state,$http,usersService) {
                this.usersDB=usersService.data;
                this.signIn=function (users) {
                    console.log("User email: ", users.email);
                    console.log("User password: ", users.password);
                    console.log("Users: ", this.usersDB);
                };
                this.signUpRedirect=function () {
                    $state.go('register');
                }

            },
            controllerAs: "usersCtrl"
        })
        .state('register',{
            url:'/register',
            templateUrl: '/user-login/register.html',
            controller: function ($state, $http) {
                this.resgisterUser=function (user) {
                    console.log("User email: ", user.email);
                    console.log("User password: ", user.password);
                    $state.go('sign-in');
                };
            },
            controllerAs: "usersCtrl"
        })
        

});