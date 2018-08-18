// splash screen js
theWindow = $(window);
theBG = $('#bg');

var pageInfo = {
  pageWidth: theWindow.width(),
  pageHeight: theWindow.height(),
  mouseXPos: 0,
  mouseYPos: 0
}

// create mouse event listener to move bg
theWindow.mousemove(function (event) {
  pageInfo.mouseXPos = event.pageX;
  pageInfo.mouseYPos = event.pageY;

  position_background();
});

$('h1 a').hover(function () {
  theBG.addClass('hovering');
},
  function () {
    theBG.removeClass('hovering');
  }
);

function position_background() {

  var moveX = (pageInfo.pageWidth + pageInfo.mouseXPos) / -10;
  var moveY = (pageInfo.pageHeight + pageInfo.mouseYPos) / -10;

  theBG.css('background-position-x', moveX).css('background-position-y', moveY);
}

function rotate_bg() {
  rotateAmt = Math.random() * 180 - 90;
  theBG.css('transform', 'rotate(' + rotateAmt + 'deg)');
}

window.onload = function () {
  rotate_bg();
};
