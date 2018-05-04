//User Interface
var num;
$(document).ready(function(){
  $("form").submit(function(event){
    num= parseInt($("input#sect").val());

    condition();
    $("input#sect").val('');
    event.preventDefault();
  });
});





//Business Logic
function condition() {
    $('.data').text('');
  for (var i = 1; i <= num; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      $('.data').append('<li>pingpong</li>') ;
    } else if (i % 5 == 0) {
      $('.data').append('<li>pong</li>') ;
    } else if (i % 3 == 0) {
        $('.data').append('<li>ping</li>') ;
    } else {
        $('.data').append('<li>'+i.toString()+'</li>') ;
    }
  }
}
