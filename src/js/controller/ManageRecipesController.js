angular.module('cookbook').controller('ManageRecipesController', ['$scope', '$http', 'recipesService',  function ($scope, $http, recipesService) {

    recipesService.getAllRecipes().then(function (response) {
        console.log(response);
        $scope.recipes = response

       // ModelDialogService.EditRecipe(response);
    });




    $scope.add = function (recipe) {

        $scope.recipes.push(recipe);
    };
    $scope.remove = function (recipe) {
        var index = $scope.recipes.indexOf(recipe);
        $scope.recipes.splice(index, 1);

    };
    $scope.edit = function (recipe) {


    };

}]);
