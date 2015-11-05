(function () {
    'use strict';

    angular
        .module('app.volunteering')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider.state('contact', {
                url: '/contact',
                templateUrl: 'app/contact/contact.html',
                controller: 'Contact',
                controllerAs: 'vm',
                title: 'Contact'
            })
        });
})();