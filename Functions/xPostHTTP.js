//xPostHTTP.js: Functional Logic..

/*
  What is the functionality?
    1. Resolve the body if the ajax-post is successful.
    2. Reject the error if the ajax-post is unsuccessful.
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
        "type": "POST",
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