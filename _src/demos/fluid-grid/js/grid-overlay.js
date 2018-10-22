//
// Grid Overlay v1.2
// author: David Jewell
//
// ================================= //


// The columns and gutter widths
var gutterWidth = 14;
var columnWidth = 21;

// The number of columns at each breakpoint
var smColCount = 8;
var mdColCount = 21;
var lgColCount = 28;
var xlColCount = 35;

// The minimum and maximums for each breakpoint viewport
var smViewportMin = 320;
var smViewportMax = 479;

var mdViewportMin = 768;
var mdViewportMax = 1024;

var lgViewportMin = 1025;
var lgViewportMax = 1299;

// the wrapper widths for each breakpoint
var smWrapper = 294;
var mdWrapper = 749;
var lgWrapper = 994;

// colors!
var gutterColor = "#FFCA35"; //yellow
var columnColor = "#FD4A47"; //red
var linkColor = "#FD475C";

// animation speed (in milliseconds)
var animationSpeed = 250;

// maximum width
var maxWidth = 1309;

function init(){
	insertStyles();
	addControls();
}

function insertStyles(){
	styles = '\
	.grid-overlay-controls{\
		top: 0;\
		text-align: center;\
		z-index: 10001;\
		position: fixed;\
		padding: 5px;\
		background-color: rgba(0,0,0,.5);\
	}\
	.grid-overlay-controls a, .grid-overlay-controls a.toggled:hover{\
		font-weight: bold;\
		padding: 10px '+gutterWidth+'px;\
		border: solid 2px '+linkColor+';\
		background-color: #fff;\
		display: inline-block;\
		-webkit-border-radius: 2px;\
		-moz-border-radius: 2px;\
		border-radius: 2px;\
	}\
	.grid-overlay-controls a span{\
		display: inline-block;\
		background-color: '+linkColor+';\
		width: 5px;\
		margin-right: 5px !important;\
	}\
	.grid-overlay-controls a span:last-child{\
		margin-right: 0 !important;\
	}\
	.grid-overlay-controls a.toggled span, .grid-overlay-controls a:hover span{\
		background-color: #fff;\
	}\
	.grid-overlay-controls a.toggled:hover span,.grid-overlay-controls a.toggled:hover span{\
		background-color: '+linkColor+';\
	}\
	.grid-overlay-controls a:hover, .grid-overlay-controls a.toggled{\
		background-color: '+linkColor+';\
		color: #fff !important;\
		text-decoration: none;\
		border: solid 2px #fff;\
	}\
	#grid-overlay{\
		position: fixed;\
		top: 0;\
		bottom: 0;\
		width: 100%;\
		height: 100%;\
		z-index: 10000;\
		overflow: hidden;\
		pointer-events:none;\
	}\
	#grid-overlay-wrapper{\
		width: '+(smWrapper / smViewportMin * 100)+'%;\
		margin: auto;\
		height: 100%;\
        opacity: .4;\
        position: relative;\
	}\
	#grid-overlay-wrapper > div{\
		background-color: '+columnColor+';\
		width: '+(columnWidth / smWrapper * 100)+'%;\
		margin-right: '+(gutterWidth / smWrapper * 100)+'%;\
		box-sizing: border-box;\
		display: inline-block;\
		height: 100%;\
		float: left;\
	}\
    #grid-overlay-wrapper div.col-count{\
        position: relative;\
        top: 95%;\
        text-align: center;\
        font-size: 10px;\
        font-weight: bold;\
        color: #fff;\
    }\
	#grid-overlay-wrapper .grid-outer-gutter{\
		width: '+(gutterWidth / smWrapper * 100)+'%;\
		margin-right: 0;\
		background-color: '+gutterColor+';\
	}\
	#grid-overlay-wrapper .grid-outer-gutter:last-child, #grid-overlay-wrapper .grid-sm:nth-child('+(smColCount + 1)+'){\
		margin-right: 0;\
	}\
	#grid-overlay-wrapper .grid-xl, #grid-overlay-wrapper .grid-lg, #grid-overlay-wrapper .grid-md{\
		display: none;\
	}\
	@media screen and (min-width: '+mdViewportMin+'px){\
		#grid-overlay-wrapper{\
			width: '+mdWrapper+'px;\
		}\
		#grid-overlay-wrapper .grid-md{\
			display: inline-block;\
		}\
		#grid-overlay-wrapper div, #grid-overlay-wrapper .grid-sm:nth-child('+(smColCount + 1)+'){\
			width: '+columnWidth+'px;\
			margin-right: '+gutterWidth+'px;\
		}\
		#grid-overlay-wrapper .grid-outer-gutter{\
			width: '+gutterWidth+'px;\
		}\
		#grid-overlay-wrapper .grid-outer-gutter, #grid-overlay-wrapper .grid-md:nth-child('+(mdColCount + 1)+'){\
			margin-right: 0;\
		}\
	}\
	@media screen and (min-width: '+lgViewportMin+'px){\
		#grid-overlay-wrapper{\
			width: '+lgWrapper+'px;\
		}\
		#grid-overlay-wrapper .grid-lg{\
			display: inline-block;\
		}\
		#grid-overlay-wrapper div,#grid-overlay-wrapper .grid-sm:nth-child('+(smColCount + 1)+'), #grid-overlay-wrapper .grid-md:nth-child('+(mdColCount + 1)+'){\
			width: '+columnWidth+'px;\
			margin-right: '+gutterWidth+'px;\
		}\
		#grid-overlay-wrapper .grid-outer-gutter{\
			width: '+gutterWidth+'px;\
		}\
		#grid-overlay-wrapper .grid-outer-gutter, #grid-overlay-wrapper .grid-lg:nth-child('+(lgColCount + 1)+'){\
			margin-right: 0;\
		}\
	}\
	';

	var css = document.createElement('style');
	css.setAttribute('type', 'text/css');
	css.appendChild(document.createTextNode(styles));
	$("head").append(css);
}

function addControls(){
	controls = '\
	<div class="grid-overlay-controls">\
		<a href="javascript:void();" id="toggleGridOverlay"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></a>\
	</div>\
	';
	$("body").prepend(controls);

	$('#toggleGridOverlay').click(function(){
		$(this).toggleClass('toggled');
		toggleGrid(this);
	});

	$('#toggleGridOverlay').click(); // default to ON setting
}

function toggleGrid(btn){
	if($(btn).hasClass('toggled')){ // if turning the grid 'on'
		//first check to see if the grid element exists
		if($('#grid-overlay').length == 0){
			$('body').prepend('<div id="grid-overlay"><div id="grid-overlay-wrapper"></div></div>');
			$('#grid-overlay').hide();

			$('#grid-overlay-wrapper').append('<div class="grid-outer-gutter"></div>');
			//create the correct amount of columns
			for(var i = 1; i <= xlColCount; i++){
				// additional classes that help out on breakpoints
				bps = 'grid-xl';

				if(i <= lgColCount){ bps = 'grid-lg'; }
				if(i <= mdColCount){ bps = 'grid-md'; }
				if(i <= smColCount){ bps = 'grid-sm'; }

				$('#grid-overlay-wrapper').append('<div class="grid-col-'+i+' '+bps+'"><div class="col-count">'+i+'</div></div>');

				$('#grid-overlay').fadeIn(animationSpeed);
			}
			$('#grid-overlay-wrapper').append('<div class="grid-outer-gutter"></div>');
		} else { //if the grid elements are there but not visible, show.
			$('#grid-overlay').fadeIn(animationSpeed);
		}
	} else { // if turning the grid 'off'
		$('#grid-overlay').fadeOut(animationSpeed);
	}
}

// GO!
if ( typeof( jQuery ) == 'undefined' ) {
	script = document.createElement( 'script' );
	script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	script.onLoad = init;
	document.body.appendChild(script);
}
else {
	init();
}


