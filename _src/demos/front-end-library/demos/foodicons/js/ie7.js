/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Foodicons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-gk-add-to-grocery-list': '&#xe600;',
		'icon-gk-added-to-grocery-list': '&#xe601;',
		'icon-gk-arrow-down': '&#xe602;',
		'icon-gk-arrow-left': '&#xe603;',
		'icon-gk-arrow-right': '&#xe604;',
		'icon-gk-arrow-up': '&#xe605;',
		'icon-gk-burger': '&#xe606;',
		'icon-gk-camera': '&#xe607;',
		'icon-gk-check': '&#xe608;',
		'icon-gk-clock': '&#xe609;',
		'icon-gk-close': '&#xe60a;',
		'icon-gk-dot': '&#xe60b;',
		'icon-gk-edit': '&#xe60c;',
		'icon-gk-email': '&#xe60d;',
		'icon-gk-facebook': '&#xe60e;',
		'icon-gk-filters': '&#xe60f;',
		'icon-gk-google': '&#xe610;',
		'icon-gk-grid-view': '&#xe611;',
		'icon-gk-grocery-list': '&#xe612;',
		'icon-gk-heart-filled': '&#xe613;',
		'icon-gk-heart-outline': '&#xe614;',
		'icon-gk-info': '&#xe615;',
		'icon-gk-instagram': '&#xe616;',
		'icon-gk-lightbulb': '&#xe617;',
		'icon-gk-list-view': '&#xe618;',
		'icon-gk-loading': '&#xe619;',
		'icon-gk-lock': '&#xe61a;',
		'icon-gk-minus': '&#xe61b;',
		'icon-gk-navigate-down': '&#xe61c;',
		'icon-gk-navigate-left': '&#xe61d;',
		'icon-gk-navigate-right': '&#xe61e;',
		'icon-gk-navigate-up': '&#xe61f;',
		'icon-gk-photo-gallery': '&#xe620;',
		'icon-gk-pinterest': '&#xe621;',
		'icon-gk-play': '&#xe622;',
		'icon-gk-plus': '&#xe623;',
		'icon-gk-print': '&#xe624;',
		'icon-gk-profile': '&#xe625;',
		'icon-gk-recipe-box': '&#xe626;',
		'icon-gk-remove-from-grocery-list': '&#xe627;',
		'icon-gk-save-to-recipe-box': '&#xe628;',
		'icon-gk-saved-to-recipe-box': '&#xe629;',
		'icon-gk-search': '&#xe62a;',
		'icon-gk-share': '&#xe62b;',
		'icon-gk-star-filled': '&#xe62c;',
		'icon-gk-star-outline': '&#xe62d;',
		'icon-gk-trash': '&#xe62e;',
		'icon-gk-twitter': '&#xe62f;',
		'icon-gk-unlock': '&#xe630;',
		'icon-gk-upload': '&#xe631;',
		'icon-gk-view': '&#xe632;',
		'icon-gk-write-a-review': '&#xe633;',
		'icon-gk-map-pin': '&#xe634;',
		'icon-gk-sale-tag': '&#xe635;',
		'icon-gk-flag': '&#xe902;',
		'icon-gk-flag-filled': '&#xe903;',
		'icon-gk-ellipsis-vertical': '&#xe901;',
		'icon-gk-ellipsis-horizontal': '&#xe904;',
		'icon-gk-youtube': '&#xe905;',
		'icon-gk-warning': '&#xe900;',
		'icon-gk-logo': '&#xe906;',
		'icon-gk-logo-mark': '&#xe908;',
		'icon-gk-like': '&#xe90a;',
		'icon-gk-comment': '&#xe90b;',
		'icon-gk-all': '&#xe90c;',
		'icon-gk-genius-bulb': '&#xe90d;',
		'icon-gk-question': '&#xe90e;',
		'icon-gk-save': '&#xe90f;',
		'icon-gk-sparkles': '&#xe910;',
		'icon-gk-yahoo': '&#xe911;',
		'icon-gk-following': '&#xe912;',
		'icon-gk-sparkles-rev': '&#xe913;',
		'icon-gk-tv': '&#xe914;',
		'icon-gk-move': '&#xe915;',
		'icon-gk-move-up-down': '&#xe916;',
		'icon-gk-move-right-left': '&#xe917;',
		'icon-gk-save-filled': '&#xe918;',
		'icon-gk-tweak': '&#xe907;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-gk-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
