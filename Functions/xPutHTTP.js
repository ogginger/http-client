//xPutHTTP.js: Functional Logic.

/*
  What is the functionality?
    1. Resolve the body if the jquery ajax-put is successful.
    2. Reject the error if the jquery ajax-put throws an exception.
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
        "type": "PUT",
        "url": Input.url,
        "data": Input.Data,
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