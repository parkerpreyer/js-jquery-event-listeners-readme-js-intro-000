//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').load(function() {
    $(this).addClass('tasty');
  });
}

function submitIt() {
  $('form').submit(function() {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
});
