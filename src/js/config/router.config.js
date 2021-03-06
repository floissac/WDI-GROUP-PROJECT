angular
  .module('cocktailApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('homepage', {
      url: '/',
      templateUrl: 'js/views/homepage.html'
    })
    .state('cocktailsIndex', {
      url: '/cocktails',
      templateUrl: 'js/views/cocktails/index.html',
      controller: 'CocktailsIndexCtrl as vm'
    })
    .state('cocktailsNew', {
      url: '/cocktails/new',
      templateUrl: 'js/views/cocktails/new.html',
      controller: 'CocktailsNewCtrl as vm'
    })
    .state('cocktailsShow', {
      url: '/cocktails/:id',
      templateUrl: 'js/views/cocktails/show.html',
      controller: 'CocktailsShowCtrl as vm'
    })
    .state('cocktailsEdit', {
      url: '/cocktails/:id/edit',
      templateUrl: 'js/views/cocktails/edit.html',
      controller: 'CocktailsEditCtrl as vm'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/login.html',
      controller: 'LoginCtrl as vm'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'RegisterCtrl as vm'
    })
    .state('userProfile', {
      url: '/userProfile',
      templateUrl: 'js/views/user/userProfile.html',
      controller: 'UserProfileCtrl as vm'
    });

  $urlRouterProvider.otherwise('/');
}
