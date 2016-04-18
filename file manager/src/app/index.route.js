(function() {
  'use strict';

  angular
    .module('FileManager')
    .constant('PDF_VIEWER_URL', 'http://127.0.0.1:3002')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $sceDelegateProvider ,$locationProvider) {

    // Browser Support?
    if(window.history && window.history.pushState){
      $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
       });
    }

    $sceDelegateProvider.resourceUrlWhitelist(['**']);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/filemanager/templates/main.html',
        controller: 'FileManagerController',
      });

    $urlRouterProvider.otherwise('/');
  }

})();
