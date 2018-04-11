// Business Logic

function Ticket(name, age, concert) {
  this.name = name;
  this.age = age;
  this.concert = concert;
}

Ticket.prototype.price = function() {
  return parseInt(this.concert).val();
}

// User Interface Logic
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
          var name = $("input#name").val();
          var age = parseInt($("input#age").val());
          var concert = parseInt($('input#concert').val());
          var newTicket = new Ticket(name, age, concert);


          $("#output").text("Thanks for the Purchase, " + age + "!" + " Enjoy your Show!");
          })
          });
