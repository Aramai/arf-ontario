(function () {
    'use strict';

    angular
        .module('app.fostering')
        .controller('Fostering', Fostering);

    function Fostering() {
        var vm = this;
        vm.title = 'Fostering';
        vm.form = new FosterFormData();
        vm.hasErrorTouched = hasErrorTouched;
        vm.hasErrorDirty = hasErrorDirty;
    }

    function hasErrorTouched(field) {
        return (field.$invalid && field.$touched);
    }

    function hasErrorDirty(field) {
        return (field.$invalid && field.$dirty);
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
                partTime: false,
                fullTime: false,
                schedule: ''
            },
            education: {
                student: false,
                partTime: false,
                fullTime: false,
                schedule: ''
            },
            ownCar: true,
            transportPlan: '',
            livingSituation: {
                dwellingType: '',
                status: '',
                landLord: {
                    permission: false,
                    name: '',
                    contact: ''
                },
                apartmentBarkingPlan: '',
                neighbourhood: '',
                yard: {
                    exists: false,
                    fenced: false,
                    nonFencedPlan: '',
                    swimmingPool: false,
                    swimmingPoolFence: false
                },
                occupants: {
                    count: 0,
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
                    notFixedReason:''
                },
                otherPets: '',
                previousPets: '',
                currentPetInteraction: '',
                hoursLeftAlone: 0,
                letOutPlans: '',
                vacationPlans: false,
                vavactionPlansForFosters: '',
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
                    reasoning: '',
                },
                healthIssueAvoidance: {
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
                    other: false,
                    otherDescription: ''                        
                },
                termLength: '',
                returnFosterCircumstances: '',
                previousFostering: false,
                previousFosteringDescription: '',
                fosterIntentions: '',
                expectedSupport: '',
                futureLearning: '',
                trainingAttendance: false
            }            
        };
    }

})();