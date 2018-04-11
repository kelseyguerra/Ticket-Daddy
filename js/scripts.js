// Business Logic

function Ticket(name, age, concert) {
  this.name = name;
  this.age = age;
  this.concert = concert;
}
Ticket.prototype.price = function() {
  return parseInt(this.concert) + 12;
}


// User Interface Logic

$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var age = $("input#age").val();
    var concert = $("select#concert").val()
  });
});

var newTicket = new Ticket(concert);
$("#output").text("Total amount: $" + newTicket.price() + ".00");
});








//     var movie = {
//     showtime: 'inputMovie'
//     ticketRate: 10,
//     discount: 5,
//     offerPrice: function(){
//       var offerRate = this.movie * ((10 - this.discount) /10)
//       return offerRate;
//     }
//   }:
