$( document ).ready( function() {
  ameniList = []
  if($( 'checkbox' ).prop( "checked" ) == true) {
     ameniList.append('data-id');
  } else($( 'checkbox' ).prop( "checked" ) == false) {
     ameniList.remove('data-id');
  }
  console.log( ameniList );

  if( ameniList is not []) {
    $( '.amenities#h4').text(ameniList);
  }
});
