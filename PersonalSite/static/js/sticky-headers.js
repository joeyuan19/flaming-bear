function check_stickies() {
	$('.sticky').each(
		function() {
			var offset = $(this).offset();
			var height = $(this).height();
			var par_offset = $(this).parent().parent().offset();
			var par_height = $(this).parent().parent().height();
			var par_par_offset = $(this).parent().parent().parent().offset();
			var par_par_height = $(this).parent().parent().parent().height();
			if (par_offset.top < par_par_offset.top-1) { 	// this sticky's section has been scrolled out of the section
				// if -> stick to bottom, else -> stick to top
				if (par_offset.top + par_height - $(this).height() <= par_par_offset.top) { 	// if this sections bottom is below the parents bottom
					$(this).css('position','fixed'); 	// reset the position type
					$(this).parent().width($(this).width()); 	// set the place-holder to the width of item
					$(this).parent().height($(this).height()); 	// also the height
					$(this).width($(this).parent().parent().width()); 	// set the width to the width of the parent
					$(this).offset({
						top:(par_offset.top+par_height-$(this).height()), // top offset to the offset of the parents bottom minus the height of the sticky
						left:par_offset.left // the left to the parents left
						});
				} else { 				// else this section should float at the border
					$(this).css('position','fixed'); // reset the position type
					$(this).parent().width($(this).width()); // set the placeholder's width and height
					$(this).parent().height($(this).height());
					$(this).width($(this).parent().parent().width()); // set the sticky's width to the size of the parent
					$(this).offset({
						top:(par_par_offset.top),   // set the top offset to the sticky-container offset 
						left:par_offset.left		// set the left offset to the parents left
					});	
				}
			} else {
				$(this).css('position','relative');  // return the position to relative
				$(this).width($(this).parent().width()); // return 
				$(this).offset({ 
					top:(par_offset.top), // the sticky should stay at the top of the section
					left:par_offset.left  // the sticky should stick to the left of the parent
				});	
			}
		}
	);
}

$(document).ready(function() {
	$(document).scroll(function() {
		check_stickies();
	});
	$('.sticky-container').scroll(function() {
		check_stickies();
	});
});



