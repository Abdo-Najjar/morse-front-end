/*!
* Start Bootstrap - Agency v7.0.4 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
//alert(document.documentElement.scrollTop)

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
            $(".hide-black").css({"display": "none"});
            $(".hide-white").css({"display": "block"});
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
            $(".hide-white").css({"display": "none"});
            $(".hide-black").css({"display": "block"});
        }
        if ($(window).width()+17<=992){
            $(".hide-black").css({"display": "none"});
            $(".hide-white").css({"display": "block"});
        }
    };
        if ($(window).width()+17<=992){
           
            $('.slick-slaider').slick({
                slidesToShow:1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                prevArrow: "<img class='slick-prev' src='assets/img/prev.png'>",
                nextArrow: "<img class='slick-next' src='assets/img/next.png'>",
            });
            $('.slick-slaider2').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                prevArrow: "<img class='slick-prev' src='assets/img/prev.png'>",
                nextArrow: "<img class='slick-next' src='assets/img/next.png'>",
        
            });
        }else if ($(window).width()+17<=1150) {

            $('.slick-slaider').slick({
                slidesToShow:3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                prevArrow: "<img class='slick-prev' src='assets/img/prev.png'>",
                nextArrow: "<img class='slick-next' src='assets/img/next.png'>",
            });
            $('.slick-slaider2').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                prevArrow: "<img class='slick-prev' src='assets/img/prev.png'>",
                nextArrow: "<img class='slick-next' src='assets/img/next.png'>",
        
            });
            
        } 
          else{
            

    $('.slick-slaider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<img class='slick-prev' src='assets/img/prev.png'>",
        nextArrow: "<img class='slick-next' src='assets/img/next.png'>",
    });

    $('.slick-slaider2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<img class='slick-prev' src='assets/img/prev.png'>",
        nextArrow: "<img class='slick-next' src='assets/img/next.png'>",

    });



        }
        

    

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


});




   
     $(".en").click(function(){
        $("body").css({"direction": "ltr"});
      });
      $(".ar").click(function(){
        $("body").css({"direction": "rtl"});
      });

 // });


  function ar() {
      
      $("body").css({"direction": "ltr"});
  }

  function en() {
      $("body").css({"direction": "default"});
  }


  