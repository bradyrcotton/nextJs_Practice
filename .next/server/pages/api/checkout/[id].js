(function() {
var exports = {};
exports.id = "pages/api/checkout/[id]";
exports.ids = ["pages/api/checkout/[id]"];
exports.modules = {

/***/ "./pages/api/checkout/[id].ts":
/*!************************************!*\
  !*** ./pages/api/checkout/[id].ts ***!
  \************************************/
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
    id
  } = req.query;
  const session = await stripe.checkout.sessions.retrieve(id, {
    expand: ['payment_intent']
  });
  res.status(200).json({
    session
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/checkout/[id].ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJhY3RpY2UvLi9wYWdlcy9hcGkvY2hlY2tvdXQvW2lkXS50cyIsIndlYnBhY2s6Ly9uZXh0anMtcHJhY3RpY2UvZXh0ZXJuYWwgXCJzdHJpcGVcIiJdLCJuYW1lcyI6WyJzdHJpcGUiLCJTdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJhcGlWZXJzaW9uIiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwicmV0cmlldmUiLCJleHBhbmQiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsK0NBQUosQ0FBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGlCQUF2QixFQUEwQztBQUN2REMsWUFBVSxFQUFFO0FBRDJDLENBQTFDLENBQWY7QUFJQSwrREFBZSxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUNsRSxRQUFNO0FBQUVDO0FBQUYsTUFBU0YsR0FBRyxDQUFDRyxLQUFuQjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxNQUFNVixNQUFNLENBQUNXLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxRQUF6QixDQUFrQ0wsRUFBbEMsRUFBZ0Q7QUFBQ00sVUFBTSxFQUFFLENBQUMsZ0JBQUQ7QUFBVCxHQUFoRCxDQUF0QjtBQUVBUCxLQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFTjtBQUFGLEdBQXJCO0FBQ0QsQ0FMRCxFOzs7Ozs7Ozs7OztBQ1JBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9jaGVja291dC9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuXHJcblxyXG5pbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XHJcbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVksIHtcclxuICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNydcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5yZXRyaWV2ZShpZCBhcyBzdHJpbmcsIHtleHBhbmQ6IFsncGF5bWVudF9pbnRlbnQnXX0pXHJcbiAgIFxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2Vzc2lvbiB9KVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyaXBlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9