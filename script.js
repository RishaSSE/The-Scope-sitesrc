var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 200;
const browserWidth = window.innerWidth;
const browserHeight = window.innerHeight;
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
function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (15 * lMouseX) / 100;
  lFollowY = (15 * lMouseY) / 100;

});

moveBackground();