//http.js: Functional Logic.

requirejs([
  "Functions/xGetHTTP",
  "Functions/xPostHTTP",
  "Functions/xPutHTTP",
  "Functions/xDeleteHTTP",
], function(
  xGetHTTP,
  xPostHTTP,
  xPutHTTP,
  xDeleteHTTP
) {
  return {
    "get": xGetHTTP,
    "post": xPostHTTP,
    "put": xPutHTTP,
    "delete": xDeleteHTTP
  };
});