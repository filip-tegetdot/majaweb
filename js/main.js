/**
 * Created by filip on 2/19/16.
 */
var ordinationApp = angular.module('OrdinationApp',['ngMessages','ngMaterial']);

ordinationApp.controller("MainCtrl", function($scope){
   $scope.menu = ["HOME","FOR COUPLES","FOR PROFESSIONALS","EVENT","BLOG", "ABOUT","CONTACT"];
});