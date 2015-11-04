(function () {
    'use strict';

    angular
        .module('app.adoptions')
        .config(function ($routeProvider, $locationProvider) {
                $routeProvider.when('/adoptions', {
                    url: '/adoptions',
                    templateUrl: 'app/adoptions/info.html',
                    controller: 'Adoptions',
                    controllerAs: 'vm',
                    title: 'Adoptions'
                })
                    .when('/adoptions/info', {
                        url: '/adoptions/info',
                        templateUrl: 'app/adoptions/info.html',
                        controller: 'Adoptions',
                        controllerAs: 'vm',
                        title: 'Adoptions - Dogs'
                    })
                    .when('/adoptions/dogs', {
                        url: '/adoptions/dogs',
                        templateUrl: 'app/adoptions/dogs.html',
                        controller: 'Adoptions',
                        controllerAs: 'vm',
                        title: 'Adoptions - Dogs'
                    })
                    .when('/adoptions/cats', {
                        url: '/adoptions/cats',
                        templateUrl: 'app/adoptions/cats.html',
                        controller: 'Adoptions',
                        controllerAs: 'vm',
                        title: 'Adoptions - Cats'
                    })
                    .when('/adoptions/showings', {
                        url: '/adoptions/showings',
                        templateUrl: 'app/adoptions/showings.html',
                        controller: 'Adoptions',
                        controllerAs: 'vm',
                        title: 'Adoptions - Showings'
                    })
                    .when('/adoptions/training', {
                        url: '/adoptions/training',
                        templateUrl: 'app/adoptions/training.html',
                        controller: 'Adoptions',
                        controllerAs: 'vm',
                        title: 'Adoptions - Training'
                    })                    

                $locationProvider.html5Mode(true);
                }
        );
})();