jQuery(document).ready(function () {

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
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#explore").offset().top
    }, 800);
  })

  jQuery('.go-to-about').click(function (event) {
    event.preventDefault()
    $('.nav-item').removeClass('active')
    $(event.target).parent('.nav-item').addClass('active')
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#explore").offset().top
    }, 800);
  })

  jQuery('.go-to-portfolio').click(function (event) {
    event.preventDefault()
    $('.nav-item').removeClass('active')
    $(event.target).parent('.nav-item').addClass('active')
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#portfolio").offset().top
    }, 800);
  })

  jQuery('.go-To-Contact-nav').click(function (event) {
    event.preventDefault()
    $('.nav-item').removeClass('active')
    $(event.target).parent('.nav-item').addClass('active')
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#contact").offset().top
    }, 800);
  })

  jQuery('.go-To-Contact').click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#contact").offset().top
    }, 800);
  })

  jQuery('.go-to-activities').click(function (event) {
    event.preventDefault()
    $('.nav-item').removeClass('active')
    $(event.target).parent('.nav-item').addClass('active')
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#activity").offset().top
    }, 800);
  })

  jQuery('.go-to-packages').click(function (event) {
    event.preventDefault()
    $('.nav-item').removeClass('active')
    $(event.target).parent('.nav-item').addClass('active')
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#packages").offset().top
    }, 800);
  })

  

  jQuery('.go-to-home').click(function (event) {
    event.preventDefault();
    $('.nav-item').removeClass('active')
    $(event.target).parent('.nav-item').addClass('active')
    jQuery('html, body').animate({ scrollTop: 0 }, 800);
  })

  jQuery('.heart').click((event) => {
    event.preventDefault();
    if ($(event.target).hasClass('like')) {
      $(event.target).removeClass('like')
      $(event.target).attr("src", "assets/img/heart.png")
    } else {
      $(event.target).addClass('like')
      $(event.target).attr("src", "assets/img/heart-full.png")
    }

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
