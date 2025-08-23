$(document).ready(function () {
  $(".wrap").on('scroll', function () {
    if ($(this).scrollTop() > 0) {
      $('#navbar').css('padding', '5px');
      $('#site-title').css('height', '0px');
      $('#site-title').css('width', '0px');
      $('#site-title').css('opacity', '0%');
      $('#navbar').css('box-shadow', '0px 2px 10px');

    } else {
      $('#navbar').css('padding', '15px');
      $('#site-title').css('height', '100px');
      $('#site-title').css('width', '40px');
      $('#site-title').css('opacity', '100%');
      $('#navbar').css('box-shadow', '0px 0px 0px');

    }
  });
});