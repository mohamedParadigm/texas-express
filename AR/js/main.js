jQuery.event.special.touchstart = {
        setup: function( _, ns, handle ){
            this.addEventListener("touchstart", handle, { passive: true });
        }
    }; 

(function ($) {

     "use strict";

     var carousel = function () {
         $('.home-slider').owlCarousel({
             loop: true,
             autoplay: true,
             autoplayTimeout: 14000,
             margin: 0,
             animateOut: 'fadeOut',
             animateIn: 'fadeIn',
             nav: false,
             autoplayHoverPause: false,
             items: 1,
             video: true,
             //            rtl:true,
             navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
             responsive: {
                 0: {
                     items: 1,
                     nav: false
                 },
                 600: {
                     items: 1,
                     nav: false
                 },
                 1000: {
                     items: 1,
                     nav: false
                 }
             },

         });

     };
     carousel();
     
     $('.blog-slider .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        autoplay: true,
        margin: 0,
        dots: true,
        nav: true,
        items: 1,
        smartSpeed: 750,
        navText: ['<span class="icon-angle-left"></span>', '<span class="icon-angle-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            641: {
                items: 1
            }
        }

    });
     
//     // navigation
//	var OnePageNav = function() {
//		$(".smoothscroll[href^='#'], #texas-nav ul li a[href^='#']").on('click', function(e) {
//		 	e.preventDefault();
//
//		 	var hash = this.hash,
//		 			navToggler = $('.navbar-toggler');
//		 	$('html, body').animate({
//		    scrollTop: $(hash).offset().top
//		  }, 700, 'easeInOutExpo', function(){
//		    window.location.hash = hash;
//		  });
//
//
//		  if ( navToggler.is(':visible') ) {
//		  	navToggler.click();
//		  }
//		});
//		$('body').on('activate.bs.scrollspy', function () {
//		  console.log('nice');
//		})
//	};
//	OnePageNav();
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