self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PreviewPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Cotton\\React Projects\\Next_Practice\\nextjs-practice\\pages\\index.tsx",
    _s = $RefreshSig$();



 // Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

var stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__.loadStripe)("pk_test_51JK7pGETrbGppB4vCljcag9qbvq04h917KYOsxF7FJztZRK8CFcVNRthV8yQauazOy7fbH9AD6v8VZZTfhyllt1T00ugpdOwTS");
function PreviewPage() {
  _s();

  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    // Check to see if this is a redirect back from Checkout
    var query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    action: "/api/checkout_sessions",
    method: "POST",
    className: "jsx-4071156067",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "jsx-4071156067",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-4071156067" + " " + "product",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "https://i.imgur.com/EHyR2nP.png",
          alt: "The cover of Stubborn Attachments",
          className: "jsx-4071156067"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-4071156067" + " " + "description",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "jsx-4071156067",
            children: "Stubborn Attachments"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            style: {
              opacity: 0.5
            },
            className: "jsx-4071156067",
            children: "$20.00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        role: "link",
        className: "jsx-4071156067",
        children: "Checkout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "4071156067",
      children: "section.jsx-4071156067{background:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:400px;height:112px;border-radius:6px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product.jsx-4071156067{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.description.jsx-4071156067{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}img.jsx-4071156067{border-radius:4px;margin:10px;width:56px;height:56px;}h3.jsx-4071156067,h5.jsx-4071156067{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\", \"Helvetica Neue\",\"Ubuntu\",sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:20px;-webkit-letter-spacing:-0.154px;-moz-letter-spacing:-0.154px;-ms-letter-spacing:-0.154px;letter-spacing:-0.154px;color:#242d60;margin:0;}button.jsx-4071156067{height:36px;background:#556cd6;border-radius:0 0 4px 4px;color:white;border:0;font-weight:600;cursor:pointer;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;box-shadow:0px 4px 5.5px 0px rgba(0,0,0,0.07);}button.jsx-4071156067:hover{opacity:0.8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ290dG9uXFxSZWFjdCBQcm9qZWN0c1xcTmV4dF9QcmFjdGljZVxcbmV4dGpzLXByYWN0aWNlXFxwYWdlc1xcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DUyxBQUdnQyxBQVNOLEFBR0EsQUFLSyxBQVFzQixBQVU1QixBQVdBLFlBVk8sQUFXckIsTUE3QmMsQ0FqQkMsV0FrQkYsQ0FrQmUsVUFqQmQsWUFDZCxJQWlCYyxZQUNILEtBN0JYLEFBR3dCLElBMkJOLGVBdENNLENBdUNQLFNBZkcsTUFnQk8sWUFmVCxnQkFDRCxlQWRRLEFBZU4sZUFjZ0MsRUFiekIsRUEzQlosWUFDQyxhQUNLLGlCQXVDcEIsQ0F0Q2dDLHFDQVNoQywrQkFnQmdCLGNBQ0wsU0FDWCx3QkExQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxDb3R0b25cXFJlYWN0IFByb2plY3RzXFxOZXh0X1ByYWN0aWNlXFxuZXh0anMtcHJhY3RpY2VcXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcbi8vIE1ha2Ugc3VyZSB0byBjYWxsIGBsb2FkU3RyaXBlYCBvdXRzaWRlIG9mIGEgY29tcG9uZW504oCZcyByZW5kZXIgdG8gYXZvaWRcbi8vIHJlY3JlYXRpbmcgdGhlIGBTdHJpcGVgIG9iamVjdCBvbiBldmVyeSByZW5kZXIuXG5jb25zdCBzdHJpcGVQcm9taXNlID0gbG9hZFN0cmlwZShcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJU0hBQkxFX0tFWVxuKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZXZpZXdQYWdlKCkge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGlzIGlzIGEgcmVkaXJlY3QgYmFjayBmcm9tIENoZWNrb3V0XG4gICAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIGlmIChxdWVyeS5nZXQoJ3N1Y2Nlc3MnKSkge1xuICAgICAgY29uc29sZS5sb2coJ09yZGVyIHBsYWNlZCEgWW91IHdpbGwgcmVjZWl2ZSBhbiBlbWFpbCBjb25maXJtYXRpb24uJyk7XG4gICAgfVxuICAgIGlmIChxdWVyeS5nZXQoJ2NhbmNlbGVkJykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdPcmRlciBjYW5jZWxlZCAtLSBjb250aW51ZSB0byBzaG9wIGFyb3VuZCBhbmQgY2hlY2tvdXQgd2hlbiB5b3XigJlyZSByZWFkeS4nKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBhY3Rpb249XCIvYXBpL2NoZWNrb3V0X3Nlc3Npb25zXCIgbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vRUh5UjJuUC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiVGhlIGNvdmVyIG9mIFN0dWJib3JuIEF0dGFjaG1lbnRzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxoMz5TdHViYm9ybiBBdHRhY2htZW50czwvaDM+XG4gICAgICAgICAgICA8aDUgc3R5bGU9e3tvcGFjaXR5OiAwLjV9fT4kMjAuMDA8L2g1PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgcm9sZT1cImxpbmtcIj5cbiAgICAgICAgICBDaGVja291dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDExMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1NnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMyxcbiAgICAgICAgICBoNSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFwiUm9ib3RvXCIsXG4gICAgICAgICAgICAgIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjQyZDYwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1NmNkNjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDUuNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9mb3JtPlxuICApO1xufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Cotton\\\\React Projects\\\\Next_Practice\\\\nextjs-practice\\\\pages\\\\index.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(PreviewPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = PreviewPage;

var _c;

$RefreshReg$(_c, "PreviewPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsIlByZXZpZXdQYWdlIiwiUmVhY3QiLCJxdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7QUFDQTs7QUFDQSxJQUFNQSxhQUFhLEdBQUdDLDZEQUFVLENBQzlCQyw2R0FEOEIsQ0FBaEM7QUFHZSxTQUFTQyxXQUFULEdBQXVCO0FBQUE7O0FBQ3BDQyx3REFBQSxDQUFnQixZQUFNO0FBQ3BCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLElBQUlDLGVBQUosQ0FBb0JDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBcEMsQ0FBZDs7QUFDQSxRQUFJSixLQUFLLENBQUNLLEdBQU4sQ0FBVSxTQUFWLENBQUosRUFBMEI7QUFDeEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHVEQUFaO0FBQ0Q7O0FBQ0QsUUFBSVAsS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBVixDQUFKLEVBQTJCO0FBQ3pCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSwyRUFBWjtBQUNEO0FBQ0YsR0FURCxFQVNHLEVBVEg7QUFVQSxzQkFDRTtBQUFNLFVBQU0sRUFBQyx3QkFBYjtBQUFzQyxVQUFNLEVBQUMsTUFBN0M7QUFBQTtBQUFBLDRCQUNFO0FBQUE7QUFBQSw4QkFDRTtBQUFBLDRDQUFlLFNBQWY7QUFBQSxnQ0FDRTtBQUNFLGFBQUcsRUFBQyxpQ0FETjtBQUVFLGFBQUcsRUFBQyxtQ0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUEsOENBQWUsYUFBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFJLGlCQUFLLEVBQUU7QUFBQ0MscUJBQU8sRUFBRTtBQUFWLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFXRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLFlBQUksRUFBQyxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3RUQ7O0dBbkZ1QlYsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jN2I5NjZlNzg4N2YwNjQzZTIxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XG4vLyBNYWtlIHN1cmUgdG8gY2FsbCBgbG9hZFN0cmlwZWAgb3V0c2lkZSBvZiBhIGNvbXBvbmVudOKAmXMgcmVuZGVyIHRvIGF2b2lkXG4vLyByZWNyZWF0aW5nIHRoZSBgU3RyaXBlYCBvYmplY3Qgb24gZXZlcnkgcmVuZGVyLlxuY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUoXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSVNIQUJMRV9LRVlcbik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmV2aWV3UGFnZSgpIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhpcyBpcyBhIHJlZGlyZWN0IGJhY2sgZnJvbSBDaGVja291dFxuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICBpZiAocXVlcnkuZ2V0KCdzdWNjZXNzJykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdPcmRlciBwbGFjZWQhIFlvdSB3aWxsIHJlY2VpdmUgYW4gZW1haWwgY29uZmlybWF0aW9uLicpO1xuICAgIH1cbiAgICBpZiAocXVlcnkuZ2V0KCdjYW5jZWxlZCcpKSB7XG4gICAgICBjb25zb2xlLmxvZygnT3JkZXIgY2FuY2VsZWQgLS0gY29udGludWUgdG8gc2hvcCBhcm91bmQgYW5kIGNoZWNrb3V0IHdoZW4geW914oCZcmUgcmVhZHkuJyk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGZvcm0gYWN0aW9uPVwiL2FwaS9jaGVja291dF9zZXNzaW9uc1wiIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL0VIeVIyblAucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlRoZSBjb3ZlciBvZiBTdHViYm9ybiBBdHRhY2htZW50c1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8aDM+U3R1YmJvcm4gQXR0YWNobWVudHM8L2gzPlxuICAgICAgICAgICAgPGg1IHN0eWxlPXt7b3BhY2l0eTogMC41fX0+JDIwLjAwPC9oNT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHJvbGU9XCJsaW5rXCI+XG4gICAgICAgICAgQ2hlY2tvdXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMsXG4gICAgICAgICAgaDUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBcIlJvYm90b1wiLFxuICAgICAgICAgICAgICBcIkhlbHZldGljYSBOZXVlXCIsIFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTU0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzI0MmQ2MDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NTZjZDY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1LjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9