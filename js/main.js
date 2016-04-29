/**
 * Created by filip on 2/19/16.
 */
var ordinationApp = angular.module('OrdinationApp',['ngMessages','ngMaterial','ngRoute','ngAnimate']);

ordinationApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl:"views/pocetna.html"
        })
        .when("/ordinacija", {
            templateUrl:"views/ordinacija.html"
        })
        .when("/pitanja", {
            templateUrl:"views/pitanja.html"
        })
        .when("/kontakt", {
            templateUrl:"views/kontakt.html"
        })
        .otherwise({redirectTo: '/'});
}])

ordinationApp.controller("MainCtrl", function($scope, $mdDialog){
   $scope.menu = ["ПОЧЕТНА","ОРДИНАЦИЈА","ПИТАЊА И САВЕТИ","КОНТАКТ"];
    // Set of Photos
    $scope.photos = [
        {src: 'http://farm9.staticflickr.com/8042/7918423710_e6dd168d7c_b.jpg', desc: 'Image 01'},
        {src: 'http://farm9.staticflickr.com/8449/7918424278_4835c85e7a_b.jpg', desc: 'Image 02'},
        {src: 'http://farm9.staticflickr.com/8457/7918424412_bb641455c7_b.jpg', desc: 'Image 03'},
        {src: 'http://farm9.staticflickr.com/8179/7918424842_c79f7e345c_b.jpg', desc: 'Image 04'},
        {src: 'http://farm9.staticflickr.com/8315/7918425138_b739f0df53_b.jpg', desc: 'Image 05'},
        {src: 'http://farm9.staticflickr.com/8461/7918425364_fe6753aa75_b.jpg', desc: 'Image 06'}
    ];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
   $scope.showMore = function(section){
       var templateUrl = "";
       switch(section){
           case "protetika":
               templateUrl = "dialogs/zubnaProtetika.html";
               break;
           case "endodencija":
               templateUrl = "dialogs/endodencija.html";
               break;
           case "deca":
               templateUrl = "dialogs/deca.html";
               break;
           case "izbeljivanje":
               templateUrl = "dialogs/izbeljivanje.html";
               break;
           case "krunice":
               templateUrl = "dialogs/krunice.html";
               break;
           case "mostovi":
               templateUrl = "dialogs/mostovi.html";
               break;
           case "plocaste":
               templateUrl = "dialogs/plocaste.html";
               break;
           case "skeletirana":
               templateUrl = "dialogs/skeletirana.html";
               break;
           case "totalna":
               templateUrl = "dialogs/totalna.html";
               break;
           case "oralna":
               templateUrl = "dialogs/oralna.html";
               break;
           case "ciscenje":
               templateUrl = "dialogs/ciscenje.html";
               break;
           case "ordinacijsko":
               templateUrl = "dialogs/ordinacijsko.html";
               break;
           case "kucno":
               templateUrl = "dialogs/kucno.html";
               break;
           case "beljenje":
               templateUrl = "dialogs/beljenje.html";
               break;
       }
       $mdDialog.show({
           templateUrl:templateUrl,
           locals: {
               section: section
           },
           controller: "DialogController"
       });
   }
});
ordinationApp.controller("DialogController", function($scope, section, $mdDialog){
    $scope.close = function(){
        $mdDialog.cancel();
    };
});