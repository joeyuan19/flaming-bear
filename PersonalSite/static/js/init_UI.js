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
        console.log('trying 1');
        $('*').removeClass('active');
        console.log('trying 2');
        $('#nav-'+sectionName).addClass('active');
        console.log('trying 3');
        clear_section();
        console.log('trying 4');
        load_page_to_section('page-content',sectionName);
        console.log('trying 5');
        load_cards();
        console.log('trying 6');
    } else {
        console.log('fail');
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
