(function () {
    'use strict';

    angular
        .module('app.contact')
        .controller('Contact', Contact);

    function Contact() {
        var vm = this;
        vm.title = 'Contact';
    }
})();