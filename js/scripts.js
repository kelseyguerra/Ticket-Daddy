// Business Logic

function Ticket(name, age, concert) {
  this.name = name;
  this.age = age;
  this.concert = concert;
}

Ticket.prototype.price = function() {
  return parseInt(this.concert) + 50;
}

// User Interface Logic
$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
          var name = $("input#name").val();
          var age = parseInt($("input#age").val());
          var price = $("select#concert").val()
          var newTicket = new Ticket + 50;
          var ticketInfo = newTicket + ("")
          console.log("hi");

          $("#output").append("<li>" +
            ticketInfo + "</li>");
          })
      });
