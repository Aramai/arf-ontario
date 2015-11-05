(function () {
    'use strict';

    angular
        .module('app.core')
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise("/", {
                url: '',
                templateUrl: 'app/core/core.html',
                controller: 'Core',
                controllerAs: 'vm',
                title: 'Home'
            });

            $stateProvider.state('core', {
                url: '/',
                templateUrl: 'app/core/core.html',
                controller: 'Core',
                controllerAs: 'vm',
                title: 'Home'
            });

            $locationProvider.html5Mode(true);
        }
        );
})();