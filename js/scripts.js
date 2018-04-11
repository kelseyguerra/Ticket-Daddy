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
    var concert = $('#concert option:selected').val();
    if (age <= 18) {
      alert("Sorry! This show is for age groups 18+!");
      hide("#output");
    } else if (age >= 50) {
      alert("Enjoy your 10% Off Senior Discount on us!");;
      $("#output2").append("Your Purchase Comes Out To: $" + concert * (10-100 /100) + ".00." + " Please Enjoy Your Show, " + name);
      hide("#output")
    }


    $("#output").append("Your Purchase Comes Out To: $" + concert + ".00." + " Please Enjoy Your Show, " + name);
  })
});
