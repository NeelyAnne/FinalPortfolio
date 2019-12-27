//mobile menu toggle
$(document).ready(function() {
  $("#burger").on("click", function(e) {
    if ($(".navbar-menu").hasClass("is-active")) {
      $(".navbar-menu").removeClass("is-active");
      //console.log("hello");
    } else {
      console.log("go away");
      $(".navbar-menu").addClass("is-active");
    }
  });
});
