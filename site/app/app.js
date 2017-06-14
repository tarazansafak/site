var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/index", {
        templateUrl : "index.html"
    })
    .when("/home", {
        templateUrl : "views/home.html",
        controller : "controllers/homeCtrl"
    }).when("/services", {
        templateUrl : "views/services.html",
        controller : "controllers/servicesCtrl"
    }).when("/automation", {
        templateUrl : "views/automation.html",
        controller : "controllers/automationCtrl"
    }).when("/cybersecurity", {
        templateUrl : "views/cybersecurity.html",
        controller : "controllers/cybersecurityCtrl"
    }).when("/devsecops", {
        templateUrl : "views/devsecops.html",
        controller : "controllers/devsecopsCtrl"
    }).when("/about", {
        templateUrl : "views/about.html",
        controller : "controllers/aboutCtrl"
    }).when("/contact", {
        templateUrl : "views/contact.html",
        controller : "controllers/contactCtrl"
    });
});

