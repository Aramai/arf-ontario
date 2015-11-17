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
        
        if ($state.is('adoptions.dogs') && vm.dogs == undefined) {
            $http.get('App/adoptions/adoptableDogs.json').success(GetAdoptableDogs).error(ReportError);
        }
        else if ($state.is('adoptions.cats') && vm.cats == undefined) {
            $http.get('App/adoptions/adoptableCats.json').success(GetAdoptableCats).error(ReportError);
        }
        else if ($state.is('adoptions.showings') && vm.showings == undefined) {
            $http.get('App/adoptions/showings.json').success(GetAdoptionShowings).error(ReportError);
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

        function ReplaceNewLines(arr)
        {
            for (var i = 0; i < arr.length; i++) {
                arr[i].description = arr[i].description.replace(/\n/g, "<br />")
            }
        }
    }
})();