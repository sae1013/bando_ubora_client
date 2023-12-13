/**
 * js/front-ui.js
*/


$(document).ready(function() {
   /* *********************** 서브페이지 ON ************************ */
	setTimeout(function  () {
		$("#visual").addClass("active");
	});

	/* Toggle  */ 
	$('.submenuM').on('click', function(){
		$(this).siblings('.submenu_toggle').stop().slideToggle();
	});
});


