/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 *
 *  Javascript/jQuery functions to initialize UI on page
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


function init() {
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
	$(".resume").each(function() {
        $(this).click(function() {
            switchSections('resume');
        });
	});
	$(".about").each(function() {
        $(this).click(function() {
            switchSections('about');
        });
	});
	$(".projects").each(function() {
        $(this).click(function() {
            switchSections('projects');
        });
        console.log('added to ' + $(this).attr('id'));
    });
	$(".contact").each(function() {
        $(this).click(function() {
            switchSections('contact');
        });
	});
	$("#mail-icon").click(thisFunctionWillEmailMe);
	$("#phone-icon").click(thisFunctionWillCallMe);	
}
function switchSections(sectionName) {
    console.log("Attempt to move to " + sectionName);
    if (!($('#nav-'+sectionName).hasClass('active'))) {
        $('*').removeClass('active');
        $('#nav-'+sectionName).addClass('active');
        clear_section();
        load_page_to_section('page-content',sectionName);
        load_cards();
    }
}
function load_page_to_section(destination_id,origin_id) {
	$('#'+destination_id).html($("#"+origin_id+"-storage").html());
}
function thisFunctionWillEmailMe() {
	return Dajaxice.content.thisFunctionWillEmailMe(thisFunctionWillEmailMe_callback);
}

function thisFunctionWillEmailMe_callback(json) {
	if (json.call_status) {
		window.location = json.cargo;
	}
};

function thisFunctionWillCallMe() {
	return Dajaxice.content.thisFunctionWillCallMe(thisFunctionWillCallMe_callback);
}

function thisFunctionWillCallMe_callback(json) {
	if (json.call_status) {
		window.location = json.cargo;
	}
};

$(window).ready(init);
