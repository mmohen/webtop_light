(function() {
  'use strict';

  angular
    .module('pdfViewer')
    .controller('pdfViewerController', pdfViewerController);

  /** @ngInject */
  function pdfViewerController($scope, pdfBlobUrl) {
    $scope.pdf = {
      src: pdfBlobUrl
    }
  }

})();