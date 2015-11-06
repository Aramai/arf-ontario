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
            .state('contact.donate', {
                url: '/contact/donate',
                templateUrl: 'app/contact/donate.html',
                controller: 'Contact',
                controllerAs: 'vm',
                title: 'Contact - Donate'
            })
            .state('contact.email', {
                url: '/contact/email',
                templateUrl: 'app/contact/email.html',
                controller: 'Contact',
                controllerAs: 'vm',
                title: 'Contact - Email'
            })
        });
})();