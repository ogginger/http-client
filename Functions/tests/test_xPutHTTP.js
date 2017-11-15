//test_xPutHTTP.js: Testing Logic.

define([
  "rsvp",
  "Models/TestSuite",
  "Functions/log",
  "Functions/xPutHTTP"
], function(
  rsvp,
  TestSuite,
  log,
  xPutHTTP
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_xPutHTTP initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "xPutHTTP" );
      
//*      
      //This test depends on there being a restful-put entry on the backend.  
      xTestSuite.add({
        "Async": true,
        "Name": "xPutHTTP_backendURL_resolvesBody",
        "Input": {
          "url": "http://fresh-ogginger550858.codeanyapp.com/home/scripts/backend/test",
          "Data": JSON.stringify({ "Profile_id":1, "Username": "ogginger" })
        },
        "Function": xPutHTTP,
        "ExpectedOutput": "Restful backend is working..."
      });
//*/
      
//*      
      //This test depends on there not being a restful-put entry point.  
      xTestSuite.add({
        "Async": true,
        "Name": "xPutHTTP_URLDoesNotExist_resolvesBody",
        "Input": {
          "url": "http://fresh-ogginger550858.codeanyapp.com/home/scripts/backend/doesnotexist",
          "Data": JSON.stringify({ "Profile_id":1, "Username": "ogginger" })
        },
        "Function": function( Input ) {
          return new rsvp.Promise(function( resolve ) {
            var bTestResult = false;
            xPutHTTP( Input ).catch(function( Error ) {
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