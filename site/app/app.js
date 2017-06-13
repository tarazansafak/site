var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/index", {
        templateUrl : "index.html"
    })
    .when("/about", {
        templateUrl : "views/about.html",
        controller : "controllers/aboutCtrl"
    });
});

