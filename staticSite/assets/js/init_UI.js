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
			load_page_to_section('page-content','storage-resume');
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
			load_page_to_section('page-content','storage-about');
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
			load_page_to_section('page-content','storage-projects');
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
			load_page_to_section('page-content','storage-contact');
			load_cards();
		}
	}
);




