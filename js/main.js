!function(i){"use strict";function t(){var e=i(window).width(),t=i("#site_header");e<992?(t.addClass("mobile-menu-hide"),i(".menu-toggle").removeClass("open"),setTimeout(function(){t.addClass("animate")},500)):t.removeClass("animate")}function a(){991<i(window).width()?i(".animated-section, .single-page-content").each(function(){i(this).perfectScrollbar()}):i(".animated-section, .single-page-content").each(function(){i(this).perfectScrollbar("destroy")})}i(function(){i("#contact_form").validator(),i("#contact_form").on("submit",function(e){if(!e.isDefaultPrevented()){return i.ajax({type:"POST",url:"contact_form/contact_form.php",data:i(this).serialize(),success:function(e){var t="alert-"+e.type,a=e.message,o='<div class="alert '+t+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+a+"</div>";t&&a&&(i("#contact_form").find(".messages").html(o),i("#contact_form")[0].reset())}}),!1}})}),i(window).on("load",function(){i(".preloader").fadeOut(800,"linear"),i(".animated-sections")[0]&&PageTransitions.init({menu:"ul.main-menu"})}).on("resize",function(){t(),i(".animated-section").each(function(){i(this).perfectScrollbar("update")}),a()}),i(document).on("ready",function(){i(".menu-toggle").on("click",function(){i("#site_header").addClass("animate"),i("#site_header").toggleClass("mobile-menu-hide"),i(".menu-toggle").toggleClass("open")}),i(".main-menu").on("click","a",function(e){t()}),i(".sidebar-toggle").on("click",function(){i("#blog-sidebar").toggleClass("open")}),i(".portfolio-grid").imagesLoaded(function(){var t,e;t=i(".portfolio-grid"),e=i(".portfolio-filters"),t&&(t.shuffle({speed:450,itemSelector:"figure"}),e.on("click",".filter",function(e){t.shuffle("update"),e.preventDefault(),i(".portfolio-filters .filter").parent().removeClass("active"),i(this).parent().addClass("active"),t.shuffle("shuffle",i(this).attr("data-group"))}))});var e=i(".blog-masonry");e.imagesLoaded(function(){e.masonry()}),a(),i(".testimonials.owl-carousel").owlCarousel({nav:!0,items:3,loop:!1,navText:!1,autoHeight:!0,margin:25,responsive:{0:{items:1},480:{items:1},768:{items:2},1200:{items:2}}}),i(".clients.owl-carousel").imagesLoaded().owlCarousel({nav:!0,items:2,loop:!1,navText:!1,margin:10,autoHeight:!0,responsive:{0:{items:2},768:{items:4},1200:{items:5}}}),i(".form-control").val("").on("focusin",function(){i(this).parent(".form-group").addClass("form-group-focus")}).on("focusout",function(){0===i(this).val().length&&i(this).parent(".form-group").removeClass("form-group-focus")}),i("body").magnificPopup({delegate:"a.lightbox",type:"image",removalDelay:300,mainClass:"mfp-fade",image:{titleSrc:"title",gallery:{enabled:!0}},iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title mfp-bottom-iframe-title"></div></div>',patterns:{youtube:{index:"youtube.com/",id:null,src:"%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}},srcAction:"iframe_src"},callbacks:{markupParse:function(e,t,a){t.title=a.el.attr("title")}}}),i("#map").googleMap({zoom:16}),i("#map").addMarker({address:"S601 Townsend Street, San Francisco, California, USA"})})}(jQuery);