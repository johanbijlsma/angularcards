angular
    .module('angularCards')
    .factory('cardsFactory', function($http) {
    
    
    function getCards() {
            return $http.get('data/cards.json') ;
    }
    return {
        getCards : getCards
    }
});


