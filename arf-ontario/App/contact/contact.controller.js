(function () {
    'use strict';

    angular
        .module('app.contact')
        .controller('Contact', Contact);

    function Contact() {
        var vm = this;
        vm.title = 'Contact';

        vm.contactForm = undefined;
        vm.contactDetails = new ContactDetails();

        vm.hasErrorTouched = hasErrorTouched;
        vm.hasErrorDirty = hasErrorDirty;

        function hasErrorTouched(field) {
            return (field.$invalid && field.$touched);
        }

        function hasErrorDirty(field) {
            return (field.$invalid && field.$dirty);
        }

        function ContactDetails()
        {
            return {
                name: '',
                email: '',
                address: '',
                phone: '',
                subject: '',
                comments: '',
                hearAbout: ''
            };
        }
    }
})();