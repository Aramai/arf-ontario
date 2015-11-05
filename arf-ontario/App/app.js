(function () {
    'use strict';

    angular.module('app', [
        // Angular modules        
        'ngAnimate',        
        'ui.router',

        // Custom modules
        'app.core',
        'app.news',
        'app.adoptions',
        'app.fostering',
        'app.volunteering',
        'app.contact'
        // 3rd Party Modules
        
    ]);
})();
