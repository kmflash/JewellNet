var pageInfo = {
  burger: {
    wrapper: ".masthead__menu",
    button: ".masthead__menu-burger",
    menu: ".masthead__menu-wrapper",
    toggled: "open"
  },
  carousel: {
    wrapper: ".project__carousel",
    controls: {
      back: ".project__carousel-controls--back",
      fwd: ".project__carousel-controls--next"
    },
    position: ".project__carousel-controls--location .pos",
    total: ".project__carousel-controls--location .total",
    imgs: ".project__carousel--image-wrapper"
  }
};

// declarations
var $burgerButton = $(pageInfo.burger.button);
var $burgerWrapper = $(pageInfo.burger.wrapper);

// object constructors
function Slideshow(imgs) {
  this.imgs = imgs; // array of images
  this.pos = 1; // slideshow position
  this.total = this.imgs.length; // total number of images
  this.$back = $(pageInfo.carousel.controls.back);
  this.$fwd = $(pageInfo.carousel.controls.fwd);
  this.$positn = $(pageInfo.carousel.position);
  this.$tot = $(pageInfo.carousel.total);

  console.log("total images: ", this.total);

  this.updateControls = function() {
    this.$positn.html(this.pos);

    this.pos == this.total
      ? this.$fwd.addClass("disabled")
      : this.$fwd.removeClass("disabled");

    this.pos == 1
      ? this.$back.addClass("disabled")
      : this.$back.removeClass("disabled");

    this.updateImages();

    return;
  };

  this.updateImages = function() {
    $(this.imgs).removeClass("atBat onFirst onDeck inTheHole onSecond");

    $(this.imgs[this.returnPosition() - 1]).addClass("atBat");
    $(this.imgs[this.returnPosition()]).addClass("onDeck");
    $(this.imgs[this.returnPosition() + 1]).addClass("inTheHole");
    $(this.imgs[this.returnPosition() - 2]).addClass("onFirst");
    $(this.imgs[this.returnPosition() - 3]).addClass("onSecond");

    if (!$(pageInfo.carousel.wrapper).hasClass("activated")) {
      $(pageInfo.carousel.wrapper).addClass("activated");
    }

    return;
  };

  this.returnPosition = function() {
    return this.pos;
  };

  this.nextImage = function() {
    if (this.pos < this.total) {
      ++this.pos;
      console.log("➡️");
    } else {
      return;
    }

    return this.updateControls();
  };

  this.prevImage = function() {
    if (this.pos !== 1) {
      --this.pos;
      console.log("⬅️");
    } else {
      return;
    }

    return this.updateControls();
  };

  this.init = function() {
    this.updateControls();
    this.$tot.html(this.total);
  };

  this.init();
}

function toggleNav() {
  console.log("🍔");
  $burgerWrapper.toggleClass(pageInfo.burger.toggled);
}

$burgerButton.click(toggleNav);

var show = new Slideshow($(pageInfo.carousel.imgs));

$(pageInfo.carousel.controls.fwd).click(function() {
  show.nextImage();
});

$(pageInfo.carousel.controls.back).click(function() {
  show.prevImage();
});

// Enable swiping
var stage = document.querySelector(pageInfo.carousel.wrapper);
var swipd = new Hammer(stage);
swipd
  .on("swipeleft", function(ev) {
    show.nextImage();
  })
  .on("swiperight", function(ev) {
    show.prevImage();
  });
