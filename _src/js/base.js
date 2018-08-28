var pageInfo = {
  burger: {
    wrapper: ".masthead__menu",
    button: ".masthead__menu-burger",
    menu: ".masthead__menu-wrapper",
    toggled: "open"
  }
};

var $burgerButton = $(pageInfo.burger.button);
var $burgerWrapper = $(pageInfo.burger.wrapper);

function toggleNav() {
  console.log("🍔");
  $burgerWrapper.toggleClass(pageInfo.burger.toggled);
}

$burgerButton.click(toggleNav);
