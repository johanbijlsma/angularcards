angular
    .module('angularCards')
    .controller('cardsController', function ($scope, cardsFactory) {

    $scope.cards;

    $scope.newCard = {};

    $scope.addCard = function(newCard){
        // $scope.newCard.id = ($scope.cards.id).length+1;
        $scope.cards.push(newCard);
        $scope.newCard = {};
        $scope.showAddCards = false;
    }

    cardsFactory.getCards().success(function(cards) {
        $scope.cards = cards;
    }).error(function(error){
        console.log(error);
    });



});
