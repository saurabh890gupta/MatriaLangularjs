

var app = angular.module('myapp', ['ui.router','ngMaterial','ngMessages',])
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'tamplate/home.html',
      controller: 'MainCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'tamplate/contact.html',
      controller: 'contactCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'tamplate/login.html',
      controller: 'loginCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'tamplate/signup.html',
      controller: 'signupCtrl'
    })
    .state('footer', {
      url: '/footer',
      templateUrl: 'tamplate/footer.html',
      controller: 'footerCtrl'
    })
    .state('banner', {
      url: '/banner',
      templateUrl: 'tamplate/banner.html',
      controller: 'bannerCtrl'
    });
}])
app.controller('myctrl' , function($scope){
 
});




