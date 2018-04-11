// Business Logic

function Ticket(name, age, concert) {
  this.name = inputName;
  this.age = inputAge;
  this.concert = inputConcert;
}

Ticket.prototype.price = function() {
  return parseInt(this.concert).val();
}

// User Interface Logic
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
          var name = $("input#inputName").val();
          var age = parseInt($("input#inputAge").val());
          var concert = parseInt($("selected#inputConcert").val());
          var newTicket = new Ticket;
          console.log(Ticket);

          $("#output").text("Total amount: $" + concert + ".00");
          })
      });


 // parseInt($("input:select[name=inputConcert]:selected").val());
