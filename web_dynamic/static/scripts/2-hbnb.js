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

	$.ajax({
		url: 'http://localhost:5001/api/v1/status/',
		success: function (data) {
			if (data.status === 'OK') {
				$('#api_status').addClass('available');
			} else {
				$('#api_status').removeClass('available');
			}
		}
	});
});
