/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with jQuery, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages

        $(document).foundation(); // Foundation JavaScript

      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.





// ====================== smooth scroll anchor ================

  // jQuery(function() {
  //   jQuery('.scrolldown').click(function() {
  //     if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
  //       var target = jQuery(this.hash);
  //       target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
  //       if (target.length) {
  //         jQuery('html,body').animate({
  //           scrollTop: target.offset().top - 80
  //         }, 1000);
  //         return false;
  //       }
  //     }
  //   });
  // });

// ====================== end smooth scroll anchor ================




// ////////////  map init /////////

//   function initMap(){
//       var element = document.getElementById('map');

//       var options = {
//         zoom: 17,
//         center:{
//           lat:48.362446,
//           lng:24.417497

//         }
//       };

//       var myMap = new google.maps.Map(element, options);


//       var markers = [

//         {
//           coordinates:{
//             lat:48.362472,
//             lng:24.417497
//           },
//           // image:"assets/images/map_logo.png",
//           info:"<div class='map-window'><img src='dist/images/logo.svg'><a href='https://www.google.com.ua/maps/place/Girski/@48.3626471,24.4160722,18.5z/data=!4m5!3m4!1s0x47371967f9d4fc55:0x4451db7d5cbefe0d!8m2!3d48.3624761!4d24.4175179'><span>GIRSKI hotel&spa </span><br>Прокласти маршрут</a></div>"
//         }

//       ];



//       function addMarker(properties){
//         var marker = new google.maps.Marker({
//           position: properties.coordinates,
//           map: myMap,
//           icon:properties.image
//         });

//         if(properties.image){
//           marker.setIcon(properties.image);
//         }
//         if(properties.info){
//           marker.addListener('click',function(){
//             InfoWindow.open(myMap, marker);
//           });
//           var InfoWindow = new google.maps.InfoWindow({
//             content:properties.info
//           });
//         }
//       }
//       for(var i = 0; i < markers.length; i++){
//         addMarker(markers[i]);
//       }
//     }





jQuery(document).ready(function(){      // global document.ready



              /////////////   form success      ////////////


              // jQuery(".book_form").on('submit',function(e){
              //   jQuery(this).find('button').addClass('animate');
              //   e.preventDefault();
              //   jQuery(this).trigger("reset");
              //   setTimeout(function(){
              //     // jQuery(".book_form").hide();
              //     jQuery('.button').removeClass('animate');
              //     jQuery(".contact_us__success").addClass('active');
              //   },1000);
              //   // setTimeout(function(){
              //   //   jQuery(".contact_us__success").removeClass('active');
              //   //   // jQuery(".book_form").show();
              //   // },6000);
              // });
              // jQuery("#btn_success").click(function(){
              //   jQuery(".contact_us__success").removeClass('active');
              // })



    // if (jQuery(window).width() < 640) {
    //     jQuery('header').addClass('fixed');
    //     var mywindow = jQuery(window);
    //     var mypos = mywindow.scrollTop();
    //     mywindow.scroll(function() {
    //         if((mywindow.scrollTop() > mypos) && (mywindow.scrollTop() >1000 )){
    //             jQuery('header').removeClass('fixed');
    //             console.log(mypos)
    //         }
    //         else{
    //             jQuery('header').addClass('fixed');
    //         }
    //         mypos = mywindow.scrollTop();
    //         if (window.pageYOffset < 30) {
    //             jQuery('header').addClass('fixed');
    //             console.log(mywindow.scrollTop())
    //         }
    //     });



    // }else{
    //     jQuery("header").removeClass('fixed');
    //     jQuery(window).scroll(function() {
    //         if (jQuery(this).scrollTop() > 46){
    //             jQuery("header").addClass('fixed');
    //         }
    //         else  {
    //             jQuery("header").removeClass('fixed');
    //         }

    //     });

    // }


    // jQuery(window).resize(function() {
    //     if (jQuery(window).width() < 640){
    //           jQuery('header').addClass('fixed');
    //         var mywindow = jQuery(window);
    //         var mypos = mywindow.scrollTop();
    //         mywindow.scroll(function() {
    //             if(mywindow.scrollTop() > mypos){
    //                 jQuery('header').removeClass('fixed');

    //             }
    //             else{
    //                 jQuery('header').addClass('fixed');
    //             }
    //             mypos = mywindow.scrollTop();
    //         });
    //     }

    // });
    // jQuery(window).resize(function() {
    //     if (jQuery(window).width() > 640){
    //         jQuery(window).scroll(function() {
    //             if (jQuery(this).scrollTop() > 46){
    //                 jQuery("header").addClass('fixed');
    //             }
    //             else  {
    //                 jQuery("header").removeClass('fixed');
    //             }

    //          });
    //     }

    // });




    // SHOW AND HIDE FIXED HEADER ON MOBILE
      var oldpos = 0;
      var mywindow = jQuery(window);
      var flag_menu_opened=false;

      if (jQuery(window).width() < 640) {

        jQuery('header').addClass('fixed');
        mywindow.scroll(function() {
          var newpos=window.pageYOffset;

          if ((oldpos<newpos) && (newpos>50) && (flag_menu_opened===false)) {
            jQuery('header').removeClass('fixed');
          }
          else {
            jQuery('header').addClass('fixed');
          }
          oldpos = newpos;
        });

      } else {
        jQuery("header").removeClass('fixed');
        jQuery(window).scroll(function() {
          if (jQuery(this).scrollTop() > 46){
            jQuery("header").addClass('fixed');
          }
          else  {
            jQuery("header").removeClass('fixed');
          }

        });

      }
      // END SHOW-HIDE HEADER








    jQuery('#increase').click( function () {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number').value = value;
      } ) ;

   jQuery("#decrease").click(function () {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? value = 1 : '';
      value--;
      document.getElementById('number').value = value;
    } );

  jQuery('#increase2').click( function () {
        var value = parseInt(document.getElementById('number2').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number2').value = value;
      } ) ;

   jQuery("#decrease2").click(function () {
      var value = parseInt(document.getElementById('number2').value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? value = 1 : '';
      value--;
      document.getElementById('number2').value = value;
    } );



  jQuery('[data-triger]').click(function(){
    var collection =  jQuery(this).data('collection');
    var triger = jQuery(this).data('triger');
    jQuery('[data-collection="'+collection+'"][data-triger]').removeClass('tab-active');
    jQuery(this).addClass('tab-active');
    jQuery('[data-collection="'+collection+'"]').removeClass('active');
    jQuery('[data-collection="'+collection+'"][data-target="'+triger+'"]').addClass('active');

  });

  jQuery('.btn_f2').click(function(){
      jQuery('.form2').trigger('click');
  });
   jQuery('.btn_f1').click(function(){
      jQuery('.form1').trigger('click');
  });

	jQuery("#langSelect").niceSelect();


/////////////////   SLIDERS  /////////////////////

	jQuery("#homeSlider").slick({
		slidesToShow: 1,
		arrows:false,
        autoplaySpeed: 6000,
		speed:1000,
		// autoplay:true,
		dots:true,

		fade:true,
		dotsClass: 'slick-control',
	});

  // jQuery(".roomSlider").slick({
  //   slidesToShow: 1,
  //   arrows:true,
  //   autoplaySpeed: 6000,
  //   speed:1000,
  //   autoplay:true,
  //   dots:true,
  //   prevArrow: '<img class="room-arrow slide-prev" src="/dist/images/slide-prev.svg" alt="">',
  //   nextArrow: '<img class="room-arrow slide-next" src="/dist/images/slide-next.svg" alt="">',
  //   // fade:true,
  //   dotsClass: 'slick-control',
  //   responsive: [

  //     {
  //       breakpoint: 640,
  //       settings: {
  //          arrows:false,
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });

  // jQuery(".menuSlider").slick({
  //   slidesToShow: 1,
  //   arrows:true,
  //   autoplaySpeed: 6000,
  //   speed:1000,
  //   autoplay:true,
  //   dots:false,
  //   prevArrow: '<img class="room-arrow slide-prev" src="/dist/images/slide-prev.svg" alt="">',
  //   nextArrow: '<img class="room-arrow slide-next" src="/dist/images/slide-next.svg" alt="">',
  //   // fade:true,
  //   // dotsClass: 'slick-control',
  // });


// jQuery(".reviews-slider").slick({
//     slidesToShow: 2,
//     arrows:true,
//     autoplaySpeed: 6000,
//     speed:1000,
//     autoplay:false,
//     prevArrow: '<img class="room-arrow slide-prev" src="/dist/images/slide-prev.svg" alt="">',
//     nextArrow: '<img class="room-arrow slide-next" src="/dist/images/slide-next.svg" alt="">',
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {

//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 640,
//         settings: {

//           slidesToShow: 1
//         }
//       }
//     ]

//   });

//////////////////////////////////////////////

//     jQuery( ".book_form" ).on( "submit", function( event ) {
//   event.preventDefault();
//   console.log( jQuery(this).serialize() );
// });




   // jQuery(".h-menu").on("click","a", function (event) {

   //      event.preventDefault();
   //      var id  = jQuery(this).attr('href'),
   //          top = jQuery(id)
   //        console.log(top);
   //      jQuery('body,html').animate({scrollTop: top}, 1000);
   //       console.log(id);

   //  });
    jQuery(".h-menu").on("click","a", function (event) {

        // event.preventDefault();
            jQuery( ".icon" ).removeClass('active');
            jQuery('.nav-menu').removeClass('active');
            jQuery('body').removeClass('hiddenScroll');
            jQuery('.header__menu').removeClass('active');
            var id  = jQuery(this).attr('href');
            var blockId = id.replace(/^[^#]+/, '');
            var top = jQuery(blockId).offset().top -150;
            console.log(blockId);
            if (jQuery(blockId)) {
                event.preventDefault();
                // var top = jQuery(blockId).offset().top -150;
                jQuery('body,html').animate({scrollTop: top}, 1000);
            }
            // console.log(id);

            // console.log(blockId);

          // if (id.indexOf('#') > 0) {
          //   event.preventDefault();
          //   var blockId = id.replace(/^[^#]+/, '')

          //   var top = jQuery(blockId).offset().top -150;
          //   console.log(top)
          //   console.log("+")
          //    jQuery('body,html').animate({scrollTop: top}, 1000);
          // }


    });



  //  jQuery(window).scroll(function() {
  //    // console.log( jQuery("#menu").offset().top - jQuery(window).scrollTop())
  //   if (jQuery(this).scrollTop() > 46){
  //     jQuery("header").addClass('fixed');
  //   }
  //   else  {
  //     jQuery("header").removeClass('fixed');
  //   }


  //   // var top = jQuery("#menu").offset().top - jQuery(window).scrollTop()
  //   // console.log('top  '+jQuery("#menu").offset().top)
  //   // console.log('scroll  '+jQuery(this).scrollTop())


  // //   if (top  < 107){
  // //     jQuery("#menu").addClass('fixed');
  // //   }
  // //   else  {
  // //     // jQuery("#menu").removeClass('fixed');
  // //   }
  // //   if (jQuery(this).scrollTop()  < 307){
  // //     jQuery("#menu").removeClass('fixed');
  // //   }
  // });

    // jQuery("#menu").offset().top =100



      jQuery( ".icon" ).click(function(){
        jQuery(this).toggleClass('active');
        jQuery('.nav-menu').toggleClass('active');
        jQuery('.header__menu').toggleClass('active');
        jQuery('body').toggleClass('hiddenScroll');
        flag_menu_opened =! flag_menu_opened;
      });

      // jQuery(document).mouseup(function (e) {
      //   var container = jQuery(".nav-menu");
      //   if (container.has(e.target).length === 0){
      //      jQuery('.menu').removeClass('active');
      //     jQuery( ".icon" ).removeClass('active');
      //     jQuery('body').removeClass('hiddenScroll');
      //   }
      // });







    jQuery.fn.datepicker.language["ua"] =  {
        days: ['Неділя','Понеділок','Вівторок','Середа','Четвер','Пятниця','Суббота'],
        daysShort: ['Нед','Пон','Вів','Сер','Чет','Пят','Суб'],
        daysMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
        months: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
        monthsShort: ['Січ','Лют','Бер','Квіт','Тра','Чер','Лип','Сер','Вер','Жов','Лист','Груд'],
        today: 'Сьогодні',
        clear: 'Очистити',
        dateFormat: 'dd.mm.yyyy',
        timeFormat: 'hh:ii',
        firstDay: 1
    };


    jQuery('.datepicker-begin').datepicker({
        language: 'ua',
        autoClose:true,
        minDate: new Date(),
        onSelect: function (fd, date) {
            jQuery('.datepicker-finish').data('datepicker').update('minDate', date);
        }
    });

    jQuery('.datepicker-finish').datepicker({
        language: 'ua',
        autoClose:true,
        onSelect: function (fd, date) {
            jQuery('.datepicker-begin').data('datepicker')
                .update('maxDate', date);
        }
    });


      var dp = jQuery('.datepicker-begin').datepicker().data('datepicker');
      dp.selectDate(new Date());

      //   $( function() {
      //     var dateFormat = "mm/dd/yy",
      //       from = $( ".datepicker-begin" )
      //         .datepicker({
      //           defaultDate: "+1w",
      //           changeMonth: true,
      //           numberOfMonths: 3
      //         })
      //         .on( "change", function() {
      //           to.datepicker( "option", "minDate", getDate( this ) );
      //         }),
      //       to = $( ".datepicker-finish" ).datepicker({
      //         defaultDate: "+1w",
      //         changeMonth: true,
      //         numberOfMonths: 3
      //       })
      //       .on( "change", function() {
      //         from.datepicker( "option", "maxDate", getDate( this ) );
      //       });

      //     function getDate( element ) {
      //       var date;
      //       try {
      //         date = $.datepicker.parseDate( dateFormat, element.value );
      //       } catch( error ) {
      //         date = null;
      //       }

      //       return date;
      //     }
      //   } );
      //   $('.reveal').scroll(function(){
      //     //Store value of top of datepicker if it's not in memory already.
      //     if($('.reveal').data("dp_top") === undefined){
      //         $('.reveal').data("dp_top", parseInt($("#ui-datepicker-div").css("top")));
      //       }
      //     var scrollAmount = $('.reveal').scrollTop();
      //     $("#ui-datepicker-div").css("top", $('.reveal').data("dp_top") - scrollAmount);
      // });


});



jQuery(document).ready(function(){
 // wordpress admin panel
    jQuery('html').attr('style', 'margin-top: 0!important');
    jQuery('#wpadminbar').addClass('overflow');
    var hide;
    jQuery('#wpadminbar').on('mouseover', function(){
      setTimeout(function(){
        jQuery('#wpadminbar').removeClass('overflow');
      },1000);
      if(!jQuery('#wpadminbar').hasClass('open')){
        jQuery('#wpadminbar').addClass('open overflow');
      } else{
        clearTimeout(hide);
      }
    });
    jQuery('#wpadminbar').on('mouseleave', function(){
      hide = setTimeout(function(){
        jQuery('#wpadminbar').addClass('overflow');
        jQuery('#wpadminbar').removeClass('open');
      },2000);
    });
  // end wordpress admin panel
});






