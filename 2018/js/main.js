$(window).on("load",function() {

    // swap logos
    $(".logo_first").on("mouseenter", function() {
        $(this).fadeToggle(300);
        $(".logo_second").delay(300).fadeToggle(300);
    });

    $(".logo_second").on("mouseleave", function() {
        $(this).fadeToggle(300);
        $(".logo_first").delay(300).fadeToggle(300);
    });
      


  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();

	  // Fade in on scroll
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

// Smooth scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


// Length of logo SVG
/*var inner = document.querySelector('#inner');
var lengthInner = inner.getTotalLength();
console.log(lengthInner);

var middle = document.querySelector('#middle');
var lengthMiddle = middle.getTotalLength();
console.log(lengthMiddle);

var outer = document.querySelector('#outer');
var lengthOuter = outer.getTotalLength();
console.log(lengthOuter);

var rect = document.querySelector('#rect');
var lengthRect = rect.getTotalLength();
console.log(lengthRect);*/