

angular.module('cookbook').controller('ViewRecipesController', ['$scope', '$http', 'recipesService', function ($scope, $http, recipesService) {

    recipesService.ViewRecipes().then(function (response) {
        console.log(response);
        $scope.recipe = response
    });
    

}]);
