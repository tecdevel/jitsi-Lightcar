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
            controller: function ($state,$http) {
                this.signIn=function (users) {
                    console.log("User email: ", users.email);
                    console.log("User password: ", users.password);
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