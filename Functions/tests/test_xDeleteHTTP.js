//test_xDeleteHTTP.js: Testing Logic.
/* These tests depend on a restful backend API to contact. */

define([
  "rsvp",
  "Models/TestSuite",
  "Functions/log",
  "Functions/xDeleteHTTP"
], function(
  rsvp,
  TestSuite,
  log,
  xDeleteHTTP
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_xDeleteHTTP initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "xDeleteHTTP" );
      
//*      
      //This test depends on there being a restful-get backend entrypoint.
      xTestSuite.add({
        "Async": true,
        "Name": "xDeleteHTTP_BackendURL_ResolvesBody",
        "Input": "http://fresh-ogginger550858.codeanyapp.com/home/scripts/backend/test",
        "Function": xDeleteHTTP,
        "ExpectedOutput": "Restful backend is working..."
      });
 //*/ 
      
//*      
      //This test depends on there not being a restful-get backend entrypoint.
      xTestSuite.add({
        "Async": true,
        "Name": "xDeleteHTTP_BadURL_RejectsError404",
        "Input": "http://fresh-ogginger550858.codeanyapp.com/home/scripts/backend/doesnotexist",
        "Function": function( Input ) {
          return new rsvp.Promise(function( resolve ) {
            var bTestResult = false;
            xDeleteHTTP( Input ).catch(function( error ) {
              bTestResult = true;
            }).finally(function() {
              resolve( bTestResult );
            }); 
          });
        },
        "ExpectedOutput": true
      });
//*/
      
      xTestSuite.test();
    }
  });
});