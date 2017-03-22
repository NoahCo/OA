MenuApp.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread, garlic, tomatoes, olive oil',
      price : 4.95
    }
  ];
  $scope.mains=[ {
      name: 'Hamburger',
      description: 'Mozzarella, tomatoes, onion, cheese.',
      price: 4.95
    },
    {
      name: 'Tuna Sandwich',
      description: 'Served with fries.',
      price: 3.95
    },
    {
      name: 'Chicken',
      description: 'Grilled bread, garlic, tomatoes, olive oil',
      price : 4.95
    }
    
  ];
  $scope.sides = [{
    name: "Mashed Potatoes",
    description: 'potatoes that are mashed',
    price : 6.94
  },
  {
    name: 'Mac n Cheese',
    description: 'pasta covered in cheese ',
    price: 2.45
  },
  {
    name: 'Beans',
    description: 'comes with cheese',
    price: 1.95
  }];
}]);