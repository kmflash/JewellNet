/*! Jewell Net - v0.0.1 - 2018-08-30 @ 12:08
* https://www.davidjewell.nyc
* Copyright (c) 2018 David Jewell; Licensed MIT */

var pageInfo={burger:{wrapper:".masthead__menu",button:".masthead__menu-burger",menu:".masthead__menu-wrapper",toggled:"open"},carousel:{wrapper:".project__carousel",controls:{back:".project__carousel-controls--back",fwd:".project__carousel-controls--next"},position:".project__carousel-controls--location .pos",total:".project__carousel-controls--location .total",imgs:".project__carousel--image-wrapper"}},$burgerButton=$(pageInfo.burger.button),$burgerWrapper=$(pageInfo.burger.wrapper);
// declarations
// object constructors
function Slideshow(t){this.imgs=t,// array of images
this.pos=1,// slideshow position
this.total=this.imgs.length,// total number of images
this.$back=$(pageInfo.carousel.controls.back),this.$fwd=$(pageInfo.carousel.controls.fwd),this.$positn=$(pageInfo.carousel.position),this.$tot=$(pageInfo.carousel.total),console.log("total images: ",this.total),this.updateControls=function(){this.$positn.html(this.pos),this.pos==this.total?this.$fwd.addClass("disabled"):this.$fwd.removeClass("disabled"),1==this.pos?this.$back.addClass("disabled"):this.$back.removeClass("disabled"),this.updateImages()},this.updateImages=function(){$(this.imgs).removeClass("atBat onFirst onDeck inTheHole onSecond"),$(this.imgs[this.returnPosition()-1]).addClass("atBat"),$(this.imgs[this.returnPosition()]).addClass("onDeck"),$(this.imgs[this.returnPosition()+1]).addClass("inTheHole"),$(this.imgs[this.returnPosition()-2]).addClass("onFirst"),$(this.imgs[this.returnPosition()-3]).addClass("onSecond"),$(pageInfo.carousel.wrapper).hasClass("activated")||$(pageInfo.carousel.wrapper).addClass("activated")},this.returnPosition=function(){return this.pos},this.nextImage=function(){if(this.pos<this.total)return++this.pos,console.log("➡️"),this.updateControls()},this.prevImage=function(){if(1!==this.pos)return--this.pos,console.log("⬅️"),this.updateControls()},this.init=function(){this.updateControls(),this.$tot.html(this.total)},this.init()}function toggleNav(){console.log("🍔"),$burgerWrapper.toggleClass(pageInfo.burger.toggled)}
// if on a detail page...
if($burgerButton.click(toggleNav),document.querySelector("body#detail")){
// Set up slideshow
var show=new Slideshow($(pageInfo.carousel.imgs));$(pageInfo.carousel.controls.fwd).click(function(){show.nextImage()}),$(pageInfo.carousel.controls.back).click(function(){show.prevImage()});
// Enable swiping
var stage=document.querySelector(pageInfo.carousel.wrapper),swipd=new Hammer(stage);swipd.on("swipeleft",function(t){show.nextImage()}).on("swiperight",function(t){show.prevImage()}),
//bind arrow keys to slideshow
$(document).keydown(function(t){switch(t.which){case 37:// left
show.prevImage();break;case 39:// right
show.nextImage();break;default:return;// exit this handler for other keys
}t.preventDefault()})}
//# sourceMappingURL=jewellnet.js.map