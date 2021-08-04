(function() {
var exports = {};
exports.id = "pages/api/checkout/session";
exports.ids = ["pages/api/checkout/session"];
exports.modules = {

/***/ "./pages/api/checkout/session.ts":
/*!***************************************!*\
  !*** ./pages/api/checkout/session.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ "stripe");
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);

const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27'
});
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    quantity
  } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price: process.env.PRICE_ID,
      quantity
    }],
    mode: 'payment',
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/checkout`
  });
  res.status(200).json({
    sessionId: session.id
  });
});

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/checkout/session.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJhY3RpY2UvLi9wYWdlcy9hcGkvY2hlY2tvdXQvc2Vzc2lvbi50cyIsIndlYnBhY2s6Ly9uZXh0anMtcHJhY3RpY2UvZXh0ZXJuYWwgXCJzdHJpcGVcIiJdLCJuYW1lcyI6WyJzdHJpcGUiLCJTdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJhcGlWZXJzaW9uIiwicmVxIiwicmVzIiwicXVhbnRpdHkiLCJib2R5Iiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImxpbmVfaXRlbXMiLCJwcmljZSIsIlBSSUNFX0lEIiwibW9kZSIsInN1Y2Nlc3NfdXJsIiwiaGVhZGVycyIsIm9yaWdpbiIsImNhbmNlbF91cmwiLCJzdGF0dXMiLCJqc29uIiwic2Vzc2lvbklkIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQywrQ0FBSixDQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUJBQXZCLEVBQTBDO0FBQ3ZEQyxZQUFVLEVBQUU7QUFEMkMsQ0FBMUMsQ0FBZjtBQUlBLCtEQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLFFBQU07QUFBRUM7QUFBRixNQUFlRixHQUFHLENBQUNHLElBQXpCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1WLE1BQU0sQ0FBQ1csUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLE1BQXpCLENBQWdDO0FBQ3BEQyx3QkFBb0IsRUFBRSxDQUFDLE1BQUQsQ0FEOEI7QUFFcERDLGNBQVUsRUFBQyxDQUFDO0FBQ1ZDLFdBQUssRUFBRWQsT0FBTyxDQUFDQyxHQUFSLENBQVljLFFBRFQ7QUFFVlQ7QUFGVSxLQUFELENBRnlDO0FBTXBEVSxRQUFJLEVBQUUsU0FOOEM7QUFPcERDLGVBQVcsRUFBRyxHQUFFYixHQUFHLENBQUNjLE9BQUosQ0FBWUMsTUFBTywwQ0FQaUI7QUFRcERDLGNBQVUsRUFBRyxHQUFFaEIsR0FBRyxDQUFDYyxPQUFKLENBQVlDLE1BQU87QUFSa0IsR0FBaEMsQ0FBdEI7QUFXQWQsS0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQVMsRUFBRWYsT0FBTyxDQUFDZ0I7QUFBckIsR0FBckI7QUFDRCxDQWRELEU7Ozs7Ozs7Ozs7O0FDUkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2NoZWNrb3V0L3Nlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5cclxuXHJcbmltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcclxuY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSwge1xyXG4gIGFwaVZlcnNpb246ICcyMDIwLTA4LTI3J1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGNvbnN0IHsgcXVhbnRpdHkgfSA9IHJlcS5ib2R5O1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcclxuICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcclxuICAgIGxpbmVfaXRlbXM6W3tcclxuICAgICAgcHJpY2U6IHByb2Nlc3MuZW52LlBSSUNFX0lELFxyXG4gICAgICBxdWFudGl0eSxcclxuICAgIH1dLFxyXG4gICAgbW9kZTogJ3BheW1lbnQnLFxyXG4gICAgc3VjY2Vzc191cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vcmVzdWx0P3Nlc3Npb25faWQ9e0NIRUNLT1VUX1NFU1NJT05fSUR9YCxcclxuICAgIGNhbmNlbF91cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vY2hlY2tvdXRgLFxyXG5cclxuICB9KVxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2Vzc2lvbklkOiBzZXNzaW9uLmlkIH0pXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJpcGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=