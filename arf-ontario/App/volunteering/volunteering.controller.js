(function () {
    'use strict';

    angular
        .module('app.volunteering')
        .controller('Volunteering', Volunteering);

    function Volunteering() {        
        var vm = this;
        vm.title = 'Volunteering';
        vm.form = new VolunteerFormData();        
    }

    function VolunteerFormData() {
        return {
            name: '',
            address: '',
            over18: true,
            under18Emails: true,
            under18PermissionName: '',
            homePhone: '',
            workPhone: '',
            email: '',
            callPreference: '',
            petDescription: '',
            volunteerExperience: '',
            drives: false
        };
    }
})();