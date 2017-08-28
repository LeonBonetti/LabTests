(function() {
  angular.module('Lab').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('main', {
        url: "/main",
        templateUrl: "/main/base.html"
      }).state('login', {
        url: '/login',
        templateUrl: "login/base.html"
      }).state('whatchers', {
        url:'/whatchers',
        templateUrl: "whatchers/base.html"
      })

      $urlRouterProvider.otherwise('/main')
    }
  ])
})()
