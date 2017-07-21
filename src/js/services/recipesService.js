    angular.module('cookbook').factory("recipesService", ['$http', function ($http) {
        function unwrapResponse(response) {
            return response.data;
        }

        function getAllRecipes() {
            return $http({
                url: "src/data/recipes.js",
                method: 'GET'
            }).then(unwrapResponse);
        }

        function getAllComment() {
            return $http({
                url: "src/data/Comment.js",
                method: 'GET'
            }).then(unwrapResponse);
        }

        function ViewRecipes() {
            return $http({
                url: "src/data/viewrecipes.js",
                method: 'GET'
            }).then(unwrapResponse);
        }
        return {
            getAllRecipes: getAllRecipes,
            getAllComment: getAllComment,
            ViewRecipes: ViewRecipes
        }
    }]);

