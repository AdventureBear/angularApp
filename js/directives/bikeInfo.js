app.directive('bikeInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/bikeInfo.html'
  };
});