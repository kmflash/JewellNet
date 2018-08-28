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
    total: ".project__carousel-controls--location .total"
  }
};

var $burgerButton = $(pageInfo.burger.button);
var $burgerWrapper = $(pageInfo.burger.wrapper);

function toggleNav() {
  console.log("🍔");
  $burgerWrapper.toggleClass(pageInfo.burger.toggled);
}

$burgerButton.click(toggleNav);
