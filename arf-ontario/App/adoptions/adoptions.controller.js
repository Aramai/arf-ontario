(function () {
    'use strict';

    angular
        .module('app.adoptions')
        .controller('Adoptions', Adoptions);

    function Adoptions() {
        var vm = this;
        vm.title = 'Adoptions';        
    }
})();