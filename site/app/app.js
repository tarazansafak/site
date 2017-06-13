var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/index", {
        templateUrl : "index.html"
    })
    .when("/home", {
        templateUrl : "views/home.html",
        controller : "controllers/homeCtrl"
    }).when("/about", {
        templateUrl : "views/about.html",
        controller : "controllers/aboutCtrl"
    });
});

