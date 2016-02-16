function main() {
  (function () {
     'use strict';
    
     // Top 项目点击事件
    	$('a.page-scroll').click(function(){
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            // console.log(target);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top - 40
              }, 900);
              return false;
            }
          }
      });
      // 页面载入  我的恩师
    	// $(document).ready(function(){
    	//     $("#testimonial").owlCarousel({
     //      navigation : false, // 显示下一个和上一页按钮
     //      slideSpeed : 300,
     //      paginationSpeed : 400,
     //      singleItem:true
     //      });
    	// });
    $(document).ready(function() {
      var owl = $("#owl-demo");
      owl.owlCarousel({
          items : 3, //10 items above 1000px browser width
          lazyLoad : true, //load ratting
          itemsDesktop : [1000,5], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,3], // betweem 900px and 601px
          itemsTablet: [600,2], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });
      owl.trigger('owl.play',1000);
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
      $(".play").click(function(){
        owl.trigger('owl.play',1000);//owl.play event accept autoPlay speed as second parameter
      })
      $(".stop").click(function(){
        owl.trigger('owl.stop');
      })
     
    });
  	
  	// affix the navbar after scroll below header
  $('#nav').affix({
        offset: {
          top: $('header').height()
        }
  });	

  	// skills chart
  	$(document).ready(function(e) {
  	//var windowBottom = $(window).height();
  	var index=0;
  	$(document).scroll(function(){
  		var top = $('#skills').height()-$(window).scrollTop();
  		if(top<-1000){
  			if(index==0){	
  				$('.chart').easyPieChart({
  					easing: 'easeOutBounce',
  					onStep: function(from, to, percent) {
  						$(this.el).find('.percent').text(Math.round(percent));
  					}
  				});
  			
  				}
  			index++;
  		}
  	})
  	//console.log(nagativeValue)
  	});


    	// Portfolio isotope filter
      $(window).load(function() {
          var $container = $('.portfolio-items');
          $container.isotope({
              filter: '*',
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
          });
          $('.cat a').click(function() {
              $('.cat .active').removeClass('active');
              $(this).addClass('active');
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
  	// counterUp
  	$(document).ready(function( $ ) {
  		if($("span.count").length > 0){	
  			$('span.count').counterUp({
  					delay: 10, // the delay time in ms
  			time: 1000 // the speed time in ms
  			});
  		}
  	});

    // Pretty Photo
  	$("a[rel^='prettyPhoto']").prettyPhoto({
  		social_tools: false
  	});	

  }());

}
main();