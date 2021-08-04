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

const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())("sk_test_51JK7pGETrbGppB4vx7iPRMrPtTINSOtpGBwly5Uq2XZrQVuubz8k9JrpkuKXZbP02gzeg0WJcl9ZCkbTtBlx0H3600moADVE5O", {
  apiVersion: '2020-08-27'
});
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    quantity
  } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price: "price_1JK8VCETrbGppB4vIFSASTEW",
      quantity: 1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJhY3RpY2UvLi9wYWdlcy9hcGkvY2hlY2tvdXQvc2Vzc2lvbi50cyIsIndlYnBhY2s6Ly9uZXh0anMtcHJhY3RpY2UvZXh0ZXJuYWwgXCJzdHJpcGVcIiJdLCJuYW1lcyI6WyJzdHJpcGUiLCJTdHJpcGUiLCJwcm9jZXNzIiwiYXBpVmVyc2lvbiIsInJlcSIsInJlcyIsInF1YW50aXR5IiwiYm9keSIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJsaW5lX2l0ZW1zIiwicHJpY2UiLCJtb2RlIiwic3VjY2Vzc191cmwiLCJoZWFkZXJzIiwib3JpZ2luIiwiY2FuY2VsX3VybCIsInN0YXR1cyIsImpzb24iLCJzZXNzaW9uSWQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHLElBQUlDLCtDQUFKLENBQVdDLDZHQUFYLEVBQTBDO0FBQ3ZEQyxZQUFVLEVBQUU7QUFEMkMsQ0FBMUMsQ0FBZjtBQUlBLCtEQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLFFBQU07QUFBRUM7QUFBRixNQUFlRixHQUFHLENBQUNHLElBQXpCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1SLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLE1BQXpCLENBQWdDO0FBQ3BEQyx3QkFBb0IsRUFBRSxDQUFDLE1BQUQsQ0FEOEI7QUFFcERDLGNBQVUsRUFBQyxDQUFDO0FBQ1ZDLFdBQUssRUFBRVosZ0NBREc7QUFFVkksY0FBUSxFQUFFO0FBRkEsS0FBRCxDQUZ5QztBQU1wRFMsUUFBSSxFQUFFLFNBTjhDO0FBT3BEQyxlQUFXLEVBQUcsR0FBRVosR0FBRyxDQUFDYSxPQUFKLENBQVlDLE1BQU8sMENBUGlCO0FBUXBEQyxjQUFVLEVBQUcsR0FBRWYsR0FBRyxDQUFDYSxPQUFKLENBQVlDLE1BQU87QUFSa0IsR0FBaEMsQ0FBdEI7QUFXQWIsS0FBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBUyxFQUFFZCxPQUFPLENBQUNlO0FBQXJCLEdBQXJCO0FBQ0QsQ0FkRCxFOzs7Ozs7Ozs7OztBQ1JBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9jaGVja291dC9zZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuXHJcblxyXG5pbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XHJcbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVksIHtcclxuICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNydcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCB7IHF1YW50aXR5IH0gPSByZXEuYm9keTtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XHJcbiAgICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXHJcbiAgICBsaW5lX2l0ZW1zOlt7XHJcbiAgICAgIHByaWNlOiBwcm9jZXNzLmVudi5QUklDRV9JRCxcclxuICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICB9XSxcclxuICAgIG1vZGU6ICdwYXltZW50JyxcclxuICAgIHN1Y2Nlc3NfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59L3Jlc3VsdD9zZXNzaW9uX2lkPXtDSEVDS09VVF9TRVNTSU9OX0lEfWAsXHJcbiAgICBjYW5jZWxfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59L2NoZWNrb3V0YCxcclxuXHJcbiAgfSlcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHNlc3Npb25JZDogc2Vzc2lvbi5pZCB9KVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyaXBlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9