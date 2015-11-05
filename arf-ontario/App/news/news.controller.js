(function () {
    'use strict';

    angular
        .module('app.news')
        .controller('News', News);

    function News() {
        var vm = this;
        vm.title = 'News';
    }
})();