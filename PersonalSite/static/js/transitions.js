/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *   Javacript functions to animate resizing of html elements
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * 
 *   - Written with jQuery, possible to modify functions if
 *     use of jQuery is not desired
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


function show_page() {
	$('#page').css('display','none');
	$('#page').css('top',0);
	$('#page').css('left',0);
	$('#page').css('width',0);
	$('#page').css('height',0);
	$('#page').css('display','block');
	toggle_page('menu',$('#content').height(),$('#content').width(),0,0);
	$('#page').animate({
		'width'  : $('#content').width() + 'px',
		'height' : $('#content').height() + 'px'
		},
		500,
		show_nav
	);
}

function show_nav() {
	$('.nav-table-col').css('display','none');
	$('#home-btn').css('display','none');
	$('#page-nav').css('display','none');
	$('#page-nav').css('width','100%');
	$('#page-nav').css('height',0);
	$('#page-nav').css('opacity',0);
	$('#page-nav').css('display','block');
	$('#page-nav').animate({
		'height':'10%',
		'opacity':1.0
	},500,show_nav_buttons);
}

function show_nav_buttons() {
	$('.nav-table-row').css('display','none');
	$('.nav-table-col').css('height','100%');
	$('.nav-table-col').css('width','48%');
	$('.nav-table-row').css('height','48%');
	$('.nav-table-row').css('width',0);
	$('.nav-table-row').css('opacity',0);
	$('#home-btn').css('opacity',0);
	$('#home-btn').css('display','block');
	$('.nav-table-row').css('display','block');
	$('.nav-table-col').css('display','block');
	$('#home-btn').animate({
		'height':'100%',
		'opacity':1.0
	},300);
	$('.nav-table-row').animate({
		'width':'100%',
		'opacity':1.0
	},500);
	$('.nav-item').each(function() {scaleFont($(this).parent());});
}

function hide_page() {
	toggle_page('menu',$('#content').height(),$('#content').width(),0,0);
	$('#page').animate({
		'height' : 0,
		'width'  : 0
	},500,function() {$('#page').css('display','none');})
	$('.nav-table-row').css('display','none');
	$('#home-btn').css('display','none');
	$('#page-nav').css('display','none');
}

function getInnerHeight(elm) {
	var children = $(elm).children(),
	sum = 0;
	for (var i = 0; i < children.length; i++ ) {
		sum += $(children[i]).height();
	}
	return sum;
	
}

function center_vert_items() {
	$('.vert-centered').each(
		function() {
			$(this).css('top',($(this).parent().height()-$(this).height())/2.0);
		}
	);
}

function resize_cards() {
	$('.section-card').each(
		function() {
			new_height = getInnerHeight($(this));
			$(this).css('height',new_height+1);
		}
	);
}

function resize_all() {
	var width  = $(window).width(),
	    height = $(window).height();
	var min_width = (height > width ? width : height);
	min_width = min_width > 500 ? min_width : 500;
	var min_height = height > 500 ? height : 500;
	$('#bg-img').css('width',width > 500 ? width : 500);
	$('#bg-img').css('height',min_height);
	$('#content').css('width', min_width);
	$('#content').css('height',min_height);
	$('#content').css('top',0);
	$('#content').css('left',(height > width ? 0 : (width - min_width)/2.0));
	$('#menu').css('top',0);
	$('#menu').css('left',0);
	$('#menu').css('width','100%');
	$('#menu').css('height','100%');
	center_vert_items();
	$('#page').css('top',0);
	$('#page').css('left',0);
	$('#page').css('width','100%');
	$('#page').css('height','100%');
	$('#page-nav').css('width','100%');
	$('#page-nav').css('height','10%');
	$('.nav-table-col').css('height','100%');
	$('.nav-table-col').css('width','48%');
	$('.nav-table-row').css('height','48%');
	$('.nav-table-row').css('width','100%');
	resize_cards();
	$('.nav-item').each(function() {scaleFont($(this).parent());});
}
function scaleFont(elm) {
	var width = elm.width(),
	    height = elm.height();
	var new_size = height*.9,
	    old_size = elm.css('font-size');
	elm.css('font-size',new_size+'px');
}

function clear_section() {
	$('#page-content').empty();
}


function load_cards() {
	$('#page-content > .section-card:first-child').each(
		function() {
			$(this).css('display','none');
			$(this).css('opacity',0);
			$(this).css('height',0);
			$(this).css('overflow','auto');
			$(this).css('display','block');
			$(this).animate(
				{
					'height': getInnerHeight($(this)),
					'opacity':1
				},
				250,
				function() {
					resize_cards();
					cascade($(this).next());
				}
			);
		}
	);
}

function cascade(elm) {
	elm.css('display','none');
	elm.css('opacity',0);
	elm.css('height',0);
	elm.css('overflow','auto');
	elm.css('display','block');
	elm.animate(
		{
			'height':getInnerHeight(elm),
			'opacity':1
		},
		300,
		function() {
			resize_cards();	
			cascade(elm.next());
		}
	);
}
function slide_menu(direction) {
	var state = $('#menu').css('display');
	var end_top, end_left;
	var end_width, end_height;
	var new_state='block';
	if (direction == 'left') {
		if (state == 'none') {
			$('#menu').css('display','block');
			end_width = $('#content').width();
			end_height = $('#content').height();
			end_top = 0;
			end_left = 0;
			$('#menu').css('top',0 + 'px');
			$('#menu').css('left',0 + 'px');
		} else {
			end_width = 0;
			end_height = $('#content').height();
			end_top = 0;
			end_left = 0;
			new_state='none';
		}
	} else if (direction == 'right') {
		if (state == 'none') {	
			$('#menu').css('display','block');
			end_width = $('#content').width();
			end_height = $('#content').height();
			end_top = 0;
			end_left = 0;
			$('#menu').css('top',0 + 'px');
			$('#menu').css('left',$('#content').width() + 'px');
		} else {
			end_width  = 0;
			end_height = $('#content').height();
			end_top    = 0;
			end_left   = $('#content').width();
			new_state  = 'none';
		}
	} else if (direction == 'top') {
		if (state == 'none') {	
			$('#menu').css('display','block');
			end_width = $('#content').width();
			end_height = $('#content').height();
			end_top = 0;
			end_left = 0;
			$('#menu').css('top',0 + 'px');
			$('#menu').css('left',0 + 'px');
			$('#menu').css('width',$('#content').width() + 'px');
			$('#menu').css('height',0 + 'px');
		} else {
			end_width = $('#content').width();
			end_height = 0;
			end_top = 0;
			end_left = 0;
			new_state='none';
		}
	} else if (direction == 'bottom') {
		if (state == 'none') {	
			$('#menu').css('display','block');
			end_width = $('#content').width();
			end_height = $('#content').height();
			end_top = 0;
			end_left = 0;
			$('#menu').css('top',$('#content').height() + 'px');
			$('#menu').css('left',0 + 'px');
		} else {
			end_width = $('#content').width();
			end_height = 0; 
			end_top = $('#content').height();
			end_left = 0;
			new_state='none';
		}
	}
	$('#menu').animate({
		width: end_width + 'px',
		height: end_height + 'px',
		top: end_top + 'px',
		left: end_left + 'px'
	},500,function hide_menu() {$('#menu').css('display',new_state);});
}


function toggle_page(id,start_top,start_left,end_top,end_left) {
	if ($('#'+id).css('display') == 'none') {
		var pos = $('#content').position();
		grow_from_point(
				id,
				start_top,
				start_left,
				end_top,
				end_left,
				$('#content').width(),
				$('#content').height(),
				500
				);
	} else {
		shrink_to_point(id,start_top,start_left,500);
	}
}


function grow_from_point(id,start_top,start_left,end_top,end_left,end_width,end_height,duration) {
	$('#'+id).css('display','block');
	$("#"+id).css('top',start_top);
	$("#"+id).css('left',start_left);
	$("#"+id).css('width',0);
	$("#"+id).css('height',0);
	$("#"+id).animate({
top: end_top + "px",
left: end_left + "px",
width: end_width + "px",
height: end_height + "px"
},duration);
}

function shrink_to_point(id,end_top,end_left,duration) {
	$("#"+id).animate({
			top: end_top  + "px",
			left: end_left + "px",
			width: "0px",
			height: "0px"
		},duration,function hide() {
			$('#'+id).css('display','none');	
	});
}

function grow_from_center(id,end_top,end_left,end_width,end_height,duration,func) {
	$("#"+id).css('top',$(window).height()/2);
	$("#"+id).css('left',$(window).width()/2);
	$("#"+id).css('width',0);
	$("#"+id).css('height',0);
	$("#"+id).animate({
		top: end_top + "px",
		left: end_left + "px",
		width: end_width + "px",
		height: end_height + "px"
	},duration,func);
}


function resize_block(id,end_width,end_height) {
	end_width  = Math.floor(end_width)  + (end_width % 5 == 0 ? 1 : 0);
	end_height = Math.floor(end_height) + (end_height % 5 == 0 ? 1 : 0);
	var height = $("#"+id).height();
	var width  = $("#"+id).width();
	var dx = end_width  - width;
	var dy = end_height - height;

	if (dx == 0 && dy == 0) { 		// No resize needed
		return;
	} else if (dx == 0) { 			// No resize for width
		dy = dy/abs(dy);
	} else if (dy == 0) {   	    // No resize for height
		dx = dx/abs(dx);
	} else if (abs(dx) > abs(dy)) { // More resizing horizontally needed than vertically
		dx = Math.round(dx/abs(dy));
		dy = dy/abs(dy);
	} else if (abs(dx) < abs(dy)) { // More resizing veritcally needed than horizontally
		dy = Math.round(dy/abs(dx))
			dx = dx/abs(dx);
	} else {						// Change is even in both directions
		dy = dy/abs(dy);
		dx = dx/abs(dx);
	}
	if (dx != 0 || dy != 0) {
		if (dx != 0) {	
			if (dx > 0 && width + dx > end_width) {			// Overshoot correct for growth
				$("#"+id).width(end_width);
			} else if (dx < 0 && width + dx < end_width) { 	// Overshoot correct for shrink
				$("#"+id).width(end_width);
			} else {
				$("#"+id).width(width + dx);
			}
			// No Change Made
			if ($("#"+id).width() == width) {
				$("#"+id).width(width+dx+(dx>0 ? 1 : -1));	
			}
		}
		if (dy != 0) {
			if (dy > 0 && height + dy > end_height) {		 // Overshoot correct for growth
				$("#"+id).height(end_height);
			} else if (dy < 0 && height + dy < end_height) { // Overshoot correct for shrink
				$("#"+id).height(end_height);
			} else {
				$("#"+id).height(height + dy);
			}
			// No Change Made
			if ($("#"+id).height() == height) {
				$("#"+id).height(height+dy+(dy>0 ? 1 : -1)) ;	
			}
		}
		setTimeout(
			function repeat() {
				resize_block(id,end_width,end_height);
			}
		,.0001);
	}
	return;
}


function move_block(id,end_top,end_left) {
	end_width  = Math.floor(end_top)  + (end_top  % 5 == 0 ? 1 : 0);
	end_height = Math.floor(end_left) + (end_left % 5 == 0 ? 1 : 0);
	var top  = $("#"+id).top();
	var left = $("#"+id).left();
	var dx = end_top  - top;
	var dy = end_left - left;

	if (dx == 0 && dy == 0) { 		// No resize needed
		return;
	} else if (dx == 0) { 			// No resize for width
		dy = dy/abs(dy);
	} else if (dy == 0) {   	    // No resize for height
		dx = dx/abs(dx);
	} else if (abs(dx) > abs(dy)) { // More resizing horizontally needed than vertically
		dx = Math.round(dx/abs(dy));
		dy = dy/abs(dy);
	} else if (abs(dx) < abs(dy)) { // More resizing veritcally needed than horizontally
		dy = Math.round(dy/abs(dx))
			dx = dx/abs(dx);
	} else {						// Change is even in both directions
		dy = dy/abs(dy);
		dx = dx/abs(dx);
	}
	if (dx != 0 || dy != 0) {
		if (dx != 0) {	
			if (dx > 0 && top + dx > end_top) {			// Overshoot correct for growth
				$("#"+id).top(end_top);
			} else if (dx < 0 && top + dx < end_top) { 	// Overshoot correct for shrink
				$("#"+id).top(end_top);
			} else {
				$("#"+id).top(top + dx);
			}
			// No Change Made
			if ($("#"+id).top() == top) {
				$("#"+id).top(top+dx+(dx>0 ? 1 : -1));	
			}
		}
		if (dy != 0) {
			if (dy > 0 && left + dy > end_left) {		 // Overshoot correct for growth
				$("#"+id).left(end_left);
			} else if (dy < 0 && left + dy < end_left) { // Overshoot correct for shrink
				$("#"+id).left(end_left);
			} else {
				$("#"+id).left(left + dy);
			}
			// No Change Made
			if ($("#"+id).left() == left) {
				$("#"+id).left(left+dy+(dy>0 ? 1 : -1)) ;	
			}
		}
		setTimeout(
				function repeat() {
				resize_block(id,end_width,end_left);
				}
				,.00001);
	}
	return;
}

function abs(n) {
	if (n >= 0) {
		return n;
	} else {
		return -n;
	}
}

function get(id) {
	return document.getElementById(id);
}



