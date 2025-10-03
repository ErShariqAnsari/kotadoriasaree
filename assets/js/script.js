//Loader
var win_width = $(window).width();
$(window).on('load', function() {
  setTimeout(removeLoader, 1000); //wait for page load PLUS two seconds.
});

function removeLoader() {
  $("#loadingDiv").fadeOut(500, function() {
    // fadeOut complete. Remove the loading div
    $("#loadingDiv").remove(); //makes page more lightweight 
    $('body').removeClass('loaded');
  });
}
$(window).on('load', function() {
  //alert('window laod');
  var win_height = $(window).height();
  var header_height = $('header').outerHeight();
  var footer_height = $('footer').outerHeight();
  $('.main').css('min-height', win_height - header_height - footer_height);
  // Filter isotop Gallery js
  var $container = $('.portfolioContainer');
  $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });
  $('.portfolioFilter a').click(function() {
    $('.portfolioFilter .current').removeClass('current');
    $(this).addClass('current');
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });
});
$(document).ready(function() {
  //$('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
  // Scroll Event
  var winwidth = jQuery(window).width();
  var menu_h = $('.kds-header').outerHeight();
  var nav_menu_h = $('.nav_menu').outerHeight();
  var onepage_header = $('.onepage-header').outerHeight();
  //$('.afterheader').css('height',menu_h);
  $(window).scroll(function() {
    var winscroll = $(window).scrollTop();
    var menu_pos = $('.menu-header-pos').offset().top;
    if (winscroll > menu_pos || winscroll > onepage_header) {
      $('.onepage-header').addClass('bg-white shadow scrolltigger');
      $('.kds-header').addClass('shadow header-scroll');
      $('.afterheader').css('padding-top', 0)
    } else {
      $('.kds-header').removeClass('shadow header-scroll');
      $('.onepage-header').removeClass('bg-white shadow scrolltigger');
      $('.afterheader').css('padding-top', 0)
    }
    if (winwidth < 768) {
      if (winscroll > 40) {
        $('.onepage-header').addClass('bg-white shadow');
      } else {
        $('.onepage-header').removeClass('bg-white shadow');
      }
    }
  });
  /*Menu Scroll js*/
  $(".munenav>li>a").click(function() {
    $(".hamburgermenu").toggleClass("open");
    $(".fullmenu").toggleClass("d-flex");
  });
  /*Menu Icon js*/
  $(".hamburgermenu").click(function() {
    $(this).toggleClass("open");
    $(".fullmenu").toggleClass("d-flex");
  });
  //alert('document laod');
  $(".menu-bar>a").click(function() {
    $(".kds-header").toggleClass("mobile-nav");
  });
  jQuery('.dropdown-menu.keep-open').on('click', function(e) {
    e.stopPropagation();
  });
  $('#testimonial-slider').owlCarousel({
    items: 1,
    loop: true,
    // responsiveClass:true,
    nav: true,
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    smartSpeed: 450,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: true
  });
  $('#companies-slider').owlCarousel({
    items: 6,
    loop: true,
    // responsiveClass:true,
    nav: true,
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    smartSpeed: 450,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: true
  });
  $('.loopwithcenter').owlCarousel({
    center: true,
    items: 1,
    autoplay: true,
    loop: true,
    margin: 10,
    nav: false,
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    responsive: {
      600: {
        items: 1
      }
    }
  });
  $('.featured_product .woocommerce ul.products').addClass('owl-carousel owl-theme');
  $('.featured_product .woocommerce ul.products').owlCarousel({
    //center: true,
    items: 2,
    autoplay: true,
    loop: true,
    margin: 30,
    nav: false,
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    responsive: {
      1200: {
        items: 4
      }
    }
  });
  $('.related.products ul.products').addClass('owl-carousel owl-theme');
  $('.related.products ul.products').owlCarousel({
    //center: true,
    items: 2,
    autoplay: true,
    loop: true,
    margin: 30,
    nav: false,
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    responsive: {
      1200: {
        items: 4
      }
    }
  });
  $('#shop-slider').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    loop: true,
    mouseDrag: true,
    dots: false,
    // responsiveClass:true,
    nav: false,
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    smartSpeed: 2000,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: true
  });
  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated fadeIn', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();
  // if(win_width>=768){
  // var myFullpage = new fullpage('#fullpage', {
  //     verticalCentered: false,
  //     licenseKey: 'null',
  //     scrollBar: true
  // });
  // }
  jQuery(".action-btn .fp-next").click(function() {
    jQuery(".fp-controlArrow.fp-next").trigger('click');
  });
  jQuery(".action-btn .fp-prev").click(function() {
    jQuery(".fp-controlArrow.fp-prev").trigger('click');
  });
  $('#enter-text').keyup(function() {
    $('.typed-text').text($(this).val());
  });
  var check_fill_clr = $('input:radio[name=radio-clr]:checked').attr('fill');
  if (check_fill_clr == 'red') {
    $('.img-clr svg path').attr('fill', check_fill_clr);
  }
  $("input[name$='radio-clr']").click(function() {
    var fill_clr = $(this).attr('fill');
    $('.img-clr svg path').attr('fill', fill_clr);
    //alert(fill_clr);    
  });
  $(".select-img li a").click(function() {
    $(this).parent('li').addClass('active');
    $(this).parent('li').siblings().removeClass('active');
    var img_src = $(this).find('img').attr('src');
    $('.img-clr img').attr('src', img_src);
  });
  /* 

  * Smooth Scroll on Pageload

  */
  // Add smooth scrolling to all links
  $("a[href='#section1']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  // Modal close when click on close
  $("#VideoModal").on('hidden.bs.modal', function(e) {
    $("#VideoModal iframe").attr("src", $("#VideoModal iframe").attr("src"));
  });
  // Carousel logo change on dark screen
  $("#kdsslider").on('slide.bs.carousel', function(event) {
    if (event.to > 0) {
      $('.onepage-header').addClass('slide_index_greater0');
    } else {
      $('.onepage-header').removeClass('slide_index_greater0');
    }
  });
  // Woocommerce JS
  $(".search_icon, .search-close").on('click', function() {
    $('.product-search-form_mobile').toggleClass('mobile-search');
    $('.search-field').focus();
  });
  $('.product-search-form button').html('<i class="ti-search"></i>');
  
  
  
// Data fill in contact form 7

var ordrnum_detail = jQuery('#order_num').text();
var ordrprod_detail = jQuery('#order_prods').text();
var ordrname_detail = jQuery('#order_name').text();

if (ordrprod_detail.indexOf(',')) { 
var prodresult = ordrprod_detail.split(',') 
}
console.log(prodresult);

jQuery('#ordname').val(ordrname_detail);
jQuery('#ordrnum').val(ordrnum_detail);

var i, products, getresult;

getresult = "";
for (i = 0; i < prodresult.length; i++) {
  getresult += '<div class="custom-control custom-checkbox mb-10">';
  getresult += '<input type="checkbox" class="custom-control-input" id="customCheck'+ i +'" name="example1" value="'+prodresult[i]+'">';
  getresult += '<label class="custom-control-label" for="customCheck'+ i +'">'+prodresult[i]+'</label>';
  getresult += "</div>";
}

$("#prodlist").html(getresult);
console.log(getresult);


$(".custom-checkbox input[type='checkbox']").click(function(){
    var favorite = [];
    $.each($("input[name='example1']:checked"), function(){            
        favorite.push($(this).val());
    });
    $("#ordrprod").val(favorite.join(", "));
  
});
  
  
  // Search
  // setTimeout(function(){
  //   $(".search-field").on("keyup", function() {
  //     if($('.search-field').val().length == 0){
  //       $(".search-data").hide();
  //     }
  //     else{
  //       $(".search-data").show();
  //       var value = $(this).val().toLowerCase();  
  //       $(".search-data ul.search_result li").filter(function() {
  //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  //       });
  //     }
  //   });
  //   console.log('run');
  // },1000);
  /*===================================*

    *===================================*/
  // $( window ).on( "load", function() {
  //   document.onkeydown = function(e) {
  //     if(e.keyCode == 123) {
  //      return false;
  //     }
  //     if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
  //      return false;
  //     }
  //     if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
  //      return false;
  //     }
  //     if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
  //      return false;
  //     }
  //     if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
  //      return false;
  //     }      
  //    };
  //     $("html").on("contextmenu",function(){
  //       return false;
  //     });
  // });
  
  // Timer
  // function getTimeRemaining(endtime) {
  //   const total = Date.parse(endtime) - Date.parse(new Date());
  //   const seconds = Math.floor((total / 1000) % 60);
  //   const minutes = Math.floor((total / 1000 / 60) % 60);
  //   const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  //   const days = Math.floor(total / (1000 * 60 * 60 * 24));
  //   return {
  //     total,
  //     days,
  //     hours,
  //     minutes,
  //     seconds
  //   };
  // }

  // function initializeClock(id, endtime) {
  //   const clock = document.getElementById(id);
  //   const daysSpan = clock.querySelector('.days');
  //   const hoursSpan = clock.querySelector('.hours');
  //   const minutesSpan = clock.querySelector('.minutes');
  //   const secondsSpan = clock.querySelector('.seconds');

  //   function updateClock() {
  //     const t = getTimeRemaining(endtime);
  //     daysSpan.innerHTML = t.days;
  //     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  //     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  //     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  //     if (t.total <= 0) {
  //       clearInterval(timeinterval);
  //     }
  //   }
  //   updateClock();
  //   const timeinterval = setInterval(updateClock, 1000);
  // }
  // const deadline = '30 oct 2020';
  // initializeClock('clockdiv', deadline);
});