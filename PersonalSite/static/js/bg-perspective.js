
function init(callback) {
	$('#bg').css({
		'width':$(window).width(),
		'height':$(window).height(),
	});
	callback();
}

function center() {
	var center_left, center_top;
	$('.center').each(function() {
		center_left = ($(this).parent().width() -  $(this).width())/2.0;
		center_top = ($(this).parent().height() -  $(this).height())/2.0;
		$(this).css({
			'left':center_left + 'px',
			'top':center_top + 'px',
		});
	});
	return 0;
}

function adjustBackground() {
	var topLeft, topTop;
	var middleLeft, middleTop;
	var bottomLeft, bottomTop;

	centerLeft = ($('#bottom').parent().width()  - $('#bottom').width())/2.0;
	centerTop  = ($('#bottom').parent().height() - $('#bottom').height())/2.0;
	
	topLeft = centerLeft + .1*(event.clientX - $('#top').width()/2.0);
	topTop  = centerTop  + .1*(event.clientY - $('#top').height()/2.0);
	
	middleLeft = centerLeft + .2*(event.clientX - $('#middle').width()/2.0);
	middleTop  = centerTop  + .2*(event.clientY - $('#middle').height()/2.0);

	bottomLeft = centerLeft + .05*(event.clientX - $('#middle').width()/2.0);
	bottomTop  = centerTop  + .05*(event.clientY - $('#middle').height()/2.0);

	$('#top').css({
		'top':topTop,
		'left':topLeft,
	});
	$('#middle').css({
		'top':middleTop,
		'left':middleLeft,
	});
    $('#bottom').css({
        'top':bottomTop,
        'left':bottomLeft,
    });
}

document.addEventListener('mousemove',adjustBackground);

