/**
 * Created by suzanne on 4/22/15.
 */
app.controller('MainController', ['$scope', function($scope){

  $scope.title = 'Handmade Bicycles in Pittsburgh, PA';
  $scope.promo = 'Banff Film Festival Special - 10% off';
  $scope.bikes = [
    {
    model: '29er Single Speed',
    frame: 'steel',
    wheelsize: '29 inches',
    gearing: 'single speed',
    price: '1259',
    image: 'img/29erFrame.png',
    nextBuildDate: new Date('2015', '05', '15'),
      likes: 0,
      dislikes: 0
  },{
      model: 'City Bike',
      frame: 'Steel',
      wheelsize: '27c ',
      gearing: 'choice',
      price: '1099',
      image: 'img/city-bike.png',
      nextBuildDate: new Date('2015', '06', '15'),
      likes: 0,
      dislikes: 0
    },{
      model: 'Touring Bike',
      frame: 'steel',
      wheelsize: '27c',
      gearing: 'choice',
      price: '1429',
      image: 'img/city-bike.png',
      nextBuildDate: new Date('2015', '07', '15'),
      likes: 0,
      dislikes: 0
    },{
      model: 'Cyclocross Bike',
      frame: 'steel',
      wheelsize: '27c',
      gearing: '2x10',
      price: '1759',
      image: 'img/29erFrame.png',
      nextBuildDate: new Date('2015', '08', '15'),
      likes: 0,
      dislikes: 0
    }
  ];

  $scope.plusOne = function(index) {
    $scope.bikes[index].likes += 1;
  }

  $scope.minusOne = function(index) {
    $scope.bikes[index].dislikes -= 1;
  }



}]);