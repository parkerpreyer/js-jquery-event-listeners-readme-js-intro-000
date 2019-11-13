//define functions here

$(document).ready(function(){

getit();

});

function getIt() {
  $('p').on('click', function() {
    alert 'Hey!';
  });
}
