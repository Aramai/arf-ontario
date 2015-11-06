﻿(function () {
    'use strict';

    angular
        .module('app.fostering')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider.state('fostering', {
                url: '/fostering',
                templateUrl: 'app/fostering/fostering.html',
                controller: 'Fostering',
                controllerAs: 'vm',
                title: 'Fostering'
            })
            .state('fostering.info', {
                url: '/fostering/info',
                templateUrl: 'app/fostering/info.html',
                controller: 'Fostering',
                controllerAs: 'vm',
                title: 'Fostering - Info'
            })
            .state('fostering.apply', {
                url: '/fostering/apply',
                templateUrl: 'app/fostering/apply.html',
                controller: 'Fostering',
                controllerAs: 'vm',
                title: 'Fostering - Apply'
            })            
        });
})();