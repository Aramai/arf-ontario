﻿(function () {
    'use strict';

    angular
        .module('app.fostering')
        .controller('Fostering', Fostering);

    function Fostering() {
        var vm = this;
        vm.title = 'Fostering';
        vm.form = new FosterFormData();
        vm.hasErrorTouched = hasErrorTouched;
        vm.hasErrorDirty = hasErrorDirty;
        vm.resetEmploymentDetails = resetEmploymentDetails;
        vm.resetEducationDetails = resetEducationDetails;
        vm.resetLandlordDetails = resetLandlordDetails;
        vm.resetYardDetails = resetYardDetails;
        vm.resetFenceDetails = resetFenceDetails;
    }

    function resetEmploymentDetails() {
        var vm = this;
        if (!vm.form.employment.employed) {
            vm.form.employment.type = 'N/A';
            vm.form.employment.schedule = '';
        }
    }

    function resetEducationDetails() {
        var vm = this;
        if (!vm.form.education.student) {
            vm.form.education.type = 'N/A';
            vm.form.education.schedule = '';
        }
    }

    function resetLandlordDetails() {
        var vm = this;
        if (vm.form.livingSituation.livingSituation != 'Rent') {
            vm.form.livingSituation.landlord.permission = false;
            vm.form.livingSituation.landlord.name = '';
            vm.form.livingSituation.landlord.contact = '';
        }
    }

    function resetCarDetails() {
        var vm = this;
        if (!vm.form.ownCar) {
            vm.form.transportPlan = '';
        }
    }

    function resetYardDetails() {
        var vm = this;
        if (!vm.form.livingSituation.yard.exists) {
            vm.form.livingSituation.yard.fenced = false;
            vm.resetFenceDetails();
        }        
    }

    function resetFenceDetails() {
        var vm = this;
        if (!vm.form.livingSituation.yard.fenced) {
            vm.form.livingSituation.yard.fenceDescription = '';
            vm.form.livingSituation.yard.nonFencedPlan = '';
        }
    }

    function hasErrorTouched(field) {
        return (field.$invalid && field.$touched);
    }

    function hasErrorDirty(field) {
        return (field.$invalid && field.$dirty);
    }

    function FosterFormData() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            homePhone: '',
            cellPhone: '',
            workPhone: '',
            hearAbout: '',
            reasonToFoster: '',
            over18: true,
            employment: {
                employed: true,
                type: 'N/A',
                schedule: ''
            },
            education: {
                student: false,
                type: 'N/A',
                schedule: ''
            },
            ownCar: true,
            transportPlan: '',
            livingSituation: {
                dwellingType: '',
                status: '',
                landlord: {
                    permission: false,
                    name: '',
                    contact: ''
                },
                apartmentBarkingPlan: '',
                neighbourhood: '',
                yard: {
                    exists: false,
                    fenced: false,
                    fenceDescription: '',
                    nonFencedPlan: '',
                    swimmingPool: false,
                    swimmingPoolFence: false
                },
                occupants: {
                    count: 0,
                    description: '',
                    involvement: '',
                    allergies: '',
                    visitingDogs: false,
                    visitingDogsDescription: ''
                },
                dogs: {
                    count: 0,
                    description: '',
                    vaccinated: false,
                    fleaTickMedication: false,
                    fleaTickMedicationName: '',
                    fixed: false,
                    notFixedReason: ''                     
                },
                cats: {
                    count: 0,
                    description: '',
                    vaccinated: false,
                    fleaTickMedication: false,
                    fleaTickMedicationName: '',
                    fixed: false,
                    notFixedReason:''
                },
                otherPets: '',
                previousPets: '',
                currentPetInteraction: '',
                hoursLeftAlone: 0,
                letOutPlans: '',
                vacationPlans: false,
                vavactionPlansForFosters: '',
                dailyTimeCommitment: '',
                walkTimeDaily: '',
                socializePlans: '',
                previousCrateTraining: false,
                previousCrateTrainingProcess: '',
                fosterWhiningPlans: '',
                previousHouseTraining: false,
                previousHouseTrainingProcess: '',
                houseAccidentResponse: '',
                preventChewingPlans: '',
                dogPullingPlans: '',
                positiveReinforcementDescription: '',
                previousTrainingClass: false,
                previousTrainingClassDescription: '',
                fosterPreferences: {
                    puppy: false,
                    adolescent: false,
                    adult: false,
                    mature: false,
                    senior: false,
                    male: false,
                    female: false,
                    small: false,
                    medium: false,
                    large: false,
                    reasoning: '',
                },
                healthIssueAvoidance: {
                    worms: false,
                    fleasTicks: false,
                    diarrhea: false,
                    vomiting: false,
                    itching: false,
                    medication: false,
                    minorInjuries: false,
                    mange: false,
                    heartworm: false,
                    neurological: false,
                    majorInjuries: false,
                    other: false,
                    otherDescription: ''                        
                },
                termLength: '',
                returnFosterCircumstances: '',
                previousFostering: false,
                previousFosteringDescription: '',
                fosterIntentions: '',
                expectedSupport: '',
                futureLearning: '',
                trainingAttendance: false
            }            
        };
    }

})();