(function () {
    'use strict';

    angular
        .module('app.fostering')
        .controller('Fostering', Fostering);

    function Fostering() {
        var vm = this;
        
        vm.hasErrorTouched = hasErrorTouched;
        vm.hasErrorDirty = hasErrorDirty;
        vm.isChildFormValid = isChildFormValid;
        vm.isFormValid = isFormValid;
        vm.isTabSelected = isTabSelected;
        vm.resetCurrentDogDetails = resetCurrentDogDetails;
        vm.resetEducationDetails = resetEducationDetails;
        vm.resetEmploymentDetails = resetEmploymentDetails;        
        vm.resetFenceDetails = resetFenceDetails;
        vm.resetLandlordDetails = resetLandlordDetails;
        vm.resetSwimmingPoolDetails = resetSwimmingPoolDetails;
        vm.resetVisitingDogsDetails = resetVisitingDogDetails;
        vm.resetYardDetails = resetYardDetails;        
        vm.switchTab = switchTab;

        vm.title = 'Fostering';
        vm.tabs = FosterTabs();
        vm.form = new FosterFormData();

        vm.selectedTab = vm.tabs[0].tabName;

        function isFormValid() {
            return vm.applicationForm.$dirty && vm.applicationForm.$valid;
        }

        function isTabSelected(tab) {
            return vm.selectedTab == tab;
        }

        function isChildFormValid(tab, form) {
            return vm.applicationForm[form].$pristine || vm.applicationForm[form].$valid;
        }

        function switchTab(tab) {
            vm.selectedTab = tab;
        }

        function resetEmploymentDetails() {
            if (!vm.form.employment.employed) {
                vm.form.employment.type = 'N/A';
                vm.form.employment.schedule = '';
            }
        }

        function resetEducationDetails() {
            if (!vm.form.education.student) {
                vm.form.education.type = 'N/A';
                vm.form.education.schedule = '';
            }
        }

        function resetLandlordDetails() {
            if (vm.form.dwelling.dwelling != 'Rent') {
                vm.form.dwelling.landlord.permission = false;
                vm.form.dwelling.landlord.name = '';
                vm.form.dwelling.landlord.contact = '';
            }
        }

        function resetCarDetails() {
            if (!vm.form.ownCar) {
                vm.form.transportPlan = '';
            }
        }

        function resetYardDetails() {
            if (!vm.form.dwelling.yard.exists) {
                vm.form.dwelling.yard.fenced = false;
                vm.resetFenceDetails();
            }
        }

        function resetFenceDetails() {
            if (!vm.form.dwelling.yard.fenced) {
                vm.form.dwelling.yard.fenceDescription = '';
                vm.form.dwelling.yard.nonFencedPlan = '';
            }
        }

        function resetSwimmingPoolDetails() {
            if (!vm.form.dwelling.yard.swimmingPool) {
                vm.form.dwelling.yard.swimmingPoolFence = false;
            }
        }

        function resetVisitingDogDetails() {
            if (!vm.form.occupants.visitingDogs) {
                vm.form.occupants.visitingDogsDescription = '';
            }
        }

        function resetCurrentDogDetails() {
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
            return [{ tabName: 'Personal Details', formName: 'personalDetailsForm' },
                     { tabName: 'Employment/Education', formName: 'employmentForm' },
                     { tabName: 'Living Situation', formName: 'livingSituationForm' },
                     { tabName: 'Occupants', formName: 'occupantsForm' },
                     { tabName: 'Current Pets', formName: 'currentPetsForm' },
                     { tabName: 'Questionnaire', formName: 'questionnaireForm' },
                     { tabName: 'Preferences', formName: 'preferencesForm' }
            ];
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
    }
})();