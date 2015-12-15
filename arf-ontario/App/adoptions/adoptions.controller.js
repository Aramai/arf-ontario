(function () {
    'use strict';

    angular
        .module('app.adoptions')
        .controller('Adoptions', Adoptions);

    function Adoptions($http, $state) {
        var vm = this;
        vm.title = 'Adoptions';
        vm.dogs = undefined;
        vm.cats = undefined;
        vm.showings = undefined;
        vm.dogAdoptionDetails = undefined;
        vm.catAdoptionDetails = undefined;
        vm.tabs = undefined;

        if ($state.is('adoptions.dogs') && vm.dogs == undefined) {
            $http.get('App/adoptions/adoptableDogs.json').success(GetAdoptableDogs).error(ReportError);
        }
        else if ($state.is('adoptions.cats') && vm.cats == undefined) {
            $http.get('App/adoptions/adoptableCats.json').success(GetAdoptableCats).error(ReportError);
        }
        else if ($state.is('adoptions.showings') && vm.showings == undefined) {
            $http.get('App/adoptions/showings.json').success(GetAdoptionShowings).error(ReportError);
        }
        else if ($state.is('adoptions.dog')) {
            vm.tabs = DogAdoptionTabs();
            vm.dogAdoptionDetails = new DogAdoptionDetails($state.params.name);
        }
        else if ($state.is('adoptions.dog')) {
            vm.tabs = CatAdoptionTabs();
            vm.catAdoptionDetails = new CatAdoptionDetails($state.params.name);
        }

        function GetAdoptableDogs(response) {
            vm.dogs = response.dogs;

            ReplaceNewLines(vm.dogs);
        }

        function GetAdoptableCats(response) {
            vm.cats = response.cats;

            ReplaceNewLines(vm.cats);
        }

        function GetAdoptionShowings(response) {
            vm.showings = response.showings;
        }


        function ReportError(response) {
            console.log(response);
        }

        function ReplaceNewLines(arr) {
            for (var i = 0; i < arr.length; i++) {
                arr[i].description = arr[i].description.replace(/\n/g, "<br />")
            }
        }

        function DogAdoptionDetails(name) {
            return {
                animalName: name
            };
        }

        function CatAdoptionDetails(name) {
            return {
                animalName: name
            };
        }

        function DogAdoptionTabs() {
            return ['Personal Details', 'Family & Training', 'Children', 'Current Pets'];
        }

        function CatAdoptionTabs() {
            return [];
        }
    }
})();