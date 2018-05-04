//User Interface
var countTo = parseInt(prompt("Enter number:"));
var result = '';
condition();




//Business Logic
function condition() {
  for (var i = 1; i <= countTo; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      result += 'pingpong';
    } else if (i % 5 == 0) {
      result += 'pong';
    } else if (i % 3 == 0) {
      result += 'ping';
    } else {
      result += i.toString();
    }
    if (i != countTo) {
      result += ',';
    }

  }
  alert(result);
  result = '';
}
