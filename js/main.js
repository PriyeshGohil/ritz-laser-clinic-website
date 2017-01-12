$(document).ready(function(){
  $('#bxslider').bxSlider({
    controls: false,
    auto: true,
    slideWidth: 1180
  });
});


$('#contact-submit').click(function(event) {
  event.preventDefault();
  $.ajax({
    url: "http://www.formspree.io/priyesh114@hotmail.co.uk",
    method: "POST",
    data: $( "form" ).serializeArray(),
    dataType: "json",
})
.done(function() {

  swal("Thank You!", "We will get back to you as soon as possible.", "success");
})
.fail(function() {
  swal("Error!", "Something went wrong! Please try again...", "error")

})
.always(function() {
  console.log("complete");
});


});
