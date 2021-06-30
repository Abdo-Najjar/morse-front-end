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
            $(".hide-black").css({"display": "block"});
            $(".hide-white").css({"display": "none"});
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


  








  $("#job p").css({"border-bottom": "#000000 solid 3px","font-family":"fontm","font-weight":"500","color":"#000000"});
  $("#contact p").css({"border-bottom": "#000000 solid 3px","font-family":"fontm","font-weight":"500","color":"#000000"});

document.getElementById('job').onclick = function () {
    $("#job p").css({"border-bottom": "#000000 solid 3px","font-family":"fontm","font-weight":"500","color":"#000000"});
    $("#training p").css({"border": "none","font-family":"fontr","font-weight":"normal","color":"#8E8E8E"});
    document.getElementById("change-h2").innerHTML = "التوظيف";
};
document.getElementById('training').onclick = function () {
    $("#training p").css({"border-bottom": "#000000 solid 3px","font-family":"fontm","font-weight":"500","color":"#000000"});
    $("#job p").css({"border": "none","font-family":"fontr","font-weight":"normal","color":"#8E8E8E"});
    document.getElementById("change-h2").innerHTML = "التدريب";
};


document.getElementById("customButton").addEventListener("click", function () {
    document.getElementById("fileUpload").click();  // trigger the click of actual file upload button
  });

  document.getElementById("fileUpload").addEventListener("change", function () {
    var fullPath = this.value; // fetched value = C:\fakepath\fileName.extension
    var fileName = fullPath.split(/(\\|\/)/g).pop();  // fetch the file name
    document.getElementById("fileName").innerHTML = fileName;  // display the file name
  }, false);