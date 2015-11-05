(function () {
    'use strict';

    angular
        .module('app.news')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider.state('news', {
                url: '/news',
                templateUrl: 'app/news/news.html',
                controller: 'News',
                controllerAs: 'vm',
                title: 'News'
            })            
        });
})();