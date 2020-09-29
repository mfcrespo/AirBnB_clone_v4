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

	$.ajax({
		type: 'POST',
		url: 'http://localhost:5001/api/v1/places_search/',
		data:'{}',
		dataType: 'json',
		contentType: 'application/json',
		success: function (data) {
          for (const place of data) {
			 const _place = `<article>
			                    <div class="title_box">
				                   <h2>${place.name}</h2>
					               <div class="price_by_night">$${place.price_by_night}</div>
						        </div>
							    <div class="information">
								   <div class="max_guest">${place.max_guest} Guests</div>
	                               <div class="number_rooms">${place.number_rooms} Bedrooms</div>
		                           <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
			                    </div>
				                <div class="description">${place.description}</div>
					         </article>`;
		        $('section.places').append(_place);
			}
		}
	});


  $('button').click(() => {
    $.ajax({
      type: 'POST',
      // localhost instead of 0.0.0.0 to work on windows
      url: 'http://localhost:5001/api/v1/places_search/',
      data: JSON.stringify({ amenities: Object.keys(amenities) }),
      dataType: 'json',
      contentType: 'application/json',
      success: (data) => {
        $('SECTION.places').empty();
        for (const place of data) {
          const template = `<article>
                               <div class="title_box">
                                  <h2>${place.name}</h2>
                                  <div class="price_by_night">$${place.price_by_night}</div>
                               </div>
                               <div class="information">
                                  <div class="max_guest">${place.max_guest} Guests</div>
                                  <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                                  <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
                               </div>
                               <div class="description">${place.description}</div>
                            </article>`;
          $('SECTION.places').append(template);
        }
      }
    });
  });


});
