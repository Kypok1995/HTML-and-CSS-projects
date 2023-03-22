function My_First_Function(){
  var String = "Kiss me, I'm Irish!";
  var result = String.fontcolor("blue");
  document.getElementById("Irish").innerHTML = result;}

  $("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);