(function () {
    'use strict';

    angular
        .module('app.adoptions')
        .controller('Adoptions', Adoptions);

    function Adoptions($http, $state) {
        var vm = this;

        vm.hasErrorDirty = hasErrorDirty;
        vm.hasErrorTouched = hasErrorTouched;
        vm.isFormValid = isFormValid;
        vm.isChildFormValid = isChildFormValid;
        vm.isTabSelected = isTabSelected;
        vm.switchTab = switchTab;

        vm.title = 'Adoptions';
        vm.applicationForm = undefined;
        vm.dogs = undefined;
        vm.cats = undefined;
        vm.showings = undefined;
        vm.selectedTab = undefined;
        vm.dogAdoptionDetails = undefined;
        vm.catAdoptionDetails = undefined;
        vm.tabs = undefined;

        if ($state.is('adoptions.dogs') && vm.dogs == undefined) {
            $http.get('App/adoptions/adoptableDogs.json').success(getAdoptableDogs).error(reportError);
        }
        else if ($state.is('adoptions.cats') && vm.cats == undefined) {
            $http.get('App/adoptions/adoptableCats.json').success(getAdoptableCats).error(reportError);
        }
        else if ($state.is('adoptions.showings') && vm.showings == undefined) {
            $http.get('App/adoptions/showings.json').success(getAdoptionShowings).error(reportError);
        }
        else if ($state.is('adoptions.dog')) {
            vm.tabs = DogAdoptionTabs();
            vm.selectedTab = vm.tabs[0].tabName;
            vm.dogAdoptionDetails = new DogAdoptionDetails($state.params.name);
        }
        else if ($state.is('adoptions.cat')) {
            vm.tabs = CatAdoptionTabs();
            vm.selectedTab = vm.tabs[0].tabName;
            vm.catAdoptionDetails = new CatAdoptionDetails($state.params.name);
        }

        function getAdoptableDogs(response) {
            vm.dogs = response.dogs;

            replaceNewLines(vm.dogs);
        }

        function getAdoptableCats(response) {
            vm.cats = response.cats;

            replaceNewLines(vm.cats);
        }

        function getAdoptionShowings(response) {
            vm.showings = response.showings;
        }

        function reportError(response) {
            console.log(response);
        }

        function replaceNewLines(arr) {
            for (var i = 0; i < arr.length; i++) {
                arr[i].description = arr[i].description.replace(/\n/g, "<br />")
            }
        }

        function isFormValid() {
            return vm.applicationForm.$dirty && vm.applicationForm.$valid;
        }

        function isChildFormValid(form) {
            return vm.applicationForm[form].$pristine || vm.applicationForm[form].$valid;
        }

        function isTabSelected(tab) {
            return vm.selectedTab == tab;
        }

        function switchTab(tab) {
            vm.selectedTab = tab;
        }

        function hasErrorTouched(field) {            
            return (field.$invalid && field.$touched);
        }

        function hasErrorTouched(form, field) {
            if (form && field) {
                if (vm.applicationForm[form] && vm.applicationForm[form].$pristine && field.$touched) {
                    vm.applicationForm[form].$pristine = false;
                    vm.applicationForm[form].$dirty = true;
                }

                return (field.$invalid && field.$touched);
            }

            return false;
        }

        function hasErrorDirty(field) {
            if (field) {
                return (field.$invalid && field.$dirty);
            }
            
            return false;
        }

        function DogAdoptionDetails(name) {
            return {
                animalName: name,
                applicantName: '',
                address: '',
                city: '',
                email: '',
                phoneNumber: '',
                numberOfAdults: 1,
                childrenDetails: '',
                currentPetDetails: '',
                dwellingType: '',
                outdoorDimensions: '',
                fence: false,
                fenceDetails: '',
                family: {
                    workSchedule: '',
                    desiredDogDetails: '',
                    desiredDogReasoning: '',
                    activityLevel: '',
                    matchReasoning: '',
                    spayNeuterThoughts: '',
                    crateTrainingThoughts: '',
                    damageReaction: '',
                    bitePreventionResearch: false,
                    familyTrainingAttendance: '',
                    trainingExample: '',
                    situationExample: '',
                    otherInformation: '',
                    trainingFacility: '',
                    obedienceTrainingLength: ''
                },
                children: {
                    trainingLength: '',
                    trainingFitLifestyle: '',
                    dogNipReaction: '',
                    dogRoughhouseReaction: '',
                    unsupervisedLength: '',
                    pastInteraction: '',
                    dogToleranceLevel: '',
                    situationExample: ''
                },
                currentPets: {
                    exposureToDogs: '',
                    matchResearch: '',
                    trainingMethods: '',
                    trainingHistory: '',
                    motivation: '',
                    otherInformation: ''
                }
            };
        }

        function CatAdoptionDetails(name) {
            return {
                animalName: name,
                applicantName: '',
                email: '',
                phoneNumber: '',
                city: '',
                numberOfAdults: 1,
                children: '',
                currentPets: '',
                hairPreference: '',
                sexPreference: '',
                sexPreferenceReasoning: '',
                spayNeuterThoughts: '',
                scratchReaction: '',
                scratchDeterence: '',
                allowedOutdoors: '',
                hearAboutArf: '',
                applicationReasoning: ''
            };
        }

        function DogAdoptionTabs() {
            return [{ tabName: 'Personal Details', formName: 'personalDetailsForm' },
                    { tabName: 'Family & Training', formName: 'familyTrainingForm' },
                    { tabName: 'Children', formName: 'childrenForm' },
                    { tabName: 'Current Pets', formName: 'currentPetsForm' }
            ];
        }

        function CatAdoptionTabs() {
            return [
                { tabName: 'Personal Details', formName: 'personalDetailsForm' },
                { tabName: 'Preferences', formName: 'preferencesForm' }
            ];
        }
    }
})();