$(document).ready(function() {

  var num = prompt("Enter a Number");
  num++;

 while (num % 1 != 0) {
    if (isNaN(num)){
      alert("This is not a Number");
      num = prompt("Enter a Number");
      num++;
    }
    else {
      alert("Should be an Integer");
      num = prompt("Enter a Number");
      num++;
    }
  } 

  $('#center').on('click','button', function() {
      addItem(num);
  });

});

var addItem = function(number) {
  for (var i = 1; i < number; i++) {
    if (i % 15 === 0) {
      $('ul').append("<li>FizzBuzz</li>");
    }
    else if (i % 5 === 0) {
      $('ul').append("<li>Buzz</li>");
    }
    else if (i % 3 === 0) {
      $('ul').append("<li>Fizz</li>");
    }
    else {
      $('ul').append("<li>" + i + "</li>");
    }
     
  }
}

