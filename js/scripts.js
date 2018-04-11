// Business Logic

function Ticket(name, age, movie) {
  this.name = name;
  this.age = age;
  this.movie = movie;
}



if (inputAge >= 18) {
  msg = "Sorry, the performance you are trying to attend is 18+"
} else {
  msg= "Lucky you! You're 18+!"
}



// User Interface Logic
$(document).ready(function(){
  $("#showtime").submit(function(event) {
    event.preventDefault();

    var inputName =
    var inputAge =
    var inputMovie =
    var returnValue = "go";
    if (inputAge <= 18) {
      $("#output").text("Sorry, the performance you are trying to attend is 18+");
    } else {
      $("#output").text("Lucky you! You're 18+! Hope you Enjoy the show!");

    $('.carousel').carousel(cycle);
    })
  })

  })
})
