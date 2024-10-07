jQuery(document).ready(function () {

  console.log('main');

  // jQuery(".owl-carousel2").owlCarousel({
  //   loop: true,
  //   center: false,
  //   margin: 20,
  //   responsiveClass: true,
  //   nav: true,
  //   responsive: {
  //     0: {
  //       items: 2,
  //       nav: false,
  //     },
  //     600: {
  //       items: 2,
  //       nav: false
  //     },
  //     1000: {
  //       items: 4,
  //       nav: true,
  //       loop: true
  //     }
  //   }
  // }
  // );

  jQuery(".owl-carousel3").owlCarousel({
    loop: true,
    center: false,
    margin: 20,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: true
      }
    }
  }
  );

  jQuery(".owl-carousel4").owlCarousel({
    loop: true,
    center: false,
    margin: 20,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 2,
        nav: true,
        loop: true
      }
    }
  }
  );

  jQuery('.button-camera').click(function () {
    console.log('test');
    // jQuery('html, body').animate({ scrollTop: 0 }, -300);
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#explore").offset().top
    }, 800);
  })

});

function myFunction(x) {
  x.classList.toggle("change");
}

/* Back top
-----------------------------------------------*/

jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 200) {
    jQuery('.go-top').fadeIn(200);
  } else {
    jQuery('.go-top').fadeOut(200);
  }
});
// Animate the scroll to top
jQuery('.go-top').click(function (event) {
  event.preventDefault();
  jQuery('html, body').animate({ scrollTop: 0 }, 300);
})
