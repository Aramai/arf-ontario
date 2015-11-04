(function () {
    'use strict';

    angular
        .module('app.core')
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/', {
                url: '/',
                templateUrl: 'app/core/main.html',
                controller: 'Core',
                controllerAs: 'vm',
                title: 'Home'
            })               

            $locationProvider.html5Mode(true);
        }
        );
})();