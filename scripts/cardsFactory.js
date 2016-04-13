angular
    .module('angularCards')
    .factory('cardsFactory', function($http) {


        function getCards() { 
            return $http.get('data/cards.json');
        }

        // function addCard() {
        //     return  $http.post('data/cards.json');
        // }
        return {
            getCards: getCards
        }


    });
