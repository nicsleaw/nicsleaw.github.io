'use strict'

// function definitions
const clearName = function ( event ) {
  let element = $( '#name' )[0];
    $( element ).val( '' );
}

const updateDonation = function ( event ) {
	let element = event.currentTarget;
    $( '#donationOutput' ).text( element.value ); 
}

const remainingChars = function ( event ) {
	let element = event.currentTarget;
    let remain = element.maxLength - element.value.length;
    $( '#remaining' ).text( remain + ' characters left' );

}

const checkForm = function ( event ) {
    event.preventDefault();
    if ( $( '#name' ).val() ) {
        event.currentTarget.submit(); }
   else {
    $( '#error' ).fadeIn();
    $( '#name' ).focus();
}}


// script initialisation
$( '#clearButton' ).on( 'click', clearName );
$( '#message' ).on( 'input', remainingChars );
$( '#newsletterForm' ).on( 'submit', checkForm );
$( '#donation' ).on( 'input', updateDonation );