(function () {
    'use strict';

    angular
        .module('app.adoptions')
        .controller('Adoptions', Adoptions);

    function Adoptions($http, $state) {
        var vm = this;
        
        vm.isTabSelected = isTabSelected;
        vm.switchTab = switchTab;
        vm.hasErrorTouched = hasErrorTouched;
        vm.hasErrorDirty = hasErrorDirty;
        vm.isFormValid = isFormValid;

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

        function isFormValid(tab, form) {
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

        function hasErrorDirty(field) {
            return (field.$invalid && field.$dirty);
        }

        function DogAdoptionDetails(name) {
            return {
                animalName: name
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
            return ['Personal Details', 'Family & Training', 'Children', 'Current Pets'];
        }

        function CatAdoptionTabs() {
            return [
                { tabName: 'Personal Details', formName: 'personalDetailsForm' },
                { tabName: 'Preferences', formName: 'preferencesForm' }
            ];
        }
    }
})();