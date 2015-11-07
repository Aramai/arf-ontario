(function () {
    'use strict';

    angular
        .module('app.adoptions')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider.state('adoptions', {
                url: '/adoptions',
                templateUrl: 'app/adoptions/adoptions.html',
                controller: 'Adoptions',
                controllerAs: 'vm',
                title: 'Adoptions'
            })
            .state('adoptions.info', {
                url: '/info',
                templateUrl: 'app/adoptions/info.html',
                controller: 'Adoptions',
                controllerAs: 'vm',
                title: 'Adoptions - Info'
            })
            .state('adoptions.dogs', {
                url: '/dogs',
                templateUrl: 'app/adoptions/dogs.html',
                controller: 'Adoptions',
                controllerAs: 'vm',
                title: 'Adoptions - Dogs'
            })
            .state('adoptions.cats', {
                url: '/cats',
                templateUrl: 'app/adoptions/cats.html',
                controller: 'Adoptions',
                controllerAs: 'vm',
                title: 'Adoptions - Cats'
            })
            .state('adoptions.showings', {
                url: '/showings',
                templateUrl: 'app/adoptions/showings.html',
                controller: 'Adoptions',
                controllerAs: 'vm',
                title: 'Adoptions - Showings'
            })
            .state('adoptions.training', {
                url: '/training',
                templateUrl: 'app/adoptions/training.html',
                controller: 'Adoptions',
                controllerAs: 'vm',
                title: 'Adoptions - Training'
            });
        });    
})();