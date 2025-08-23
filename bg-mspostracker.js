var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 200;
// const browserWidth = window.innerWidth;
// const browserHeight = window.innerHeight;
function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webkit-transform': translate,
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