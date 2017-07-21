
angular.module('cookbook').factory("ModelDialogService", ['$uibModal', 'RequestContext', , '$uibModalStack', function ($uibModal, RequestContext, $uibModalStack) {



        var showModal = function (modalOptions) {
            $uibModalStack.dismissAll();

            var options = angular.copy(modalOptions);
            options.templateUrl = RequestContext + modalOptions.templateUrl;
            return $uibModal.open(options).result
        };
        var AddRecipe = function () {
            $uibModalStack.dismissAll();
            return $uibModal.open({
                templateUrl: RequestContext + "/src/template/AddRecipe.html",
                backdrop: "static",
                controller: ['$scope', '$uibModalInstance', 'modalData', function ($scope, $uibModalInstance, modalData) {
                    $scope.modal = modalData
                }],
                resolve: {
                    modalData: function () {
                        return {
                            title: "",
                            message: ""
                        }
                    }
                }
            }).result
        };


        var EditRecipe = function (recipe) {
            console.log(recipe);

            $uibModalStack.dismissAll();
            return $uibModal.open({
                templateUrl: RequestContext + "/src/template/EditRecipe.html",
                backdrop: "static",
                controller: ['$scope', '$uibModalInstance', 'modalData', function ($scope, $uibModalInstance, modalData) {
                    $scope.modal = modalData
                }],
                resolve: {
                    modalData: function () {
                        return recipe
                    }
                }
            }).result
        };

        var DeleteRecipe = function (recipe) {
            $uibModalStack.dismissAll();
            return $uibModal.open({
                templateUrl: RequestContext + "/src/template/DeleteRecipe.html",
                backdrop: "static",
                controller: ['$scope', '$uibModalInstance', 'modalData', function ($scope, $uibModalInstance, modalData) {
                    $scope.modal = modalData
                }],
                resolve: {
                    modalData: function () {
                        return recipe
                    }
                }
            }).result
        };
        return {
            DeleteRecipe: DeleteRecipe,
            showModal: showModal,
            EditRecipe: EditRecipe,
            AddRecipe: AddRecipe       
        }
    }]);
