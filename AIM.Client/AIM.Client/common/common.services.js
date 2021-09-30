(function () {
    "use strict";

    angular
        .module("common.services",
            ["ngResource"])
        .constant("appsetting",
        {
            serverPath:"http://localhost:44321/"

        })

}());