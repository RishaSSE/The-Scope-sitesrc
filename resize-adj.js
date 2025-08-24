$(document).ready(function () { 
  if($(".navbar-toggler").css("display") != "none") { 
    $(".wrap").css("width", "100%");
    $(".wrap").css("padding", "10px");
    $(".bg").css("display", "none");
  } else {
    $(".wrap").css("width", "80%");
    $(".wrap").css("padding", "50px");
    $(".bg").css("display", "block");
  }
});
$(window).on('resize', function(e) {
  if($(".navbar-toggler").css("display") != "none") { 
    $(".wrap").css("width", "100%");
    $(".wrap").css("padding", "10px");
    $(".bg").css("display", "none");
  } else {
    $(".wrap").css("width", "80%");
    $(".wrap").css("padding", "50px");
    $(".bg").css("display", "block");
  }

});