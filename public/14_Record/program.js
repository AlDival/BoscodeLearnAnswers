$(document).ready(function () {
  $('#runButton').click(program);
});

var program = function (productNo) {
  var productArray = [];


  productArray[0] = {};
  productArray[1] = {};

  productArray[0].id = 1;
  productArray[0].name = 'Oven cleaner kit';
  productArray[0].description = 'The ultimate solution for ovens, trays and racks';
  productArray[0].quantity = 10;
  productArray[0].price = 5.99;

  productArray[1].id = 2;
  productArray[1].name = 'Bath Cleaning Acid';
  productArray[1].description = 'Cleans Baths Good';
  productArray[1].quantity = 100;
  productArray[1].price = 69.99;


  if(productNo == 1){
    console.log('product name = ' + productArray[0].name);
  }
  else if(productNo == 2){
    console.log('product name = ' + productArray[1].name);
  }
  else{
    console.log('Error Error')
  }
};
