"use strict";

var app = angular.module('athelas', ['athelas.controllers', 'athelas.filters', 'athelas.services']);


app.config(function ($routeProvider){
	$routeProvider
	.when("/shots/:id", {controller:"ShotsCtrl", templateUrl:"partials/shot.html" })
	.when("/:list", {controller:"ShotsListCtrl", templateUrl:"partials/shots_list.html" })
	
	.otherwise({redirectTo: "/popular"});


});