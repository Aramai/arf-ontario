(function () {
    'use strict';

    angular
        .module('app.volunteering')
        .controller('Volunteering', Volunteering);

    function Volunteering() {        
        var vm = this;
        vm.title = 'Volunteering';
        vm.form = new VolunteerFormData();
        vm.submitForm = submit;
    }

    function submit(valid) {
        alert(valid);
    }


    


    function VolunteerFormData() {
        return {
            name: '',
            address: '',
            over18: true,            
            minorEmails: false,
            minorPermissionAdultName: '',
            homePhone: '',
            workPhone: '',
            email: '',
            callPreference: '',
            petDescription: '',
            volunteerExperience: '',
            drives: false,
            representingARF: false,
            fundraisingProjects: false,
            adoptionInterviews: false,
            projectDevelopment: false,
            walkingDogs: false,
            shortTermCare: false,
            felineFosterSupport: false,
            runningGeneralErrands: false,
            kibbleCollection: false,
            rehabParkMaintenance: false,
            computerSkills: false,
            marketing: false,
            publicRelations: false,
            fundraising: false,
            photography: false,
            leadership: false,
            volunteerCoordination: false,
            accounting: false,
            webDesign: false,
            research: false,
            availableWeekdays: false,
            availableWeekends: false,
            availableDays: false,
            availableEvenings: false
        };
    }
})();