//xDeleteHTTP.js: Functional Logic.

/*
  What is the functionality?
    1. Resolve the body if the ajax-delete is successful.
    2. Reject the error if the ajax-delete is unsuccessful.
*/

define([
  "jquery",
  "rsvp" 
], function( 
  $,
  rsvp
) {
  return function( Input ) {
    return new rsvp.Promise(function( resolve, reject ) {
      $.ajax({
        "type": "DELETE",
        "url": Input,
        "success": function( Body ) {
          resolve( Body );
        },
        "error": function( Response ) {
          reject( Response );
        }
      });
    });
  };
});