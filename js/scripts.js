// Business Logic

function Ticket(name, age, concert) {
  this.inputName = name;
  this.inputAge = age;
  this.inputConcert = concert;
}

Ticket.prototype.price = function() {
  return parseInt(this.concert) + 50;
}

// User Interface Logic
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var concert = $("#concert").val()
    var newTicket = new Ticket (name, age, concert);
    var ticketInfo = newTicket.Price();
  });
});

var newTicket = new Ticket(concert);
$("#output").append("<li>" ticketInfo "</li>");
})

//     var movie = {
//     showtime: 'inputMovie'
//     ticketRate: 10,
//     discount: 5,
//     offerPrice: function(){
//       var offerRate = this.movie * ((10 - this.discount) /10)
//       return offerRate;
//     }
//   }:
