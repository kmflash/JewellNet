var FEL = (function() {
    var selector = {
            menu: {
                main: '.fel.menu',
                pageMenu: '#pageMenu',
                pageSection: '.menu-page-section',
                subSection: '.menu-sub-section li a',
                burgerButton: '.fel.burger',
                burgerClose: '.fel.burger-close',
                scrollspyOffset: 100
            },
            gitFeed: {
                feedURL: 'https://bitbucket.org/sni-digital/food-fdc-main/rss?token=d99831075e4a5a51e5c6ef8784fffb0b',
                commitFeed: '#commitFeed',
                loader: '#commitFeed .loader',
                feedPoster: '.feed.poster'
            },
            page: {
                title: '.page-title',
                waypoint: '.waypoint'
            },
            clipboard: {
                copyIcon: '.fel.icon',
                copiedClass: 'copied'
            },
            unsplash: {
                apiURL: 'https://api.unsplash.com/photos/random/',
                clientId: '4a87ae39938bbb9e24193562238f38f3d094187d52935357e07ed52001d36bf4',
                collection: '160236',
                backgroundClass: '.fel-example.img, .btn-blur'
            },
            animateSpeed: 300
        },

        /**
    * Sets event handlers.
    */
        setEventHandlers = function() {
            var menu  = selector.menu,
                $menu = $( menu.main ),
                $burger = $( menu.burgerButton ),
                $burgerClose = $( menu.burgerClose );

            // burger button toggles
            $burger.on( 'click' , function() {
                $menu.addClass( 'show' );
            });

            $burgerClose.on( 'click' , function() {
                $menu.removeClass( 'show' );
            });

            // Scroll spy stuff.
            $(function() {
                var menu = selector.menu;

                $( selector.page.title ).on( 'scrollSpy:exit' , function() {
                    $( menu.main ).addClass( 'stuck' );
                }).on('scrollSpy:enter', function() {
                    $( menu.main ).removeClass( 'stuck' );
                }).scrollSpy();

                $( 'body' ).scrollSpy({target: "#pageMenu"});
            });
        },

        /**
    * Renders Git log from Bitbucket to the page.
    */
        renderGitLog = function() {
            if( !$( 'body' ).hasClass( 'home' ) ) {
                return;
            }
            // feed vars
            // see https://github.com/sdepold/jquery-rss
            feedDateFormat ='ddd HH:mm:ss',
            feedOuter = '<ol class="fel updateFeed">{entries}</ol>',
            feedInner = '<li class="fel"><h3 class="fel"><a class="fel feed title" href="{url}" target="_blank">{title}</a></h3><span class="fel feed poster">{author}</span><small class="fel feed timestamp">{date}</small></li>',
            gitFeed = selector.gitFeed;

            // initialize rss feed parser
            $(function() {
                $( gitFeed.commitFeed ).rss(gitFeed.feedURL,
                    {
                        limit: 10,
                        ssl: true,
                        layoutTemplate: feedOuter,
                        entryTemplate:  feedInner,
                        dateFormat: feedDateFormat,
                        effect: 'slideFast',
                        dateLocale: 'en',
                        onData: function(){
                            $( gitFeed.loader ).fadeOut();
                        }
                    },
                    function callback() {
                        $( gitFeed.feedPoster ).each(function(i) {
                            var $poster = $(this),
                                txt = $poster.text();
                            txt = txt.replace('noreply@bitbucket.org (','').replace(')','').replace('Yona ','Yonas ');
                            $poster.text(txt);
                            console.log(txt);
                        });
                    }
                );
            });
        },

        fetchUnsplash = function() {
            var $us = $(selector.unsplash.backgroundClass);
            if($us.length == 0) {return}; // leave if the page doesn't need any images

            console.log("Found "+$us.length+" image divs. Fetching from Unsplash");
            // add images to any divs that need images

            $.getJSON( selector.unsplash.apiURL, {
                client_id: selector.unsplash.clientId,
                collections: selector.unsplash.collection,
                w: $(window).width().toString()
            })
                .done(function( data ) {
                    $(selector.unsplash.backgroundClass).css('background-image', 'url("' + data.urls.custom + '")');
                });
        },

        setUpClipboard = function() {
        // clipboard functionality
            var clippy = new Clipboard( selector.clipboard.copyIcon );

            clippy.on('success', function(e) {
                console.log(e);

                var $dupe = $(e.trigger.firstElementChild)
                $dupe
                    .clone()
                    .appendTo(e.trigger)
                    .addClass(selector.clipboard.copiedClass)
                    .animate({
                        opacity: 0,
                        fontSize: "150px"
                    }, selector.animateSpeed, function() {
                        this.remove();
                    })
            });
        },

        setUpScrollspy = function() {
        // Adapted from "minimilistic scrollspy": https://jsfiddle.net/mekwall/up4nu/
            console.log('Starting Scrollspy...');
            // Cache selectors
            var lastId,
                subLastId,
                // The page  menu
                pageMenu = $(selector.menu.pageMenu),
                // All list items
                menuItems = $(selector.menu.pageSection),
                childMenuItems = $(selector.menu.subSection),
                // Anchors corresponding to menu items
                scrollItems = menuItems.map(function(){
                    var item = $($(this).attr("href"));
                    if (item.length) { return item; }
                });
            // Sub anchors
            subScrollItems = childMenuItems.map(function(){
                var item = $($(this).attr("href"));
                if(item.length) { return item; }
            });

            console.log('Found ' + menuItems.length + ' menu items');
            console.log('Found ' + childMenuItems.length + ' child menu items');

            // Bind click handler to menu items
            // so we can get a fancy scroll animation
            menuItems.click(function(e){
                var href = $(this).attr("href"),
                    offsetTop = href === "#" ? 0 : $(href).offset().top;
                $('html, body').stop().animate({
                    scrollTop: offsetTop
                }, selector.animateSpeed);
                e.preventDefault();
            });
            childMenuItems.click(function(e){
                var href = $(this).attr("href"),
                    offsetTop = href === "#" ? 0 : $(href).offset().top;
                $('html, body').stop().animate({
                    scrollTop: offsetTop
                }, selector.animateSpeed);
                e.preventDefault();
            });

            // Bind to scroll
            $(window).scroll(function(){
            // Get container scroll position
                var fromTop = $(this).scrollTop() + selector.menu.scrollspyOffset;

                // Get id of current scroll item
                var cur = scrollItems.map(function(){
                    if ($(this).offset().top < fromTop)
                        return this;
                });
                // Get the id of the current element
                cur = cur[cur.length-1];
                var id = cur && cur.length ? cur[0].id : "";

                if (lastId !== id) {
                    lastId = id;
                    console.log('now in #' + id);
                    // Set/remove active class
                    menuItems.parent().removeClass("active")
                        .end().filter("[href='#"+id+"']").parent().addClass("active");
                }

                // Also track submenu items
                var subCur = subScrollItems.map(function(){
                    if ($(this).offset().top < fromTop)
                        return this;
                });
                subCur = subCur[subCur.length-1];
                var subId = subCur && subCur.length ? subCur[0].id : "";

                if(subLastId !== subId) {
                    subLastId !== subId;
                    childMenuItems
                        .parent().removeClass("active")
                        .end().filter("[href='#"+subId+"']").parent().addClass("active");
                }
            });
        }

    return {
        init: function() {
            setEventHandlers();
            renderGitLog();
            fetchUnsplash();
            setUpClipboard();
            setUpScrollspy();
        }
    };
})();

$(document).ready(function(){
    // Initialize.
    FEL.init();
});

