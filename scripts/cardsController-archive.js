angular
    .module('angularCards')
    .controller('cardsController', function ($scope, cardsFactory) {

    $scope.cards;

    $scope.newCard = {};

    $scope.addCard = function(newCard){
        $scope.newCard.id = "i++";
        $scope.cards.push(newCard);
        $http.post('data/cards.json') ;
        $scope.newCard = {};
    }

    cardsFactory.getCards().success(function(cards) {
        $scope.cards = cards;
    }).error(function(error){
        console.log(error);
    });


});
