(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("productResource",
                ["$resource",
                    "appsettings",
                    productResource])
    function productResource($resource, appsettings) {
        return$resource(appsettings.serverPath + "/api/products/:id");
            }


            

}());