// $(document).ready(function() {
//   ("form#dogs").submit(function(event) {
//   event.preventDefault(); 
//     $("button#dog").click(function() {
//       $("#dogs").show();
//     });
//   });
// });

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const animal= parseInt($("#animal").val());

    if (animal === 1) {
      $(".dog").show();
      $(".cat").hide();
      $(".horse").hide();
    } else if (animal === 2) {
      $(".cat").show();
      $(".horse").hide();
      $(".dog").hide();
    } else if (animal === 3) {
      $(".horse").show();
      $(".dog").hide();
      $(".cat").hide();
    } else {
      alert("Please choose an animal to learn about!")
    }
    });
  });
