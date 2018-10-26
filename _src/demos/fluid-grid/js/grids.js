$(window).bind("resize", resizeWindow);

$(document).ready(function(){
	
	// set up button toggles
	$('.toggle').click(function(){$(this).toggleClass('on')});

})

var sizeRanges = new Array(); //create an array to hold all of the size ranges

//define ranges (Label, Min Size, Max Size, Fold)
var sm = new wRange('Small', 0, 767, 480, 8);
var md = new wRange('Medium', 768, 1023, 1024, 21);
var lg = new wRange('Large', 1025, 1299, 545, 28);
var dl = new wRange('X-Large', 1300, Infinity, 768, 35);

var currentRange = null;

function wRange(sNameP, sMinP, sMaxP, Fold, Columns){
	this.sName = sNameP;
	this.sMin = sMinP;
	this.sMax = sMaxP;
	this.fold = Fold;
	this.columns = Columns
		
	sizeRanges.push(this);
	
}

function resizeWindow( e ) {
	$('.col').each(function(){
		$(this).children('span').html($(this).width());
	});
	
	//update width readouts for site/content widths
	$('.wrapWidth span').html($('.wrapWidth').width() + "px");
	$('.contentWidth span').html($('.contentWidth').width() + "px");
	$('.outerGutterWidth').html($('.outerGutterWidth').width());
	$('.innerGutterWidth').html($('.innerGutterWidth').width());
	$('.columnWidth').html($('.columnWidth').width());
	
	$('#gridDivs div span').each(function(){
		$(this).html(Math.round($(this).width()));
	})
	
	var wwidth = $(window).width(); //get window width
	$('.layoutType .windowWidth').html(wwidth);

	for (i = 0; i < sizeRanges.length; i++){
		if(currentRange != sizeRanges[i].sName && wwidth >= sizeRanges[i].sMin && wwidth <= sizeRanges[i].sMax){ //apply the new range settings if applicable
			console.log('Switching to '+ sizeRanges[i].sName);
			$('.layoutType .type').html(currentRange = sizeRanges[i].sName);
			$('body').removeClass().addClass(currentRange);
			
			//update fold line
			$('#foldBox').css('top', sizeRanges[i].fold);
			$('#foldBox span.foldHeight').html(sizeRanges[i].fold);

			//update column and tile numbers
			updateColNumbers(sizeRanges[i].columns);

			//shift stuff in the DOM
			// --- SMALL ---
			if($('body').hasClass('Small')){
				$('.ad-native').remove().insertAfter('.contentTile:nth-child(1)');
				$('.ad').remove().insertAfter('.contentTile:nth-child(6)');
				$('.last').hide();
			}

			// --- MEDIUM ---
			if($('body').hasClass('Medium')){
				$('.ad-native').remove().insertAfter('.contentTile:nth-child(2)');
				$('.ad').remove().insertAfter('.contentTile:nth-child(7)');
				$('.last').hide();
			}

			// --- LARGE --- 
			if($('body').hasClass('Large')){
				$('.ad-native').remove().insertAfter('.contentTile:nth-child(3)');
				$('.ad').remove().insertAfter('.contentTile:nth-child(8)');
				$('.last').show();
			}

			// --- EXTRA LARGE --- 
			if($('body').hasClass('X-Large')){
				$('.ad-native').remove().insertAfter('.contentTile:nth-child(4)');
				$('.ad').remove().insertAfter('.contentTile:nth-child(8)');
				$('.last').hide();
			}
		
			updateTileNumbers();

		}
	}
}

function updateColNumbers(c){
	$('#colNumbers h3').remove();
	for (i = 1; i < c + 1; i++){
		$('#colNumbers').append('<h3>'+i+'</h3>');
	}


}

function toggleHeader(){
	$('.hdr').slideToggle('fast');
	resizeWindow();
}

function toggleFold(){
	$('#foldBox').fadeToggle('fast');
}

function toggleGridDivs(){
	$('#gridDivs, #ngd').fadeToggle('fast');
	resizeWindow();
}
function lockGrid(){
	$('#wrapper').toggleClass('locked');
	resizeWindow();
}

function updateTileNumbers(){
	$(".tileNumber").remove(); //remove any previously set tile numbers
	$('.contentTile').each(function(id){ // add a tile number to each of the tiles
		$(this).prepend("<h4 class='tileNumber'>" + (id + 1) + "</h4>");
	});
}