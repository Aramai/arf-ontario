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
        
        if ($state.is('adoptions.dogs') && vm.dogs == undefined) {
            $http.get('./App/adoptions/adoptableDogs.json').success(GetAdoptableDogs);
        }
        else if ($state.is('adoptions.cats') && vm.cats == undefined) {
            $http.get('./App/adoptions/adoptableCats.json').success(GetAdoptableCats);
        }
        
        function GetAdoptableDogs(response) {
            vm.dogs = response.dogs;

            ReplaceNewLines(vm.dogs);            
        }

        function GetAdoptableCats(response) {
            vm.cats = response.cats;

            ReplaceNewLines(vm.cats);
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