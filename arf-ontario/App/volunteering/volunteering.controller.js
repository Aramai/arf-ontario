(function () {
    'use strict';

    angular
        .module('app.volunteering')
        .controller('Volunteering', Volunteering);

    function Volunteering() {
        var vm = this;
        vm.title = 'Volunteering';
    }
})();