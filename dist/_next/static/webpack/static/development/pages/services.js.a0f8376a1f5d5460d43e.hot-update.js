webpackHotUpdate("static/development/pages/services.js",{

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var rbx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rbx */ "./node_modules/rbx/index.js");
/* harmony import */ var _services_content_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services-content.json */ "./pages/services-content.json");
var _services_content_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./services-content.json */ "./pages/services-content.json", 1);
/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/title */ "./components/title.js");
var _jsxFileName = "/Volumes/bigmanting/dev/rstlss/rstlss-org/pages/services.js";






function ServiceSection(_ref) {
  var category = _ref.category;
  var title = category.title,
      subtitle = category.subtitle,
      content = category.content,
      id = category.id;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rbx__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    id: id,
    size: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rbx__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rbx__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    as: "h3",
    size: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rbx__WEBPACK_IMPORTED_MODULE_2__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, content.map(function (service, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index.toString(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, service.service), service.detail && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, service.detail.map(function (detail, detailIndex) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: detailIndex.toString(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, detail);
    })));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fixed: true,
    collapsed: true,
    title: "Services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rbx__WEBPACK_IMPORTED_MODULE_2__["Hero"], {
    color: "black",
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rbx__WEBPACK_IMPORTED_MODULE_2__["Hero"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rbx__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_title__WEBPACK_IMPORTED_MODULE_4__["SerifTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rbx__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    as: "h2",
    subtitle: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "We can turn your vision into reality.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rbx__WEBPACK_IMPORTED_MODULE_2__["Column"].Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rbx__WEBPACK_IMPORTED_MODULE_2__["Column"], {
    size: 10,
    offset: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, [_services_content_json__WEBPACK_IMPORTED_MODULE_3__["media"], _services_content_json__WEBPACK_IMPORTED_MODULE_3__["branding"], _services_content_json__WEBPACK_IMPORTED_MODULE_3__["web"], _services_content_json__WEBPACK_IMPORTED_MODULE_3__["app"]].map(function (category, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServiceSection, {
      key: index.toString(),
      category: category,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    });
  }))));
});

/***/ })

})
//# sourceMappingURL=services.js.a0f8376a1f5d5460d43e.hot-update.js.map