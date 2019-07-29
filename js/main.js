// Reroute links
// function loadPage(url) {
//   $( "#content" ).load( "/" + url + ".html", function( response, status, xhr ) {
//     if ( status == "error" ) {
//       var msg = "Sorry, page error load";
//       $( "#content" ).html( msg + xhr.status + " " + xhr.statusText );
//     }
//   });
// }

$(window).on("load",function() {
   // Fade in on scroll
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $("section").each(function() {
      var objectTop = $(this).offset().top + 100;

      if (objectTop < windowBottom) { // scrolling down
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { // scrolling up
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });

    // Add Nav BG color on scroll
    var coverHeight = $("#cover").innerHeight();
    var navHeight = $("#navbar").innerHeight();

    if (windowBottom > (coverHeight+navHeight)) {
    	$("#navbar").addClass("navbar-bg");
    } else {
    	$("#navbar").removeClass("navbar-bg");
    }

  }).scroll(); //invoke scroll-handler on page-load
});

// Smooth scrolling links
$(document).on('click', 'a[href^="#"]', function (event) {
event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// // activate Slick
// $(document).ready(function(){
//   $('.slideshow').slick({
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     adaptiveHeight: true,
//     dots: true,
//     infinite: false,
//     pauseOnFocus: true,
//     swipeToSlide: true,
//     draggable: true,
//     // fade: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//         {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       }
//     ]
//   });
// });
