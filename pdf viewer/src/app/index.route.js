(function() {
  'use strict';

  angular
    .module('pdfViewer')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $sceDelegateProvider, $locationProvider) {

    if(window.history && window.history.pushState){
      $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
       });
    }

    $sceDelegateProvider.resourceUrlWhitelist(['**']);

    $stateProvider
      .state('home', {
        url: '/:id?api',
        templateUrl: 'app/pdfviewer/templates/main.html',
        controller: 'pdfViewerController',
        resolve: {
          pdfBlobUrl: function ($stateParams, pdfService) {
            return pdfService.openDocument($stateParams.id, $stateParams.api).then(function(response){ return response; });
          }
        }
      });


    $urlRouterProvider.otherwise('/');
  }

})();
