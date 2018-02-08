$(document).ready(function () {
  $('#runButton').click(program);
  $('#clearButton').click(clear);
});
var r = 1;
var clear = function() {
  $('#outputDiv').html('');
};

var program = function() {
  console.log(r);
  var text = '<p>' + r + '</p>';
  $('#outputDiv').append(text);
  r = r+1;
};
