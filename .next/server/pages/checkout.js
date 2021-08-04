(function() {
var exports = {};
exports.id = "pages/checkout";
exports.ids = ["pages/checkout"];
exports.modules = {

/***/ "./pages/checkout.tsx":
/*!****************************!*\
  !*** ./pages/checkout.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Checkout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Cotton\\React Projects\\Next_Practice\\nextjs-practice\\pages\\checkout.tsx";

const stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__.loadStripe)("pk_test_51JK7pGETrbGppB4vCljcag9qbvq04h917KYOsxF7FJztZRK8CFcVNRthV8yQauazOy7fbH9AD6v8VZZTfhyllt1T00ugpdOwTS");
function Checkout() {
  const handleClick = async event => {
    const {
      sessionId
    } = await fetch('/api/checkout/session', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        quantity: 1
      })
    }).then(res => res.json());
    const stripe = await stripePromise;
    const {
      error
    } = await stripe.redirectToCheckout({
      sessionId
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Checkout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      role: "link",
      onClick: handleClick,
      children: "Checkout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/stripe-js");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/checkout.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJhY3RpY2UvLi9wYWdlcy9jaGVja291dC50c3giLCJ3ZWJwYWNrOi8vbmV4dGpzLXByYWN0aWNlL2V4dGVybmFsIFwiQHN0cmlwZS9zdHJpcGUtanNcIiIsIndlYnBhY2s6Ly9uZXh0anMtcHJhY3RpY2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJzdHJpcGVQcm9taXNlIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJDaGVja291dCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJzZXNzaW9uSWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1YW50aXR5IiwidGhlbiIsInJlcyIsImpzb24iLCJzdHJpcGUiLCJlcnJvciIsInJlZGlyZWN0VG9DaGVja291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLGFBQWEsR0FBR0MsNkRBQVUsQ0FBQ0MsNkdBQUQsQ0FBaEM7QUFFZSxTQUFTQyxRQUFULEdBQW9CO0FBQy9CLFFBQU1DLFdBQVcsR0FBRyxNQUFPQyxLQUFQLElBQWlCO0FBQ2pDLFVBQU07QUFBQ0M7QUFBRCxRQUFjLE1BQU1DLEtBQUssQ0FBQyx1QkFBRCxFQUEwQjtBQUNyREMsWUFBTSxFQUFFLE1BRDZDO0FBRXJEQyxhQUFPLEVBQUU7QUFDTCx3QkFBZ0I7QUFEWCxPQUY0QztBQUtyREMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDQyxnQkFBUSxFQUFFO0FBQVgsT0FBZjtBQUwrQyxLQUExQixDQUFMLENBTXZCQyxJQU51QixDQU1sQkMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFOVyxDQUExQjtBQU9BLFVBQU1DLE1BQU0sR0FBRyxNQUFNakIsYUFBckI7QUFDQSxVQUFNO0FBQUNrQjtBQUFELFFBQVUsTUFBTUQsTUFBTSxDQUFDRSxrQkFBUCxDQUEwQjtBQUM1Q2I7QUFENEMsS0FBMUIsQ0FBdEI7QUFHSCxHQVpEOztBQWFGLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQVEsVUFBSSxFQUFDLE1BQWI7QUFBb0IsYUFBTyxFQUFFRixXQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQsQzs7Ozs7Ozs7Ozs7QUMxQkQsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvY2hlY2tvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvYWRTdHJpcGV9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcclxuXHJcbmNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSVNIQUJMRV9LRVkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja291dCgpIHtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3Nlc3Npb25JZH0gPSBhd2FpdCBmZXRjaCgnL2FwaS9jaGVja291dC9zZXNzaW9uJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3F1YW50aXR5OiAxfSlcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IHN0cmlwZVByb21pc2U7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yfSA9IGF3YWl0IHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoe1xyXG4gICAgICAgICAgICBzZXNzaW9uSWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+Q2hlY2tvdXQ8L2gxPlxyXG4gICAgICA8YnV0dG9uIHJvbGU9J2xpbmsnIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgIENoZWNrb3V0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3N0cmlwZS1qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9