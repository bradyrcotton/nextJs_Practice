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

const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())("sk_test_51JK7pGETrbGppB4vx7iPRMrPtTINSOtpGBwly5Uq2XZrQVuubz8k9JrpkuKXZbP02gzeg0WJcl9ZCkbTtBlx0H3600moADVE5O", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJhY3RpY2UvLi9wYWdlcy9hcGkvY2hlY2tvdXQvW2lkXS50cyIsIndlYnBhY2s6Ly9uZXh0anMtcHJhY3RpY2UvZXh0ZXJuYWwgXCJzdHJpcGVcIiJdLCJuYW1lcyI6WyJzdHJpcGUiLCJTdHJpcGUiLCJwcm9jZXNzIiwiYXBpVmVyc2lvbiIsInJlcSIsInJlcyIsImlkIiwicXVlcnkiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsInJldHJpZXZlIiwiZXhwYW5kIiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHLElBQUlDLCtDQUFKLENBQVdDLDZHQUFYLEVBQTBDO0FBQ3ZEQyxZQUFVLEVBQUU7QUFEMkMsQ0FBMUMsQ0FBZjtBQUlBLCtEQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLFFBQU07QUFBRUM7QUFBRixNQUFTRixHQUFHLENBQUNHLEtBQW5CO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1SLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLFFBQXpCLENBQWtDTCxFQUFsQyxFQUFnRDtBQUFDTSxVQUFNLEVBQUUsQ0FBQyxnQkFBRDtBQUFULEdBQWhELENBQXRCO0FBRUFQLEtBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVOO0FBQUYsR0FBckI7QUFDRCxDQUxELEU7Ozs7Ozs7Ozs7O0FDUkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2NoZWNrb3V0L1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5cclxuXHJcbmltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcclxuY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSwge1xyXG4gIGFwaVZlcnNpb246ICcyMDIwLTA4LTI3J1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLnJldHJpZXZlKGlkIGFzIHN0cmluZywge2V4cGFuZDogWydwYXltZW50X2ludGVudCddfSlcclxuICAgXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzZXNzaW9uIH0pXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJpcGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=