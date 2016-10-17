"use strict";function whichTransitionEvent(){var e,i=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(void 0!==i.style[e])return n[e]}function heroVideo(){var e=".material-btn";$(".js-material-video").on("click",function(i){if(i.preventDefault(),!isAnimating){isAnimating=!0;var n=$(this),t=$(window).width(),a=$(window).height(),o=$(window).width()<768?0:8,r=$(e,n);$('<div class="material-video-container" />').appendTo("body").css({width:"100%",height:"100%",position:"fixed",top:0,left:0,overflow:"hidden","z-index":"100"});var s=$(".material-video-container");$('<div class="material-video-container__inner" />').appendTo(s).css({width:t-128,height:a-128,position:"fixed",top:64,left:64,overflow:"hidden","z-index":"100"});var l=$(".material-video-container__inner"),c=t>a?2*t:2*a,d=parseFloat(r.css("width")),m=r.offset().top-$(document).scrollTop(),p=r.offset().left-$(document).scrollLeft(),v={verticalCenter:.5*t,horizontalCenter:.5*a},h={vertical:p>v.verticalCenter,horizontal:m>v.horizontalCenter},f=0-.5*(c-a),u=0-.5*(c-t);f=h.horizontal?f+(m-v.horizontalCenter+.5*d):f-(v.horizontalCenter-m-.5*d),u=h.vertical?u+(p-v.verticalCenter+.5*d):u-(v.verticalCenter-p-.5*d);var g=d/c;r.clone().appendTo(l).css({width:c,height:c,position:"fixed",top:f,left:u-o,"box-shadow":"none",opacity:"0","-webkit-transform-origin":"50% 50%","-ms-transform-origin":"50% 50%","transform-origin":"50% 50%","-webkit-transform":"scale("+g+")","-ms-transform":"scale("+g+")",transform:"scale("+g+")"}),$('<a href="#" class="material-icons material-video-container__close"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>').appendTo(l);var w=$(".material-video-container__close");r.addClass("material-btn--last");var y=$(e,l);$("span",y).remove(),setTimeout(function(){y.css({opacity:"1"})},1),setTimeout(function(){y.css({"-webkit-transform":"scale(1)","-ms-transform":"scale(1)",transform:"scale(1)"}).addClass("material-btn--normal-transition")},100),y.one(transitionEvent,function(){l.css("background-color","#000"),w.css("opacity","1"),$('<iframe id="js-youtube-video" src="'+n.attr("data-url")+'" frameborder="0"></iframe>').appendTo(l).css({height:"100%",width:"100%"}),y.css({opacity:"0",visibility:"hidden"}),y.one(transitionEvent,function(){isAnimating=!1})})}}),$(document).on("click",".material-video-container, .material-video-container__close",function(e){if(e.preventDefault(),!isAnimating){var i=$(".material-video-container"),n=$(".material-btn--last");i.css("opacity","0"),n.removeClass("material-btn--last"),i.one(transitionEvent,function(){i.remove(),isAnimating=!1})}})}var transitionEvent=whichTransitionEvent(),isAnimating=!1;$(document).ready(function(){heroVideo(),$(".hero-carousel").each(function(){var e=$(this);e.owlCarousel({items:1,loop:!0,center:!0,margin:32,nav:!0,navText:['<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>','<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'],dots:!0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,responsiveClass:!0,responsive:{0:{items:1},768:{items:2},992:{items:4},1200:{items:4,margin:64},1600:{items:4,margin:64},2e3:{items:6,margin:64},2400:{items:7,margin:64},3200:{center:!1,loop:!1,items:8,margin:64}}})}),$(".js-mixed-messages span").typed({strings:["a filmmaker","a web developer","an evangelist","a proffesional","a videographer","an expert","a programmer","a photographer","an editor","a designer","a sportsman","a geek"],typeSpeed:20,backDelay:4e3,loop:!0,loopCount:!1})});