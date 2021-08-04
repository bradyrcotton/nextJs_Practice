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

const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())("pk_test_51JK7pGETrbGppB4vCljcag9qbvqsk_test_51JK7pGETrbGppB4vx7iPRMrPtTINSOtpGBwly5Uq2XZrQVuubz8k9JrpkuKXZbP02gzeg0WJcl9ZCkbTtBlx0H3600moADVE5O04h917KYOsxF7FJztZRK8CFcVNRthV8yQauazOy7fbH9AD6v8VZZTfhyllt1T00ugpdOwTS", {
  apiVersion: '2020-08-27'
});
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price: "price_1JK8VCETrbGppB4vIFSASTEW",
      quantity: 1
    }],
    mode: 'payment',
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION-ID}`,
    cancel_url: `${req.headers.origin}/checkout`
  });
  res.status(200).json({
    seessionId: session.id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJhY3RpY2UvLi9wYWdlcy9hcGkvY2hlY2tvdXQvc2Vzc2lvbi50cyIsIndlYnBhY2s6Ly9uZXh0anMtcHJhY3RpY2UvZXh0ZXJuYWwgXCJzdHJpcGVcIiJdLCJuYW1lcyI6WyJzdHJpcGUiLCJTdHJpcGUiLCJwcm9jZXNzIiwiYXBpVmVyc2lvbiIsInJlcSIsInJlcyIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJsaW5lX2l0ZW1zIiwicHJpY2UiLCJxdWFudGl0eSIsIm1vZGUiLCJzdWNjZXNzX3VybCIsImhlYWRlcnMiLCJvcmlnaW4iLCJjYW5jZWxfdXJsIiwic3RhdHVzIiwianNvbiIsInNlZXNzaW9uSWQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHLElBQUlDLCtDQUFKLENBQVdDLHdOQUFYLEVBQTBDO0FBQ3ZEQyxZQUFVLEVBQUU7QUFEMkMsQ0FBMUMsQ0FBZjtBQUlBLCtEQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLFFBQU1DLE9BQU8sR0FBRyxNQUFNTixNQUFNLENBQUNPLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxNQUF6QixDQUFnQztBQUNwREMsd0JBQW9CLEVBQUUsQ0FBQyxNQUFELENBRDhCO0FBRXBEQyxjQUFVLEVBQUMsQ0FBQztBQUNWQyxXQUFLLEVBQUVWLGdDQURHO0FBRVZXLGNBQVEsRUFBRTtBQUZBLEtBQUQsQ0FGeUM7QUFNcERDLFFBQUksRUFBRSxTQU44QztBQU9wREMsZUFBVyxFQUFHLEdBQUVYLEdBQUcsQ0FBQ1ksT0FBSixDQUFZQyxNQUFPLDBDQVBpQjtBQVFwREMsY0FBVSxFQUFHLEdBQUVkLEdBQUcsQ0FBQ1ksT0FBSixDQUFZQyxNQUFPO0FBUmtCLEdBQWhDLENBQXRCO0FBV0FaLEtBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGNBQVUsRUFBRWYsT0FBTyxDQUFDZ0I7QUFBdEIsR0FBckI7QUFDRCxDQWJELEU7Ozs7Ozs7Ozs7O0FDUkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2NoZWNrb3V0L3Nlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5cclxuXHJcbmltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcclxuY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSwge1xyXG4gIGFwaVZlcnNpb246ICcyMDIwLTA4LTI3J1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcclxuICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcclxuICAgIGxpbmVfaXRlbXM6W3tcclxuICAgICAgcHJpY2U6IHByb2Nlc3MuZW52LlBSSUNFX0lELFxyXG4gICAgICBxdWFudGl0eTogMSxcclxuICAgIH1dLFxyXG4gICAgbW9kZTogJ3BheW1lbnQnLFxyXG4gICAgc3VjY2Vzc191cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vcmVzdWx0P3Nlc3Npb25faWQ9e0NIRUNLT1VUX1NFU1NJT04tSUR9YCxcclxuICAgIGNhbmNlbF91cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vY2hlY2tvdXRgLFxyXG5cclxuICB9KVxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2Vlc3Npb25JZDogc2Vzc2lvbi5pZCB9KVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyaXBlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9