$(document).ready(function () {
  $('#runButton').click(program);
});

var program = function() {
  var i = 23;

  do {
    console.log(i);
    i = i + 2;
  } while ( !(i > 34) )

};
