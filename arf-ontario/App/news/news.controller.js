(function () {
    'use strict';

    angular
        .module('app.news')
        .controller('News', News);

    function News($http, $state) {
        var vm = this;
        vm.title = 'News';
        vm.items = undefined;

        if ($state.is('news') && vm.items == undefined) {
            $http.get('App/news/news.json').success(getNewsItems).error(reportError);
        }

        function getNewsItems(response) {
            vm.items = response.items            
        }

        function reportError(response) {
            console.log(response);
        }
    }
})();