/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Functions related to ajax calls
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */



function init_content() {
	var list = new Array('about','contact','resume','projects');
	for (var i = 0; i < list.length; i++) {
		load_section(list[i]);
	}
	window.loaded = new Array();
}

function load_section(section_id) {
	return Dajaxice.content.load(load_section_callback,{'section_id':section_id});
}

function load_section_callback(json) {
	$('#'+json.destination_id+'-storage').html(json.html);
}

function load_page_to_section(destination_id,origin_id) {
	$('#'+destination_id).html($("#"+origin_id+"-storage").html());
}



