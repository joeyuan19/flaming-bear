/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  
function load_section(section_id) {
	return Dajaxice.derp.load(load_section_callback,{'section_id':section_id});
}

function load_section_callback(json) {
	$('#'+destination_id+'-storage').html(json.html);
}

function load_page_to_section(destination_id,origin_id) {
	if ($('#'+origin_id+' > *').length <= 0) {
		load_section(origin_id);
	}
	$('#'+destination_id).html($("#"+origin_id+"-storage").html());
}

