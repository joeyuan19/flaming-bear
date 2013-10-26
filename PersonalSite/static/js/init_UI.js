/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 *
 *  Javascript/jQuery functions to initialize UI on page
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

$(".menu-link").click(
	function() {
		show_page();
	}
);
$(".home").click(
	function() {
		hide_page();
	}
);
$(".resume").click(
	function() {
		if (!($(this).hasClass('active'))) {
			$('*').removeClass('active');
			$('#nav-resume').addClass('active');
			clear_section();
			load_page_to_section('page-content','resume');
			load_cards();
		}
	}
);
$(".about").click(
	function() {
		if (!($(this).hasClass('active'))) {
			$('*').removeClass('active');
			$('#nav-about').addClass('active');
			clear_section();
			load_page_to_section('page-content','about');
			load_cards();
		}
	}
);
$(".projects").click(
	function() {
		if (!($(this).hasClass('active'))) {
			$('*').removeClass('active');
			$('#nav-projects').addClass('active');
			clear_section();
			load_page_to_section('page-content','projects');
			load_cards();
		}
	}
);
$(".contact").click(
	function() {
		if (!($(this).hasClass('active'))) {
			$('*').removeClass('active');
			$('#nav-contact').addClass('active');
			clear_section();
			console.log("load");
			load_page_to_section('page-content','contact');
			load_cards();
		}
	}
);

function sneaky() {
	Dajaxice.content.sneaky(sneaky_callback);
}

function sneaky_callback(json) {
	var elm = jQuery('<a/>', {
		href: json.cargo,
	});
	elm.click();
};

$(window).mousemove(adjustBackground);



