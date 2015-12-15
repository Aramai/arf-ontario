(function () {
    'use strict';

    angular
        .module('app.fostering')
        .controller('Fostering', Fostering);

    function Fostering() {
        var vm = this;
        vm.title = 'Fostering';
        vm.tabs = FosterTabs();
        vm.form = new FosterFormData();
        

        vm.switchTab = switchTab;
        vm.selectedTab = vm.tabs[0];
        vm.isTabSelected = isTabSelected;

        vm.progressStyle = progressStyle;

        vm.hasErrorTouched = hasErrorTouched;
        vm.hasErrorDirty = hasErrorDirty;
        vm.resetEmploymentDetails = resetEmploymentDetails;
        vm.resetEducationDetails = resetEducationDetails;
        vm.resetLandlordDetails = resetLandlordDetails;
        vm.resetYardDetails = resetYardDetails;
        vm.resetFenceDetails = resetFenceDetails;
        vm.resetSwimmingPoolDetails = resetSwimmingPoolDetails;
        vm.resetVisitingDogsDetails = resetVisitingDogDetails;
        vm.resetCurrentDogDetails = resetCurrentDogDetails;
    }

    function isTabSelected(tab) {
        var vm = this;
        return vm.selectedTab == tab;
    }

    function switchTab(tab) {
        var vm = this;
        vm.selectedTab = tab;
    }

    function progressStyle() {
        var vm = this;
        return vm.form.progress + "%";
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
        if (vm.form.dwelling.dwelling != 'Rent') {
            vm.form.dwelling.landlord.permission = false;
            vm.form.dwelling.landlord.name = '';
            vm.form.dwelling.landlord.contact = '';
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
        if (!vm.form.dwelling.yard.exists) {
            vm.form.dwelling.yard.fenced = false;
            vm.resetFenceDetails();
        }
    }

    function resetFenceDetails() {
        var vm = this;
        if (!vm.form.dwelling.yard.fenced) {
            vm.form.dwelling.yard.fenceDescription = '';
            vm.form.dwelling.yard.nonFencedPlan = '';
        }
    }

    function resetSwimmingPoolDetails() {
        var vm = this;
        if (!vm.form.dwelling.yard.swimmingPool) {
            vm.form.dwelling.yard.swimmingPoolFence = false;
        }
    }

    function resetVisitingDogDetails() {
        var vm = this;
        if (!vm.form.occupants.visitingDogs) {
            vm.form.occupants.visitingDogsDescription = '';
        }
    }

    function resetCurrentDogDetails() {
        var vm = this;
        if (vm.form.dogs.count <= 0) {
            vm.form.dogs.description = '';
            vm.form.dogs.vaccinated = false;
            vm.form.dogs.vacationPlans = false;
            vm.form.dogs.fleaTickMedicationName = '';
            vm.form.dogs.fixed = false;
            vm.form.dogs.notFixedReason = '';
        }
    }

    function resetCurrentCatDetails() {
        var vm = this;
        if (vm.form.cats.count <= 0) {
            vm.form.cats.description = '';
            vm.form.cats.vaccinated = false;
            vm.form.cats.vacationPlans = false;
            vm.form.cats.fleaTickMedicationName = '';
            vm.form.cats.fixed = false;
            vm.form.cats.notFixedReason = '';
        }
    }

    function hasErrorTouched(field) {
        return (field.$invalid && field.$touched);
    }

    function hasErrorDirty(field) {
        return (field.$invalid && field.$dirty);
    }

    function FosterTabs() {
        return [ 'Personal Details', 'Employment/Education', 'Living Situation', 'Occupants', 'Current Pets', 'Questionnaire', 'Preferences'];
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
            dwelling: {
                type: '',
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
                }
            },
            occupants: {
                count: 1,
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
                notFixedReason: ''
            },
            otherPets: '',
            previousPets: '',
            currentPetInteraction: '',
            hoursLeftAlone: 0,
            letOutPlans: '',
            vacationPlans: false,
            vacationPlansForFosters: '',
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
                reason: '',
            },
            healthIssues: {
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
                other: false
            },
            termLength: '',
            returnFosterCircumstances: '',
            previousFostering: '',
            fosterIntentions: '',
            expectedSupport: '',
            futureLearning: '',
            trainingAttendance: false
        };
    }

})();