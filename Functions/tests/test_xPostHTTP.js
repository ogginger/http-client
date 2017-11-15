//test_xPostHTTP.js: Testing Logic.

define([
  "rsvp",
  "Models/TestSuite",
  "Functions/log",
  "Functions/xPostHTTP"
], function(
  rsvp,
  TestSuite,
  log,
  xPostHTTP
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_xPostHTTP initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "xPostHTTP" );
      
      
      /* This test depends on there being a restful api at the input url for the test to work. */
//*
      xTestSuite.add({
        "Async": true,
        "Name": "xPostHTTP_BackendURL_resolvesUpdatedData",
        "Input": {
          "url": "http://fresh-ogginger550858.codeanyapp.com/home/scripts/backend/test",
          "Data": JSON.stringify({"Username":"Josh", "Name":"Joshua Tomlinson"})
        },
        "Function": xPostHTTP,
        "ExpectedOutput": "Restful backend is working..."
      });
//*/
      
      
      /* This test depends on there not being a restful api at the input url for the test to work. */
//*
      xTestSuite.add({
        "Async": true,
        "Name": "xPostHTTP_BackendURL_rejectsError404",
        "Input": {
          "url": "http://0.0.0.1",
          "Data": JSON.stringify({ "Username":"Josh", "Name": "Joshua Tomlinson" })
        },
        "Function": function( Input ) {
          return new rsvp.Promise(function( resolve ) {
            var bTestResult = false;
            xPostHTTP( Input ).catch(function() {
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