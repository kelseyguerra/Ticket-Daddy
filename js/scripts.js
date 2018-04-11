// Business Logic

function Ticket(name, age, concert); {
  this.name = name;
  this.age = age;
  this.concert = concert;
}

Ticket.prototype.price = function() {
  return parseInt(this.concert) + 50;
}

// User Interface Logic
$(document).ready(function() {
      $("#orderForm").submit(function(event) {
          event.preventDefault();

          // var concert = {
          //   showtime: 'concert'
          //   ticketRate: 10;

          var name = $("input#name").val();
          var age = parseInt($("input#age").val());
          var price = $("select#concert").val()
          var newTicket = new Ticket + 50;
          var ticketInfo = newTicket.Price();
          var newTicket = new Ticket(ticketInfo);

          $("#output").append("<li>" +
            newTicket + "</li>");
        }
      });
