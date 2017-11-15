//test_xGetHTTP.js: Testing Logic.
/* These tests depend on a restful backend API to contact. */

define([
  "rsvp",
  "Models/TestSuite",
  "Functions/log",
  "Functions/xGetHTTP"
], function(
  rsvp,
  TestSuite,
  log,
  xGetHTTP
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_xGetHTTP initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "xGetHTTP" );
      
//*      
      //This test depends on there being a restful-get backend entrypoint.
      xTestSuite.add({
        "Async": true,
        "Name": "xGetHTTP_BackendURL_ResolvesBody",
        "Input": "http://fresh-ogginger550858.codeanyapp.com/home/scripts/backend/test",
        "Function": xGetHTTP,
        "ExpectedOutput": "Restful backend is working..."
      });
 //*/ 
      
//*      
      //This test depends on there not being a restful-get backend entrypoint.
      xTestSuite.add({
        "Async": true,
        "Name": "xGetHTTP_BadURL_RejectsError404",
        "Input": "http://fresh-ogginger550858.codeanyapp.com/home/scripts/backend/doesnotexist",
        "Function": function( Input ) {
          return new rsvp.Promise(function( resolve ) {
            var bTestResult = false;
            xGetHTTP( Input ).catch(function( error ) {
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