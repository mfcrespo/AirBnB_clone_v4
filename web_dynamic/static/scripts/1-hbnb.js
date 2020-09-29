$( document ).ready( function() {
	const amenityList = [];
	$('input[type=checkbox]').css("margin-left", "10px")
	$('input[type=checkbox]').click( function() {
		if ($(this).prop('checked')) {
			amenityList.push($(this).attr('data-name'));
			console.log(amenityList);
   		}
    	else {
			const index = amenityList.indexOf($(this).attr('data-name'));
			amenityList.splice(index, 1);
    	}
		$('.amenities h4').text(amenityList.join(', '));
	});

});
