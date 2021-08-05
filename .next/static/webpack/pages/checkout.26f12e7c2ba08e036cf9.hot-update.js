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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_IGSD_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/IGSD.jpg */ "./public/IGSD.jpg");
/* module decorator */ module = __webpack_require__.hmd(module);



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
      children: "Sandbox Next/Stripe Checkout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
      src: _public_IGSD_jpg__WEBPACK_IMPORTED_MODULE_5__.default
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "$20.00"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      role: "link",
      onClick: handleClick,
      children: "Buy Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQudHN4Il0sIm5hbWVzIjpbInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsIkNoZWNrb3V0IiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVhbnRpdHkiLCJ0aGVuIiwicmVzIiwianNvbiIsInNlc3Npb25JZCIsInN0cmlwZSIsInJlZGlyZWN0VG9DaGVja291dCIsImVycm9yIiwiSUdTRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyw2REFBVSxDQUFDQyw2R0FBRCxDQUFoQztBQUVlLFNBQVNDLFFBQVQsR0FBb0I7QUFDL0IsTUFBTUMsV0FBVztBQUFBLHlVQUFHLGlCQUFPQyxLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNVQyxLQUFLLENBQUMsdUJBQUQsRUFBMEI7QUFDckRDLHNCQUFNLEVBQUUsTUFENkM7QUFFckRDLHVCQUFPLEVBQUU7QUFDTCxrQ0FBZ0I7QUFEWCxpQkFGNEM7QUFLckRDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNDLDBCQUFRLEVBQUU7QUFBWCxpQkFBZjtBQUwrQyxlQUExQixDQUFMLENBTXZCQyxJQU51QixDQU1sQixVQUFBQyxHQUFHO0FBQUEsdUJBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsZUFOZSxDQURWOztBQUFBO0FBQUE7QUFDVEMsdUJBRFMscUJBQ1RBLFNBRFM7QUFBQTtBQUFBLHFCQVFLaEIsYUFSTDs7QUFBQTtBQVFWaUIsb0JBUlU7QUFBQTtBQUFBLHFCQVNNQSxNQUFNLENBQUNDLGtCQUFQLENBQTBCO0FBQzVDRix5QkFBUyxFQUFUQTtBQUQ0QyxlQUExQixDQVROOztBQUFBO0FBQUE7QUFTVEcsbUJBVFMseUJBU1RBLEtBVFM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWGYsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFjRixzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBRWdCLHFEQUFJQTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBUSxVQUFJLEVBQUMsTUFBYjtBQUFvQixhQUFPLEVBQUVoQixXQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7S0F6QnVCRCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjI2ZjEyZTdjMmJhMDhlMDM2Y2Y5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvYWRTdHJpcGV9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBJR1NEIGZyb20gJy4uL3B1YmxpYy9JR1NELmpwZydcclxuXHJcbmNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSVNIQUJMRV9LRVkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja291dCgpIHtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3Nlc3Npb25JZH0gPSBhd2FpdCBmZXRjaCgnL2FwaS9jaGVja291dC9zZXNzaW9uJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3F1YW50aXR5OiAxfSlcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IHN0cmlwZVByb21pc2U7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yfSA9IGF3YWl0IHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoe1xyXG4gICAgICAgICAgICBzZXNzaW9uSWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5TYW5kYm94IE5leHQvU3RyaXBlIENoZWNrb3V0PC9oMT5cclxuICAgICAgPEltYWdlIHNyYz17SUdTRH0vPlxyXG4gICAgICA8aDE+JDIwLjAwPC9oMT5cclxuICAgICAgPGJ1dHRvbiByb2xlPSdsaW5rJyBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICBCdXkgTm93IFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==