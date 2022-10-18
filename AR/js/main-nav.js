jQuery.event.special.touchstart = {
        setup: function( _, ns, handle ){
            this.addEventListener("touchstart", handle, { passive: true });
        }
    }; 
(function ($) {
    // scroll
    var scrollWindow = function () {
        $(window).scroll(function () {
            var $w = $(this),
                    st = $w.scrollTop(),
                    navbar = $('.texas_navbar'),
                    sd = $('.js-scroll-wrap');

            if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                    navbar.addClass('scrolled');
                }
            }
            if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('scrolled sleep');
                }
            }
            if (st > 350) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }

                if (sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if (st < 350) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if (sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();
    
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').toggleClass('show')
    });
    
})(jQuery);
