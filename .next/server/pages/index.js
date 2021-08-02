(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PreviewPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Cotton\\React Projects\\Next_Practice\\nextjs-practice\\pages\\index.tsx";


 // Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__.loadStripe)("pk_test_51JK7pGETrbGppB4vCljcag9qbvq04h917KYOsxF7FJztZRK8CFcVNRthV8yQauazOy7fbH9AD6v8VZZTfhyllt1T00ugpdOwTS");
function PreviewPage() {
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

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

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/stripe-js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJhY3RpY2UvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbmV4dGpzLXByYWN0aWNlL2V4dGVybmFsIFwiQHN0cmlwZS9zdHJpcGUtanNcIiIsIndlYnBhY2s6Ly9uZXh0anMtcHJhY3RpY2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy1wcmFjdGljZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25leHRqcy1wcmFjdGljZS9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJzdHJpcGVQcm9taXNlIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJQcmV2aWV3UGFnZSIsIlJlYWN0IiwicXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTtBQUNBOztBQUNBLE1BQU1BLGFBQWEsR0FBR0MsNkRBQVUsQ0FDOUJDLDZHQUQ4QixDQUFoQztBQUdlLFNBQVNDLFdBQVQsR0FBdUI7QUFDcENDLHdEQUFBLENBQWdCLE1BQU07QUFDcEI7QUFDQSxVQUFNQyxLQUFLLEdBQUcsSUFBSUMsZUFBSixDQUFvQkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFwQyxDQUFkOztBQUNBLFFBQUlKLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFNBQVYsQ0FBSixFQUEwQjtBQUN4QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksdURBQVo7QUFDRDs7QUFDRCxRQUFJUCxLQUFLLENBQUNLLEdBQU4sQ0FBVSxVQUFWLENBQUosRUFBMkI7QUFDekJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDJFQUFaO0FBQ0Q7QUFDRixHQVRELEVBU0csRUFUSDtBQVVBLHNCQUNFO0FBQU0sVUFBTSxFQUFDLHdCQUFiO0FBQXNDLFVBQU0sRUFBQyxNQUE3QztBQUFBO0FBQUEsNEJBQ0U7QUFBQTtBQUFBLDhCQUNFO0FBQUEsNENBQWUsU0FBZjtBQUFBLGdDQUNFO0FBQ0UsYUFBRyxFQUFDLGlDQUROO0FBRUUsYUFBRyxFQUFDLG1DQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBQSw4Q0FBZSxhQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUksaUJBQUssRUFBRTtBQUFDQyxxQkFBTyxFQUFFO0FBQVYsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsWUFBSSxFQUFDLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdFRCxDOzs7Ozs7Ozs7OztBQzFGRCwrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xuLy8gTWFrZSBzdXJlIHRvIGNhbGwgYGxvYWRTdHJpcGVgIG91dHNpZGUgb2YgYSBjb21wb25lbnTigJlzIHJlbmRlciB0byBhdm9pZFxuLy8gcmVjcmVhdGluZyB0aGUgYFN0cmlwZWAgb2JqZWN0IG9uIGV2ZXJ5IHJlbmRlci5cbmNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKFxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElTSEFCTEVfS0VZXG4pO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJldmlld1BhZ2UoKSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoaXMgaXMgYSByZWRpcmVjdCBiYWNrIGZyb20gQ2hlY2tvdXRcbiAgICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgaWYgKHF1ZXJ5LmdldCgnc3VjY2VzcycpKSB7XG4gICAgICBjb25zb2xlLmxvZygnT3JkZXIgcGxhY2VkISBZb3Ugd2lsbCByZWNlaXZlIGFuIGVtYWlsIGNvbmZpcm1hdGlvbi4nKTtcbiAgICB9XG4gICAgaWYgKHF1ZXJ5LmdldCgnY2FuY2VsZWQnKSkge1xuICAgICAgY29uc29sZS5sb2coJ09yZGVyIGNhbmNlbGVkIC0tIGNvbnRpbnVlIHRvIHNob3AgYXJvdW5kIGFuZCBjaGVja291dCB3aGVuIHlvdeKAmXJlIHJlYWR5LicpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxmb3JtIGFjdGlvbj1cIi9hcGkvY2hlY2tvdXRfc2Vzc2lvbnNcIiBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9FSHlSMm5QLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJUaGUgY292ZXIgb2YgU3R1YmJvcm4gQXR0YWNobWVudHNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGgzPlN0dWJib3JuIEF0dGFjaG1lbnRzPC9oMz5cbiAgICAgICAgICAgIDxoNSBzdHlsZT17e29wYWNpdHk6IDAuNX19PiQyMC4wMDwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiByb2xlPVwibGlua1wiPlxuICAgICAgICAgIENoZWNrb3V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgzLFxuICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIixcbiAgICAgICAgICAgICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE1NHB4O1xuICAgICAgICAgICAgY29sb3I6ICMyNDJkNjA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTU2Y2Q2O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNS41cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gICk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0cmlwZS9zdHJpcGUtanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=