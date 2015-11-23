(function () {
    'use strict';

    angular
        .module('app.volunteering')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider.state('volunteering', {
                url: '/volunteering',
                templateUrl: 'app/volunteering/volunteering.html',               
                title: 'Volunteering'
            })
            .state('volunteering.apply', {                
                url: '/apply',
                templateUrl: 'app/Volunteering/apply.html',
                controller: 'Volunteering',
                controllerAs: 'vm',
                title: 'Volunteering - Apply'
            })
        });
})();