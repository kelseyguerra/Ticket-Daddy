// Business Logic

function Ticket(name, age, movie) {
  this.name = name;
  this.age = age;
  this.movie = movie;
}



// User Interface Logic
$(document).ready(function(){
  $("#showtime").submit(function(event) {
    event.preventDefault();

    var inputName = $("#inputName").val();
    var inputAge = $("#inputAge").val();
    var inputMovie = parseInt($("input:custom-select[name=concert]:selected").val();


}
}
//     var movie = {
//     showtime: 'inputMovie'
//     ticketRate: 10,
//     discount: 5,
//     offerPrice: function(){
//       var offerRate = this.movie * ((10 - this.discount) /10)
//       return offerRate;
//     }
//   }:
