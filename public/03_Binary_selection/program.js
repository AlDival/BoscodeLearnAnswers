$(document).ready(function () {
  $('#runButton').click(program);
});

var program = function() {
  var votingAge = 18;

  var age = $( '#guessInput' ).val();
  age = parseInt(age);

  if ( votingAge <= age ) {
    console.log('You can vote');
  } else {
    console.log('You can not vote.');
  }

};
