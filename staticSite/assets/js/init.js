/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *   Initialize Page to fit browser viewport and handle initial animations
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */



window.onload=function () {
	init();
};
$(window).resize(function() {
	resize_all();
});
function init() {
	var height = $(window).height();
	var width  = $(window).width();
	var min_side = (height > width ? width : height);
	min_side = (min_side > 500 ?  min_side : 500);
	var min_height = (height > 500 ? height : 500);
	$("#content").css('top',(height > width ? (height - min_height)/2.0 : 0) + "px");
	$("#content").css('left',(height > width ? 0 : (width - min_side)/2.0)  + "px");
	$("#page").css('width',min_side);
	$("#page").css('height',min_height);
	$(".vert-centered").css('opacity',0);
	$("#content").css('display','block');
	grow_from_center("bg-img",0,0,width,min_height,500,
		function() {
			$('#bg-img').css('min-width','500px');
			$('#bg-img').css('min-height','500px');
		}
	);
	grow_from_center(
		'content',
		0,
		(height > width ? 0 : Math.round((width - min_side)/2.0)),
		min_side,
		min_height,
		1200,
		function() {
			$('.vert-centered').each(function() {
				$(this).animate({
					'top':($(this).parent().height()-$(this).height())/2.0,
					'opacity':1
				},500);
			});
			$('.menu-link').each(function() {scaleFont($(this));});
			$('.name-link').each(function() {scaleFont($(this));});
		}
	);
}



