(function () {
    'use strict';

    angular
        .module('app.adoptions')
        .controller('Adoptions', Adoptions);

    function Adoptions($http) {
        var vm = this;
        vm.title = 'Adoptions';
        
        $http.get('./App/adoptions/adoptableDogs.json').success(GetAdoptableDogs);
        
        function GetAdoptableDogs(response) {
            vm.dogs = response.dogs;
            
            for(var i = 0; i < vm.dogs.length; i++)
            {
                console.log(vm.dogs[i].description);
                vm.dogs[i].description = vm.dogs[i].description.replace(/\n/g, "<br />")
            }
            
        }

        function ReportError(response) {
            console.log(response);
        }
    }
})();