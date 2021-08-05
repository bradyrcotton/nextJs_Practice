self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./pages/checkout.tsx":
/*!****************************!*\
  !*** ./pages/checkout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Checkout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Cotton_React_Projects_Next_Practice_nextjs_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Cotton_React_Projects_Next_Practice_nextjs_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Cotton_React_Projects_Next_Practice_nextjs_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Cotton_React_Projects_Next_Practice_nextjs_practice_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");



var _jsxFileName = "C:\\Users\\Cotton\\React Projects\\Next_Practice\\nextjs-practice\\pages\\checkout.tsx";

var stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__.loadStripe)("pk_test_51JK7pGETrbGppB4vCljcag9qbvq04h917KYOsxF7FJztZRK8CFcVNRthV8yQauazOy7fbH9AD6v8VZZTfhyllt1T00ugpdOwTS");
function Checkout() {
  var handleClick = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Cotton_React_Projects_Next_Practice_nextjs_practice_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Cotton_React_Projects_Next_Practice_nextjs_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var _yield$fetch$then, sessionId, stripe, _yield$stripe$redirec, error;

      return C_Users_Cotton_React_Projects_Next_Practice_nextjs_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('/api/checkout/session', {
                method: 'POST',
                headers: {
                  "content-type": "application/json"
                },
                body: JSON.stringify({
                  quantity: 1
                })
              }).then(function (res) {
                return res.json();
              });

            case 2:
              _yield$fetch$then = _context.sent;
              sessionId = _yield$fetch$then.sessionId;
              _context.next = 6;
              return stripePromise;

            case 6:
              stripe = _context.sent;
              _context.next = 9;
              return stripe.redirectToCheckout({
                sessionId: sessionId
              });

            case 9:
              _yield$stripe$redirec = _context.sent;
              error = _yield$stripe$redirec.error;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Checkout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: process.env.PRICE_ID
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      role: "link",
      onClick: handleClick,
      children: "Buy Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
_c = Checkout;

var _c;

$RefreshReg$(_c, "Checkout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQudHN4Il0sIm5hbWVzIjpbInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsIkNoZWNrb3V0IiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVhbnRpdHkiLCJ0aGVuIiwicmVzIiwianNvbiIsInNlc3Npb25JZCIsInN0cmlwZSIsInJlZGlyZWN0VG9DaGVja291dCIsImVycm9yIiwiZW52IiwiUFJJQ0VfSUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsNkRBQVUsQ0FBQ0MsNkdBQUQsQ0FBaEM7QUFFZSxTQUFTQyxRQUFULEdBQW9CO0FBQy9CLE1BQU1DLFdBQVc7QUFBQSx5VUFBRyxpQkFBT0MsS0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDVUMsS0FBSyxDQUFDLHVCQUFELEVBQTBCO0FBQ3JEQyxzQkFBTSxFQUFFLE1BRDZDO0FBRXJEQyx1QkFBTyxFQUFFO0FBQ0wsa0NBQWdCO0FBRFgsaUJBRjRDO0FBS3JEQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDQywwQkFBUSxFQUFFO0FBQVgsaUJBQWY7QUFMK0MsZUFBMUIsQ0FBTCxDQU12QkMsSUFOdUIsQ0FNbEIsVUFBQUMsR0FBRztBQUFBLHVCQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLGVBTmUsQ0FEVjs7QUFBQTtBQUFBO0FBQ1RDLHVCQURTLHFCQUNUQSxTQURTO0FBQUE7QUFBQSxxQkFRS2hCLGFBUkw7O0FBQUE7QUFRVmlCLG9CQVJVO0FBQUE7QUFBQSxxQkFTTUEsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQjtBQUM1Q0YseUJBQVMsRUFBVEE7QUFENEMsZUFBMUIsQ0FUTjs7QUFBQTtBQUFBO0FBU1RHLG1CQVRTLHlCQVNUQSxLQVRTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhmLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBY0Ysc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBS0YsT0FBTyxDQUFDa0IsR0FBUixDQUFZQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFRLFVBQUksRUFBQyxNQUFiO0FBQW9CLGFBQU8sRUFBRWpCLFdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDtLQXhCdUJELFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuNDZkZjZlNmQ2ZTFiM2EwNzgxNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bG9hZFN0cmlwZX0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xyXG5cclxuY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJU0hBQkxFX0tFWSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrb3V0KCkge1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB7c2Vzc2lvbklkfSA9IGF3YWl0IGZldGNoKCcvYXBpL2NoZWNrb3V0L3Nlc3Npb24nLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7cXVhbnRpdHk6IDF9KVxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgY29uc3Qgc3RyaXBlID0gYXdhaXQgc3RyaXBlUHJvbWlzZTtcclxuICAgICAgICBjb25zdCB7ZXJyb3J9ID0gYXdhaXQgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7XHJcbiAgICAgICAgICAgIHNlc3Npb25JZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkNoZWNrb3V0PC9oMT5cclxuICAgICAgPGgxPntwcm9jZXNzLmVudi5QUklDRV9JRH08L2gxPlxyXG4gICAgICA8YnV0dG9uIHJvbGU9J2xpbmsnIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgIEJ1eSBOb3cgXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9