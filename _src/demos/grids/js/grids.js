$(window).bind("resize", resizeWindow);

$(document).ready(function(){
	
	// set up button toggles
	
	$('.toggle').click(function(){$(this).toggleClass('on')});
	toggleImages();
	
	$('#primary img, #superprimary img').click(function(){
		toggleEnlarge();
	})

})

var sizeRanges = new Array(); //create an array to hold all of the size ranges

//define ranges (Label, Min Size, Max Size, Fold)
var mp = new wRange('Mobile Portrait', 0, 479, 360);
var ml = new wRange('Mobile Landscape', 480, 767, 576);
var tp = new wRange('Tablet Portrait', 768, 1023, 768);
var ds = new wRange('Tablet Landscape/Desktop', 1024, 1599, 610);
var dl = new wRange('Desktop Large', 1600, Infinity, 768);

var currentRange = null;

function wRange(sNameP, sMinP, sMaxP, Fold){
	this.sName = currentRange = sNameP;
	this.sMin = sMinP;
	this.sMax = sMaxP;
	this.fold = Fold;
	
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
	
	var wwidth = $(window).width(); //get window width
	$('.layoutType .windowWidth').html(wwidth);
	
	for (i = 0; i < sizeRanges.length; i++){
		if(currentRange != sizeRanges[i].sName && wwidth >= sizeRanges[i].sMin && wwidth <= sizeRanges[i].sMax){ //apply the new range settings if applicable
			console.log('Switching to '+ sizeRanges[i].sName);
			$('.images').css('top', $('.contentWell').position().top);
			$('.layoutType .type').html(currentRange = sizeRanges[i].sName);
			
			//update fold line
			$('#foldBox').css('top', sizeRanges[i].fold);
			$('#foldBox span.foldHeight').html(sizeRanges[i].fold);
			
			//shift stuff in the DOM
			if(wwidth <= ml.sMax){ // if mobile
				$('.nav').remove().insertAfter('.rightRail');
				$('.leftRail').remove().insertAfter('.ad');
				$('#foldBox').addClass('noshow');
				break;
			} else if(wwidth >= tp.sMin && wwidth <= tp.sMax){ //if tablet p to desktop sm
				$('.nav').remove().insertAfter('.header');
				$('.rightRail').remove().insertAfter('.ad');
				$('.leftRail').remove().insertBefore('.contentWell');
				$('#foldBox').addClass('noshow');
			} else if(wwidth >= ds.sMin && wwidth <= ds.sMax){
				$('.nav').remove().insertAfter('.header');
				$('.rightRail').remove().insertAfter('.ad');
				$('.leftRail').remove().insertBefore('.contentWell');
				if($('#foldButton').hasClass('on')){$('#foldBox').removeClass('noshow')};
			} else { //otherwise it must be huge
				$('.nav').remove().insertAfter('.header');
				$('.rightRail').remove().insertAfter('.ad');
				$('.leftRail').remove().insertBefore('.contentWell');
				$('#foldBox').addClass('noshow');
			}
			
		}
	}
}

function toggleHeader(){
	$('.hdr').slideToggle('fast');
	resizeWindow();
}

function toggleFold(){
	$('#foldBox').fadeToggle('fast');
}


function toggleLR(){
	$('.leftRail').toggle();
	$('body').toggleClass('withLeft');
resizeWindow();
}

function toggleImages(){
	$('#images, .contentWell').fadeToggle('fast');
}

function toggleEnlarge(){
	$('#images #primary #p, #images #primary #superprimary').toggle();
	
}