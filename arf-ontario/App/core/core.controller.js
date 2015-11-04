(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('Core', Core);

    function Core() {
        var vm = this;
        vm.title = 'Home';
    }
})();