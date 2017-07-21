angular.module('cookbook').controller('CommentController', ['$scope', '$http', 'recipesService', function ($scope, $http, recipesService) {
    $scope.comment = [];

    recipesService.getAllComment().then(function (response) {
        $scope.comment = response
    });


    $scope.btn_add = function () {
        if ($scope.txtcomment != '') {
            $scope.comment.push({ 'UserName': "Mike", 'comment': $scope.txtcomment, 'imageUrl': "http://i.imgur.com/FSfvsQl.jpg"});
            $scope.txtcomment = "";
        }
    }
    $scope.remItem = function ($index) {
        $scope.comment.splice($index, 1);
    }
}]);