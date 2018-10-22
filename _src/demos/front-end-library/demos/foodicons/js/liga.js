/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'add to grocery list': '&#xe600;',
            'added to grocery list': '&#xe601;',
            'arrow down': '&#xe602;',
            'arrow left': '&#xe603;',
            'arrow right': '&#xe604;',
            'arrow up': '&#xe605;',
            'burger': '&#xe606;',
            'hamburger': '&#xe606;',
            'camera': '&#xe607;',
            'check': '&#xe608;',
            'clock': '&#xe609;',
            'time': '&#xe609;',
            'close': '&#xe60a;',
            'dot': '&#xe60b;',
            'edit': '&#xe60c;',
            'pencil': '&#xe60c;',
            'email': '&#xe60d;',
            'facebook': '&#xe60e;',
            'filters': '&#xe60f;',
            'google': '&#xe610;',
            'grid': '&#xe611;',
            'grocery list': '&#xe612;',
            'heart filled': '&#xe613;',
            'heart': '&#xe614;',
            'info': '&#xe615;',
            'lightbulb': '&#xe617;',
            'list': '&#xe618;',
            'loading': '&#xe619;',
            'lock': '&#xe61a;',
            'locked': '&#xe61a;',
            'minus': '&#xe61b;',
            'down': '&#xe61c;',
            'left': '&#xe61d;',
            'back': '&#xe61d;',
            'right': '&#xe61e;',
            'forward': '&#xe61e;',
            'up': '&#xe61f;',
            'photos': '&#xe620;',
            'photo gallery': '&#xe620;',
            'pinterest': '&#xe621;',
            'play': '&#xe622;',
            'video': '&#xe622;',
            'plus': '&#xe623;',
            'print': '&#xe624;',
            'profile': '&#xe625;',
            'recipe box': '&#xe626;',
            'remove from grocery list': '&#xe627;',
            'recipe box add': '&#xe628;',
            'recipe box saved': '&#xe629;',
            'search': '&#xe62a;',
            'share': '&#xe62b;',
            'star filled': '&#xe62c;',
            'star': '&#xe62d;',
            'trash': '&#xe62e;',
            'twitter': '&#xe62f;',
            'unlock': '&#xe630;',
            'unlocked': '&#xe630;',
            'upload': '&#xe631;',
            'eye': '&#xe632;',
            'view': '&#xe632;',
            'write': '&#xe633;',
            'review': '&#xe633;',
            'map': '&#xe634;',
            'pin': '&#xe634;',
            'sale': '&#xe635;',
            'flag': '&#xe902;',
            'flag filled': '&#xe903;',
            'vellip': '&#xe901;',
            'hellip': '&#xe904;',
            'youtube': '&#xe905;',
            'warning': '&#xe900;',
            'logo full outline': '&#xe906;',
            'logo outline': '&#xe908;',
            'like': '&#xe90a;',
            'comment': '&#xe90b;',
            'all': '&#xe90c;',
            'gk bulb': '&#xe90d;',
            'question': '&#xe90e;',
            'save': '&#xe90f;',
            'sparkles': '&#xe910;',
            'fabulous': '&#xe910;',
            'yahoo': '&#xe911;',
            'following': '&#xe912;',
            'sparkles reversed': '&#xe913;',
            'tv': '&#xe914;',
            'television': '&#xe914;',
            'move': '&#xe915;',
            'move up down': '&#xe916;',
            'move right left': '&#xe917;',
            'tweak': '&#xe907;',
            'magic wand': '&#xe907;',
            'wand': '&#xe907;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-gk-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
