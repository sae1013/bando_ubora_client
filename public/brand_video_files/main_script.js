$(document).ready(function() {
	page_1 = $("#page-1").html();
	page_2 = $("#page-2").html();

	//fullpage
	fullpage_init();

});

function fullpage_init(){
	$('#fullpage').fullpage({
		licenseKey : 'B45E429B-9E374844-A8A08E87-82C18B71',
		menu : '#gnb',
		sectionsColor : ['','','','',''],
		autoScrolling : true,
		scrollBar : false,
		navigation: false,
		scrollOverflow: false,
		navigationPosition: 'right',
		showActiveTooltip: true,
		continuousVertical: false,
		responsiveWidth:1025,
		onLeave : function(origin, destination, direction){
			if(origin.index == 0){
				
			}
		},
		afterLoad: function(origin, destination, direction){
			if(destination.index == 2){
				$("#gnb > li a ").css("color","#fff");
				$(".logo img").attr("src","image/logo_w.png");
				$(".search_icon img").attr("src","image/sech_icon_w.png");
				$(".use_icon img").attr("src","image/user_icon_w.png");
				$(".nav").mouseleave(function(){
					$("#gnb > li a ").css("color","#fff");
					$(".logo img").attr("src","image/logo_w.png");
					$(".search_icon img").attr("src","image/sech_icon_w.png");
					$(".use_icon img").attr("src","image/user_icon_w.png");
				});
			}
			if(destination.index == 3){
				$("#gnb > li a ").css("color","#222");
				$(".logo img").attr("src","image/logo_b.png");
				$(".search_icon img").attr("src","image/sech_icon_b.png");
				$(".use_icon img").attr("src","image/user_icon_b.png");
				$(".nav").mouseleave(function(){
					$("#gnb > li a ").css("color","#222");
					$(".logo img").attr("src","image/logo_b.png");
					$(".search_icon img").attr("src","image/sech_icon_b.png");
					$(".use_icon img").attr("src","image/user_icon_b.png");
				});
			}
			if(destination.index == 4){
				
			}
		},
		onLeave: function(index, nextIndex, direction){
			if (nextIndex == 1){
				if ($('.visual_slider .slick-current').find('.visual_video').length > 0){
					$('.visual_slider .slick-current').find('.visual_video .visual_video_clip').get(0).play();
				}
			}          
		}
	});

	$('#scrollTop_').click(function () {
		$.fn.fullpage.moveTo(1, 1);
	});

	$(document).on('click', '.main_topbtn', function(){
	  fullpage_api.moveTo('page1');
	});

	//비주얼 슬라이더
	$(".work_slider").slick({
		autoplay: false,
		slidesToShow:1,
		arrows: true,
		infinite: true,
		dots: false,
		focusOnSelect: false,
		lazyLoad: "progressive",
		speed:600,
		autoplaySpeed:4000,
		asNavFor: '.work_slider_nav',
		pauseOnFocus:false,
        pauseOnHover:false,
		prevArrow: $('#work_prev'),
	    nextArrow: $('#work_next'),
	}).slickAnimation();

	$(".work_slider_nav").slick({
		autoplay: false,
		slidesToShow:4,
		arrows: false,
		infinite: true,
		dots: false,
		focusOnSelect: true,
		speed:600,
		autoplaySpeed:4000,
		asNavFor: '.work_slider',
	});
	
	$(".news-slider").slick({
		autoplay: true,
		slidesToShow:4,
		arrows: true,
		infinite: true,
		dots: false,
		focusOnSelect: true,
		speed:600,
		autoplaySpeed:4000,
		prevArrow: $('#comm_prev'),
	    nextArrow: $('#comm_next'),
		responsive: [
			{
			    breakpoint:976,
			    settings: {
				   slidesToShow: 3,
			    }
			},
			{
			    breakpoint:769,
			    settings: {
				   slidesToShow: 3,
				   dots: true,
				   arrows: false,
			    }
			},
			{
			    breakpoint:668,
			    settings: {
				   slidesToShow: 2,
				   dots: true,
				   arrows: false,
			    }
			},
			{
			    breakpoint:431,
			    settings: {
				   slidesToShow: 1,
				   dots: true,
				   arrows: false,
			    }
			},
		]
	})
		
	/*		
	// 메인 비주얼 슬라이더
	$(".visual_slider").slick({
		autoplay: false,
		slidesToShow:1,
		arrows: true,
		infinite: true,
		dots: false,
		focusOnSelect: false,
		//lazyLoad: "progressive",
		speed:600,
		//autoplaySpeed:4000,
		//asNavFor: '.work_slider_nav',
		//pauseOnFocus:false,
        //pauseOnHover:false,
		//prevArrow: $('#work_prev'),
	    //nextArrow: $('#work_next'),
	}).slickAnimation();
	*/
}

function fullpage2_init(){
	$('#brandpageMall').fullpage({
		scrollingSpeed:800,
		autoScrolling: true,
		verticalCentered: false,
		navigation: false,
        scrollOverflow: false,
		anchors:['home',''],
		//responsiveWidth: 1025,
		onLeave: function(index, nextIndex, direction){
			/*if(direction == "up"){
				$(".section").removeClass("down");
				$(".section").removeClass("next");
				$(".section").removeClass("prev");
				$("#brandpageMall .section:nth-child("+nextIndex+")").addClass("up");
				$("#brandpageMall .section:nth-child("+nextIndex+")").next().addClass("next up");
				$("#brandpageMall .section:nth-child("+nextIndex+")").prev().addClass("prev up");
			}else{
				$(".section").removeClass("up");
				$(".section").removeClass("next");
				$(".section").removeClass("prev");
				$("#brandpageMall .section:nth-child("+nextIndex+")").addClass("down");
				$("#brandpageMall .section:nth-child("+nextIndex+")").next().addClass("next down");
				$("#brandpageMall .section:nth-child("+nextIndex+")").prev().addClass("prev down");
			}*/

			if(index == 2){
				$("#Mall_culture .head_txt1").removeClass("an1");
				$("#Mall_culture .head_txt2").removeClass("an1");
                $("#Mall_culture .head_txt3").removeClass("an1");
			}
			if(index == 3){
                $("#papi .text h2").removeClass("an1");
				$("#papi .text h3").removeClass("an1");
				$("#papi .text h4").removeClass("an1");
				$("#papi .text p").removeClass("an1");
				$("#papi .text span").removeClass("an1");
				$("#papi .inner > span").removeClass("an1");

				$("#avan.active .avan_img > p > img").addClass("an1");
				$("#avan.active .text h2").addClass("an1");
				$("#avan.active .text h3").addClass("an1");
				$("#avan.active .text h4").addClass("an1");
				$("#avan.active .text p").addClass("an1");
			}
			if(index == 4){
                $("#avan .avan_img > p > img").removeClass("an1");
				$("#avan .text h2").removeClass("an1");
				$("#avan .text h3").removeClass("an1");
				$("#avan .text h4").removeClass("an1");
				$("#avan .text p").removeClass("an1");

				$("#avan .avan_img > p > img").addClass("an2");
				$("#avan .text h2").addClass("an2");
				$("#avan .text h3").addClass("an2");
				$("#avan .text h4").addClass("an2");
				$("#avan .text p").addClass("an2");
			}
			if(index == 4 && direction == "up"){
				$("#avan .avan_img > p > img").removeClass("an2");
				$("#avan .text h2").removeClass("an2");
				$("#avan .text h3").removeClass("an2");
				$("#avan .text h4").removeClass("an2");
				$("#avan .text p").removeClass("an2");
				$("#avan .text span").removeClass("an2");
			}
		
		},
		afterLoad:function(anchorLink,index){
			if(index == 1){
				$("#Mall_landing.active .landing_txt span").addClass("an1");
				$("#Mall_landing.active .book > img").addClass("an1");
				setTimeout(function(){
					$("#Mall_landing.active .book > p").addClass("an1");
				},1000);

				$("#Mall_culture .head_txt1").removeClass("an1");
				$("#Mall_culture .head_txt2").removeClass("an1");
                $("#Mall_culture .head_txt3").removeClass("an1");
			}
			if(index == 2){
				$("#Mall_culture.active .head_txt1").addClass("an1");
				setTimeout(function(){
					$("#Mall_culture .head_txt1").removeClass("an1");
					$("#Mall_culture.active .head_txt2").addClass("an1");
				},2500);
				setTimeout(function(){
					$("#Mall_culture .head_txt2").removeClass("an1");
					$("#Mall_culture.active .head_txt3").addClass("an1");
				},5500);
			}
			if(index == 3){
				$("#papi.active .text h2").addClass("an1");
				$("#papi.active .text h3").addClass("an1");
				$("#papi.active .text h4").addClass("an1");
				$("#papi.active .text p").addClass("an1");
				$("#papi.active .text span").addClass("an1");
				$("#papi.active .inner > span").addClass("an1");

				$("#Mall_culture .head_txt1").removeClass("an1");
				$("#Mall_culture .head_txt2").removeClass("an1");
                $("#Mall_culture .head_txt3").removeClass("an1");
			}
			if(index == 4){
				$("#avan.active .avan_img > p > img").addClass("an1");
				$("#avan.active .text h2").addClass("an1");
				$("#avan.active .text h3").addClass("an1");
				$("#avan.active .text h4").addClass("an1");
				$("#avan.active .text p").addClass("an1");
				$("#avan.active .text span").addClass("an1");
			}
		}
	});

	$('#scrollTop___').click(function () {
		$.fn.fullpage.moveTo(1, 1);
	});
    
	/*_slider*/
	$(".papi_slider").slick({
		autoplay: false,
		slidesToShow:3,
		arrows: true,
		infinite: true,
		dots: false,
		focusOnSelect: true,
		speed:600,
		autoplaySpeed:4000,
		prevArrow: $('#papi_prev'),
	    nextArrow: $('#papi_next'),
	});
	$(".avan_slider").slick({
		autoplay: false,
		slidesToShow:3,
		arrows: true,
		infinite: true,
		dots: false,
		focusOnSelect: true,
		speed:600,
		autoplaySpeed:4000,
		prevArrow: $('#avan_prev'),
	    nextArrow: $('#avan_next'),
	});
}