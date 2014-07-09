$(document).ready(function() {

   $('#center').on('click','button', function() {
      addItem();
    });

     function addItem() {
      for (var i = 1; i < 101; i++) {
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
    
});



