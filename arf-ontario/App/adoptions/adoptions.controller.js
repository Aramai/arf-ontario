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
            
        }

        function ReportError(response) {
            console.log(response);
        }
    }
})();