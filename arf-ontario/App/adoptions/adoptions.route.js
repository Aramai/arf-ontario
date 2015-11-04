(function () {
    'use strict';

    angular
        .module('app.adoptions')
        .config(function ($routeProvider, $locationProvider) {
                $routeProvider.when('/adoptions', {
                    url: '/adoptions',
                    templateUrl: 'app/adoptions/adoptions.html',
                    controller: 'Adoptions',
                    controllerAs: 'vm',
                    title: 'Adoptions'
                })
                    .when('/adoptions/dogs', {
                        url: '/adoptions/dogs',
                        templateUrl: 'app/adoptions/dogs.html',
                        controller: 'Adoptions',
                        controllerAs: 'vm',
                        title: 'Adoptions - Dogs'
                    })

                $locationProvider.html5Mode(true);
                }
        );
    //    .run(appRun);

    //appRun.$inject = ['routerHelper'];

    //function appRun(routerHelper) {
    //    routerHelper.configureStates(getStates());
    //}

    //function getStates($routeProvider) {
    //    $routeProvider.when('/adoptions', {
    //                        url: '/adoptions',
    //                        templateUrl: 'app/adoptions/adoptions.html',
    //                        controller: 'Adoptions',
    //                        controllerAs: 'vm',
    //                        title: 'Adoptions'
    //                    })
    //        .when('/adoptions/dogs', {
    //                        url: '/adoptions/dogs',
    //                        templateUrl: 'app/adoptions/dogs.html',
    //                        controller: 'Adoptions',
    //                        controllerAs: 'vm',
    //                        title: 'Adoptions - Dogs'
    //                    });
    //return [
    //    {
    //        state: 'adoptions',
    //        config: {
    //            url: '/adoptions',
    //            templateUrl: 'app/adoptions/adoptions.html',
    //            controller: 'Adoptions',
    //            controllerAs: 'vm',
    //            title: 'Adoptions'
    //        }
    //    },
    //    {
    //        state: 'adoptions',
    //        config: {
    //            url: '/adoptions/dogs',
    //            templateUrl: 'app/adoptions/dogs.html',
    //            controller: 'Adoptions',
    //            controllerAs: 'vm',
    //            title: 'Adoptions - Dogs'
    //        }
    //    }
    //];
})();