(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!********************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/main.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 20));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 36));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages.json ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/blueprint/blueprint', function () {return Vue.extend(__webpack_require__(/*! pages/blueprint/blueprint.vue?mpType=page */ 13).default);});
__definePage('pages/quarterlygoals/quarterlygoals', function () {return Vue.extend(__webpack_require__(/*! pages/quarterlygoals/quarterlygoals.vue?mpType=page */ 21).default);});
__definePage('pages/weekgoals/weekgoals', function () {return Vue.extend(__webpack_require__(/*! pages/weekgoals/weekgoals.vue?mpType=page */ 26).default);});
__definePage('pages/monthygoals/monthygoals', function () {return Vue.extend(__webpack_require__(/*! pages/monthygoals/monthygoals.vue?mpType=page */ 31).default);});

/***/ }),
/* 2 */
/*!**********************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/index/index.vue?mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3lLO0FBQ3pLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUU6XFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmJlODRhM2NcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!****************************************************************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/fwh/chengzhangriji-uniapp/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "index"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "index-top"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "index-header"),
            attrs: { _i: 2 }
          }),
          _c("view", {
            staticClass: _vm._$s(3, "sc", "index-title"),
            attrs: { _i: 3 }
          })
        ]
      ),
      _c("view", { staticClass: _vm._$s(4, "sc", "card"), attrs: { _i: 4 } }, [
        _c(
          "view",
          { staticClass: _vm._$s(5, "sc", "bg"), attrs: { _i: 5 } },
          [
            true
              ? [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(7, "sc", "userAvatar"),
                      attrs: { _i: 7 }
                    },
                    [_c("image", { attrs: { _i: 8 } })]
                  )
                ]
              : undefined
          ],
          2
        ),
        _vm._$s(12, "i", _vm.update)
          ? _c(
              "view",
              { staticClass: _vm._$s(12, "sc", "userInfo"), attrs: { _i: 12 } },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(13, "sc", "user-name"),
                    attrs: { _i: 13 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(14, "sc", "user-name-title"),
                        attrs: { _i: 14 }
                      },
                      [
                        _c("view"),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(16, "sc", "name"),
                            attrs: { _i: 16 }
                          },
                          [
                            _vm._v(
                              _vm._$s(16, "t0-0", _vm._s(_vm.userInfo.name))
                            )
                          ]
                        )
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(17, "sc", "user-name-phone"),
                        attrs: { _i: 17 }
                      },
                      [
                        _c("view"),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(19, "sc", "name"),
                            attrs: { _i: 19 }
                          },
                          [
                            _vm._v(
                              _vm._$s(19, "t0-0", _vm._s(_vm.userInfo.mobile))
                            )
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _c(
                  "view",
                  { staticClass: _vm._$s(20, "sc", "item"), attrs: { _i: 20 } },
                  [
                    _c("view"),
                    _c("view", [
                      _vm._v(
                        _vm._$s(22, "t0-0", _vm._s(_vm.userInfo.component))
                      )
                    ])
                  ]
                ),
                _c(
                  "view",
                  { staticClass: _vm._$s(23, "sc", "item"), attrs: { _i: 23 } },
                  [
                    _c("view"),
                    _c("view", [
                      _c("textarea", {
                        attrs: {
                          value: _vm._$s(26, "a-value", _vm.userInfo.address),
                          _i: 26
                        },
                        on: {
                          blur: function($event) {
                            return _vm.handleUserAddress($event, _vm.userInfo)
                          }
                        }
                      })
                    ])
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(27, "sc", "item-qq"),
                    attrs: { _i: 27 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(28, "sc", "qq"),
                        attrs: { _i: 28 }
                      },
                      [
                        _c("view", {
                          staticClass: _vm._$s(29, "sc", "iconfont icon-QQ"),
                          attrs: { _i: 29 }
                        }),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(30, "sc", "name"),
                            attrs: { _i: 30 }
                          },
                          [
                            _c("textarea", {
                              attrs: {
                                value: _vm._$s(
                                  31,
                                  "a-value",
                                  _vm.userInfo.qqNumber
                                ),
                                _i: 31
                              },
                              on: {
                                blur: function($event) {
                                  return _vm.handleUserQQ($event, _vm.userInfo)
                                }
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(32, "sc", "wechat"),
                        attrs: { _i: 32 }
                      },
                      [
                        _c("view", {
                          staticClass: _vm._$s(
                            33,
                            "sc",
                            "iconfont icon-weixin"
                          ),
                          attrs: { _i: 33 }
                        }),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(34, "sc", "name"),
                            attrs: { _i: 34 }
                          },
                          [
                            _c("textarea", {
                              attrs: {
                                value: _vm._$s(
                                  35,
                                  "a-value",
                                  _vm.userInfo.wechatNumber
                                ),
                                _i: 35
                              },
                              on: {
                                blur: function($event) {
                                  return _vm.handleUserWechat(
                                    $event,
                                    _vm.userInfo
                                  )
                                }
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(36, "sc", "email"),
                    attrs: { _i: 36 }
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(37, "sc", "iconfont icon-email"),
                      attrs: { _i: 37 }
                    }),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(38, "sc", "email-des"),
                        attrs: { _i: 38 }
                      },
                      [
                        _c("textarea", {
                          attrs: {
                            value: _vm._$s(39, "a-value", _vm.userInfo.email),
                            _i: 39
                          },
                          on: {
                            blur: function($event) {
                              return _vm.handleUserEmail($event, _vm.userInfo)
                            }
                          }
                        })
                      ]
                    )
                  ]
                )
              ]
            )
          : _vm._e()
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(40, "sc", "user-dream"), attrs: { _i: 40 } },
        [
          _vm._l(_vm._$s(41, "f", { forItems: _vm.userDream }), function(
            v,
            i,
            $20,
            $30
          ) {
            return [
              _c(
                "view",
                {
                  key: _vm._$s(41, "f", {
                    forIndex: $20,
                    keyIndex: 0,
                    key: v.url + "_0"
                  }),
                  staticClass: _vm._$s("42-" + $30, "sc", "user-dream-item"),
                  attrs: { _i: "42-" + $30 },
                  on: {
                    click: function($event) {
                      return _vm.goToelsePage(v.url)
                    }
                  }
                },
                [_vm._v(_vm._$s("42-" + $30, "t0-0", _vm._s(v.name)))]
              )
            ]
          })
        ],
        2
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!**********************************************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJqQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUU6XFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/fwh/chengzhangriji-uniapp/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 8));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _myAxios = __webpack_require__(/*! ../../utils/myAxios.js */ 11);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  data: function data() {\n    return {\n      userDream: [{\n        name: '人生蓝图',\n        url: '/pages/blueprint/blueprint' },\n\n      {\n        name: '季度目标',\n        url: '/pages/quarterlygoals/quarterlygoals' },\n\n      {\n        name: '月度目标',\n        url: '/pages/monthygoals/monthygoals' },\n\n      {\n        name: '周目标',\n        url: '/pages/weekgoals/weekgoals' }],\n\n\n      userInfo: uni.getStorageInfoSync('userInfo') || {},\n      update: true };\n\n  },\n  onLoad: function onLoad(options) {\n    __f__(\"log\", options, \" at pages/index/index.vue:106\");\n    this.getUserInfo();\n  },\n  methods: {\n    // 更新用户邮箱\n    handleUserEmail: function handleUserEmail(e, value2) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var value, data, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  address: value2.address,\n                  email: value,\n                  mobile: +value2.mobile,\n                  name: value2.name,\n                  qqNumber: value2.qqNumber,\n                  wechatNumber: value2.wechatNumber,\n                  userid: uni.getStorageSync('userID') };_context.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateUserInfo',\n                    data: data }));case 4:res = _context.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this.getUserInfo();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 6:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n\n    // 更新用户wechat\n    handleUserWechat: function handleUserWechat(e, value2) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var value, data, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  address: value2.address,\n                  email: value2.email,\n                  mobile: +value2.mobile,\n                  name: value2.name,\n                  qqNumber: value2.qqNumber,\n                  wechatNumber: value,\n                  userid: uni.getStorageSync('userID') };_context2.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateUserInfo',\n                    data: data }));case 4:res = _context2.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this2.getUserInfo();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 6:case \"end\":return _context2.stop();}}}, _callee2);}))();\n    },\n\n    // 更新用户QQ\n    handleUserQQ: function handleUserQQ(e, value2) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var value, data, res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  address: value2.address,\n                  email: value2.email,\n                  mobile: value2.mobile,\n                  name: value2.name,\n                  qqNumber: +value,\n                  wechatNumber: value2.wechatNumber,\n                  userid: uni.getStorageSync('userID') };_context3.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateUserInfo',\n                    data: data }));case 4:res = _context3.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this3.getUserInfo();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 6:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n\n    // 更新用户地址\n    handleUserAddress: function handleUserAddress(e, value2) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var value, data, res;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  address: value,\n                  email: value2.email,\n                  mobile: value2.mobile,\n                  name: value2.name,\n                  qqNumber: value2.qqNumber,\n                  userid: uni.getStorageSync('userID'),\n                  wechatNumber: value2.wechatNumber };_context4.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateUserInfo',\n                    data: data }));case 4:res = _context4.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this4.getUserInfo();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 6:case \"end\":return _context4.stop();}}}, _callee4);}))();\n    },\n\n    // 获取用户信息\n    getUserInfo: function getUserInfo() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var res;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n                _this5.update = false;_context5.next = 3;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/queryUserInfo',\n                    data: {\n                      // code:'123',\n                      userid: uni.getStorageSync('userID') } }));case 3:res = _context5.sent;\n\n\n                if (res.statusCode == 200 && res.data) {\n                  _this5.userInfo = res.data;\n                } else {\n                  uni.showToast({\n                    title: '获取用户信息失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                _this5.update = true;case 6:case \"end\":return _context5.stop();}}}, _callee5);}))();\n    },\n\n    // 路由跳转\n    goToelsePage: function goToelsePage(v) {\n      __f__(\"log\", v, \" at pages/index/index.vue:247\");\n      uni.navigateTo({\n        url: v });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRUEscUU7QUFDQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSx5Q0FGQTs7QUFJQTtBQUNBLG9CQURBO0FBRUEsbURBRkEsRUFKQTs7QUFRQTtBQUNBLG9CQURBO0FBRUEsNkNBRkEsRUFSQTs7QUFZQTtBQUNBLG1CQURBO0FBRUEseUNBRkEsRUFaQSxDQURBOzs7QUFrQkEsd0RBbEJBO0FBbUJBLGtCQW5CQTs7QUFxQkEsR0F2QkE7QUF3QkEsUUF4QkEsa0JBd0JBLE9BeEJBLEVBd0JBO0FBQ0E7QUFDQTtBQUNBLEdBM0JBO0FBNEJBO0FBQ0E7QUFDQSxtQkFGQSwyQkFFQSxDQUZBLEVBRUEsTUFGQSxFQUVBO0FBQ0EscUJBREEsR0FDQSxRQURBLENBQ0EsS0FEQTtBQUVBLG9CQUZBLEdBRUE7QUFDQSx5Q0FEQTtBQUVBLDhCQUZBO0FBR0Esd0NBSEE7QUFJQSxtQ0FKQTtBQUtBLDJDQUxBO0FBTUEsbURBTkE7QUFPQSxzREFQQSxFQUZBOztBQVdBO0FBQ0Esa0NBREE7QUFFQSxvREFGQTtBQUdBLDhCQUhBLEdBWEEsU0FXQSxHQVhBOztBQWdCQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EscUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBLGlCQXhCQTtBQXlCQSxLQTNCQTs7QUE2QkE7QUFDQSxvQkE5QkEsNEJBOEJBLENBOUJBLEVBOEJBLE1BOUJBLEVBOEJBO0FBQ0EscUJBREEsR0FDQSxRQURBLENBQ0EsS0FEQTtBQUVBLG9CQUZBLEdBRUE7QUFDQSx5Q0FEQTtBQUVBLHFDQUZBO0FBR0Esd0NBSEE7QUFJQSxtQ0FKQTtBQUtBLDJDQUxBO0FBTUEscUNBTkE7QUFPQSxzREFQQSxFQUZBOztBQVdBO0FBQ0Esa0NBREE7QUFFQSxvREFGQTtBQUdBLDhCQUhBLEdBWEEsU0FXQSxHQVhBOztBQWdCQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EscUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBLGlCQXhCQTtBQXlCQSxLQXZEQTs7QUF5REE7QUFDQSxnQkExREEsd0JBMERBLENBMURBLEVBMERBLE1BMURBLEVBMERBO0FBQ0EscUJBREEsR0FDQSxRQURBLENBQ0EsS0FEQTtBQUVBLG9CQUZBLEdBRUE7QUFDQSx5Q0FEQTtBQUVBLHFDQUZBO0FBR0EsdUNBSEE7QUFJQSxtQ0FKQTtBQUtBLGtDQUxBO0FBTUEsbURBTkE7QUFPQSxzREFQQSxFQUZBOztBQVdBO0FBQ0Esa0NBREE7QUFFQSxvREFGQTtBQUdBLDhCQUhBLEdBWEEsU0FXQSxHQVhBOztBQWdCQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EscUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBLGlCQXhCQTtBQXlCQSxLQW5GQTs7QUFxRkE7QUFDQSxxQkF0RkEsNkJBc0ZBLENBdEZBLEVBc0ZBLE1BdEZBLEVBc0ZBO0FBQ0EscUJBREEsR0FDQSxRQURBLENBQ0EsS0FEQTtBQUVBLG9CQUZBLEdBRUE7QUFDQSxnQ0FEQTtBQUVBLHFDQUZBO0FBR0EsdUNBSEE7QUFJQSxtQ0FKQTtBQUtBLDJDQUxBO0FBTUEsc0RBTkE7QUFPQSxtREFQQSxFQUZBOztBQVdBO0FBQ0Esa0NBREE7QUFFQSxvREFGQTtBQUdBLDhCQUhBLEdBWEEsU0FXQSxHQVhBOztBQWdCQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EscUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBLGlCQXhCQTtBQXlCQSxLQS9HQTs7QUFpSEE7QUFDQSxlQWxIQSx5QkFrSEE7QUFDQSxzQ0FEQTtBQUVBO0FBQ0Esa0NBREE7QUFFQSxtREFGQTtBQUdBO0FBQ0E7QUFDQSwwREFGQSxFQUhBLEdBRkEsU0FFQSxHQUZBOzs7QUFVQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EseUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBO0FBQ0EscUNBbkJBO0FBb0JBLEtBdElBOztBQXdJQTtBQUNBLGdCQXpJQSx3QkF5SUEsQ0F6SUEsRUF5SUE7QUFDQTtBQUNBO0FBQ0EsY0FEQTs7QUFHQSxLQTlJQSxFQTVCQSxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJpbmRleFwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJpbmRleC10b3BcIj5cclxuXHRcdFx0PCEtLSA8dmlldyBjbGFzcz1cImltZ1wiPlxyXG5cdFx0XHRcdDxpbWFnZSBtb2RlPVwiYXNwZWN0RmlsbFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZS9pbV9iZ0Zsb3dlckAyeC5wbmdcIj5cclxuXHRcdFx0XHQ8L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+IC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImluZGV4LWhlYWRlclwiPumrmOaViOW3peS9nCDlv6vkuZDnlJ/mtLs8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaW5kZXgtdGl0bGVcIj7mlLnlj5jku47ku4rlpKnlvIDlp4s8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNhcmRcIj5cclxuXHRcdFx0PCEtLSDpobbpg6jog4zmma8gLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmdcIj5cclxuXHRcdFx0XHQ8YmxvY2sgdi1pZj1cInRydWVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlckF2YXRhclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJcIiBtb2RlPVwid2lkdGhGaXhcIiBzcmM9XCJodHRwczovL2RzczIuYmRzdGF0aWMuY29tLzcwY0Z2blNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTMxMDQ3NDkxMDQsNDIwNzQzMzU5OCZmbT0yNiZncD0wLmpwZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHQ8YmxvY2sgdi1lbHNlPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyQXZhdGFyXCI+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gb3Blbi10eXBlPVwiZ2V0VXNlckluZm9cIiBiaW5kOnRhcD1cImhhbmRsZUdldFVzZXJJbmZvXCI+5oiR55qE54Wn54mHPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VySW5mb1wiIHYtaWY9XCJ1cGRhdGVcIj5cclxuXHRcdFx0ICAgICAgPHZpZXcgY2xhc3M9XCJ1c2VyLW5hbWVcIj5cclxuXHRcdFx0ICAgICAgICA8dmlldyBjbGFzcz1cInVzZXItbmFtZS10aXRsZVwiPlxyXG5cdFx0XHQgICAgICAgICAgPHZpZXc+5aeT5ZCNPC92aWV3PlxyXG5cdFx0XHQgICAgICAgICAgPHZpZXcgY2xhc3M9XCJuYW1lXCI+e3t1c2VySW5mby5uYW1lfX08L3ZpZXc+XHJcblx0XHRcdCAgICAgICAgPC92aWV3PlxyXG5cdFx0XHQgICAgICAgIDx2aWV3IGNsYXNzPVwidXNlci1uYW1lLXBob25lXCI+XHJcblx0XHRcdCAgICAgICAgICA8dmlldz7miYvmnLo8L3ZpZXc+XHJcblx0XHRcdCAgICAgICAgICA8dmlldyBjbGFzcz1cIm5hbWVcIj57e3VzZXJJbmZvLm1vYmlsZX19PC92aWV3PlxyXG5cdFx0XHQgICAgICAgIDwvdmlldz5cclxuXHRcdFx0ICAgICAgPC92aWV3PlxyXG5cdFx0XHQgICAgICA8dmlldyBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0ICAgICAgICA8dmlldz7ljZXkvY08L3ZpZXc+XHJcblx0XHRcdCAgICAgICAgPHZpZXc+e3t1c2VySW5mby5jb21wb25lbnR9fTwvdmlldz5cclxuXHRcdFx0ICAgICAgPC92aWV3PlxyXG5cdFx0XHQgICAgICA8dmlldyBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0ICAgICAgICA8dmlldz7lnLDlnYA8L3ZpZXc+XHJcblx0XHRcdCAgICAgICAgPHZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgOnZhbHVlPVwidXNlckluZm8uYWRkcmVzc1wiIEBibHVyPVwiaGFuZGxlVXNlckFkZHJlc3MoJGV2ZW50LHVzZXJJbmZvKVwiPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQgICAgICA8L3ZpZXc+XHJcblx0XHRcdCAgICAgIDx2aWV3IGNsYXNzPVwiaXRlbS1xcVwiPlxyXG5cdFx0XHQgICAgICAgIDx2aWV3IGNsYXNzPVwicXFcIj5cclxuXHRcdFx0ICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1RUVwiPjwvdmlldz5cclxuXHRcdFx0ICAgICAgICAgIDx2aWV3IGNsYXNzPVwibmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgOnZhbHVlPVwidXNlckluZm8ucXFOdW1iZXJcIiBAYmx1cj1cImhhbmRsZVVzZXJRUSgkZXZlbnQsdXNlckluZm8pXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQgICAgICAgIDwvdmlldz5cclxuXHRcdFx0ICAgICAgICA8dmlldyBjbGFzcz1cIndlY2hhdFwiPlxyXG5cdFx0XHQgICAgICAgICAgPHZpZXcgY2xhc3M9XCJpY29uZm9udCBpY29uLXdlaXhpblwiPjwvdmlldz5cclxuXHRcdFx0ICAgICAgICAgIDx2aWV3IGNsYXNzPVwibmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgOnZhbHVlPVwidXNlckluZm8ud2VjaGF0TnVtYmVyXCIgQGJsdXI9XCJoYW5kbGVVc2VyV2VjaGF0KCRldmVudCx1c2VySW5mbylcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdCAgICAgICAgPC92aWV3PlxyXG5cdFx0XHQgICAgICA8L3ZpZXc+XHJcblx0XHRcdCAgICAgIDx2aWV3IGNsYXNzPVwiZW1haWxcIj5cclxuXHRcdFx0ICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1lbWFpbFwiPjwvdmlldz5cclxuXHRcdFx0ICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZW1haWwtZGVzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSA6dmFsdWU9XCJ1c2VySW5mby5lbWFpbFwiIEBibHVyPVwiaGFuZGxlVXNlckVtYWlsKCRldmVudCx1c2VySW5mbylcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdCAgICAgIDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5bqV6YOo5a+86IiqIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWRyZWFtXCI+XHJcblx0XHRcdDxibG9jayB2LWZvcj1cIih2LGkpIGluIHVzZXJEcmVhbVwiIDprZXk9XCJ2LnVybFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1kcmVhbS1pdGVtXCIgQHRhcD1cImdvVG9lbHNlUGFnZSh2LnVybClcIiA+e3t2Lm5hbWV9fTwvdmlldz5cclxuXHRcdFx0PC9ibG9jaz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7bXlBeGlvc30gZnJvbSAnLi4vLi4vdXRpbHMvbXlBeGlvcy5qcydcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHVzZXJEcmVhbTogW3tcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+S6uueUn+iTneWbvicsXHJcblx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9ibHVlcHJpbnQvYmx1ZXByaW50J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+Wto+W6puebruaghycsXHJcblx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9xdWFydGVybHlnb2Fscy9xdWFydGVybHlnb2FscydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfmnIjluqbnm67moIcnLFxyXG5cdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvbW9udGh5Z29hbHMvbW9udGh5Z29hbHMnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3dlZWtnb2Fscy93ZWVrZ29hbHMnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHR1c2VySW5mbzogdW5pLmdldFN0b3JhZ2VJbmZvU3luYygndXNlckluZm8nKSB8fCB7fSxcclxuXHRcdFx0XHR1cGRhdGU6dHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKG9wdGlvbnMpIHtcclxuXHRcdFx0Y29uc29sZS5sb2cob3B0aW9ucylcclxuXHRcdFx0dGhpcy5nZXRVc2VySW5mbygpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyDmm7TmlrDnlKjmiLfpgq7nrrFcclxuXHRcdFx0YXN5bmMgaGFuZGxlVXNlckVtYWlsKGUsdmFsdWUyKXtcclxuXHRcdFx0XHRsZXQge3ZhbHVlfT1lLmRldGFpbFxyXG5cdFx0XHRcdGxldCBkYXRhPXtcclxuXHRcdFx0XHRcdGFkZHJlc3M6dmFsdWUyLmFkZHJlc3MsXHJcblx0XHRcdFx0XHRlbWFpbDp2YWx1ZSxcclxuXHRcdFx0XHRcdG1vYmlsZTordmFsdWUyLm1vYmlsZSxcclxuXHRcdFx0XHRcdG5hbWU6dmFsdWUyLm5hbWUsXHJcblx0XHRcdFx0XHRxcU51bWJlcjp2YWx1ZTIucXFOdW1iZXIsXHJcblx0XHRcdFx0XHR3ZWNoYXROdW1iZXI6dmFsdWUyLndlY2hhdE51bWJlcixcclxuXHRcdFx0XHRcdHVzZXJpZDp1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCByZXM9YXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3VwZGF0ZVVzZXJJbmZvJyxcclxuXHRcdFx0XHRcdGRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0XHR0aGlzLmdldFVzZXJJbmZvKClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTon5pu05paw5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5pu05paw55So5oi3d2VjaGF0XHJcblx0XHRcdGFzeW5jIGhhbmRsZVVzZXJXZWNoYXQoZSx2YWx1ZTIpe1xyXG5cdFx0XHRcdGxldCB7dmFsdWV9PWUuZGV0YWlsXHJcblx0XHRcdFx0bGV0IGRhdGE9e1xyXG5cdFx0XHRcdFx0YWRkcmVzczp2YWx1ZTIuYWRkcmVzcyxcclxuXHRcdFx0XHRcdGVtYWlsOnZhbHVlMi5lbWFpbCxcclxuXHRcdFx0XHRcdG1vYmlsZTordmFsdWUyLm1vYmlsZSxcclxuXHRcdFx0XHRcdG5hbWU6dmFsdWUyLm5hbWUsXHJcblx0XHRcdFx0XHRxcU51bWJlcjp2YWx1ZTIucXFOdW1iZXIsXHJcblx0XHRcdFx0XHR3ZWNoYXROdW1iZXI6dmFsdWUsXHJcblx0XHRcdFx0XHR1c2VyaWQ6dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdFx0bWV0aG9kOidwb3N0JyxcclxuXHRcdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVVc2VySW5mbycsXHJcblx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG5cdFx0XHRcdFx0dGhpcy5nZXRVc2VySW5mbygpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOabtOaWsOeUqOaIt1FRXHJcblx0XHRcdGFzeW5jIGhhbmRsZVVzZXJRUShlLHZhbHVlMil7XHJcblx0XHRcdFx0bGV0IHt2YWx1ZX09ZS5kZXRhaWxcclxuXHRcdFx0XHRsZXQgZGF0YT17XHJcblx0XHRcdFx0XHRhZGRyZXNzOnZhbHVlMi5hZGRyZXNzLFxyXG5cdFx0XHRcdFx0ZW1haWw6dmFsdWUyLmVtYWlsLFxyXG5cdFx0XHRcdFx0bW9iaWxlOnZhbHVlMi5tb2JpbGUsXHJcblx0XHRcdFx0XHRuYW1lOnZhbHVlMi5uYW1lLFxyXG5cdFx0XHRcdFx0cXFOdW1iZXI6K3ZhbHVlLFxyXG5cdFx0XHRcdFx0d2VjaGF0TnVtYmVyOnZhbHVlMi53ZWNoYXROdW1iZXIsXHJcblx0XHRcdFx0XHR1c2VyaWQ6dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdFx0bWV0aG9kOidwb3N0JyxcclxuXHRcdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVVc2VySW5mbycsXHJcblx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG5cdFx0XHRcdFx0dGhpcy5nZXRVc2VySW5mbygpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOabtOaWsOeUqOaIt+WcsOWdgFxyXG5cdFx0XHRhc3luYyBoYW5kbGVVc2VyQWRkcmVzcyhlLHZhbHVlMil7XHJcblx0XHRcdFx0bGV0IHt2YWx1ZX09ZS5kZXRhaWxcclxuXHRcdFx0XHRsZXQgZGF0YT17XHJcblx0XHRcdFx0XHRhZGRyZXNzOnZhbHVlLFxyXG5cdFx0XHRcdFx0ZW1haWw6dmFsdWUyLmVtYWlsLFxyXG5cdFx0XHRcdFx0bW9iaWxlOnZhbHVlMi5tb2JpbGUsXHJcblx0XHRcdFx0XHRuYW1lOnZhbHVlMi5uYW1lLFxyXG5cdFx0XHRcdFx0cXFOdW1iZXI6dmFsdWUyLnFxTnVtYmVyLFxyXG5cdFx0XHRcdFx0dXNlcmlkOnVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyksXHJcblx0XHRcdFx0XHR3ZWNoYXROdW1iZXI6dmFsdWUyLndlY2hhdE51bWJlclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdFx0bWV0aG9kOidwb3N0JyxcclxuXHRcdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVVc2VySW5mbycsXHJcblx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG5cdFx0XHRcdFx0dGhpcy5nZXRVc2VySW5mbygpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOiOt+WPlueUqOaIt+S/oeaBr1xyXG5cdFx0XHRhc3luYyBnZXRVc2VySW5mbygpe1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlPWZhbHNlXHJcblx0XHRcdFx0bGV0IHJlcz0gYXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3F1ZXJ5VXNlckluZm8nLFxyXG5cdFx0XHRcdFx0ZGF0YTp7XHJcblx0XHRcdFx0XHRcdC8vIGNvZGU6JzEyMycsXHJcblx0XHRcdFx0XHRcdHVzZXJpZDp1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZihyZXMuc3RhdHVzQ29kZT09MjAwJiZyZXMuZGF0YSl7XHJcblx0XHRcdFx0XHR0aGlzLnVzZXJJbmZvPXJlcy5kYXRhXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+iOt+WPlueUqOaIt+S/oeaBr+Wksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnVwZGF0ZT10cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDot6/nlLHot7PovaxcclxuXHRcdFx0Z29Ub2Vsc2VQYWdlKHYpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHYpXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOnZcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cclxuXHRwYWdle1xyXG5cdFx0YmFja2dyb3VuZDogI0VGRjNGNjtcclxuXHQuaW5kZXgge1xyXG5cdFx0Y29sb3I6ICMyMTlkOWM7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cclxuXHRcdCYtdG9wIHtcclxuXHRcdFx0aGVpZ2h0OiAyNzFycHg7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUJvUUFBQUxrQ0FNQUFBQVJSS2VsQUFBQVhWQk1WRVVhYVYwYmFWMGJhVjRiYWw0Y2FWNGNhbDRjYWw4Y2ExOGRhbDRkYWw4ZGExOGVhMThlYTJBZWJHQWZiR0FmYkdFZ2JHRWdiV0VnYldJaGJXRWhiV0loYm1JaGJtTWliV0lpYm1JaWJtTWpibU1qYjJNamIyUWtiMlFsY0dXMSt2Y3ZBQUJjZjBsRVFWUVlHZXpCaVdLanlMWXMwQUJPNnBWU2lNR1ZmUTJJSGYvL21hL25McHRFUXBBYWJNVmFvSWlJeUlPQUlpSWlEd0tLaUlnOENDZ2lJdklnb0lpSXlJT0FJaUlpRHdLS2lJZzhDQ2dpSXZJZ29JaUl5SU9BSWlJaUR3S0tpSWc4Q0NnaUl2SWdvSWlJeUlPQUlpSWlEd0tLaUlnOENDZ2lJdklnb0lpSXlJT0FJaUlpRHdLS2lJZzhDQ2dpSXZJZ29JaUl5SU9BSWlJaUR3S0tpSWc4Q0NnaUl2SWdvSWlJeUlPQUlpSWlEd0tLaUlnOENDZ2lJdklnb0lpSXlJT0FJaUlpRHdLS2lJZzhDQ2dpSXZJZ29JaUl5SU9BSWlJaUR3S0tpSWc4Q0NnaUl2SWdvSWlJeUlPQUlpSWlEd0tLaUlnOENDZ2lJdklnb0lpSXlJT0FJaUlpRHdLS2lJZzhDQ2dpSXZJZ29JaUl5SU9BSWlJaUR3S0tpSWc4Q0NnaUl2SWdvSWlJeUlPQUlpSWlEd0tLaUlnOENDZ2lJdklnb0lpSXlJT0FJaUlpRHdLS2lJZzhDQ2dpSXZJZ29JaUl5SU9BSWlJaUR3S0tpSWc4Q0NnaUl2SWdvSWlJeUlPQUlpSWlEd0tLaUlnOENDZ2lJdklnb0lpSXlJT0FJaUlpRHdLS2lJZzhDQ2dpSXZJZ29JaUl5SU9BSWlJaUR3S0tpSWc4Q0NnaUl2SWdvSWlJeUlPQUlpSWlEd0tLaUlnOENDZ2lJdklnb0lpSXlJT0FJaUlpRHdLS2lNakVxZlVaZ0tMWUhhcHdvdHdJS0NJaUg0MzEvL0JCNW9OUmJnQVVFWkZmV1lrWUh5akpnU0lpOG9zV2MvTEdLR21CSWlMeUwvTTRJMnVOa2hJb0lpTC9HQXVjbDc5VEVnSkZST1J2UTRhTHZGR1NBVVZFNUM5amhpVitVbElCUlVUa1QxWmdtWU5SMGdCRlJPUlBIa3ZsUFNVSlVFUkUvdERnQ2cwbEJWQkVSSDQzNENyZUtOdUJJaUpDbXNOMWlvRlB3MDU5SDk3ZTZycXVEbityZi9mMjF2ZUQ4Wm1CSWlKQ05yaGF5OGV5UHJUMVllOEtuRmZzZlBYV0c1OFJLQ0lpTkt4UUdoOWlDRzI1TDNDdDNmSG53Q2NEaW9nSUQxaWpHSGhYMW9mS0Y5akNIY09KendNVUVaRUJLelc4RXd1Tkw1Q0lyenZqVXdCRlJNUmpMVGZ3MXV5OThobFNjMVV3UGh3b0l2THllc1M1ZzNlNHBETGV6dEFlQ3R5TXEvN1ArRkNnaU1qTDg0Z3BCLzdPM2dwY1VCdHZZV2g5aHB0emRjL0hBVVZFWGwyUG1NQi9oQXdYbEQzVHN1QXozRXRXQnVOamdDSWlyODRqb3VkL3JNUWwvMnRHcGpJMk85eWJhMGMrQUNnaTh1SjZSTFQ4SU9DeVhUTnl1N0haNFRGY05mRGVRQkdSRitjeHRlTW5RNEVGL2xkMXhnMkd5dUdSL2xjTnZDdFFST1MxOVlnWStKbnRzWXh2QjY0eU5qczhubXRHM2c4b0l2TGFEcGp5bkxJS1MyVytIWGlkc2RuaFdialdlQ2VnaU1oTEd4RFJNZVlOMTloWDc4WmxySFY0TG1YUHV3QkZSRjZheDFUR3VDN0RkUXJmOXNienJQMkJKNVEzeHRzRFJVUmVXWStJbWpOR2grc1Z2ZzRueGxuWTQya2RldDRhS0NMeXlqd2lSczZ4Q2l1NVF4c0dmbURCSTRrOGQ3dkRvYTdmUXZlSDhQYTdwaTRQUDF5ZVl3c1hqRGNGaW9pOHNBNFJqbWYwQlRZbzlzYzI5RWJTZ3NjbXVhL2ZRdGVmVGp6UGh2QldIMzRVV0NXcmpUY0Vpb2k4TUllSU41NWpGYllySERiWUhkdmVlSzFUYU1wZGhxdVZBMjhHRkJGNVhTMWlqT2NOT3p6TWp5cWN1SVgxamM5eEhkL3pSa0FSa1pkbGlDbDVVVmZnL241VTRjUTByR3Q4aGl2NGpqY0Jpb2k4TEkrWWtaZFptK09PM0RFTVRPM1UrZ3lMdVk0M0FJcUl2S3FBbUlxTFdKdmpIakxmZE1aYk9iVWVTN21leVlFaUlpOXF6QkNSR1JleVVPQzIzREVZYjgyNktzY3l2bWRpb0lqSWF6S0htSis4UXVkeE81M3hYazZOd3lLSGtVbUJJaUt2NllpWUhhOHpWamx1eEZYQmVEZGo0N0JFWlV3SUZCRjVTVFdpQmw3dE40K2JLUTd0d0hzWnFneVhaYTB4R1ZCRTVCWFZpS3E0aG9VOWJtaGZ2UnZ2b3p2Z3NxSm5LcUNJeUF1cUVKVWJWN0pRNHBhS1F6dndIcXgxdU1pUFRBTVVFWGs1NWhIWGNZdStjcmlwZmZWdXZMMit4RVdWTVFWUVJPVFZ0Qm5pRHR6SytsRDVIRGRVSE5xQnQyWjFoZ3VLbmdtQUlpS3ZwWGVZa1JuVHNENVVQc2Z0K0xvejNwVDlkTGlnTkc0R2lvaThrdkdBV1lGSldkOGVmMlM0bGFMOGVlSXRkUTduNVlGYmdTSWlyOE1xekN0NUM5WTFSNGNieVh6VEdXK205empQRzdjQlJVUmVSc2d4THpmZXppazB2c0J0dUNvWWI2VDNPQ3NMM0FRVUVYa1JnOGM1UFcvTityWjB1SW5pMEE2OGlkN2pyTks0QVNnaThoS3N3bGx2dkpNaEhCMXVZbDhGWTNxZHd6bDV6L1ZBRVpGWDhEUERXUWZlay9XdHozRUx4YUVkbUZvb2NFNXRYQXNVRWZuK2VvZnpkc2E3cy9mYVo3Z0ZYM2ZHcE5vTVo3aVJLNEVpSXQrZEhYQkJZWHlRVXpqdWNBdXU2b3pwV0lWekF0Y0JSVVMrTjZ0eFNUYnlvWWFmUjRjYmNIWFBaRTRlWjFSY0JSUVIrZGJlYzF5U0RYdzg2OXREZ2VReTN4b1Q2WFBNMnh0WEFFVkV2ckhCNDZKaTRMT3dydkU1VW5QdHlDU3N3cnhpNFBWQUVaRnZ5eXBjVm94OEx0WTNQa05hdThhWXdtbVBlWUZYQTBWRXZxdWZHUzdiRzUrUnZWYytRMHI3WUV6Z1o0WlpEYThGaW9oOFQ3M0RBaFdmMkNsVVA1QlFPWEE3TzJEV3dYZ2RVRVRrT3hvUFdLRG8rUFNHY0hSSXhRWGpabDJHT2M1NEZWQkU1UHV4R2d0a3JmRnJzTDQ1NUVpakhMaVZsWmhUREx3R0tDTHk3WVFjQ3h5Tlg0cTlWeitRd3I3alZsMkdPWUZYQUVWRXZwbkJZd0UvOENzYTJrT0J6WXBnM01ZT21OTnlPVkJFNUZ1eEl4WndQYjh1ZTY5MjJDaHJqTnNFekNtTlM0RWlJdC9Kend5WFpZRmZuZldOejdCSk9YSVQyMk9HTXk0RWlvaDhINzNEQXBYeGV4aGFuMkdEMHJoSmd4bDV6MlZBRVpIdndrb3M0RWQrSjZmV1oxaXRNbTdSNTVqUmNoRlFST1I3c0FZTHVKN2Z6OUQ2REN0VnhnM01ZOGJSdUFBb0l2SXRkQVV1eTFwK1YzM3RzRTVsM0tEQkREZnlNbEJFNUJzWVBSWTRHcjh6QzFXT0ZmS2YzS0RMTU9Nbkx3SkZSTDQ4cTdHQUgvajluZG85cnVkNnJqYzZ6RGdZTHdCRlJMNjZrT095dk9PTHNIREljQzAvY0RYem1KRy84enhRUk9Sckd6MFdxSTJ2cEs4Y3JsUVpWNnN4cHpTZUE0cUlmR1ZXWTRHRDhlVU1sY05WOHNEVkF1WmtQM2tHS0NMeWhZVWNsN21lcjJsc0hLN2hSNjQxWkpqamVzNENSVVMrck5IanNpendoUTFWaml2VXhwWEdIV2I1bmpOQUVaRXZ5bW9zVUJsZlhGOW1XTXdOWE1rT21PZDdSb0VpSWwvVGU0N0wvRUFoZzhkaXRYR2xCbWU0MWpnRmlvaDhSYVBIWlhtZy9NVWFoNFhjeUpVQ3ppb0hmZ2FLaUh3OVZtT0J5aWovNlVzczFIQ2xrOE5adThiNEFTZ2k4dVgwRHBmNWtmS1JOUmtXY1NQWE1ZOEw5c0g0SDFCRTVJdXhFcGU1bmhMUmVTeVJCYTdVNENMZkd2OEdpb2g4TFQ4elhOWWFKVzRvc1VSbFhLZlBjTm0rTmY0QkZCSDVTa2FQeXc1R21XZDFoc3ZjeUhYTVl3bFhkU1FvSXZKMVdJM0wzRUE1ejVvY2x3V3UxR0FoRDRxSWZCbTl3MFZab0Z4bWJZNkxLcTUwY2xpSUlpSmZoQjF4MmRING1xd1BiWDA0K0owL2xNMjc4U0pyYzF6aWpTczFXSVlpSWwvRGU0NkxkZ05mVU44ZUhENHBqUmRaaytHQ1l1QktvOGNTRkJINUNzempvaXp3cFp6NjBCeDlnYWlzNTJWVzRaTEF0VUtPeXlnaThnVUVYRllaWDRMMW9hME91d0lYdkhNQkszRkJ3N1dzeGtVVUVYbDZvOGRGdTRIZm1wMzYwQno5cnNCaUp5NHg3SEJlYVZ6TEtseEFFWkZuMStLaTdDZS9KUnY2dDdZNjdBcXNzT015SWNkWmUrTnFWbWM0aHlJaXoyMzB1S2d5ZmllblByelZwZDhWMkNad0dhdHdsak91WjQzRFBJcUlQTFVXRiswR2ZnT25QcnpWUjc4cmtJempVc01PNXhRanQrZ1BtRU1Sa1NjMmVseVNCWDVkcHo2ODFVZS9LM0FUUFJjTE9DY2J1SWsxT2FJb0l2SzhXbHhVR3I4WU8vWGhyUzc5cnNDdFZWek9QTTU1NTBaZG1XR0tJaUxQeWp3dWNRTy9CanYxb2EwUGZsZmdqZ3BlNHlmT2VlZFc5bHVKenlnaThxUUNMbXI1MU96VWg3WStlRmZnUVl6WEdQYzQ0NTNiV2ZENGdDSWlUOGs4TGprWW45R3BEMjE5OEs3QTR3VmVwOEVaZ1VsMFZZNS9VVVRrR2IzbnVDRHYrVVJzNkVOYkhYWUZua3JESy9VWjVnVW1NalFPZjZHSXlQT3hDcGRVeHNlelV4L2FvOThWZUZLZTF6S1BlWUhKV0ZjNUFCUVJlVHFqd3dXN0V4L0lodERXaDEyQnArZDR2UWJ6M3BtU0JWQkU1Tm0wdUNUd0VXd0liL1ZoVitBWjVidktZWW9yZEJsbXZUTXBVRVRrdVpqSEJkNTRWemFFdHZJT1R5Z3YzS0ZxUW4vaUh4d21UbHpoNUREcm5TbUJJaUpQcGM5eFh0YnhYcXgvcTczRHM4bmRqMFBkaEc0d2Z0UmpvdU1hNWpGcllFS2dpTWd6cVhCQmFidzk2MFBsSFo1TTRZOU42RStjNS9CWjREb2w1bVFEMHdGRlJKNkgvY0I1cnVkdFdmOTIzT2Q0THBrcm0zRGlaUlUrZStOS05lWVVJNU1CUlVTZVJwZmh2TXA0T3hacVgrQ3A1RC9LSmd6R3BRSStxN2xXd0J4blRBVVVFWGtXRGM1elBXL0V1c1puZUJxWjg4Y21kTVpyOWZpczVtb2Q1dXlOaVlBaUlzL0JQTTZyakRmUlZ6czhoZHo1WXhPNkUxYzc0Yk9hNjNXWVV6SVJVRVRrS2ZRNXpuSURiOEQrcjh6d1dMbnp4L3F0RzR3SjRMTUROeGd5ektpWkJpZ2k4Z3hhbkZjWjB4dEtQRWp1L0tGdVFuY3lKb1hQYW00eFpKZ1JtQVFvSXZKNFZ1SXMxek01Q3c3M2xUdC9xTnZRbll5M2dzOXFiakprbURFd0JWQkU1T0ZHaDdNcVkycGpsZUVlY3ZmalVEVnZYWC9pUGVDem10djBtRkVZRXdCRlJCNnR6M0JPMWpHMTN1T1dDbmM0MW0raFB4bnY2NFRQR203VVljWVA0M2FnaU1pRHRUakxHOU95NEhBTHVmUEg1cTA3R1I4bTRMUEFyUUptVk53T0ZCRjVLQ3R4Vm1CYTF1UklLSGUrck45Q2Z6SStnUWFmOWR3c1lFYkx6VUFSa1VleVBjN1pqVXpLbWd6YjVjNlg5VnZvVG53eUhwOFp0NnN4WStCV29JaklBNDBGenFtWWxOVVpOc2pkb1c3RFlIeFdoczh5cG5CQVhHSGNDQlFSZVp3K3d4bDV6NVNzeGtyT1YyL2RpVTh2NERQUEZHeUh1QU0zQWtWRUhpYmdIRzlNeUpvTTEzUEg1djNFcjJLUHoyb21NZWFJYTdrTktDTHlLRFhPYVpoU3lIR2R6RmZoeEM5bHdFVEhOQWJNR0xnSktDTHlHRmJpakdKZ1FyM0ROZHd4blBqMWVFd3dsWUM0d3JnRktDTHlFTGJIR2Q2WXp1aXhYRkVGNDVmMGpnblBaQ3JFbGR3Q0ZCRjVCSE00bzJFNlZtR3hmWHZpVjJVNUpnS1RzUjNpQWpjQVJVUWVZQ3d3TCt1WlRzaXhrQS9HTCt5QUtXTTZsaUVxTTY0SGlvamMzNUJqM3M2WXpPaXhqQS9HTDYzRlZNbVVlc1I1cmdlS2lOeGRuMkhlMFppSzFWaGtINHhmWEVERXlLUWF4UDNrYXFDSXlMMjk0NHlXeVF3T0M3akcrT1VGUkhnbTVoRTNjaTFRUk9UTzNqRXY2NW1LVlZpZzdQa05CTVFNVE14eVJIbXVCWXFJM0ZmQVBHZE1aWEM0eVAwMGZnYzFZZzVNcmtmY1Q2NEVpb2pjVmNDOGd6R1ZCaGVWUGI4Rjg0Z2FtVjZET09NNm9JaklQUVhNcTVuSzZIQkJWaHUvaHo1SFZNMWIyQ1BLY3gxUVJPU09BdVlGcGhKd1FkRWF2d2M3SXM0WmI4RXlSQVd1QW9xSTNFL0FyS3huSWxiaXZDTHd1L2laWThiQTJ3aUl5b3hyZ0NJaWR4TXdxeGlaeU9Cd2xndjhMbnFIT1ExdnBVVFU4ZlFYNHpWQUVaRjdDWmpsakltME9Lc0kvQzU2ajFsNzNvemx1Q3dyQ3JmYkg0NTEreGI2RTJlQklpSjM4bzVaM3BpR0hYQk9IdmhkOUI3emN1UHRkTGhhVnV6TEp2UW5mZ2FLaU56SE8yYVZUR1J3T0tjeGZnOFdITTRaZUVzbFZpdDg5ZFliL3dXS2lOekZnRmsxRXdrNDUyajhIb1lxdzFtQk4yVVp0c2w5RlFiK0FSUVJ1WWNodzV5R2lWUTRZemZ3VzdCMmh3c2EzbGlIRk53eERLQ0l5QjJNT2VZRXBtRjd6TXQrOGp1d2RvK0xLdDZjUnlvVUViazljNWdUbU1ib01LODBmbjNXN3JIQWdiYzNJaFdLaU55YzdURW5NSTBoeHl6WDg4dnJxeDBXOGNZN3FKRUlSVVJ1N29BNUhkTjR4N3pLK0xWWjhCa1cyaHZ2d1Fxa1FSR1JXNnN4cDJNYUFiT0tubCtaaGFyQWNqdmpmWFJJZ3lJaU45WmlUc2MwQW1hVnhpL0x1c3JoS2p2anZleVFCRVZFYnVzZGN6cW0wV0pPRnZoRldUZzZYR3RudkpzQlNWQkU1S1pPR1daMFRLUEduUDNJcjhlR1VQa01LK3lNZDNSQUNoUVJ1U1Z6bUJHWVJvMDVOYitVVXgrYTBoZFlMZlQ5NlErOGl4RXBVRVRrbGp4bUJLWlJZMDdnczdQVHFlL2YzdXJqWVZjVVNDZ3IzTTRmcXVhdEg0eTNVaUlCaW9qY1VJMFpOZE9vTWNPTmZCNm4zL1Y5SDk3YXVxNE9CNy9idWFMQW5SUzdReDE2WTJvakVxQ0l5TzBFektpWlJzQU1iM3dFT3cxOS8vYlcxdlhoY05qdGRrVlI0Rm00US90dVRLakVkaFFSdVprQk0wcW1FVENqNXQxWUg5NmErdUIzUllFdllGOEZZeG9qWXJLbVBuaVhZeG1LaU55S0ZZanp4aVRlTVNQd0xvWlErUnhmVCtiYjNyaWRSNHp4TDZjdXZOVUhsK01jaW9qY3lnRnhPMk1TNzRqTGV0N2M4UFBvOEtXNXR1ZEdQV0lDUDdFKzFBZUhLSXFJM01oUHhCVWpreGdRVnd5OHFWTTRPbndMbVcrTld6aEVWSXl6dmpuK3lQQVJSVVJ1WThDTWdVbU1HYUtjOFdhc2IzMkdiMlZYRDF3dElNTHhISHR2RGdYK1JSR1JtekNIdU1Ba3JFQlVOdkpHdXRyaFc4cXJudXRZaGdqakpkWTFQc2NmS0NKeUUwZkV0VXpDSE9JRzNzS3A5ZmpPL2xlUFhLTkNSTXRGTEZRT0ZCRzVoWUM0a21sNHhIVk1yNnR5ZkgrdU5WNXRRSVRuWXFDSXlBMk1pTnNaazZnUTF6SXgrNzhTTDZNY2VDMkhxWXlMZ1NJaU4rQVJsWTFNb2tWY3piUzZFcS9GQmVOVjNoRFJjeWxRUkNTOUZuRTlrM2hIM0lFcERWV0cxNVBWeGlzWUlpb3VCWXFJSkRjaXJtVVNKOFE1WXpwaGoyZmdmcEgvQmJkV2psek9ZY3B4S1ZCRUpEbVBxQU9Uc0FKUmhURVZhekk4VnVITEp2VEdXYWZUcWUrNjhQWlcxK1hCTzVjam9jUEFwVnBFR0JjQ1JVUlNheEdWRzVQWUl5b2JtTWhZNFRGeTkrTlFONkU3R1Zld1V4ZmVtcU4zR2JZN0RGekdFQkc0RUNnaWt0aUl1SjVKVklqcm1jWlk0bzZ5M1BsRDNieDEzY21ZektrTHRYZlk1REJ5RVllcGtndUJJaUtKZVVRMVRDSWdMakNKc2NUTlpibmJIYXJtclJ1TU4zVjZiMHFIMVVyakFqV21jaTRFaW9pazFTTnF6eVJPaUd1WmdsVklMYzl6NTM0Y0RzZTZmbnNMM1hBeTN0a3BOS1hES3JYeG9nNFJ4bVZBRVpHa3pDRW1NNlpnRGxFbFV3ZzVOc21kODRkRFhiZHZvZXU2MDhuNFBLd0x0Uzl3cFR6d0VrUEVPNWNCUlVTU2FoRVZtRVNKS0dmY2J2eC9XQ04zaDZvSjNlbkVyK0FVbW9QREZmN2Z3QXM4cGhvdUE0cUlwR1NJS3BsRWk2aHM1R1pXNFVydVVJZk8rQlVONGJqRFVwWHhyQlpUbnN1QUlpSXBIUkNUR1ZNWUVOZHhzOEZodWN3M1llQlgxN2Mrd3hKNXozTjZUQlZjQmhRUlNXaEFWTWNVckVCVXhhMnN4bEx1R0U3OE52cmFZWUdEY1o0aGdzdUFJaUlKSFJCVE1nbVBxRDIzR2gwV3lRN0IrTjFZNjNCUkZqalBZV3JnSXFDSVNEbzlZakpqQ2cyaUN1TkdJY01Dcmg3NFRWbmpjRWxwbkZOaUtuQVJVRVFrSFkrWW4weWhSOXpBalNwY2xsVUR2N1creEFWNXp4a3RwaG91QW9xSUpOTWp4ak1GeXhBVnVJM3RjVkhaOC91ek9zZDVsVEdxeDFUSlJVQVJrV1FjWWthbTRCRjE1RGFqd3dWNWJYd05GZ3FjNVViR0dLWjJYQVFVRVVtbFEwek5GQnBFT2VNbVE0SHpYREMra0ZEZ3JNQVlUT1ZjQkJRUlNlVUhJbkpqQWoyaXNwR2JEQm5PS2pxK21sRGduTW80NVRERlJVQVJrVVI2eEhSTXdESkU5ZHhreUhCT0h2aUNyTTF3aGpOT0hEQmxYQUlVRVVuRUk4SXpCWStvaHB1Y01weVJ0Y2JYWkJYT2NDTS9xekUxY0FsUVJDU05BVEVuSnRBZzZzQk54Z0pubE1iWGRmS1lWNHo4NUExVGdVdUFJaUpwbElnNE1vRWVVYzY0aFRuTWN3TmZXOGd4cXhqNFVZZXBOeTRCaW9na01TTEd1SjFsaURweGt3Tm1aWUczWktlK0QyOS9DMzEvTWo0Zkt6RXJHL2hCajZtR1M0QWlJa25VaUdpWWdFZFU0Q1l0WnBYR0c3QWh0UFZoVnhTSUtOeWhEZ09mU3U4d0ordjVxeE9tS2k0QmlvaWtZQm1tY3VOMkRhSXFibkxDbkx4bllxZlFscnNDQzdncUdKK0dWWmoxemw5aDZzQWxRQkdSRkFJaVdtN1hJMnJQYlJ4bWxNWjByRzlMaCt1NGR1U3o2SFBNQ2Z3RnBqeVhBRVZFVW5DWXlvMmJXWTZZM0xoSmk3aXNZeUxXdDc3QU9xNDFQZ2M3WUU3Z2YzSk1PQzRCaW9nazBDT2k1WFlIUlBYY3hESkU3VWFtY0FwSGgyMnFrYzhoWUU3TGYrV1ljRndDRkJGSm9NUlVidHpzSjZMZXVFMkZxSU54czZIMUdWSW9SejZGazhPTW12OXdtSEJjQWhRUjJjNFEwWEt6RTZJTzNNWVFWWE9qb2ZVWjBxbU16OEFPbUZIemJ3NFRqa3VBSWlMYk5aaktqVnVaUTR3emJ0TWdwdVlXcDlablNNejFmQXB2bUZIeUx3NFRqa3VBSWlMYk9VeTEzS3hDMU1DTmNrU1VYTTNDTWNkTlZId0tmWWE0MHZnSGh3bkhKVUFSa2MwR1RHWEdyZDRSRmJoUmg0aWRjWjJoZHJnZGIzd0dvMFBjM3ZnN2h3bkhKVUFSa2MwcVROWGN5akxFbE55cVFzVElGU3lVR1c2ckdQa016Q051YnlRZEpoeVhBRVZFdHJJTVU4YXRQR0tjY1N1SHFaWlhHMXFIT3loR1BvVUtjYzVJaHduSEpVQVJrYTErdzFUSnJScEVqZHpLTUpVYnIyS2h6SEFueGNpbjhJWTROOUpod25FSlVFUmtLNCtwa1JzTmlBcmNMR0NxNFJYNmFvZDdjc2FuRUJCWGpBNFRua3VBSWlJYkdhWThOektIbUlyYnZXSEt1SkMxSG5mbitSeUdERkZGaG9rRGx3QkZSRFpxTVJXNFVZV1luWEc3R2hPT2kzU1Z3ME0wZkE1RGdhV09YQUlVRWRsb2o0bU1HL1dJR3BsQWpZbVNGMW53ZUp5QnoyRXNzRkROSlVBUmtXME1VdzIzc1J3eGdTbThZZUxJODA2TlExcTU4NGZEc2E0UGg0TXJjSkhqazdBZGxtbTRCQ2dpc2syTEtlTTJKV0pLSnZHR3FaNnpyS3R5cE9NT1RSaU1IMW5YSEhLY0UvZ2tiSWRGM3JnRUtDS3lqY09FNXpZQk1jNllSSStJc21lRWRiVkRLdTdRQk9POFUrc3dLek0rQ2R0aGlZNUxnQ0lpbXhpbUFqZXhEREVEMHpCRVpiNGRqUDhhUW5zb2tFYnU2ekJ3Z2JIS01LUGhzekNIQlFZdUFZcUliTkppSWpOdTRoSFRNSlVDODl4dTUzYzdseUdON01jeDlNYmxyRUtjNDlNd2o4dE9YQUlVRWRuRVlhTGtKajhSNDVsTWhYc29mUE51dk43Sklhcm4wN0FkTHVJaW9JaklGb2FwbmxzWVlqSmpNZ051ckRnMG5YRXRxeEJUOFhuWURoZmtYQVFVRWRraVlDTG5KaDR4UFJOeXVKbk1ONTF4b3hvUk9aK0k3WENlNHlLZ2lNZ1dIaE1WdC9pSm1Jb3BkYmlKNGhoT1RLSkN4SWxQeEJ6Tzhsd0VGQkhad0REVmN3TkRqRE1tNVpCYWNRekdkQnltQXAvSldPQ2Npb3VBSWlJYmRKakl1SVZIeklscERVZ3A4NjB4clJPbWpud3FZNFl6R2k0Q2lvaHNVR0xpd0ExK0lxWmxhZzFTY1ZYUEd5Z3hzZU56R1RMTUMxd0VGQkhaSU1kRTRIcUdtRDNUT3lBRjE0NjhqUkZUZkRJOTV2VmNCQlFSV2M4d1pWelBJOGFZbmpsczVWdmo3VGhNR0o5TXdLd1RGd0ZGUk5ick1PRzVYa0JNNEMzWUhsdVV3WGhUTlNaT2ZEWXQ1bkFaVUVSa3ZRWVREVmV6REJHZXQyRUhySlNWbmZIV0FpWTZQcDBLTTBZdUFvcUlyRmRpb3VkcUpXS010OUpnaGFMcWVROG5UQVErbndQaW5IRUpVRVJrUFljSnJ0WWpKdkIyQm9mcnVHYmd2V0RpamMvSEhPSXFMZ0dLaUt5SENjKzFyRUNFNXkxWm0yR3B6QWZqSFdIaWpVL0lDc1FGTGdDS2lLdzJZS0xoV2hWaVJ0NldWVmpDMVQzdkRCTnZmRVlEWm95OERCUVJXZTBuSm5xdWRFSk15NXV6eHVFc1YzWEd1ek5NQkQ2bERuSE9lQkVvSXJMYUVSTmN5eVBDOFM2R3lpRXE4MDFuZklnQkV4MmZVNHU0aWhlQklpS3JPWHptdU5KUHhBeThGd3ZISFg2Vit5WVlIeWRnWXVDVEtoRVhlQWtvSXJJYUpvNWN4ekpFVkx3dkc4TGJIMEozNHFNMW1EQStLZHNoYnVRRm9JaklXZ01tZm5LZEVoR0Y4WFY1VFBCcFdZWW9aendQRkJGWjZ5Y21CcTR5SUtibnQyV25vUTl2YjIvMW53Ni9xLy8wOXZiVzkvM0pTRXpzK0x4NnhGVThEeFFSV2V1SUNhN2pFSEhnZDNQcTM1cWozeFVGMWpqeWliV0lDendMRkJGWnkrRXp4MVVDWW96ZnhoRGFjbGRnbThCblZpSnU1RG1naU1oYW1DaTVobVdJYVBrZFdHaDhnU1NNejh3Y29wenhERkJFWktVQkV3M1hxQkRoK05YWmUrVXpwRk0yb1RjK3JURkRWTVV6UUJHUmxRSW1BbGNZRU5Qekt6dUZzc0JORkw0T3ZmRUpCY1FGemdORlJGYXFNREZ3QlkrSUE3OHNDNGNjTjFiNEtneDhNaFdpc3BHelFCR1JsVHdtdU1JN1lveGZVMTg3M0kwNy9oejRSUGFJY3NZNW9JaklTamsreTNrOUt4RFI4aXZxcWd4M3Q2K0M4VGxZaHFpS2MwQVJrWlV3NFhtOUZoSE8rT1YwWllaSGNWVXdQb0VPY1lFelFCR1JkVTZZT1BKcWxpR2k1eGN6VkJrZXpGV2Q4ZEVxUkdVajQwQVJrWFU2VERTOFdvVUl6eS9GMmgyZWcyOVBmS3c5b3B3eENoUVJXZWNORTRIWE9pRm00QmZTbDNnbS82dDZQcEJsaUtvWUJZcUlyRk5qb3VPMURvZzQ4c3V3NFBCMHNyTGp3d1RFQmNhQUlpTHJIREJ4NHBWNlJHVEdMOEthSE04cEt6cytTSW1vYkdRRUtDS3lqc01FcitVUjBmSnJzQXJQTEtzR1BvSTVSRG5qRkNnaXNrNk9DVjZwUTBSdS9BckdFay9QdGNiN0d4QlhjUW9VRVZrSEV3V3Y1QkFSK0FWWWhhL2gwUEh1R3NRTm5BQkZSRmFwTU9GNG5ZQUl4K2RuRmJaemg3cXVtN2ZRZGFmVGlYODQ5YUh4U0MxdmpIZTJSNVF6ZmdhS2lLeGdCMHg1WHNWeVJQUjhlajl6YkpDNVF4MTY0NHdoUTNMbHdMdXlERkVOUHdORlJLNW5lMFFjZUpVV0VaN1BybmRZSjkrVlRSaU1aM1VaYm1IZjhaNEM0a1orQW9xSVhNMGNZbzY4aG1XSUdQamM3SUNyNVQrT1RSaU1sMW1GcUJ5YkZjRjRQeVdpUEQ4QlJVU3VOUmFJcW5tTkZoRUhQcmNXMThuS01IQ3gwU0dtR0VpZSt1NnRPZjdJc1ZyZUdPL0ZNa1Q5NUVlZ2lNaVZoaHh4RGE5Z0dTSkdQclBSNFFxWmIwKzhSb3VvdmZGWHArNnQ4aG5XeUJyam5YU0l5b3dmZ0NJaTEzblBNT09OVjJnUmNlUXphN0NjcTNwZXh6eWlLbU9FOVUzcGNMV3NNZDVIaVNqUEQwQVJrYXNFekhyamNwWWh3dmk4Um9lbFhEUHlXajhSRnpqUHVzWm51RTdXR3UvQkNrUzk4MWVnaU1nMTNqSHZqY3UxaUtqNHZGb3M1RnJqMWN3akt1dDV5U21VR2E2UkI5NURqNmpNK0F0UVJPUUtQYzRJWE13eVRHWEdaMlVITEpKVkkxZjRpYmpkeUVXRzF1RUtydWNkVklnNjhoZWdpTWh5UTRZek9pNFdFTkh3V2ZVNWxpZzdyakY2eEIyTWk5bHZaWWJGL01pYk00ZW9udjhCUlVRV0d6S2MwM0d4QWxPWjhVbTFXQ0J2akt1MG1OSHdTbDJaWWFuYWVHczlvcHp4WDZDSXlGSmpnYk02TGhVUTBmQTVXWW5MZk9BNm84T013Qlc2TXNNeStVL2VXb1dvbXY4Q1JVUVdHZ3VjMTNFcGg2bk0rSlRNNGFKeTRFb05aaFFEMTdHd3h6Sis1RzFaZ2FnVC93R0tpQ3hqRGhkMFhLaERSTU9uTk9TNHBES3VORHJNMkJ2WHN5YkhJZzF2cTBlVTV6OUFFWkZGek9HU2pndDVUR1hHWi9TT1N5cmpXZzNtVk1adE9vOGwzTUNiS2hIMWszOERSVVNXc0QwdTZyak1nSWlhenlqZ2dzcTQxdmdEY3dLM0d5c3NVUnR2eUhKRUdmOENpb2dzc2NkbGdjdVVpREErb1JybkhZeXJCY3pKZWlaaGJZN0wzTWdiNmhEbCtSZFFSR1NCRWd1OGNSRkRSTVVuVk9PczNjRFZyTVNjblRHWlVPQ3loamRVSWlyd1Q2Q0l5R1VWbG5qakloVWlqTStueERsNTRIcDlnVGxIWTByQjRTSnZ2Qm5MRUpNWi93Q0tpRnhVWTVFM0xtRVpwaW8rbnhMblZNYjFHc3dLVEsxenVDUjc1ODBFUkpYOEF5Z2lja21OWlJvdTBTSmk1Tk1wY1lZN2NUM3ptRk1NdklGUTRKTEtlQ3NlVWUvOEhTZ2ljc0ZQTEZSekNZZXBraytueEJrdE4raHp6UEhHMjJoelhPQkczc2lJcU54SWdpSWk1d1VzZGVRQ1BTSUdQcHNhOC9Zak4yZ3dxK0hOV0kwTHNwNDMwaUxxU0JJVUVUa3JZTEVERnlneDVmbHNXc3g3NHdibU1TZnZlVXQyd0FVdGI4UWhxaWRCRVpGejNySGNEMTVtaU9oNWI4YXpBbWE1RXpjWWNzenh4aHZySGM0N0dHOWlRRlJ1QkVWRXpuakhqRjJHQ2NmTGZtTEs4ZDdHa3VmMG1GVWFOMmd4cStFZGhBeG5PZU5OVklpcUNJcUl6SHZIak1JY0puSmU1akFWZUdmbURqempsR0ZPNEFaV1lrN1c4eTZzeEZuRndGdXdIRkU5S0NJeWE4Q01iT1FCVTd4b3dGVE9leXRSYzU0Vm1MRWJ1Y0hvTUdkdnZKZmU0YXpBVytnd2d5SWljNFlNTXdheXhwVHhraEpURGUrc0Iyck8yMk9HTjI3UVo1aFRHZS9IS3B6MWs3ZmdFVWNSa1JsRGhobUJaSXVwRXk4d1RHWEdPM1BBRzJkVm1GRnppeFp6c3NEN0doek9xWGtEaGppS2lNUU5HV2E4OFhjQlV4MHZDSmlxZUdjZGdEZk9DWmdSdUVXRk9idVI5MlkxemlsNUF5MmlLQ0lTTldhWVVmRVBBNllDTC9pQnFaRjM1Z0c4Y2NhQUdZRWIyQjV6S3VNRDlBNW5lR042RGpFVUVZa3hoeGtsLzJTWWFuamVnS21TZDJiNFhjTTR5eEVYdU1Ib01DTUxmQXlyY01iZW1OeUFHSXFJeEZTWTRZMS93ZFNSNTFXWTZubG52K0YzTmFQc0IrSUNOK2d6ek5pTmZKZ3V3N3k5TWJrU0VSUVJpUWlZc1RQK0xjZUU1MW1XWWNMeDNpcjg3c0NvSStJQ053aVlVeGtmeVBhWXR6ZW1aaG1tS0NJeU5XQkdZZnlIdzBUT3N3S21mdkxlUEg3bkdOTWlydVlHTFdaa2dRL1dZSjR6cGhZd1JSR1JDU3NRbDQzODF4RlRQR3VQaWN4NGJ6bit3SWdlY1NVM3FERERqWHk0UHNlc3ZURzFIU1lvSWpKeHdJeUIvd21ZR25qR2lLbUtkNGMvRFp5d0hGRjc0MnBXWWtabGZBTG1NV3R2VEd6QUJFVkVQbXN4bytNdlRwZ0tQS1BDMU1pN3c1OWFUbmhFNWNiVmJJOFpnVStpd2F5OU1iRUtuMUZFNUpNQk13SS95RERSOEl3TUU1NzNoejg1ZmxZaGJ1QnE1aERuVG53YWZZWTVKUk96SEo5UVJPUWpLeERYOENPUGlRUG4vWWFwam5kbitJdnhveDV4TFZjemg3aUQ4WW1NRG5NcUpoYndDVVZFUHZLSXEvaEppd25IZVI0VEdSOEFmNm41Z2VXSUtybmE2QkJYODduWUFYTmFKdWJ4RVVWRVBtZ1JkK0JuUGFZNHl6QlY4d0h3bDh6NHF4SlJ6cmpXV0NBdThPbTBtQk9ZMWdrZlVVVGtWd1BpOXNZSlRQV2NVMlBLK0FBNS9sTHhGKytJRzdqV1dDQXE2L21FdWd3emVxWlY0UU9LaVB6Q0hLS2NjY3Bob3VXY0hCT2VqK0R3dDVIL3NneFJEZGNhQzBTNWtVOXBLQkNYalV6S2N2eUtJaUsvT0NJcUh4bFJZYUxrakE1VEhSL2hnTDg1NHorT2lQSmNheXdRdFRjK0tYT0ljOGFrT3Z5S0lpTC9DWWdiR0JNdzRUaWp4RVRHaDJqd2o0cC9HeENWR1ZjYUMwUjU0MlZEYUk5K1Z4VDRRMVk0ZjJ4RGI3dzE4NGp6VE12akZ4UVIrWmNocm1PVVljb1laWmlxK1JBQi82cjVGNCtvd0pYR0FsRWxMemo5TEIxbXVMSjlOOTZRZWNSVlRHckVMeWdpOGkrUHFNQVpHU1o2UnJXWUd2a1Fodi9VL0VPUEtNK1Z6Q0dxNWprV2ZJWkxDdC8ydkJYemlBdE1xc0ovS0NMeWp3WlJOZWQ0VE5TTWNwalk4MEVLL09kZ0pEMWlNdU02NWhEVmNON1lPQ3ptMnhOdnduYUlPekVseS9FdmlvajhiVURVZ2JNYVREakdESmdLZkpBRGZwSDNIQkFWdUk3dEVWVnpqclU3WENtcmV0NkE3UkRsakNrRi9Jc2lJbjh4aDVqQ09LdkhsREdpd3BUeFFRSSsyR2VJOFZ6Skk2cm1qTTVqbGF6cW1ad1ZpRG93cVIzK1FSR1J2MVNJNmpuUE1OVXhJc05FeVVjeExHRmNwMEpVelNocmNxem5nakd4TVVOVXk1UUcvSU1pSW4vcUVkWHduQXdUTmFkK3cxVFBoL0c0ck9VNkRhSnF4bGlGcmNxUmFmV0lPekdsSS81R0VaRS9tRU9NNTFrZUU0NVRIaE1aSHlmZ29oM1hDWWlxR1dFTlVpaEhKaFVRNVl3SldZYS9VRVRrRHhWaU11TlpGYWFNbnhtbUtqNk80YUlUVitrUlZUTWk1RWprTURLbEdsRTFVd3I0QzBWRWZ0Y2pxdU41QVZPQm43V1lHdmxBSlM2b3VjcVlJYWJrMUxCRFFwVXhJWStvZDZiazhDZUtpSkJXSUtiaUJTT21QRDl6bUhCOHBBSG5PZU1hNWhEak9XRVYwc29EMHpHSG1NeVlVSTgvVVVTRXJCSGpqSmM0VEJrL0dqRFY4cUU4enVxNWlrZk0zdmhaNzVEY3daak1DVkVsVXpyZ0R4UVI0WUNvZ1JjMW1PcjRVWVVwNDBOMU9LZmtLaFZpZHNaUHJNSXQ1RDJUQ1loNlowSWova0FSRVRyRU5MeHN4RlRKajNKTTdQbGdPOHpMakdzRXhPVEdUMGFIRzZtWVRJMll6SmhRaGQ5UlJLUkJqT01TRGhNWlB4Z3cxZkxCZXN3TFhHUE1FRFB3azVEaFp2YkdWUGFJT1RJaHl3RlFSRjdlaUtnVGwyZ3cxZkZYRGFhTWozYkFITTgxekNFbThKTWF0K1JHSm1JWllub21GQUJRUkY2ZVIwekRSUXhUSlgvbE1PSDVjSVk1eGpXT2lHbjRrWG5jVmpZd2tSNHhqaW50QUlySXEzdEhqT05DSGxQRy94aW1BaCt2UlZ6TE5RSmlEdnpJSEc0dEc1aElnNWlXQ1EwQVJlVEZXWTZZRXhjS21HcjVuNEFwNDhPWlE5U2VhNHlJY2NZUHhnS0w1ZTV3OE02NUhGZktCaWJpRURNeW9SSVVrUmRYSWFiaFlqa21IUC9qTWVINWNQWURjU2V1WUE0UjJjZ1BoZ3hMN0k1Tk9QRVhwKzZ0OWptV3lnYW1VU1Btd0lRTUZKSFhka0tNNDNJMXBrYit3ekFWK0hBbDRocXVVU0dtNHdkRGhrc3kzdzZjWVYzbHNFZzJNb2tlVVQwVEFrWGt0WG5FREZ6T01GWHpIeDJtakkvMkUzR09hL1NJcWZqQmtPRzhyT3g1Z1hWVmhzdWNNWWtNTVk0SmdTTHkwbnJFSEhtTkVoTTUvMUZoWXM5SEd6RGp4QlhNSVdMUEQ0WU1aLzBJeGtYNktzTWxua2w0UkFXbUE0cklTM09JeUl6WEdERFY4Mjg1SmxvK21CV0lhN25HRVJHWjhWZGpoblBLZ1ZjSWUxelFNSVVHVVpreEdWQkVYbG1MbU1EcmVFeVUvTXVBS2VOajJRL0U3YmxHajVpZXZ4b0xuRkdPdk5KWTRyeUJDZlNJYTVnTUtDSXZ6REpFZUY2cHg1VHhUelVtSEIvTDlvakxqQ3RZZ1lpS3Z6S0hlWWVSSzR3bHpuSEc3UXh4bVRFVlVFUmVXSVdZRTYvbE1OSHdUdzRUTFIvSzlwZ1J1RWFGQ0dmOGxjY3MxM09sazhjWlJ5YVFJNjVpS3FDSXZLNFJNUld2MW1FaTR4OE1VeU1mcVM4d28rSWFBMkpPL0ZXRldTMDM2SFBNNjdtZHd3eGpJcUNJdks0U0VabnhlZzRUZ2I5ck1lSDRRTDk1ekhIR05Sd2lHdjRxWU01KzVDWldZWmJqZGdmTUtKa0lLQ0l2YTBCTTRBbzlKZ3Irem1PaTRxTU1WWVpaMmNnMWZpSml6MStOR1dZMDNLekxNQ2R3c3hwempHbUFJdkt5UENJY1YvR1lhRW5EVk0rSEdDcUhjM3F1WVJraWpMOXlpTXQ2Sm1CN3pNaU1XN1dZVXpFTlVFUmVWWStZbnFzTW1CclpZU0xqL1ZrNFpEanZqYXNjRWRIeVZ6WGlkc1lrck1TTWhsdTlZWll4Q1ZCRVhwVkhoT2RLQjB3NHF6QlI4cTZzYjMyT2kwcXVNaURDOFZjRDRrcGpLalhpTXVOR2I1aFZNUWxRUkY1VWo1aUJLNDJZMmp0TUJON0xFQnBmWUJGdlhPWC9JZUxFWDVoRFZNV0Vhc1MxM0NoZ25qRUZVRVJlbEVmRWdhdFZXTVI0YXphRTlyZ3ZzTnpPdU1wUFJOVDhWWTJvbWtuVmlNcU0yM1NZMXpBRlVFUmVVNCtZa2F0WmhnVWNiMmNJYmVVZHJ1YU1xMWlHS1dmOHhZaW9tb21WaUFyY3BzTzhqQ21BSXZLYVBDSXFiaEN3UU0wYnNMNDk3Z3VzVkl4Y3AwVkV6MTk1eE5STXpmYUkrY0Z0QXM0SVRBQVVrWmZVSThhNHhRNlg5VXpMdXNabjJHSm5YTWN5VEIzNHF4NHhKZE96RERFak4zbkRHWTRKZ0NMeWtqd2lLbTR5NEtLTUtYWFZEbHZ0akN2VmlCajVLNGVJUFcraFEwek5UUnFjMDNNN1VFUmUwWUFZNHpaSFhPS1p6UCtWU01BYlZ6SkUxUHhWUUlRejNrU0ppSXliMURqbndPMUFFWGxGSlNJcWJtUVpMZ2hNWTZ3eXBGQnh0UkpUdWZGWEJTSk9YT1lVMnJxdTJ6QndHY3NRMFhPTEE4NHliZ2FLeUFzeXhCaTNDcmpneEJTR0E5SUlYRzFFUk1kZkJVUUVMbURCWi9pWEQ4WUZXa1RVM0dLSHMycHVCb3JJQzZvUVVYSTdqN01LSmpBZWtNYit4UFZLVEhsKzRERGxlWmxWK0t3Y2VaRVZtSExjSXNkWkdUY0RSZVQxV0lhSWtkdU5PT3ZJemF4R0drWGdCaU1pQnY2cXcxUm12TVFxeEJ5Tmx3UkVjQXRjOEJ1M0FrWGs5VFNJOEV5aHdUbUJXNDBPU2JqQVRTcE1IZmlCeDFUZ0piMURYQlo0U1k2cGdlc051TUJ6SzFCRVhrK0JpSjVKT0p4aDNDZ2doYXdhdUkwaFl1Q3ZSa3p0ZUVtTGVVZmplUTJtQXRjTHVNUzRFU2dpTDZkRHhBK21NV0NlNDBZMXRuUDF3TTBxVEpYOG9NSlV6d3RLbk9PTVp4bW1hcTVYNFpLR0c0RWk4bkk4SWdJVHFUQ3I0allWTm5MVnV6RUJROFRJRHpKTUhIaEJpZk9La1dkNVRKUmN6K0dTLzNFalVFUmV6WWlJakttWXc1ekFUV3BzNE1xMlp5b05waXArMEdGcTRIa2xMaWxHbmhNdzRia2VQbWdRMFhNYlVFUmVUWTJJaHNuMG1HUGNvc1U2Mlk4cURFd3F3NVR4Z3hJVG51YzF1TXdaenpCTU9LN1c0NE5UaGFtSzI0QWk4bW95UkJqVEtSRlhjSXNlVjh0K0hOdk9tRnpBVk1XUE1rd0VudFZoaWIzeGpBS2Y1Vnl0d1FkbU9TWXliZ09LeUl2NURSRWxFN0ljVVVkdVlCbXU4ZVBZZHNZYmNaZ3lmdEJoSXVkWmxtR1JpbWNjOEZuTzFSdytJQU9tT200Q2lzaUw4WWpvbVZLSHFNQU5QQlp5aCtiZGVFczlwa3ArVkdHaTRsa2VDL1djMStDem5Hc1pQaUtaWTZMa0pxQ0l2QlpEaEdOYUpXSk9YQzlnZ2Z6UTlzYWJPMkJxNUVjT0V6M1A2YkZVd1hrQm4rVmNLK0NEbkdTREtlTVdvSWk4bGdZUkRkT3lERk1aMTdNTUY3Z3FHTy9DTUZYeUk4TkV4ck1jRmd1YzFlR3puR3Q1Zk9CSUdxWis0eGFnaUx5Vy95SENtRmpBbE9kNk5jN3l3WGczTmFZR2ZoUXdjZUE1QWNzNXp1cndtZU5LaG84OGYrY3hVWElMVUVSZVNvOEl6K1E4SmhxdVpqaWo3SGhYR1NZOFB6bGlJdkFjaHl2MG5OUGhNOGVWV254MDVPOENwb3diZ0NMeVVpcEUvTWJranBqb3VWcURPZTZuOGI0NlRIWDh4R0hpeERONlhPUEFPVy80N01DVmZ1Q2pocjh6VFAzR0RVQVJlU2tacGpLbXQ4T0VjUzNMRU9kNzNwM0hoT05ubU1oNVRvbUlReGpNaHVBeFlaeFI0Yk9LNnd6NEpQQVBIaE1sTndCRjVKVjBpS2lZWG9iUEhGY0xpSEk5Nzg4dzlaT2ZESmp3UENmRGhCLzV0OTdoazRZekhENXJ1VTZKVHdiK29jVkV4ZzFBRVhrbEpTSjZKbWVZT0hLMVBXSnE0d00wLzc4OU9GRnNGRm0yQmJwQkwzM0tnQm5zN0Z1QWlQMy9uL2xxNnU2cWpHUVVDTFVWYTBGSmhBRVBwZUtFRmtyRGY4a0wvcFF3VHFDMDNFUVFFbjUzaGRaeE85QVk4MFFFRVFuMzEwTHgzRW9Ra1hROFJRcWxZcWlDNGptaFFzanpkNUxnVDU1Uk5SVGhKaVVDQ1g5S29aVGNEalRHUEpHL0VGRnlmKzlRcnR5cWdaYjBQRVVMVFJqS29QU2M0QkFvK0tjV2Y3b3dSaEtFTHR4RUVIcmhUemtVeCsxQVk4d1RLUkRSYzM4bEZHNldRZXQ1amdKS1JzVkI0UlNFaElFY2YvS01lSU5TY0pNM2hONzRrNGNtM0F3MHhqeVJCSnJqQVRLRXZuQ3pCRXJOY3dpMGxrcUtVTW9KVndSS2hucjhLUkVxSDlCYWJ0RkRhZmpURlZyRHpVQmp6UE5vRVZIeUFDbENKYmU2UXJud0pCNUtRZzJLNHdTUFFFOGx3NTh5aGo0UXdTM0VRZW40U3dvbDQyYWdNZVo1bElqb3VUK0I0cm1WaC9MT2syUlFLaXBYS0RrbjFQaFRRcTFEb09BZnBFQkV3UzBLYU1KZmNtamNERFRHUEk4VVdzSUQ5RkI2YmxWREVaNURvQTFVcmxEZU9LSENuMTRZNFJBb2hQK1FPa0ZNencwcWFCZit6VU5ydVJWb2pIa2FQU0pLSHNCRDRXWUZRaWxQMGtCNXBkWkJxVGlod3A5eVJ0UUlwYlh3dTZ2UEVKZHpBNCtJbkg4VGFDVzNBbzB4VDZOQ1JNc0RWQWk5Y0xNY29Zd25jVkE4dFJaS3d3azUvcFF6UWhEaHNzeGhYTS8xdmlLbTRUOGNGTWV0UUdQTTAzQ0lFQjRnUStpTm0rVUk1VHlIUUJOcUxaUjNUc2p4cHkrTXliQld3ZlY2UlBYOFJ3bE51QkZvakhrV2dvaU1SN2dnMUhDekhLR2M1MmlnRkl4b29ieHpRb1UvWFJqanNaWnd0VDVCRlAvVlF2UGNDRFRHUEF1UENNOGpRR201V1k1UXhuTTRLQzBqV2lpZUV5b0VoQkdTWUoyR3F3MFhSR1g4bDBBcnVSRm9qSGtXSlNLRUIraWhDRGVyRUhJOGhVQkpHTk5DYVRtaFJzQXpwc1FxTDF4dHVDQ3U1bTh5S0JkdUJCcGpua1VLemZFSUhxR0UyM2tvd2pNMFVFckd0RkJhVHZBSVpJd1pzTXJBdFlZTFJ2VDhUUU5OdUExb2pIa1NWMFNVUEVLTlVNYnRybEFhbnNGQjZSalRRbWs1b1VOSUdKTmhCYysxaGd0R0pQemRGWnJuTnFBeDVrazBpR2g1aEJ5aGtqZElFTHJ3QkFJbFlWUVA1WjBUQktHR01SMldxN2hXbjJCTXhqOGtVTjY0RFdpTWVSSTVJb1JIY0FoNTNxQ0FVdlArR2lnbG82NVEzamtsUWNBeEtzTlNCZGY2aW5FTi81QkJ1WEFiMEJqekpGSm9qb2VBMHZFR0xiU2VkNWRCNlJnbFVONDVKVU9vWmN3VkMyWENsUnBNdVBJUERUUnVBeHBqbnNNVkVUV1BJRkNFdDBpaHBBUHZUS0FrSEFHbDRwUWFvWXhSTlJiSmhPdElqZ21PZitxZzlkd0VOTVk4QjQrSWprZjRpbERDbTlUUUxnUHZ5ME1wT0NKRnFPS1VEa3JQcUJ3TGxGeXBkNWhTTWdETmN4UFFHUE1jU2tUd0VEVkNMN3lKSk5BdUErOHFoL0lYUnppRWNrNkNrak5LQ3N4cXVGS05hUjBETDFCS2JnSWFZNTdERjJpT2gzaERxT0J0YWtRa0hlOHBnU0lja1NIMHdra1psSjV4VFlKSjdzcDFCb2RwQ1VOdlVESnVBaHBqbmtNQ3JlSWhYaENxZVJ0SkVOUHdmam9vR2NkVUNGMDQ2UzhvR1VkSWxXSlUwZ2hYa1FwekNvWThsSlNiZ01hWXB5Q0k2SGlJQkNIUEd6V0lLbmszSlJUUE1SNEtKd20wam1QRVo0aEtLdUU2bmNPc2xxRWVtbkFMMEJqekZEcEVDSThnVUhyZVNDNkl5b1IzNHFBSXgvUlFoSk1LS0tsd25EUVpRcThmd25Ya0RRc0lGV2dkdHdDTk1VL2hIWnJqSVZvb3ZKbEgzS3Z3TGdTSzR5aUIwbkZTQjYzaXRLN09YWW9mMHF6MHdyVjhpZ1VLYWc2SzV4YWdNZVlwbE5EZWVJaDNoRkxlN29LNFYrRTlORkJLanJzZzFIRGFGMmc5RjVDcmNKTSt3eUovVWN1aGxOd0NOTVk4aFF5YTV5RnFoQnh2NXpHaTVEMWtVRnFPeXhGNjR6UVA3U0k4akx4aElhRldRL25DTFVCanpGTncwSzQ4UklWUXp0c0p4dlM4Z3dTS2NGeURrT09NQzdTY0I1RWFTeFdNOEZBU2JnRWFZNTVDQWlYaE1kNFFxcmlERENNeUh1OEt4WEZDRDRVelBDSXFIdUlqeFdKL01lSUtUYmdCYUl4NUJnSXQ0ekZ5aE41NXN5SEhLT0hoUEpTYVU2QjBuT0VRNGJrL2Y4RnlpVEFHV3NzTlFHUE1NN2hDcTNnTWgxRExXeldZNEhtNEhFclBLUTZobWpNNnhIemx6dndGYXhTTWNsQWFiZ0FhWTU1QkMrMHJqK0VRdXZJMlVtQkt4Y05kb0FpblZBaGxuRk1neG5OSDBxUllwMlZVQnVXTkc0REdtR2Z3RGsxNGpCUWgza1plTVNubjBRUkt5a2tkRk9FTVNSQlRjUzlTSjFncFlWd0o1UXYvMGZzcXoxNWU4cnp5VjA0Q2pUSFBvSUtTOENBSUpieE5nV2tsajlaQ3lUZ3RRZWd2enZHSXlvUjc2QXVzVnpLdWhwTHdCL0ZaZ3Q4a1JTc2NCUnBqbmtFQkplTkJFSEs4U1kwWk5ZOVdRNms0TFVPbzRLd0NVWW5ucmNSL3dSWUQ0encwSWRrWDBKSmFPQUkweGp5RERFckpZMXdSeW5pTEhuTmFIcTJBNGptdGdTS2NJdzV4V2M5YjlFV0NUUnhIOU5CYWRobEdsTUlvMEJqekRCd1V6MlAwQ0JXOGhjTWM0ZEVjbEo3VEJNcGZuSFZOTUNJZnVORlFPOHpKQ2tRMUhDSFF5Z0xqMHErTUFZMHh6d0RhbGNkb0VhcDRnd1p6Q2g0T21uQ0dReWpqdkE2anNvN3JEWTNEckV2SERGSENNVmp0VGFpQnhwZ25JTkI0RUkvUU83ZVRCSE02SHUwS0plV2NHc3JBZVI3alhDTmNveXRmTUM5cGhJS29ncU5Tck9ZR0txQXg1Z24wVUY1NGtIZUVQTGZ6bUZQeWNCNUt4amtEbEpJTFZKaVMvWjl3a1d1VEpWaWlGSklWb25xT2NsZ3Y2UmtDalRGUHdFTjU0MEVxaEZwdTV6RGpqY2Vyb1ZTYzVSQktoQXRVbVBiYTlKd2tYWk1sV0tZWStGMkNHTWR4R1RaSWVnWkFZOHdUcUtFMFBFaUYwSldiQ2FhNWxuZFFRUEdjVlVQeFhLTENMRmY2VHFoSTU2dnNnc1h5Z1QvOGhTalBjVy9ZSXVuNUo5QVk4d1JLS0MwUGtpTWszTXhqWEpJMUErL2lCVXJQV1FNVXgwVWFMT05lOHJLcTZ2ZW1xcW84ZTdsZ25iem5MeGxpRXVHNENwdGNoSDhBalRGUElJTWlQRWlHRUxkN1E1eXJ2d3J2Sm9VaW5QY0twZVVpSHNjcmV2NnRSMVRGQ2UvWXhnbC9CeHBqbnNBRm9ZUkhjUWlrM080Rk1iWHdycUNrWE1CRGVlVXlYWUpqRlFQL1ZTQktPT0VkRzFYOEhXaU1lUUpRWG5pVUZBSEg3UzdRWG9UMzFVTkpoUE1FV3NkbEJvZmpKTFh3TjRLb2dsTTh0bXI1RzlBWTgvbjFVTjU0bEJTQkYyNlhRa21GZCthaGxWeWdnSkp4SVNsd0VPZUZmNmdRMVhOS2k2MFM0YjlBWTh6bjU2SFVQQXBDT2JkTG9YamVXNDJJbnZONmFCMlg4Z2tPVUhRTVNJS1lqSk42YkpieFg2QXg1dk9yb1hnZVJCREt1UjAwNGIyVmlNaTR3QmNvLytOaWttRm5hU1ZVYWtSMW5IVEZkaDMvQVJwalByOENTcytEWEJHcXVCMFV4N3ZMRVBPVjh6eTBsc3UxS1haVXRJeVFCREdPMDY3WXpnbi9CaHBqUHI4WEtNS0R0QWhWM093S0plZmRPY1JjaFBOU0tCZXVJRFYyOHRvSW8ycEV0WndtbU9iSzk3ckFpSVovQTQweG4xOEtoVWRwRVhyblpqMlVuSGVYSUtyaHZCcGF3eldreE8xY0l4d2hDV0ljNTJDS2EvbWROSWdUL2dJYVl6NC9LQ21QOG83UU96ZHJvZVM4TjhFSTRTeEpvQ1RDVmFSS2NJdlhSaml1UWxUTE9aaVFDMzhaSEdKcS9nSWFZejY5SzVRWEhxVkdxT1ZtSHNvTDcrMktFUVhuMWRBS3JpVHZEdHNrdVJkT0VVUTV6c0s0Z3YrU0YwUWt3cDlBWTh5bjEwTEplWlFLb1phYlpWQlMzbHVMTVQxblNRS3Q0MnA5bVdDdHJPNDVwMEJVeDFrWWxmTjNja0hFQjM4Q2pUR2Zub2RTOGlodkNMWGN5aU5DZUdmdkdQUENlUlUwSjl5Z0t4MldTck9tNXdJOW9qTE93eGduL0VPUENNZWZRR1BNcC9jT3BlWlJjb1N1M0doQVRNczdxekRxZzdNa2dWWnhHL0Z2TDVoeHllcXZ3b1V5UlBXY2h6RWRBdzBpT3Y0QUdtTSt2UXJLTzQvaUVMcHlHM0dJcVhobk9VWWx3bGtOSW5wdTEvc3FjeWxDcWN2ZWF0OXpqYStJeXJrQVJ1UlVYcUNWL0FFMHhueDZiMUJhSHNVaGRPVTJCYUtTanZmbE1PNk5zeVNGNW9TM3VsNjd0bjMveHJkdGR4VnVJQW1pQmk2QUVRT1ZEbHJDSDBCanpLZVhRMmw1RkljUXQvbkFtS3pqUGFXWTBIT1dSMFRKQjFBaHF1UVNpTXNZa1VOcitSMW9qUG4wTWloWEhpVkRpSnRjTWVILzFUM3ZCbE9jY05ZTElyN3lkRmRFSmNJRkJIRXRJM3BvSmI4RGpUR2Zub055NVZGeWhMakpDNmFscFJmZWcyQlN6Vms5SWhMaHljUWg2b05MWEJHVk1Pb1ZpdU4zb0RIbTAzTlFlSmdjSVc3aHNVQ2FsZS92NzAxVlZYbm1MdG5BSTF3eDdjcFpiNGh3d25OVmlIcmhJbGRFbFl6eTBJVGZnTWFZVHkrRndzUGtDSEdMVjZ4WDhBZzlwam5oSEVrUThjWlQ5WWpydVVpSHFKWlJra0R4L0FZMHhueDZLUlFlcGtJZzVRYUNPRmUrdjc5WFdZS1lra2RvTWFQaUxJK1loaWNTaDZpU3k3U0lFc1lWVUVwK0F4cGpQcjBVb1lTSHFSQkl1VUdEbUx6bkw5Y21TeEM0Q0kvZ01hZm5yQXd4SGM5VElpb1ZMdU1SazNGRUN5WGpONkF4NXRPRGt2SXdGUUlwTjhpZ3BSMy9jUFZsNXZCRDZyTEtDdy94ampsT09FY1Frd3c4aTBkY3g0VnF4TlFjSVZCU2ZnTWFZejQ5S0NrUFV5R1Fjb01VU2lJOHhUdG12WEdXUjh4RmVJNEJjUVdYcWhEVGNVd0dSVWlDeHBoUEQwckt3MVFJcEZ4UG9MVTh4enZtZWM3S0VPT0VaeENIcUVTNDFCdGloR05xS0QxSjBCano2VUZKZVpoM0JGS3UxMFBKZVpJSzg1S0JjeVJCekt2d0JEbmlXaTZXSWNKeFZBZkZrd1NOTVo4ZWxKU0hlVWNnNVhvdGxKNG5xYkNBRTg3cEVQVXF2THNLY1FXWGM0aDQ0eWlCOGs0U05NWjhlbEJTSHVZZGdaVHJ2U1BrZUpZS1M1U2NWU0VxNTcxNXhEbmhjZ2tpUE1kQnFVaUN4cGhQRDByQ3c3d2prSEs5ZDRSS25xWENJcDZ6WGhGVjhMNTZqT2k1bkNDbTV6aUhVRUVTTk1aOGVpa1VIdVlkZ1pUcnZTUGtlWllLeS9TY0l5bWlDdUVkOVFuaWFxN1FJNFlUTW9SeWtxQXg1dE5Mb2ZBd0hvR1U2NzBqMVBJc0ZaWkpoSE42eEwwSzcyWklFSmR4RFkrSUYwN0lFY3BKZ3NhWVR5K0ZJanhLaXhEWDh3aTFQRXVGaFp4d2prZmNxL0JPaGd2aUxzSTFha1NVblBDR1VFNFNOTVo4ZWc3S2xVZHBFZUo2TFVLZVo2bXdWTTVaSmVLYzhDNEdoeEU5VjhrUjRUbWhST2lGSkdpTStmUWNsSjVIYVJIaWVqMUNOYzlTWTdHU3N6TEVYUWJld1hEQkNNOTFIQ0tFRTNLRU1wS2dNZWJUeTZDMFBFcUxFTmNUaERLZTVSMmg1QlVqR3M0Umg3aWs0K0dHQzBhVVhBa1JLYWRrQ09Va1FXUE1wNWREOFR4S2l4QTNRQ2poV2Q0UlNpWEZDTTg1Y3NFSXo0TU5GNHg0NVVvOUluSk9jUWpsSkVGanpLZFhRcWw1bEN0Q3d2VWNRaDFQNGhGSzJXT001NXdod1lpU2grb1NqSERDbFR3aUdrNkJrcE1FalRHZlhnM2xqVWU1SW5UbGVqbENKVS9TSXBTU0htTytjazZmWU1TcjhEZ2VZNUtCYTcwaDRzb0pWeWh2SkVGanpLZjNEaVhqVWE0SVhibGVqVkFpUEVlTFVFcXl4Sml2bk5NbkdISHBlWlFHbzNxdTVxQWxuT0toVkNSQlk4eW4xMEs1OENpQ1VNZjFPaWgvOFJ4WGhGS1M4b294WHptbnhhZ1BIa0lLakdxNW1pQWk0NVFheWp0SjBCano2VjJoOFRBSXRWeFBvR1E4aHlDVThodEpNY1p6VG90UmhYQi9nOE1vei9VOElocE95YUI0a3FBeDV2T0Qxdk1vQ0xYYzRBSkZlQTZFVW43WFk1VG5uQmFqTGozMzFpVVkxWENERWhFOXB6Z29MVW5RR1BQNXBWQThqNExRT3pmSW9UUThCeFQrNERHcTVwdyt3YWlhdTVJUzR5cHU0UkRCU2RDdUpFRmp6T2YzQlVySm82UUl2SE9EQmtyR2M2UUk4YWNTb3dyaGpEN0JxR3pnZmdhSGNSVzNHQkNSY1VvUGpkK0F4cGpQcjRUeWhVZEpFYWk1UVErTjUzQUk4U2Q1eGFoWDRZenJCZU0rdUJlUENSVTNhUkJSY1lxSGt2SWIwQmp6K1hsb1BJcERvT0lXMEhxZUlrTkkrSk9rR09VR3poaGVNQzRUN2tFeVRLaTRqVU5FeHlrbEZNZHZRR1BNNTlkRDYzbVFESUdjV3pnb25xZDRRK2pLWDNwTThKd2hyeGlYZlBCMkg1aFNjUnRCakhCS0JxWGdONkF4NWdsQSsrQkJDZ1J5YnZFSzVaMm5xQkJxK2JjV0Uwck9rQUlUc29HM0dUSk04ZHlvUm9UanBBUkt6VzlBWTh3VCtBS2w0RUVxQkJ3M3FLRFZQTVU3UWkzLzhZNEpYd2JPcURHbDRRMmt3aVRQclJ3aTNqaEZvSGwrQXhwam5rQUo1Y0tEMUFnNHJsY2g0cDJuYUJIeS9GZUZLWjR6UEthNG5sdDFGMHhxdVZXUEdNOHBYNkZkK1Exb2pIa0NIcHJ3R084SXBGeExDc1I0bnFKSDZKMi9LVEdsRUU3clUweDVFMjR4WkppVTl0eXNSSXh3U2cyTjM0SEdtQ2NnMER5UDBTTEVsUWFIS09FcEJLR0t2eXN3SmZXY0pxK1lrbjV3TlNrd3pRM2NMa0ZFd2trWmxDLzhEalRHUElNVVNzbGpkQWh4SFk4NHg1TWtDT1Q4UTRGSm1YQmFpVW4vNjdtS1ZKaVJDN2Y3Q3pFWkoxMmd2UEU3MEJqekRISW9qc2U0SW5UbEN2S0dFWjRuY1Foay9GT0ZhYlZ3a3NlME4rRmkwcVNZVWZNV0dXSWFUaEZvbnQrQnhwaG4wRUFUSGtJUTZyamM0REFpRlo0a1E4QXhVR0ZhNmptcHYyQlMwbkFoZjhHTXhQTVdBNko2VHVtZ1hma2RhSXg1QmowMHoyTWc1TG5ZVjR6eVBFdUpRTXFReDR6L2Rad2lyNWgyNmJoQTZ6REhEYnhKaVNoT3FxRWsvQUUweGp5RkJFckpZeUJVYzZrR296S2V4aU5FcFVzd0krczRRVXJNeUFiT2FCMW1GY0tiU0lJWXgwa1psSXcvZ01hWXA1QkJ1ZkFZS1FJbEZ5b3hLaGw0bWhhaEs1V3J3NXlzNVFTUE9aVndnbmVZbFhqZXlDT3E1S1FVU3NVZlFHUE1VMmlnWFhrSWgwRE9aUXFNYTNrZVFjaFRrd3l6bkJlTzZsUE1TRDFIU0oxaTN1dkFXemxFdFp3aTBEcitBQnBqbnNJVldzTkRPQVFjRnlreHJ1R1pFS29aVTJKZVVnMGNJNitZNDFwR0RDV1dxSG16Rm5IQ0tWK2hDWDhBalRIUElZR1M4UkE1QWltWGFEQ3U1S2tjQWlXajJnUUx2SHJoaUJxem5PZWZ4TDlpQ1hmbDdUSkVPVTZxb0RqK0JCcGpua01PVFhpRUFpRXUwR0Zjd1hNVkNHU01rMWNza1JRdDQzcUhXV2s5OEcveWZ3V1dxYm1ESG5Gdm5KUkJLZmtUYUl4NURoNWF5eU5VQ0FsblNZSlJCVTlXSTNEaG1CckxKTVgvQ1NPa3hBS3ViSy9YM3BjT0M3ME8zRU9CT005SjBGcitCQnBqbm9OQUszbUVHcUdPczc1Z1ZNR3pmVVdJbzNxSHBiSkdxUFV2MkZ2aXVZc0JJNjZjMGtNVC9nUWFZNTZFZzVMd0NPOEllYzVwTUtyaTZRU2hucU9reEhLdWJJV2g5b0pkdlFuM1VTQXU0YVFQS0k2L2dNYVlKOUZBNjNpQUZxR2FNd2FNOG53QUNIbE82QjNXY0tVWC9zbS9ZamN2UFhjeVlFVEdTUVdVa3IrQXhwZ24wVU1yZVlBZW9ad3pNb3hwK1FpK0lGQnlpdFJZS2NsSzN3bi9KajdCUGk0dGQxTmdSTU5KRnlndGZ3R05NYy9DUVVsNGdDdENqdE5hakVoNlBvUTNCREpPR3pKc2NYbDV6ZlBzNVlLZEpBMzNNMkJNenlrQ1RmZ0xhSXg1RmlXMGxnZEFLT1VrdVNEdU12QXhlQVFTem1sVG5DMnBoVHNxTUlhVFBKU01md09OTWMraWcxYndBRkNFVXp6aVhvUVBva2RJT0VkcW5Lc1M3cW5IbUl5VFNpZ04vd1lhWTU1R0FrMjRQNGRRenlrWFJHWENoNEhRVjg2VE41d21xWVg3eWpDbTVpUUhwZWZmUUdQTTB5aWhmWEIvQlVLZUV6eWlNdUhqY0FpVVhPS2E0eFJwTGR4WmgxRXRwd2lVaEgvclFHUE0wK2lnT2U2dlJxam1oQytJeVlRUDVBMkJqTXYwR2U3T2VlSHVIRVlKcDdSUUN2N3RCVFRHUEE4SHJlZnVXb1J5anVzUmt3a2ZpVWNnNFZKZGhydktXaDdnQTZOZU9LbUU0dm1MQjJpTWVSNGx0SUs3RTRRY3h4V0llQlUrbEN0Q1Z5N1c1N2lYcEJ4NEJFa3dxdVFrQjBYNGsxd0FHbU9leDRBSTRlNVNoRGhLRU9HRUR3WWh6eFg2QXZmZ1BvVEhLREd1NVJTQjR2aExBNERHbUNmaW9OWGNYWVpRenpFZjBKS0JqeVpESU9jcVVxYzRWbEwyUE1vVkU0UlRQSlNLUDBrQ2dNYVlKL0lCTFJIdXJVYkljOHdydEpZUHAwWWc1VXJpditBNHhWL0M0MlFZNXppcGhOTHhwemQ4UTJQTUV4RkVOTnliUjZqbUNJRlc4dkcwQ0FsWDY0c0VSOGk4OEVnZm1GQngwZ1doaEQvMStJN0dtR2RTUUx0d2I0SlF4aEVlU2lwOFBJS1E1d2JpTSt3cktmOFNIa3NTVEdnNVJhQmsvQ25EZHpUR1BKTU9FWjU3UThoeFJBbkY4eEU1QkhKdUk0M0RYbHpUODNnWnBnaW5lQ2llUDNqOFFHUE1VM0hRTHNLZGZVRklHT2NRY254SUpRSXBOeHRxaDV0bGRjZTcrSW9wanBNS0tNTHZKTVVQTk1ZOEZZK0loanNyRWVvWUI4WHpJWG1FcnJ5QitPS0NyZHpiUjg5N2tRUlRLazVLRUhMOG9jUlBOTVk4RlVtZ0pjSjllWVFhUnZVSUpYeE1nbERERzRrdnYyQ2ROQ3MvZXQ1Vmpra2RwM1JRU241M3hTODB4anlYQ2hFMTk5VWpWRERLSTFUeVFUa0VNdTVCZkYyOHBKampzcUwydmZEdVBDWWxuRlJDYWZsZGhsOW9qSGt1Z2hqaHZoQnlqS29SYXZtZ1NvU0UrN20yL3IxNnl6UG5YUHJEeFgyVDVWWDE3dHRlZUpZQjB6Sk9jbENFMzN6Z2J6VEdQSmtDRVFYMzVSQVN4bFFJQ1I5VWkxREx6eS9ETk04cEF1V1YzMGlDdjlFWTgyUjZ4UFRjMVJ0Q0xXTnlCQndmbFNCVTh0T3JNVU00eFVPcCtjMGIva0ZqekxQSkVPRzRxdytFYXNia0NPUjhXSzhJcFB6c09zeHduSlJCNlVqMitCZU5NYyttUTh3SDk5UWpsRE1tUitDTkQ2dEI2TXJQVFJMTUtEbEZvUEViaDMvUkdQTjBNc1FJOTRUUWhURTVBaFVmVm85UXpjL3RDK2Ewbk5KQ3lVZzIrQTJOTVUrblEwekdQVG1FaEJFNUFoVWZWNEtBNDZkV1loWW5sVkJxVXZBN0dtT2VUNFlZengyOUllUVprU05ROFhFVkNBay9NWTlaR1NjbFVEb3l3KzlvakhrK1BXSVM0WDQrRUNvWlVTS1E4M0g5aFZERHo2dkhQTThwUFRTeXd4OW9qSGxDT1dJeTdxZEh5REdpUXNEeGNRbENqcCtXcEpnbm5GSkNjWlFVZjZBeDVna05pUHJnZnFBSU5ZOFFIMWlHa1BDVEVvZDVqcE1jbEpJbC9rUmp6RE42UTlUQTNUaUVXbW90UWxjK3JnYWhocDlVaGdVYVRobWcrU3NDTk1ZOEkwR1VFKzdsRGFHU21pRGsrYmdFSWNmUHFjUVNBNmZVMFBvdkNOQVk4NVFhUkpYY2kwZklNU0pCb09BRGN3Z04vSXdhTE9FNHlXRUpHbU9la2x3UTVibVRLeFNobGlFa2ZGd05RalUvSVk5RktrNFpzQWlOTWMrcFE5ekFuU1FJdGRRcWhQN2k0eEtFSEQrZnIxaW01NVFTaTlBWTg2UXlSRG5oUGpLRVNtb2RRaGtmMkN0Q1BUK2JyMWpHY2RML3d5STB4andwUVZ6T2ZkUUlPV29DWmVEaitrQ281Q2ZUWTZHU1Uzb3NRMlBNczJvUTEzQVhIUlNoOW9wUXdjY2xDQ1g4WFBvRUMvV2NVbUlaR21PZWxrUGNWKzVCb0hocURaU2VqeXRIcU9WbjBpZFl5SEhTLzhNeU5NWThyU3Zpa29GN2NBamwxQVRLLy9pNFdvUUtmaUo5Z3FWS1RobXdFSTB4ejZ0R25CUHVvRVFvWWNRWEtCOThYQWxDd2svaks1YnJPYVhCSWdsb2pIbGlEbkd2d3R0NUtEMjFCdHFWRDZ0Q3FPRm44UlhMT1U3S3NFZ0xHbU9lMkJVakN0NU9vRFRVQkpvVFBxb0JJY2RQd21PRmtwT3dTRW5RR1BQTTNqR2k0ZTB1Q0dXTUtLQzlDaC9WSzBJOVA0VUdhL1NjMG1NSkp3U05NVTh0d3dqUG14VlFoRnFQaUlLUHlpTlU4ak9vc0lianBBOHNrQXdrYUl4NWFwSmdSTWRiZVNndEl6SkVGSHhRZ2xBaS9NK1RBbU1TUk5TY1ZHS0JsaVJvakhsdUhVWWtQVzkwaFZJeW9rTk13UWRWSU9UNVh5ZGZNQ2J6aUJnNEtjTzhodCtBeHBnblYyUEVaZUNOVW9SU3htU0l5WVFQcVVmb2xmOXh3d1Zqbk5UUUhLZWxtRlh3TzlBWTgrd3lqSERDMjd4QjZSblJJY29KSDVKRHFPZC9XcGRnVERJd2c5WndXb281TDhMdlFHUE1zNU1MUm53UjNzUkRxUmlUSXlydCtJamVFU3I1WDlaZ1hFZEJoSEFhNWpqaEQ2QXg1dW4xR0pQeEpnTEZNV2JBaUpvUFNCQktoUDlaa21QY08rbWh2WElHWmx3Ry9nUWFZNHpIbUlJM2NWQ0VNUlZHWkFNZlQ0R1E1My9WNERDdUpPbWdlYzVJTVNucCtRdG9qREdzTUtiaUxVb29EV1BFWWN3SEgwNkgwQmYrUjNsTUtFaDJpQkRPY0ppUzlQd2JhSXd4WklZeERXL1FRbmxsVklkUjJjQkg0eERxK1Y4a0pTWmsvQ2FIVm5CT2hnbEp6MytBeGhoRHlndkdlTjRBbWpDcXhMaEsrRmhxaEFyK0J3ME9FekloT1NDaTVad2E0eTREL3dVYVk4dzNjc0dZcjl3dWcrSVpKUTdqMHE5OEtBSkYrSi96Z1NrdndtOEthQWxuRFJqMUl2d05hSXd4MzEwVGpPbTRtWWRTTUc1SU1DSHIrVWdLaEQ3NEh5TVpwcndJdnhrUVVYR2V3NGhjK0R2UUdHTis2REFtNmJtVlFFazRvc1drZk9EajZCQnkvRy94Q2FhOENyOHJFVEZ3WG91NGhuOENqVEhtSjQ4eHljQ3RISlNXSXhwTUt3WStESWRReS84UUtUQXBFMzRuQ2JRdlhDSkhSTkl4QUJwanpDOGVZeTRETjJxZ0ZCeFRZVVl4OEVGOElKVHh2OE1ubUpRTGYvaEFoT2NTOGdLbEVJWkFZNHo1VzRVeFRyak5GWnB3VElVNWVjK0hJQWxDSGY4akpNTzBncjg0UkFnWGtReC91clRVUUdPTStVZUpNVitFMnpnb2YzRlVoVmxaeTBkUUlwVHh2K0VETTByKzBpR2k0RkwrZ244NXp4alFHR1ArVldCTXhtMUtLQVhITlpqbnZQQjBBNVNlL3dHOXc0eDMvcTFBUk1mbHVqSkxVNlN1YUlSeG9ESEcvQ2JIbUlLYkROQ0U0endXU0NyaDJUS0VjajQ4ZWNPTXBPWGZCQkdPdXdLTk1lWTNrbUZNeFUwY0ZNOEpmWW9sOG83bmFxSDBmSEJOZ2htWEsvOVJJZUtkdXdLTk1lWjNrbUdNNXhZTmxJeFQ1QldMdUZwNHBndENPUjlhNXpEblZmaXZCQkhDWFlIR0dQTUhlY0dZcjl4QW9Ba24xVmlvNkhpZUJrclB4OVZubUZVSS8rVVJVWEJmb0RIRy9FbGVNS2JuQnE5UUdrN3JIQlp5dGZBa2tpQ1U4VkVOQmVaOThIZGZFTkZ4WDZBeHhnVGtCU09TZ2V0NUtLK2NJU1VXeTFxZW80TFM4U0ZKaVhtdTUrOTZSRGp1RERUR21KQmNNTUlKVnhOb3dqbjlDeFpMeXA0bkVDZ1pINURVV0tBUS9xRkF4QWQzQmhwampESmNNT0tWNnhWUWFzN3pDWlp6amZEdUNpZ2RINDNVQ1JiNDRKOEVFWWx3WjZBeHhtakRCU05LcnRaQmNWeEFTcXlSL1IvdnJJZmkrRmlrU3JDQTZ4bW9FRkZ5YjZBeHhrUU1DVVkwWE0xQjZiakVrR09OcE94NVZ4a1V6d2N5bEZpa0ZBWWtRY1RBdllIR0dCUFRKeGpSY2EwYVNzRmwrZ3lydUZwNFB5MlVpL0JSOUFVV3VYUlVQaENSY1hlZ01jWkU5UmlSREZ4Sm9DVENoYm9NNjd4NjRiMDRLQTBmUTVkaG1VS29YUkRSY25lZ01jYkV0UmpoaENzVlVEd1g2ektzVkxTOER3OGxFWjVQdk1NeWFjZUlGaEVYN2c4MHhwZ1JMVVlVWEttRDhzb1YrZ0lycGRYQWU3aEFLWGsycVJJczlDYU15UkJSYzMrZ01jYU04UmpSY0NVSFplQWFVaVZZNllzWEhzNUR1L0pVYllhbFhNK29EaEdKY0grZ01jYU1lc2VJanV2VVVDcXVJOTVocmFMajBTNVFNcDVINmhTTE5SeVJJYUxrQVVCampCbFhJZTRpWEVXZ3BGeXR5N0NXcTRXSDh0Qys4aVQvbDJHNVhEaWlSOHpBQTRER0dET2hRRnpPZFFvb0hkZVRLc0ZhUmNjalhhQ2t3aFAwWllMbFhNZFJCU0lLSGdFMHhwZ3BHZUlhcnRKRHlibEptMkV0NTRXSDhkQXEzcHZVTDFnaGFUaHVRRXpQSTRER0dETkZYaEIzNVNwZm9BaTNrZHBocGFRU0h1VUNyZWM5U2ZPS1ZVcmhoQUlSR1E4QkdtUE1wT0dDS0NkY3cwT3B1RmxYWUsyaTV6RThOTWU3a1NiRE92bkFLUU5pV2g0Q05NYVlhVDNpU3E0aEtVSUpieUQrRlN2bFBRL2hvTlc4QzJsZXNWTFdjVnFCQ01kamdNWVlNNk5GWE04MUtpaWVONUhhWVoyczV3RmFSUFE4M05BNHJPVTZ6cmdpeHZNWW9ESEd6S2tSNVlRckNKUlgzcW9yRTZ5U0Q5eGZCczBKRDlXVkRxdTVsck55UkZ4NEVOQVlZMmJsaUtxNFJnYWw1KzMreXJGS0tkeGJqNGlDaHhGZkpGalB0WnpYSThieklLQXh4c3dTaDZpZUszUlFDdTVCUGw2eFF1cTV0eHdSRFEvUmxpL1l3bmt1a1NFaUZSNEVOTWFZZVFPaS9zYzFIQlRoUHFSMldDNGJ1SzhCTVo1NzY1c00yMlF0RitrUTAvQW9vREhHTE9BUjljRVZQSlNhdStuTEZJdFZ3bDJWaUNtRisrbWFMTUZHZWNlRkhDSlM0VkZBWTR4Wm9rUk1JbHhPVW9RYzk5UVdXTXAxM0pPa2lFbEs0UTU2Ly9hQzdZcUJTeldJYVhnWTBCaGpsaENIbUpJcjFGQmE3a28rdm1DaFFyaWpENHg0YllUYjliN09IRzZSMXNMRkpFRkVLandNYUl3eGkxd1JOWEE1Z1pKeGIwT1ZZSkcwNDQ1ZU1NcVZyWEFkNlgzemxsMXdxeStlYTVTSWFYZ2MwQmhqbG1rUWszT0ZBa3JIL2JVRkZpbUZ1K2t4NlpLVnZydHl4clh6NzFXZU9leWo2TG5LRlRHcDhEaWdNY1lzOUlxWWpzdjFVSEllUVdxSEJWelAzWlJZNE9KZTg3S3Ezci94M1RmKy9mMjlxYW95ejE3Y0JidHl0WENsRERFTkR3UWFZOHhDQTJJeXJwQkJHWGlNcnNBQ05mY2lLUjVJMFhHMUZqRVhIZ2sweHBpbEdzUjBYSzZGVXZBb1VpZVlsUWwzMHVKUnVIZmhlbkpCak9lUlFHT01XY3dod25FRkIwVjRIUCtLT1duSG5XUjRCR25aYzVNYU1ZNkhBbzB4WnJFZU1TMlg4MUJxSHFrdk1LZm1QZ1RuSzFwdUpJaHFlU2pRR0dPV0t4Q1JjWVVMUW9ud1VFT0JHYmx3Rng3bnlyeHdzeHd4R1k4RkdtUE1jb0tZbnN0NUtBMFBKaVdtdVo2N3lIQ2UxMFo0Z3c1UlBZOEZHbVBNQ2cwaWNpNG5LVUlYSGs1S1RQUGNnK0FrbVJmZVJDNkl5WGt3MEJoalZwQVVFY0xsYWlpZXg1TUNreHJ1d2VNRW1SZmVxa0xVd0lPQnhoaXpSb09JaXNzSmxBdnZvYzh3cGVRZWN0elhwV3lGdHhzUVZmSm9vREhHckhLQmxnaVhLNkY0M2tXYllzS3I4SGFTNEg1ZW00SDd5QkNUQ0k4R0dtUE1LaDRSbnNzSmxBdnZRMHBNY0FOdjErRStMcVVYN3VVRFVaNkhBNDB4WnAwTHRGZXVVRUx4dkpQT1lkeWw1KzFLSEM3SnZYQkhraURHOFhpZ01jYXM4NEVJNFhJQzVjSjdrUkxqa3A0M0U0Y2pKVmx6NWM1eVJQVThIbWlNTWV0SUFxM21DZ1VVejd2cEhVWWxIVzgyNENpdThGZnU3eXVpY3Q0QmFJd3hLMVhRSEZjWW9GeDRQMUpnM0ZmZXpHTi9hVlozd2tOSWdpamhIWURHR0xQU2dJaWVLeFJRUE8vSVk5eFgzcXpBbmx4UmQ4TGpGSWhxZUErZ01jYXNsVUdydWNJQTVjSjdHbDR3Nml0dkpRNXhDZGE0Wkc5Tkt6ellWMFE1M2dWb2pERnJ0ZEFjMXlpZ2VONlRsQmpsZWFzZWNTWEo2N1Z0L1h0ZEZma1g1OUlVb2RTOTVGWHRPK0ZkU0lLb25uY0JHbVBNYWdtMGdTc01VQkxoWFhtTStzcGJmU0J1WUlSYy84VjdLeEQxeHZzQWpURm10Ukphd3pVS0tEWHZxNzlnVE05YkZZaksrV0E4b2xMaGZZREdHTE5hQnkzakdnT1VSSGhmOG9JUlNjOGJpVU5VeDRjaWlHdDVKNkF4eHF5WFFrbTR5aHVVa25jbUJVWWtBMjkwUlZRcWZDUVpvbkxlQzJpTU1ldVYwRHF1SWRBRzNsdU5FWmVCTi9LSUt2bEFha1Fsd25zQmpURm12UjVhelZWS0tEbnZ6bU9FRTk2b1JGVEhoOUVoenZOdVFHT00yU0NCa25NVmdkYno3bHFNeUhnamVVV01FejRJdVNBcTQvMkF4aGl6UVE3bHduVktLQm52cjBzUVYvSkdraUNtNElQSUVaVUk3d2MweHBnTlBEVGhLcEpBNlhoLy9RVnhIN3hSaHlqUGg5QWdydVVkZ2NZWXM4RVZXc3QxR2lpT0p4Z3VpT3Q0bzNkRURYd0FIZUlLM2hOb2pERmJKRkRldVk2a1VENTRndUdDcUdUZ2pRckVPT0hwSkVYVVJYaFBvREhHYkpGQktibVNoNUlJVHpDa2lITEMyNGhEVE1tenlSZkVkYndyMEJoanRxaWdaRnpMUVhuakdmb0VVUVZ2TkNTSThUeFppYmlhOXdVYVk4d1dIb3JqV2gyMG5tZm9FMFI5OEVZZG9ucWU2Z054cjd3ejBCaGp0dWloY2JVTXl2OTRpaDV4UFcvMGpwaUw4RVFkNGhMaG5ZSEdHTE9GUUJPdTFVUDc0Q2xhUkRuaGpkNFE4eW84elpBZ3J1VzlnY1lZczBrSzVjclZjaWlKOEJRZVVRVnZKQytJS1hrV2NZZ3JlWGVnTWNaczRxQzBYRTJnVlR4SGphZ1Aza2hTeERROGg3d2k3cFgzQnhwanpDWVpGTS8xS21oWG5xTkUxSlUzNmhIMWxhY29FSmNLN3c4MHhwaE5TaWcxMTVNVVNzYVR2Q0xHOFZZZU1jbVZKNmd3b3VjSlFHT00yYVNDVW5FREQrMkQ1NUFMWW1yZXFrVE1SWGgzRFVaODhBeWdNY1pzOGc2bDVCWXZVQkxoT1hwRVhYbXJWOFI4RWQ2Wng0aVNaeGhBWTR6WnhFUEp1VVVQcmVCSlBHSWNieVVYeEJTOHI2OFk4Y296REJmUUdHTTJhYUZrM0NTSDF2RWtOV0pxM3FwSFZNVjcrb29SRitFSnhBRTB4cGhOT2lpT213aTBWSGlTRERFOWIrVVI1WGsvWHpFaXVmSUU0Z0RRR0dNMnVVSngzS2FCVnZJa2tpRGloVGVyRU5YeFhyNWlUTWNUeUN1K29USEdiSEtGNHJpUmc5YnpKQjFpUEcrV0lTYTU4ajYrWW96bkdUSjhSMk9NMlVTZ3BOeW9nK1o0bGhvUmlmQlc0aEJ6RWQ2RHg1aWFaeWp3QTQweFpoc29LYmZLb2RVOHl5c2lDdDdzaXFndnd1TjVqQ2w0aGhJLzBSaGp0b0dTY2l0Sm9GMTVFa2tRMGZObUhsRUZEOWRnVE00elZQaUZ4aGl6RFpTVW0zbG9UbmdTandqSDI1V0lxbml3RW1NeTRRa3EvSTNHR0xNTk5HN25vRlU4UzRhSUQ5N3VGVkdlUjVJY1kxNkVKNmp3RHhwanpEYlF1RjJQaUo0bmtRUmFJcnlaWEJEVjh6amlNT1pGZUlJRy82SXh4bXdEalRjb29UbmhTVHdpU3Q2dVIxUXFQRXAvd1pnWDRRazhma05qak5rR0dtOGdLYlNTWjhrUklieWRSNVFUSHNOajFJdndCQjYvb3pIR2JBT050K2dRMGZFa2trQXJ1SU1TVVFXUElDVkd2UWhQNFBFSEdtUE1OdEI0a3dKYUtqeUpSMFRQMjhrTG9ocnVUNzVnMUl2d0JCNS9vakhHYkFPTk41RUVXc0d6dkVETHVJTWhRVlRIdlgxTk1PcEZlQUtQQUkweFpodG92TTBISWp4UDBpT2k0dzVhUkNYQ1hVbUpjYS9DRTNpRWFJd3gyMERqalRKRUREeEpDYzF4RHlXaU11NnBkeGlYQ1UvUVFLRXh4bXdEalRjU1JEamhPU1NCMW5JUHI0Z3F1UnVwTUtFUW5xQ0NSbU9NMlFZYWIrVVJVZklrSGxyR1BVaUNxSTQ3NlIwbVZEeERoUWdhWTh3MjBIaXpEQkdlSjNIUU91NmhSVlFpM0lNVW1QTE9NNVNJb1RIR2JBT05ONU1FV2pMd0hCMjBqTHNvRVpWekJ6N0JsSlpuS0JCRlk0elo1QW9sNWUwOElwendIQm0wanJ0NFFaVG5yVHFIS1plZVp5Z1FSMk9NMmVRS0plVU9Na1NVUEVjUExlTXVoZ1JSd3B2MEdTWTU0UWtreHdnYVk4d21WeWdwZHlBSklqelBVVURydVF1UHFJdzM2SE5NZXhPZVFGNFI1MEJqak5ua0NpWGxIandpa29HbkVHZzU5MUVnNml1MzZuUE1hSGdHY1loN0VkQVlZemE1UWttNWl3SVJUbmlLRXBwd0Y1SWlKaEZ1OHRjclppUWR6ekJjRVBjaUJJMHhacE1ybEpTN0VJZUlncWNRYUJYMzBTR3E0bnBTcDVpVENjL1FwNGg3RVJJMHhwaE5PaWdwOTlFanB1RXBTaWlKY0I4bG9nYXUxT2FZVi9NVVhZSzRGeUVKR21QTUppMlVsRHVwRWRQeERBTHRnL3NRaDVpY2EzUmxnbmxweDFONGpIZ1JmZ01hWTh3bUxaU1VlM2xGUkRMd0RDVVV4NTMwaU9xNFZGc21XS0lRbnNKanhLdndPOUFZWXpacG9hVGNpeURHQ1U4ZzBGcnVwRUpNemlXdVRZWmxFczl6VkJpUkNYOEFqVEZta3haS3l0MTR4T1E4UXdFbDQwN0VJYWJuTkdtYkxNRlNtZkFVa21ORUp2d0pOTWFZVFZvb0tmZFRJcWJoQ1Fab0EzZlNJU2JuR09sOG1WMndRdkxCYzRqRGlFejRDMmlNTVp1MFVGTHVSeHhpdnZJRUdaU1NleWtSYzNuSjhxcCtmL2ZkVCsvdlRmV1d2MXl3V2lZOHgzREJpRUw0TjlBWVl6WnBvYVRjMFlDWXBPZjlkVkFTN2tWU0hDaHBlWkl1d1lpUy93S05NV2FURmtyS1BYbkVYSVQzNTZEOHhiMjBPTTZiOENRZVl5citCalRHbUUxYUtDbDNWU0xHQ2UvT1E4bTRtd3dIY1QzUFVtR001KzlBWTR6WnBJV1NjbGZpRUpQeC9oSW93cjBJRHBGNG5rVUtqUEg4QTJpTU1adTBVRkx1YTBnUVUvTHVhaWdWZDlQZ0FLWHdMT0l3cHVXZlFHT00yYVNGa25KbkhhSWEzcHRBU2JnZmg3MWxBMC9UcFJpUjlBeUF4aGl6U1FzbDVkNXFSSG5lV3dHbDVXNDY3Q3ZyZUo0UGpFbDdoa0Jqak5ta2haSnlkem1pZXQ1WkI2WGdmakxzeUxVOFVZa3hicUFDR21QTUppMlVsTHNUaDVpazU1MDVLTUxkWExFYjEvSkU4b294cjBJTk5NYVlUVnBvM04rQXFNdkErM3FIOGhmMzg0WjlaQjNQMUY4d3BoQkdnTVlZczBrUGpRZndpTG9JNzBxZ1pOeVBKTmhCMGZOVUhxTXFSb0hHR0xQSkZScVAwQ0RLQ2U4cWh5TGNUNE5icGJYd1hDVkdlY2FCeGhpenlSVWFEMUVneWdudjZTOG9IOXlQcExoSjN2Sms4Z1Zqa3BZalFHT00yVVNnQ1k4Z0w0aDZGZDVUZ3RBcmQ5Umd1OWNQNGRtNkZHTXVQY2VBeGhpekRiUXJEeUVYUkdXOHB4S0tjRCtTWXB1c0VaNnZ3YWdYNFNqUUdHTzJnZGJ6R0QzaUN0NVJENlhoamhxc2QzbjdTL2dBSk1lb1REZ09OTWFZYlZJb0xRL2lFVmZ3amh4Q3I5eVJwRmpsa3ZzckgwUHZNS3JrRk5BWVk3WnhVRm9lcFVGY3dmdXBvUWgzNUxHVXkrcFcrREE4eG5sT0FvMHhaaHNINVoySEtSRlg4RzRHS0o0N2toUXpVcGVYdGIveW9VaUJVVW5QYWFBeHhteVRRNmw1bkF4eEJlL0dJWlJ4VHpWaWt2ZjM5cHZybFErcGR4amxoRE5BWTR6WnBvSlM4VGp5Z3JpQzkxSkRFZTVJRURYd2dkVVlWd2puZ01ZWXM4MDdsSndIa2d2aUN0N0pBT1V2N3FsRVRNV0hKUm5HTlp3SEdtUE1OaTJVakVjYUVzUVZ2Qk9IVU1FOURZajVmM3hVWFlwUlNjc0ZRR09NMmFhSDRuaW9IaU1LM2tlTlVNSmRGWWpwK1pncWpMdGN1Y1QvQjlkNENCM3h6UEtBQUFBQUFFbEZUa1N1UW1DQyk7XHJcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRcdFx0LmltZyB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHJpZ2h0OiAwcnB4O1xyXG5cdFx0XHRcdGJvdHRvbTogMHJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDM5MXJweDtcclxuXHRcdFx0XHR3aWR0aDogMzAwcnB4O1xyXG5cclxuXHRcdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHRvcDogODBycHg7XHJcblx0XHRcdFx0XHRyaWdodDogLTIwcnB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdCYtaGVhZGVyIHtcclxuXHRcdFx0d2lkdGg6IDE5MHJweDtcclxuXHRcdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdFx0bWFyZ2luOiAxNHJweCAwIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Ji10aXRsZSB7XHJcblx0XHRcdHdpZHRoOiAzMDJycHg7XHJcblx0XHRcdGhlaWdodDogNjBycHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogNDNycHg7XHJcblx0XHRcdG1hcmdpbi10b3A6IDhycHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jYXJkIHtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHR3aWR0aDogNDc2cnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDYxNXJweDtcclxuXHRcdFx0bWFyZ2luOiAtMTI0cnB4IGF1dG8gMDtcclxuXHRcdFx0ei1pbmRleDogMjtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogN3JweDtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMTZycHggc29saWQgIzVGQUU4OTtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0Ym94LXNoYWRvdzogMHB4IDVycHggMTFycHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHJcblx0XHRcdC5iZyB7XHJcblx0XHRcdFx0aGVpZ2h0OiAxOTdycHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFCQ0lBQUFHMkNBWUFBQUNxSGllaEFBQlhPRWxFUVZSNDJ1M2RDWmlsV1ZvWCtBSUdvZG5IQWJmUkZwRVJCd1VIZE5RUnBVVVdiZTF1RVNoNnFZeklpTWhZY3MrTTNDSXpJekk3V1NvamJrUldWbFVXaXYwSXRxRFFtSld4NVZhQU9MZ2cwaXl5Nk9DSW9JS2lJRGlBYkRaMGszUGVHM0dybzI2Yzc2N2Z2WEZ2eE84OHorL0o3T3lzMlBOKzUvdC83M25mcDU1cWNiMzVYVGMrYW5SdDZhOGVYbHU2ZlhpdDhoMmphNVgvTUxwYStiWDAreWNBQUFEQXdSQlpRR1FDa1ExRVJoQlpRV1FHVDVXMVJ1ODkrNW1qcTB2ZmRIaTE4aXUrNEFBQUFNQXVLVE9JN0NBeWhJNERpRGMrdnZNUktlRllUdDd2aXdvQUFBQTByWlpJR1VKa0NaRXB0QlZDUExPeDlCbXB2T0pIZkJFQkFBQ0FEdnp3NFh0TGY2U2xFR0prN2VZYjBuL3c4NzVvQUFBQVFCZCsvdkRxOHVjMERDSGU5cDdGVHo2OHV2UmZmYkVBQUFDQUVvNXEvT3pJM2FYWDV5c2h2bTNsbzlOeGpPLzNoUUlBQUFCS3M3cjBBMC9mdmYyNjNkTXgxcFplOEFVQ0FBQUFTcmRlZWY0MUljU2h6Y1ZQVGFNMmZzTVhCd0FBQU9pQjk3MzFXNzdxRDc0YVJLUXlpWGY3b2dBQUFBQTlQS0x4N21vSThmVGRHeCtUZWtQOHFpOEtBQUFBMER0THZ4b1pSQnJYdWZRMlh3d0FBQUNnMXlLRGlDYVZYKytMQVFBQUFQVGE2T3JTMzB4QlJPVzl2aGdBQUFCQXo0T0lsRUZFRVBGenZoZ0FBQUJBejYwdS9kZVltUEhydmhnQUFBQkFINEtJWDMvS0Z3SUFBQURvRjBFRUFBQUFJSWdBQUFBQUJCRUFBQUFBZ2dnQUFBQkFFQUVBQUFBZ2lBQUFBQUFFRVFBQUFJQWdBZ0FBQUVBUUFRQUFBQWdpQUFBQUFBUVJBQUFBZ0NBQ0FBQUFFRVFBQUFBQUNDSUFBQUFBUVFSN2FtSjkrY21SYlZNYkswOW1ObTl0MmJqMTVNVDk1MTUxK3Y3dEoyY2ViSmw5K1B5VDh3OWZxTHJ3NklVbmM0OWZmTlg4SzNkZXRaQmNTSDluek5jWkFBQUFRY1R3bVU1QndiSE4xd1lFdFhBZ25Oc1JFRng4OU1GdzRISmRRUERPYi8yYXZvcVB5L2NQQUFBQVFjU1FHRSt1UE81L2dGQ1doVmRlOG4wRUFBQkFFREVzTHFiakQ4TWFRdFJNcHFNZnZwY0FBQUFJSWdiY3FYVDhZdGhEaUJESFNIdy9BUUFBRUVRTWVFK0k2K2xZUTVsSEpLNm1JeDQxbDFJZmlab0wyNzBsUXZSMDJObDc0bVFLRVk1djF0eXFmbHcxazBtdDJlWEVkdFhEMGRUb3N2NTl4OXYxUFFVQUFFQVFNYWg5SWRZclQrWXpmU0hpejA2OUpoaDRMazI0MkJFTXJIOHdHRGl5UjhjaG9xZEYvY2Nkd1lmdkt3QUFBSUtJQVJWVkN2VTM4MUVkRVdIRE1Iejhsek1mL3hGOUlnQUFBQkJFREo0NERwRTdXbkZxaVBvc3hQR08rbzgvUm8vNi9nSUFBQ0NJR0NBekJYMGhMZ3haajRVSUhlby9od2duZkk4QkFBQVFSQXlJYVBhNDhNcWRiSCtGOGFIN1hIYjNpYmp5K0VYZlp3QUFBQVFSZzJLdW9DL0UxSkQwaGFoM05kTnNjOXozR1FBQUFFSEUzanRiMEJmaVpJdDlJYUtKNVluMGR3ZXBJV1NNN0t6L2ZHSzBwKzgzQUFBQWdvZzlkSFJ6SlJ0Q3ROb1g0dlQ5RDRZWTF3YW9ndUpFR2kxYS96bk5QdEFuQWdBQUFFSEVudG5xQy9GU3RpL0VXSXR2bzc2NTVhQTB0cHhNbjF2OTV6V25Ud1FBQUFDQ2lMMXorWEcrTDhUa1J1dEhMT3FEaUNzcHhCaVV6MisrcnZsbWZLeGp2dThBQUFBSUl2cnZiRHFtMEUxZmlKb3JqM2ZmN0pmNWNVYUR5ZmlZVHFhakZ1MDJtN3p3YUhlZmlCbDlJZ0FBQUJCRTlOZXh6VnZaRU9KOEI4Y3FMbVp1OWlkS2Fsb1oxUXM3cDErMGMyVGs4SGFBVWYreG5VbU5PZjBNQUFBQUlJam9rNWhzY2EzTHZoQTd6V1lxSzZaTGFsaVpxMmlJRUtYVi8zNXlmWGNqemt1UDlJa0FBQUJBRU5FWFk5V2pGTHY3UWtRd01kbGhGVU91NmlBbVZuVDdzZWJlYmljak9PdWJjWlo5ZEFRQUFBQkJCRzFVTDNRYkhFUXdVUC8yem5ZNUpqTXFLcTVucWphdWRERDFJbmQwWkZCR2pBSUFBQ0NJMkxlT0YvU0ZPUGV3dTlBZ2QveWhteEdlNCt0cDJrVmRBOHdRbFEyZDlKNDRsYW1zT0gxZm53Z0FBQUFFRVQweldkQVg0a3FIZlNIcTFiL2R5MTMwWVlnZURybkFwSjNlRVBYVkZXVUdKUUFBQUFnaWFHQ3JMOFNkVXZ0QzFMdGE5L1lYT3V6REVCTXRjaUhFMlM0bVhjVG5YMy9NWTBHZkNBQUFBQVFSdlhIK1liNHZ4UEVPS3d4eUxtYXFHT0tJUlR0dlk2YWdMOFJjQ1ZNdWNsVVdjYVRFendjQUFBQ0NpQklWVFo2WTdiS1paTDF6bWJDam5ZYVEwZnRoNFpYeStrSzBVbWx4NHY1emZrWUFBQUFRUkpSbEt0M0FGMDJlYUtVdlJOeW9uMCs5RkU2bm0vaG1mei9YRUxLZG5nNXptWXFGK05qYkhkVlpXRzJSYWRTcFR3UUFBQUNDaUpKRWNIQzFvQy9Fa1JZcURPb3JLWnBOMXNpTjhHeDFNc1haZ3I0UXB4L2NMdlhyVVIvS3pLY0tERDhyQUFBQUNDSktjT0hSQzEzMWhhanZxWEM5U1hQSHljeGtpbGJHZ2g0dEdDbDY2Vkg1MVFxWE0xVVhSMHBxMWdrQUFJQWc0c0FxNmd0eHRvMitFQmN6UVVham0vYW9PR2kzeWVSRXdValIrVlRKTWRHRGdDRDZZdXdPWnZTSkFBQUFRQkRSc2FtQ3lST1hINy9ZOVUzN1RKTitEZk4xUjBIaWZ6Y0tMdUpqeXZXRm1ON296VFNMM1BHUlZxbzJBQUFBRUVUNFFtU01yK1g3UW5ReWVTSlhWWEd5eVpTSjNJak1zVGFDam5DcWg1TXNZcHpvN3NhZCtrUUFBQUFnaU9oSUxnaG9kM3BGbytxQlppTS9jeU04SnpQVkRjY0wra0pjZk5UN0tSWlhNbFVZRSt0K2RnQUFBQkJFdE9WVUNYMGhkcHBjWDJsNzNHVk15YWovYitySGIwNFc5SVdJU283eFBueWRjbUZKSjBFTkFBQUFnb2dEYTdxZ0wwU3pacEhON0Q3RzBQanRIY3RVT3V3OHpqRldyVWk0ayswTE1kV2p2aEN0VkdQTVB0QW5BZ0FBQUVGRVM2TDN3M3hKZlNIcTFmZWJhRHJDTTFORk1idWpHZVQ1aC9tK0VDZnY5Mjl5UlV6KzJOWElzOHZBQmdBQUFFSEVnZThMY1hUalZrL2U5a1NiSXp4cmZSK0tSb3FlZi9oQzM3OW11WWFlWTM2V0FBRDJoZkcxNVRUdGJhVzYvNHhqeXJFZmpVcmhxTzZOZmVEQ0szZGVjMVE0SHJiRlE3ejQvMDZsbzhhK2hvQWdvb0V6RDI1bmIrN2p6M3ZWVDJHbXlSR0toYm9qSW5FVVl5cUZGOWNMK2tMc1JRQVF2UzUyZlY3NlJBQUFESjNZU3g1Tis3alkvMTVNZTd6NVYrNWs5OGZ0T0c1ZkNBZ2k4bVo2MUJkaXAxd0R6Qk5OamxITTFWVlJYTjlPbCt2ZlRxVFFrMTBlSGVuVWljem5kZmFCOUJzQVlGaU9Ka2UxdzZWVTZaRGJEM2RyTHlwMkFVSEVVTHo0TG1UUzN2a1Mra0xzbEJ2aDJXd0t4L2xNdFVIT2ljM245dXpyTjVucEUzRkpud2dBZ0lHdWZEaSsrVngxejlhTDhLSGZJK1VCUWNUUW1jdjBib2dYNUptU0owK1VOY0t6M3JtSGV6K2xvdjRJU1h6OTlJa0FBQmdzMFdnOEhvUmQ2eko4dUxaZHBYdjUwWjFzdFc2dktvd0JRY1MrY0xhZ0w4VHBIaHd0eURXZmJEWmhJamZDczM0RTZDRGM4T2Y2UkV4dk9BOElBREFJb29JMUttM2JxWDY0dnQyRExQWjU4WEFzZWtkTWJpeS9adTk1cEdEaW5JbHFnQ0NpNktqRTVrcjJ4ZkpTRDh2SDVoKy90Q3ROYnZUM3B6WldHaWJSUi9hb0wwUzkzQlNQMDdva0F3RHNlUVZFakh4dk5ZQ0lLdGNJTEtMQlpMTWp5dFVRb29WbWxpb2lBRUhFanI0UXVaSzBzdnRDdEhJTXBOSDdHMSt2Rkw2b0h4dWdEc1M1d01SNVFBQ0F2ZHZyemo1b0xZQzR0aDArdEhNc3VaVktDRUVFSUlpb2MvbHh2aS9FZE1sOUllcWR6eDVoS0g2ZjBZUXk5NExlck1ubFhwVDc1UkoxLzhBQUFQcGZxZHBLRDRnWUN4OS9kN3lES291aVNvZ1krVm4vdmdVUmdDQ2kyaGZpK2V3TDU2bjd2Wjg4a1dzK1dUVHhZcktnYWlOQ2xFSDZlc1k1d1N1WlJEek9GUG9IQmdEUXYyTVl1ZXJiK2dkdlViWGE2Y08zUnBVUUY3ZWJzTmRYWWFpU0JRNThFRkhVL0xGZkw1QzU5NStyYm9pYisxd0g0b1VlSHgzcHJNb2pIK3djMzlTc0VnQ2dIMkxmMWF3S0lvS0N5Uzcya2MwcUlXcDcyUHIvNy94RFFRUnd3SU9JWElJYmZ4YTlHUGFxbDhLRlRBaHlvZURtL3VpQVRhSW9Pam95TzJCSFJ3QUE5cU80OFQrWE9mcGJmd1NqMitQSHJWUkMxUDdlcm4zaFEvdEM0SUFIRWJrWHoxNzNoZGdwMTN5eWZxUlJiZ0pGT1BOZ3NLWlFUS1VMVGE0QjBxQ01GQVVBMk85SE1hNDBhQmdaRlJJblN6aDYzRW9sUk0xTTVxRmJQNDQvQTRLSWdYWTVjMjV1c285QlJGaDRwWGlFWjFSTTVHN3VMdzNZMmJxaW95T0RORklVQUdDL2lnZHBDdzJPWWtSQVVNWngzbFlySVJwVnl6cXVDeHo0SUdJMjA2anlSSjlUMmx3WUVwVVM0d1UzOS9NRDJCZWk2T2pJTVJjYUFJQ2VpcU82UmYwZzRzK0xHcUgzc2hLaTV1eUQyM3RhZlF3SUlnWlNybG5raFQ0MzBMbVFPY2NYbFJEUk1EUFgyWGhtd0Y2OGk0Nk9uTlVYQWdDZzUzdlo2d1VoUkR6UW1penA0Vld6U29paVk3Z1hNdy9jSE5rRkRud1FNWkhwMGREdk1aTm5Na2x4MGFpbEdQZlp6ZkdKT0hZU0Y2eFQ2ZTJjUzFVTWw5TDdxVlZkektWZUR1MWVySXFPamd6YVNGRUFnUDNtZUlNUUlvN3hqcGZZZTZLVEVHTHJDUEtkWFUzaGZlK0FBeDlFaEdpbVdQK2kycysrQmtXVEpqb1pLVHErSFE3RWhTbENpeGlQRktIR3dpdDNXbm9mbHg2MUhpQVVIUjBaeEpHaUFBRDc2amhHZ3hDaXpHbGxrMTJFRUJPWmlSa1hIeG5kQ1FnaXFzNW5qa1ljMyt4Zm40anBURGZoUmlORjQwVTkvcHZvWlJIVkZIRzBJeW9RbXMyS2JzWENqa2FaemVTT2pnemlTRkVBZ1Axa3VxQWlkV3NpUlhsVDFiWjZRaFJVWERRSklZcU9RSisrZjl2M0VCQkViSlcxN2E1SU9OZkgrY2E1dERoM1hDVEdNWlVSTmpUU2FuK01VME15VWhRQVlEK0pDb1dpL2VESkVoK2tSUWl4MEdaanlucm5NczNNWnpTcUJBUVJIM3loclgrUnZOTG5IZ2U5RGhnYWlmY2RuMitVOGJYU1BLZ29oWjk3cEM4RURMSUlQWTlzaXlOY00rbEpWVldxWW9vS3E1cDRXaFdoWXBoTm04aW9HZ3NYVWhWVTlKS3BpYzdwTmJGWnZkREMwekVBdW5zZEx6b21VWG9seE9PWENvOEt0L3BhWC8reHh2N1JkUUlRUk94OG9jd2t2dU45ZlArNVBoVmxpaU1YTVNZMGJoVGk1aUtxUUNKUWFMZVhReHdQbVIrU2thSXc3R1czVWRLNk15Q29oUVBoM0k2QUlEcVMxOEtCeTNVQlFiK0R6WDVXa3dFY05FWE56TXVzU0owc29SSWlUSzJ2WkJ0bytqNENnb2dkY2lNMCs5WHJZS0w2Z3Q5OVJVUWsxM0dCaWh1QmVLSVpOekh4MUxQTVFPVlM1Z0k0aUNORllWaU5WNFBKTzN0V0lkWFBQak1BdEM3R291ZGVkOCtYR0FBM1BJN1Jab2lRbXdvWFIzdDlMd0ZCeEE0bk16MFB6ajdvejVPOXkyMVVRMFN2aUl2YllVTzhtRWRZRWlNNSsxSG1scnVnVkpzTzZRc0JwU2xxQWp0TUpsVkhBWlRxYUticFk5a1ZCZzJuWXp4cS8raGRickxhRWRjSFFCQlIvK0s3dTN4c3JnOTlJb3JTN2FnOGlKNE5FWkRFK2UzNCtQYnk2ek5UMEJmQ0NDWW9UMUVUMkdGendoTXZnRklyNVhKSDdhb1QxZnBRQ1hHcGd4NWd1WWx3bHgvckpRWUlJckxxajBmMHVxSE84WUowKy95QW5iR2VLTGc0N1J3cENuVGZFK0o2aVUxcjQvVXNua2JWeEVheTVzSjJiNGtRMVZVN2UwOUUrQms5WkxiY3FuNWNOVkY5Vld0Mldlc0pFMVZadTEvREJKUUFaVG1mbVR3UjE0dXBrbzdGYm8zb3ZOUHhpTTVXUDJiSE1nQkJSQnQ5SXFaNzFDZmlTTUhvcFRnYlBtamRoT2NLK2tKTTZ3c0I1VHp0S21vQ20vN3MxR3VDZ2VlcTFVbXZCZ1BySHd3RzlxcmNOWjdHNVk2UStiNENsRk9SMnNzSkdZMGFVM1lhUXNSMTRYcm00ZDY0N3ljZ2lHaTlMUHBNRC9vZnhJdDZia3BHQkJPRGRyYjZiRUZmQ0trMmxPZlNrSWQ5bHpNZnYzUEFBTjNMOVZtNFZOSzQ5TWtlVkVKczdhZHZEM3kxTHlDSUdDaFRtZFM1RnowUWN1VnExWFBWbTROMWMxL1VHT21Dc21zb3pabDlFUGFkeTd5bXhkUWUzMStBY2grUVJVaGRSdERiOERqR284NURpTEhxVWVmZGI5ZDBOVUFRMFVSOUtkbTFra2ZSUmRpUWU5RS9ONEI5SVhKSFI2NlcyQmdKbE56bSswSU1XOWgzTEJOYW52UDBDNkNyNnRuY2FQZlRKUnpKNkZVbFJNaE5vZE9rRWhCRWRGZ2lYVll6b01uQ3ZoQXZEbHhmaU54STBUSWJJOEZCVjlRRWRoakR2b24xU3ZaMXpmY1pvTHhxdVRMNjcyejFoSGlwSnlGRVVYaHlYSVVjSUlobzRZVS9jNjd0WkFrbDBtTUY1L3l1bFZSaVYyOTh1K3l1a3d0SzBValJrL3BDUUdtS21zQU9hOWlYZTMxVFBRWFEyUjR1OStDcTJ5TnZ2V2hNMld3UHJYa3hJSWhvdFZRNlUySmNScG4waFlLK0VOMmt4QkUwektTcEhpZFNRQkRoUVh5Y1VjbXdNNDFlYUxQaFhmRklVWDBob0N4RlRXQmJEZnZpMzNUOHV4K2tocERuTTFPSGptNTRDZ2JRcnRPNTR3MWROcWpzWlNWRWJVOTZYVFVFSUlqb3JuS2gvb1Ywb2NzK0VibnpjaUhDZzJhSmVEd2RqUVE4emdUR21lczRPaExwOHZXQ2kwbk9sUmJUNkNNTitrS00rWWNCcFRpNnVkSlZFOWpUTzU0NFhSdWdDb3BjLzV2WkIvcEVBSlJ4dk9Gb0Z6ZjBXejBoWGlxOU1XV3pvODFYVkVNQWdvZzJTNll6L1JFNkhhczVWZENNcnRhNHAxYlZjTEpXMWZCb3E2cmhXaHRCUXpPdGxNVVZqUlNOajMxeXd4ZytLSzh2UkhkaFgvM3J5YUEwdG96WHlQclBhMDZmQ0lDMjVDcFR1N21oYjFnSlVWSUlVVlJOYTFJR0lJaG8wMnltUjhLSkR2b2pqQmVjbTY1VldaUVZORFJ6K2tIekRzdkRNbElVaHRubEVzSysraUJpa0o0NDFYZGhqNDlWTlJWQUd3L0RNcFVGbmU3RitsRUpVUlN3Ry9VT0NDSTZLWjNldUZWS2o0UmNtVm8vekQ5K3FYb2hpNCs1bGJONXd6SlNGSWE3TDBRNVRXQ3ZQTjU5czEvbXh6bStmWnpzWkhwZGFMZlpaRlIwN1g0aTVud3dRS2Q5RmhZNkRKdjdVUWxSRkp4RVZlL0V1bXBhRG9ZNFFqK2YvcDNHejMzMGR4bGQ5VFVSUkhTNUVlKzI2KytwZ3I0UVpZaUxWTnlNWEV3WGt0a1VGc1JOUTRRbms2a0VicXlEQzFWK3BLaStFRkRtUmFxc0pyQVhNemY3WlczNDZxZjd0TnNmSnRjUDU4eUQyMzRHQUZxUW16clJ5V3RvdjBLSU0xMDJYb2I5Y09TMlBqdzhxa0dySUtKYnVYNEpFK3V0L2JjekJYMGgyaEVYa0ZwVlE3elFIMDlQSjZOVGZwa0o4MWptNldvdlI0ckNRWDNDVldZVDJOelJzZW1TenVIbUtocmFHUmMzdWI2UzJmVHFFd0hRaXF1WmlyZDI5MlA5Q2lIaUFWaHVyeHZ2dy9lU1lUVzEzdDY5VnE2S1BwcUt0L3p3ZTcxUzJoNU9FTEdQbk12MFRHaGxRejdSWUVaenZxcmh4V3BWdzZsYVZjUDZTdDhxRVhveFVoU29EL3Z5WmF1ZE5zRE5WUjJVMGN1bGFMcFB1eU00NnpmQVpSOGRBZGl2TjBEZGp1enNWd2dSRmJpNWdIM0JrUXlHMk1VZFk4alB0bGlKZERSVDhkcHFGVlAwSDZ5RmVYRlA2TitPSUtKaEtmVnNDejBUY24waDRvY3N6b2VmNkVGVlE5azNIY2J0UVhsbUg1VGZCRGFYdnAvdDh0L3RkRUVWMTVVT3BsN2tqbzVNU2ZzQkdqcWRPWlp4cW8wakR2MEtJU2FxRFREdlpQZTZwbVF3ckhMOThsclp1M1FhUkVRYmdQb3d6ejJZSU9JMTVkVHRKdE5GWitWT0Q5Z1o2YW5NZWFiYVRZZStFRkNPb25GbTNUYUJ6UjEvNktZN2VaUUZ6bWVPYUhYNlpDdlhINmVkTWtXQWd5alg5TEhWeXJsK2hSRGphOHVGMCtCTzZ3ZkVQZ3NDVytuajFXa1FrZHNyblRkcFJoRFI2S3hlR0MvOFFWd3B2QUFNMHVkVU5GSlVPUjJVcDlkTllMc3QzMjFXeGRWdWI0ajY2Z3BqM0FEYU84WlgvNENvMVNicC9Rc2g4a2NOdDI2Z1BNbGwrQjlBWDg4Y0xSM3ZVUkNSNjlGM2ZGT1RWMEhFRHVjZlprYlJaVGJuUlRPVTV3Znd2RSt1YkxxYm13NGcxeGZpVHFsOUlacUZwQXNkOW1Fb3F1STYyOFdUcmR5R2VrR2ZDSUJDTTVrQXQ1V2IrMzRleHlnS0lUUWtaci9JUFpocGRqeXFreUFpOSs4OStndjZIZ2dpZGpVUmFXV0Rmcm1nTDhTZ2RVRXQ2Z3R4MXBra0tESEE3SDBUMkl1WjE1eng5ZlkzdnJralduTWxiQ292WlV1TW5SMEdhTFVzdk5uVDBjWWhSSGxIYmVOSmNkRnhERWQ2MlU5eS9RR2JWU1oxRWtUa2hnVVlkUzZJeUw3SU45dWtueTFvUm5kcXdHWW9GeldqdXl6SmhwNkhmV1UzSU1wTjlXbW5JV1RSZEoreWptamxLaTFPbUNzUDBISzE2dVRHOHA2SEVQRis1Z3RDaUhsZC90bUhjai92UnhzOFNHbzNpSmdvT0FKeXhMOGxRVVJPYmhUZFdJUGtiQkRQUTVmZGpBN1lyZHNtc0hHakhzZkJvdUZYczcrZmEzTFV6dkdxdVlJcXJuWkhkUlpXVzJSZUcvV0pBR2p0dU4yMUJzZloraFZDUkJYZnRZTDNFeCt2R3llR1Fkem5qTGZ4OTg5a3FwTXVOdWozMTI0UWtYMzdiZXlQeHJZL0owSEVBWEVoMHlkaU9tM1dqeFEwbzRzWDUvRUIreHlLbXRHVmRkTUIra0xrbThCZWF6SGxycStrYURaWkl6ZkNzOVhKRkdmN01OMG4xeWRpM3ZsSGdPenJaYXRINVBvUlFvdzFPR0pZQzljOXhHS1lLbzFpUDlMcTBZZWlpb1dpbi9sMmc0aHN4VVdMOTJOSGQ0U0RseC90MzJOUmdvZ21wZGJ4QTVacjJoTS9xRk1EMWhjaWQrN1FXU1FvT2JBc2FBTGJhbCtJK3JEd2VwUG1qcE9aUmtldGpBVTlXbERGMVl2cFBybmVPWjZnQWRSVjA3WDRldDZQRUNJK2xxSitFTFdBUkU4SWh1TCtiZk81amh0eDV4NUNGLzIzN1FRUm5mU2crT0Q3MlgzRWZyK096QlZFTkxsQVhDKzRFSndjc0RQUVJjM29CbTJrS096SHZoRHROSUhOblE5dWROUGV6aE8wblNuL3RUNU85NW5OOU04eG1ncWdlWVZiZloreHlZSytQbVdHRUhIelZMUy8zVHBlOTd3UWdxRnh1b3VwWU8xTXRXZ25pSmpyWUNwSFVRaXhOVm5uQlVIRVFYQ3R3UXZ6WHY0d3hCR1F1RmtKY1pHS2M5azE4U1EyZDlHYTF4Y0NTZzBxczAxZ0g3L1k5VTM3VEpOU3Zmcnl2dmtHcVhwc0hpOC83dTkwbjl6bStweFo4d0JOdyt5ZFBYOTZYUWtSTjFKWEdsUkJ4SFhpNUgxVnRBeVhtTlJWZFAvV1NoaVJxd3pLVmJtMkdrUWNLVGp5TWQ3Q3Y4K2lnUERZNWkxQnhFRTZZMVFrZmxqSDZwNDgxZ0tDdUZHcGhRUHh3eFFONldyaUI3Vm1ObTNRSTh3SVVlWTlsMjRhcXRKRkpzNVcxMXh2SVJScGRER1oyVEJDRDhvS0FxK1cxQVEydHhGdFZtR1Y2LzB5MWtiUTBldnBQdEVrZC9mWlluMGlBT29yRVhiM0lsdnBlU1ZFdkkrNWdoNWlPd1B1S2Z0R2hsVDhqSGNhUnVUMlpYT1poMHl0QmhHNWZkajVCODM2Z2EwVTN2ZWQzc2Zob0NDaS9pSlIwR2RoWjBPNlRzT0JmanF0THdTVXBxZ0piQ2NKZGE1Nm9Obkl6OXdJejhuTWh2RjRRVitJaTMwNG9wWHJwVE94N21jSDROVWJsSUp4ekwycWhJZ254YzBlc0cxVitqcUt3Y0VOSThZS0t1S24xbGZhRGlKYWZWdXRoeEQ3KzVpcklHTFhEL0d0b1FnYUdybW9Md1NVNWxRSmZTSHFONGJ0anJ2TU5hS3Q3N3c4dWNmVGZYSmh5WDR0SlFUb3hQbE1ZN3hqQmNkcnUya1lHUld4dVNaOHVhcSs0MTZuRVVZOE9aZXBZamhYdDg5ckpZZzRrV21jMmVnSTcwRU9JUVFSTFpibkRKUHFUWWVua0ZEYUJTMTNnV2pXTExLWjNJaTBSbjgvMTMxNTUzR09zV3BGd3AwOW5lNlRxOGFZZmFCUEJFQk5idXJTdFpJcUlTS01qcHVpUnBNdzZrdkZ4MzFQRUVhOCt1OG45Mjl6ck0wZzRrcUwvU2FhaFJDbjdoK01odCtDaUIybU1zMUY5a0tjMDd1NkxjYmlYZG9XbFE2MTNoTHg5SEZuMzRsSTRPSm14VVVGeWhHOUgrWkw2Z3ZSckRGUzB4R2VtU3FLMlIzTklJdm13UGR6dXMrUnpFWDhjcGVCRGNCK0R5SzZDU0VpYUc0bmZLZ0Y2WHBCSUl6WS9kL2srcWpzM0VjMUN5S21jeE00Nm5vTENpRUVFWVhuZzY0MjZTUjhkVWRBTUxjaklMalFJQ0NJRVhZMTBSay9ma2lucStjQlYxNXRjbW15QlF4UFg0aWpHN2Q2OHJZbjJoemhXVHVDVlZURnRSZlRmWEt2b2M0ZEEyeHBwVjlEVVFneHZuM2s0bFE2cWhkdnA5MmVaYkZ2UGVvWUJzS0l3akFpVjlsNWRVZmo3V1pCUk83b1ZlNzlDQ0VFRWJ0VDZvSW5pczdPd2NGenBtQW05Wm1TbXNEbStpazBtM0pUMzhnc3l2K0txcml1RmlUd3ZYOGQzWDBSbnZFYUNsRDRHdm5haXRpWHFwUFc0bVlrK2hERjM0OEFvYWlIUkNzVDFPTG1TQVVFd29qV3dvamN2N1hhaVBWR1FVUUVoYm1SblVmcUhqSUpJUVFSTGZlRmNMNFpEcDZaSHZXRjJDblhBUE5Fa3d0UWZjbGdyVW9yZDZaeGNvK3FyRTVrUHErekp2Z0FGSWJRdlRyaUd6ZElLbTdaYjBkbXgzc2NScHpOUElpcU5SUnZGRVNjenZ4M2wrcUdCNVFkUXNRRHAvRWgvemQrNElPSXFZSWZpbWdlcDZRWUR0NUZMcGVHejVmUUYrSzFGNk5iYlUvaE9QK3d0YlBGMFM5bXI3NSt1V1pQbC9TSkFHaFliVmVHaGUzcUI4Y3YySS9INXk5dEgydUtlN1lMSGZ5Y3R4cEdUR1FxVGE5djd3RWJCUkc1bm1JN1A4YWlFQ0wrN0dTYis3WTQzaCtoWnUzemlYNWN3eG82SHVnZ1lyemdUUE5DcHBRRzJQOXlqWXJpSWpGVGNsbHJXU004ZDQyYWVyajNWVndMbVF1NFVCZWdVdTBYVm1iNEVFZjBJc1NlMlJBK2NQQXExK01lTGlvSnhrc09JeTVtSHZ4RTRGQVVST1QrZkg1bmI0bVNRb2hvRnpCWDBMOXNML3FDQ1NLNlZOUTA2SmcwR1E2Y3N3VlBxazczNEdoQnJ2bGtzd2tUdVJHZWcxakZsVHNEUFcyVERGQVllRGNUTjA5eGpZalgxN2p4cVU1Sjg4Q01BMksyeVpHbXVLR1BCekZUNnl1bGhCRzVZQ0dxWlhOL0hnK0pMbVh1SjJ0SExib05JZUxCZUh4Y0MwMmEwMTU4SklnWUtxY0swcld6K2tMQWdYTjBjNldnZTNudlh0aWpLVm45UnJQWk1iSkdtOVJCcWVMS1BibUlDN1dmTTRBdFVXVVhyNVh4MnJoejBscUlQNHYvTDhLR3VHa2FYeE00Y0xCTk4raXRzT3VoVG5vb0U1VURZMTJHRWJtSythbU4zY2MyNG0zbEtrSGozMjAzSVVTRUhoZGJIUGM3ekEvUm4vSUQvZG9mWHYvZzRlRDFoY2hka01ydUM5SEtVN0ZHNzI5OHZUSVVGNkJjWURLc1NUMEFNQmozYnUzY21FY0Z3OWtHRFZ1YmhSSDFEMVZxUnkwaVhMaWNmaDlCeGNudHFvZjZrZXpWWGkwZGhCQ3h6NHZ4dkxsK0UwV1ZJUEUxbVI3aXFUZ0hMb2lJYi9KOFFWOEkzWVhoNElrQU12ZmkzdXNYOXZQWkl3ekY3L1BFNW5CVWNlVWFWaTQwcWZZQUFHanRxTUx6VFk4cTFOK3M1NXBiTmdvajRnSFA3SFpEeUhodzFHZ0VidHcveHZ1SXZ4dVZ0Rk1OM3U3SnpIU00rRGhpVDlocTFjZENxcWlOc0dRLzlETThjRUhFcFlLemVVZWRZWVlEMkJmaStUMmI1WnhyUGxrMDhXS3lvR3BqMEtxNG9oVHlTaWJvdmJxamFSTUFRTGY3alViTkc0dWJXOTUrVFhQTG9qQ2ltNGM4eHd0NmV1ME1JY2EySHpCZGVkejZ4eCtmNi9FOW5Jd21pT2hTMGRpa00rYmN3NEZUMVB5eFg4Y0ljdTgvZCtFYld5dWU3ak5vVlZ6bkN4cEtIZGNBR0FEbzBaSFFhRlo1dlkwcWlXcHp5KzBxaDF3WWNhS0xmY3RrM1FqUStIM3RRVk5VTWN6dUdMM1pTcVBhK0ZnbjExZjI1ZmZ1d0FRUk13Vm5kZWJNdUljREtYZEVLLzRzam0vdFZTK0ZDNWtRNUVMQnpmMmdWWEVWSFIyWjFRQVlBT2oxOGZ1MWFKaDlPMXVaMmJpNTVYUFY2VjR4bVNaNlM1VHhnRHIyUkZlM2UwbkV3NWg0K0ZTdHltOHhnS2oxb0JqZjU5K3pBeEZFeEZQRCtNSHFkek02WUhEbFh2ajcyZkFuMTN5eWZvUm4wZXpzUWF2aW1scGZ6Z2E5Z3pKU0ZBQTRPT0lCOUlVMitpNWM2ZUdEcUZhUGo4VEhHaC96ekFGcUYzQWdnb2pjRDBCOHMyYzJWdnhqaFFQcWN1WjFZYkxQcnduMXpaWjJqdkNjS3FqaXVqUmdFeWlLam80TTBraFJBT0RnaVFmT3A5UERtL2tXQW9sZVBPUTVXbkFNdUw0YTkweURDUitDaUNGMnRxQXZ4R2w5SWVCQW04MDBxanh4djc5TmdISmhTQ1R5NHdVMzk0Tll4VlYwZE9TWXZoQUF3SUI0OVhoRVFTQVF2UnQ2OFQ2ejFRL2I3UUVPK2w1cFh3Y1JSemRYc3QvOFMyYmFnd3RTNXVJUUpYSDl2WW5mUGNKenFtQlc5aUJXY1JVZEhUbXJMd1FBTUlDcURTUHJSb0JHRmVka0R4NzAxRmVOeHZ1Sjl6MnBZblIvQnhGYmZTRmUydE5tZE1BZ3YwWlU5bnpNWkc2U1Q5Rlp3aGozMmMyRk1JNmRSUGdTbzZ1aUEzTThGYWhkSE9kU0w0ZDJMNHBGUjBjR2JhUW9BRUJ1YnhSTkpXTi8xY3VqcEZIbEdoVzMwYlJTMzZ3REVrU2N6WlJkeDZaNVdsOElZRnR1Zm5NLyt4b1VUWnJvWktUbytIWTRFQmU2dUtpZVQ5VVdjOXNkb0Z0NUg1ZmFtQ0JVZEhSa1FRTmdBS0NrcXN1RkZwdE5kcXBhb2ZEdytYM3h1ZFRHa2dvaUJ1SDhkK2JjOHFrK24vOEdCdHY1ek5HSTQ1djllNTJZM2xocHFZbFJyWW9yYnZManY0bGtQYW9wNG1oSFZDQmNLK0hpdHJDalVXWXp1YU1qZ3poU0ZBQVlQbE10N0kvSzFNdGVEZjMrWEU0TTBmM3V2ZzBpSmplV1g3TTV2L0RRbVdYZ3RZNW5LaEw2bVNaSHNOREtMT2tZSzNXdHgwbDZxLzB4VGczSlNGRUFZUC9zejNxcGwzdVlmbjh1dzFRVnNhK2JWVWFKZFpRbzY5NE9GTDFHN0o0bDNkOGVCNzBPR0pxVkpNYm5HNDJUV2ptM09GM1FGMkx1a2I0UUFFQjUrN1ByZmR3ZjlmTG9mcjgvbDZORGROLzdsQjkyNENDYnovUlFHTi9qUGhWbGlpTVhNU1kwS2g0aThZOWtQaTY0N2ZaeWlPTWg4ME15VWhRQUdHN1QyMVBFb29kVkx4M3Z3NDE3dno2WEU1dkQxWVpBRUFFY2FMa1JtdjNxZFZBMDNhZGQ4NDlmcWxZbFJEbGVyUW9zemlTV0dhamtabThQNGtoUkFJQlc5bUN4WityMU9NMm9pSWdoQ3RHL2NNcWVTUkFCVUhNeTAvTWdMaGo5ZU4rWDI2aUdpRjRSRjdmRGh1alRFR0ZKak9Uc3h5aW8zSmpSNmtoUmZTRUFnQ0V5ay9aUDhSQnE1M0dKK1AzVWV2a2hRZTZCVSt6OW9uTEJLRTlCQkhEQVRhN3Y3bVk4MTRjK0Via1J3N1V4bXBIT1IwQVNGOHZKOVpVOXZtRG4rMEswTWxJVUFHQ3ZSWVZvUE1USmpSNnY2Y1VZenpqMjBhaFBWK3dGanh6ZzQ2MkNDT0RBcTArcjQ4YTdsMGwxMFlYcC9JQjFPdDVLOHU4MEhDa0tBRENJNGloRVZKSzIwaXd5am1tVS9mNlBOZ2dpWHZzUTZvV2hhaklwaUFEb1laK0k2UjcxaVlqa096Y3BJMFowRGxxWjNseEJYNGhwWnh3QmdBRTB0clkxTXJPZDQ2L1IxRHNldnBUWmZIdTgrdllxMVlkTXJmZjh1bE1OUk1iWGxnVVJBQWZCcVV5ZmlGN01sSTZMWTI1S1JnUVRrd05XbW5lMm9DOUVmSzM4ekFBQWc2VFdGTExWSnVEeFlDVWVSTVVSMUtoR3FEMGtpbENpMndkRHN6djJVR2RTc0JDVkdlZGJyTXlvZld6bjA4ZTIzeC84Q0NJQXBYc2JLMzNwZ1ZDVWlnL2F1S1dpVXNLNFlQdDVBUUFHYWM4U2U3YVdxdzdTVFg0MDI2NVZQOFIvWHg4UWRITk1ZeWF6cHp5Ny9YQnJxMWZGN1lhOUtuWlZhK3pqNXBhQ0NJQ2svaUlVeVhpWmJ6OHVJcmtMekxrQjdBdVJPem9TRjgxeFB5Y0F3QjZMb3dzUkZzeTNjVU1memNDUDFmVmh5SVVRbmU3TmFzRkcwWDd2YkYybGJUUWtqd0NsMVNxSlduUEx2VzVpTG9nQUtObWxURCtFc3VZOVR4YjJoWGh4NEJMdTNKbks2bGdyZlNFQWdEMDBYVDNpMFByTmV4elRtSzNldkM5bkt5bUszazRFRmhGR3hONXRJWVVkalJwSnh0dXVWVGhFdjY4SUdJcmU3dG5Nc2QrSjdTTWw4eTErVHJYbWxzZjJRWE5MUVFSQUVtZjQ2bC9vVDViUUR5R0NobHdKWGx6Y2VqR3lhWHo3bkdRbkFVZlJTTkdUK2tJQUFIdDQvT0pLRzgwbkl4QTRjYi80T01QUkJtRkJWRnFjcnRzVDFxcGs0K1kvcWpEaWY1OU9iMzkwZGZjRG5LaHlpT01aMTlvSUkycjd4WGo3dVViaGpacGJEdHJ4WGtFRVFMdG4rako5RWNyb2lYQ2hvQy9FOFM2UzdBZ2FJbkdQaTJ5RUIvRnh4b1Z3WjRPbWhUYW5XeFNQRk5VWEFnRFlHMUdSMlVvRlJLM0JZN01LenNZaHhOWk5mYTdoWmU3ajJObmtjdWZITVZIZHA3VWZSdXlzc3FoVlpMUVNTQXhyZFlRZ0FtQTdpYTYvd0N4MDJTZmk1UDJpYzRMUE42MXFpQXRlWEZnaWxZK0xVUndkaWNxSzYyMlU3c1VUZ1ZhRGphSytFR04rTmdDQXZhcFlMWmppdFhPdkVnMGdXeG05MlVvSWNTenpZQ2JlUi95M3VlcUozQWo0MnVTMWJzS0kybjR3OXBKWG12VENHTFIrWTRJSWdEYk5aY3IrT2gycldaVGdSK1hDenFxR2s3V3Foa2RiVlEzWDJnZ2Ftcm5hUWhCUk5GSTBQdmJKaldVL0Z3REFuamxXVUxGNU1UMmdPZHBHSlVBcklVVEk5UXlMMGVXNWlXSVJPT1NtWk16djJIOTFHMGJzN0k5eG9hQS94cW43dHdVUkFNTnNOdE1qNFVRSC9SSEdDL3BDMUtvc3lnb2Ftam5kd2dWdVdFYUtBZ0FIVXp5d2lSdndoZTNKRWUzMjJHb1VRcHphc2MrTHQzczljOVJpZksxU0dFUWNMdGp6N1R3dVVWWVlFYUx5SS9aMzg5dFZzc044aEZZUUFiRGpRbFZHajRSTGJUUWFLdFA4NDVlcVRZN2lZMjZsQjhXd2pCUUZBT2gwYjlkS0NGSDBRT3I4OW5IYVJrSEVxY3hSM05nTDduemJaWVlSKzRVZ0FtQkhKVU1ueHh0Mk9sWFFGNklNY1NHTmM0TFJrWGsyaFFWeHJDTXVzSlBwNHRadUw0ZmlrYUw2UWdBQUJ5dUVpTDNQdFlJbWxjMkNpTmcvNWlvcDZpczNoQkdDQ0lCQ3VYNEpFK3V0L2JjekxYWjJiamJ6dWxiVkVCZTQ0NmxxSWM0RlRwUTQ2bk9yTDBUL1Jvb0NBQXhxQ0ZGVUpWcnI2OVVzaUFqbk1rZGRjODNKaFJHQ0NJQ3MzSVdrbGJGSUVSUXN2SEtuamFxR0Y2dFZEYWRxVlEzckszMnJST2pGU0ZFQWdHRU1JY0xseklPb25mMnltZ1VSVStzcjJRYzhZd1VQcm9RUmdnaUExOGgxWjU1dG9XZENyaS9FOWUybVNpZDZVTlhRcWFLUm9yTVA5SVVBQUlaOEg5ZEJDREdWbVh5eFVCY2lOQXNpaXNLTW9vYzh3Z2hCQk1CcnhOR0VYYVY1ZFEySDZoWE51RDQ5WUJlU3FVdzM2SzIrRUMvcUN3RUE3TXNRSXY3c1ZJTXBhT2NmUE44MERHZ2xpTWdlNzJpd2h6em9ZWVFnQXFCT2JnelRlRkg1MytaSzlnSnk2ZEZnalZNcUdpa2FpZitFdmhBQXdENE5JVTQyR0VuZWFxUEpWb0tJd29hWDZ5dkNDRUVFUUhQUktMTCtZakNUS2EzYjZndnhVbWFNNXAyQnU3bVBTUnU1aTl3eGZTRUFnQU1ZUW9UODZNMFhNZytlbWdjUklUY0M5RnlUNDY4SE5Zd1FSQURVT1pHNUtPVXVCSmNMK2tKTWI2d00xT2RUMUJmaXJMNFFBTUFRaTJxRDRwNFF6Vy9pYzlXaXVZYzByUVlSUnpMSFlJdWFWcllhUnB4b0VxWUlJZ0QyaWNsTW40aTV1ak4rWng4ODMxWWpwTDB5WFRCU3RGbmZDd0NBUVZmVXArdGtDL3V4bVkxYjJhclcvRkhjMW9LSWtHdGczdHJIa3c4akxqeDhRUkFCY0ZBc1pNNEwxdExzM0dTTlFieFFqSzlYcWhkVWZTRUFnSDFaeFpyWms1MXM4YUhRaGN4UjNOTUZWUlR0QkJHNWZlS1Znb0NqbFRCaXYxYXdDaUlBV3J3NFRhZmtQRXJ1Y21sMWxQYU5EOWpua0V2a1E4elg5ajBHQVBhREdMTWVENHppUWN1SkZrT0lpYlhsYkpQSzR1YmtyUWNSWWY2Vk81bDk1RXJMWVVUdHlNakZ0SmNiMzZmZk4wRUVRSXQ5RmVLQ2MrVnh2aS9FMUlEMWhZaEVQeGRDbkRrZ3M2a0JnSU9qM1RIa3VTTWQ1eDhXVng2MEcwUzArL2JMK0p3RUVRRDdRQVFMdWNDaDAzT0kvVFJUMEJkaTBFYUtBZ0RzeVJIY3grMVZMTFFiUkxSYmNYRVFDU0lBQ2hSMUwzNXR1dDMvbS91NGlNVVJrUkNOTldPMGFNM3haQ0ZURGppdkx3UUFRRWM5SE5vTklvcU8rUTVhVTNOQkJNQUF1dmpvaFlZaFJKemYyMWsyTjdFZERvU29xS2lGQTNIeGlqT0xOWEhocW9sempSRm1oQXZwL2MybG94OVY2VXhnbkMrc3VkNUNLRklrL3R1WkFUczZBZ0N3RjNJOXRKcU55T3draUpqSlZOZGViYkZwcFNBQzRBQTdVOUJuWWVkYzZFN0RnWDQ2clM4RUFFQzFrclQrNGM2MUhaUFJ5Z3dpd3RYTUVaQ2pIZzRKSWdBYW1kNjROUlJCUXlNWDlZVUFBS2c2bFhuSU5OdkNlTXhPZzRoTzM1OGdBdUFBeTAzT0dDYlZrYUxydm84QUFPRjRKbENZYktHSFZxZEJSUFQxcXErZ2pjbG12aGVDQ0lDc3FVenAzbDZZVDJIQzFXMlgwNW5HUzl1aTBxSFdXK0pjNmpPeHMrOUVuSE9NUmt3Nk13TUF2RmF0QjFqczgwNjFHQXAwR2tTRTZBOVdDeU9pQjlpWTc0RWdBaUJuck9CTTM4N21qMWQzQkFSek93S0NDdzBDZ3VNcElLaVpTY2MrWWt4VW1GeGZlYlhKcGNrV0FBQzlGZnV0ZGdLQlhCRFJibVdEUFo0Z0FxQ2hDeWxBeUFVUVVjN242d01BY0xCRWxXbDlwZXkwcHBPQ0NJQmU5NFhRV0FnQTRPQ0thUmRYVWlWc0hKdU4vYUt2aVNBQ29KeStFT2tDaytzTGNlV3g4M3dBQUNDSUFDaTU1QzdYRjJJaEJSTkhuT2tEQUFCQkJFQ1phaDJVNngzVEZ3SUFBQVFSQUdVNlZkQVg0cXkrRUFBQUlJZ0FLTk4wUVYrSXk2a3ZoSzhQQUFBSUlnQktNNzVlcVhZK3p2V0ZNT3NaQUFBRUVRQ2x1dlRveGV5UmpLTWIra0lBQUlBZ0FxQkVaeDdjem9ZUThlZStQZ0FBSUlnQUtNMU1RVitJdVVmNlFnQUFnQ0FDb0VUUisySGhsZDE5SWViMWhRQUFBRUVFUU5ubU1uMGhvam9pcWlSOGZRQUFRQkFCVUpxekJYMGhUdXNMQVFBQWdnaUFNaDNkWE1tR0VKY2V2ZURyQXdBQWdnaUE4bXoxaGRqZG5ITCs4WjBuNCt1K1BnQUFJSWdBS1BWSXh2UFp2aERUK2tJQUFJQWdBcUJzc3c5M0J4R243ai9uYXdNQUFJSUlnUEpOYml3L3ViYmphTWFGRkV6NHVnQUFnQ0FDb0dlT3BENFJwKy9mZm5Kczg1YXZCd0FBQ0NJQUFBQUFRUVFBQUFDQUlBSUFBQUFRUkFBQUFBQUlJZ0FBQUFCQkJBQUFBQ0NJQUFBQUFCQkVBQUFBQUlJSUFBQUFBRUVFQUFBQUlJZ0FBQUFBQkJFQUFBQUFnZ2dBQUFCQUVBRUgwdmphOHBPWmpaVW5KKzgvOStUc2crZWZYSHowd3BPNVJ5OCt1Zkw0eFNkWEg5OTVzdkRLblNmWFhubnB5VHUvOVd1cXJxZmZMeVR4LzUyNmY5dlhFQUJneUUyc0x6ODVzbTBxN1F0bk5tOXQyYmoxNUVUYUk5YWNUbnUvTXcrMnpENTgvc241aHk5VVhZajlZOW83MXN5bi9XTk43Q1V2cEw4ejV1dU1JQUlPcHJnQUhFMFhsYmg0WEV3WGhMZzQxQUtHVGgxUGI4L1hGZ0NnUDZaVFVIQnM4N1VCUVMwY0NPZDJCQVFYSDMwd0hMaGNGeEIwdXdkc1YzeGN2bjhJSXVBQUpkeFI3WEFwSmRYWGQxUTJsQ1V1Y3I3T0FBQzlybUt0cElyVi9nY0laWW1LV3Q5SEJCR3d6eXNmam05RytQQmlUOEtIbmVJb2g2ODVBRUJ2eFo1cldFT0ltc24wZ016M0VrRUU3RE54cmkvNlBGenJNbnk0dHQwRDR2S2pPOVZmRy8zZDZDZmhhdzhBMER1blVuWHJzSWNRSVk2UitINGlpSUI5SXRMbE9DTFJUdlhEOVNSQ2htZ2VGSTJIb25mRTVNYnlheG9KUmJBeDN5U0l1Q3lJQUFEb2FVK0lNaXRjYTAzSGE2S0N0dWJDZG0rSkVEMGRkdmFlaUtPK1VYRzc1VmIxNDZxWlRHck5MaWUycXg2T3BrYVhqdlFpaUlCOVdnRnhQbDBrV3IwNHhZVW5MZ0J4OFpob1VocFhEU0ZhYUdTa0lnSUFvRWQ5SWRZcjJZZEM4OVhwWlR1RGdlZXFVOUJlRFFiV1B4Z01ITm1qNHhEUjA2TCs0NDdndy9jVlFRUU1xUWdSWmgrMEZrQmMydzRmNHVMVVRzQXgzMkl6SkVFRUFFQnZSSlhDcnFyV3RMZWJibU5mdDVjdVp6NytJL3BFSUlpQTRSTmxjYTMwZ0lpdXl2RjN4enVvc2lpcWhJaVJuL1h2V3hBQkFGQytPQTZSMjQrZEdxSStDM0c4by83alAyYjBPNElJR0s1akdIT1pWTGsrSVkrT3lwMm01STBxSVM1dW4rbXJyOEl3TlFNQW9Gd3pCWDBoTGd4Wmo0VUlIZW8vaHdnbmZJOFJSTUFRaUo0T3phb2dJaWpvWmlSU3MwcUkrRHRqbWJOK21nNEJBSlI3QkhjaHN5ZUwvZ3JqUS9lNVZESlZ1NnBwRVVUQVFCdXJsclM5MFBRSVJyZm5CRnVwaEtqOXZmci9mMWFxRFFCUW1ybUN2aEJUUTlJWG9sNXVGUHk0N3pPQ0NCamNveGhYR2pTTWpBcUpreVdjRVd5bEVtSm5tZUF3bjFNRUFCaGtad3Y2UXJTNjU0dUhVeWZTM3gya2hwRG5Ndy9WWXJTbjd6ZUNDQmd3Y1JGWmFIQVVJd0tDaVJJdU1LMVdRdFNjU0tPaDZ2L2VjUTJIQUFDNmRuUnpKYnNuYTdVdnhPbjd0MS96d0dwUUtpaHkrOGVZL3VaN2ppQUNCdWtpdEZIY0R5TCtQRjdNeTZxNGFMVVNvbEZLUHoya1pZSUFBSVBWRitLbGJGK0lzUmJmUm4xenkwRnBiRG1aT2RvN3AwOEVnZ2dZSE5GWitIcEJDQkVYb3NtU3l1eWFWVUlVWGZBdVpzNHNqdm0rQVFCMDVmTGpmRitJeVkzVzkzNzFlOGc0NGpzb24xLzl3Ni80V08waEVVVEFBRGplSUlTNGxFWmtsdFhVcDlNUUl0UjNjSjRmb0FzY0FNQnc5b1Y0dnF1K0VEWDF2Y1ZpWDFubXh4bDcwZmlZVHFicTNIYjNwUmNlN2U0VE1hTlBCSUlJMk9zemdjVWhSSmxuNkNhN0NDRW1NbVYxRng4WjNRa0EwRTAxYkc1ZjFzbDQ5SXVabS8ySmtxcHBZNCs0Yy9wRk8wZEdEbThIR1BVZjI1bDA1TmZQQUlJSTJDUFJZNkVvaERoMXY3d1g2SzJlRUFVVkYwMUNpS0lMNWVuN0xpQUFBSjN1emE1MTJSZGlwOWxNWlVWWnZieHlGUTNIMm1oWVBybStrcW40MVNjQ1FRVHNpY21DQzFDMUhHL3p1Vkl2ZEF0dE5xYXNkKzdoODVtU09vMHFBUUE2cVRDNGt1a0xFZnZDVG51QzVhb095bWh5bm51N25ZemdyRy9HV2ZiUkVSQkVRQXNtR2h5VEtMMFM0bkUrN0lnU3ZsWVQ5L25IbWd3QkFKUmh0cUF2UkRmQlFRUUQ5Vy92YkpkSGZJc3FkNjkwTVBVaWQzUmt5a010QkJIUVgzT1pDUlJsbjVlYkxLRVNJa3hseStuMGh3QUFhTmZ4Z3I0UVVYM2EzYjV2OTM2dG14R2U0K3VWN0VPenFHem9wUGZFcVV4bGhXTytDQ0tnajRxNkk1OS9XRjVqeW9iSE1kb01FU0ljMlYyMThaenZKUUJBQ2NkeXIzVFlGNkplL2R1OTNFVWZoa3NGRDgzYTZRMVJYMTFSWmxBQ2dnaG9wMnl1SUFVdnM4S2c0WFNNTm81ajFGek52SzBqSlhWaEJnQTRPSDBoN3BUYUY2TFpubTJod3o0TXVZZFFXMGM5Ym5mMStkY2Y4MWpRSndKQkJQUmV6RnllejFRcFJHZ3dYdEw3YUZRSjBVbDM0bHg2ZmZteExzY0FBTzA0L3pCZkVYdTh3d3FEZkIrRzNWVU1jY1NpbmJjeFU5QVhZcTZFS1JlNUtvczRVdUxuQTBFRTlQa0NGQy8wWlRYcTJSclJlYWZqRVoydGZzeU9aUUFBdEs1bzhzVHNnK2RMZlQrNUtXZnQ3RE1uQ2g1b2Rkb1hvcFZLaXhQMmxRZ2lvSGRtTXBVRlpVN0lhTlNZc3RNUVlqeFRRaGYvZTl6M0V3Q2dKVk5wajFZMGVhS1YvVm5jcUo5UGU3blQ2U2ErMmQvUE5ZUnNwNmREcnBsNmZPenRqdW9zM0E5bmppanJFNEVnQW5vbzEyZmgwcU1YU3dzaHlxNkUyTHFZM2U1cFEwMEFnUDNlRitKcVFWK0lWdnB0MVZkU05KdXNrUnZoMmVwa2lyTUZmU0ZPbHpqUkxkY25JdmF3ZmxZUVJFQVA1TkxwNnkxZWdMbzZqdkdvOHhBaS9ydGNoY1dNZWM4QUFDMjVrUFppM2ZTRnFPK3BjTDFKYzhmSlRBVnVLMk5CKzlGTXZlWnlwdXBDRTNRRUVkQ0RKSHdoVTQ1WHh0emtYbFZDRkoxbDFLUVNBS0M3dmhCbjIrZ0xjVEVUWkRTNmFZKzlYN3ROSmljS1JvcEdNL1dKSGdRRXM1a3g5c2MzOVlsQUVBR2x5alhsaVJLOWNucEN2TlNURUtJb1BDbXpxek1Bd0w3dEMxRXdlYUxkaHpxNW0vYVpKdjBhNmtlNHp6ZllkOGFlTHo2bVhPWHVkSStxWUhQSFI4NDUrb3NnQXNvVFRSMXpDZk94TG0vb2U5R1k4alhoeWYzZWhDY0FBQWRoLzVmckM5SEo1SWxjVmNYSkpsTW1jaU15eDlvSU9ubzlJUzNHaWU1dTNHbWZpU0FDU25NNmQ3eWh5d2FWdmF5RXFQV2N1SzRhQWdDZ0k3a2dvTk1IVWJucWdXWWpQM01qUENjejFRM0hDL3BDWEh6VSt5a1dWekpWR0JQcmZuWVFSRURQZWtNYzdlS0dmcXNueEV1bE42WnNkdkdVVWdNQU5IZXFoTDRRcjkzN3JiUTk3dkowcHJLMWZ2em1aRUZmaUtqazZNZVk5bHhZY3N4REx3UVIwTDFjeXR6TkRYM0RTb2lTUW9paVpOeWtEQUNBeHFZTCtrTE1kVmtOdTNzLzJmanRIY3ZzNTNZZTV4aXJWaVRjeWZhRm1PclRuaSszNTV4OW9FOEVnZ2pvMmx5bXN1QkVoeDJCKzFFSk1WRVFkRFJMM1FFQURycllSODJYMUJlaVhuMi9pYVlqUEROVkZMTTdta0dlZjVqdkMzSHlmdjhtVjhSUjRMS1BMNE1nZ2dNdjEyZGhvY05xaUg1VVFoUUZKOWRLdUhnQ0FCelV2aEJITjI3MTVHMVB0RG5DczliM29XaWs2UGs5ZVBDVWErZzU1bWNKUVFSMExqZDFJc1o0RG1vSWtSc3gydTlrSEFCZ0tQZDlCZnVvVHZaK3JmWlRhSFpzdG43L0dFY3hwZ29ha2tjZ3NCY0JRRlRkN3ZxODlJbEFFQUhsbHRBZGFiT3lvRjhoUkNUMXVZdlNwVWVPWkFBQU5ETFRvNzRRTytVYVlKNW84ckNvdnRJMVBzWmNCVUpVdjA3dVVmWHJpY3puZGJhazhBWUVFUnc0VTVsemVlMmVlZXRYQ0JHam5ISWRreGNjeVFBQWFOb1hZdUdWM1RmMzh5WHZvM0lqUEp0TjRUaWZxVGJJNmJSL1dTbjcwRXlmaUV2NlJDQ0lnTTdrUmlhZGF1T0lRNzlDaUdwVHBWZnlIWk5OeVFBQXFMUlZkZENyZlZSWkl6enJuWHU0OTFNcTZ2ZTg4ZlhUSndKQkJKUjBVV3ExNUsxZkljVDQybksyUEMrY1ZoSUhBTkRRMllLK0VMM1lSK1dhVHphcnRqMVdNSko5NXdqUVFiamh6L1dKbU43UUp3SkJCTFI5b2FnL0ozaTF4V2taL1FzaEt0V0xUNzVqc3ZuTkFBQU5qMHBzcmhUdTEzcjFQdWNmdjdTcnQwUERvOEliSzRVaHhMVU9lcGYxU202S1IxUnorRGxERUFGdG1NbTg2TGR5YzkvUDR4aEZJWVF6ZVFBQXpmZFN1ZjVhOHozdXJ6WFg1Z2pQOGZWS1lSQnhiSUFtVStRQ2s0c2FwaU9JZ083N1F4eHYwZ1NvY1FoUlh0bGNKTjlGeHpFR3BUd1BBR0NRWFg2Yzd3c3gzZVArV3VlelJ4aUszMmMwb2N6dCtabzF1ZXkzWE1QS2hTYlZIaUNJZ0RxUjRPN3FEN0d4dk9jaFJMeWYrWUlRSXY3Y2hBd0FnR1o5SVo3UDdxWGFhVXBlNXNPdW9va1hrd1ZWR3hHaUROcVI1aXVaL1dtcng1cEJFQUhiNmlzT0dwM2Y2MWNJY1R5VjMxMHJlRC94OFI0UlFnQUFORlRVL0xGZnh3aHk3ejlYM1RDVzJZOE82bWoyT0w2Yys1b2UzOVNzRWtFRXRKWHExcitRemhYMFhlaEhDREhXNEFXK2RoeERKUVFBUUhPNXl0TDRzK2pGc0ZlOUZDNWtRcEFMQlh1L293TTJpYUxvNk1qc0E0M1RFVVJBMXhlSTNIem1mb1FROGJFVTlZT29CU1I2UWdBQXRDYTNuK3AxWDRpZGNzMG42MGQ0NWlaUWhETUROcHA5S3UyRnIyZjJ3bnFXSVlpQURrVFMzT3pNNEZZSWNhZW5JVVJjYks0WEJCM1Y5RHlGSTE3a0FRQmFkemt6dFdLeWowRkVxSCtRdGZNSWNEeUV5dTMvTGczWUJJcWlveU9ETkZJVUJCRU1sVndLdlhNOFVxOHJJWTZtOTNXbFFSVkVYSnhPbXNzTUFOQzIyVXlqeWhOOWFGTFpMQXlKU29ueGdwdjcrUUhzQzFGMGRPU1l2aEFJSXFEelNvU2lrcjFlVmtMRSs4ak5scTQvd3pqVjU5UWVBR0MveURXTHZQRHdoVDdmeE8rZXpoYjd1OXpVdG5nQU5UTmdlNytpb3lObjlZVkFFQUZkSk9XWmhEY3VEcjJxaEpoY3oxOTQ2cDEzRkFNQW9Dc1RtUjROL1I0em1Ydm9WZlF3Nm5RWFZiQ3hiNHhqSnhHK25FcHZKM3FleFo2MVZuVXhsM281VExaWmFWRjBkR1RRUm9xQ0lJS2hjejZUVXNjTGVGRWxSS2NOSXlQZHppWGl1VEZOeGg4QkFKUWptaW5XNzdmNjJkZWdhTkpFSnlORng3ZkRnZGdyUm1nUis5allteGJ0VzNNUDAxcjl1SXVPamd6aVNGRVFSREIwTG1TcUU2NlZWQWtScVhPazRJMG1ZYnltQ2lLVnVJMzduZ0FBOVBTaDAvSE4vdldKbU01TWFHczBValJ1OHVPL2lWNFdzWStNQjFsUmdYQ3RRVlB6Vmkzc2FKVFpURkVGNzZDTkZBVkJCUHNtaU9nbWhJaVV1cDN3b1ZabG9SY0VBRUQ1am1jcUVuS2oybnQzUEdTNTZWNHc5bzNSdkx5TXNLR1JWdnRqbkJxU2thSWdpR0JvdGRLdm9TaUVHTjgrY2hIbjhPTHR0SHZ4aUFEaXFHTVlBQUE5Y3lRVEJGenBjNCtEWGdjTWpjVDdqczgzSm9pMDhsQnR1cUF2eE53amZTRVFSRUI1RlJGTitqYk1QMzZwV2hvWHlYQjBCNzdRNWxtOFhEZmtLQkZVQVFFQTBCL3ptWDFiUDQvRDV2cFVsQ21PWE1TWTBOaW5SdFZDVklGRW9OQnVMNGM0SGpJL0pDTkZRUkRCVUR0WE1CZTViUEdpSGhjR0wrSUFBSHYvNEtsZnZRNG1Ha3hpYTI4ditWTDFZVmpzWGFOUlpUUlhqd2RiWlFZcWx6TFRQQVp4cENnSUloaDZ1WkZLWmFiVFVmM2crQVVBd040NW1lbDVFSld1L1hqZmw5dW9ob2hlRVJlM3c0YW94bzJ3SkVaeWp1M2hudmkwdmhBSUlxQjh4MXNjcWRTcWFEUVVGN1laSFlVQkFBYkM1UHJ1eVJWemZlZ1RFWHZDb3Y1ajBiTWhBcExZTThiSHQ1ZGZuNW1DdmhDdGpCUUZRUVIwYU83Uml4MDEvdGw1RmkvSzQ4WWR1d0FBR0VqMXh5UGl4cnVYbFFiSDA5NHdPNjY5anhNN1dqODZjcWZoU0ZFUVJFQVBrK0JJcGVQTVhRUUxPOFdmeGY4WFljTjA5U3lld0FFQVlOajdSRXozcUlJMUpuWGtKbVZFNWV6WWdIMWQ1Z3I2UWt6ckM0RWdBZ0FBb0hPbk1uMGl6dlNnLzBFRURia3BHUkZNVEE1WTllelpncjRROGJYeU00TWdBZ0FBb0FzeFlhSWZQUkRPRjB4a083RTVXRGYzUnd1T2prVGxpSjhYQkJFQUFBQWxxRy9JR0ZVS1piNzlFd1ZOME04TllGK0kzTkdSbU5veDd1Y0VRUVFBQUVBNUxtWDZJVXlWMUF0aHNyQXZ4SXNEMXhjaU4xSTBRcG9wZlNFUVJBQUFBSlRuelAzZFBSRk9sdEFQSVlLR3FDYkk5WVU0MG9PK0VGRzFFRyszazRDamFLVG9TWDBoRUVRQUFBQ1VheWJURjZHTW5nZ1hDdnBDeEFqUFR0OW1CQTB6YWFySGlSUVFSSGdRSDJkVU11d2NRN3JRNW5TTDRwR2kra0lnaUFBQUFDaGRWQkRVOTRsWTZMSlB4TW43K2I0UUVSNDBxMnFJb3hBeEhqNUd4VWNmaVRnNkVwVVYxek5IUElyRVNOQldnNDJpdmhCamZqWVFSQUFBQVBUR1hLWS9RcWRqTlNOSXlJVUdVYm13czZyaFpLMnE0ZEZXVmNPMU5vS0dacTYyRUVRVWpSU05qMzF5WTluUEJZSUlBQUNBWHBuTjlFZzQwVUYvaFBHQ3ZoQzFLb3V5Z29abVRqKzQzZlJqSFphUm9pQ0lBQUFBOXAyakc3ZEs2WkdRbThEUkQvT1BYM295bDk1M2ZNeXQ5S0FZbHBHaUlJZ0FBQUQycGFoazZPUjR3MDZuQ3ZwQ2xDR09TMFRmaDR2cEdNZHNDZ3ZpV0VlRUo1UHBHRWk3dlJ5S1I0cnFDd0dDQ0FBQW9HOXkvUkltMWx2N2IyY0sra0swSTQ1dTFLb2F6cVNqRmNkVDFVSk12NWdvY2RUblZsK0kvbzBVQlVFRUFBQkFnWE9abmduSFdqam1FRUhCd2l0MzJxaHFlTEZhMVhDcVZ0V3d2dEszU29SZWpCUUZRUVFBQUVBSEluU292MEdmYmFGblFxNHZSSVFPTVJIalJBK3FHanBWTkZKMDlvRytFQ0NJQUFBQStpNk9KdXdhdWZub3hZYi9UUnloNkhScVJUOU5wYy90ZXJZdnhJdjZRb0FnQWdBQTJDdTUwWnZqQlgvMzZPWktOb1M0OU9pRmdmcWNpa2FLUmsrS0NYMGhRQkFCQUFEc25XZ1VXWC9EUHBQcG43RFZGK0tsekJqTk93TjNjeCtUTm5LQnlURjlJVUFRQVFBQTdLMFRtVDRLWnpQSExDNFg5SVdJZmhDRDlQa1U5WVU0cXk4RUNDSUFBSUM5TjVucEV6RlgxeWNpYnVKek4vY3hCV09RUHBmcGdwR2l6ZnBlZ0NEQ0Z3RUFBT2lqK2lNWGNUTmZhK2lZbTZ3Ukxqd2NzTDRRNjVYcU1SRjlJVUFRQVFBQURMZ0xtVDRSMHh1M3FsTTFybVVxREtJUjVQaUFmUTY1a2FMaDZJYStFQ0NJQUFBQUJrcXVyMEtNNll4Umw3bStFRk1EMWhmaTlQMzhTTkV6QXpaU0ZBUVJBQUFBU1FRTHVjQWhkM04vY3NENlFzd1U5SVVZdEpHaUlJZ0FBQURZNFZwQjhMRFQrVDNvQ3hGSFFPS0lTSWpHbWpGYXRPWjRzdkRLN3I0UTgvcENnQ0FDQUFBWWJCY2Z2ZEF3aElpK0VHTTcvdjdFZGpnUW9xS2lGZzRjVFdJa2FFMGNqNmlaZmZoOE5jd0lGOUw3bTB0SFA2cFNmNGY1RkNqVVhHOGhGQ2tTLyszTWdCMGRBVUVFQUFCQW5UTUZmUlpxcm5VUkR2VFRhWDBoUUJBQkFBQU12cGlTTVF4QlF5TVg5WVVBUVFRQUFEQWNjcE16aGtsMXBPaTY3eU1JSWdBQWdJRTNsZm84WEIrQW94ZnpLVXk0dXUxeTZodHhhVnRVT3RSNlM1eExmU1oyOXAwNHNmbmNrMk9wTDhXNDd5TUlJZ0FBZ01FWERTamp4cjlSODhlck93S0N1UjBCd1lVR0FjSHhGQkRVektSakg5T3BnV1NZWEY5NXRjbWx5UllnaUFBQUFBNllDeWxBeUFVUU1SclQxd2NFRVFBQUFEM3ZDekg3NEhsZkh4QkVBQUFBbEdjcUhaUEk5WVc0OHZqRjZuRU5YeU1RUkFBQUFKUWlHanZtK2tJc3BHRGlpTDROSUlnQUFBQW9VMHloeUIzSk9LWXZCQWdpQUFBQXluU3FvQy9FV1gwaFFCQUJBQUJRcHVtQ3ZoQ1hVMThJWHg4UVJBQUFBSlJtZkwzeVpMNmdMOFNFdmhBZ2lBQUFBQ2pUcFVjdlpvOWtITjNRRndJRUViNElBQUJBaWM0OHVKME5JZUxQZlgwQVFRUUFBRkNhbVlLK0VIT1A5SVVBQkJFQUFFQ0pvdmZEd2l1NyswTE02d3NCQ0NJQUFJQ3l6V1g2UWtSMVJGUkorUG9BZ2dnQUFLQTBad3Y2UXB6V0Z3SVFSQUFBQUdVNnVybVNEU0V1UFhyQjF3Y1FSQUFBQU9YWjZndXh1em5sL09NN1Q4YlhmWDBBUVFRQUFGRHFrWXpuczMwaHB2V0ZBQVFSQUFCQTJXWWY3ZzRpVHQxL3p0Y0dFRVFBQUFEbG05eFlmbkp0eDlHTUN5bVk4SFVCQkJFQUFFRFBIRWw5SWs3ZnYvM2syT1l0WHc5QUVBRUFBQUFJSWdBQUFBQkJCQUFBQUlBZ0FnQUFBQkJFQUFBQUFBZ2lBQUFBQUVFRUFBQUFJSWdBQUFBQUVFUUFBQUFBZ2dnQUFBQUFRUVFBQUFBZ2lBQUFBQUFRUkFBQUFBQ0NDQUFBQUVBUUFRQUFBQ0NJQUFBQUFBUVJBQUFBQUlJSUFBQUFRQkFCQUFBQUNDSUFBQUFBQkJFQUFBQ0FJQUlBQUFCQUVBRUFBQUFJSWdBQUFBQkJCQUFBQUlBZ0FnQUFBQkJFQUFBQUFBZ2lBQUFBQUVFRUFBQUFJSWdBQUFBQUVFUUFBQUFBZ2dnQUFBQUFRUVFBQUFBZ2lBQUFBQUFPYmhEeGp0WEZUeGxaWFR3L3VsWjVQTHBhK1RWZkZBQUFBS0JFL3lQNTlzTnJTeGNPcnkvL3dhZDJycWZ2enI1dWRPM21tdzZ2Vm02bFVPTDdmTEVBQUFDQWRvMnVMdjNvNkhybHI0K3NWYjdrTFp1VmozMnExVFYyZC9sM2phd3RUUjFlWGJxZjNzZ3YrMklDQUFBQXU2eFdmaU9kdFBoSG8ydUxGdy9kWGZ6VXA4cFkwKythL3ZDUnRadHZTSlVTN3h4ZFcvcUhxYVRpVjMyeEFRQUE0RUFHRHg5SXYvNWdLbHE0a3pLQ3Z6clJUdFZETjhGRXFwVDQzSlI0TEtWMy9pUHAxOS95elFBQUFJQjlldHhpcmZKenFUamhHMGRYRjk4NnRuN2pFNTdhNnpWeWQrbjE2UU1iSDExZi9xYjA2OC80SmdFQUFNQXdCdzlMdjVsKy9hNnRreEVyLzllTkp6Yys5S2xCWHMvY1hmcU1kSHpqUlBxZzc2WVArbWQ5RXdFQUFHQ0FnNGZWeXZ0amNNWG92YVdWMFpkdnZxa3Z4eTE2R2t4czNQejBrZFhLK1hSKzVCOGMzaHJkNFJzTkFBQUFlMnJwcDFQYmhhOUx4eTMrMmpPUDczemNVL3Qxalh6anlrZVByaTIvS1pWNVBKYys4ZmNtditHYkR3QUFBRDMzaTJtczVxTVVQbHdhdmJmNFdVOGQxRFh5YlNtWVdGMzhndVFyVS9PTDcwNSswdzhIQUFBQWRGM3g4S3NSUEtRVENtY1ByVDc3MlRkdURIaWZoNzFhMFgzejhQcnlsNlp4SU85S0tjMVArTUVCQUFDQUZxMVdmamc5NEY4K3ZGNzUvRGZlT2ZVUlVvWU8xdWpkci81ZlI5YVczbmI0M3RMWHBPTWNQNVMrc08vM3d3VUFBQURWVmdmdlRhSERyVVAzYm43eDZOck4vMFdLMEl2R2wzL3ZuUjgzY20vNUw2ZHFpVXBxZnZrOWVrd0FBQUJ3Z0lLSGY1NGUwaThlV2x2OFMwL2Z2ZkV4VW9JOVdQR0ZUMGM1dmloOU03NDYrYTdrZlg0NEFRQUFHSFl4VW5PNzR1SG00WmNYdnlpR1AwZ0JCalNZR0Z0Yi9rdFJNWkVhYzN6djlqZk9EekVBQUFDREhUeXNWWDRyM2NQK2NBb2Vuais4ZXZNdFQ5OWQrbmgzK1VONmxHUDA1YVUzUm9LVWpuTDhzMVRDb21JQ0FBQ0F2YmRhK1VENjlZZEgxNWZ1cEFEaXk4YnYzdndrZC9IN3NtTGk5dXZTTi9qekRxOHRYMC9mOEc5UC9ydC9BQUFBQVBTaDR1RTNVK1grOTBmRnc4aGE1VXMwbHp5d3djVFRIM1o0ZmZHUHB4K0swOG5mVDM3YVB4QUFBQUJLOEtzcGVQak8wZFhGcnp5MFZ2bEN6U1d0d3ZXTzFjVlBHVmxkSEVzcDFkZWxINXdmaTNNNi9nRUJBQURRc09KaGRlbVhVd1grdHg1ZVhieHlhR1BwejB5L2EvckQzV0ZiSGEyeHU4dS9LeVZZYjAxSjF0ZWtVT0tIMGcrWUJwZ0FBQUFIdnNmRDBpOG1EMGZ2TFY0Y1hhLzh5YWZ2M3Ywd2Q5QldqNDV6TEgxOGFpYnl4c1BWa2FITDM3bFZidU1mSVFBQXdENnZlUGlQNmRkdlRsVVB4MGZ2clh6bVUwK2VmSWc3Wkd0UFZwVGJSUG8xc2xvNW4zNG83NllmenYva0h5a0FBTUJRZTM5MWxPWmE1V3ZUdmQ1SUhPRjM5MnNOOUJxNXUvVDZrYldsdDZWeG9TK2s0eHp2VFdOWmZzTS9aQUFBZ0lFVkV4Vy9QZDNIZmNYSXZhVy8rTXpqT3gvbnp0WWE2dlhtQnpjK2FtUnQ4UytrUk8xYXFwajQxaFJRL0pKLzZBQUFBSHQwekdLdDhyUEphcXAyT0J1VEZQVjNzUGI5dW5IanhvZW1oaWFmTlhxdmNqS0ZFOStTL2lIOGxCY0RBQUNBbnZueE5JRGdHMUsxdzlUYjc5Mzh3KzVLTFN1dFoxWXJ2L2ZRdmFVdlQxMVhuMDhWRSs5TjZkejd2RmdBQUFDMFhlM3d2bFNKL2ozcDErZFN0Y09YeGlSRWQ1eVcxY0o2K3U3dDE0MnMzWHhEK3NjemwvNFJyYVZ3NGo5N1VRRUFBTmdWUFB6YzRkWGwrNm0vdytYMFlQZHo0MTdLSGFWbGxiVEcxaGMvK2ZDOXhiZFhtMkJHd3JlNnBHb0NBQUE0U0tIRCs1TWZPcnc5emVMUTV1S251bE8wckg0R0UrKys4WkhwU01lZlR2OElUNmQvak4rYzByK2ZTTC8rbGhjb0FBQmdmMWo2bWZUclpsUTdwUDU2bi9mMDNSc2Y0MDdRc2dac3ZmMmJiM3ppeUwzbHY1eit3WDVGK2dmN1Nnb21mdDZMRndBQU1QQldsMzQ5L2ZyZHFRTDh1ZEhWNWJkR1JiZzdQTXNhMHZXTzFjVlBpWC9JaDFjcnQxSkE4WS9UUCt4ZjlrSUhBQURzWGVoUStVQjZhUHFqeWQ4NXZMNTBMRVpvVHI5citzUGR2Vm5XUGwwM250ejQwSkcxWi85b2VnRVlUNm5qM3hoZHIveUxGRTc4cGhkRUFBQ2daMGNzVml2cjFZYVNMei83K2M4OGZ1Zkh1VE96ckFPKzN2emd4a2NkMmxqK2M2UDNGaSttVkhJMXZWajh0QmRMQUFDZ0E2bXAvdEwzcGw5ZmpHYjdqbGhZbHRYeVNvMHdmMjlxQ1BObEtaaFlUaThpMzVGKy9mKzhxQUlBQURYUkxELzU4VlJsL1MwanE0dm5uMW05K1RuUlZOL2RsR1ZacGEzb056R3l0dmgwT3NxeG1GTE9iNnZPN1BVQ0RBQUFCeXgwV0xxVTdndit3dGo2alU5d2wyUlpWdDlYbEZvZHVyZjRwYWw2WWlrcUoxTGZpVi8wUWcwQUFNUGVVSExwUDZXSGoydWpxMHRYUjFjWHYyQnMvWG1oZzJWWkE3cWVQUFVoaHpZcm56YTZ2blNvZWk2c09vS244bXRlekFFQVlHQkRoL1F3Y2VrN1JsWXJOOGZXSzEvOHR2ZFVmbzhiRzh1eWhucjkrZSs4OFQ4ZFdsdjZZK25jMkZnNjF2RkNlcEg3emhSTy9JSVhmUUFBNlBzUml6aGUvZTJqYThzcjBVenk3ZmR1L21GM0xKWmxIWmcxY24vbEQ0eXNWYjRrbFhwOVpYb3gzRXgreXNVQkFBQks4MU5wYk9abU9rYjl6dlRyVzhZM252dDk3a0lzeTdMcTF2amRtNTkwYUczeEwyMmRSYXVlU2Z0SkZ4QUFBR2hTNlpCNk9xVHE0NDEwekdKaDlPV2xOOGErMnQyRlpWbFdoK3Z0MzN6akV3K3ZMMzVST3RweEpiMncza3N2c1AvZXhRWUFnSU43dkdMcFB4OWVYNzRmbFE2amF6ZmZOSGIzeHU5eTEyQlpsdFhqOVk2SGkvL3pNeTgvKy9tcDM4U0Y5R0w4OTlKWnR4OU52NzdmaFFrQWdIMVc2ZkNUNldIY2VsUTZqTnk3K1pmSDdpNExIU3pMc2dabGpYemp5a2MvczNyemMwYnZWVTZtRisyL25XWWNmNStKSFFBQURJbjNwMHFIZjVPQ2g1ZFRQNGNySS9lVy9tSlVCdHZsVzVabERkbTY4ZVRHaDBZbjRNUDNscjU4WkhYcHErTGNYQ3BoKzNjcG9QZ3RGenNBQVBibWFFWGxGMUxnOEkrVE82bHgrK1E3N2xiKzVKc2YzUGdvdTNmTHNxeDl2SjYrZStOakRyMjg5R2RHN2kwZVRSZURyMDMrZVVxZWY4V0ZFUUNBRWdPSGVQajFFK25YMVdvVHliWGxONDNjWFhxOTNiaGxXWmIxYXZYRVdLcWVHRmxiZWx1NldDeWx5b2x2VFQwb2ZzWkZGQUNBRnJ3dlZkLytVQW9jM2oyeVdqbDc2T1hGUC8vRjZ6Yyt3Uzdic2l6TGFuc2RXbjMyZDhjWnZkRjdpeGRUUVBGMzBnWG0rMU5BOGFzdXRnQUFCM2hxeGRyU3Q2Vzk0WFBwZjQrbi9lSm52L0hPcVkrd2M3WXN5N0o2V0Q1eDQwTVBiUzUrYWpyVDk5ZXFaWGJybFc5SkY2Ri9sWTUzL0lhTE13REF2Z2tjZmltRkRkK2Q5bmp2U2crbFRvNnNMYi9oNmJ1M2Y3dk5zR1ZabGpVd0svV2UrRzNQM0YzNmpPcnhqdlhLVjhaNXdLM3V4MGFMQWdBTXJOV2xYMCsvL21EYXQvM2RRMnVMYytsLy81VjNyTjc2L1hhM2xtVloxdEN1c2UrODhaRXBSZitzMGZXbFEra0N0NWdDaWdjeHZjT0ZId0NncnhVT3Y1bENobjhkSXpMVFh1emF5RnJsUzBiWGJ2NmhwKzgrL1dGMnJKWmxXZGFCV0RHbTZmRDY0aDlQWnd4SHF3MHlVMENSZnY4VHFmenZBellMQUFBZGkyclVIMHQ3cXZVWTRUNldxbFdqYWpXcVYrMUFMY3V5TEt1RmdDSWw5L2VURkZBc0NTZ0FBRDU0cENMMlJqOGVlNlZxMVdsVW42WXExS2hHdGFPMExNdXlyQkpXYW83MHV1aktQSHB2NlZBYUMzVXpYWEEzVXRML1k2TnJlbEFBQUFjbmNCaFp2VGx5YUhYNXMyTnZaSWRvV1pabFdYdXczdmo0emtjY1dsdjZZMm1LeDFzUHJ5OHRwRXFLdjV0OGI3cGcvNkxOQ3dBd1BLb2owbjh3SnBLbEhnNWZtWDcvak1EQnNpekxzb1pzdlgzejJkK1puaDU4YnBya01aVXFKNWEzbnlUOG0ycXpKaHNlQUdBdm1rYXVMdjFrMm90OFcvcjlpekVXODlCYTVRdEg3aTY5L3FrblQzMkkzWnRsV1pabDdkTlZIVFc2Y2V2VDA5T0dMNHV1MFdsRDhFM0p2OWgrRW1HVEJBQjBPYUdpOHY2MHQvaTM2ZmViY1p3aVZXK09qdHlyL0ltMEIva1lPekhMc2l6THNqNjRuano1a0xIMXhVOU96WjdlbUhwUm5FdWJpTCtWTmhEL0pQV2krQzgyVlFCQTBYR0s1TytuMzM5RkhCVWR2ZmZzWjhiUlVSc3J5N0lzeTdLNldoT2JsWTg5ZkRkTjg3aTMrUGFvb2tnYmpyK1hqbnBFTDRwZnNBa0RnUDFjM1ZBOTB2bGp5Y01VTnR3K2ZHL3AyT0dYSzUvL3RvMnYvbjFwaStBNGhXVlpsbVZaL1YvamQyOSswak9yTno5bmJIVnhMTW92MDBibGJyWFoxR3JsVjJ6Z0FHQW9qbEw4VmpwSzhSL1RkZndmcGwvL1p1cmRjSEhrM3RLYkQyMVdQbTM2WGUvNmNMc2R5N0lzeTdLR1pyM3RQWlhmTTdLMi9JYTBtWW1HbVV2cG1NZDYydkQ4cTFSTjhlczJmZ0RROThEaFo5T0RnbitXSm0yOU8vMStydG92NnQ3S1o3NzV3WTJQc211eExNdXlMR3QvcjlRWis5RHFzNy83OE9yeTU0eXNWa2JTUnVpZHFkenpHOUttNkorbWpkSlB4NU1aRzBZQWFOdjc0aGhGdXE1K2E2cHMrQnZwQWNENTFMZmhyOFdvNzdkOGZlVmpiVUFzeTdJc3k3SUsxdGk3YjN6a014czNQMzEwYmZsTnFjdjI2YlNSZXI3YWVYdTE4aThkK1FEZ2dJKy8vUG5vMDVTdWg5K1NycE9MS1dpWVRMLy92SGVzM3ZyOVQ5OTkrc1BzSWl6THNpekxzbnF3UnRaV2ZzY3pxNVUvblRaajd4aFpxOHluTTYxZm56WmgvM2Z5SDVMMzI2Z0NNTVROSWQrWEF2aFUxYkMwVmRXd3RuVGgwTDNGTDAxOUd6N3JtY2Z2L0RpN0FNdXlMTXV5ckFGYjArK2EvdkRENjh0LzhOQmE1UXZUcjlQUlFET2VHbFdmSHExVmZzNG1GNEM5Ymd5WndvV2ZTYjkrZHdvYXZtbGtkZW1yUnRjV0o5SUk3VC8vanRXdi92MDNidHo0VUZkenk3SXN5N0tzZmJSaUZPbm81c3BuSHJwWCtlTFI5YVV6aDljcnQ5Sm04T1d0Y2FUVmphSCtGQUIwSFRTazM3ODNCZUV2cCtNVEs2UHJsWk9IVm0rK1pXVHQyVC82OU4zYnIzTTF0aXpMc2l6THNsNWQwWjlpN043eS81Yk8zSDVCUEtGS204Z2JhVlA1dDlPRzhqdlNrNnQvbTM3OUh6YmFBQWY4Nk1SYTVjZXJveTdYS244bmhRNWZrUm92SDltNmJ0ejhRM0VkY1RXMUxNdXlMTXV5U2wxdjMzejJkejZ6dXZoL3hwbmR3MnVMczlGTU0yMUdWMU5vOFgzVjBXaXFLZ0NHMTJybHY2WFg4UjlNUWNOR0NxRHZiUFZvV1ByeWtZMmJmeW9tUHNYa0oxZEN5N0lzeTdJc2E2QldyYW9penZ1TzNsczZOTEsyZERsdGJsOU1jOXZ2cFUzdDk2UU43bjlNRzl6ZnRPRUg2S3NQcE5mZ24wMi8va0E2am5jLy9mcTEwZkI0WkhWeExLb1owdS8vOXpjL3VQRlJybUtXWlZtV1pWbld2bHpSak94dG01WGZzMVZaa2ZwVnJGYU9wMzRWTjhlaXpIZDk2UitrRGZLUHBxZHd2K1RHQWFBbC95TzlqdjY3RlBMKzAvVDc5NlNxaGxzcENENlhBb2EzSGw1ZC9wd1VESC95MDNkdi9EWlhIOHV5TE11eUxNdHFzdDd5OVpjK2R1emV6VDk4K09YSzU2ZGdZblRrWHFxdVdLKzhsSjdtM1V1YjdlOGFqWFBLcTVWZmNSTUM3Tk4rREZFOTl0TXBXUGlCOUZyM0tQMzZkZEdUNGZEcTRuUjZIZndyWSt2UC9oOXZmM0RyRTEwdExNdXlMTXV5TEt2ZmdVV2FCdktPZEJ6azBNYk5QemV5dHZoMEtqOCtsVGJ2WDUxKy9kdHBJLzg0YmR5L1B3VVlQNm5aSmpBZ2t5VitMdm5SNUIvRmlPWDBPdlZDK3YzYzZMMmJoMVBnK2hkSDc2MTg1c2pheXU5NHlpaEx5N0lzeTdJc3l4citsY3FUUDJiay9zb2ZHTGwzODArbHNYSnZTamNGNDJsQ3lGeVVNcWZBNGh2U3I2K2tBT05meEZOSXZTeUFGdjMzNU1lU2YxS3QyRnBmL2h0UnVUQjZyM0l5SFRmNzhoUTJmRjZNcm94dzRlbTdUMytZVjJMTHNpekxzaXpMc3ZJcmRZZC8rdTdOVDNybTd0Sm5IRnA3OWd0SDE1Y09SUWY1dzJ2TEt5bWsrTHZwZi8rRDlCVHpYNlkvKzVrVVlQeUdtekhZVjhjaWZqbjkrLzRQeVh2VC85NU0vOGJmVlEwWFZoZVBqN3g4ODBzT3ZiejBaOTZ4dXZncFQ5KzkvVG92bHBabFdaWmxXWlpsN2NtYVNFZEUzcGFhd2gxYVhmN3NRMnVWTHh4ZFhYN3I0WHRMeDZJemZicUJ1WjBtaUh4RHVxbDVrSHgzOHY5V3k3TlhLKzkzMHdjOURCUldsOTVYN2JPd1Z2bVI2bEdJclhIRGZ5c0ZDemRIVnBjdWpheFdqa1RUM0ZUSjhMbnAzK3NmaVJHVkdqdGFsbVZabG1WWmxyV2ZWNnE2V1ByNGVMSTZjcS95SitKOCtPRjdpMjlQb2NXSmRHTzBFR2ZIcTBkRzBoUFpkRVAxajlQLy9xRjRTcHYrdjE5MGs4a0I2cW1RamtrdC9YejYvWTlYR3pldUxmM0RDQlJTNzVldlM3OWZxWTRKWGwyZVRnSERsOFV4aUVOclMzL3NtZFhLN3pXTzBySXN5N0lzeTdJc3E4eVZHdG1OcmQvNGhMSDNwQ3FNZE9NMXNyYjhodEdYbC81cWVzSTdFa0ZHQ2k2dWJqZnR2SlBPcWI5N2E5ckkwcmR0VjJUOHkycWdzVmI1YjQ2VjBOT3hrbHVWUC84dStlSGt1OUtmdlpMY1RRSEMxMGZRbHFvU3Zpb3FFNko2Nk5EYTRqTXhEV0xrN3RLZmpaNEtFU1pFWHhmLzJDM0xzaXpMc2l6THN2YlpHbnYzalkrTWZoaFJtYkVWYWl6OTJSUnF2UEhRdmFVdmo5TDE1R3hxd0pjcU5Dckw2U2J5YTBmWEs5OVlmU0s5ZFZQNVQ2cVRTV0lLd09yU1QyN2ZlUDZhbS9BaEU2TndWNWYrYS9yZXBZQnE2ZjlKdjM1ZkhHVkkvOS9qN1JEckc5TDMvYStuUDFzYXViYzRuNDRjbmE0MmUwMVZDRkhKRXowVG9wOUtIRTlLZlJOKysvUzczdlhoL21WWmxtVlpsbVZabG1WWmZWMGozN2p5MFNOck4zN0h5UDJsMXgvYXJIeGFOZVJJRTB0RzFtNitJUVViWDVSdWZ0K1Nub1IvZWZyejBSUitUTVhvMVhTamV6SGQzRjVMVFFHL01tNTZrK2RTWTlBNzFRQWtucUt2VnI0eDNSUy9aK3ZtT0RVUmpCdmx0YVh2MkRyL3YvUlAwODN5UDB0djUzdlNuMzF2K3Y5K0lQMytoOUx2ZnlSdXJwTi92VDNkNE1mVDcvOTkrdlduMHEvL0tiM04vNUwrKzU5Ti8vM1BwOS8vUXZyMWw5S3Z2NUwrN05mUzc5K1gzdGNIZHQrNEwzMGcvci9xMzZuKzNlcC84d3ZWdHhGdks3M05lTnZiNytQZmI3M1BlTi94TVZRL2xoL1ordGdxUHhBZmEzek0xWTg5UG9jSUFGSXoxSzNQTFJvbFZvT0E5MVNQNmFUakNOV3ZSYXAwU1gvM3VUVDlaWEdyaVdMNm10MWJ2Qmhmd3hRTVRHMVZ4aXcrZldqMTVsdWVlWG54aTZJSFFucjdmekpHUXg2NlcvbTBWSFh3K2dpZnBoMWZzQ3pMc3F5ZXJmOGYyN1Z2MVRqendIb0FBQUFBU1VWT1JLNUNZSUk9KTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuXHJcblx0XHRcdFx0LnVzZXJBdmF0YXIge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDE1N3JweDtcclxuXHRcdFx0XHRcdGhlaWdodDogMjAzcnB4O1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0XHRcdHRvcDogNTJycHg7XHJcblx0XHRcdFx0XHRsZWZ0OiA1MCU7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA3cnB4O1xyXG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG5cdFx0XHRcdFx0d3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuXHJcblx0XHRcdFx0XHRidXR0b24ge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzVGQUU4OTtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHR0b3A6IDUwJTtcclxuXHRcdFx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDE1N3JweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuYnRucyB7XHJcblx0XHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRcdGhlaWdodDogMjgwcnB4O1xyXG5cdFx0XHRtYXJnaW46IDYwcnB4IGF1dG87XHJcblx0XHRcdGJvcmRlcjogMXJweCBkYXNoZWQgIzAwMDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdFx0YnV0dG9uIHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0XHRcdGNvbG9yOiBpbmhlcml0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LnVzZXJJbmZvIHtcclxuXHRcdFx0bWFyZ2luLXRvcDogOTNycHg7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA0N3JweDtcclxuXHRcdFx0Zm9udC1zaXplOiAxNHJweDtcclxuXHRcdFx0Y29sb3I6ICNBRkI1QjM7XHJcblxyXG5cdFx0XHQmPnZpZXcge1xyXG5cdFx0XHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyN3JweDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuaXRlbSB7XHJcblx0XHRcdFx0Jj52aWV3IHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0dGV4dGFyZWF7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjJycHg7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMXJweDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICMyNTcwNjU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQudXNlci1uYW1lIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCY+dmlldyB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHRcdFx0XHRcdCY+dmlldyB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cdFx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMXJweDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTUwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMyNTcwNjU7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5pdGVtLXFxIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHRcdFx0XHQucXEsXHJcblx0XHRcdFx0LndlY2hhdCB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHRcdFx0XHRcdCY+dmlldyB7XHJcblx0XHRcdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM5M0Q4QUE7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDExcnB4O1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxNTBycHg7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMyNTcwNjU7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0XHRcdFx0dGV4dGFyZWF7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmVtYWlsIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRcdFx0Jj52aWV3IHtcclxuXHRcdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjOTNEOEFBO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMXJweDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICMyNTcwNjU7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRcdFx0dGV4dGFyZWF7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC51c2VyLWRyZWFtIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0aGVpZ2h0OiA2NnJweDtcclxuXHRcdFx0bWFyZ2luOiA3M3JweCA0OXJweCAwO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG5cdFx0XHQmLWl0ZW0ge1xyXG5cdFx0XHRcdHdpZHRoOiAxMzBycHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSg0MywgMTk0LCA3OCwgMSk7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogN3JweDtcclxuXHRcdFx0XHRib3gtc2hhZG93OiAwcnB4IDEwcnB4IDEwcnB4IHJnYmEoNDMsIDE5NCwgNzgsIC41KTtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyMnJweDtcclxuXHRcdFx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHJcblx0XHRcdFx0JjpudGgtY2hpbGQoMikge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgxMjksIDIwNywgNjksIDEpO1xyXG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMHJweCAxMHJweCAxMHJweCByZ2JhKDEyOSwgMjA3LCA2OSwgLjUpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JjpudGgtY2hpbGQoMykge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSg0MywgMTk0LCAxODksIDEpO1xyXG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMHJweCAxMHJweCAxMHJweCByZ2JhKDQzLCAxOTQsIDE4OSwgLjUpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JjpudGgtY2hpbGQoNCkge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSg0NiwgMTU2LCAyMzksIDEpO1xyXG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMHJweCAxMHJweCAxMHJweCByZ2JhKDQ2LCAxNTYsIDIzOSwgLjUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 9);

/***/ }),
/* 9 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 10);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 10 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 11 */
/*!*****************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/utils/myAxios.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.myAxios = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // 设置基准路径\nvar baseUrl = 'http://172.16.10.21:8080';\n// const baseUrl='https://www.easy-mock.com/mock/5eef1a89aa78635a7b46263c/example/'\n// myAxios 函数，params 发请求时传入的参数\nvar myAxios = function myAxios(params) {\n  // 显示加载提示框\n  // uni.showLoading({\n  //     title: '加载中',\n  // });\n  uni.showNavigationBarLoading();\n  // 函数内部返回 Promise 实例\n  return new Promise(function (resolve, reject) {\n    uni.request(_objectSpread({},\n\n    params, {\n      url: baseUrl + params.url,\n      // 成功\n      success: function success(result) {\n        resolve(result);\n      },\n      // 失败\n      fail: function fail(error) {\n        reject(error);\n      },\n      // 完成 - 不管成功还是失败都触发\n      complete: function complete() {\n        // 隐藏提示框\n        uni.hideLoading();\n        // 请求完毕，下拉刷新结束\n        uni.stopPullDownRefresh();\n        // 请求完毕，关闭导航栏小菊花\n        uni.hideNavigationBarLoading();\n      } }));\n\n\n  });\n};exports.myAxios = myAxios;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvbXlBeGlvcy5qcyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwibXlBeGlvcyIsInBhcmFtcyIsInVuaSIsInNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJmYWlsIiwiZXJyb3IiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyJdLCJtYXBwaW5ncyI6Im1uQ0FBQTtBQUNBLElBQU1BLE9BQU8sR0FBQywwQkFBZDtBQUNBO0FBQ0E7QUFDTyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxNQUFELEVBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDRkMsS0FBRyxDQUFDQyx3QkFBSjtBQUNFO0FBQ0EsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFTQyxNQUFULEVBQWtCO0FBQ2pDSixPQUFHLENBQUNLLE9BQUo7O0FBRU9OLFVBRlA7QUFHSU8sU0FBRyxFQUFFVCxPQUFPLEdBQUdFLE1BQU0sQ0FBQ08sR0FIMUI7QUFJSTtBQUNBQyxhQUFPLEVBQUMsaUJBQUFDLE1BQU0sRUFBRTtBQUNaTCxlQUFPLENBQUNLLE1BQUQsQ0FBUDtBQUNILE9BUEw7QUFRSTtBQUNBQyxVQUFJLEVBQUMsY0FBQUMsS0FBSyxFQUFFO0FBQ1JOLGNBQU0sQ0FBQ00sS0FBRCxDQUFOO0FBQ0gsT0FYTDtBQVlJO0FBQ0FDLGNBQVEsRUFBRSxvQkFBSTtBQUNWO0FBQ0FYLFdBQUcsQ0FBQ1ksV0FBSjtBQUNBO0FBQ0FaLFdBQUcsQ0FBQ2EsbUJBQUo7QUFDQTtBQUNBYixXQUFHLENBQUNjLHdCQUFKO0FBQ0gsT0FwQkw7OztBQXVCSCxHQXhCTSxDQUFQO0FBeUJILENBaENNLEMiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDorr7nva7ln7rlh4bot6/lvoRcclxuY29uc3QgYmFzZVVybD0naHR0cDovLzE3Mi4xNi4xMC4yMTo4MDgwJ1xyXG4vLyBjb25zdCBiYXNlVXJsPSdodHRwczovL3d3dy5lYXN5LW1vY2suY29tL21vY2svNWVlZjFhODlhYTc4NjM1YTdiNDYyNjNjL2V4YW1wbGUvJ1xyXG4vLyBteUF4aW9zIOWHveaVsO+8jHBhcmFtcyDlj5Hor7fmsYLml7bkvKDlhaXnmoTlj4LmlbBcclxuZXhwb3J0IGNvbnN0IG15QXhpb3MgPSAocGFyYW1zKT0+e1xyXG4gICAgLy8g5pi+56S65Yqg6L295o+Q56S65qGGXHJcbiAgICAvLyB1bmkuc2hvd0xvYWRpbmcoe1xyXG4gICAgLy8gICAgIHRpdGxlOiAn5Yqg6L295LitJyxcclxuICAgIC8vIH0pO1xyXG5cdFx0dW5pLnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xyXG4gICAgLy8g5Ye95pWw5YaF6YOo6L+U5ZueIFByb21pc2Ug5a6e5L6LXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgLy8g6Kej5p6E5omA5pyJ5Y+C5pWwXHJcbiAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgdXJsOiBiYXNlVXJsICsgcGFyYW1zLnVybCxcclxuICAgICAgICAgICAgLy8g5oiQ5YqfXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6cmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7IFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyDlpLHotKVcclxuICAgICAgICAgICAgZmFpbDplcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g5a6M5oiQIC0g5LiN566h5oiQ5Yqf6L+Y5piv5aSx6LSl6YO96Kem5Y+RXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKT0+e1xyXG4gICAgICAgICAgICAgICAgLy8g6ZqQ6JeP5o+Q56S65qGGXHJcbiAgICAgICAgICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIC8vIOivt+axguWujOavle+8jOS4i+aLieWIt+aWsOe7k+adn1xyXG4gICAgICAgICAgICAgICAgdW5pLnN0b3BQdWxsRG93blJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIC8vIOivt+axguWujOavle+8jOWFs+mXreWvvOiIquagj+Wwj+iPiuiKsVxyXG4gICAgICAgICAgICAgICAgdW5pLmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */
/*!******************************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/blueprint/blueprint.vue?mpType=page ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blueprint_vue_vue_type_template_id_ae60b804_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blueprint.vue?vue&type=template&id=ae60b804&mpType=page */ 14);\n/* harmony import */ var _blueprint_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blueprint.vue?vue&type=script&lang=js&mpType=page */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _blueprint_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _blueprint_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _blueprint_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _blueprint_vue_vue_type_template_id_ae60b804_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _blueprint_vue_vue_type_template_id_ae60b804_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _blueprint_vue_vue_type_template_id_ae60b804_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/blueprint/blueprint.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDd0U7QUFDTDs7O0FBR25FO0FBQ3lLO0FBQ3pLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2JsdWVwcmludC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWU2MGI4MDQmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2JsdWVwcmludC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vYmx1ZXByaW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9ibHVlcHJpbnQvYmx1ZXByaW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!************************************************************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/blueprint/blueprint.vue?vue&type=template&id=ae60b804&mpType=page ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blueprint_vue_vue_type_template_id_ae60b804_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./blueprint.vue?vue&type=template&id=ae60b804&mpType=page */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blueprint_vue_vue_type_template_id_ae60b804_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blueprint_vue_vue_type_template_id_ae60b804_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blueprint_vue_vue_type_template_id_ae60b804_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blueprint_vue_vue_type_template_id_ae60b804_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/fwh/chengzhangriji-uniapp/pages/blueprint/blueprint.vue?vue&type=template&id=ae60b804&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", { staticClass: _vm._$s(1, "sc", "head"), attrs: { _i: 1 } }, [
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "tabbar"), attrs: { _i: 2 } },
        [
          _vm._l(_vm._$s(3, "f", { forItems: _vm.tabs }), function(
            value,
            index,
            $20,
            $30
          ) {
            return [
              _c(
                "view",
                {
                  key: _vm._$s(3, "f", {
                    forIndex: $20,
                    keyIndex: 0,
                    key: value.name + "_0"
                  }),
                  staticClass: _vm._$s("4-" + $30, "sc", "tab"),
                  class: _vm._$s(
                    "4-" + $30,
                    "c",
                    _vm.changeIndex == index ? "on" : ""
                  ),
                  attrs: {
                    "data-index": _vm._$s("4-" + $30, "a-data-index", index),
                    _i: "4-" + $30
                  },
                  on: { click: _vm.handleClick }
                },
                [_vm._v(_vm._$s("4-" + $30, "t0-0", _vm._s(value.name)))]
              )
            ]
          })
        ],
        2
      )
    ]),
    _vm._$s(5, "i", _vm.changeIndex == 0)
      ? _c(
          "view",
          { staticClass: _vm._$s(5, "sc", "table"), attrs: { _i: 5 } },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(6, "sc", "table-thead"),
                attrs: { _i: 6 }
              },
              [_c("text"), _c("text")]
            ),
            _vm._l(_vm._$s(9, "f", { forItems: _vm.arr }), function(
              value,
              index,
              $21,
              $31
            ) {
              return _vm._$s("9-" + $31, "i", _vm.update)
                ? [
                    _c(
                      "view",
                      {
                        key: _vm._$s(9, "f", {
                          forIndex: $21,
                          keyIndex: 0,
                          key: value.type + "_0"
                        }),
                        staticClass: _vm._$s("10-" + $31, "sc", "tr"),
                        attrs: { _i: "10-" + $31 }
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s("11-" + $31, "sc", "td1"),
                            attrs: { _i: "11-" + $31 }
                          },
                          [
                            _vm._v(
                              _vm._$s("11-" + $31, "t0-0", _vm._s(value.type))
                            )
                          ]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s("12-" + $31, "sc", "td2"),
                            attrs: { _i: "12-" + $31 }
                          },
                          [
                            _c("textarea", {
                              attrs: {
                                "data-index": _vm._$s(
                                  "13-" + $31,
                                  "a-data-index",
                                  index
                                ),
                                value: _vm._$s(
                                  "13-" + $31,
                                  "a-value",
                                  value.content
                                ),
                                _i: "13-" + $31
                              },
                              on: { blur: _vm.handleUpdate3 }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                : _vm._e()
            })
          ],
          2
        )
      : _vm._$s(14, "e", _vm.changeIndex == 1)
      ? _c(
          "view",
          { staticClass: _vm._$s(14, "sc", "table"), attrs: { _i: 14 } },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(15, "sc", "table-thead"),
                attrs: { _i: 15 }
              },
              [_c("text"), _c("text")]
            ),
            _vm._l(_vm._$s(18, "f", { forItems: _vm.array }), function(
              value,
              index,
              $22,
              $32
            ) {
              return _vm._$s("18-" + $32, "i", _vm.update)
                ? [
                    _c(
                      "view",
                      {
                        key: _vm._$s(18, "f", {
                          forIndex: $22,
                          keyIndex: 0,
                          key: value.type + "_0"
                        }),
                        staticClass: _vm._$s("19-" + $32, "sc", "tr"),
                        attrs: { _i: "19-" + $32 }
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s("20-" + $32, "sc", "td1"),
                            attrs: { _i: "20-" + $32 }
                          },
                          [
                            _vm._v(
                              _vm._$s("20-" + $32, "t0-0", _vm._s(value.type))
                            )
                          ]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s("21-" + $32, "sc", "td2"),
                            attrs: { _i: "21-" + $32 }
                          },
                          [
                            _c("textarea", {
                              attrs: {
                                "data-index": _vm._$s(
                                  "22-" + $32,
                                  "a-data-index",
                                  index
                                ),
                                value: _vm._$s(
                                  "22-" + $32,
                                  "a-value",
                                  value.content
                                ),
                                _i: "22-" + $32
                              },
                              on: { blur: _vm.handleUpdate5 }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                : _vm._e()
            })
          ],
          2
        )
      : _vm._$s(23, "e", _vm.changeIndex == 2)
      ? _c(
          "view",
          { staticClass: _vm._$s(23, "sc", "table"), attrs: { _i: 23 } },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(24, "sc", "title-head"),
                attrs: { _i: 24 }
              },
              [
                _vm._l(_vm._$s(25, "f", { forItems: _vm.cate }), function(
                  value,
                  index,
                  $23,
                  $33
                ) {
                  return [
                    _c(
                      "view",
                      {
                        key: _vm._$s(25, "f", {
                          forIndex: $23,
                          keyIndex: 0,
                          key: value.name + "_0"
                        })
                      },
                      [_vm._v(_vm._$s("26-" + $33, "t0-0", _vm._s(value.name)))]
                    )
                  ]
                })
              ],
              2
            ),
            _vm._l(_vm._$s(27, "f", { forItems: _vm.cateList }), function(
              value,
              index,
              $24,
              $34
            ) {
              return [
                _c(
                  "view",
                  {
                    key: _vm._$s(27, "f", {
                      forIndex: $24,
                      keyIndex: 0,
                      key: value.name + "_0"
                    }),
                    staticClass: _vm._$s("28-" + $34, "sc", "content"),
                    attrs: { _i: "28-" + $34 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s("29-" + $34, "sc", "content-left"),
                        attrs: { _i: "29-" + $34 }
                      },
                      [_vm._v(_vm._$s("29-" + $34, "t0-0", _vm._s(value.name)))]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s("30-" + $34, "sc", "contain"),
                        attrs: { _i: "30-" + $34 }
                      },
                      [
                        _vm._l(
                          _vm._$s(31 + "-" + $34, "f", {
                            forItems: value.children
                          }),
                          function(value2, index2, $25, $35) {
                            return _vm._$s(
                              "31-" + $34 + "-" + $35,
                              "i",
                              _vm.update
                            )
                              ? [
                                  _c(
                                    "view",
                                    {
                                      key: _vm._$s(31 + "-" + $34, "f", {
                                        forIndex: $25,
                                        keyIndex: 0,
                                        key: value2.count + "_0"
                                      }),
                                      staticClass: _vm._$s(
                                        "32-" + $34 + "-" + $35,
                                        "sc",
                                        "content-right"
                                      ),
                                      attrs: { _i: "32-" + $34 + "-" + $35 }
                                    },
                                    [
                                      _c("view", [
                                        _c("input", {
                                          attrs: {
                                            value: _vm._$s(
                                              "34-" + $34 + "-" + $35,
                                              "a-value",
                                              value2.type
                                            ),
                                            _i: "34-" + $34 + "-" + $35
                                          },
                                          on: {
                                            blur: function($event) {
                                              return _vm.handleCate(
                                                $event,
                                                value2
                                              )
                                            }
                                          }
                                        })
                                      ]),
                                      _c("view", [
                                        _vm._v(
                                          _vm._$s(
                                            "35-" + $34 + "-" + $35,
                                            "t0-0",
                                            _vm._s(value2.count)
                                          )
                                        )
                                      ]),
                                      _c("view", [
                                        _c("textarea", {
                                          attrs: {
                                            value: _vm._$s(
                                              "37-" + $34 + "-" + $35,
                                              "a-value",
                                              value2.content
                                            ),
                                            _i: "37-" + $34 + "-" + $35
                                          },
                                          on: {
                                            blur: function($event) {
                                              return _vm.handleContent(
                                                $event,
                                                value2
                                              )
                                            }
                                          }
                                        })
                                      ]),
                                      _c("view", [
                                        _c("textarea", {
                                          attrs: {
                                            value: _vm._$s(
                                              "39-" + $34 + "-" + $35,
                                              "a-value",
                                              value2.measures
                                            ),
                                            _i: "39-" + $34 + "-" + $35
                                          },
                                          on: {
                                            blur: function($event) {
                                              return _vm.handleMeasures(
                                                $event,
                                                value2
                                              )
                                            }
                                          }
                                        })
                                      ]),
                                      _c("view", [
                                        _c(
                                          "picker",
                                          {
                                            attrs: {
                                              value: _vm._$s(
                                                "41-" + $34 + "-" + $35,
                                                "a-value",
                                                value2.startTime
                                              ),
                                              _i: "41-" + $34 + "-" + $35
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.bindDateChange(
                                                  $event,
                                                  value2
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "view",
                                              {
                                                staticClass: _vm._$s(
                                                  "42-" + $34 + "-" + $35,
                                                  "sc",
                                                  "picker"
                                                ),
                                                attrs: {
                                                  _i: "42-" + $34 + "-" + $35
                                                }
                                              },
                                              [
                                                _c("text"),
                                                _c("text", [
                                                  _vm._v(
                                                    _vm._$s(
                                                      "44-" + $34 + "-" + $35,
                                                      "t0-0",
                                                      _vm._s(
                                                        value2.startTime == null
                                                          ? ""
                                                          : value2.startTime
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]
                                            )
                                          ]
                                        )
                                      ]),
                                      _c("view", {
                                        class: _vm._$s(
                                          "45-" + $34 + "-" + $35,
                                          "c",
                                          value2.complete == true
                                            ? "iconfont icon-zhengque"
                                            : ""
                                        ),
                                        attrs: { _i: "45-" + $34 + "-" + $35 },
                                        on: {
                                          click: function($event) {
                                            return _vm.handleComplete(value2)
                                          }
                                        }
                                      })
                                    ]
                                  )
                                ]
                              : _vm._e()
                          }
                        )
                      ],
                      2
                    )
                  ]
                )
              ]
            })
          ],
          2
        )
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!******************************************************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/blueprint/blueprint.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blueprint_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./blueprint.vue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blueprint_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blueprint_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blueprint_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blueprint_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blueprint_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStqQixDQUFnQixrbEJBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ibHVlcHJpbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ibHVlcHJpbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/fwh/chengzhangriji-uniapp/pages/blueprint/blueprint.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, wx) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 8));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _myAxios = __webpack_require__(/*! ../../utils/myAxios.js */ 11);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n\n\n{\n  data: function data() {\n    return {\n      tabs: [{\n        name: '人生蓝图一' },\n\n      {\n        name: '人生蓝图2' },\n\n      {\n        name: '人生蓝图3' }],\n\n\n      arr: [{\n        type: '事业' },\n\n      {\n        type: '财富' },\n\n      {\n        type: '家庭生活' },\n\n      {\n        type: '学习成长' },\n\n      {\n        type: '人际关系' },\n\n      {\n        type: '健康计划' }],\n\n\n      array: [{\n        type: '事业' },\n\n      {\n        type: '财富' },\n\n      {\n        type: '家庭生活' },\n\n      {\n        type: '学习成长' },\n\n      {\n        type: '人际关系' },\n\n      {\n        type: '健康计划' }],\n\n\n      cate: [{\n        name: '' },\n\n      {\n        name: '类别' },\n\n      {\n        name: '序号' },\n\n      {\n        name: '目标内容' },\n\n      {\n        name: '方法和措施' },\n\n      {\n        name: '起止时间' },\n\n      {\n        name: '完成打勾' }],\n\n\n      cateList: [{\n        name: '事业(工作)目标',\n        children: [{\n          parentType: '事业(工作)目标',\n          count: 1,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '事业(工作)目标',\n          count: 2,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '事业(工作)目标',\n          count: 3,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '事业(工作)目标',\n          count: 4,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '事业(工作)目标',\n          count: 5,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '事业(工作)目标',\n          count: 6,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '事业(工作)目标',\n          count: 7,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '事业(工作)目标',\n          count: 8,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false }] },\n\n\n\n      {\n        name: '财富目标',\n        children: [{\n          parentType: '财富目标',\n          count: 1,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '财富目标',\n          count: 2,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '财富目标',\n          count: 3,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '财富目标',\n          count: 4,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false }] },\n\n\n\n      {\n        name: '家庭生活',\n        children: [{\n          parentType: '家庭生活',\n          count: 1,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '家庭生活',\n          count: 2,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '家庭生活',\n          count: 3,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '家庭生活',\n          count: 4,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false }] },\n\n\n\n      {\n        name: '学习成长',\n        children: [{\n          parentType: '学习成长',\n          count: 1,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '学习成长',\n          count: 2,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '学习成长',\n          count: 3,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '学习成长',\n          count: 4,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false }] },\n\n\n\n      {\n        name: '人际关系',\n        children: [{\n          parentType: '人际关系',\n          count: 1,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '人际关系',\n          count: 2,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '人际关系',\n          count: 3,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '人际关系',\n          count: 4,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false }] },\n\n\n\n      {\n        name: '健康计划',\n        children: [{\n          parentType: '健康计划',\n          count: 1,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '健康计划',\n          count: 2,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '健康计划',\n          count: 3,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '健康计划',\n          count: 4,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false }] }],\n\n\n\n\n      changeIndex: 0,\n      update: true,\n      completionTime: 3 };\n\n  },\n  methods: {\n    // tab栏切换\n    handleClick: function handleClick(e) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var index;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n\n                index =\n                e.currentTarget.dataset.index;\n                //判断用户点击的是哪一项\n                if (index == 0) {\n                  _this.getUserBlPrint();\n                } else if (index == 1) {\n                  _this.getUserBlPrint2();\n                } else {\n                  _this.viewBlPrint3();\n                }\n                _this.changeIndex = index;case 3:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n\n    // 人生蓝图3是否完成\n    handleComplete: function handleComplete(e) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var data, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                data = e;\n                data.userid = uni.getStorageSync('userID');\n                //已经写有内容的才能标注是否完成\n                __f__(\"log\", Boolean(data.id), \" at pages/blueprint/blueprint.vue:479\");if (!\n                data.id) {_context2.next = 9;break;}\n                data.complete = !data.complete;_context2.next = 7;return (\n                  (0, _myAxios.myAxios)({\n                    url: '/anonymous/updateBlueprintDetailed',\n                    method: 'post',\n                    data: data }));case 7:res = _context2.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this2.viewBlPrint3();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 9:case \"end\":return _context2.stop();}}}, _callee2);}))();\n\n    },\n\n    // 人生蓝图3起止时间更新\n    bindDateChange: function bindDateChange(e, value2) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var value, data, res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                value = e.detail.value;\n                data = value2;\n                data.startTime = value;\n                data.userid = uni.getStorageSync('userID');_context3.next = 6;return (\n                  (0, _myAxios.myAxios)({\n                    url: '/anonymous/updateBlueprintDetailed',\n                    method: 'post',\n                    data: data }));case 6:res = _context3.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this3.viewBlPrint3();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 8:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n\n    // 人生蓝图3方法措施更新\n    handleMeasures: function handleMeasures(e, value2) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var value, data, res;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n                value = e.detail.value;\n                data = value2;\n                data.measures = value;\n                data.userid = uni.getStorageSync('userID');_context4.next = 6;return (\n                  (0, _myAxios.myAxios)({\n                    url: '/anonymous/updateBlueprintDetailed',\n                    method: 'post',\n                    data: data }));case 6:res = _context4.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this4.viewBlPrint3();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 8:case \"end\":return _context4.stop();}}}, _callee4);}))();\n    },\n\n    // 人生蓝图3目标内容更新\n    handleContent: function handleContent(e, value2) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var value, data, res;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n                value = e.detail.value;\n                data = value2;\n                data.content = value;\n                data.userid = uni.getStorageSync('userID');_context5.next = 6;return (\n                  (0, _myAxios.myAxios)({\n                    url: '/anonymous/updateBlueprintDetailed',\n                    method: 'post',\n                    data: data }));case 6:res = _context5.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this5.viewBlPrint3();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 8:case \"end\":return _context5.stop();}}}, _callee5);}))();\n    },\n\n    // 人生蓝图3类别更新\n    handleCate: function handleCate(e, value2) {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var value, data, res;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:\n                value = e.detail.value;\n                data = value2;\n                data.type = value;\n                data.userid = uni.getStorageSync('userID');_context6.next = 6;return (\n                  (0, _myAxios.myAxios)({\n                    url: '/anonymous/updateBlueprintDetailed',\n                    method: 'post',\n                    data: data }));case 6:res = _context6.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this6.viewBlPrint3();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 8:case \"end\":return _context6.stop();}}}, _callee6);}))();\n    },\n\n    // 蓝图2数据更新\n    handleUpdate5: function handleUpdate5(e) {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var index, value, data, res;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:\n                // 从event当中获取参数\n\n                index =\n                e.currentTarget.dataset.index;\n\n                value =\n                e.detail.value;\n                data = {\n                  completionTime: 5,\n                  type: _this7.array[index].type,\n                  content: value,\n                  userid: uni.getStorageSync('userID') };\n\n                if (_this7.array[index].id) {\n                  data.id = _this7.array[index].id;\n                }\n                __f__(\"log\", data, \" at pages/blueprint/blueprint.vue:605\");_context7.next = 7;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateBlueprint',\n                    data: data }));case 7:res = _context7.sent;\n\n                // console.log(res)\n                // 更新成功之后，需要重新获取数据进行页面渲染\n                if (res.data.statusCode == 200) {\n                  _this7.getUserBlPrint2();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    duration: 500,\n                    icon: 'none' });\n\n                }case 9:case \"end\":return _context7.stop();}}}, _callee7);}))();\n    },\n\n    // 蓝图1数据更新\n    handleUpdate3: function handleUpdate3(e) {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var index, value, data, res;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:\n                // 从event当中获取参数\n\n                index =\n                e.currentTarget.dataset.index;\n\n                value =\n                e.detail.value;\n                data = {\n                  completionTime: 3,\n                  type: _this8.arr[index].type,\n                  content: value,\n                  userid: uni.getStorageSync('userID') };\n\n                if (_this8.arr[index].id) {\n                  data.id = _this8.arr[index].id;\n                }\n                __f__(\"log\", data, \" at pages/blueprint/blueprint.vue:642\");_context8.next = 7;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateBlueprint',\n                    data: data }));case 7:res = _context8.sent;\n\n                // console.log(res)\n                // 更新成功之后，需要重新获取数据进行页面渲染\n                if (res.data.statusCode == 200) {\n                  _this8.getUserBlPrint();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    duration: 500,\n                    icon: 'none' });\n\n                }case 9:case \"end\":return _context8.stop();}}}, _callee8);}))();\n    },\n\n    // 获取蓝图3的数据内容\n    viewBlPrint3: function viewBlPrint3() {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var res, content, _loop, i;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:\n                _this9.update = false;_context9.next = 3;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/queryBlueprintDetailed',\n                    data: {\n                      userid: wx.getStorageSync('userID') } }));case 3:res = _context9.sent;\n\n\n                // console.log(res);\n                // 更新视图\n                if (res.statusCode === 200 && res.data.result.content) {\n                  content = res.data.result.content;_loop = function _loop(\n                  i) {\n                    content.forEach(function (v) {\n                      if (_this9.cateList[i].name === v.parentType) {\n                        _this9.cateList[i]['children'][v.count - 1] = v;\n                      }\n                    });};for (i = 0; i < _this9.cateList.length; i++) {_loop(i);\n                  }\n                } else {\n                  uni.showToast({\n                    title: '获取蓝图3数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                _this9.update = true;case 6:case \"end\":return _context9.stop();}}}, _callee9);}))();\n    },\n\n    // 获取蓝图2的数据\n    getUserBlPrint2: function getUserBlPrint2() {var _this10 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var data, res, userBluePrint;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:\n                _this10.update = false;\n                data = {\n                  completionTime: 5,\n                  userid: uni.getStorageSync('userID') };_context10.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/queryBlueprint',\n                    data: data }));case 4:res = _context10.sent;\n\n                if (res.data.message == '查询成功' && res.data.result.content) {\n                  userBluePrint = res.data.result.content;\n                  // 创建对象进行数据筛选\n                  userBluePrint.forEach(function (v) {\n                    if (v.type == '事业') {\n                      _this10.array[0] = v;\n                    }\n                    if (v.type == '财富') {\n                      _this10.array[1] = v;\n                    }\n                    if (v.type == '家庭生活') {\n                      _this10.array[2] = v;\n                    }\n                    if (v.type == '学习成长') {\n                      _this10.array[3] = v;\n                    }\n                    if (v.type == '人际关系') {\n                      _this10.array[4] = v;\n                    }\n                    if (v.type == '健康计划') {\n                      _this10.array[5] = v;\n                    }\n                  });\n                  // console.log(this.array)\n                } else {\n                  uni.showToast({\n                    title: '获取人生蓝图2数据失败,请重试',\n                    duration: 500,\n                    icon: 'none' });\n\n                }\n                _this10.update = true;case 7:case \"end\":return _context10.stop();}}}, _callee10);}))();\n    },\n\n    // 进入页面就获取蓝图1的数据\n    getUserBlPrint: function getUserBlPrint() {var _this11 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {var data, res, userBluePrint;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:\n                _this11.update = false;\n                data = {\n                  completionTime: 3,\n                  userid: uni.getStorageSync('userID') };_context11.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/queryBlueprint',\n                    data: data }));case 4:res = _context11.sent;\n\n                if (res.data.message == '查询成功' && res.data.result.content) {\n                  userBluePrint = res.data.result.content;\n                  // 创建对象进行数据筛选\n                  userBluePrint.forEach(function (v) {\n                    if (v.type == '事业') {\n                      _this11.arr[0] = v;\n                    }\n                    if (v.type == '财富') {\n                      _this11.arr[1] = v;\n                    }\n                    if (v.type == '家庭生活') {\n                      _this11.arr[2] = v;\n                    }\n                    if (v.type == '学习成长') {\n                      _this11.arr[3] = v;\n                    }\n                    if (v.type == '人际关系') {\n                      _this11.arr[4] = v;\n                    }\n                    if (v.type == '健康计划') {\n                      _this11.arr[5] = v;\n                    }\n                  });\n\n                } else {\n                  uni.showToast({\n                    title: '获取人生蓝图1数据失败,请重试',\n                    duration: 500,\n                    icon: 'none' });\n\n                }\n                _this11.update = true;case 7:case \"end\":return _context11.stop();}}}, _callee11);}))();\n    } },\n\n  onLoad: function onLoad() {\n    this.getUserBlPrint();\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"], __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvYmx1ZXByaW50L2JsdWVwcmludC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrR0EscUU7OztBQUdBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTs7QUFHQTtBQUNBLHFCQURBLEVBSEE7O0FBTUE7QUFDQSxxQkFEQSxFQU5BLENBREE7OztBQVdBO0FBQ0Esa0JBREE7O0FBR0E7QUFDQSxrQkFEQSxFQUhBOztBQU1BO0FBQ0Esb0JBREEsRUFOQTs7QUFTQTtBQUNBLG9CQURBLEVBVEE7O0FBWUE7QUFDQSxvQkFEQSxFQVpBOztBQWVBO0FBQ0Esb0JBREEsRUFmQSxDQVhBOzs7QUE4QkE7QUFDQSxrQkFEQTs7QUFHQTtBQUNBLGtCQURBLEVBSEE7O0FBTUE7QUFDQSxvQkFEQSxFQU5BOztBQVNBO0FBQ0Esb0JBREEsRUFUQTs7QUFZQTtBQUNBLG9CQURBLEVBWkE7O0FBZUE7QUFDQSxvQkFEQSxFQWZBLENBOUJBOzs7QUFpREE7QUFDQSxnQkFEQTs7QUFHQTtBQUNBLGtCQURBLEVBSEE7O0FBTUE7QUFDQSxrQkFEQSxFQU5BOztBQVNBO0FBQ0Esb0JBREEsRUFUQTs7QUFZQTtBQUNBLHFCQURBLEVBWkE7O0FBZUE7QUFDQSxvQkFEQSxFQWZBOztBQWtCQTtBQUNBLG9CQURBLEVBbEJBLENBakRBOzs7QUF1RUE7QUFDQSx3QkFEQTtBQUVBO0FBQ0EsZ0NBREE7QUFFQSxrQkFGQTtBQUdBLGtCQUhBO0FBSUEscUJBSkE7QUFLQSxzQkFMQTtBQU1BLHVCQU5BO0FBT0EseUJBUEE7O0FBU0E7QUFDQSxnQ0FEQTtBQUVBLGtCQUZBO0FBR0Esa0JBSEE7QUFJQSxxQkFKQTtBQUtBLHNCQUxBO0FBTUEsdUJBTkE7QUFPQSx5QkFQQSxFQVRBOztBQWtCQTtBQUNBLGdDQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBbEJBOztBQTJCQTtBQUNBLGdDQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBM0JBOztBQW9DQTtBQUNBLGdDQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBcENBOztBQTZDQTtBQUNBLGdDQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBN0NBOztBQXNEQTtBQUNBLGdDQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBdERBOztBQStEQTtBQUNBLGdDQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBL0RBLENBRkE7Ozs7QUE0RUE7QUFDQSxvQkFEQTtBQUVBO0FBQ0EsNEJBREE7QUFFQSxrQkFGQTtBQUdBLGtCQUhBO0FBSUEscUJBSkE7QUFLQSxzQkFMQTtBQU1BLHVCQU5BO0FBT0EseUJBUEE7O0FBU0E7QUFDQSw0QkFEQTtBQUVBLGtCQUZBO0FBR0Esa0JBSEE7QUFJQSxxQkFKQTtBQUtBLHNCQUxBO0FBTUEsdUJBTkE7QUFPQSx5QkFQQSxFQVRBOztBQWtCQTtBQUNBLDRCQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBbEJBOztBQTJCQTtBQUNBLDRCQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBM0JBLENBRkEsRUE1RUE7Ozs7QUFvSEE7QUFDQSxvQkFEQTtBQUVBO0FBQ0EsNEJBREE7QUFFQSxrQkFGQTtBQUdBLGtCQUhBO0FBSUEscUJBSkE7QUFLQSxzQkFMQTtBQU1BLHVCQU5BO0FBT0EseUJBUEE7O0FBU0E7QUFDQSw0QkFEQTtBQUVBLGtCQUZBO0FBR0Esa0JBSEE7QUFJQSxxQkFKQTtBQUtBLHNCQUxBO0FBTUEsdUJBTkE7QUFPQSx5QkFQQSxFQVRBOztBQWtCQTtBQUNBLDRCQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBbEJBOztBQTJCQTtBQUNBLDRCQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBM0JBLENBRkEsRUFwSEE7Ozs7QUE0SkE7QUFDQSxvQkFEQTtBQUVBO0FBQ0EsNEJBREE7QUFFQSxrQkFGQTtBQUdBLGtCQUhBO0FBSUEscUJBSkE7QUFLQSxzQkFMQTtBQU1BLHVCQU5BO0FBT0EseUJBUEE7O0FBU0E7QUFDQSw0QkFEQTtBQUVBLGtCQUZBO0FBR0Esa0JBSEE7QUFJQSxxQkFKQTtBQUtBLHNCQUxBO0FBTUEsdUJBTkE7QUFPQSx5QkFQQSxFQVRBOztBQWtCQTtBQUNBLDRCQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBbEJBOztBQTJCQTtBQUNBLDRCQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBM0JBLENBRkEsRUE1SkE7Ozs7QUFvTUE7QUFDQSxvQkFEQTtBQUVBO0FBQ0EsNEJBREE7QUFFQSxrQkFGQTtBQUdBLGtCQUhBO0FBSUEscUJBSkE7QUFLQSxzQkFMQTtBQU1BLHVCQU5BO0FBT0EseUJBUEE7O0FBU0E7QUFDQSw0QkFEQTtBQUVBLGtCQUZBO0FBR0Esa0JBSEE7QUFJQSxxQkFKQTtBQUtBLHNCQUxBO0FBTUEsdUJBTkE7QUFPQSx5QkFQQSxFQVRBOztBQWtCQTtBQUNBLDRCQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBbEJBOztBQTJCQTtBQUNBLDRCQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBM0JBLENBRkEsRUFwTUE7Ozs7QUE0T0E7QUFDQSxvQkFEQTtBQUVBO0FBQ0EsNEJBREE7QUFFQSxrQkFGQTtBQUdBLGtCQUhBO0FBSUEscUJBSkE7QUFLQSxzQkFMQTtBQU1BLHVCQU5BO0FBT0EseUJBUEE7O0FBU0E7QUFDQSw0QkFEQTtBQUVBLGtCQUZBO0FBR0Esa0JBSEE7QUFJQSxxQkFKQTtBQUtBLHNCQUxBO0FBTUEsdUJBTkE7QUFPQSx5QkFQQSxFQVRBOztBQWtCQTtBQUNBLDRCQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBbEJBOztBQTJCQTtBQUNBLDRCQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0Esc0JBTEE7QUFNQSx1QkFOQTtBQU9BLHlCQVBBLEVBM0JBLENBRkEsRUE1T0EsQ0F2RUE7Ozs7O0FBNFZBLG9CQTVWQTtBQTZWQSxrQkE3VkE7QUE4VkEsdUJBOVZBOztBQWdXQSxHQWxXQTtBQW1XQTtBQUNBO0FBQ0EsZUFGQSx1QkFFQSxDQUZBLEVBRUE7O0FBRUEscUJBRkE7QUFHQSx1Q0FIQSxDQUVBLEtBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQVpBO0FBYUEsS0FmQTs7QUFpQkE7QUFDQSxrQkFsQkEsMEJBa0JBLENBbEJBLEVBa0JBO0FBQ0Esb0JBREEsR0FDQSxDQURBO0FBRUE7QUFDQTtBQUNBLHdGQUpBO0FBS0EsdUJBTEE7QUFNQSwrQ0FOQTtBQU9BO0FBQ0EsNkRBREE7QUFFQSxrQ0FGQTtBQUdBLDhCQUhBLEdBUEEsU0FPQSxHQVBBOztBQVlBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSx1Q0FEQTtBQUVBLGdDQUZBO0FBR0EsaUNBSEE7O0FBS0EsaUJBcEJBOztBQXNCQSxLQXhDQTs7QUEwQ0E7QUFDQSxrQkEzQ0EsMEJBMkNBLENBM0NBLEVBMkNBLE1BM0NBLEVBMkNBO0FBQ0EscUJBREEsR0FDQSxRQURBLENBQ0EsS0FEQTtBQUVBLG9CQUZBLEdBRUEsTUFGQTtBQUdBO0FBQ0EsMkRBSkE7QUFLQTtBQUNBLDZEQURBO0FBRUEsa0NBRkE7QUFHQSw4QkFIQSxHQUxBLFNBS0EsR0FMQTs7QUFVQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBLGlCQWxCQTtBQW1CQSxLQTlEQTs7QUFnRUE7QUFDQSxrQkFqRUEsMEJBaUVBLENBakVBLEVBaUVBLE1BakVBLEVBaUVBO0FBQ0EscUJBREEsR0FDQSxRQURBLENBQ0EsS0FEQTtBQUVBLG9CQUZBLEdBRUEsTUFGQTtBQUdBO0FBQ0EsMkRBSkE7QUFLQTtBQUNBLDZEQURBO0FBRUEsa0NBRkE7QUFHQSw4QkFIQSxHQUxBLFNBS0EsR0FMQTs7QUFVQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBLGlCQWxCQTtBQW1CQSxLQXBGQTs7QUFzRkE7QUFDQSxpQkF2RkEseUJBdUZBLENBdkZBLEVBdUZBLE1BdkZBLEVBdUZBO0FBQ0EscUJBREEsR0FDQSxRQURBLENBQ0EsS0FEQTtBQUVBLG9CQUZBLEdBRUEsTUFGQTtBQUdBO0FBQ0EsMkRBSkE7QUFLQTtBQUNBLDZEQURBO0FBRUEsa0NBRkE7QUFHQSw4QkFIQSxHQUxBLFNBS0EsR0FMQTs7QUFVQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBLGlCQWxCQTtBQW1CQSxLQTFHQTs7QUE0R0E7QUFDQSxjQTdHQSxzQkE2R0EsQ0E3R0EsRUE2R0EsTUE3R0EsRUE2R0E7QUFDQSxxQkFEQSxHQUNBLFFBREEsQ0FDQSxLQURBO0FBRUEsb0JBRkEsR0FFQSxNQUZBO0FBR0E7QUFDQSwyREFKQTtBQUtBO0FBQ0EsNkRBREE7QUFFQSxrQ0FGQTtBQUdBLDhCQUhBLEdBTEEsU0FLQSxHQUxBOztBQVVBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSx1Q0FEQTtBQUVBLGdDQUZBO0FBR0EsaUNBSEE7O0FBS0EsaUJBbEJBO0FBbUJBLEtBaElBOztBQWtJQTtBQUNBLGlCQW5JQSx5QkFtSUEsQ0FuSUEsRUFtSUE7QUFDQTs7QUFFQSxxQkFIQTtBQUlBLHVDQUpBLENBR0EsS0FIQTs7QUFNQSxxQkFOQTtBQU9BLHdCQVBBLENBTUEsS0FOQTtBQVFBLG9CQVJBLEdBUUE7QUFDQSxtQ0FEQTtBQUVBLGdEQUZBO0FBR0EsZ0NBSEE7QUFJQSxzREFKQSxFQVJBOztBQWNBO0FBQ0E7QUFDQTtBQUNBLDRFQWpCQTtBQWtCQTtBQUNBLGtDQURBO0FBRUEscURBRkE7QUFHQSw4QkFIQSxHQWxCQSxTQWtCQSxHQWxCQTs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBLGlDQUZBO0FBR0EsZ0NBSEE7O0FBS0EsaUJBakNBO0FBa0NBLEtBcktBOztBQXVLQTtBQUNBLGlCQXhLQSx5QkF3S0EsQ0F4S0EsRUF3S0E7QUFDQTs7QUFFQSxxQkFIQTtBQUlBLHVDQUpBLENBR0EsS0FIQTs7QUFNQSxxQkFOQTtBQU9BLHdCQVBBLENBTUEsS0FOQTtBQVFBLG9CQVJBLEdBUUE7QUFDQSxtQ0FEQTtBQUVBLDhDQUZBO0FBR0EsZ0NBSEE7QUFJQSxzREFKQSxFQVJBOztBQWNBO0FBQ0E7QUFDQTtBQUNBLDRFQWpCQTtBQWtCQTtBQUNBLGtDQURBO0FBRUEscURBRkE7QUFHQSw4QkFIQSxHQWxCQSxTQWtCQSxHQWxCQTs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBLGlDQUZBO0FBR0EsZ0NBSEE7O0FBS0EsaUJBakNBO0FBa0NBLEtBMU1BOztBQTRNQTtBQUNBLGdCQTdNQSwwQkE2TUE7QUFDQSxzQ0FEQTtBQUVBO0FBQ0Esa0NBREE7QUFFQSw0REFGQTtBQUdBO0FBQ0EseURBREEsRUFIQSxHQUZBLFNBRUEsR0FGQTs7O0FBU0E7QUFDQTtBQUNBO0FBQ0EseUJBREEsR0FDQSxlQURBLENBQ0EsT0FEQTtBQUVBLG1CQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFKQSxFQUhBLEVBRUE7QUFNQTtBQUNBLGlCQVRBLE1BU0E7QUFDQTtBQUNBLDBDQURBO0FBRUEsZ0NBRkE7QUFHQSxpQ0FIQTs7QUFLQTtBQUNBLHFDQTNCQTtBQTRCQSxLQXpPQTs7QUEyT0E7QUFDQSxtQkE1T0EsNkJBNE9BO0FBQ0E7QUFDQSxvQkFGQSxHQUVBO0FBQ0EsbUNBREE7QUFFQSxzREFGQSxFQUZBOztBQU1BO0FBQ0Esa0NBREE7QUFFQSxvREFGQTtBQUdBLDhCQUhBLEdBTkEsU0FNQSxHQU5BOztBQVdBO0FBQ0EsK0JBREEsR0FDQSx1QkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFuQkE7QUFvQkE7QUFDQSxpQkF4QkEsTUF3QkE7QUFDQTtBQUNBLDRDQURBO0FBRUEsaUNBRkE7QUFHQSxnQ0FIQTs7QUFLQTtBQUNBLHNDQTFDQTtBQTJDQSxLQXZSQTs7QUF5UkE7QUFDQSxrQkExUkEsNEJBMFJBO0FBQ0E7QUFDQSxvQkFGQSxHQUVBO0FBQ0EsbUNBREE7QUFFQSxzREFGQSxFQUZBOztBQU1BO0FBQ0Esa0NBREE7QUFFQSxvREFGQTtBQUdBLDhCQUhBLEdBTkEsU0FNQSxHQU5BOztBQVdBO0FBQ0EsK0JBREEsR0FDQSx1QkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFuQkE7O0FBcUJBLGlCQXhCQSxNQXdCQTtBQUNBO0FBQ0EsNENBREE7QUFFQSxpQ0FGQTtBQUdBLGdDQUhBOztBQUtBO0FBQ0Esc0NBMUNBO0FBMkNBLEtBclVBLEVBbldBOztBQTBxQkEsUUExcUJBLG9CQTBxQkE7QUFDQTtBQUNBLEdBNXFCQSxFIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PCEtLSDpobbpg6h0YWLmoI8gLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImhlYWRcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJiYXJcIj5cclxuXHRcdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIHRhYnNcIiA6a2V5PVwidmFsdWUubmFtZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgQHRhcD1cImhhbmRsZUNsaWNrXCIgOmRhdGEtaW5kZXg9aW5kZXggY2xhc3M9XCJ0YWJcIiA6Y2xhc3M9XCIgY2hhbmdlSW5kZXg9PWluZGV4PyAnb24nOicnXCI+XHJcblx0XHRcdFx0XHRcdHt7dmFsdWUubmFtZX19XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDwhLS0g6KGo5qC86YOo5YiGLS3kurrnlJ/ok53lm74xIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0YWJsZVwiIHYtaWY9XCJjaGFuZ2VJbmRleD09MFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhYmxlLXRoZWFkXCI+XHJcblx0XHRcdFx0PHRleHQ+57G75YirPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0Pui/keacn+ebruaghygxfjPlubTlhoUpPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDxibG9jayB2LWZvcj1cIih2YWx1ZSxpbmRleCkgaW4gYXJyXCIgOmtleT1cInZhbHVlLnR5cGVcIiB2LWlmPVwidXBkYXRlXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0clwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZDFcIj57e3ZhbHVlLnR5cGV9fTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGQyXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBAYmx1cj1cImhhbmRsZVVwZGF0ZTNcIiA6ZGF0YS1pbmRleD1pbmRleCBtYXhsZW5ndGg9XCItMVwiIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9ibG9jaz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8IS0tIOihqOagvOmDqOWIhi0t5Lq655Sf6JOd5Zu+MiAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidGFibGVcIiB2LWVsc2UtaWY9XCJjaGFuZ2VJbmRleD09MVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhYmxlLXRoZWFkXCI+XHJcblx0XHRcdFx0PHRleHQ+57G75YirPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0Pui/keacn+ebruaghyg15bm05YaFKTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIGFycmF5XCIgOmtleT1cInZhbHVlLnR5cGVcIiB2LWlmPVwidXBkYXRlXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0clwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZDFcIj57e3ZhbHVlLnR5cGV9fTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGQyXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBAYmx1cj1cImhhbmRsZVVwZGF0ZTVcIiA6ZGF0YS1pbmRleD1pbmRleCBtYXhsZW5ndGg9XCItMVwiIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9ibG9jaz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8IS0tIOihqOagvOmDqOWIhi0t5Lq655Sf6JOd5Zu+MyAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidGFibGVcIiB2LWVsc2UtaWY9XCJjaGFuZ2VJbmRleD09MlwiPlxyXG5cdFx0XHQ8IS0tIOmhtumDqOmDqOWIhiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZS1oZWFkXCI+XHJcblx0XHRcdFx0PGJsb2NrIHYtZm9yPVwiKHZhbHVlLGluZGV4KSBpbiBjYXRlXCIgOmtleT1cInZhbHVlLm5hbWVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+e3t2YWx1ZS5uYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PCEtLSDlhoXlrrnpg6jliIYgLS0+XHJcblx0XHRcdDxibG9jayB2LWZvcj1cIih2YWx1ZSxpbmRleCkgaW4gY2F0ZUxpc3RcIiA6a2V5PVwidmFsdWUubmFtZVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50LWxlZnRcIj57e3ZhbHVlLm5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGFpblwiPlxyXG5cdFx0XHRcdFx0XHQ8YmxvY2sgdi1pZj1cInVwZGF0ZVwiIHYtZm9yPVwiKHZhbHVlMixpbmRleDIpIGluIHZhbHVlLmNoaWxkcmVuXCIgOmtleT1cInZhbHVlMi5jb3VudFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSDnsbvliKsgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgQGJsdXI9XCJoYW5kbGVDYXRlKCRldmVudCx2YWx1ZTIpXCIgOnZhbHVlPVwidmFsdWUyLnR5cGVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSDluo/lj7cgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldz57e3ZhbHVlMi5jb3VudH19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSDnm67moIflhoXlrrkgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdCAgPHRleHRhcmVhIEBibHVyPVwiaGFuZGxlQ29udGVudCgkZXZlbnQsdmFsdWUyKVwiIDp2YWx1ZT1cInZhbHVlMi5jb250ZW50XCI+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0g5pa55rOV5o6q5pa9IC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBAYmx1cj1cImhhbmRsZU1lYXN1cmVzKCRldmVudCx2YWx1ZTIpXCIgOnZhbHVlPVwidmFsdWUyLm1lYXN1cmVzXCI+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0g6YCJ5oup5pe26Ze0IC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQgPHBpY2tlciBtb2RlPVwiZGF0ZVwiIDp2YWx1ZT1cInZhbHVlMi5zdGFydFRpbWVcIiBAY2hhbmdlPVwiYmluZERhdGVDaGFuZ2UoJGV2ZW50LHZhbHVlMilcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBpY2tlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJvcGFjaXR5OjBcIj7pgInmi6nml7bpl7Q8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dD57e3ZhbHVlMi5zdGFydFRpbWU9PW51bGw/Jyc6dmFsdWUyLnN0YXJ0VGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9waWNrZXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIOWujOaIkOaJk+WLviAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IDpjbGFzcz1cInZhbHVlMi5jb21wbGV0ZT09dHJ1ZT8naWNvbmZvbnQgaWNvbi16aGVuZ3F1ZSc6JydcIiBAdGFwPVwiaGFuZGxlQ29tcGxldGUodmFsdWUyKVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L2Jsb2NrPlxyXG5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge1xyXG5cdFx0bXlBeGlvc1xyXG5cdH0gZnJvbSAnLi4vLi4vdXRpbHMvbXlBeGlvcy5qcydcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRhYnM6IFt7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfkurrnlJ/ok53lm77kuIAnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5Lq655Sf6JOd5Zu+MidcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfkurrnlJ/ok53lm74zJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGFycjogW3tcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+S6i+S4midcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICfotKLlr4wnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5a625bqt55Sf5rS7J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+WtpuS5oOaIkOmVvydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICfkurrpmYXlhbPns7snXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5YGl5bq36K6h5YiSJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0YXJyYXk6IFt7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICfkuovkuJonXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAn6LSi5a+MJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+WutuW6reeUn+a0uydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICflrabkuaDmiJDplb8nXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5Lq66ZmF5YWz57O7J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+WBpeW6t+iuoeWIkidcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGNhdGU6IFt7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICcnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn57G75YirJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+W6j+WPtydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfnm67moIflhoXlrrknXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5pa55rOV5ZKM5o6q5pa9J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+i1t+atouaXtumXtCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICflrozmiJDmiZPli74nXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0Y2F0ZUxpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfkuovkuJoo5bel5L2cKeebruaghycsXHJcblx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbe1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+S6i+S4mijlt6XkvZwp55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICfkuovkuJoo5bel5L2cKeebruaghycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogMixcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn5LqL5LiaKOW3peS9nCnnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDMsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+S6i+S4mijlt6XkvZwp55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiA0LFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICfkuovkuJoo5bel5L2cKeebruaghycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogNSxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn5LqL5LiaKOW3peS9nCnnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDYsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+S6i+S4mijlt6XkvZwp55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiA3LFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICfkuovkuJoo5bel5L2cKeebruaghycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogOCxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn6LSi5a+M55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IFt7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn6LSi5a+M55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICfotKLlr4znm67moIcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDIsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+i0ouWvjOebruaghycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogMyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn6LSi5a+M55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiA0LFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICflrrbluq3nlJ/mtLsnLFxyXG5cdFx0XHRcdFx0XHRjaGlsZHJlbjogW3tcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICflrrbluq3nlJ/mtLsnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDEsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+WutuW6reeUn+a0uycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogMixcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn5a625bqt55Sf5rS7JyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiAzLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICflrrbluq3nlJ/mtLsnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDQsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WtpuS5oOaIkOmVvycsXHJcblx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbe1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+WtpuS5oOaIkOmVvycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogMSxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn5a2m5Lmg5oiQ6ZW/JyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiAyLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICflrabkuaDmiJDplb8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDMsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+WtpuS5oOaIkOmVvycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogNCxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5Lq66ZmF5YWz57O7JyxcclxuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IFt7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn5Lq66ZmF5YWz57O7JyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICfkurrpmYXlhbPns7snLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDIsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+S6uumZheWFs+ezuycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogMyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn5Lq66ZmF5YWz57O7JyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiA0LFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICflgaXlurforqHliJInLFxyXG5cdFx0XHRcdFx0XHRjaGlsZHJlbjogW3tcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICflgaXlurforqHliJInLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDEsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+WBpeW6t+iuoeWIkicsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogMixcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn5YGl5bq36K6h5YiSJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiAzLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICflgaXlurforqHliJInLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDQsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGNoYW5nZUluZGV4OiAwLFxyXG5cdFx0XHRcdHVwZGF0ZTogdHJ1ZSxcclxuXHRcdFx0XHRjb21wbGV0aW9uVGltZTogM1xyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8gdGFi5qCP5YiH5o2iXHJcblx0XHRcdGFzeW5jIGhhbmRsZUNsaWNrKGUpIHtcclxuXHRcdFx0XHRsZXQge1xyXG5cdFx0XHRcdFx0aW5kZXhcclxuXHRcdFx0XHR9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuXHRcdFx0XHQvL+WIpOaWreeUqOaIt+eCueWHu+eahOaYr+WTquS4gOmhuVxyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLmdldFVzZXJCbFByaW50KClcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDEpIHtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0VXNlckJsUHJpbnQyKClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy52aWV3QmxQcmludDMoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmNoYW5nZUluZGV4ID0gaW5kZXhcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOS6uueUn+iTneWbvjPmmK/lkKblrozmiJBcclxuXHRcdFx0YXN5bmMgaGFuZGxlQ29tcGxldGUoZSl7XHJcblx0XHRcdFx0bGV0IGRhdGE9ZVxyXG5cdFx0XHRcdGRhdGEudXNlcmlkPXVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyk7XHJcblx0XHRcdFx0Ly/lt7Lnu4/lhpnmnInlhoXlrrnnmoTmiY3og73moIfms6jmmK/lkKblrozmiJBcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhCb29sZWFuKGRhdGEuaWQpKVxyXG5cdFx0XHRcdGlmKGRhdGEuaWQpe1xyXG5cdFx0XHRcdFx0ZGF0YS5jb21wbGV0ZT0hZGF0YS5jb21wbGV0ZVxyXG5cdFx0XHRcdFx0bGV0IHJlcz1hd2FpdCBcdG15QXhpb3Moe1xyXG5cdFx0XHRcdFx0XHR1cmw6Jy9hbm9ueW1vdXMvdXBkYXRlQmx1ZXByaW50RGV0YWlsZWQnLFxyXG5cdFx0XHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHRcdFx0dGhpcy52aWV3QmxQcmludDMoKVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOifmm7TmlrDmlbDmja7lpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDkurrnlJ/ok53lm74z6LW35q2i5pe26Ze05pu05pawXHJcblx0XHRcdGFzeW5jIGJpbmREYXRlQ2hhbmdlKGUsdmFsdWUyKXtcclxuXHRcdFx0XHRsZXQge3ZhbHVlfT1lLmRldGFpbFxyXG5cdFx0XHRcdGxldCBkYXRhPXZhbHVlMlxyXG5cdFx0XHRcdGRhdGEuc3RhcnRUaW1lPXZhbHVlXHJcblx0XHRcdFx0ZGF0YS51c2VyaWQ9dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKTtcclxuXHRcdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3VwZGF0ZUJsdWVwcmludERldGFpbGVkJyxcclxuXHRcdFx0XHRcdG1ldGhvZDoncG9zdCcsXHJcblx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG5cdFx0XHRcdFx0dGhpcy52aWV3QmxQcmludDMoKVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifmm7TmlrDmlbDmja7lpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDkurrnlJ/ok53lm74z5pa55rOV5o6q5pa95pu05pawXHJcblx0XHRcdGFzeW5jIGhhbmRsZU1lYXN1cmVzKGUsdmFsdWUyKXtcclxuXHRcdFx0XHRsZXQge3ZhbHVlfT1lLmRldGFpbFxyXG5cdFx0XHRcdGxldCBkYXRhPXZhbHVlMlxyXG5cdFx0XHRcdGRhdGEubWVhc3VyZXM9dmFsdWVcclxuXHRcdFx0XHRkYXRhLnVzZXJpZD11bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpO1xyXG5cdFx0XHRcdGxldCByZXM9YXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHR1cmw6Jy9hbm9ueW1vdXMvdXBkYXRlQmx1ZXByaW50RGV0YWlsZWQnLFxyXG5cdFx0XHRcdFx0bWV0aG9kOidwb3N0JyxcclxuXHRcdFx0XHRcdGRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0XHR0aGlzLnZpZXdCbFByaW50MygpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOS6uueUn+iTneWbvjPnm67moIflhoXlrrnmm7TmlrBcclxuXHRcdFx0YXN5bmMgaGFuZGxlQ29udGVudChlLHZhbHVlMil7XHJcblx0XHRcdFx0bGV0IHt2YWx1ZX09ZS5kZXRhaWxcclxuXHRcdFx0XHRsZXQgZGF0YSA9dmFsdWUyXHJcblx0XHRcdFx0ZGF0YS5jb250ZW50PXZhbHVlXHJcblx0XHRcdFx0ZGF0YS51c2VyaWQ9dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKTtcclxuXHRcdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xuXHRcdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVCbHVlcHJpbnREZXRhaWxlZCcsXG5cdFx0XHRcdFx0bWV0aG9kOidwb3N0Jyxcblx0XHRcdFx0XHRkYXRhXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHRcdHRoaXMudmlld0JsUHJpbnQzKClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+abtOaWsOaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDkurrnlJ/ok53lm74z57G75Yir5pu05pawXHJcblx0XHRcdGFzeW5jIGhhbmRsZUNhdGUoZSx2YWx1ZTIpe1xyXG5cdFx0XHRcdGxldCB7dmFsdWV9PWUuZGV0YWlsXHJcblx0XHRcdFx0bGV0IGRhdGEgPXZhbHVlMlxyXG5cdFx0XHRcdGRhdGEudHlwZT12YWx1ZVxyXG5cdFx0XHRcdGRhdGEudXNlcmlkPXVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyk7XHJcblx0XHRcdFx0bGV0IHJlcz0gYXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHR1cmw6Jy9hbm9ueW1vdXMvdXBkYXRlQmx1ZXByaW50RGV0YWlsZWQnLFxyXG5cdFx0XHRcdFx0bWV0aG9kOidwb3N0JyxcclxuXHRcdFx0XHRcdGRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0XHR0aGlzLnZpZXdCbFByaW50MygpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmm7TmlrDmlbDmja7lpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g6JOd5Zu+MuaVsOaNruabtOaWsFxyXG5cdFx0XHRhc3luYyBoYW5kbGVVcGRhdGU1KGUpIHtcclxuXHRcdFx0XHQvLyDku45ldmVudOW9k+S4reiOt+WPluWPguaVsFxyXG5cdFx0XHRcdGxldCB7XHJcblx0XHRcdFx0XHRpbmRleFxyXG5cdFx0XHRcdH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG5cdFx0XHRcdGxldCB7XHJcblx0XHRcdFx0XHR2YWx1ZVxyXG5cdFx0XHRcdH0gPSBlLmRldGFpbFxyXG5cdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0Y29tcGxldGlvblRpbWU6IDUsXHJcblx0XHRcdFx0XHR0eXBlOiB0aGlzLmFycmF5W2luZGV4XS50eXBlLFxyXG5cdFx0XHRcdFx0Y29udGVudDogdmFsdWUsXHJcblx0XHRcdFx0XHR1c2VyaWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuYXJyYXlbaW5kZXhdLmlkKSB7XHJcblx0XHRcdFx0XHRkYXRhLmlkID0gdGhpcy5hcnJheVtpbmRleF0uaWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvdXBkYXRlQmx1ZXByaW50JyxcclxuXHRcdFx0XHRcdGRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHQvLyDmm7TmlrDmiJDlip/kuYvlkI7vvIzpnIDopoHph43mlrDojrflj5bmlbDmja7ov5vooYzpobXpnaLmuLLmn5NcclxuXHRcdFx0XHRpZiAocmVzLmRhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0VXNlckJsUHJpbnQyKClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pu05paw5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiA1MDAsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDok53lm74x5pWw5o2u5pu05pawXHJcblx0XHRcdGFzeW5jIGhhbmRsZVVwZGF0ZTMoZSkge1xyXG5cdFx0XHRcdC8vIOS7jmV2ZW505b2T5Lit6I635Y+W5Y+C5pWwXHJcblx0XHRcdFx0bGV0IHtcclxuXHRcdFx0XHRcdGluZGV4XHJcblx0XHRcdFx0fSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcblx0XHRcdFx0bGV0IHtcclxuXHRcdFx0XHRcdHZhbHVlXHJcblx0XHRcdFx0fSA9IGUuZGV0YWlsXHJcblx0XHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHRjb21wbGV0aW9uVGltZTogMyxcclxuXHRcdFx0XHRcdHR5cGU6IHRoaXMuYXJyW2luZGV4XS50eXBlLFxyXG5cdFx0XHRcdFx0Y29udGVudDogdmFsdWUsXHJcblx0XHRcdFx0XHR1c2VyaWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuYXJyW2luZGV4XS5pZCkge1xyXG5cdFx0XHRcdFx0ZGF0YS5pZCA9IHRoaXMuYXJyW2luZGV4XS5pZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0XHRcdGxldCByZXMgPSBhd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsOiAnL2Fub255bW91cy91cGRhdGVCbHVlcHJpbnQnLFxyXG5cdFx0XHRcdFx0ZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdC8vIOabtOaWsOaIkOWKn+S5i+WQju+8jOmcgOimgemHjeaWsOiOt+WPluaVsOaNrui/m+ihjOmhtemdoua4suafk1xyXG5cdFx0XHRcdGlmIChyZXMuZGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0dGhpcy5nZXRVc2VyQmxQcmludCgpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+abtOaWsOWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogNTAwLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g6I635Y+W6JOd5Zu+M+eahOaVsOaNruWGheWuuVxyXG5cdFx0XHRhc3luYyB2aWV3QmxQcmludDMoKXtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZT1mYWxzZVxyXG5cdFx0XHRcdGxldCByZXM9YXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3F1ZXJ5Qmx1ZXByaW50RGV0YWlsZWQnLFxyXG5cdFx0XHRcdFx0ZGF0YTp7XHJcblx0XHRcdFx0XHRcdHVzZXJpZDp3eC5nZXRTdG9yYWdlU3luYygndXNlcklEJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0Ly8g5pu05paw6KeG5Zu+XHJcblx0XHRcdFx0aWYocmVzLnN0YXR1c0NvZGU9PT0yMDAmJnJlcy5kYXRhLnJlc3VsdC5jb250ZW50KXtcclxuXHRcdFx0XHRcdGxldCB7Y29udGVudH09cmVzLmRhdGEucmVzdWx0XHJcblx0XHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoaXMuY2F0ZUxpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQuZm9yRWFjaCh2PT57XHJcblx0XHRcdFx0XHRcdFx0aWYodGhpcy5jYXRlTGlzdFtpXS5uYW1lPT09di5wYXJlbnRUeXBlKXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY2F0ZUxpc3RbaV1bJ2NoaWxkcmVuJ11bdi5jb3VudC0xXT12XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifojrflj5bok53lm74z5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlPXRydWVcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vIOiOt+WPluiTneWbvjLnmoTmlbDmja5cclxuXHRcdFx0YXN5bmMgZ2V0VXNlckJsUHJpbnQyKCkge1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlID0gZmFsc2VcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdGNvbXBsZXRpb25UaW1lOiA1LFxyXG5cdFx0XHRcdFx0dXNlcmlkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCByZXMgPSBhd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsOiAnL2Fub255bW91cy9xdWVyeUJsdWVwcmludCcsXHJcblx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZiAocmVzLmRhdGEubWVzc2FnZSA9PSAn5p+l6K+i5oiQ5YqfJyAmJiByZXMuZGF0YS5yZXN1bHQuY29udGVudCkge1xyXG5cdFx0XHRcdFx0bGV0IHVzZXJCbHVlUHJpbnQgPSByZXMuZGF0YS5yZXN1bHQuY29udGVudFxyXG5cdFx0XHRcdFx0Ly8g5Yib5bu65a+56LGh6L+b6KGM5pWw5o2u562b6YCJXHJcblx0XHRcdFx0XHR1c2VyQmx1ZVByaW50LmZvckVhY2godiA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+S6i+S4micpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFycmF5WzBdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+i0ouWvjCcpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFycmF5WzFdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+WutuW6reeUn+a0uycpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFycmF5WzJdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+WtpuS5oOaIkOmVvycpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFycmF5WzNdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+S6uumZheWFs+ezuycpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFycmF5WzRdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+WBpeW6t+iuoeWIkicpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFycmF5WzVdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5hcnJheSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6I635Y+W5Lq655Sf6JOd5Zu+MuaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogNTAwLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlID0gdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g6L+b5YWl6aG16Z2i5bCx6I635Y+W6JOd5Zu+MeeahOaVsOaNrlxyXG5cdFx0XHRhc3luYyBnZXRVc2VyQmxQcmludCgpIHtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZSA9IGZhbHNlXHJcblx0XHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHRjb21wbGV0aW9uVGltZTogMyxcclxuXHRcdFx0XHRcdHVzZXJpZDogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvcXVlcnlCbHVlcHJpbnQnLFxyXG5cdFx0XHRcdFx0ZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT0gJ+afpeivouaIkOWKnycgJiYgcmVzLmRhdGEucmVzdWx0LmNvbnRlbnQpIHtcclxuXHRcdFx0XHRcdGxldCB1c2VyQmx1ZVByaW50ID0gcmVzLmRhdGEucmVzdWx0LmNvbnRlbnRcclxuXHRcdFx0XHRcdC8vIOWIm+W7uuWvueixoei/m+ihjOaVsOaNruetm+mAiVxyXG5cdFx0XHRcdFx0dXNlckJsdWVQcmludC5mb3JFYWNoKHYgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAodi50eXBlID09ICfkuovkuJonKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hcnJbMF0gPSB2XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHYudHlwZSA9PSAn6LSi5a+MJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYXJyWzFdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+WutuW6reeUn+a0uycpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFyclsyXSA9IHZcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAodi50eXBlID09ICflrabkuaDmiJDplb8nKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hcnJbM10gPSB2XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHYudHlwZSA9PSAn5Lq66ZmF5YWz57O7Jykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYXJyWzRdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+WBpeW6t+iuoeWIkicpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFycls1XSA9IHZcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+iOt+WPluS6uueUn+iTneWbvjHmlbDmja7lpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDUwMCxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnVwZGF0ZSA9IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dGhpcy5nZXRVc2VyQmxQcmludCgpXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxyXG5cdHBhZ2Uge1xyXG5cdFx0YmFja2dyb3VuZDogI0VGRjNGNjtcclxuXHR9XHJcblxyXG5cdC5oZWFkIHtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRoZWlnaHQ6IDUwcnB4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdHBhZGRpbmc6IDdycHg7XHJcblx0fVxyXG5cclxuXHQudGFiYmFyIHtcclxuXHRcdG1hcmdpbjogYXV0bztcclxuXHRcdHdpZHRoOiAzNzhycHg7XHJcblx0XHRoZWlnaHQ6IDM2cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXJweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG5cdFx0LnRhYiB7XHJcblx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTVycHg7XHJcblx0XHRcdGNvbG9yOiAjNDA0MDQwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5vbiB7XHJcblx0XHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDQ2LCAyMDYsIDE0OCwgMSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQudGFibGUge1xyXG5cdFx0Ym9yZGVyOiAxcnB4IHNvbGlkICMxQzVFNTU7XHJcblx0XHRtYXJnaW46IDAgMTRycHg7XHJcblx0XHRjb2xvcjogIzIxOWQ5YztcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG5cdFx0Ji10aGVhZCB7XHJcblx0XHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICMyMjcwNUQ7XHJcblxyXG5cdFx0XHR0ZXh0IHtcclxuXHRcdFx0XHR3aWR0aDogNzJycHg7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFycHggc29saWQgIzFDNUU1NTtcclxuXHRcdFx0XHRib3JkZXItbGVmdDogMXJweCBzb2xpZCAjMUM1RTU1O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTNycHg7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG5cdFx0XHRcdCY6bnRoLWNoaWxkKDIpIHtcclxuXHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LnRpdGxlLWhlYWQge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cclxuXHRcdFx0Jj52aWV3IHtcclxuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFycHggc29saWQgIzFDNUU1NTtcclxuXHRcdFx0XHRib3JkZXItbGVmdDogMXJweCBzb2xpZCAjMUM1RTU1O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICMyMjcwNUQ7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTNycHg7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG5cdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDcycnB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDBycHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmOm50aC1jaGlsZCgyKSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNzJycHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmOm50aC1jaGlsZCgzKSB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzZycHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmOm50aC1jaGlsZCg0KSB7XHJcblx0XHRcdFx0XHR3aWR0aDogMjEwcnB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JjpudGgtY2hpbGQoNSkge1xyXG5cdFx0XHRcdFx0ZmxleDogMTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCY6bnRoLWNoaWxkKDYpIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA4NnJweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzZycHg7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250ZW50IHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHJcblx0XHRcdCYtbGVmdCB7XHJcblx0XHRcdFx0d2lkdGg6IDcycnB4O1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFycHggc29saWQgIzFDNUU1NTtcclxuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdGJvcmRlci10b3A6IDBycHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogIzIyNzA1RDtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxM3JweDtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHR3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG5cclxuXHRcdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMHJweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5jb250YWluIHtcclxuXHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiAxcnB4IHNvbGlkICMxQzVFNTU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCYtcmlnaHQge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRcdFx0Jj52aWV3IHtcclxuXHRcdFx0XHRcdGJvcmRlcjogMXJweCBzb2xpZCAjMUM1RTU1O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDBycHg7XHJcblx0XHRcdFx0XHRib3JkZXItdG9wOiAwcnB4O1xyXG5cdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcblx0XHRcdFx0XHRpbnB1dCxcclxuXHRcdFx0XHRcdHRleHRhcmVhIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogNzJycHg7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1sZWZ0OiAwcnB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCY6bnRoLWNoaWxkKDIpIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDM2cnB4O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQmOm50aC1jaGlsZCgzKSB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAyMTBycHg7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0JjpudGgtY2hpbGQoNCkge1xyXG5cdFx0XHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAzNnJweDtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0JjpudGgtY2hpbGQoNSkge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogODZycHg7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdFx0XHRcdFx0cGlja2VyIHtcclxuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiA5OTtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR0ZXh0IHtcclxuXHRcdFx0XHRcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQudHIge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRoZWlnaHQ6IDE0MXJweDtcclxuXHJcblx0XHRcdC50ZDEge1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0d2lkdGg6IDcycnB4O1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFycHggc29saWQgIzFDNUU1NTtcclxuXHRcdFx0XHRib3JkZXItbGVmdDogMXJweCBzb2xpZCAjMUM1RTU1O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogIzIyNzA1RDtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRmb250LXNpemU6IDEzcnB4O1xyXG5cclxuXHRcdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMHJweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC50ZDIge1xyXG5cdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjMUM1RTU1O1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiAxcnB4IHNvbGlkICMxQzVFNTU7XHJcblxyXG5cdFx0XHRcdHRleHRhcmVhIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHQudGQyIHtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDBycHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 20));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 19)))

/***/ }),
/* 19 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 20 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 21 */
/*!****************************************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/quarterlygoals/quarterlygoals.vue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _quarterlygoals_vue_vue_type_template_id_753ed236_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quarterlygoals.vue?vue&type=template&id=753ed236&mpType=page */ 22);\n/* harmony import */ var _quarterlygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quarterlygoals.vue?vue&type=script&lang=js&mpType=page */ 24);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _quarterlygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _quarterlygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _quarterlygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _quarterlygoals_vue_vue_type_template_id_753ed236_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _quarterlygoals_vue_vue_type_template_id_753ed236_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _quarterlygoals_vue_vue_type_template_id_753ed236_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/quarterlygoals/quarterlygoals.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0k7QUFDdEk7QUFDNkU7QUFDTDs7O0FBR3hFO0FBQ3lLO0FBQ3pLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLCtGQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3F1YXJ0ZXJseWdvYWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NTNlZDIzNiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcXVhcnRlcmx5Z29hbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3F1YXJ0ZXJseWdvYWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9xdWFydGVybHlnb2Fscy9xdWFydGVybHlnb2Fscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**********************************************************************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/quarterlygoals/quarterlygoals.vue?vue&type=template&id=753ed236&mpType=page ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_quarterlygoals_vue_vue_type_template_id_753ed236_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./quarterlygoals.vue?vue&type=template&id=753ed236&mpType=page */ 23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_quarterlygoals_vue_vue_type_template_id_753ed236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_quarterlygoals_vue_vue_type_template_id_753ed236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_quarterlygoals_vue_vue_type_template_id_753ed236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_quarterlygoals_vue_vue_type_template_id_753ed236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 23 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/fwh/chengzhangriji-uniapp/pages/quarterlygoals/quarterlygoals.vue?vue&type=template&id=753ed236&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", { staticClass: _vm._$s(1, "sc", "head"), attrs: { _i: 1 } }, [
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "tabbar"), attrs: { _i: 2 } },
        [
          _vm._l(_vm._$s(3, "f", { forItems: _vm.tabs }), function(
            value,
            index,
            $20,
            $30
          ) {
            return [
              _c(
                "view",
                {
                  key: _vm._$s(3, "f", {
                    forIndex: $20,
                    keyIndex: 0,
                    key: value.id + "_0"
                  }),
                  staticClass: _vm._$s("4-" + $30, "sc", "tab"),
                  class: _vm._$s(
                    "4-" + $30,
                    "c",
                    _vm.changeIndex - 1 == index ? "on" : ""
                  ),
                  attrs: { _i: "4-" + $30 },
                  on: {
                    click: function($event) {
                      return _vm.changeTab(value.id)
                    }
                  }
                },
                [_vm._v(_vm._$s("4-" + $30, "t0-0", _vm._s(value.name)))]
              )
            ]
          })
        ],
        2
      )
    ]),
    _c(
      "view",
      { staticClass: _vm._$s(5, "sc", "table"), attrs: { _i: 5 } },
      [
        _c("view", { staticClass: _vm._$s(6, "sc", "th"), attrs: { _i: 6 } }, [
          _c("view", { staticClass: _vm._$s(7, "sc", "td"), attrs: { _i: 7 } }),
          _c("view", { staticClass: _vm._$s(8, "sc", "td"), attrs: { _i: 8 } }),
          _c("view", { staticClass: _vm._$s(9, "sc", "td"), attrs: { _i: 9 } }),
          _c("view", {
            staticClass: _vm._$s(10, "sc", "td"),
            attrs: { _i: 10 }
          }),
          _c("view", {
            staticClass: _vm._$s(11, "sc", "td"),
            attrs: { _i: 11 }
          })
        ]),
        _vm._l(_vm._$s(12, "f", { forItems: _vm.table }), function(
          value,
          index,
          $21,
          $31
        ) {
          return [
            _c(
              "view",
              {
                key: _vm._$s(12, "f", {
                  forIndex: $21,
                  keyIndex: 0,
                  key: value.id + "_0"
                }),
                staticClass: _vm._$s("13-" + $31, "sc", "tr"),
                attrs: { _i: "13-" + $31 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("14-" + $31, "sc", "td1"),
                    attrs: { _i: "14-" + $31 }
                  },
                  [_vm._v(_vm._$s("14-" + $31, "t0-0", _vm._s(value.name)))]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("15-" + $31, "sc", "td2"),
                    attrs: { _i: "15-" + $31 }
                  },
                  [
                    _vm._l(
                      _vm._$s(16 + "-" + $31, "f", {
                        forItems: value.children
                      }),
                      function(value2, index2, $22, $32) {
                        return _vm._$s("16-" + $31 + "-" + $32, "i", _vm.update)
                          ? [
                              _c(
                                "view",
                                {
                                  key: _vm._$s(16 + "-" + $31, "f", {
                                    forIndex: $22,
                                    keyIndex: 0,
                                    key: index2 + "_0"
                                  }),
                                  staticClass: _vm._$s(
                                    "17-" + $31 + "-" + $32,
                                    "sc",
                                    "aa"
                                  ),
                                  attrs: { _i: "17-" + $31 + "-" + $32 }
                                },
                                [
                                  _c(
                                    "view",
                                    {
                                      staticClass: _vm._$s(
                                        "18-" + $31 + "-" + $32,
                                        "sc",
                                        "td3"
                                      ),
                                      attrs: { _i: "18-" + $31 + "-" + $32 }
                                    },
                                    [
                                      _c(
                                        "view",
                                        {
                                          staticClass: _vm._$s(
                                            "19-" + $31 + "-" + $32,
                                            "sc",
                                            "td3-son"
                                          ),
                                          attrs: { _i: "19-" + $31 + "-" + $32 }
                                        },
                                        [
                                          _c("input", {
                                            attrs: {
                                              value: _vm._$s(
                                                "20-" + $31 + "-" + $32,
                                                "a-value",
                                                value2.importanceLevel
                                              ),
                                              _i: "20-" + $31 + "-" + $32
                                            },
                                            on: {
                                              blur: function($event) {
                                                return _vm.handleLevel(
                                                  $event,
                                                  value2
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      ),
                                      _c(
                                        "view",
                                        {
                                          staticClass: _vm._$s(
                                            "21-" + $31 + "-" + $32,
                                            "sc",
                                            "td3-son"
                                          ),
                                          attrs: { _i: "21-" + $31 + "-" + $32 }
                                        },
                                        [
                                          _c("textarea", {
                                            attrs: {
                                              value: _vm._$s(
                                                "22-" + $31 + "-" + $32,
                                                "a-value",
                                                value2.content
                                              ),
                                              _i: "22-" + $31 + "-" + $32
                                            },
                                            on: {
                                              blur: function($event) {
                                                return _vm.handleContent(
                                                  $event,
                                                  value2
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      ),
                                      _c(
                                        "view",
                                        {
                                          staticClass: _vm._$s(
                                            "23-" + $31 + "-" + $32,
                                            "sc",
                                            "td3-son"
                                          ),
                                          attrs: { _i: "23-" + $31 + "-" + $32 }
                                        },
                                        [
                                          _c("textarea", {
                                            attrs: {
                                              value: _vm._$s(
                                                "24-" + $31 + "-" + $32,
                                                "a-value",
                                                value2.aimMeasures
                                              ),
                                              _i: "24-" + $31 + "-" + $32
                                            },
                                            on: {
                                              blur: function($event) {
                                                return _vm.handleMeasures(
                                                  $event,
                                                  value2
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      ),
                                      _c("view", {
                                        staticClass: _vm._$s(
                                          "25-" + $31 + "-" + $32,
                                          "sc",
                                          "td3-son"
                                        ),
                                        class: _vm._$s(
                                          "25-" + $31 + "-" + $32,
                                          "c",
                                          value2.complete == true
                                            ? "iconfont icon-zhengque"
                                            : ""
                                        ),
                                        attrs: { _i: "25-" + $31 + "-" + $32 },
                                        on: {
                                          click: function($event) {
                                            return _vm.handleComplete(value2)
                                          }
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            ]
                          : _vm._e()
                      }
                    )
                  ],
                  2
                )
              ]
            )
          ]
        })
      ],
      2
    ),
    _c(
      "view",
      { staticClass: _vm._$s(26, "sc", "box"), attrs: { _i: 26 } },
      [
        _c("view", {
          staticClass: _vm._$s(27, "sc", "quarter"),
          attrs: { _i: 27 }
        }),
        _c("view", {
          staticClass: _vm._$s(28, "sc", "unfinished-part"),
          attrs: { _i: 28 }
        }),
        _vm._l(_vm._$s(29, "f", { forItems: _vm.reasonArr }), function(
          value,
          index,
          $23,
          $33
        ) {
          return _vm._$s("29-" + $33, "i", _vm.update1)
            ? [
                _c(
                  "view",
                  {
                    key: _vm._$s(29, "f", {
                      forIndex: $23,
                      keyIndex: 0,
                      key: value.type + "_0"
                    }),
                    staticClass: _vm._$s("30-" + $33, "sc", "reason"),
                    attrs: { _i: "30-" + $33 }
                  },
                  [
                    _c("text", [
                      _vm._v(_vm._$s("31-" + $33, "t0-0", _vm._s(value.type)))
                    ]),
                    _c("textarea", {
                      attrs: {
                        value: _vm._$s("32-" + $33, "a-value", value.content),
                        _i: "32-" + $33
                      },
                      on: {
                        blur: function($event) {
                          return _vm.handleReason($event, value)
                        }
                      }
                    })
                  ]
                )
              ]
            : _vm._e()
        })
      ],
      2
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 24 */
/*!****************************************************************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/quarterlygoals/quarterlygoals.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_quarterlygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./quarterlygoals.vue?vue&type=script&lang=js&mpType=page */ 25);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_quarterlygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_quarterlygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_quarterlygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_quarterlygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_quarterlygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9rQixDQUFnQix1bEJBQUcsRUFBQyIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9xdWFydGVybHlnb2Fscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3F1YXJ0ZXJseWdvYWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/fwh/chengzhangriji-uniapp/pages/quarterlygoals/quarterlygoals.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 8));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _myAxios = __webpack_require__(/*! ../../utils/myAxios.js */ 11);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  data: function data() {\n    return {\n      tabs: [{\n        id: 1,\n        name: '第一季度' },\n\n      {\n        id: 2,\n        name: '第二季度' },\n\n      {\n        id: 3,\n        name: '第三季度' },\n\n      {\n        id: 4,\n        name: '第四季度' }],\n\n\n      table: [{\n        id: 1,\n        name: '工作指标',\n        children: [{\n          complete: false,\n          content: '',\n          importanceLevel: '',\n          aimMeasures: '',\n          quarter: '',\n          quarterOrMonthFlag: 'quarter',\n          type: '工作指标',\n          year: new Date().getFullYear() },\n\n        {\n          complete: false,\n          content: '',\n          importanceLevel: '',\n          aimMeasures: '',\n          quarter: '',\n          quarterOrMonthFlag: 'quarter',\n          type: '工作指标',\n          year: new Date().getFullYear() },\n\n        {\n          complete: false,\n          content: '',\n          importanceLevel: '',\n          aimMeasures: '',\n          quarter: '',\n          quarterOrMonthFlag: 'quarter',\n          type: '工作指标',\n          year: new Date().getFullYear() },\n\n        {\n          complete: false,\n          content: '',\n          importanceLevel: '',\n          aimMeasures: '',\n          quarter: '',\n          quarterOrMonthFlag: 'quarter',\n          type: '工作指标',\n          year: new Date().getFullYear() },\n\n        {\n          complete: false,\n          content: '',\n          importanceLevel: '',\n          aimMeasures: '',\n          quarter: '',\n          quarterOrMonthFlag: 'quarter',\n          type: '工作指标',\n          year: new Date().getFullYear() }] },\n\n\n\n      {\n        id: 2,\n        name: '其他目标',\n        children: [{\n          complete: false,\n          content: '',\n          importanceLevel: '学习计划',\n          aimMeasures: '',\n          quarter: '',\n          quarterOrMonthFlag: 'quarter',\n          type: '其他目标',\n          year: new Date().getFullYear() },\n\n        {\n          complete: false,\n          content: '',\n          importanceLevel: '健康计划',\n          aimMeasures: '',\n          quarter: '',\n          quarterOrMonthFlag: 'quarter',\n          type: '其他目标',\n          year: new Date().getFullYear() },\n\n        {\n          complete: false,\n          content: '',\n          importanceLevel: '本季度反省',\n          aimMeasures: '',\n          quarter: '',\n          quarterOrMonthFlag: 'quarter',\n          type: '其他目标',\n          year: new Date().getFullYear() }] }],\n\n\n\n\n      reasonArr: [{\n        content: '',\n        type: '未完成目标的障碍和原因' },\n\n      {\n        content: '',\n        type: '客服障碍的对策和方法' },\n\n      {\n        content: '',\n        type: '本季度创新与收获' }],\n\n\n\n      update: true,\n      update1: true,\n      changeIndex: 1 };\n\n  },\n  methods: {\n\n    // tab栏切换\n    changeTab: function changeTab(value) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                _this.changeIndex = value;\n                _this.getUserQuarter();\n                _this.getUserSummary();case 3:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n\n    // 更新季度总结\n    handleReason: function handleReason(e, value2) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var value, data, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  content: value,\n                  quarter: _this2.changeIndex,\n                  type: value2.type,\n                  userid: uni.getStorageSync('userID'),\n                  year: new Date().getFullYear() };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context2.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateSummarize',\n                    data: data }));case 5:res = _context2.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this2.getUserSummary();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context2.stop();}}}, _callee2);}))();\n    },\n\n    // 更新完成状态\n    handleComplete: function handleComplete(value2) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var data, res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                data = {\n                  complete: !value2.complete,\n                  content: value2.content,\n                  importanceLevel: value2.importanceLevel,\n                  aimMeasures: value2.aimMeasures,\n                  type: value2.type,\n                  quarter: _this3.changeIndex,\n                  userId: uni.getStorageSync('userID'),\n                  year: value2.year };\n\n                // 有ID才能选择打勾\n                if (!value2.id) {_context3.next = 7;break;}\n                data.id = value2.id;_context3.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateOrInsertAirms',\n                    data: data }));case 5:res = _context3.sent;\n\n                // console.log(data)\n                if (res.data.statusCode == 200) {\n                  _this3.getUserQuarter();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context3.stop();}}}, _callee3);}))();\n\n    },\n\n    // 更新方法和措施\n    handleMeasures: function handleMeasures(e, value2) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var value, data, res;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value2.content,\n                  importanceLevel: value2.importanceLevel,\n                  aimMeasures: value,\n                  type: value2.type,\n                  quarter: _this4.changeIndex,\n                  userId: uni.getStorageSync('userID'),\n                  year: value2.year };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context4.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateOrInsertAirms',\n                    data: data }));case 5:res = _context4.sent;\n\n                // console.log(data)\n                if (res.data.statusCode == 200) {\n                  _this4.getUserQuarter();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context4.stop();}}}, _callee4);}))();\n    },\n\n    // 更新目标内容\n    handleContent: function handleContent(e, value2) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var value, data, res;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value,\n                  importanceLevel: value2.importanceLevel,\n                  aimMeasures: value2.aimMeasures,\n                  type: value2.type,\n                  quarter: _this5.changeIndex,\n                  userId: uni.getStorageSync('userID'),\n                  year: value2.year };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context5.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateOrInsertAirms',\n                    data: data }));case 5:res = _context5.sent;\n\n                // console.log(data)\n                if (res.data.statusCode == 200) {\n                  _this5.getUserQuarter();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context5.stop();}}}, _callee5);}))();\n    },\n\n    //更新类别信息 \n    handleLevel: function handleLevel(e, value2) {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var value, data, res;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value2.content,\n                  importanceLevel: value,\n                  aimMeasures: value2.aimMeasures,\n                  type: value2.type,\n                  quarter: _this6.changeIndex,\n                  userId: uni.getStorageSync('userID'),\n                  year: value2.year };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }\n                // console.log(data)\n                _context6.next = 5;return (0, _myAxios.myAxios)({\n                  method: 'post',\n                  url: '/anonymous/updateOrInsertAirms',\n                  data: data });case 5:res = _context6.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this6.getUserQuarter();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context6.stop();}}}, _callee6);}))();\n    },\n\n    // 时间转换方法\n    // 时间转换\n    getTime: function getTime() {\n      var date = new Date();\n      var year = date.getFullYear();\n      var month = date.getMonth() + 1;\n      var days = date.getDate();\n      month = month < 10 ? '0' + month : month;\n      days = days < 10 ? '0' + days : days;\n      return year + '-' + month + '-' + days;\n    },\n\n    // 获取用户季度总结\n    getUserSummary: function getUserSummary() {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var res, result;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:\n                _this7.update1 = false;_context7.next = 3;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/querySummarize',\n                    data: {\n                      quarter: _this7.changeIndex,\n                      userid: uni.getStorageSync('userID'),\n                      year: new Date().getFullYear() } }));case 3:res = _context7.sent;\n\n\n                if (res.data.statusCode == 200 && res.data.result) {\n                  // 初始化数据\n                  _this7.reasonArr = [{\n                    content: '',\n                    type: '未完成目标的障碍和原因' },\n\n                  {\n                    content: '',\n                    type: '客服障碍的对策和方法' },\n\n                  {\n                    content: '',\n                    type: '本季度创新与收获' }];\n\n\n                  result = res.data.result;\n                  result.forEach(function (v) {\n                    for (var i = 0; i < _this7.reasonArr.length; i++) {\n                      if (v.type == _this7.reasonArr[i].type) {\n                        _this7.reasonArr[i] = v;\n                      }\n                    }\n                  });\n                } else {\n                  uni.showToast({\n                    title: '获取季度总结失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                _this7.update1 = true;case 6:case \"end\":return _context7.stop();}}}, _callee7);}))();\n    },\n\n    // 获取用户季度信息\n    getUserQuarter: function getUserQuarter() {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var res, _res$data, otherTarget, workIndex;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:\n                _this8.update = false;_context8.next = 3;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/findAimsByCondition',\n                    data: {\n                      quarter: _this8.changeIndex,\n                      userId: uni.getStorageSync('userID'),\n                      year: new Date().getFullYear() } }));case 3:res = _context8.sent;\n\n\n                if (res.data.statusCode == 200 && res.data.otherTarget && res.data.workIndex) {\n                  // 更新页面数据之前先还原初始数据\n                  _this8.table = [{\n                    id: 1,\n                    name: '工作指标',\n                    children: [{\n                      complete: false,\n                      content: '',\n                      importanceLevel: '',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '工作指标',\n                      year: new Date().getFullYear() },\n\n                    {\n                      complete: false,\n                      content: '',\n                      importanceLevel: '',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '工作指标',\n                      year: new Date().getFullYear() },\n\n                    {\n                      complete: false,\n                      content: '',\n                      importanceLevel: '',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '工作指标',\n                      year: new Date().getFullYear() },\n\n                    {\n                      complete: false,\n                      content: '',\n                      importanceLevel: '',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '工作指标',\n                      year: new Date().getFullYear() },\n\n                    {\n                      complete: false,\n                      content: '',\n                      importanceLevel: '',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '工作指标',\n                      year: new Date().getFullYear() }] },\n\n\n\n                  {\n                    id: 2,\n                    name: '其他目标',\n                    children: [{\n                      complete: false,\n                      content: '',\n                      importanceLevel: '学习计划',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '其他目标',\n                      year: new Date().getFullYear() },\n\n                    {\n                      complete: false,\n                      content: '',\n                      importanceLevel: '健康计划',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '其他目标',\n                      year: new Date().getFullYear() },\n\n                    {\n                      complete: false,\n                      content: '',\n                      importanceLevel: '本季度反省',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '其他目标',\n                      year: new Date().getFullYear() }] }];_res$data =\n\n\n\n\n                  res.data, otherTarget = _res$data.otherTarget, workIndex = _res$data.workIndex;\n                  workIndex.forEach(function (v, i) {\n                    _this8.table[0].children[i] = v;\n                    _this8.table[0].children.length = 5;\n                  });\n                  otherTarget.forEach(function (v, i) {\n                    if (v.importanceLevel == '学习计划') {\n                      _this8.table[1].children[0] = v;\n                    } else if (v.importanceLevel == '健康计划') {\n                      _this8.table[1].children[1] = v;\n                    } else if (v.importanceLevel == '本季度反省') {\n                      _this8.table[1].children[2] = v;\n                    } else {\n                      table[1].children.push(v);\n                    }\n                    _this8.table[1].children.length = 3;\n                  });\n                } else {\n                  uni.showToast({\n                    title: '获取季度信息失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                // console.log(this.table)\n                _this8.update = true;case 6:case \"end\":return _context8.stop();}}}, _callee8);}))();\n    } },\n\n  onLoad: function onLoad() {\n    this.getUserQuarter();\n    this.getUserSummary();\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcXVhcnRlcmx5Z29hbHMvcXVhcnRlcmx5Z29hbHMudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFFQSxxRTtBQUNBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQSxhQURBO0FBRUEsb0JBRkE7O0FBSUE7QUFDQSxhQURBO0FBRUEsb0JBRkEsRUFKQTs7QUFRQTtBQUNBLGFBREE7QUFFQSxvQkFGQSxFQVJBOztBQVlBO0FBQ0EsYUFEQTtBQUVBLG9CQUZBLEVBWkEsQ0FEQTs7O0FBa0JBO0FBQ0EsYUFEQTtBQUVBLG9CQUZBO0FBR0E7QUFDQSx5QkFEQTtBQUVBLHFCQUZBO0FBR0EsNkJBSEE7QUFJQSx5QkFKQTtBQUtBLHFCQUxBO0FBTUEsdUNBTkE7QUFPQSxzQkFQQTtBQVFBLHdDQVJBOztBQVVBO0FBQ0EseUJBREE7QUFFQSxxQkFGQTtBQUdBLDZCQUhBO0FBSUEseUJBSkE7QUFLQSxxQkFMQTtBQU1BLHVDQU5BO0FBT0Esc0JBUEE7QUFRQSx3Q0FSQSxFQVZBOztBQW9CQTtBQUNBLHlCQURBO0FBRUEscUJBRkE7QUFHQSw2QkFIQTtBQUlBLHlCQUpBO0FBS0EscUJBTEE7QUFNQSx1Q0FOQTtBQU9BLHNCQVBBO0FBUUEsd0NBUkEsRUFwQkE7O0FBOEJBO0FBQ0EseUJBREE7QUFFQSxxQkFGQTtBQUdBLDZCQUhBO0FBSUEseUJBSkE7QUFLQSxxQkFMQTtBQU1BLHVDQU5BO0FBT0Esc0JBUEE7QUFRQSx3Q0FSQSxFQTlCQTs7QUF3Q0E7QUFDQSx5QkFEQTtBQUVBLHFCQUZBO0FBR0EsNkJBSEE7QUFJQSx5QkFKQTtBQUtBLHFCQUxBO0FBTUEsdUNBTkE7QUFPQSxzQkFQQTtBQVFBLHdDQVJBLEVBeENBLENBSEE7Ozs7QUF1REE7QUFDQSxhQURBO0FBRUEsb0JBRkE7QUFHQTtBQUNB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QVJBLEVBVkE7O0FBb0JBO0FBQ0EscUNBREE7QUFFQSxpQ0FGQTtBQUdBLDhDQUhBO0FBSUEscUNBSkE7QUFLQSxpQ0FMQTtBQU1BLG1EQU5BO0FBT0Esa0NBUEE7QUFRQSxvREFSQSxFQXBCQSxDQUhBLEVBdkRBLEVBRkE7Ozs7O0FBNkZBLDBCQTdGQSxFQTZGQSxXQTdGQSxhQTZGQSxXQTdGQSxFQTZGQSxTQTdGQSxhQTZGQSxTQTdGQTtBQThGQTtBQUNBO0FBQ0E7QUFDQSxtQkFIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBLHFCQUZBLE1BRUE7QUFDQTtBQUNBLHFCQUZBLE1BRUE7QUFDQTtBQUNBLHFCQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFYQTtBQVlBLGlCQTlHQSxNQThHQTtBQUNBO0FBQ0EseUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBO0FBQ0E7QUFDQSxxQ0FqSUE7QUFrSUEsS0F0V0EsRUFsSUE7O0FBMGVBLFFBMWVBLG9CQTBlQTtBQUNBO0FBQ0E7QUFDQSxHQTdlQSxFIiwiZmlsZSI6IjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0XHJcblx0XHQ8IS0tIOmhtumDqHRhYuagjyAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiaGVhZFwiPlxyXG5cdFx0ICA8dmlldyBjbGFzcz1cInRhYmJhclwiPlxyXG5cdFx0ICAgIDxibG9jayB2LWZvcj1cIih2YWx1ZSxpbmRleCkgaW4gdGFic1wiIDprZXk9XCJ2YWx1ZS5pZFwiPlxyXG5cdFx0ICAgICAgPHZpZXcgIGNsYXNzPVwidGFiXCIgOmNsYXNzPVwiKGNoYW5nZUluZGV4LTEpPT1pbmRleD8nb24nOicnXCIgQHRhcD1cImNoYW5nZVRhYih2YWx1ZS5pZClcIj5cclxuXHRcdCAgICAgICAge3t2YWx1ZS5uYW1lfX1cclxuXHRcdCAgICAgIDwvdmlldz5cclxuXHRcdCAgICA8L2Jsb2NrPlxyXG5cdFx0ICA8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS0g6KGo5qC86YOo5YiGIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0YWJsZVwiPlxyXG5cdFx0XHQ8IS0tIOihqOWktCAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGRcIj7nsbvliKs8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZFwiPumHjeimgee6p+WIqzwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRkXCI+55uu5qCH5YaF5a65PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGRcIj7mlrnms5Xlkozmjqrmlr08L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZFwiPuWujOaIkOaJk+WLvjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOihqOagvOS4u+S9kyAtLT5cclxuXHRcdFx0PGJsb2NrIHYtZm9yPVwiKHZhbHVlLGluZGV4KSBpbiB0YWJsZVwiIDprZXk9XCJ2YWx1ZS5pZFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidHJcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGQxXCI+e3t2YWx1ZS5uYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRkMlwiPlxyXG5cdFx0XHRcdFx0XHQ8YmxvY2sgdi1pZj1cInVwZGF0ZVwiIHYtZm9yPVwiKHZhbHVlMixpbmRleDIpIGluIHZhbHVlLmNoaWxkcmVuXCIgOmtleT1cImluZGV4MlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGQzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGQzLXNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIDxpbnB1dCB0eXBlPVwidGV4dFwiIDp2YWx1ZT1cInZhbHVlMi5pbXBvcnRhbmNlTGV2ZWxcIiBAYmx1cj1cImhhbmRsZUxldmVsKCRldmVudCx2YWx1ZTIpXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRkMy1zb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ICA8dGV4dGFyZWEgOnZhbHVlPVwidmFsdWUyLmNvbnRlbnRcIiBAYmx1cj1cImhhbmRsZUNvbnRlbnQoJGV2ZW50LHZhbHVlMilcIiBjbGFzcz1cIlwiPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZDMtc29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgPHRleHRhcmVhIDp2YWx1ZT1cInZhbHVlMi5haW1NZWFzdXJlc1wiIGNsYXNzPVwiXCIgQGJsdXI9XCJoYW5kbGVNZWFzdXJlcygkZXZlbnQsdmFsdWUyKVwiPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZDMtc29uXCIgOmNsYXNzPVwidmFsdWUyLmNvbXBsZXRlPT10cnVlPydpY29uZm9udCBpY29uLXpoZW5ncXVlJzonJ1wiIEB0YXA9XCJoYW5kbGVDb21wbGV0ZSh2YWx1ZTIpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHRcclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PCEtLSDlraPluqbmgLvnu5Ppg6jliIYgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJveFwiPlxyXG5cdFx0ICA8dmlldyBjbGFzcz1cInF1YXJ0ZXJcIj7mnKzlraPluqbnmoTnm67moIfmgLvnu5Mo6K+35Zyo5q+P5a2j5bqm5pyr5Zue5Yiw5pys5Lia5a+55bqU5LiK6KGo5oC757uT5YiG5p6QKTwvdmlldz5cclxuXHRcdCAgPHZpZXcgY2xhc3M9XCJ1bmZpbmlzaGVkLXBhcnRcIj5cclxuXHRcdCAgPC92aWV3PlxyXG5cdFx0ICA8YmxvY2sgdi1pZj1cInVwZGF0ZTFcIiB2LWZvcj1cIih2YWx1ZSxpbmRleCkgaW4gcmVhc29uQXJyXCIgOmtleT1cInZhbHVlLnR5cGVcIj5cclxuXHRcdCAgICA8dmlldyBjbGFzcz1cInJlYXNvblwiPlxyXG5cdFx0ICAgICAgPHRleHQ+e3t2YWx1ZS50eXBlfX08L3RleHQ+XHJcblx0XHQgICAgICA8dGV4dGFyZWEgOnZhbHVlPVwidmFsdWUuY29udGVudFwiIEBibHVyPVwiaGFuZGxlUmVhc29uKCRldmVudCx2YWx1ZSlcIj48L3RleHRhcmVhPlxyXG5cdFx0ICAgIDwvdmlldz5cclxuXHRcdCAgPC9ibG9jaz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHtteUF4aW9zfSBmcm9tICcuLi8uLi91dGlscy9teUF4aW9zLmpzJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGFiczogW3tcclxuXHRcdFx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfnrKzkuIDlraPluqYnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZDogMixcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+esrOS6jOWto+W6pidcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlkOiAzLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn56ys5LiJ5a2j5bqmJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWQ6IDQsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfnrKzlm5vlraPluqYnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHR0YWJsZTogW3tcclxuXHRcdFx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICflt6XkvZzmjIfmoIcnLFxyXG5cdFx0XHRcdFx0XHRjaGlsZHJlbjogW3tcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0aW1wb3J0YW5jZUxldmVsOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGFpbU1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXI6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0cXVhcnRlck9yTW9udGhGbGFnOiAncXVhcnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAn5bel5L2c5oyH5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRpbXBvcnRhbmNlTGV2ZWw6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0YWltTWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0cXVhcnRlcjogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRxdWFydGVyT3JNb250aEZsYWc6ICdxdWFydGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflt6XkvZzmjIfmoIcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0eWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGltcG9ydGFuY2VMZXZlbDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRhaW1NZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRxdWFydGVyOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXJPck1vbnRoRmxhZzogJ3F1YXJ0ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+W3peS9nOaMh+aghycsXHJcblx0XHRcdFx0XHRcdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0aW1wb3J0YW5jZUxldmVsOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGFpbU1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXI6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0cXVhcnRlck9yTW9udGhGbGFnOiAncXVhcnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAn5bel5L2c5oyH5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRpbXBvcnRhbmNlTGV2ZWw6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0YWltTWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0cXVhcnRlcjogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRxdWFydGVyT3JNb250aEZsYWc6ICdxdWFydGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflt6XkvZzmjIfmoIcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0eWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWQ6IDIsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICflhbbku5bnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjaGlsZHJlbjogW3tcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0aW1wb3J0YW5jZUxldmVsOiAn5a2m5Lmg6K6h5YiSJyxcclxuXHRcdFx0XHRcdFx0XHRcdGFpbU1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXI6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0cXVhcnRlck9yTW9udGhGbGFnOiAncXVhcnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAn5YW25LuW55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRpbXBvcnRhbmNlTGV2ZWw6ICflgaXlurforqHliJInLFxyXG5cdFx0XHRcdFx0XHRcdFx0YWltTWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0cXVhcnRlcjogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRxdWFydGVyT3JNb250aEZsYWc6ICdxdWFydGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflhbbku5bnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0eWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGltcG9ydGFuY2VMZXZlbDogJ+acrOWto+W6puWPjeecgScsXHJcblx0XHRcdFx0XHRcdFx0XHRhaW1NZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRxdWFydGVyOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXJPck1vbnRoRmxhZzogJ3F1YXJ0ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+WFtuS7luebruaghycsXHJcblx0XHRcdFx0XHRcdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRyZWFzb25BcnI6IFt7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pyq5a6M5oiQ55uu5qCH55qE6Zqc56KN5ZKM5Y6f5ZugJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICflrqLmnI3pmpznoo3nmoTlr7nnrZblkozmlrnms5UnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWto+W6puWIm+aWsOS4juaUtuiOtydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cclxuXHRcdFx0XHR1cGRhdGU6dHJ1ZSxcclxuXHRcdFx0XHR1cGRhdGUxOnRydWUsXHJcblx0XHRcdFx0Y2hhbmdlSW5kZXg6IDFcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0XHJcblx0XHRcdC8vIHRhYuagj+WIh+aNolxyXG5cdFx0XHRhc3luYyBjaGFuZ2VUYWIodmFsdWUpe1xyXG5cdFx0XHRcdHRoaXMuY2hhbmdlSW5kZXg9dmFsdWVcclxuXHRcdFx0XHR0aGlzLmdldFVzZXJRdWFydGVyKClcclxuXHRcdFx0XHR0aGlzLmdldFVzZXJTdW1tYXJ5KClcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOabtOaWsOWto+W6puaAu+e7k1xyXG5cdFx0XHRhc3luYyBoYW5kbGVSZWFzb24oZSx2YWx1ZTIpe1xyXG5cdFx0XHRcdGxldCB7dmFsdWV9ID0gZS5kZXRhaWxcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IHZhbHVlLFxyXG5cdFx0XHRcdFx0cXVhcnRlcjogdGhpcy5jaGFuZ2VJbmRleCxcclxuXHRcdFx0XHRcdHR5cGU6IHZhbHVlMi50eXBlLFxyXG5cdFx0XHRcdFx0dXNlcmlkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpLFxyXG5cdFx0XHRcdFx0eWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh2YWx1ZTIuaWQpIHtcclxuXHRcdFx0XHRcdGRhdGEuaWQgPSB2YWx1ZTIuaWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IHJlcyA9IGF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXHJcblx0XHRcdFx0XHR1cmw6ICcvYW5vbnltb3VzL3VwZGF0ZVN1bW1hcml6ZScsXHJcblx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG5cdFx0XHRcdFx0dGhpcy5nZXRVc2VyU3VtbWFyeSgpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOabtOaWsOWujOaIkOeKtuaAgVxyXG5cdFx0XHRhc3luYyBoYW5kbGVDb21wbGV0ZSh2YWx1ZTIpe1xyXG5cdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0Y29tcGxldGU6ICF2YWx1ZTIuY29tcGxldGUsXHJcblx0XHRcdFx0XHRjb250ZW50OiB2YWx1ZTIuY29udGVudCxcclxuXHRcdFx0XHRcdGltcG9ydGFuY2VMZXZlbDogdmFsdWUyLmltcG9ydGFuY2VMZXZlbCxcclxuXHRcdFx0XHRcdGFpbU1lYXN1cmVzOiB2YWx1ZTIuYWltTWVhc3VyZXMsXHJcblx0XHRcdFx0XHR0eXBlOiB2YWx1ZTIudHlwZSxcclxuXHRcdFx0XHRcdHF1YXJ0ZXI6IHRoaXMuY2hhbmdlSW5kZXgsXHJcblx0XHRcdFx0XHR1c2VySWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyksXHJcblx0XHRcdFx0XHR5ZWFyOiB2YWx1ZTIueWVhclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDmnIlJROaJjeiDvemAieaLqeaJk+WLvlxyXG5cdFx0XHRcdGlmICh2YWx1ZTIuaWQpIHtcclxuXHRcdFx0XHRcdGRhdGEuaWQgPSB2YWx1ZTIuaWRcclxuXHRcdFx0XHRcdGxldCByZXMgPSBhd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXHJcblx0XHRcdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvdXBkYXRlT3JJbnNlcnRBaXJtcycsXHJcblx0XHRcdFx0XHRcdGRhdGFcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5nZXRVc2VyUXVhcnRlcigpXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOabtOaWsOaWueazleWSjOaOquaWvVxyXG5cdFx0XHRhc3luYyBoYW5kbGVNZWFzdXJlcyhlLHZhbHVlMil7XHJcblx0XHRcdFx0bGV0IHt2YWx1ZX0gPSBlLmRldGFpbFxyXG5cdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0Y29tcGxldGU6IHZhbHVlMi5jb21wbGV0ZSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IHZhbHVlMi5jb250ZW50LFxyXG5cdFx0XHRcdFx0aW1wb3J0YW5jZUxldmVsOiB2YWx1ZTIuaW1wb3J0YW5jZUxldmVsLFxyXG5cdFx0XHRcdFx0YWltTWVhc3VyZXM6IHZhbHVlLFxyXG5cdFx0XHRcdFx0dHlwZTogdmFsdWUyLnR5cGUsXHJcblx0XHRcdFx0XHRxdWFydGVyOiB0aGlzLmNoYW5nZUluZGV4LFxyXG5cdFx0XHRcdFx0dXNlcklkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpLFxyXG5cdFx0XHRcdFx0eWVhcjogdmFsdWUyLnllYXJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHZhbHVlMi5pZCkge1xyXG5cdFx0XHRcdFx0ZGF0YS5pZCA9IHZhbHVlMi5pZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvdXBkYXRlT3JJbnNlcnRBaXJtcycsXHJcblx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0XHR0aGlzLmdldFVzZXJRdWFydGVyKClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTon5pu05paw5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5pu05paw55uu5qCH5YaF5a65XHJcblx0XHRcdGFzeW5jIGhhbmRsZUNvbnRlbnQoZSx2YWx1ZTIpe1xyXG5cdFx0XHRcdGxldCB7dmFsdWV9ID0gZS5kZXRhaWxcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdGNvbXBsZXRlOiB2YWx1ZTIuY29tcGxldGUsXHJcblx0XHRcdFx0XHRjb250ZW50OiB2YWx1ZSxcclxuXHRcdFx0XHRcdGltcG9ydGFuY2VMZXZlbDogdmFsdWUyLmltcG9ydGFuY2VMZXZlbCxcclxuXHRcdFx0XHRcdGFpbU1lYXN1cmVzOiB2YWx1ZTIuYWltTWVhc3VyZXMsXHJcblx0XHRcdFx0XHR0eXBlOiB2YWx1ZTIudHlwZSxcclxuXHRcdFx0XHRcdHF1YXJ0ZXI6IHRoaXMuY2hhbmdlSW5kZXgsXHJcblx0XHRcdFx0XHR1c2VySWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyksXHJcblx0XHRcdFx0XHR5ZWFyOiB2YWx1ZTIueWVhclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodmFsdWUyLmlkKSB7XHJcblx0XHRcdFx0XHRkYXRhLmlkID0gdmFsdWUyLmlkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCByZXMgPSBhd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsOiAnL2Fub255bW91cy91cGRhdGVPckluc2VydEFpcm1zJyxcclxuXHRcdFx0XHRcdGRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0VXNlclF1YXJ0ZXIoKVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifmm7TmlrDlpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvL+abtOaWsOexu+WIq+S/oeaBryBcclxuXHRcdFx0YXN5bmMgaGFuZGxlTGV2ZWwoZSx2YWx1ZTIpe1xyXG5cdFx0XHRcdGxldCB7dmFsdWV9ID1lLmRldGFpbFxyXG5cdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0Y29tcGxldGU6IHZhbHVlMi5jb21wbGV0ZSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IHZhbHVlMi5jb250ZW50LFxyXG5cdFx0XHRcdFx0aW1wb3J0YW5jZUxldmVsOiB2YWx1ZSxcclxuXHRcdFx0XHRcdGFpbU1lYXN1cmVzOiB2YWx1ZTIuYWltTWVhc3VyZXMsXHJcblx0XHRcdFx0XHR0eXBlOiB2YWx1ZTIudHlwZSxcclxuXHRcdFx0XHRcdHF1YXJ0ZXI6IHRoaXMuY2hhbmdlSW5kZXgsXHJcblx0XHRcdFx0XHR1c2VySWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyksXHJcblx0XHRcdFx0XHR5ZWFyOiB2YWx1ZTIueWVhclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodmFsdWUyLmlkKSB7XHJcblx0XHRcdFx0XHRkYXRhLmlkID0gdmFsdWUyLmlkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0bGV0IHJlcyA9IGF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXHJcblx0XHRcdFx0XHR1cmw6ICcvYW5vbnltb3VzL3VwZGF0ZU9ySW5zZXJ0QWlybXMnLFxyXG5cdFx0XHRcdFx0ZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0VXNlclF1YXJ0ZXIoKVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifmm7TmlrDlpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDml7bpl7TovazmjaLmlrnms5VcclxuXHRcdFx0Ly8g5pe26Ze06L2s5o2iXHJcblx0XHRcdGdldFRpbWUoKSB7XHJcblx0XHRcdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcblx0XHRcdFx0bGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcclxuXHRcdFx0XHRsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcblx0XHRcdFx0bGV0IGRheXMgPSBkYXRlLmdldERhdGUoKVxyXG5cdFx0XHRcdG1vbnRoID0gbW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGhcclxuXHRcdFx0XHRkYXlzID0gZGF5cyA8IDEwID8gJzAnICsgZGF5cyA6IGRheXNcclxuXHRcdFx0XHRyZXR1cm4geWVhciArICctJyArIG1vbnRoICsgJy0nICsgZGF5c1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g6I635Y+W55So5oi35a2j5bqm5oC757uTXHJcblx0XHRcdGFzeW5jIGdldFVzZXJTdW1tYXJ5KCl7XHJcblx0XHRcdFx0dGhpcy51cGRhdGUxPWZhbHNlXHJcblx0XHRcdFx0bGV0IHJlcyA9IGF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXHJcblx0XHRcdFx0XHR1cmw6ICcvYW5vbnltb3VzL3F1ZXJ5U3VtbWFyaXplJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0cXVhcnRlcjogdGhpcy5jaGFuZ2VJbmRleCxcclxuXHRcdFx0XHRcdFx0dXNlcmlkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpLFxyXG5cdFx0XHRcdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCYmcmVzLmRhdGEucmVzdWx0KXtcclxuXHRcdFx0XHRcdC8vIOWIneWni+WMluaVsOaNrlxyXG5cdFx0XHRcdFx0dGhpcy5yZWFzb25BcnI9IFt7XHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ+acquWujOaIkOebruagh+eahOmanOeijeWSjOWOn+WboCdcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICflrqLmnI3pmpznoo3nmoTlr7nnrZblkozmlrnms5UnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAn5pys5a2j5bqm5Yib5paw5LiO5pS26I63J1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRsZXQge3Jlc3VsdH09cmVzLmRhdGFcclxuXHRcdFx0XHRcdHJlc3VsdC5mb3JFYWNoKHY9PntcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlYXNvbkFyci5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gdGhpcy5yZWFzb25BcnJbaV0udHlwZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZWFzb25BcnJbaV0gPSB2XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifojrflj5blraPluqbmgLvnu5PlpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy51cGRhdGUxPXRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOiOt+WPlueUqOaIt+Wto+W6puS/oeaBr1xyXG5cdFx0XHRhc3luYyBnZXRVc2VyUXVhcnRlcigpe1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlPWZhbHNlXHJcblx0XHRcdFx0bGV0IHJlcyA9IGF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXHJcblx0XHRcdFx0XHR1cmw6ICcvYW5vbnltb3VzL2ZpbmRBaW1zQnlDb25kaXRpb24nLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRxdWFydGVyOiB0aGlzLmNoYW5nZUluZGV4LFxyXG5cdFx0XHRcdFx0XHR1c2VySWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyksXHJcblx0XHRcdFx0XHRcdHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwJiZyZXMuZGF0YS5vdGhlclRhcmdldCYmcmVzLmRhdGEud29ya0luZGV4KXtcclxuXHRcdFx0XHRcdC8vIOabtOaWsOmhtemdouaVsOaNruS5i+WJjeWFiOi/mOWOn+WIneWni+aVsOaNrlxyXG5cdFx0XHRcdFx0dGhpcy50YWJsZT0gW3tcclxuXHRcdFx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiAn5bel5L2c5oyH5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW1wb3J0YW5jZUxldmVsOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWltTWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWFydGVyOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhcnRlck9yTW9udGhGbGFnOiAncXVhcnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflt6XkvZzmjIfmoIcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGltcG9ydGFuY2VMZXZlbDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFpbU1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhcnRlcjogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXJPck1vbnRoRmxhZzogJ3F1YXJ0ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAn5bel5L2c5oyH5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbXBvcnRhbmNlTGV2ZWw6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhaW1NZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXI6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWFydGVyT3JNb250aEZsYWc6ICdxdWFydGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+W3peS9nOaMh+aghycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW1wb3J0YW5jZUxldmVsOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWltTWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWFydGVyOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhcnRlck9yTW9udGhGbGFnOiAncXVhcnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflt6XkvZzmjIfmoIcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGltcG9ydGFuY2VMZXZlbDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFpbU1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhcnRlcjogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXJPck1vbnRoRmxhZzogJ3F1YXJ0ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAn5bel5L2c5oyH5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAyLFxyXG5cdFx0XHRcdFx0XHRcdG5hbWU6ICflhbbku5bnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbXBvcnRhbmNlTGV2ZWw6ICflrabkuaDorqHliJInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhaW1NZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXI6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWFydGVyT3JNb250aEZsYWc6ICdxdWFydGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+WFtuS7luebruaghycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW1wb3J0YW5jZUxldmVsOiAn5YGl5bq36K6h5YiSJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWltTWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWFydGVyOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhcnRlck9yTW9udGhGbGFnOiAncXVhcnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflhbbku5bnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGltcG9ydGFuY2VMZXZlbDogJ+acrOWto+W6puWPjeecgScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFpbU1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhcnRlcjogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXJPck1vbnRoRmxhZzogJ3F1YXJ0ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAn5YW25LuW55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0bGV0IHtvdGhlclRhcmdldCx3b3JrSW5kZXh9PXJlcy5kYXRhXHJcblx0XHRcdFx0XHQgd29ya0luZGV4LmZvckVhY2goKHYsIGkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRhYmxlWzBdLmNoaWxkcmVuW2ldPXZcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRhYmxlWzBdLmNoaWxkcmVuLmxlbmd0aCA9IDVcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRvdGhlclRhcmdldC5mb3JFYWNoKCh2LCBpKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmKHYuaW1wb3J0YW5jZUxldmVsPT0n5a2m5Lmg6K6h5YiSJyl7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50YWJsZVsxXS5jaGlsZHJlblswXT12XHJcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHYuaW1wb3J0YW5jZUxldmVsPT0n5YGl5bq36K6h5YiSJyl7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50YWJsZVsxXS5jaGlsZHJlblsxXT12XHJcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHYuaW1wb3J0YW5jZUxldmVsPT0n5pys5a2j5bqm5Y+N55yBJyl7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50YWJsZVsxXS5jaGlsZHJlblsyXT12XHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlWzFdLmNoaWxkcmVuLnB1c2godilcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLnRhYmxlWzFdLmNoaWxkcmVuLmxlbmd0aCA9IDNcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifojrflj5blraPluqbkv6Hmga/lpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy50YWJsZSlcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZT10cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdHRoaXMuZ2V0VXNlclF1YXJ0ZXIoKVxyXG5cdFx0XHR0aGlzLmdldFVzZXJTdW1tYXJ5KClcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XHJcbnBhZ2V7XG4gIGJhY2tncm91bmQ6ICNFRkYzRjY7XG59XG4uaGVhZHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiA1MHJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogN3JweDtcbn1cbi50YWJiYXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzNzhycHg7XG4gIGhlaWdodDogMzZycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0Y4RjhGODtcbiAgYm9yZGVyLXJhZGl1czogNXJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLnRhYiB7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVycHg7XG4gICAgY29sb3I6ICM0MDQwNDA7XG4gIH1cbiAgLm9ue1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQ6cmdiYSg0NiwyMDYsMTQ4LDEpO1xuICB9XG59XG5cbi50YWJsZSB7XG4gIGJvcmRlcjogMXJweCBzb2xpZCAjMUM1RTU1O1xuICBtYXJnaW46IDAgMTRycHg7XG4gIGNvbG9yOiAjMjE5ZDljO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAudGgge1xuICAgIGhlaWdodDogNDBycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjMjI3MDVEO1xuICAgIGZvbnQtc2l6ZTogMTNycHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLnRkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgICAgYm9yZGVyLWxlZnQ6IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIHdpZHRoOiA3MnJweDtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDIpe1xuICAgICAgICB3aWR0aDogNzJycHg7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgzKSwmOm50aC1jaGlsZCg0KXtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgd2lkdGg6IDM2cnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAudHIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgJjpsYXN0LWNoaWxke1xuICAgICAgLmFhe1xuICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgLnRkMy1zb257XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwcnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAudGQxIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjI3MDVEO1xuICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgICAgIHdpZHRoOiA3MnJweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBmb250LXNpemU6IDEzcnB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLnRkMntcbiAgICAgIGZsZXg6IDE7XG4gICAgICAudGQze1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwOHJweDtcbiAgICAgICAgJi1zb257XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgd2lkdGg6IDcycnB4O1xuICAgICAgICAgICAgY29sb3I6ICMxQzVFNTU7XHJcblx0XHRcdFx0XHRcdGlucHV0e1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNycHg7XHJcblx0XHRcdFx0XHRcdH1cbiAgICAgICAgICB9XG4gICAgICAgICAgJjpudGgtY2hpbGQoMiksJjpudGgtY2hpbGQoMyl7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOm50aC1jaGlsZCgzKXtcbiAgICAgICAgICAgIHRleHRhcmVhe1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICB3aWR0aDogMzZycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJj5pbnB1dHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmPnRleHRhcmVhe1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uYm94e1xuICBtYXJnaW46IDE3cnB4IDE0cnB4IDA7XG4gIGJvcmRlcjogMXJweCBzb2xpZCAjMUM1RTU1O1xufVxuLnF1YXJ0ZXJ7XG4gIGhlaWdodDogNDBycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMjI3MDVEO1xuICBmb250LXNpemU6IDEzcnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udW5maW5pc2hlZC1wYXJ0e1xuICBoZWlnaHQ6IDE1NHJweDtcbiAgYm9yZGVyLXRvcDogMXJweCBzb2xpZCAjMUM1RTU1O1xuICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICMxQzVFNTU7XG59XG4ucmVhc29ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDE1NHJweDtcbiAgJjpsYXN0LWNoaWxke1xuICAgIHRleHQsdGV4dGFyZWF7XG4gICAgICBib3JkZXItYm90dG9tOiAwcnB4O1xuICAgIH1cbiAgfVxuICB0ZXh0e1xuICAgIHdpZHRoOiAxNDRycHg7XG4gICAgcGFkZGluZzowIDZycHggO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgZm9udC1zaXplOiAxNXJweDtcbiAgICBjb2xvcjogIzFDNUU1NTtcbiAgfVxuICB0ZXh0YXJlYXtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgYm9yZGVyLWxlZnQ6IDFycHggc29saWQgIzFDNUU1NTtcbiAgfVxufVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!******************************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/weekgoals/weekgoals.vue?mpType=page ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weekgoals_vue_vue_type_template_id_b5765fa0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weekgoals.vue?vue&type=template&id=b5765fa0&mpType=page */ 27);\n/* harmony import */ var _weekgoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weekgoals.vue?vue&type=script&lang=js&mpType=page */ 29);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _weekgoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _weekgoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _weekgoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _weekgoals_vue_vue_type_template_id_b5765fa0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _weekgoals_vue_vue_type_template_id_b5765fa0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _weekgoals_vue_vue_type_template_id_b5765fa0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/weekgoals/weekgoals.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDd0U7QUFDTDs7O0FBR25FO0FBQ3lLO0FBQ3pLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3dlZWtnb2Fscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjU3NjVmYTAmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3dlZWtnb2Fscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vd2Vla2dvYWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy93ZWVrZ29hbHMvd2Vla2dvYWxzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!************************************************************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/weekgoals/weekgoals.vue?vue&type=template&id=b5765fa0&mpType=page ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_weekgoals_vue_vue_type_template_id_b5765fa0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./weekgoals.vue?vue&type=template&id=b5765fa0&mpType=page */ 28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_weekgoals_vue_vue_type_template_id_b5765fa0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_weekgoals_vue_vue_type_template_id_b5765fa0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_weekgoals_vue_vue_type_template_id_b5765fa0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_weekgoals_vue_vue_type_template_id_b5765fa0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 28 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/fwh/chengzhangriji-uniapp/pages/weekgoals/weekgoals.vue?vue&type=template&id=b5765fa0&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _vm._$s(1, "i", _vm.changeIndex == 0)
        ? [
            _c(
              "view",
              { staticClass: _vm._$s(2, "sc", "tabbar"), attrs: { _i: 2 } },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(3, "sc", "weekTab"),
                    attrs: { _i: 3 }
                  },
                  [
                    _vm._l(
                      _vm._$s(4, "f", { forItems: _vm.weekDays }),
                      function(value, index, $20, $30) {
                        return [
                          _c(
                            "view",
                            {
                              key: _vm._$s(4, "f", {
                                forIndex: $20,
                                keyIndex: 0,
                                key: value + "_0"
                              }),
                              class: _vm._$s(
                                "5-" + $30,
                                "c",
                                _vm.changeIndex === index ? "on" : ""
                              ),
                              attrs: { _i: "5-" + $30 },
                              on: {
                                click: function($event) {
                                  return _vm.handleChangeTab(index)
                                }
                              }
                            },
                            [_vm._v(_vm._$s("5-" + $30, "t0-0", _vm._s(value)))]
                          )
                        ]
                      }
                    )
                  ],
                  2
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(6, "sc", "week-change"),
                    attrs: { _i: 6 }
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(7, "sc", "tab"),
                      attrs: { _i: 7 },
                      on: { click: _vm.handleLastWeek }
                    }),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(8, "sc", "tab"),
                        attrs: { _i: 8 }
                      },
                      [
                        _vm._v(
                          _vm._$s(8, "t0-0", _vm._s(_vm.year)) +
                            _vm._$s(8, "t0-1", _vm._s(_vm.week))
                        )
                      ]
                    ),
                    _c("view", {
                      staticClass: _vm._$s(9, "sc", "tab"),
                      attrs: { _i: 9 },
                      on: { click: _vm.handleNextWeek }
                    })
                  ]
                )
              ]
            ),
            _c(
              "view",
              { staticClass: _vm._$s(10, "sc", "week"), attrs: { _i: 10 } },
              [
                _vm._$s(11, "i", _vm.update)
                  ? _c(
                      "view",
                      {
                        staticClass: _vm._$s(11, "sc", "week-left"),
                        attrs: { _i: 11 }
                      },
                      [
                        _c("view", {
                          staticClass: _vm._$s(12, "sc", "week-left-item"),
                          attrs: { _i: 12 }
                        }),
                        _c("view", {
                          staticClass: _vm._$s(13, "sc", "week-left-item"),
                          attrs: { _i: 13 }
                        }),
                        _vm._l(
                          _vm._$s(14, "f", { forItems: _vm.weekPerformance }),
                          function(value, index, $21, $31) {
                            return [
                              _c(
                                "view",
                                {
                                  key: _vm._$s(14, "f", {
                                    forIndex: $21,
                                    keyIndex: 0,
                                    key: Math.random() + "_0"
                                  }),
                                  staticClass: _vm._$s(
                                    "15-" + $31,
                                    "sc",
                                    "week-left-item"
                                  ),
                                  attrs: { _i: "15-" + $31 }
                                },
                                [
                                  _c("textarea", {
                                    staticClass: _vm._$s(
                                      "16-" + $31,
                                      "sc",
                                      "mytext"
                                    ),
                                    attrs: {
                                      value: _vm._$s(
                                        "16-" + $31,
                                        "a-value",
                                        value.content
                                      ),
                                      _i: "16-" + $31
                                    },
                                    on: {
                                      blur: function($event) {
                                        return _vm.handleWeekPerformance(
                                          $event,
                                          value
                                        )
                                      }
                                    }
                                  })
                                ]
                              )
                            ]
                          }
                        ),
                        _c("view", {
                          staticClass: _vm._$s(17, "sc", "week-left-item"),
                          attrs: { _i: 17 }
                        }),
                        _vm._l(
                          _vm._$s(18, "f", { forItems: _vm.reason }),
                          function(value, index, $22, $32) {
                            return [
                              _c(
                                "view",
                                {
                                  key: _vm._$s(18, "f", {
                                    forIndex: $22,
                                    keyIndex: 0,
                                    key: Math.random() + "_0"
                                  }),
                                  staticClass: _vm._$s(
                                    "19-" + $32,
                                    "sc",
                                    "week-left-item"
                                  ),
                                  attrs: { _i: "19-" + $32 }
                                },
                                [
                                  _c("textarea", {
                                    staticClass: _vm._$s(
                                      "20-" + $32,
                                      "sc",
                                      "mytext"
                                    ),
                                    attrs: {
                                      value: _vm._$s(
                                        "20-" + $32,
                                        "a-value",
                                        value.content
                                      ),
                                      _i: "20-" + $32
                                    },
                                    on: {
                                      blur: function($event) {
                                        return _vm.handleReason($event, value)
                                      }
                                    }
                                  })
                                ]
                              )
                            ]
                          }
                        ),
                        _c("view", {
                          staticClass: _vm._$s(21, "sc", "week-left-item"),
                          attrs: { _i: 21 }
                        }),
                        _vm._l(
                          _vm._$s(22, "f", { forItems: _vm.service }),
                          function(value, index, $23, $33) {
                            return [
                              _c(
                                "view",
                                {
                                  key: _vm._$s(22, "f", {
                                    forIndex: $23,
                                    keyIndex: 0,
                                    key: Math.random() + "_0"
                                  }),
                                  staticClass: _vm._$s(
                                    "23-" + $33,
                                    "sc",
                                    "week-left-item"
                                  ),
                                  attrs: { _i: "23-" + $33 }
                                },
                                [
                                  _c("textarea", {
                                    staticClass: _vm._$s(
                                      "24-" + $33,
                                      "sc",
                                      "mytext"
                                    ),
                                    attrs: {
                                      value: _vm._$s(
                                        "24-" + $33,
                                        "a-value",
                                        value.content
                                      ),
                                      _i: "24-" + $33
                                    },
                                    on: {
                                      blur: function($event) {
                                        return _vm.handleService($event, value)
                                      }
                                    }
                                  })
                                ]
                              )
                            ]
                          }
                        ),
                        _c("view", {
                          staticClass: _vm._$s(25, "sc", "week-left-item"),
                          attrs: { _i: 25 }
                        }),
                        _vm._l(
                          _vm._$s(26, "f", { forItems: _vm.harvest }),
                          function(value, index, $24, $34) {
                            return [
                              _c(
                                "view",
                                {
                                  key: _vm._$s(26, "f", {
                                    forIndex: $24,
                                    keyIndex: 0,
                                    key: index + "_0"
                                  }),
                                  staticClass: _vm._$s(
                                    "27-" + $34,
                                    "sc",
                                    "week-left-item"
                                  ),
                                  attrs: { _i: "27-" + $34 }
                                },
                                [
                                  _c("textarea", {
                                    staticClass: _vm._$s(
                                      "28-" + $34,
                                      "sc",
                                      "mytext"
                                    ),
                                    attrs: {
                                      value: _vm._$s(
                                        "28-" + $34,
                                        "a-value",
                                        value.content
                                      ),
                                      _i: "28-" + $34
                                    },
                                    on: {
                                      blur: function($event) {
                                        return _vm.handleHarvest($event, value)
                                      }
                                    }
                                  })
                                ]
                              )
                            ]
                          }
                        )
                      ],
                      2
                    )
                  : _vm._e(),
                _vm._$s(29, "i", _vm.update1)
                  ? _c(
                      "view",
                      {
                        staticClass: _vm._$s(29, "sc", "week-right"),
                        attrs: { _i: 29 }
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(30, "sc", "week-right-title"),
                            attrs: { _i: 30 }
                          },
                          [
                            _c("view", {
                              staticClass: _vm._$s(31, "sc", "left"),
                              attrs: { _i: 31 }
                            }),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(32, "sc", "center"),
                                attrs: { _i: 32 }
                              },
                              [
                                _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(33, "sc", "icon"),
                                    attrs: { _i: 33 }
                                  },
                                  [_c("text")]
                                ),
                                _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      35,
                                      "sc",
                                      "description"
                                    ),
                                    attrs: { _i: 35 }
                                  },
                                  [_c("view"), _c("view"), _c("view")]
                                )
                              ]
                            ),
                            _c("view", {
                              staticClass: _vm._$s(39, "sc", "right"),
                              attrs: { _i: 39 }
                            })
                          ]
                        ),
                        _vm._l(
                          _vm._$s(40, "f", { forItems: _vm.weeklyPlan }),
                          function(value, index, $25, $35) {
                            return [
                              _c(
                                "view",
                                {
                                  key: _vm._$s(40, "f", {
                                    forIndex: $25,
                                    keyIndex: 0,
                                    key: index + "_0"
                                  }),
                                  staticClass: _vm._$s(
                                    "41-" + $35,
                                    "sc",
                                    "week-right-content"
                                  ),
                                  attrs: { _i: "41-" + $35 }
                                },
                                [
                                  _c(
                                    "view",
                                    {
                                      staticClass: _vm._$s(
                                        "42-" + $35,
                                        "sc",
                                        "left"
                                      ),
                                      attrs: { _i: "42-" + $35 }
                                    },
                                    [
                                      _vm._v(
                                        _vm._$s(
                                          "42-" + $35,
                                          "t0-0",
                                          _vm._s(index + 1)
                                        )
                                      )
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: _vm._$s(
                                        "43-" + $35,
                                        "sc",
                                        "center"
                                      ),
                                      attrs: { _i: "43-" + $35 }
                                    },
                                    [
                                      _c("textarea", {
                                        staticClass: _vm._$s(
                                          "44-" + $35,
                                          "sc",
                                          "mytext"
                                        ),
                                        attrs: {
                                          value: _vm._$s(
                                            "44-" + $35,
                                            "a-value",
                                            value.content
                                          ),
                                          _i: "44-" + $35
                                        },
                                        on: {
                                          blur: function($event) {
                                            return _vm.handleUpdatePlan(
                                              $event,
                                              value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _c("view", {
                                    staticClass: _vm._$s(
                                      "45-" + $35,
                                      "sc",
                                      "right"
                                    ),
                                    class: _vm._$s(
                                      "45-" + $35,
                                      "c",
                                      value.complete == true
                                        ? "iconfont icon-zhengque"
                                        : ""
                                    ),
                                    attrs: { _i: "45-" + $35 },
                                    on: {
                                      click: function($event) {
                                        return _vm.handleComplete(value)
                                      }
                                    }
                                  })
                                ]
                              )
                            ]
                          }
                        )
                      ],
                      2
                    )
                  : _vm._e()
              ]
            ),
            _c(
              "view",
              { staticClass: _vm._$s(46, "sc", "footer"), attrs: { _i: 46 } },
              [
                _c("view", {
                  staticClass: _vm._$s(47, "sc", "footer-left"),
                  attrs: { _i: 47 }
                }),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(48, "sc", "footer-right"),
                    attrs: { _i: 48 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(49, "sc", "footer-right-title"),
                        attrs: { _i: 49 }
                      },
                      [
                        _c("view", {
                          staticClass: _vm._$s(50, "sc", "title-left"),
                          attrs: { _i: 50 }
                        }),
                        _c("view", {
                          staticClass: _vm._$s(51, "sc", "title-right"),
                          attrs: { _i: 51 }
                        })
                      ]
                    ),
                    _vm._l(
                      _vm._$s(52, "f", { forItems: _vm.otherPlan }),
                      function(value, index, $26, $36) {
                        return [
                          _c(
                            "view",
                            {
                              key: _vm._$s(52, "f", {
                                forIndex: $26,
                                keyIndex: 0,
                                key: value.type + "_0"
                              }),
                              staticClass: _vm._$s(
                                "53-" + $36,
                                "sc",
                                "footer-right-content"
                              ),
                              attrs: { _i: "53-" + $36 }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "54-" + $36,
                                    "sc",
                                    "content-left"
                                  ),
                                  attrs: { _i: "54-" + $36 }
                                },
                                [
                                  _vm._v(
                                    _vm._$s(
                                      "54-" + $36,
                                      "t0-0",
                                      _vm._s(value.type)
                                    )
                                  )
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "55-" + $36,
                                    "sc",
                                    "content-center"
                                  ),
                                  attrs: { _i: "55-" + $36 }
                                },
                                [
                                  _c("textarea", {
                                    staticClass: _vm._$s(
                                      "56-" + $36,
                                      "sc",
                                      "mytext"
                                    ),
                                    attrs: {
                                      value: _vm._$s(
                                        "56-" + $36,
                                        "a-value",
                                        value.content
                                      ),
                                      _i: "56-" + $36
                                    },
                                    on: {
                                      blur: function($event) {
                                        return _vm.handleOtherPlan(
                                          $event,
                                          value
                                        )
                                      }
                                    }
                                  })
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "57-" + $36,
                                    "sc",
                                    "content-right"
                                  ),
                                  attrs: { _i: "57-" + $36 }
                                },
                                [
                                  _c("view", {
                                    class: _vm._$s(
                                      "58-" + $36,
                                      "c",
                                      value.complete == true
                                        ? "iconfont icon-zhengque"
                                        : ""
                                    ),
                                    attrs: { _i: "58-" + $36 },
                                    on: {
                                      click: function($event) {
                                        return _vm.handleOtherComplete(value)
                                      }
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      }
                    )
                  ],
                  2
                )
              ]
            ),
            _c(
              "view",
              { staticClass: _vm._$s(59, "sc", "share"), attrs: { _i: 59 } },
              [
                _c("view", {
                  staticClass: _vm._$s(60, "sc", "share-top"),
                  attrs: { _i: 60 }
                }),
                _vm._l(_vm._$s(61, "f", { forItems: _vm.shareArray }), function(
                  value,
                  index,
                  $27,
                  $37
                ) {
                  return _vm._$s("61-" + $37, "i", _vm.update2)
                    ? [
                        _c(
                          "view",
                          {
                            key: _vm._$s(61, "f", {
                              forIndex: $27,
                              keyIndex: 0,
                              key: value.type + "_0"
                            }),
                            staticClass: _vm._$s(
                              "62-" + $37,
                              "sc",
                              "share-content"
                            ),
                            attrs: { _i: "62-" + $37 }
                          },
                          [
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "63-" + $37,
                                  "sc",
                                  "share-content-left"
                                ),
                                attrs: { _i: "63-" + $37 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "63-" + $37,
                                    "t0-0",
                                    _vm._s(value.type)
                                  )
                                )
                              ]
                            ),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "64-" + $37,
                                  "sc",
                                  "share-content-right"
                                ),
                                attrs: { _i: "64-" + $37 }
                              },
                              [
                                _c("textarea", {
                                  attrs: {
                                    value: _vm._$s(
                                      "65-" + $37,
                                      "a-value",
                                      value.content
                                    ),
                                    _i: "65-" + $37
                                  },
                                  on: {
                                    blur: function($event) {
                                      return _vm.handleShare($event, value)
                                    }
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    : _vm._e()
                })
              ],
              2
            )
          ]
        : [
            _c(
              "view",
              { staticClass: _vm._$s(67, "sc", "tabbar"), attrs: { _i: 67 } },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(68, "sc", "weekTab"),
                    attrs: { _i: 68 }
                  },
                  [
                    _vm._l(
                      _vm._$s(69, "f", { forItems: _vm.weekDays }),
                      function(value, index, $28, $38) {
                        return [
                          _c(
                            "view",
                            {
                              key: _vm._$s(69, "f", {
                                forIndex: $28,
                                keyIndex: 0,
                                key: value + "_0"
                              }),
                              class: _vm._$s(
                                "70-" + $38,
                                "c",
                                _vm.changeIndex === index ? "on" : ""
                              ),
                              attrs: { _i: "70-" + $38 },
                              on: {
                                click: function($event) {
                                  return _vm.handleChangeTab(index)
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._$s("70-" + $38, "t0-0", _vm._s(value))
                              )
                            ]
                          )
                        ]
                      }
                    )
                  ],
                  2
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(71, "sc", "week-change"),
                    attrs: { _i: 71 }
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(72, "sc", "tab"),
                      attrs: { _i: 72 },
                      on: { click: _vm.handleLastWeek }
                    }),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(73, "sc", "tab"),
                        attrs: { _i: 73 }
                      },
                      [
                        _vm._v(
                          _vm._$s(73, "t0-0", _vm._s(_vm.year)) +
                            _vm._$s(73, "t0-1", _vm._s(_vm.week))
                        )
                      ]
                    ),
                    _c("view", {
                      staticClass: _vm._$s(74, "sc", "tab"),
                      attrs: { _i: 74 },
                      on: { click: _vm.handleNextWeek }
                    })
                  ]
                )
              ]
            ),
            _c(
              "view",
              { staticClass: _vm._$s(75, "sc", "days-tab"), attrs: { _i: 75 } },
              [
                _vm._l(_vm._$s(76, "f", { forItems: _vm.weekDate }), function(
                  value,
                  index,
                  $29,
                  $39
                ) {
                  return [
                    _c(
                      "view",
                      {
                        key: _vm._$s(76, "f", {
                          forIndex: $29,
                          keyIndex: 0,
                          key: value.type + "_0"
                        }),
                        staticClass: _vm._$s("77-" + $39, "sc", "days"),
                        class: _vm._$s(
                          "77-" + $39,
                          "c",
                          _vm.whichDay == index + 1 ? "on" : ""
                        ),
                        attrs: { _i: "77-" + $39 },
                        on: {
                          click: function($event) {
                            return _vm.handleChoseDate(index + 1)
                          }
                        }
                      },
                      [_vm._v(_vm._$s("77-" + $39, "t0-0", _vm._s(value.name)))]
                    )
                  ]
                })
              ],
              2
            ),
            _c(
              "view",
              { staticClass: _vm._$s(78, "sc", "date"), attrs: { _i: 78 } },
              [
                _c(
                  "picker",
                  { attrs: { _i: 79 }, on: { change: _vm.handleChangeTime } },
                  [
                    _c("text", [
                      _vm._v(
                        _vm._$s(80, "t0-0", _vm._s(_vm.year)) +
                          _vm._$s(80, "t0-1", _vm._s(_vm.month)) +
                          _vm._$s(80, "t0-2", _vm._s(_vm.days))
                      )
                    ])
                  ]
                ),
                _c("view", {
                  staticClass: _vm._$s(81, "sc", "iconfont icon-rili"),
                  attrs: { _i: 81 }
                })
              ]
            ),
            _vm._$s(82, "i", _vm.update3)
              ? _c(
                  "view",
                  {
                    staticClass: _vm._$s(82, "sc", "daily"),
                    attrs: { _i: 82 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(83, "sc", "daily-left"),
                        attrs: { _i: 83 }
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(84, "sc", "category"),
                            attrs: { _i: 84 }
                          },
                          [
                            _c("view", {
                              staticClass: _vm._$s(85, "sc", "cateName"),
                              attrs: { _i: 85 }
                            }),
                            _c("view", {
                              staticClass: _vm._$s(86, "sc", "cateName"),
                              attrs: { _i: 86 }
                            }),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(87, "sc", "cateName"),
                                attrs: { _i: 87 }
                              },
                              [_c("view"), _c("view")]
                            ),
                            _c("view", {
                              staticClass: _vm._$s(90, "sc", "cateName"),
                              attrs: { _i: 90 }
                            })
                          ]
                        ),
                        _vm._l(
                          _vm._$s(91, "f", { forItems: _vm.todayThings }),
                          function(value, index, $210, $310) {
                            return [
                              _c(
                                "view",
                                {
                                  key: _vm._$s(91, "f", {
                                    forIndex: $210,
                                    keyIndex: 0,
                                    key: Math.random() + "_0"
                                  }),
                                  staticClass: _vm._$s(
                                    "92-" + $310,
                                    "sc",
                                    "description"
                                  ),
                                  attrs: { _i: "92-" + $310 }
                                },
                                [
                                  _c(
                                    "view",
                                    {
                                      staticClass: _vm._$s(
                                        "93-" + $310,
                                        "sc",
                                        "content"
                                      ),
                                      attrs: { _i: "93-" + $310 }
                                    },
                                    [
                                      _c("input", {
                                        attrs: {
                                          value: _vm._$s(
                                            "94-" + $310,
                                            "a-value",
                                            value.type
                                          ),
                                          _i: "94-" + $310
                                        },
                                        on: {
                                          blur: function($event) {
                                            return _vm.handleChangeType(
                                              $event,
                                              value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: _vm._$s(
                                        "95-" + $310,
                                        "sc",
                                        "content"
                                      ),
                                      attrs: { _i: "95-" + $310 }
                                    },
                                    [
                                      _c(
                                        "picker",
                                        {
                                          attrs: {
                                            value: _vm._$s(
                                              "96-" + $310,
                                              "a-value",
                                              value.time
                                            ),
                                            _i: "96-" + $310
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.bindDateChange(
                                                $event,
                                                value
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "view",
                                            {
                                              staticClass: _vm._$s(
                                                "97-" + $310,
                                                "sc",
                                                "picker"
                                              ),
                                              attrs: { _i: "97-" + $310 }
                                            },
                                            [
                                              _c("text"),
                                              _c("text", [
                                                _vm._v(
                                                  _vm._$s(
                                                    "99-" + $310,
                                                    "t0-0",
                                                    _vm._s(
                                                      value.time == null
                                                        ? ""
                                                        : value.time
                                                    )
                                                  )
                                                )
                                              ])
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: _vm._$s(
                                        "100-" + $310,
                                        "sc",
                                        "content"
                                      ),
                                      attrs: { _i: "100-" + $310 }
                                    },
                                    [
                                      _c("textarea", {
                                        staticClass: _vm._$s(
                                          "101-" + $310,
                                          "sc",
                                          "todayThings"
                                        ),
                                        attrs: {
                                          value: _vm._$s(
                                            "101-" + $310,
                                            "a-value",
                                            value.content
                                          ),
                                          _i: "101-" + $310
                                        },
                                        on: {
                                          blur: function($event) {
                                            return _vm.handleUpdateContent(
                                              $event,
                                              value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _c("view", {
                                    staticClass: _vm._$s(
                                      "102-" + $310,
                                      "sc",
                                      "content"
                                    ),
                                    class: _vm._$s(
                                      "102-" + $310,
                                      "c",
                                      value.complete == true
                                        ? "iconfont icon-zhengque"
                                        : ""
                                    ),
                                    attrs: { _i: "102-" + $310 },
                                    on: {
                                      click: function($event) {
                                        return _vm.handleComplete2(value)
                                      }
                                    }
                                  })
                                ]
                              )
                            ]
                          }
                        )
                      ],
                      2
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(103, "sc", "daily-right"),
                        attrs: { _i: 103 }
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              104,
                              "sc",
                              "daily-right-title"
                            ),
                            attrs: { _i: 104 }
                          },
                          [_c("text"), _c("text")]
                        ),
                        _vm._l(
                          _vm._$s(107, "f", { forItems: _vm.todaySummary }),
                          function(value, index, $211, $311) {
                            return [
                              _c(
                                "view",
                                {
                                  key: _vm._$s(107, "f", {
                                    forIndex: $211,
                                    keyIndex: 0,
                                    key: 107 + "-0" + $311
                                  }),
                                  staticClass: _vm._$s(
                                    "108-" + $311,
                                    "sc",
                                    "des"
                                  ),
                                  attrs: { _i: "108-" + $311 }
                                },
                                [
                                  _c("textarea", {
                                    attrs: {
                                      value: _vm._$s(
                                        "109-" + $311,
                                        "a-value",
                                        value.content
                                      ),
                                      _i: "109-" + $311
                                    },
                                    on: {
                                      blur: function($event) {
                                        return _vm.handleUpdateSummary(
                                          $event,
                                          value
                                        )
                                      }
                                    }
                                  })
                                ]
                              )
                            ]
                          }
                        )
                      ],
                      2
                    )
                  ]
                )
              : _vm._e()
          ]
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 29 */
/*!******************************************************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/weekgoals/weekgoals.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_weekgoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./weekgoals.vue?vue&type=script&lang=js&mpType=page */ 30);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_weekgoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_weekgoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_weekgoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_weekgoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_weekgoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStqQixDQUFnQixrbEJBQUcsRUFBQyIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93ZWVrZ29hbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93ZWVrZ29hbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/fwh/chengzhangriji-uniapp/pages/weekgoals/weekgoals.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 8));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _myAxios = __webpack_require__(/*! ../../utils/myAxios.js */ 11);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  data: function data() {\n    return {\n      weekDays: ['周', '天'],\n      weekPerformance: [{\n        content: '',\n        type: '目标完成情况' },\n\n      {\n        content: '',\n        type: '目标完成情况' },\n\n      {\n        content: '',\n        type: '目标完成情况' },\n\n      {\n        content: '',\n        type: '目标完成情况' },\n\n      {\n        content: '',\n        type: '目标完成情况' },\n\n      {\n        content: '',\n        type: '目标完成情况' }],\n\n\n      reason: [{\n        content: '',\n        type: '未完成目标的原因及障碍' },\n\n      {\n        content: '',\n        type: '未完成目标的原因及障碍' },\n\n      {\n        content: '',\n        type: '未完成目标的原因及障碍' }],\n\n\n      service: [{\n        content: '',\n        type: '克服障碍的对策和方法' },\n\n      {\n        content: '',\n        type: '克服障碍的对策和方法' },\n\n      {\n        content: '',\n        type: '克服障碍的对策和方法' }],\n\n\n      harvest: [{\n        content: '',\n        type: '本周创新与收获' },\n\n      {\n        content: '',\n        type: '本周创新与收获' },\n\n      {\n        content: '',\n        type: '本周创新与收获' }],\n\n\n      weeklyPlan: [{\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false }],\n\n\n      otherPlan: [{\n        type: '学习计划',\n        content: '',\n        complete: false },\n\n      {\n        type: '健康计划',\n        content: '',\n        complete: false },\n\n      {\n        type: '本周反省',\n        content: '',\n        complete: false }],\n\n\n      shareArray: [\n      {\n        type: '1',\n        content: '' },\n\n      {\n        type: '2',\n        content: '' },\n\n      {\n        type: '3',\n        content: '' }],\n\n\n      weekDate: [\n      {\n        name: '周一',\n        type: 1 },\n      {\n        name: '周二',\n        type: 2 },\n      {\n        name: '周三',\n        type: 3 },\n      {\n        name: '周四',\n        type: 4 },\n      {\n        name: '周五',\n        type: 5 },\n      {\n        name: '周六',\n        type: 6 },\n      {\n        name: '周日',\n        type: 7 }],\n\n\n      todayThings: [\n      {\n        index: 1,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 2,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 3,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 4,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 5,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 6,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 7,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 8,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 9,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 10,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 11,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 12,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 13,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 14,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 15,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 16,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 17,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n      {\n        index: 17,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' }],\n\n\n      todaySummary: [\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' }],\n\n\n\n      week: 0,\n      year: new Date().getFullYear(),\n      month: 0,\n      days: 0,\n      time: new Date().getTime(),\n      update: true,\n      update1: true,\n      update2: true,\n      update3: true,\n      changeIndex: 0,\n      whichDay: 1 };\n\n  },\n  methods: {\n\n    // 选择时间\n    handleChangeTime: function handleChangeTime(e) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var date;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                date = new Date(e.detail.value);\n                _this.month = date.getMonth() + 1;\n                _this.year = date.getFullYear();\n                _this.days = date.getDate();\n                _this.time = date.getTime();\n                _this.getDateNow();\n                _this.getWeek();\n                _this.getDayPlan();case 8:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n\n    // 切换周--天\n    handleChangeTab: function handleChangeTab(index) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                _this2.changeIndex = index;\n                if (index == 0) {\n                  _this2.getWeeklyTarget();\n                  _this2.getWeeklySummary();\n                  _this2.getSharePlan();\n                } else {\n                  _this2.getDateNow();\n                  _this2.getDayPlan();\n                }case 2:case \"end\":return _context2.stop();}}}, _callee2);}))();\n    },\n\n    // 切换周几\n    handleChoseDate: function handleChoseDate(index) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                if (index - _this3.whichDay > 0) {\n                  _this3.time = _this3.time + 24 * 60 * 60 * 1000 * Math.abs(index - _this3.whichDay);\n                } else if (index - _this3.whichDay < 0) {\n                  _this3.time = _this3.time - 24 * 60 * 60 * 1000 * Math.abs(index - _this3.whichDay);\n                }\n                _this3.whichDay = index;\n                _this3.getDateNow();\n                // 同时重新获取数据\n                _this3.getDayPlan();case 4:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n\n    // 获取时间\n    getDateNow: function getDateNow() {\n      __f__(\"log\", this.time, \" at pages/weekgoals/weekgoals.vue:688\");\n      var date = new Date(this.time);\n      var year = date.getFullYear();\n      var month = date.getMonth() + 1;\n      var days = date.getDate();\n      var whichDay = date.getDay();\n      whichDay = whichDay === 0 ? 7 : whichDay;\n      this.year = year;\n      this.month = month;\n      this.days = days;\n      this.whichDay = whichDay;\n    },\n    /****************************************************天-部分数据***********************************************/\n    // 更新日总结改进\n    handleUpdateSummary: function handleUpdateSummary(e, value2) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var value, data, res;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  content: value,\n                  parentType: value2.parentType,\n                  userId: uni.getStorageSync('userID'),\n                  week: +_this4.week,\n                  year: +_this4.year,\n                  whichDay: +_this4.whichDay };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context4.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateDayPlan',\n                    data: data }));case 5:res = _context4.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this4.getDayPlan();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context4.stop();}}}, _callee4);}))();\n    },\n\n    // 更新日目标完成状态\n    handleComplete2: function handleComplete2(value) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var data, res;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n                data = {\n                  complete: !value.complete,\n                  content: value.content,\n                  parentType: value.parentType,\n                  type: value.type,\n                  time: value.time,\n                  userId: uni.getStorageSync('userID'),\n                  week: +_this5.week,\n                  year: +_this5.year,\n                  whichDay: +_this5.whichDay };if (!\n\n                value.id) {_context5.next = 8;break;}\n                data.id = value.id;_context5.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateDayPlan',\n                    data: data }));case 5:res = _context5.sent;\n\n                __f__(\"log\", res, \" at pages/weekgoals/weekgoals.vue:751\");\n                if (res.data.statusCode == 200) {\n                  _this5.getDayPlan();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 8:case \"end\":return _context5.stop();}}}, _callee5);}))();\n\n    },\n\n    // 更新日内容\n    handleUpdateContent: function handleUpdateContent(e, value2) {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var value, data, res;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value,\n                  parentType: value2.parentType,\n                  type: value2.type,\n                  time: value2.time,\n                  userId: uni.getStorageSync('userID'),\n                  week: +_this6.week,\n                  year: +_this6.year,\n                  whichDay: +_this6.whichDay };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context6.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateDayPlan',\n                    data: data }));case 5:res = _context6.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this6.getDayPlan();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context6.stop();}}}, _callee6);}))();\n    },\n\n    // 日计划选择时间\n    bindDateChange: function bindDateChange(e, value2) {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var value, data, res;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value2.content,\n                  parentType: value2.parentType,\n                  type: value2.type,\n                  time: value,\n                  userId: uni.getStorageSync('userID'),\n                  week: +_this7.week,\n                  year: +_this7.year,\n                  whichDay: +_this7.whichDay };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context7.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateDayPlan',\n                    data: data }));case 5:res = _context7.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this7.getDayPlan();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context7.stop();}}}, _callee7);}))();\n    },\n\n    // 更新日计划分类\n    handleChangeType: function handleChangeType(e, value2) {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var value, data, res;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value2.content,\n                  parentType: value2.parentType,\n                  type: value,\n                  time: value2.time,\n                  userId: uni.getStorageSync('userID'),\n                  week: +_this8.week,\n                  year: +_this8.year,\n                  whichDay: +_this8.whichDay };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context8.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateDayPlan',\n                    data: data }));case 5:res = _context8.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this8.getDayPlan();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context8.stop();}}}, _callee8);}))();\n    },\n\n    // 获取日计划数据\n    getDayPlan: function getDayPlan() {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var data, res, result, j, k;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:\n                _this9.update3 = false;\n                data = {\n                  userId: uni.getStorageSync('userID'),\n                  week: +_this9.week,\n                  whichDay: +_this9.whichDay,\n                  year: +_this9.year };_context9.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/findAimsByConditionForDayPlan',\n                    data: data }));case 4:res = _context9.sent;\n\n                __f__(\"log\", data, \" at pages/weekgoals/weekgoals.vue:877\");\n                __f__(\"log\", res, \" at pages/weekgoals/weekgoals.vue:878\");\n                if (res.data.statusCode == 200 && res.data.result) {\n                  result = res.data.result;\n                  // 数据初始化\n                  _this9.todayThings = [\n                  {\n                    index: 1,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 2,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 3,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 4,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 5,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 6,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 7,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 8,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 9,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 10,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 11,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 12,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 13,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 14,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 15,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 16,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 17,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n                  {\n                    index: 18,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' }],\n\n\n                  _this9.todaySummary = [\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' }];\n\n\n                  j = 0;\n                  k = 0;\n                  result.forEach(function (v, i) {\n                    if (v.parentType === '今日事项') {\n                      _this9.todayThings[j] = v;\n                      _this9.todayThings.length = 18;\n                      j++;\n                    }\n                    if (v.parentType === '今日总结') {\n                      _this9.todaySummary[k] = v;\n                      _this9.todaySummary.length = 18;\n                      k++;\n                    }\n                  });\n                } else {\n                  uni.showToast({\n                    title: '获取日计划失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                _this9.update3 = true;case 9:case \"end\":return _context9.stop();}}}, _callee9);}))();\n    },\n\n    /****************************************************周-部分数据***********************************************/\n    // 下一周\n    handleNextWeek: function handleNextWeek() {\n      if (this.week + 1 === 53) {\n        this.week = 1;\n        this.year++;\n      } else {\n        this.week++;\n      }\n      this.time = this.time + 60 * 60 * 24 * 7 * 1000;\n      if (this.changeIndex == 0) {\n        this.getWeeklyTarget();\n        this.getWeeklySummary();\n        this.getSharePlan();\n      } else {\n        this.getDayPlan();\n      }\n      this.getDateNow();\n    },\n\n    // 上一周\n    handleLastWeek: function handleLastWeek() {\n      if (this.week - 1 === 0) {\n        this.week = 52;\n        this.year--;\n      } else {\n        this.week--;\n      }\n      this.time = this.time - 60 * 60 * 24 * 7 * 1000;\n      if (this.changeIndex == 0) {\n        this.getWeeklyTarget();\n        this.getWeeklySummary();\n        this.getSharePlan();\n      } else {\n        this.getDayPlan();\n      }\n      this.getDateNow();\n    },\n\n    // 分享数据更新\n    handleShare: function handleShare(e, value2) {var _this10 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var value, data, res;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  content: value,\n                  type: value2.type,\n                  timeSign: +('' + _this10.year + _this10.week),\n                  userid: uni.getStorageSync('userID') };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context10.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateShare',\n                    data: data }));case 5:res = _context10.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this10.getSharePlan();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context10.stop();}}}, _callee10);}))();\n    },\n\n    // 其他目标更新\n    handleOtherComplete: function handleOtherComplete(value) {var _this11 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {var data, res;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:\n                data = {\n                  complete: !value.complete,\n                  content: value.content,\n                  timeSign: +('' + _this11.year + _this11.week),\n                  type: value.type,\n                  userid: uni.getStorageSync('userID'),\n                  id: value.id };\n\n                // 必须是里面已经填写了内容的才可以打勾\n                if (!value.id) {_context11.next = 7;break;}_context11.next = 4;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateWeekPlan',\n                    data: data }));case 4:res = _context11.sent;\n\n                _this11.weeklyPlan.forEach(function (v) {\n                  if (v.id === value.id) {\n                    v.complete = !v.complete;\n                  }\n                });\n                if (res.data.statusCode == 200) {\n                  _this11.getWeeklyTarget();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context11.stop();}}}, _callee11);}))();\n\n    },\n\n    // 其他目标更新\n    handleOtherPlan: function handleOtherPlan(e, value2) {var _this12 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var value, data, res;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value,\n                  timeSign: +('' + _this12.year + _this12.week),\n                  type: value2.type,\n                  userid: uni.getStorageSync('userID') };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context12.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateWeekPlan',\n                    data: data }));case 5:res = _context12.sent;\n\n                __f__(\"log\", res.data.message, \" at pages/weekgoals/weekgoals.vue:1244\");\n                if (res.data.statusCode == 200) {\n                  _this12.getWeeklyTarget();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 8:case \"end\":return _context12.stop();}}}, _callee12);}))();\n    },\n\n    // 本周目标完成状态更新\n    handleComplete: function handleComplete(value) {var _this13 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var data, res;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:\n                data = {\n                  complete: !value.complete,\n                  content: value.content,\n                  timeSign: +('' + _this13.year + _this13.week),\n                  type: value.type,\n                  userid: uni.getStorageSync('userID'),\n                  id: value.id };\n\n                // 必须是里面已经填写了内容的才可以打勾\n                if (!value.id) {_context13.next = 6;break;}_context13.next = 4;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateWeekPlan',\n                    data: data }));case 4:res = _context13.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this13.getWeeklyTarget();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 6:case \"end\":return _context13.stop();}}}, _callee13);}))();\n\n    },\n\n    // 本周目标更新\n    handleUpdatePlan: function handleUpdatePlan(e, value2) {var _this14 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14() {var value, data, res;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value,\n                  timeSign: +('' + _this14.year + _this14.week),\n                  type: value2.type,\n                  userid: uni.getStorageSync('userID') };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context14.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateWeekPlan',\n                    data: data }));case 5:res = _context14.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this14.getWeeklyTarget();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context14.stop();}}}, _callee14);}))();\n    },\n\n    // 上周总结-本周创新与收获\n    handleHarvest: function handleHarvest(e, value2) {var _this15 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15() {var value, data, res;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  content: value,\n                  timeSign: +('' + _this15.year + _this15.week),\n                  type: value2.type,\n                  year: _this15.year,\n                  userid: uni.getStorageSync('userID') };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context15.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateSummarize',\n                    data: data }));case 5:res = _context15.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this15.getWeeklySummary();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context15.stop();}}}, _callee15);}))();\n    },\n\n    // 上周总结-克服障碍的对策和方法\n    handleService: function handleService(e, value2) {var _this16 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16() {var value, data, res;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  content: value,\n                  timeSign: +('' + _this16.year + _this16.week),\n                  type: value2.type,\n                  year: _this16.year,\n                  userid: uni.getStorageSync('userID') };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context16.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateSummarize',\n                    data: data }));case 5:res = _context16.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this16.getWeeklySummary();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context16.stop();}}}, _callee16);}))();\n    },\n\n    // 上周总结-未完成目标的原因及障碍\n    handleReason: function handleReason(e, value2) {var _this17 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17() {var value, data, res;return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  content: value,\n                  timeSign: +('' + _this17.year + _this17.week),\n                  type: value2.type,\n                  year: _this17.year,\n                  userid: uni.getStorageSync('userID') };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context17.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateSummarize',\n                    data: data }));case 5:res = _context17.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this17.getWeeklySummary();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context17.stop();}}}, _callee17);}))();\n    },\n\n    // 上周总结-目标完成情况\n    handleWeekPerformance: function handleWeekPerformance(e, value2) {var _this18 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18() {var value, data, res;return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  content: value,\n                  timeSign: +('' + _this18.year + _this18.week),\n                  type: value2.type,\n                  year: _this18.year,\n                  userid: uni.getStorageSync('userID') };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context18.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateSummarize',\n                    data: data }));case 5:res = _context18.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this18.getWeeklySummary();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context18.stop();}}}, _callee18);}))();\n\n    },\n\n    // 时间转化为周数\n    getWeek: function getWeek() {\n      var date = new Date(this.time);\n      var beginDate = new Date(date.getFullYear(), 0, 1);\n      var week = Math.ceil((parseInt((date - beginDate) / (24 * 60 * 60 * 1000)) + 1 + beginDate.getDay()) / 7);\n      this.week = week;\n    },\n\n    // 获取分享数据\n    getSharePlan: function getSharePlan() {var _this19 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19() {var data, res, result;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:\n                _this19.update2 = false;\n                data = {\n                  timeSign: +('' + _this19.year + _this19.week),\n                  userid: uni.getStorageSync('userID') };_context19.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/queryShare',\n                    data: data }));case 4:res = _context19.sent;\n\n                if (res.data.statusCode == 200 && res.data.result) {\n                  result = res.data.result;\n                  _this19.shareArray = [\n                  {\n                    type: '1',\n                    content: '' },\n\n                  {\n                    type: '2',\n                    content: '' },\n\n                  {\n                    type: '3',\n                    content: '' }],\n\n\n                  result.forEach(function (v) {\n                    _this19.shareArray.forEach(function (value, index) {\n                      if (v.type === value.type) {\n                        _this19.shareArray[index] = v;\n                      }\n                    });\n                  });\n                } else {\n                  uni.showToast({\n                    title: '获取分享数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                _this19.update2 = true;case 7:case \"end\":return _context19.stop();}}}, _callee19);}))();\n    },\n\n    // 获取周目标数据\n    getWeeklyTarget: function getWeeklyTarget() {var _this20 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {var data, res, result;return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:\n                _this20.update1 = false;\n                data = {\n                  timeSign: +('' + _this20.year + _this20.week),\n                  userid: uni.getStorageSync('userID') };_context20.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/queryWeekPlan',\n                    data: data }));case 4:res = _context20.sent;\n\n                // console.log(res)\n                if (res.data.statusCode == 200 && res.data.result) {\n                  // 初始化数据\n                  _this20.weeklyPlan = [{\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false }],\n\n\n                  _this20.otherPlan = [{\n                    type: '学习计划',\n                    content: '',\n                    complete: false },\n\n                  {\n                    type: '健康计划',\n                    content: '',\n                    complete: false },\n\n                  {\n                    type: '本周反省',\n                    content: '',\n                    complete: false }];\n\n\n                  result = res.data.result;\n                  result.forEach(function (v, i) {\n                    if (v.type == '本周目标') {\n                      _this20.weeklyPlan[i] = v;\n                      _this20.weeklyPlan.length = 18;\n                    }\n                    _this20.otherPlan.forEach(function (value, index) {\n                      if (value.type == v.type) {\n                        _this20.otherPlan[index] = v;\n                      }\n                    });\n                  });\n                } else {\n                  uni.showToast({\n                    title: '获取数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                _this20.update1 = true;case 7:case \"end\":return _context20.stop();}}}, _callee20);}))();\n    },\n\n    // 获取周总结数据\n    getWeeklySummary: function getWeeklySummary() {var _this21 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21() {var data, res, result, j, k, l, g, i;return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:\n                _this21.update = false;\n                // 获取总结数据\n                data = {\n                  userid: uni.getStorageSync('userID'),\n                  timeSign: +('' + _this21.year + _this21.week),\n                  year: _this21.year };_context21.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/querySummarize',\n                    data: data }));case 4:res = _context21.sent;\n\n                if (res.data.statusCode == 200 && res.data.result) {\n                  result = res.data.result;\n                  _this21.weekPerformance = [{\n                    content: '',\n                    type: '目标完成情况' },\n\n                  {\n                    content: '',\n                    type: '目标完成情况' },\n\n                  {\n                    content: '',\n                    type: '目标完成情况' },\n\n                  {\n                    content: '',\n                    type: '目标完成情况' },\n\n                  {\n                    content: '',\n                    type: '目标完成情况' },\n\n                  {\n                    content: '',\n                    type: '目标完成情况' }],\n\n\n\n                  _this21.reason = [{\n                    content: '',\n                    type: '未完成目标的原因及障碍' },\n\n                  {\n                    content: '',\n                    type: '未完成目标的原因及障碍' },\n\n                  {\n                    content: '',\n                    type: '未完成目标的原因及障碍' }],\n\n\n                  _this21.service = [{\n                    content: '',\n                    type: '克服障碍的对策和方法' },\n\n                  {\n                    content: '',\n                    type: '克服障碍的对策和方法' },\n\n                  {\n                    content: '',\n                    type: '克服障碍的对策和方法' }],\n\n\n                  _this21.harvest = [{\n                    content: '',\n                    type: '本周创新与收获' },\n\n                  {\n                    content: '',\n                    type: '本周创新与收获' },\n\n                  {\n                    content: '',\n                    type: '本周创新与收获' }];\n\n\n                  j = 0;\n                  k = 0;\n                  l = 0;\n                  g = 0;\n                  for (i = 0; i < result.length; i++) {\n                    if (result[i].type == '目标完成情况') {\n                      _this21.weekPerformance[j] = result[i];\n                      _this21.weekPerformance.length = 6;\n                      j++;\n                    }\n                    if (result[i].type == '未完成目标的原因及障碍') {\n                      _this21.reason[k] = result[i];\n                      _this21.reason.length = 3;\n                      k++;\n                    }\n                    if (result[i].type == '克服障碍的对策和方法') {\n                      _this21.service[l] = result[i];\n                      _this21.service.length = 3;\n                      l++;\n                    }\n                    if (result[i].type == '本周创新与收获') {\n                      _this21.harvest[g] = result[i];\n                      _this21.harvest.length = 3;\n                      g++;\n                    }\n                  }\n\n                } else {\n                  uni.showToast({\n                    title: '获取数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                _this21.update = true;case 7:case \"end\":return _context21.stop();}}}, _callee21);}))();\n    } },\n\n  onLoad: function onLoad() {\n    this.getWeek();\n    this.getWeeklySummary();\n    this.getWeeklyTarget();\n    this.getSharePlan();\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvd2Vla2dvYWxzL3dlZWtnb2Fscy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyTUEscUU7QUFDQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFDQSxtQkFEQTtBQUVBLHNCQUZBOztBQUlBO0FBQ0EsbUJBREE7QUFFQSxzQkFGQSxFQUpBOztBQVFBO0FBQ0EsbUJBREE7QUFFQSxzQkFGQSxFQVJBOztBQVlBO0FBQ0EsbUJBREE7QUFFQSxzQkFGQSxFQVpBOztBQWdCQTtBQUNBLG1CQURBO0FBRUEsc0JBRkEsRUFoQkE7O0FBb0JBO0FBQ0EsbUJBREE7QUFFQSxzQkFGQSxFQXBCQSxDQUZBOzs7QUEyQkE7QUFDQSxtQkFEQTtBQUVBLDJCQUZBOztBQUlBO0FBQ0EsbUJBREE7QUFFQSwyQkFGQSxFQUpBOztBQVFBO0FBQ0EsbUJBREE7QUFFQSwyQkFGQSxFQVJBLENBM0JBOzs7QUF3Q0E7QUFDQSxtQkFEQTtBQUVBLDBCQUZBOztBQUlBO0FBQ0EsbUJBREE7QUFFQSwwQkFGQSxFQUpBOztBQVFBO0FBQ0EsbUJBREE7QUFFQSwwQkFGQSxFQVJBLENBeENBOzs7QUFxREE7QUFDQSxtQkFEQTtBQUVBLHVCQUZBOztBQUlBO0FBQ0EsbUJBREE7QUFFQSx1QkFGQSxFQUpBOztBQVFBO0FBQ0EsbUJBREE7QUFFQSx1QkFGQSxFQVJBLENBckRBOzs7QUFrRUE7QUFDQSxtQkFEQTtBQUVBLG9CQUZBO0FBR0EsdUJBSEE7O0FBS0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBO0FBR0EsdUJBSEEsRUFMQTs7QUFVQTtBQUNBLG1CQURBO0FBRUEsb0JBRkE7QUFHQSx1QkFIQSxFQVZBOztBQWVBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQTtBQUdBLHVCQUhBLEVBZkE7O0FBb0JBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQTtBQUdBLHVCQUhBLEVBcEJBOztBQXlCQTtBQUNBLG1CQURBO0FBRUEsb0JBRkE7QUFHQSx1QkFIQSxFQXpCQTs7QUE4QkE7QUFDQSxtQkFEQTtBQUVBLG9CQUZBO0FBR0EsdUJBSEEsRUE5QkE7QUFrQ0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBO0FBR0EsdUJBSEEsRUFsQ0E7O0FBdUNBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQTtBQUdBLHVCQUhBLEVBdkNBOztBQTRDQTtBQUNBLG1CQURBO0FBRUEsb0JBRkE7QUFHQSx1QkFIQSxFQTVDQTs7QUFpREE7QUFDQSxtQkFEQTtBQUVBLG9CQUZBO0FBR0EsdUJBSEEsRUFqREE7O0FBc0RBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQTtBQUdBLHVCQUhBLEVBdERBOztBQTJEQTtBQUNBLG1CQURBO0FBRUEsb0JBRkE7QUFHQSx1QkFIQSxFQTNEQTs7QUFnRUE7QUFDQSxtQkFEQTtBQUVBLG9CQUZBO0FBR0EsdUJBSEEsRUFoRUE7O0FBcUVBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQTtBQUdBLHVCQUhBLEVBckVBOztBQTBFQTtBQUNBLG1CQURBO0FBRUEsb0JBRkE7QUFHQSx1QkFIQSxFQTFFQTs7QUErRUE7QUFDQSxtQkFEQTtBQUVBLG9CQUZBO0FBR0EsdUJBSEEsRUEvRUE7O0FBb0ZBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQTtBQUdBLHVCQUhBLEVBcEZBLENBbEVBOzs7QUE0SkE7QUFDQSxvQkFEQTtBQUVBLG1CQUZBO0FBR0EsdUJBSEE7O0FBS0E7QUFDQSxvQkFEQTtBQUVBLG1CQUZBO0FBR0EsdUJBSEEsRUFMQTs7QUFVQTtBQUNBLG9CQURBO0FBRUEsbUJBRkE7QUFHQSx1QkFIQSxFQVZBLENBNUpBOzs7QUE0S0E7QUFDQTtBQUNBLGlCQURBO0FBRUEsbUJBRkEsRUFEQTs7QUFLQTtBQUNBLGlCQURBO0FBRUEsbUJBRkEsRUFMQTs7QUFTQTtBQUNBLGlCQURBO0FBRUEsbUJBRkEsRUFUQSxDQTVLQTs7O0FBMExBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGVBRkEsRUFEQTtBQUlBO0FBQ0Esa0JBREE7QUFFQSxlQUZBLEVBSkE7QUFPQTtBQUNBLGtCQURBO0FBRUEsZUFGQSxFQVBBO0FBVUE7QUFDQSxrQkFEQTtBQUVBLGVBRkEsRUFWQTtBQWFBO0FBQ0Esa0JBREE7QUFFQSxlQUZBLEVBYkE7QUFnQkE7QUFDQSxrQkFEQTtBQUVBLGVBRkEsRUFoQkE7QUFtQkE7QUFDQSxrQkFEQTtBQUVBLGVBRkEsRUFuQkEsQ0ExTEE7OztBQWtOQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSx1QkFGQTtBQUdBLGdCQUhBO0FBSUEsMEJBSkE7QUFLQSxnQkFMQTtBQU1BLG1CQU5BLEVBREE7O0FBU0E7QUFDQSxnQkFEQTtBQUVBLHVCQUZBO0FBR0EsZ0JBSEE7QUFJQSwwQkFKQTtBQUtBLGdCQUxBO0FBTUEsbUJBTkEsRUFUQTs7QUFpQkE7QUFDQSxnQkFEQTtBQUVBLHVCQUZBO0FBR0EsZ0JBSEE7QUFJQSwwQkFKQTtBQUtBLGdCQUxBO0FBTUEsbUJBTkEsRUFqQkE7O0FBeUJBO0FBQ0EsZ0JBREE7QUFFQSx1QkFGQTtBQUdBLGdCQUhBO0FBSUEsMEJBSkE7QUFLQSxnQkFMQTtBQU1BLG1CQU5BLEVBekJBOztBQWlDQTtBQUNBLGdCQURBO0FBRUEsdUJBRkE7QUFHQSxnQkFIQTtBQUlBLDBCQUpBO0FBS0EsZ0JBTEE7QUFNQSxtQkFOQSxFQWpDQTs7QUF5Q0E7QUFDQSxnQkFEQTtBQUVBLHVCQUZBO0FBR0EsZ0JBSEE7QUFJQSwwQkFKQTtBQUtBLGdCQUxBO0FBTUEsbUJBTkEsRUF6Q0E7O0FBaURBO0FBQ0EsZ0JBREE7QUFFQSx1QkFGQTtBQUdBLGdCQUhBO0FBSUEsMEJBSkE7QUFLQSxnQkFMQTtBQU1BLG1CQU5BLEVBakRBOztBQXlEQTtBQUNBLGdCQURBO0FBRUEsdUJBRkE7QUFHQSxnQkFIQTtBQUlBLDBCQUpBO0FBS0EsZ0JBTEE7QUFNQSxtQkFOQSxFQXpEQTs7QUFpRUE7QUFDQSxnQkFEQTtBQUVBLHVCQUZBO0FBR0EsZ0JBSEE7QUFJQSwwQkFKQTtBQUtBLGdCQUxBO0FBTUEsbUJBTkEsRUFqRUE7O0FBeUVBO0FBQ0EsaUJBREE7QUFFQSx1QkFGQTtBQUdBLGdCQUhBO0FBSUEsMEJBSkE7QUFLQSxnQkFMQTtBQU1BLG1CQU5BLEVBekVBOztBQWlGQTtBQUNBLGlCQURBO0FBRUEsdUJBRkE7QUFHQSxnQkFIQTtBQUlBLDBCQUpBO0FBS0EsZ0JBTEE7QUFNQSxtQkFOQSxFQWpGQTs7QUF5RkE7QUFDQSxpQkFEQTtBQUVBLHVCQUZBO0FBR0EsZ0JBSEE7QUFJQSwwQkFKQTtBQUtBLGdCQUxBO0FBTUEsbUJBTkEsRUF6RkE7O0FBaUdBO0FBQ0EsaUJBREE7QUFFQSx1QkFGQTtBQUdBLGdCQUhBO0FBSUEsMEJBSkE7QUFLQSxnQkFMQTtBQU1BLG1CQU5BLEVBakdBOztBQXlHQTtBQUNBLGlCQURBO0FBRUEsdUJBRkE7QUFHQSxnQkFIQTtBQUlBLDBCQUpBO0FBS0EsZ0JBTEE7QUFNQSxtQkFOQSxFQXpHQTs7QUFpSEE7QUFDQSxpQkFEQTtBQUVBLHVCQUZBO0FBR0EsZ0JBSEE7QUFJQSwwQkFKQTtBQUtBLGdCQUxBO0FBTUEsbUJBTkEsRUFqSEE7O0FBeUhBO0FBQ0EsaUJBREE7QUFFQSx1QkFGQTtBQUdBLGdCQUhBO0FBSUEsMEJBSkE7QUFLQSxnQkFMQTtBQU1BLG1CQU5BLEVBekhBOztBQWlJQTtBQUNBLGlCQURBO0FBRUEsdUJBRkE7QUFHQSxnQkFIQTtBQUlBLDBCQUpBO0FBS0EsZ0JBTEE7QUFNQSxtQkFOQSxFQWpJQTtBQXdJQTtBQUNBLGlCQURBO0FBRUEsdUJBRkE7QUFHQSxnQkFIQTtBQUlBLDBCQUpBO0FBS0EsZ0JBTEE7QUFNQSxtQkFOQSxFQXhJQSxDQWxOQTs7O0FBbVdBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLG1CQUZBLEVBREE7O0FBS0E7QUFDQSwwQkFEQTtBQUVBLG1CQUZBLEVBTEE7O0FBU0E7QUFDQSwwQkFEQTtBQUVBLG1CQUZBLEVBVEE7O0FBYUE7QUFDQSwwQkFEQTtBQUVBLG1CQUZBLEVBYkE7O0FBaUJBO0FBQ0EsMEJBREE7QUFFQSxtQkFGQSxFQWpCQTs7QUFxQkE7QUFDQSwwQkFEQTtBQUVBLG1CQUZBLEVBckJBOztBQXlCQTtBQUNBLDBCQURBO0FBRUEsbUJBRkEsRUF6QkE7O0FBNkJBO0FBQ0EsMEJBREE7QUFFQSxtQkFGQSxFQTdCQTs7QUFpQ0E7QUFDQSwwQkFEQTtBQUVBLG1CQUZBLEVBakNBOztBQXFDQTtBQUNBLDBCQURBO0FBRUEsbUJBRkEsRUFyQ0E7O0FBeUNBO0FBQ0EsMEJBREE7QUFFQSxtQkFGQSxFQXpDQTs7QUE2Q0E7QUFDQSwwQkFEQTtBQUVBLG1CQUZBLEVBN0NBOztBQWlEQTtBQUNBLDBCQURBO0FBRUEsbUJBRkEsRUFqREE7O0FBcURBO0FBQ0EsMEJBREE7QUFFQSxtQkFGQSxFQXJEQTs7QUF5REE7QUFDQSwwQkFEQTtBQUVBLG1CQUZBLEVBekRBOztBQTZEQTtBQUNBLDBCQURBO0FBRUEsbUJBRkEsRUE3REE7O0FBaUVBO0FBQ0EsMEJBREE7QUFFQSxtQkFGQSxFQWpFQSxDQW5XQTs7OztBQTBhQSxhQTFhQTtBQTJhQSxvQ0EzYUE7QUE0YUEsY0E1YUE7QUE2YUEsYUE3YUE7QUE4YUEsZ0NBOWFBO0FBK2FBLGtCQS9hQTtBQWdiQSxtQkFoYkE7QUFpYkEsbUJBamJBO0FBa2JBLG1CQWxiQTtBQW1iQSxvQkFuYkE7QUFvYkEsaUJBcGJBOztBQXNiQSxHQXhiQTtBQXliQTs7QUFFQTtBQUNBLG9CQUhBLDRCQUdBLENBSEEsRUFHQTtBQUNBLG9CQURBLEdBQ0Esd0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FSQTtBQVNBLEtBWkE7O0FBY0E7QUFDQSxtQkFmQSwyQkFlQSxLQWZBLEVBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQSxpQkFUQTtBQVVBLEtBekJBOztBQTJCQTtBQUNBLG1CQTVCQSwyQkE0QkEsS0E1QkEsRUE0QkE7QUFDQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FUQTtBQVVBLEtBdENBOztBQXdDQTtBQUNBLGNBekNBLHdCQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXJEQTtBQXNEQTtBQUNBO0FBQ0EsdUJBeERBLCtCQXdEQSxDQXhEQSxFQXdEQSxNQXhEQSxFQXdEQTtBQUNBLHFCQURBLEdBQ0EsUUFEQSxDQUNBLEtBREE7QUFFQSxvQkFGQSxHQUVBO0FBQ0EsZ0NBREE7QUFFQSwrQ0FGQTtBQUdBLHNEQUhBO0FBSUEsb0NBSkE7QUFLQSxvQ0FMQTtBQU1BLDRDQU5BLEVBRkE7O0FBVUE7QUFDQTtBQUNBLGlCQVpBO0FBYUE7QUFDQSxrQ0FEQTtBQUVBLG1EQUZBO0FBR0EsOEJBSEEsR0FiQSxTQWFBLEdBYkE7O0FBa0JBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSx1Q0FEQTtBQUVBLGdDQUZBO0FBR0EsaUNBSEE7O0FBS0EsaUJBMUJBO0FBMkJBLEtBbkZBOztBQXFGQTtBQUNBLG1CQXRGQSwyQkFzRkEsS0F0RkEsRUFzRkE7QUFDQSxvQkFEQSxHQUNBO0FBQ0EsMkNBREE7QUFFQSx3Q0FGQTtBQUdBLDhDQUhBO0FBSUEsa0NBSkE7QUFLQSxrQ0FMQTtBQU1BLHNEQU5BO0FBT0Esb0NBUEE7QUFRQSxvQ0FSQTtBQVNBLDRDQVRBLEVBREE7O0FBWUEsd0JBWkE7QUFhQSxtQ0FiQTtBQWNBO0FBQ0Esa0NBREE7QUFFQSxtREFGQTtBQUdBLDhCQUhBLEdBZEEsU0FjQSxHQWRBOztBQW1CQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSx1Q0FEQTtBQUVBLGdDQUZBO0FBR0EsaUNBSEE7O0FBS0EsaUJBNUJBOztBQThCQSxLQXBIQTs7QUFzSEE7QUFDQSx1QkF2SEEsK0JBdUhBLENBdkhBLEVBdUhBLE1BdkhBLEVBdUhBO0FBQ0EscUJBREEsR0FDQSxRQURBLENBQ0EsS0FEQTtBQUVBLG9CQUZBLEdBRUE7QUFDQSwyQ0FEQTtBQUVBLGdDQUZBO0FBR0EsK0NBSEE7QUFJQSxtQ0FKQTtBQUtBLG1DQUxBO0FBTUEsc0RBTkE7QUFPQSxvQ0FQQTtBQVFBLG9DQVJBO0FBU0EsNENBVEEsRUFGQTs7QUFhQTtBQUNBO0FBQ0EsaUJBZkE7QUFnQkE7QUFDQSxrQ0FEQTtBQUVBLG1EQUZBO0FBR0EsOEJBSEEsR0FoQkEsU0FnQkEsR0FoQkE7O0FBcUJBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSx1Q0FEQTtBQUVBLGdDQUZBO0FBR0EsaUNBSEE7O0FBS0EsaUJBN0JBO0FBOEJBLEtBckpBOztBQXVKQTtBQUNBLGtCQXhKQSwwQkF3SkEsQ0F4SkEsRUF3SkEsTUF4SkEsRUF3SkE7QUFDQSxxQkFEQSxHQUNBLFFBREEsQ0FDQSxLQURBO0FBRUEsb0JBRkEsR0FFQTtBQUNBLDJDQURBO0FBRUEseUNBRkE7QUFHQSwrQ0FIQTtBQUlBLG1DQUpBO0FBS0EsNkJBTEE7QUFNQSxzREFOQTtBQU9BLG9DQVBBO0FBUUEsb0NBUkE7QUFTQSw0Q0FUQSxFQUZBOztBQWFBO0FBQ0E7QUFDQSxpQkFmQTtBQWdCQTtBQUNBLGtDQURBO0FBRUEsbURBRkE7QUFHQSw4QkFIQSxHQWhCQSxTQWdCQSxHQWhCQTs7QUFxQkE7QUFDQTtBQUNBLGlCQUZBLE1BRUE7QUFDQTtBQUNBLHVDQURBO0FBRUEsZ0NBRkE7QUFHQSxpQ0FIQTs7QUFLQSxpQkE3QkE7QUE4QkEsS0F0TEE7O0FBd0xBO0FBQ0Esb0JBekxBLDRCQXlMQSxDQXpMQSxFQXlMQSxNQXpMQSxFQXlMQTtBQUNBLHFCQURBLEdBQ0EsUUFEQSxDQUNBLEtBREE7QUFFQSxvQkFGQSxHQUVBO0FBQ0EsMkNBREE7QUFFQSx5Q0FGQTtBQUdBLCtDQUhBO0FBSUEsNkJBSkE7QUFLQSxtQ0FMQTtBQU1BLHNEQU5BO0FBT0Esb0NBUEE7QUFRQSxvQ0FSQTtBQVNBLDRDQVRBLEVBRkE7O0FBYUE7QUFDQTtBQUNBLGlCQWZBO0FBZ0JBO0FBQ0Esa0NBREE7QUFFQSxtREFGQTtBQUdBLDhCQUhBLEdBaEJBLFNBZ0JBLEdBaEJBOztBQXFCQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBLGlCQTdCQTtBQThCQSxLQXZOQTs7QUF5TkE7QUFDQSxjQTFOQSx3QkEwTkE7QUFDQTtBQUNBLG9CQUZBLEdBRUE7QUFDQSxzREFEQTtBQUVBLG9DQUZBO0FBR0EsNENBSEE7QUFJQSxvQ0FKQSxFQUZBOztBQVFBO0FBQ0Esa0NBREE7QUFFQSxtRUFGQTtBQUdBLDhCQUhBLEdBUkEsU0FRQSxHQVJBOztBQWFBO0FBQ0E7QUFDQTtBQUNBLHdCQURBLEdBQ0EsUUFEQSxDQUNBLE1BREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLG1DQUZBO0FBR0EsNEJBSEE7QUFJQSxzQ0FKQTtBQUtBLDRCQUxBO0FBTUEsK0JBTkEsRUFEQTs7QUFTQTtBQUNBLDRCQURBO0FBRUEsbUNBRkE7QUFHQSw0QkFIQTtBQUlBLHNDQUpBO0FBS0EsNEJBTEE7QUFNQSwrQkFOQSxFQVRBOztBQWlCQTtBQUNBLDRCQURBO0FBRUEsbUNBRkE7QUFHQSw0QkFIQTtBQUlBLHNDQUpBO0FBS0EsNEJBTEE7QUFNQSwrQkFOQSxFQWpCQTs7QUF5QkE7QUFDQSw0QkFEQTtBQUVBLG1DQUZBO0FBR0EsNEJBSEE7QUFJQSxzQ0FKQTtBQUtBLDRCQUxBO0FBTUEsK0JBTkEsRUF6QkE7O0FBaUNBO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLDRCQUhBO0FBSUEsc0NBSkE7QUFLQSw0QkFMQTtBQU1BLCtCQU5BLEVBakNBOztBQXlDQTtBQUNBLDRCQURBO0FBRUEsbUNBRkE7QUFHQSw0QkFIQTtBQUlBLHNDQUpBO0FBS0EsNEJBTEE7QUFNQSwrQkFOQSxFQXpDQTs7QUFpREE7QUFDQSw0QkFEQTtBQUVBLG1DQUZBO0FBR0EsNEJBSEE7QUFJQSxzQ0FKQTtBQUtBLDRCQUxBO0FBTUEsK0JBTkEsRUFqREE7O0FBeURBO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLDRCQUhBO0FBSUEsc0NBSkE7QUFLQSw0QkFMQTtBQU1BLCtCQU5BLEVBekRBOztBQWlFQTtBQUNBLDRCQURBO0FBRUEsbUNBRkE7QUFHQSw0QkFIQTtBQUlBLHNDQUpBO0FBS0EsNEJBTEE7QUFNQSwrQkFOQSxFQWpFQTs7QUF5RUE7QUFDQSw2QkFEQTtBQUVBLG1DQUZBO0FBR0EsNEJBSEE7QUFJQSxzQ0FKQTtBQUtBLDRCQUxBO0FBTUEsK0JBTkEsRUF6RUE7O0FBaUZBO0FBQ0EsNkJBREE7QUFFQSxtQ0FGQTtBQUdBLDRCQUhBO0FBSUEsc0NBSkE7QUFLQSw0QkFMQTtBQU1BLCtCQU5BLEVBakZBOztBQXlGQTtBQUNBLDZCQURBO0FBRUEsbUNBRkE7QUFHQSw0QkFIQTtBQUlBLHNDQUpBO0FBS0EsNEJBTEE7QUFNQSwrQkFOQSxFQXpGQTs7QUFpR0E7QUFDQSw2QkFEQTtBQUVBLG1DQUZBO0FBR0EsNEJBSEE7QUFJQSxzQ0FKQTtBQUtBLDRCQUxBO0FBTUEsK0JBTkEsRUFqR0E7O0FBeUdBO0FBQ0EsNkJBREE7QUFFQSxtQ0FGQTtBQUdBLDRCQUhBO0FBSUEsc0NBSkE7QUFLQSw0QkFMQTtBQU1BLCtCQU5BLEVBekdBOztBQWlIQTtBQUNBLDZCQURBO0FBRUEsbUNBRkE7QUFHQSw0QkFIQTtBQUlBLHNDQUpBO0FBS0EsNEJBTEE7QUFNQSwrQkFOQSxFQWpIQTs7QUF5SEE7QUFDQSw2QkFEQTtBQUVBLG1DQUZBO0FBR0EsNEJBSEE7QUFJQSxzQ0FKQTtBQUtBLDRCQUxBO0FBTUEsK0JBTkEsRUF6SEE7O0FBaUlBO0FBQ0EsNkJBREE7QUFFQSxtQ0FGQTtBQUdBLDRCQUhBO0FBSUEsc0NBSkE7QUFLQSw0QkFMQTtBQU1BLCtCQU5BLEVBaklBO0FBd0lBO0FBQ0EsNkJBREE7QUFFQSxtQ0FGQTtBQUdBLDRCQUhBO0FBSUEsc0NBSkE7QUFLQSw0QkFMQTtBQU1BLCtCQU5BLEVBeElBOzs7QUFpSkE7QUFDQTtBQUNBLHNDQURBO0FBRUEsK0JBRkEsRUFEQTs7QUFLQTtBQUNBLHNDQURBO0FBRUEsK0JBRkEsRUFMQTs7QUFTQTtBQUNBLHNDQURBO0FBRUEsK0JBRkEsRUFUQTs7QUFhQTtBQUNBLHNDQURBO0FBRUEsK0JBRkEsRUFiQTs7QUFpQkE7QUFDQSxzQ0FEQTtBQUVBLCtCQUZBLEVBakJBOztBQXFCQTtBQUNBLHNDQURBO0FBRUEsK0JBRkEsRUFyQkE7O0FBeUJBO0FBQ0Esc0NBREE7QUFFQSwrQkFGQSxFQXpCQTs7QUE2QkE7QUFDQSxzQ0FEQTtBQUVBLCtCQUZBLEVBN0JBOztBQWlDQTtBQUNBLHNDQURBO0FBRUEsK0JBRkEsRUFqQ0E7O0FBcUNBO0FBQ0Esc0NBREE7QUFFQSwrQkFGQSxFQXJDQTs7QUF5Q0E7QUFDQSxzQ0FEQTtBQUVBLCtCQUZBLEVBekNBOztBQTZDQTtBQUNBLHNDQURBO0FBRUEsK0JBRkEsRUE3Q0E7O0FBaURBO0FBQ0Esc0NBREE7QUFFQSwrQkFGQSxFQWpEQTs7QUFxREE7QUFDQSxzQ0FEQTtBQUVBLCtCQUZBLEVBckRBOztBQXlEQTtBQUNBLHNDQURBO0FBRUEsK0JBRkEsRUF6REE7O0FBNkRBO0FBQ0Esc0NBREE7QUFFQSwrQkFGQSxFQTdEQTs7QUFpRUE7QUFDQSxzQ0FEQTtBQUVBLCtCQUZBLEVBakVBOztBQXFFQTtBQUNBLHNDQURBO0FBRUEsK0JBRkEsRUFyRUEsQ0FqSkE7OztBQTJOQSxtQkE5TkEsR0E4TkEsQ0E5TkE7QUErTkEsbUJBL05BLEdBK05BLENBL05BO0FBZ09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFYQTtBQVlBLGlCQTVPQSxNQTRPQTtBQUNBO0FBQ0Esd0NBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBO0FBQ0Esc0NBbFFBO0FBbVFBLEtBN2RBOztBQStkQTtBQUNBO0FBQ0Esa0JBamVBLDRCQWllQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FqZkE7O0FBbWZBO0FBQ0Esa0JBcGZBLDRCQW9mQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwZ0JBOztBQXNnQkE7QUFDQSxlQXZnQkEsdUJBdWdCQSxDQXZnQkEsRUF1Z0JBLE1BdmdCQSxFQXVnQkE7QUFDQSxxQkFEQSxHQUNBLFFBREEsQ0FDQSxLQURBO0FBRUEsb0JBRkEsR0FFQTtBQUNBLGdDQURBO0FBRUEsbUNBRkE7QUFHQSwrREFIQTtBQUlBLHNEQUpBLEVBRkE7O0FBUUE7QUFDQTtBQUNBLGlCQVZBO0FBV0E7QUFDQSxrQ0FEQTtBQUVBLGlEQUZBO0FBR0EsOEJBSEEsR0FYQSxTQVdBLEdBWEE7O0FBZ0JBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSx1Q0FEQTtBQUVBLGdDQUZBO0FBR0EsaUNBSEE7O0FBS0EsaUJBeEJBO0FBeUJBLEtBaGlCQTs7QUFraUJBO0FBQ0EsdUJBbmlCQSwrQkFtaUJBLEtBbmlCQSxFQW1pQkE7QUFDQSxvQkFEQSxHQUNBO0FBQ0EsMkNBREE7QUFFQSx3Q0FGQTtBQUdBLCtEQUhBO0FBSUEsa0NBSkE7QUFLQSxzREFMQTtBQU1BLDhCQU5BLEVBREE7O0FBU0E7QUFUQSxxQkFVQSxRQVZBO0FBV0E7QUFDQSxrQ0FEQTtBQUVBLG9EQUZBO0FBR0EsOEJBSEEsR0FYQSxTQVdBLEdBWEE7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBSkE7QUFLQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBLGlCQTdCQTs7QUErQkEsS0Fsa0JBOztBQW9rQkE7QUFDQSxtQkFya0JBLDJCQXFrQkEsQ0Fya0JBLEVBcWtCQSxNQXJrQkEsRUFxa0JBO0FBQ0EscUJBREEsR0FDQSxRQURBLENBQ0EsS0FEQTtBQUVBLG9CQUZBLEdBRUE7QUFDQSwyQ0FEQTtBQUVBLGdDQUZBO0FBR0EsK0RBSEE7QUFJQSxtQ0FKQTtBQUtBLHNEQUxBLEVBRkE7O0FBU0E7QUFDQTtBQUNBLGlCQVhBO0FBWUE7QUFDQSxrQ0FEQTtBQUVBLG9EQUZBO0FBR0EsOEJBSEEsR0FaQSxTQVlBLEdBWkE7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBLGlCQUZBLE1BRUE7QUFDQTtBQUNBLHVDQURBO0FBRUEsZ0NBRkE7QUFHQSxpQ0FIQTs7QUFLQSxpQkExQkE7QUEyQkEsS0FobUJBOztBQWttQkE7QUFDQSxrQkFubUJBLDBCQW1tQkEsS0FubUJBLEVBbW1CQTtBQUNBLG9CQURBLEdBQ0E7QUFDQSwyQ0FEQTtBQUVBLHdDQUZBO0FBR0EsK0RBSEE7QUFJQSxrQ0FKQTtBQUtBLHNEQUxBO0FBTUEsOEJBTkEsRUFEQTs7QUFTQTtBQVRBLHFCQVVBLFFBVkE7QUFXQTtBQUNBLGtDQURBO0FBRUEsb0RBRkE7QUFHQSw4QkFIQSxHQVhBLFNBV0EsR0FYQTs7QUFnQkE7QUFDQTtBQUNBLGlCQUZBLE1BRUE7QUFDQTtBQUNBLHVDQURBO0FBRUEsZ0NBRkE7QUFHQSxpQ0FIQTs7QUFLQSxpQkF4QkE7O0FBMEJBLEtBN25CQTs7QUErbkJBO0FBQ0Esb0JBaG9CQSw0QkFnb0JBLENBaG9CQSxFQWdvQkEsTUFob0JBLEVBZ29CQTtBQUNBLHFCQURBLEdBQ0EsUUFEQSxDQUNBLEtBREE7QUFFQSxvQkFGQSxHQUVBO0FBQ0EsMkNBREE7QUFFQSxnQ0FGQTtBQUdBLCtEQUhBO0FBSUEsbUNBSkE7QUFLQSxzREFMQSxFQUZBOztBQVNBO0FBQ0E7QUFDQSxpQkFYQTtBQVlBO0FBQ0Esa0NBREE7QUFFQSxvREFGQTtBQUdBLDhCQUhBLEdBWkEsU0FZQSxHQVpBOztBQWlCQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBLGlCQXpCQTtBQTBCQSxLQTFwQkE7O0FBNHBCQTtBQUNBLGlCQTdwQkEseUJBNnBCQSxDQTdwQkEsRUE2cEJBLE1BN3BCQSxFQTZwQkE7QUFDQSxxQkFEQSxHQUNBLFFBREEsQ0FDQSxLQURBO0FBRUEsb0JBRkEsR0FFQTtBQUNBLGdDQURBO0FBRUEsK0RBRkE7QUFHQSxtQ0FIQTtBQUlBLG9DQUpBO0FBS0Esc0RBTEEsRUFGQTs7QUFTQTtBQUNBO0FBQ0EsaUJBWEE7QUFZQTtBQUNBLGtDQURBO0FBRUEscURBRkE7QUFHQSw4QkFIQSxHQVpBLFNBWUEsR0FaQTs7QUFpQkE7QUFDQTtBQUNBLGlCQUZBLE1BRUE7QUFDQTtBQUNBLHVDQURBO0FBRUEsZ0NBRkE7QUFHQSxpQ0FIQTs7QUFLQSxpQkF6QkE7QUEwQkEsS0F2ckJBOztBQXlyQkE7QUFDQSxpQkExckJBLHlCQTByQkEsQ0ExckJBLEVBMHJCQSxNQTFyQkEsRUEwckJBO0FBQ0EscUJBREEsR0FDQSxRQURBLENBQ0EsS0FEQTtBQUVBLG9CQUZBLEdBRUE7QUFDQSxnQ0FEQTtBQUVBLCtEQUZBO0FBR0EsbUNBSEE7QUFJQSxvQ0FKQTtBQUtBLHNEQUxBLEVBRkE7O0FBU0E7QUFDQTtBQUNBLGlCQVhBO0FBWUE7QUFDQSxrQ0FEQTtBQUVBLHFEQUZBO0FBR0EsOEJBSEEsR0FaQSxTQVlBLEdBWkE7O0FBaUJBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSx1Q0FEQTtBQUVBLGdDQUZBO0FBR0EsaUNBSEE7O0FBS0EsaUJBekJBO0FBMEJBLEtBcHRCQTs7QUFzdEJBO0FBQ0EsZ0JBdnRCQSx3QkF1dEJBLENBdnRCQSxFQXV0QkEsTUF2dEJBLEVBdXRCQTtBQUNBLHFCQURBLEdBQ0EsUUFEQSxDQUNBLEtBREE7QUFFQSxvQkFGQSxHQUVBO0FBQ0EsZ0NBREE7QUFFQSwrREFGQTtBQUdBLG1DQUhBO0FBSUEsb0NBSkE7QUFLQSxzREFMQSxFQUZBOztBQVNBO0FBQ0E7QUFDQSxpQkFYQTtBQVlBO0FBQ0Esa0NBREE7QUFFQSxxREFGQTtBQUdBLDhCQUhBLEdBWkEsU0FZQSxHQVpBOztBQWlCQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBLGlCQXpCQTtBQTBCQSxLQWp2QkE7O0FBbXZCQTtBQUNBLHlCQXB2QkEsaUNBb3ZCQSxDQXB2QkEsRUFvdkJBLE1BcHZCQSxFQW92QkE7QUFDQSxxQkFEQSxHQUNBLFFBREEsQ0FDQSxLQURBO0FBRUEsb0JBRkEsR0FFQTtBQUNBLGdDQURBO0FBRUEsK0RBRkE7QUFHQSxtQ0FIQTtBQUlBLG9DQUpBO0FBS0Esc0RBTEEsRUFGQTs7QUFTQTtBQUNBO0FBQ0EsaUJBWEE7QUFZQTtBQUNBLGtDQURBO0FBRUEscURBRkE7QUFHQSw4QkFIQSxHQVpBLFNBWUEsR0FaQTs7QUFpQkE7QUFDQTtBQUNBLGlCQUZBLE1BRUE7QUFDQTtBQUNBLHVDQURBO0FBRUEsZ0NBRkE7QUFHQSxpQ0FIQTs7QUFLQSxpQkF6QkE7O0FBMkJBLEtBL3dCQTs7QUFpeEJBO0FBQ0EsV0FseEJBLHFCQWt4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdnhCQTs7QUF5eEJBO0FBQ0EsZ0JBMXhCQSwwQkEweEJBO0FBQ0E7QUFDQSxvQkFGQSxHQUVBO0FBQ0EsK0RBREE7QUFFQSxzREFGQSxFQUZBOztBQU1BO0FBQ0Esa0NBREE7QUFFQSxnREFGQTtBQUdBLDhCQUhBLEdBTkEsU0FNQSxHQU5BOztBQVdBO0FBQ0Esd0JBREEsR0FDQSxRQURBLENBQ0EsTUFEQTtBQUVBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLCtCQUZBLEVBREE7O0FBS0E7QUFDQSw2QkFEQTtBQUVBLCtCQUZBLEVBTEE7O0FBU0E7QUFDQSw2QkFEQTtBQUVBLCtCQUZBLEVBVEE7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFKQTtBQUtBLG1CQU5BLENBZEE7QUFxQkEsaUJBdkJBLE1BdUJBO0FBQ0E7QUFDQSx5Q0FEQTtBQUVBLGdDQUZBO0FBR0EsaUNBSEE7O0FBS0E7QUFDQSx1Q0F6Q0E7QUEwQ0EsS0FwMEJBOztBQXMwQkE7QUFDQSxtQkF2MEJBLDZCQXUwQkE7QUFDQTtBQUNBLG9CQUZBLEdBRUE7QUFDQSwrREFEQTtBQUVBLHNEQUZBLEVBRkE7O0FBTUE7QUFDQSxrQ0FEQTtBQUVBLG1EQUZBO0FBR0EsOEJBSEEsR0FOQSxTQU1BLEdBTkE7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLGdDQUZBO0FBR0EsbUNBSEE7O0FBS0E7QUFDQSwrQkFEQTtBQUVBLGdDQUZBO0FBR0EsbUNBSEEsRUFMQTs7QUFVQTtBQUNBLCtCQURBO0FBRUEsZ0NBRkE7QUFHQSxtQ0FIQSxFQVZBOztBQWVBO0FBQ0EsK0JBREE7QUFFQSxnQ0FGQTtBQUdBLG1DQUhBLEVBZkE7O0FBb0JBO0FBQ0EsK0JBREE7QUFFQSxnQ0FGQTtBQUdBLG1DQUhBLEVBcEJBOztBQXlCQTtBQUNBLCtCQURBO0FBRUEsZ0NBRkE7QUFHQSxtQ0FIQSxFQXpCQTs7QUE4QkE7QUFDQSwrQkFEQTtBQUVBLGdDQUZBO0FBR0EsbUNBSEEsRUE5QkE7O0FBbUNBO0FBQ0EsK0JBREE7QUFFQSxnQ0FGQTtBQUdBLG1DQUhBLEVBbkNBOztBQXdDQTtBQUNBLCtCQURBO0FBRUEsZ0NBRkE7QUFHQSxtQ0FIQSxFQXhDQTs7QUE2Q0E7QUFDQSwrQkFEQTtBQUVBLGdDQUZBO0FBR0EsbUNBSEEsRUE3Q0E7O0FBa0RBO0FBQ0EsK0JBREE7QUFFQSxnQ0FGQTtBQUdBLG1DQUhBLEVBbERBOztBQXVEQTtBQUNBLCtCQURBO0FBRUEsZ0NBRkE7QUFHQSxtQ0FIQSxFQXZEQTs7QUE0REE7QUFDQSwrQkFEQTtBQUVBLGdDQUZBO0FBR0EsbUNBSEEsRUE1REE7O0FBaUVBO0FBQ0EsK0JBREE7QUFFQSxnQ0FGQTtBQUdBLG1DQUhBLEVBakVBOztBQXNFQTtBQUNBLCtCQURBO0FBRUEsZ0NBRkE7QUFHQSxtQ0FIQSxFQXRFQTs7QUEyRUE7QUFDQSwrQkFEQTtBQUVBLGdDQUZBO0FBR0EsbUNBSEEsRUEzRUE7O0FBZ0ZBO0FBQ0EsK0JBREE7QUFFQSxnQ0FGQTtBQUdBLG1DQUhBLEVBaEZBOztBQXFGQTtBQUNBLCtCQURBO0FBRUEsZ0NBRkE7QUFHQSxtQ0FIQSxFQXJGQTs7O0FBMkZBO0FBQ0EsZ0NBREE7QUFFQSwrQkFGQTtBQUdBLG1DQUhBOztBQUtBO0FBQ0EsZ0NBREE7QUFFQSwrQkFGQTtBQUdBLG1DQUhBLEVBTEE7O0FBVUE7QUFDQSxnQ0FEQTtBQUVBLCtCQUZBO0FBR0EsbUNBSEEsRUFWQSxDQTNGQTs7O0FBMkdBLHdCQTdHQSxHQTZHQSxRQTdHQSxDQTZHQSxNQTdHQTtBQThHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFKQTtBQUtBLG1CQVZBO0FBV0EsaUJBekhBLE1BeUhBO0FBQ0E7QUFDQSx1Q0FEQTtBQUVBLGdDQUZBO0FBR0EsaUNBSEE7O0FBS0E7QUFDQSx1Q0E1SUE7QUE2SUEsS0FwOUJBOztBQXM5QkE7QUFDQSxvQkF2OUJBLDhCQXU5QkE7QUFDQTtBQUNBO0FBQ0Esb0JBSEEsR0FHQTtBQUNBLHNEQURBO0FBRUEsK0RBRkE7QUFHQSxvQ0FIQSxFQUhBOztBQVFBO0FBQ0Esa0NBREE7QUFFQSxvREFGQTtBQUdBLDhCQUhBLEdBUkEsU0FRQSxHQVJBOztBQWFBO0FBQ0Esd0JBREEsR0FDQSxRQURBLENBQ0EsTUFEQTtBQUVBO0FBQ0EsK0JBREE7QUFFQSxrQ0FGQTs7QUFJQTtBQUNBLCtCQURBO0FBRUEsa0NBRkEsRUFKQTs7QUFRQTtBQUNBLCtCQURBO0FBRUEsa0NBRkEsRUFSQTs7QUFZQTtBQUNBLCtCQURBO0FBRUEsa0NBRkEsRUFaQTs7QUFnQkE7QUFDQSwrQkFEQTtBQUVBLGtDQUZBLEVBaEJBOztBQW9CQTtBQUNBLCtCQURBO0FBRUEsa0NBRkEsRUFwQkE7Ozs7QUEwQkE7QUFDQSwrQkFEQTtBQUVBLHVDQUZBOztBQUlBO0FBQ0EsK0JBREE7QUFFQSx1Q0FGQSxFQUpBOztBQVFBO0FBQ0EsK0JBREE7QUFFQSx1Q0FGQSxFQVJBLENBMUJBOzs7QUF1Q0E7QUFDQSwrQkFEQTtBQUVBLHNDQUZBOztBQUlBO0FBQ0EsK0JBREE7QUFFQSxzQ0FGQSxFQUpBOztBQVFBO0FBQ0EsK0JBREE7QUFFQSxzQ0FGQSxFQVJBLENBdkNBOzs7QUFvREE7QUFDQSwrQkFEQTtBQUVBLG1DQUZBOztBQUlBO0FBQ0EsK0JBREE7QUFFQSxtQ0FGQSxFQUpBOztBQVFBO0FBQ0EsK0JBREE7QUFFQSxtQ0FGQSxFQVJBLENBcERBOzs7QUFpRUEsbUJBbkVBLEdBbUVBLENBbkVBO0FBb0VBLG1CQXBFQSxHQW9FQSxDQXBFQTtBQXFFQSxtQkFyRUEsR0FxRUEsQ0FyRUE7QUFzRUEsbUJBdEVBLEdBc0VBLENBdEVBO0FBdUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQTlGQSxNQThGQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBO0FBQ0Esc0NBbEhBO0FBbUhBLEtBMWtDQSxFQXpiQTs7QUFxZ0RBLFFBcmdEQSxvQkFxZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTFnREEsRSIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDwhLS0g5pi+56S65ZGoIC0tPlxyXG5cdFx0PGJsb2NrIHYtaWY9XCJjaGFuZ2VJbmRleD09MFwiPlxyXG5cdFx0XHQ8IS0tIOmhtumDqHRhYuagjyAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJiYXJcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIndlZWtUYWJcIj5cclxuXHRcdFx0XHRcdDxibG9jayB2LWZvcj1cIih2YWx1ZSxpbmRleCkgaW4gd2Vla0RheXNcIiA6a2V5PVwidmFsdWVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IEB0YXA9XCJoYW5kbGVDaGFuZ2VUYWIoaW5kZXgpXCIgOmNsYXNzPVwiY2hhbmdlSW5kZXg9PT1pbmRleD8nb24nOicnXCI+e3t2YWx1ZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLWNoYW5nZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJcIiBAdGFwPVwiaGFuZGxlTGFzdFdlZWtcIj7kuIrkuIDlkag8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhYlwiPlxyXG5cdFx0XHRcdFx0XHR7e3llYXJ9feW5tCDnrKx7e3dlZWt9feWRqFxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJcIiBAdGFwPVwiaGFuZGxlTmV4dFdlZWtcIj7kuIvkuIDlkag8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8IS0tIOihqOagvOaVsOaNrumDqOWIhiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrXCI+XHJcblx0XHRcdFx0PCEtLSDlt6bovrnooajmoLwgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLWxlZnRcIiB2LWlmPVwidXBkYXRlXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndlZWstbGVmdC1pdGVtXCI+5LiK5ZGo5oC757uTPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLWxlZnQtaXRlbVwiPuebruagh+WujOaIkOaDheWGtTwvdmlldz5cclxuXHRcdFx0XHRcdCA8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIHdlZWtQZXJmb3JtYW5jZVwiIDprZXk9XCJNYXRoLnJhbmRvbSgpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLWxlZnQtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBjbGFzcz1cIm15dGV4dFwiIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIiBAYmx1cj1cImhhbmRsZVdlZWtQZXJmb3JtYW5jZSgkZXZlbnQsdmFsdWUpXCI+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2Vlay1sZWZ0LWl0ZW1cIj7mnKrlrozmiJDnm67moIfnmoTljp/lm6Dlj4rpmpznoo08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIHJlYXNvblwiIDprZXk9XCJNYXRoLnJhbmRvbSgpXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2Vlay1sZWZ0LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0PHRleHRhcmVhIGNsYXNzPVwibXl0ZXh0XCIgQGJsdXI9XCJoYW5kbGVSZWFzb24oJGV2ZW50LHZhbHVlKVwiIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2Vlay1sZWZ0LWl0ZW1cIj7lhYvmnI3pmpznoo3nmoTlr7nnrZblkozmlrnms5U8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIHNlcnZpY2VcIiA6a2V5PVwiTWF0aC5yYW5kb20oKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndlZWstbGVmdC1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBjbGFzcz1cIm15dGV4dFwiIEBibHVyPVwiaGFuZGxlU2VydmljZSgkZXZlbnQsdmFsdWUpXCIgOnZhbHVlPVwidmFsdWUuY29udGVudFwiPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L2Jsb2NrPiBcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2Vlay1sZWZ0LWl0ZW1cIj7mnKzlkajliJvmlrDkuI7mlLbojrc8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIGhhcnZlc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLWxlZnQtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJteXRleHRcIiBAYmx1cj1cImhhbmRsZUhhcnZlc3QoJGV2ZW50LHZhbHVlKVwiIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDlj7PovrnooajmoLwgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLXJpZ2h0XCIgdi1pZj1cInVwZGF0ZTFcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLXJpZ2h0LXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0XCI+5bqP5Y+3PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+5pys5ZGo55uu5qCHPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldz4xLuivt+WcqOS4iuWRqOS6lOeahOinhOWIkuWhq+WGmTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXc+Mi7mjInnm67moIfph43opoHnqIvluqbop4TliJLmnInpmZDpobrluo88L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3PjMu5a6M5oiQ5LiA6aG5LOWcqOWujOaIkOaXtumZkOWkhOaJk+WLvjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodFwiPuWujOaIkOacn+mZkDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIHdlZWtseVBsYW5cIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndlZWstcmlnaHQtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0XCI+e3tpbmRleCsxfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJteXRleHRcIiA6dmFsdWU9XCJ2YWx1ZS5jb250ZW50XCIgQGJsdXI9XCJoYW5kbGVVcGRhdGVQbGFuKCRldmVudCx2YWx1ZSlcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodFwiIDpjbGFzcz1cInZhbHVlLmNvbXBsZXRlPT10cnVlPydpY29uZm9udCBpY29uLXpoZW5ncXVlJzonJ1wiIEB0YXA9XCJoYW5kbGVDb21wbGV0ZSh2YWx1ZSlcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0PCEtLSDlupXpg6jlm77niYfku6Xlj4rlhbbku5borqHliJLpg6jliIYgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZm9vdGVyXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb290ZXItbGVmdFwiPuW5v+WRiuS9jVxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvb3Rlci1yaWdodFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb290ZXItcmlnaHQtdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZS1sZWZ0XCI+5pys5ZGo5YW25LuW55uu5qCHPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx06K+35rOo5oSP6KeE5YiS5L2g55qE55Sf5rS777yM5bmz6KGh5L2g55qE5Lq655Sf77yM5Lul5LiL55uu5qCH5YGa5Yiw5omTJ+KImics5pys5ZGo5pyJ54m55Yir55qE5pel5a2Q5ZCX77yf6K+35qCH5rOoICjnlJ/ml6Uv6IqC5pelL+e6quW/teaXpSlcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PGJsb2NrIHYtZm9yPVwiKHZhbHVlLGluZGV4KSBpbiBvdGhlclBsYW5cIiA6a2V5PVwidmFsdWUudHlwZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb290ZXItcmlnaHQtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHQgPHZpZXcgY2xhc3M9XCJjb250ZW50LWxlZnRcIj57e3ZhbHVlLnR5cGV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0IDx2aWV3IGNsYXNzPVwiY29udGVudC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQgPHRleHRhcmVhIGNsYXNzPVwibXl0ZXh0XCIgOnZhbHVlPVwidmFsdWUuY29udGVudFwiIEBibHVyPVwiaGFuZGxlT3RoZXJQbGFuKCRldmVudCx2YWx1ZSlcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJ2YWx1ZS5jb21wbGV0ZT09dHJ1ZT8naWNvbmZvbnQgaWNvbi16aGVuZ3F1ZSc6JydcIiBAdGFwPVwiaGFuZGxlT3RoZXJDb21wbGV0ZSh2YWx1ZSlcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0XHQ8IS0tIOWIhuS6q+mDqOWIhiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzaGFyZVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hhcmUtdG9wXCI+5pys5ZGo5pyA5oOz5YiG5Lqr55qE5LiJ54K5PC92aWV3PlxyXG5cdFx0XHRcdDxibG9jayB2LWlmPVwidXBkYXRlMlwiIHYtZm9yPVwiKHZhbHVlLGluZGV4KSBpbiBzaGFyZUFycmF5XCIgOmtleT1cInZhbHVlLnR5cGVcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNoYXJlLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hhcmUtY29udGVudC1sZWZ0XCI+e3t2YWx1ZS50eXBlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNoYXJlLWNvbnRlbnQtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0PHRleHRhcmVhIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIiBAYmx1cj1cImhhbmRsZVNoYXJlKCRldmVudCx2YWx1ZSlcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0PC9ibG9jaz5cclxuXHRcdFxyXG5cdFx0PCEtLSDmmL7npLrlpKkgLS0+XHJcblx0XHQ8YmxvY2sgdi1lbHNlPlxyXG5cdFx0XHQ8IS0tIOmhtumDqHRhYmJhciAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJiYXJcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIndlZWtUYWJcIj5cclxuXHRcdFx0XHRcdDxibG9jayB2LWZvcj1cIih2YWx1ZSxpbmRleCkgaW4gd2Vla0RheXNcIiA6a2V5PVwidmFsdWVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IEB0YXA9XCJoYW5kbGVDaGFuZ2VUYWIoaW5kZXgpXCIgOmNsYXNzPVwiY2hhbmdlSW5kZXg9PT1pbmRleD8nb24nOicnXCI+e3t2YWx1ZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLWNoYW5nZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJcIiBAdGFwPVwiaGFuZGxlTGFzdFdlZWtcIj7kuIrkuIDlkag8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhYlwiPlxyXG5cdFx0XHRcdFx0XHR7e3llYXJ9feW5tCDnrKx7e3dlZWt9feWRqFxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJcIiBAdGFwPVwiaGFuZGxlTmV4dFdlZWtcIj7kuIvkuIDlkag8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g5ZGo5LiALeWRqOaXpXRhYuagjyAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJkYXlzLXRhYlwiPlxyXG5cdFx0XHRcdDxibG9jayB2LWZvcj1cIih2YWx1ZSxpbmRleCkgaW4gd2Vla0RhdGVcIiA6a2V5PVwidmFsdWUudHlwZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkYXlzXCIgOmNsYXNzPVwid2hpY2hEYXk9PShpbmRleCsxKT8nb24nOicnXCIgQHRhcD1cImhhbmRsZUNob3NlRGF0ZShpbmRleCsxKVwiPnt7dmFsdWUubmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDml6XmnJ/pgInmi6kgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZGF0ZVwiPlxyXG5cdFx0XHQgIDxwaWNrZXIgbW9kZT1cImRhdGVcIiAgQGNoYW5nZT1cImhhbmRsZUNoYW5nZVRpbWVcIj5cclxuXHRcdFx0ICAgIDx0ZXh0Pnt7eWVhcn195bm0e3ttb250aH195pyIe3tkYXlzfX3ml6U8L3RleHQ+XHJcblx0XHRcdCAgPC9waWNrZXI+XHJcblx0XHRcdCAgICA8dmlldyBjbGFzcz1cImljb25mb250IGljb24tcmlsaVwiPjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOavj+aXpeaVsOaNriAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJkYWlseVwiIHYtaWY9XCJ1cGRhdGUzXCI+XHJcblx0XHRcdCAgPHZpZXcgY2xhc3M9XCJkYWlseS1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhdGVnb3J5XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2F0ZU5hbWVcIj7mjIlBQkPliIbnsbs8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2F0ZU5hbWVcIj7otbfmraLml7bpl7Q8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2F0ZU5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyA+5LuK5aSp5LqL6aG5IOimgeS6i+esrOS4gDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyA+Qeexu+acgOmHjeimgSBC57G75YW25qyhIEPnsbvmrKHph43opoE8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXRlTmFtZVwiPuWujOaIkOaJk+WLvjwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOWGheWuuemDqOWIhiAtLT5cclxuXHRcdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIHRvZGF5VGhpbmdzXCIgOmtleT1cIk1hdGgucmFuZG9tKClcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHRcdCAgICAgIDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiA6dmFsdWU9XCJ2YWx1ZS50eXBlXCIgQGJsdXI9XCJoYW5kbGVDaGFuZ2VUeXBlKCRldmVudCx2YWx1ZSlcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQgICAgICA8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdCAgICAgICA8cGlja2VyIG1vZGU9XCJkYXRlXCIgOnZhbHVlPVwidmFsdWUudGltZVwiIEBjaGFuZ2U9XCJiaW5kRGF0ZUNoYW5nZSgkZXZlbnQsdmFsdWUpXCI+XHJcblx0XHRcdFx0XHQgICAgICAgIDx2aWV3IGNsYXNzPVwicGlja2VyXCI+XHJcblx0XHRcdFx0XHQgICAgICAgICAgPHRleHQgc3R5bGU9XCJvcGFjaXR5OjBcIj7pgInmi6nml7bpl7Q8L3RleHQ+XHJcblx0XHRcdFx0XHQgICAgICAgICAgPHRleHQ+e3t2YWx1ZS50aW1lPT1udWxsPycnOnZhbHVlLnRpbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdCAgICAgICAgPC92aWV3PlxyXG5cdFx0XHRcdFx0ICAgICAgPC9waWNrZXI+XHJcblx0XHRcdFx0XHQgICAgICA8L3ZpZXc+XHJcblx0XHRcdFx0XHQgICAgICA8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdCAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwidG9kYXlUaGluZ3NcIiA6dmFsdWU9XCJ2YWx1ZS5jb250ZW50XCIgQGJsdXI9XCJoYW5kbGVVcGRhdGVDb250ZW50KCRldmVudCx2YWx1ZSlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdCAgICAgIDwvdmlldz5cclxuXHRcdFx0XHRcdCAgICAgIDx2aWV3IGNsYXNzPVwiY29udGVudFwiIDpjbGFzcz1cInZhbHVlLmNvbXBsZXRlPT10cnVlPydpY29uZm9udCBpY29uLXpoZW5ncXVlJzonJ1wiIEB0YXA9XCJoYW5kbGVDb21wbGV0ZTIodmFsdWUpXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0ICAgIDwvdmlldz5cclxuXHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRhaWx5LXJpZ2h0XCI+XHJcblx0XHRcdFx0ICAgIDx2aWV3IGNsYXNzPVwiZGFpbHktcmlnaHQtdGl0bGVcIj5cclxuXHRcdFx0XHQgICAgICA8dGV4dCA+5oC757uTPC90ZXh0PlxyXG5cdFx0XHRcdCAgICAgIDx0ZXh0ID7mlLnov5s8L3RleHQ+XHJcblx0XHRcdFx0ICAgIDwvdmlldz5cclxuXHRcdFx0XHQgICAgPGJsb2NrIHYtZm9yPVwiKHZhbHVlLGluZGV4KSBpbiB0b2RheVN1bW1hcnlcIj5cclxuXHRcdFx0XHQgICAgICA8dmlldyBjbGFzcz1cImRlc1wiPlxyXG5cdFx0XHRcdCAgICAgICAgPHRleHRhcmVhIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIiBAYmx1cj1cImhhbmRsZVVwZGF0ZVN1bW1hcnkoJGV2ZW50LHZhbHVlKVwiPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0ICAgICAgPC92aWV3PlxyXG5cdFx0XHRcdCAgICA8L2Jsb2NrPlxyXG5cdFx0XHRcdCAgPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0PC9ibG9jaz5cclxuXHRcdFxyXG5cdFx0XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge215QXhpb3N9IGZyb20gJy4uLy4uL3V0aWxzL215QXhpb3MuanMnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR3ZWVrRGF5czpbJ+WRqCcsJ+WkqSddLFxyXG5cdFx0XHRcdHdlZWtQZXJmb3JtYW5jZTogW3tcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0cmVhc29uOiBbe1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acquWujOaIkOebruagh+eahOWOn+WboOWPiumanOeijSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pyq5a6M5oiQ55uu5qCH55qE5Y6f5Zug5Y+K6Zqc56KNJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKrlrozmiJDnm67moIfnmoTljp/lm6Dlj4rpmpznoo0nXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRzZXJ2aWNlOiBbe1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+WFi+acjemanOeijeeahOWvueetluWSjOaWueazlSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5YWL5pyN6Zqc56KN55qE5a+5562W5ZKM5pa55rOVJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICflhYvmnI3pmpznoo3nmoTlr7nnrZblkozmlrnms5UnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0aGFydmVzdDogW3tcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajliJvmlrDkuI7mlLbojrcnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOWIm+aWsOS4juaUtuiOtydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo5Yib5paw5LiO5pS26I63J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdHdlZWtseVBsYW46IFt7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdG90aGVyUGxhbjogW3tcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+WtpuS5oOiuoeWIkicsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICflgaXlurforqHliJInLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo5Y+N55yBJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0c2hhcmVBcnJheTpbXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgdHlwZTonMScsXHJcblx0XHRcdFx0ICAgICAgICBjb250ZW50OicnXHJcblx0XHRcdFx0ICAgICAgfSxcclxuXHRcdFx0XHQgICAgICB7XHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicyJyxcclxuXHRcdFx0XHQgICAgICAgIGNvbnRlbnQ6JydcclxuXHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdCAgICAgIHtcclxuXHRcdFx0XHQgICAgICAgIHR5cGU6JzMnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgIF0sXHJcblx0XHRcdFx0d2Vla0RhdGU6W1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiflkajkuIAnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOjFcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHRuYW1lOiflkajkuownLFxyXG5cdFx0XHRcdFx0XHR0eXBlOjJcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHRuYW1lOiflkajkuIknLFxyXG5cdFx0XHRcdFx0XHR0eXBlOjNcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHRuYW1lOiflkajlm5snLFxyXG5cdFx0XHRcdFx0XHR0eXBlOjRcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHRuYW1lOiflkajkupQnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOjVcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHRuYW1lOiflkajlha0nLFxyXG5cdFx0XHRcdFx0XHR0eXBlOjZcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHRuYW1lOiflkajml6UnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOjdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHR0b2RheVRoaW5nczpbXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6MSxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6MixcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6MyxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6NCxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6NSxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6NixcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6NyxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6OCxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6OSxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6MTAsXHJcblx0XHRcdFx0ICAgICAgICBjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHQgICAgICAgIHRpbWU6JycsXHJcblx0XHRcdFx0ICAgICAgICBwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdCAgICAgICAgdHlwZTonJyxcclxuXHRcdFx0XHQgICAgICAgIGNvbnRlbnQ6JydcclxuXHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdCAgICAgIHtcclxuXHRcdFx0XHQgICAgICAgIGluZGV4OjExLFxyXG5cdFx0XHRcdCAgICAgICAgY29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0ICAgICAgICB0aW1lOicnLFxyXG5cdFx0XHRcdCAgICAgICAgcGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHQgICAgICAgIHR5cGU6JycsXHJcblx0XHRcdFx0ICAgICAgICBjb250ZW50OicnXHJcblx0XHRcdFx0ICAgICAgfSxcclxuXHRcdFx0XHQgICAgICB7XHJcblx0XHRcdFx0ICAgICAgICBpbmRleDoxMixcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6MTMsXHJcblx0XHRcdFx0ICAgICAgICBjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHQgICAgICAgIHRpbWU6JycsXHJcblx0XHRcdFx0ICAgICAgICBwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdCAgICAgICAgdHlwZTonJyxcclxuXHRcdFx0XHQgICAgICAgIGNvbnRlbnQ6JydcclxuXHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdCAgICAgIHtcclxuXHRcdFx0XHQgICAgICAgIGluZGV4OjE0LFxyXG5cdFx0XHRcdCAgICAgICAgY29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0ICAgICAgICB0aW1lOicnLFxyXG5cdFx0XHRcdCAgICAgICAgcGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHQgICAgICAgIHR5cGU6JycsXHJcblx0XHRcdFx0ICAgICAgICBjb250ZW50OicnXHJcblx0XHRcdFx0ICAgICAgfSxcclxuXHRcdFx0XHQgICAgICB7XHJcblx0XHRcdFx0ICAgICAgICBpbmRleDoxNSxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6MTYsXHJcblx0XHRcdFx0ICAgICAgICBjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHQgICAgICAgIHRpbWU6JycsXHJcblx0XHRcdFx0ICAgICAgICBwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdCAgICAgICAgdHlwZTonJyxcclxuXHRcdFx0XHQgICAgICAgIGNvbnRlbnQ6JydcclxuXHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdCAgICAgIHtcclxuXHRcdFx0XHQgICAgICAgIGluZGV4OjE3LFxyXG5cdFx0XHRcdCAgICAgICAgY29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0ICAgICAgICB0aW1lOicnLFxyXG5cdFx0XHRcdCAgICAgICAgcGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHQgICAgICAgIHR5cGU6JycsXHJcblx0XHRcdFx0ICAgICAgICBjb250ZW50OicnXHJcblx0XHRcdFx0ICAgICAgfSwge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6MTcsXHJcblx0XHRcdFx0ICAgICAgICBjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHQgICAgICAgIHRpbWU6JycsXHJcblx0XHRcdFx0ICAgICAgICBwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdCAgICAgICAgdHlwZTonJyxcclxuXHRcdFx0XHQgICAgICAgIGNvbnRlbnQ6JydcclxuXHRcdFx0XHQgICAgICB9XHJcblx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0dG9kYXlTdW1tYXJ5OltcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0ICAgXHJcblx0XHRcdFx0d2VlazogMCxcclxuXHRcdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXHJcblx0XHRcdFx0bW9udGg6MCxcclxuXHRcdFx0XHRkYXlzOjAsXHJcblx0XHRcdFx0dGltZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcblx0XHRcdFx0dXBkYXRlOnRydWUsXHJcblx0XHRcdFx0dXBkYXRlMTp0cnVlLFxyXG5cdFx0XHRcdHVwZGF0ZTI6dHJ1ZSxcclxuXHRcdFx0XHR1cGRhdGUzOnRydWUsXHJcblx0XHRcdFx0Y2hhbmdlSW5kZXg6MCxcclxuXHRcdFx0XHR3aGljaERheToxXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczp7XHJcblx0XHRcdFxyXG5cdFx0Ly8g6YCJ5oup5pe26Ze0XHJcblx0XHRhc3luYyBoYW5kbGVDaGFuZ2VUaW1lKGUpe1xyXG5cdFx0XHRsZXQgZGF0ZT1uZXcgRGF0ZShlLmRldGFpbC52YWx1ZSlcclxuXHRcdFx0dGhpcy5tb250aD1kYXRlLmdldE1vbnRoKCkrMVxyXG5cdFx0XHR0aGlzLnllYXI9ZGF0ZS5nZXRGdWxsWWVhcigpXHJcblx0XHRcdHRoaXMuZGF5cz1kYXRlLmdldERhdGUoKVxyXG5cdFx0XHR0aGlzLnRpbWU9ZGF0ZS5nZXRUaW1lKClcclxuXHRcdFx0dGhpcy5nZXREYXRlTm93KClcclxuXHRcdFx0dGhpcy5nZXRXZWVrKClcclxuXHRcdFx0dGhpcy5nZXREYXlQbGFuKClcclxuXHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0Ly8g5YiH5o2i5ZGoLS3lpKlcclxuXHRcdGFzeW5jIGhhbmRsZUNoYW5nZVRhYihpbmRleCl7XHJcblx0XHRcdHRoaXMuY2hhbmdlSW5kZXg9aW5kZXhcclxuXHRcdFx0aWYoaW5kZXg9PTApe1xyXG5cdFx0XHRcdHRoaXMuZ2V0V2Vla2x5VGFyZ2V0KClcclxuXHRcdFx0XHR0aGlzLmdldFdlZWtseVN1bW1hcnkoKVxyXG5cdFx0XHRcdHRoaXMuZ2V0U2hhcmVQbGFuKClcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5nZXREYXRlTm93KClcclxuXHRcdFx0XHR0aGlzLmdldERheVBsYW4oKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDliIfmjaLlkajlh6BcclxuXHRcdGFzeW5jIGhhbmRsZUNob3NlRGF0ZShpbmRleCl7XHJcblx0XHRcdGlmKChpbmRleC10aGlzLndoaWNoRGF5KT4wKXtcclxuXHRcdFx0XHR0aGlzLnRpbWU9dGhpcy50aW1lKzI0KjYwKjYwKjEwMDAqTWF0aC5hYnMoaW5kZXgtdGhpcy53aGljaERheSlcclxuXHRcdFx0fWVsc2UgaWYoKGluZGV4LXRoaXMud2hpY2hEYXkpPDApe1xyXG5cdFx0XHRcdHRoaXMudGltZT10aGlzLnRpbWUtMjQqNjAqNjAqMTAwMCpNYXRoLmFicyhpbmRleC10aGlzLndoaWNoRGF5KVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMud2hpY2hEYXk9aW5kZXhcclxuXHRcdFx0dGhpcy5nZXREYXRlTm93KClcclxuXHRcdFx0Ly8g5ZCM5pe26YeN5paw6I635Y+W5pWw5o2uXHJcblx0XHRcdHRoaXMuZ2V0RGF5UGxhbigpXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDojrflj5bml7bpl7RcclxuXHRcdGdldERhdGVOb3coKXtcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy50aW1lKVxyXG5cdFx0XHRsZXQgZGF0ZT1uZXcgRGF0ZSh0aGlzLnRpbWUpXHJcblx0XHRcdGxldCB5ZWFyPWRhdGUuZ2V0RnVsbFllYXIoKVxyXG5cdFx0XHRsZXQgbW9udGg9ZGF0ZS5nZXRNb250aCgpKzFcclxuXHRcdFx0bGV0IGRheXM9ZGF0ZS5nZXREYXRlKClcclxuXHRcdFx0bGV0IHdoaWNoRGF5PWRhdGUuZ2V0RGF5KClcclxuXHRcdFx0d2hpY2hEYXk9d2hpY2hEYXk9PT0wPzc6d2hpY2hEYXlcclxuXHRcdFx0dGhpcy55ZWFyPXllYXJcclxuXHRcdFx0dGhpcy5tb250aD1tb250aFxyXG5cdFx0XHR0aGlzLmRheXM9ZGF5c1xyXG5cdFx0XHR0aGlzLndoaWNoRGF5PXdoaWNoRGF5XHJcblx0XHR9LFxyXG5cdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirlpKkt6YOo5YiG5pWw5o2uKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblx0XHQvLyDmm7TmlrDml6XmgLvnu5PmlLnov5tcclxuXHRcdGFzeW5jIGhhbmRsZVVwZGF0ZVN1bW1hcnkoZSx2YWx1ZTIpe1xyXG5cdFx0XHRsZXQge3ZhbHVlfT1lLmRldGFpbFxyXG5cdFx0XHRsZXQgZGF0YT17XHJcblx0XHRcdFx0Y29udGVudDp2YWx1ZSxcclxuXHRcdFx0XHRwYXJlbnRUeXBlOnZhbHVlMi5wYXJlbnRUeXBlLFxyXG5cdFx0XHRcdHVzZXJJZDp1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpLFxyXG5cdFx0XHRcdHdlZWs6K3RoaXMud2VlayxcclxuXHRcdFx0XHR5ZWFyOit0aGlzLnllYXIsXHJcblx0XHRcdFx0d2hpY2hEYXk6K3RoaXMud2hpY2hEYXlcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih2YWx1ZTIuaWQpe1xyXG5cdFx0XHRcdGRhdGEuaWQ9dmFsdWUyLmlkXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHJlcz1hd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVEYXlQbGFuJyxcclxuXHRcdFx0XHRkYXRhXHJcblx0XHRcdH0pXHJcblx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0dGhpcy5nZXREYXlQbGFuKClcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTon5pu05paw5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vIOabtOaWsOaXpeebruagh+WujOaIkOeKtuaAgVxyXG5cdFx0YXN5bmMgaGFuZGxlQ29tcGxldGUyKHZhbHVlKXtcclxuXHRcdFx0bGV0IGRhdGE9e1xyXG5cdFx0XHRcdGNvbXBsZXRlOiF2YWx1ZS5jb21wbGV0ZSxcclxuXHRcdFx0XHRjb250ZW50OnZhbHVlLmNvbnRlbnQsXHJcblx0XHRcdFx0cGFyZW50VHlwZTp2YWx1ZS5wYXJlbnRUeXBlLFxyXG5cdFx0XHRcdHR5cGU6dmFsdWUudHlwZSxcclxuXHRcdFx0XHR0aW1lOnZhbHVlLnRpbWUsXHJcblx0XHRcdFx0dXNlcklkOnVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyksXHJcblx0XHRcdFx0d2VlazordGhpcy53ZWVrLFxyXG5cdFx0XHRcdHllYXI6K3RoaXMueWVhcixcclxuXHRcdFx0XHR3aGljaERheTordGhpcy53aGljaERheVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHZhbHVlLmlkKXtcclxuXHRcdFx0XHRkYXRhLmlkPXZhbHVlLmlkXHJcblx0XHRcdFx0bGV0IHJlcz1hd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRcdG1ldGhvZDoncG9zdCcsXHJcblx0XHRcdFx0XHR1cmw6Jy9hbm9ueW1vdXMvdXBkYXRlRGF5UGxhbicsXHJcblx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0RGF5UGxhbigpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Ly8g5pu05paw5pel5YaF5a65XHJcblx0XHRhc3luYyBoYW5kbGVVcGRhdGVDb250ZW50KGUsdmFsdWUyKXtcclxuXHRcdFx0bGV0IHt2YWx1ZX09ZS5kZXRhaWxcclxuXHRcdFx0bGV0IGRhdGE9e1xyXG5cdFx0XHRcdGNvbXBsZXRlOnZhbHVlMi5jb21wbGV0ZSxcclxuXHRcdFx0XHRjb250ZW50OnZhbHVlLFxyXG5cdFx0XHRcdHBhcmVudFR5cGU6dmFsdWUyLnBhcmVudFR5cGUsXHJcblx0XHRcdFx0dHlwZTp2YWx1ZTIudHlwZSxcclxuXHRcdFx0XHR0aW1lOnZhbHVlMi50aW1lLFxyXG5cdFx0XHRcdHVzZXJJZDp1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpLFxyXG5cdFx0XHRcdHdlZWs6K3RoaXMud2VlayxcclxuXHRcdFx0XHR5ZWFyOit0aGlzLnllYXIsXHJcblx0XHRcdFx0d2hpY2hEYXk6K3RoaXMud2hpY2hEYXlcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih2YWx1ZTIuaWQpe1xyXG5cdFx0XHRcdGRhdGEuaWQ9dmFsdWUyLmlkXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHJlcz1hd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVEYXlQbGFuJyxcclxuXHRcdFx0XHRkYXRhXHJcblx0XHRcdH0pXHJcblx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0dGhpcy5nZXREYXlQbGFuKClcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTon5pu05paw5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vIOaXpeiuoeWIkumAieaLqeaXtumXtFxyXG5cdFx0YXN5bmMgYmluZERhdGVDaGFuZ2UoZSx2YWx1ZTIpe1xyXG5cdFx0XHRsZXQge3ZhbHVlfT1lLmRldGFpbFxyXG5cdFx0XHRsZXQgZGF0YT17XHJcblx0XHRcdFx0Y29tcGxldGU6dmFsdWUyLmNvbXBsZXRlLFxyXG5cdFx0XHRcdGNvbnRlbnQ6dmFsdWUyLmNvbnRlbnQsXHJcblx0XHRcdFx0cGFyZW50VHlwZTp2YWx1ZTIucGFyZW50VHlwZSxcclxuXHRcdFx0XHR0eXBlOnZhbHVlMi50eXBlLFxyXG5cdFx0XHRcdHRpbWU6dmFsdWUsXHJcblx0XHRcdFx0dXNlcklkOnVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyksXHJcblx0XHRcdFx0d2VlazordGhpcy53ZWVrLFxyXG5cdFx0XHRcdHllYXI6K3RoaXMueWVhcixcclxuXHRcdFx0XHR3aGljaERheTordGhpcy53aGljaERheVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHZhbHVlMi5pZCl7XHJcblx0XHRcdFx0ZGF0YS5pZD12YWx1ZTIuaWRcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdG1ldGhvZDoncG9zdCcsXHJcblx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3VwZGF0ZURheVBsYW4nLFxyXG5cdFx0XHRcdGRhdGFcclxuXHRcdFx0fSlcclxuXHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHR0aGlzLmdldERheVBsYW4oKVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOifmm7TmlrDmlbDmja7lpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Ly8g5pu05paw5pel6K6h5YiS5YiG57G7XHJcblx0XHRhc3luYyBoYW5kbGVDaGFuZ2VUeXBlKGUsdmFsdWUyKXtcclxuXHRcdFx0bGV0IHt2YWx1ZX09ZS5kZXRhaWxcclxuXHRcdFx0IGxldCBkYXRhPXtcclxuXHRcdFx0XHRjb21wbGV0ZTp2YWx1ZTIuY29tcGxldGUsXHJcblx0XHRcdFx0Y29udGVudDp2YWx1ZTIuY29udGVudCxcclxuXHRcdFx0XHRwYXJlbnRUeXBlOnZhbHVlMi5wYXJlbnRUeXBlLFxyXG5cdFx0XHRcdHR5cGU6dmFsdWUsXHJcblx0XHRcdFx0dGltZTp2YWx1ZTIudGltZSxcclxuXHRcdFx0XHR1c2VySWQ6dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKSxcclxuXHRcdFx0XHR3ZWVrOit0aGlzLndlZWssXHJcblx0XHRcdFx0eWVhcjordGhpcy55ZWFyLFxyXG5cdFx0XHRcdHdoaWNoRGF5Oit0aGlzLndoaWNoRGF5XHJcblx0XHRcdH1cclxuXHRcdFx0aWYodmFsdWUyLmlkKXtcclxuXHRcdFx0XHRkYXRhLmlkPXZhbHVlMi5pZFxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCByZXM9YXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0bWV0aG9kOidwb3N0JyxcclxuXHRcdFx0XHR1cmw6Jy9hbm9ueW1vdXMvdXBkYXRlRGF5UGxhbicsXHJcblx0XHRcdFx0ZGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG5cdFx0XHRcdHRoaXMuZ2V0RGF5UGxhbigpXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6J+abtOaWsOaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDojrflj5bml6XorqHliJLmlbDmja5cclxuXHRcdGFzeW5jIGdldERheVBsYW4oKXtcclxuXHRcdFx0dGhpcy51cGRhdGUzPWZhbHNlXHJcblx0XHRcdGxldCBkYXRhPXtcclxuXHRcdFx0XHR1c2VySWQ6dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKSxcclxuXHRcdFx0XHR3ZWVrOit0aGlzLndlZWssXHJcblx0XHRcdFx0d2hpY2hEYXk6K3RoaXMud2hpY2hEYXksXHJcblx0XHRcdFx0eWVhcjordGhpcy55ZWFyXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHJlcz1hd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdHVybDonL2Fub255bW91cy9maW5kQWltc0J5Q29uZGl0aW9uRm9yRGF5UGxhbicsXHJcblx0XHRcdFx0ZGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCYmcmVzLmRhdGEucmVzdWx0KXtcclxuXHRcdFx0XHRsZXQge3Jlc3VsdH09cmVzLmRhdGFcclxuXHRcdFx0XHQvLyDmlbDmja7liJ3lp4vljJZcclxuXHRcdFx0XHR0aGlzLnRvZGF5VGhpbmdzPVtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW5kZXg6MSxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0XHRcdHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0XHRcdHR5cGU6JycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGluZGV4OjIsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHR0aW1lOicnLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdFx0XHR0eXBlOicnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OicnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbmRleDozLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHRcdFx0dGltZTonJyxcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHRcdFx0dHlwZTonJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW5kZXg6NCxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0XHRcdHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0XHRcdHR5cGU6JycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGluZGV4OjUsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHR0aW1lOicnLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdFx0XHR0eXBlOicnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OicnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbmRleDo2LFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHRcdFx0dGltZTonJyxcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHRcdFx0dHlwZTonJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW5kZXg6NyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0XHRcdHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0XHRcdHR5cGU6JycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGluZGV4OjgsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHR0aW1lOicnLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdFx0XHR0eXBlOicnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OicnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbmRleDo5LFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHRcdFx0dGltZTonJyxcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHRcdFx0dHlwZTonJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW5kZXg6MTAsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHR0aW1lOicnLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdFx0XHR0eXBlOicnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OicnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbmRleDoxMSxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0XHRcdHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0XHRcdHR5cGU6JycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGluZGV4OjEyLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHRcdFx0dGltZTonJyxcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHRcdFx0dHlwZTonJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW5kZXg6MTMsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHR0aW1lOicnLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdFx0XHR0eXBlOicnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OicnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbmRleDoxNCxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0XHRcdHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0XHRcdHR5cGU6JycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGluZGV4OjE1LFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHRcdFx0dGltZTonJyxcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHRcdFx0dHlwZTonJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW5kZXg6MTYsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHR0aW1lOicnLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdFx0XHR0eXBlOicnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OicnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbmRleDoxNyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0XHRcdHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0XHRcdHR5cGU6JycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHRpbmRleDoxOCxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0XHRcdHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0XHRcdHR5cGU6JycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdHRoaXMudG9kYXlTdW1tYXJ5PVtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XHRsZXQgaj0wXHJcblx0XHRcdFx0bGV0IGs9MFxyXG5cdFx0XHRcdFx0cmVzdWx0LmZvckVhY2goKHYsaSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZih2LnBhcmVudFR5cGU9PT0n5LuK5pel5LqL6aG5Jyl7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50b2RheVRoaW5nc1tqXT12ICBcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRvZGF5VGhpbmdzLmxlbmd0aD0xOFxyXG5cdFx0XHRcdFx0XHRcdGorK1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmKHYucGFyZW50VHlwZT09PSfku4rml6XmgLvnu5MnKXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRvZGF5U3VtbWFyeVtrXT12XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50b2RheVN1bW1hcnkubGVuZ3RoPTE4XHJcblx0XHRcdFx0XHRcdFx0aysrXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOifojrflj5bml6XorqHliJLlpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnVwZGF0ZTM9dHJ1ZVxyXG5cdFx0fSxcclxuXHRcdFx0XHJcblx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWRqC3pg6jliIbmlbDmja4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHRcdC8vIOS4i+S4gOWRqFxyXG5cdFx0aGFuZGxlTmV4dFdlZWsoKXtcclxuXHRcdFx0XHRpZiAodGhpcy53ZWVrICsgMSA9PT0gNTMpIHtcclxuXHRcdFx0XHRcdHRoaXMud2VlayA9IDFcclxuXHRcdFx0XHRcdHRoaXMueWVhcisrXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLndlZWsrK1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnRpbWU9dGhpcy50aW1lKzYwKjYwKjI0KjcqMTAwMFxyXG5cdFx0XHRcdGlmKHRoaXMuY2hhbmdlSW5kZXg9PTApe1xyXG5cdFx0XHRcdFx0dGhpcy5nZXRXZWVrbHlUYXJnZXQoKVxyXG5cdFx0XHRcdFx0dGhpcy5nZXRXZWVrbHlTdW1tYXJ5KClcclxuXHRcdFx0XHRcdHRoaXMuZ2V0U2hhcmVQbGFuKClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0RGF5UGxhbigpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuZ2V0RGF0ZU5vdygpXHJcblx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdC8vIOS4iuS4gOWRqFxyXG5cdFx0aGFuZGxlTGFzdFdlZWsoKXtcclxuXHRcdFx0aWYgKHRoaXMud2VlayAtIDEgPT09IDApIHtcclxuXHRcdFx0XHR0aGlzLndlZWsgPSA1MlxyXG5cdFx0XHRcdHRoaXMueWVhci0tXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMud2Vlay0tXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50aW1lPXRoaXMudGltZS02MCo2MCoyNCo3KjEwMDBcclxuXHRcdFx0aWYodGhpcy5jaGFuZ2VJbmRleD09MCl7XHJcblx0XHRcdFx0dGhpcy5nZXRXZWVrbHlUYXJnZXQoKVxyXG5cdFx0XHRcdHRoaXMuZ2V0V2Vla2x5U3VtbWFyeSgpXHJcblx0XHRcdFx0dGhpcy5nZXRTaGFyZVBsYW4oKVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLmdldERheVBsYW4oKVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuZ2V0RGF0ZU5vdygpXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDliIbkuqvmlbDmja7mm7TmlrBcclxuXHRcdGFzeW5jIGhhbmRsZVNoYXJlKGUsdmFsdWUyKXtcclxuXHRcdFx0bGV0IHt2YWx1ZX09ZS5kZXRhaWxcclxuXHRcdFx0bGV0IGRhdGE9e1xyXG5cdFx0XHRcdGNvbnRlbnQ6dmFsdWUsXHJcblx0XHRcdFx0dHlwZTp2YWx1ZTIudHlwZSxcclxuXHRcdFx0XHR0aW1lU2lnbjorKCcnICsgdGhpcy55ZWFyICsgdGhpcy53ZWVrKSxcclxuXHRcdFx0XHR1c2VyaWQ6dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHZhbHVlMi5pZCl7XHJcblx0XHRcdFx0ZGF0YS5pZD12YWx1ZTIuaWRcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmVzPSBhd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVTaGFyZScsXHJcblx0XHRcdFx0ZGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG5cdFx0XHRcdHRoaXMuZ2V0U2hhcmVQbGFuKClcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTon5pu05paw5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vIOWFtuS7luebruagh+abtOaWsFxyXG5cdFx0YXN5bmMgaGFuZGxlT3RoZXJDb21wbGV0ZSh2YWx1ZSl7XHJcblx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdGNvbXBsZXRlOiAhdmFsdWUuY29tcGxldGUsXHJcblx0XHRcdFx0Y29udGVudDogdmFsdWUuY29udGVudCxcclxuXHRcdFx0XHR0aW1lU2lnbjogKygnJyArIHRoaXMueWVhciArIHRoaXMud2VlayksXHJcblx0XHRcdFx0dHlwZTogdmFsdWUudHlwZSxcclxuXHRcdFx0XHR1c2VyaWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyksXHJcblx0XHRcdFx0aWQ6dmFsdWUuaWRcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyDlv4XpobvmmK/ph4zpnaLlt7Lnu4/loavlhpnkuoblhoXlrrnnmoTmiY3lj6/ku6XmiZPli75cclxuXHRcdFx0aWYodmFsdWUuaWQpe1xyXG5cdFx0XHRcdGxldCByZXMgPSBhd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsOiAnL2Fub255bW91cy91cGRhdGVXZWVrUGxhbicsXHJcblx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR0aGlzLndlZWtseVBsYW4uZm9yRWFjaCh2ID0+IHtcclxuXHRcdFx0XHRcdGlmICh2LmlkID09PSB2YWx1ZS5pZCkge1xyXG5cdFx0XHRcdFx0XHR2LmNvbXBsZXRlID0gIXYuY29tcGxldGVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0XHR0aGlzLmdldFdlZWtseVRhcmdldCgpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFx0XHJcblx0XHQvLyDlhbbku5bnm67moIfmm7TmlrBcclxuXHRcdGFzeW5jIGhhbmRsZU90aGVyUGxhbihlLHZhbHVlMil7XHJcblx0XHRcdGxldCB7dmFsdWV9PWUuZGV0YWlsXHJcblx0XHRcdGxldCBkYXRhPXtcclxuXHRcdFx0XHRjb21wbGV0ZTogdmFsdWUyLmNvbXBsZXRlLFxyXG5cdFx0XHRcdGNvbnRlbnQ6IHZhbHVlLFxyXG5cdFx0XHRcdHRpbWVTaWduOiArKCcnICsgdGhpcy55ZWFyICsgdGhpcy53ZWVrKSxcclxuXHRcdFx0XHR0eXBlOiB2YWx1ZTIudHlwZSxcclxuXHRcdFx0XHR1c2VyaWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJylcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih2YWx1ZTIuaWQpe1xyXG5cdFx0XHRcdGRhdGEuaWQ9dmFsdWUyLmlkXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHJlcz1hd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVXZWVrUGxhbicsXHJcblx0XHRcdFx0ZGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YS5tZXNzYWdlKVxyXG5cdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG5cdFx0XHRcdHRoaXMuZ2V0V2Vla2x5VGFyZ2V0KClcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTon5pu05paw5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vIOacrOWRqOebruagh+WujOaIkOeKtuaAgeabtOaWsFxyXG5cdFx0YXN5bmMgaGFuZGxlQ29tcGxldGUodmFsdWUpe1xyXG5cdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRjb21wbGV0ZTogIXZhbHVlLmNvbXBsZXRlLFxyXG5cdFx0XHRcdGNvbnRlbnQ6IHZhbHVlLmNvbnRlbnQsXHJcblx0XHRcdFx0dGltZVNpZ246ICsoJycgKyB0aGlzLnllYXIgKyB0aGlzLndlZWspLFxyXG5cdFx0XHRcdHR5cGU6IHZhbHVlLnR5cGUsXHJcblx0XHRcdFx0dXNlcmlkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpLFxyXG5cdFx0XHRcdGlkOnZhbHVlLmlkXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8g5b+F6aG75piv6YeM6Z2i5bey57uP5aGr5YaZ5LqG5YaF5a6555qE5omN5Y+v5Lul5omT5Yu+XHJcblx0XHRcdGlmKHZhbHVlLmlkKXtcclxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvdXBkYXRlV2Vla1BsYW4nLFxyXG5cdFx0XHRcdFx0ZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0V2Vla2x5VGFyZ2V0KClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTon5pu05paw5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHRcdFxyXG5cdFx0Ly8g5pys5ZGo55uu5qCH5pu05pawXHJcblx0XHRhc3luYyBoYW5kbGVVcGRhdGVQbGFuKGUsdmFsdWUyKXtcclxuXHRcdFx0bGV0IHt2YWx1ZX09ZS5kZXRhaWxcclxuXHRcdFx0bGV0IGRhdGE9e1xyXG5cdFx0XHRcdGNvbXBsZXRlOiB2YWx1ZTIuY29tcGxldGUsXHJcblx0XHRcdFx0Y29udGVudDogdmFsdWUsXHJcblx0XHRcdFx0dGltZVNpZ246ICsoJycgKyB0aGlzLnllYXIgKyB0aGlzLndlZWspLFxyXG5cdFx0XHRcdHR5cGU6IHZhbHVlMi50eXBlLFxyXG5cdFx0XHRcdHVzZXJpZDogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHZhbHVlMi5pZCl7XHJcblx0XHRcdFx0ZGF0YS5pZD12YWx1ZTIuaWRcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdG1ldGhvZDoncG9zdCcsXHJcblx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3VwZGF0ZVdlZWtQbGFuJyxcclxuXHRcdFx0XHRkYXRhXHJcblx0XHRcdH0pXHJcblx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0dGhpcy5nZXRXZWVrbHlUYXJnZXQoKVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOifmm7TmlrDmlbDmja7lpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFx0XHJcblx0XHQvLyDkuIrlkajmgLvnu5Mt5pys5ZGo5Yib5paw5LiO5pS26I63XHJcblx0XHRhc3luYyBoYW5kbGVIYXJ2ZXN0KGUsdmFsdWUyKXtcclxuXHRcdFx0bGV0IHt2YWx1ZX0gPSBlLmRldGFpbFxyXG5cdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0ICBjb250ZW50OiB2YWx1ZSxcclxuXHRcdFx0ICB0aW1lU2lnbjogKygnJyArIHRoaXMueWVhciArIHRoaXMud2VlayksXHJcblx0XHRcdCAgdHlwZTogdmFsdWUyLnR5cGUsXHJcblx0XHRcdCAgeWVhcjogdGhpcy55ZWFyLFxyXG5cdFx0XHQgIHVzZXJpZDogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHZhbHVlMi5pZCl7XHJcblx0XHRcdFx0ZGF0YS5pZD12YWx1ZTIuaWRcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvdXBkYXRlU3VtbWFyaXplJyxcclxuXHRcdFx0XHRkYXRhXHJcblx0XHRcdH0pXHJcblx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0dGhpcy5nZXRXZWVrbHlTdW1tYXJ5KClcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTon5pu05paw5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0Ly8g5LiK5ZGo5oC757uTLeWFi+acjemanOeijeeahOWvueetluWSjOaWueazlVxyXG5cdFx0YXN5bmMgaGFuZGxlU2VydmljZShlLHZhbHVlMil7XHJcblx0XHRcdGxldCB7dmFsdWV9ID0gZS5kZXRhaWxcclxuXHRcdFx0bGV0IGRhdGEgPSB7XG4gICAgICAgIGNvbnRlbnQ6IHZhbHVlLFxuICAgICAgICB0aW1lU2lnbjogKygnJyArIHRoaXMueWVhciArIHRoaXMud2VlayksXG4gICAgICAgIHR5cGU6IHZhbHVlMi50eXBlLFxuICAgICAgICB5ZWFyOiB0aGlzLnllYXIsXG4gICAgICAgIHVzZXJpZDogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKVxuICAgICAgfVxyXG5cdFx0XHRpZih2YWx1ZTIuaWQpe1xyXG5cdFx0XHRcdGRhdGEuaWQ9dmFsdWUyLmlkXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHJlcz1hd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHR1cmw6ICcvYW5vbnltb3VzL3VwZGF0ZVN1bW1hcml6ZScsXHJcblx0XHRcdFx0ZGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG5cdFx0XHRcdHRoaXMuZ2V0V2Vla2x5U3VtbWFyeSgpXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6J+abtOaWsOaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdC8vIOS4iuWRqOaAu+e7ky3mnKrlrozmiJDnm67moIfnmoTljp/lm6Dlj4rpmpznoo1cclxuXHRcdGFzeW5jIGhhbmRsZVJlYXNvbihlLHZhbHVlMil7XHJcblx0XHRcdGxldCB7dmFsdWV9ID1lLmRldGFpbFxyXG5cdFx0XHRsZXQgZGF0YSA9IHtcbiAgICAgICAgY29udGVudDogdmFsdWUsXG4gICAgICAgIHRpbWVTaWduOiArKCcnICsgdGhpcy55ZWFyICsgdGhpcy53ZWVrKSxcbiAgICAgICAgdHlwZTogdmFsdWUyLnR5cGUsXG4gICAgICAgIHllYXI6IHRoaXMueWVhcixcbiAgICAgICAgdXNlcmlkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpXG4gICAgICB9XHJcblx0XHRcdGlmKHZhbHVlMi5pZCl7XHJcblx0XHRcdFx0ZGF0YS5pZD12YWx1ZTIuaWRcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvdXBkYXRlU3VtbWFyaXplJyxcclxuXHRcdFx0XHRkYXRhXHJcblx0XHRcdH0pXHJcblx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0dGhpcy5nZXRXZWVrbHlTdW1tYXJ5KClcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTon5pu05paw5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0Ly8g5LiK5ZGo5oC757uTLeebruagh+WujOaIkOaDheWGtVxyXG5cdFx0YXN5bmMgaGFuZGxlV2Vla1BlcmZvcm1hbmNlKGUsdmFsdWUyKXtcclxuXHRcdFx0XHRsZXQge3ZhbHVlfSA9IGUuZGV0YWlsXHJcblx0XHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHRjb250ZW50OiB2YWx1ZSxcclxuXHRcdFx0XHRcdHRpbWVTaWduOiArKCcnICsgdGhpcy55ZWFyICsgdGhpcy53ZWVrKSxcclxuXHRcdFx0XHRcdHR5cGU6IHZhbHVlMi50eXBlLFxyXG5cdFx0XHRcdFx0eWVhcjogdGhpcy55ZWFyLFxyXG5cdFx0XHRcdFx0dXNlcmlkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKHZhbHVlMi5pZCl7XHJcblx0XHRcdFx0XHRkYXRhLmlkPXZhbHVlMi5pZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdFx0bWV0aG9kOidwb3N0JyxcclxuXHRcdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVTdW1tYXJpemUnLFxyXG5cdFx0XHRcdFx0ZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0V2Vla2x5U3VtbWFyeSgpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vIOaXtumXtOi9rOWMluS4uuWRqOaVsFxyXG5cdFx0Z2V0V2VlaygpIHtcclxuXHRcdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnRpbWUpO1xyXG5cdFx0XHRsZXQgYmVnaW5EYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuXHRcdFx0bGV0IHdlZWsgPSBNYXRoLmNlaWwoKHBhcnNlSW50KChkYXRlIC0gYmVnaW5EYXRlKSAvICgyNCAqIDYwICogNjAgKiAxMDAwKSkgKyAxICsgYmVnaW5EYXRlLmdldERheSgpKSAvIDcpO1xyXG5cdFx0XHR0aGlzLndlZWs9d2Vla1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Ly8g6I635Y+W5YiG5Lqr5pWw5o2uXHJcblx0XHRhc3luYyBnZXRTaGFyZVBsYW4oKXtcclxuXHRcdFx0dGhpcy51cGRhdGUyPWZhbHNlXHJcblx0XHRcdGxldCBkYXRhPXtcclxuXHRcdFx0XHR0aW1lU2lnbjogKygnJyArIHRoaXMueWVhciArIHRoaXMud2VlayksXHJcblx0XHRcdFx0dXNlcmlkOnVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJylcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdG1ldGhvZDoncG9zdCcsXHJcblx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3F1ZXJ5U2hhcmUnLFxyXG5cdFx0XHRcdGRhdGFcclxuXHRcdFx0fSlcclxuXHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwJiZyZXMuZGF0YS5yZXN1bHQpe1xyXG5cdFx0XHRcdGxldCB7cmVzdWx0fT1yZXMuZGF0YVxyXG5cdFx0XHRcdHRoaXMuc2hhcmVBcnJheT1bXHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICB7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgIHR5cGU6JzEnLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICBjb250ZW50OicnXHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICB0eXBlOicyJyxcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgfSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgdHlwZTonMycsXHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0XHRcdFx0XHQgICAgXSxcclxuXHRcdFx0XHRyZXN1bHQuZm9yRWFjaCh2PT57XHJcblx0XHRcdFx0XHR0aGlzLnNoYXJlQXJyYXkuZm9yRWFjaCgodmFsdWUsaW5kZXgpPT57XHJcblx0XHRcdFx0XHRcdGlmKHYudHlwZT09PXZhbHVlLnR5cGUpe1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hhcmVBcnJheVtpbmRleF09dlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6J+iOt+WPluWIhuS6q+aVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudXBkYXRlMj10cnVlXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDojrflj5blkajnm67moIfmlbDmja5cclxuXHRcdGFzeW5jIGdldFdlZWtseVRhcmdldCgpe1xyXG5cdFx0XHR0aGlzLnVwZGF0ZTE9ZmFsc2VcclxuXHRcdFx0bGV0IGRhdGE9e1xyXG5cdFx0XHRcdHRpbWVTaWduOiArKCcnICsgdGhpcy55ZWFyICsgdGhpcy53ZWVrKSxcclxuXHRcdFx0XHR1c2VyaWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJylcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdG1ldGhvZDoncG9zdCcsXHJcblx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3F1ZXJ5V2Vla1BsYW4nLFxyXG5cdFx0XHRcdGRhdGFcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDAmJnJlcy5kYXRhLnJlc3VsdCl7XHJcblx0XHRcdFx0Ly8g5Yid5aeL5YyW5pWw5o2uXHJcblx0XHRcdFx0dGhpcy53ZWVrbHlQbGFuPSBbe1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHR0aGlzLm90aGVyUGxhbj0gW3tcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+WtpuS5oOiuoeWIkicsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICflgaXlurforqHliJInLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo5Y+N55yBJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XHRsZXQge3Jlc3VsdH0gPXJlcy5kYXRhXHJcblx0XHRcdFx0cmVzdWx0LmZvckVhY2goKHYsIGkpID0+IHtcclxuXHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+acrOWRqOebruaghycpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy53ZWVrbHlQbGFuW2ldID0gdlxyXG5cdFx0XHRcdFx0XHR0aGlzLndlZWtseVBsYW4ubGVuZ3RoID0gMThcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMub3RoZXJQbGFuLmZvckVhY2goKHZhbHVlLGluZGV4KT0+e1xyXG5cdFx0XHRcdFx0XHRpZih2YWx1ZS50eXBlPT12LnR5cGUpe1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMub3RoZXJQbGFuW2luZGV4XT12XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6J+iOt+WPluaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudXBkYXRlMT10cnVlXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDojrflj5blkajmgLvnu5PmlbDmja5cclxuXHRcdGFzeW5jIGdldFdlZWtseVN1bW1hcnkoKSB7XHJcblx0XHRcdFx0dGhpcy51cGRhdGU9ZmFsc2VcclxuXHRcdFx0XHQvLyDojrflj5bmgLvnu5PmlbDmja5cclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdHVzZXJpZDogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKSxcclxuXHRcdFx0XHRcdHRpbWVTaWduOiArKCcnICsgdGhpcy55ZWFyICsgdGhpcy53ZWVrKSxcclxuXHRcdFx0XHRcdHllYXI6IHRoaXMueWVhclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvcXVlcnlTdW1tYXJpemUnLFxyXG5cdFx0XHRcdFx0ZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYgKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCYmcmVzLmRhdGEucmVzdWx0KSB7XHJcblx0XHRcdFx0XHRsZXR7cmVzdWx0fT1yZXMuZGF0YVxyXG5cdFx0XHRcdFx0dGhpcy53ZWVrUGVyZm9ybWFuY2UgPSBbe1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ+ebruagh+WujOaIkOaDheWGtScsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAn55uu5qCH5a6M5oiQ5oOF5Ya1JyxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ+ebruagh+WujOaIkOaDheWGtScsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAn55uu5qCH5a6M5oiQ5oOF5Ya1JyxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHRoaXMucmVhc29uID0gW3tcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+acquWujOaIkOebruagh+eahOWOn+WboOWPiumanOeijSdcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+acquWujOaIkOebruagh+eahOWOn+WboOWPiumanOeijSdcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+acquWujOaIkOebruagh+eahOWOn+WboOWPiumanOeijSdcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRcdHRoaXMuc2VydmljZSA9IFt7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflhYvmnI3pmpznoo3nmoTlr7nnrZblkozmlrnms5UnXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflhYvmnI3pmpznoo3nmoTlr7nnrZblkozmlrnms5UnXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflhYvmnI3pmpznoo3nmoTlr7nnrZblkozmlrnms5UnXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0dGhpcy5oYXJ2ZXN0ID0gW3tcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOWIm+aWsOS4juaUtuiOtydcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOWIm+aWsOS4juaUtuiOtydcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOWIm+aWsOS4juaUtuiOtydcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdGxldCBqPTA7XHJcblx0XHRcdFx0XHRcdGxldCBrPTA7XHJcblx0XHRcdFx0XHRcdGxldCBsPTA7XHJcblx0XHRcdFx0XHRcdGxldCBnPTA7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0W2ldLnR5cGUgPT0gJ+ebruagh+WujOaIkOaDheWGtScpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLndlZWtQZXJmb3JtYW5jZVtqXT1yZXN1bHRbaV1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMud2Vla1BlcmZvcm1hbmNlLmxlbmd0aCA9IDZcclxuXHRcdFx0XHRcdFx0XHRcdGorK1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmIChyZXN1bHRbaV0udHlwZSA9PSAn5pyq5a6M5oiQ55uu5qCH55qE5Y6f5Zug5Y+K6Zqc56KNJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucmVhc29uW2tdPXJlc3VsdFtpXVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMucmVhc29uLmxlbmd0aCA9IDNcclxuXHRcdFx0XHRcdFx0XHRrKytcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0W2ldLnR5cGUgPT0gJ+WFi+acjemanOeijeeahOWvueetluWSjOaWueazlScpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNlcnZpY2VbbF09cmVzdWx0W2ldXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNlcnZpY2UubGVuZ3RoID0gM1xyXG5cdFx0XHRcdFx0XHRcdFx0bCsrXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdFtpXS50eXBlID09ICfmnKzlkajliJvmlrDkuI7mlLbojrcnKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5oYXJ2ZXN0W2ddPXJlc3VsdFtpXVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5oYXJ2ZXN0Lmxlbmd0aCA9IDNcclxuXHRcdFx0XHRcdFx0XHRcdGcrK1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTon6I635Y+W5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlPXRydWVcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdFx0dGhpcy5nZXRXZWVrKClcclxuXHRcdFx0XHR0aGlzLmdldFdlZWtseVN1bW1hcnkoKVxyXG5cdFx0XHRcdHRoaXMuZ2V0V2Vla2x5VGFyZ2V0KClcclxuXHRcdFx0XHR0aGlzLmdldFNoYXJlUGxhbigpXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxyXG5wYWdle1xuICBiYWNrZ3JvdW5kOiAjRUZGM0Y2O1xufVxuLnRhYmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDUwcnB4O1xuICBwYWRkaW5nOiA3cnB4IDE0cnB4O1xuICBmb250LXNpemU6IDE1cnB4O1xuICAud2Vla1RhYntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMzZycHg7XG4gICAgd2lkdGg6IDI1MnJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cnB4O1xuICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgIGJhY2tncm91bmQ6cmdiYSgyNDgsMjQ4LDI0OCwxKTtcbiAgICAmPnZpZXd7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgICAgIC5vbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMkVDRTk0O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gIH1cbiAgLndlZWstY2hhbmdle1xuICAgIHdpZHRoOiAzNzhycHg7XG4gICAgaGVpZ2h0OiAzNnJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVycHg7XG4gICAgLnRhYiB7IFxuICAgICAgZmxleDogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAmOm50aC1jaGlsZCgyKXtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgICAgY29sb3I6ICMyRUNFOTQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxufVxuLndlZWt7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAwIDE0cnB4O1xuICAmLWxlZnR7XG4gICAgd2lkdGg6IDIyMXJweDtcbiAgICBib3JkZXI6IDFycHggc29saWQgIzFDNUU1NTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICYtaXRlbXtcbiAgICAgIGhlaWdodDogNTRycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICY6bnRoLWNoaWxkKDEpLCY6bnRoLWNoaWxkKDIpe1xuICAgICAgICBoZWlnaHQ6IDQwcnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjI3MDVEO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmb250LXNpemU6IDEzcnB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDkpLCY6bnRoLWNoaWxkKDEzKSwmOm50aC1jaGlsZCgxNyl7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjcwNUQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNycHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICBib3JkZXItYm90dG9tOiAwcnB4O1xuICAgICAgfVxuICAgICAgLm15dGV4dHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLXJpZ2h0e1xuICAgIHdpZHRoOiA0OTFycHg7XG4gICAgYm9yZGVyOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAmLXRpdGxle1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogODBycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjI3MDVEO1xuICAgICAgZm9udC1zaXplOiAxM3JweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgLmxlZnR7XG4gICAgICAgIHdpZHRoOiAzNnJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAucmlnaHR7XG4gICAgICAgIHdpZHRoOiA5MHJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY2VudGVye1xuICAgICAgICB3aWR0aDogMzY1cnB4O1xuICAgICAgICBmb250LXNpemU6IDE1cnB4O1xuICAgICAgICBib3JkZXItbGVmdDogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLmljb257XG4gICAgICAgICAgbWFyZ2luOiAwIDM2cnB4IDAgMjZycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9ue1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi1jb250ZW50e1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogNTRycHg7XG4gICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIC5sZWZ0LC5yaWdodCwuY2VudGVye1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDBycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5sZWZ0e1xuICAgICAgICB3aWR0aDogMzZycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNnJweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAgIH1cbiAgICAgIC5yaWdodHtcbiAgICAgICAgd2lkdGg6IDkwcnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgICAgfVxuICAgICAgLmNlbnRlcntcbiAgICAgICAgd2lkdGg6IDM2NXJweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgICAgIGJvcmRlci10b3A6IDBycHg7XG4gICAgICAgIC5teXRleHR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gXG59XG4uZm9vdGVye1xuICBoZWlnaHQ6IDI0MXJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDlycHggMTRycHggMDtcbiAgJi1sZWZ0e1xuICAgIHdpZHRoOiAyMjJycHg7XG4gICAgYmFja2dyb3VuZDogIzJFQ0U5NDtcbiAgICBmb250LXNpemU6IDQ5cnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAmLXJpZ2h0e1xuICAgIHdpZHRoOiA0OTFycHg7XG4gICAgYm9yZGVyOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAmLXRpdGxle1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogNzlycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjI3MDVEO1xuICAgICAgZm9udC1zaXplOiAxM3JweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgLnRpdGxlLWxlZnR7XG4gICAgICAgIHdpZHRoOiAxMjZycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnRpdGxlLXJpZ2h0e1xuICAgICAgICB3aWR0aDogMjMxcnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMnJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi1jb250ZW50e1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogNTRycHg7XG4gICAgICAuY29udGVudC1sZWZ0e1xuICAgICAgICB3aWR0aDogMTI2cnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgICAgICBmb250LXNpemU6IDEzcnB4O1xuICAgICAgICBjb2xvcjogIzFDNUU1NTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50LWNlbnRlciwuY29udGVudC1yaWdodHtcbiAgICAgICAgd2lkdGg6IDE4MnJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgICAgICBib3JkZXItbGVmdDogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgICAgICAmPnZpZXd7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubXl0ZXh0e1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cclxuLnNoYXJle1xyXG5cdG1hcmdpbjogOXJweCAxNHJweCAwO1xyXG5cdHdpZHRoOiA3MjJycHg7XHJcblx0Ym9yZGVyOiAxcnB4IHNvbGlkICMxQzVFNTU7XHJcblx0Ji10b3B7XHJcblx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0YmFja2dyb3VuZDogIzIyNzA1RDtcclxuXHRcdGZvbnQtc2l6ZTogMTNycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0Ji1jb250ZW50e1xyXG5cdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQmLWxlZnR7XHJcblx0XHRcdHdpZHRoOiA3MnJweDtcclxuXHRcdFx0Ym9yZGVyLXRvcDogMXJweCBzb2xpZCAjMUM1RTU1O1xyXG5cdFx0XHRmb250LXNpemU6IDIycnB4O1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdH1cclxuXHRcdCYtcmlnaHR7XHJcblx0XHRcdHdpZHRoOiA2NTBycHg7XHJcblx0XHRcdGJvcmRlci10b3A6IDFycHggc29saWQgIzFDNUU1NTtcclxuXHRcdFx0Ym9yZGVyLWxlZnQ6IDFycHggc29saWQgIzFDNUU1NTtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0dGV4dGFyZWF7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uZGF5cy10YWJ7XG4gIG1hcmdpbjogNXJweCAxNHJweCAycnB4O1xuICBwYWRkaW5nOiAwIDgxcnB4O1xuICBoZWlnaHQ6IDM2cnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVycHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICNENkQ2RDY7XG4gICY+dmlld3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5vbntcbiAgICBjb2xvcjogIzJFQ0U5NDtcbiAgICBib3JkZXItYm90dG9tOiAzcnB4IHNvbGlkICMyRUNFOTQ7XG4gIH1cbn1cclxuLmRhdGV7XG4gIGhlaWdodDogNDBycHg7XG4gIG1hcmdpbjogMCAxNHJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3JweDtcbiAgY29sb3I6ICM0MDQwNDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBpY2tlcntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1zaXplOiAjNDA0MDQwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAmPnZpZXd7XG4gICAgZm9udC1zaXplOiAyMHJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcnB4O1xuICB9XG59XHJcbi5kYWlseXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgMTRycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gICYtbGVmdHtcbiAgICB3aWR0aDogMzU1cnB4O1xuICAgIGJvcmRlcjogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgIC5jYXRlZ29yeXtcbiAgICAgIGhlaWdodDogNTRycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZm9udC1zaXplOiAxM3JweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgJj52aWV3e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAgICAgYmFja2dyb3VuZDogIzIyNzA1RDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICY6bnRoLWNoaWxkKDEpe1xuICAgICAgICAgIHdpZHRoOiAzNnJweDtcbiAgICAgICAgICBib3JkZXItbGVmdDowcnB4O1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIHdpZHRoOiA5MHJweDtcbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCgzKXtcbiAgICAgICAgICB3aWR0aDogMTkzcnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAmPnZpZXd7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgd2lkdGg6IDM2cnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDc5cnB4O1xuICAgICAgJj52aWV3e1xuICAgICAgICBib3JkZXItbGVmdDogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICY6bnRoLWNoaWxkKDEpe1xuICAgICAgICAgIHdpZHRoOiAzNnJweDtcbiAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICB3aWR0aDogOTBycHg7XG4gICAgICAgICAgcGlja2Vye1xuICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XG4gICAgICAgICAgICB0ZXh0e1xuICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNXJweDtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDhycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpudGgtY2hpbGQoMyl7XG4gICAgICAgICAgd2lkdGg6IDE5M3JweDtcbiAgICAgICAgICB0ZXh0YXJlYXtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgd2lkdGg6IDM2cnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLXJpZ2h0e1xuICAgIHdpZHRoOiAzNTVycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAmLXRpdGxle1xuICAgICAgaGVpZ2h0OiA1NHJweDtcbiAgICAgIGJhY2tncm91bmQ6ICMyMjcwNUQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNycHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dHtcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICBtYXJnaW46IDAgMjBycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmRlc3tcbiAgICAgIGhlaWdodDogNzlycHg7XG4gICAgICBib3JkZXI6IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBib3JkZXItdG9wOiAwcnB4O1xuICAgICAgdGV4dGFyZWF7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!**********************************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/monthygoals/monthygoals.vue?mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monthygoals_vue_vue_type_template_id_9124e9b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monthygoals.vue?vue&type=template&id=9124e9b4&mpType=page */ 32);\n/* harmony import */ var _monthygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monthygoals.vue?vue&type=script&lang=js&mpType=page */ 34);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _monthygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _monthygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _monthygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _monthygoals_vue_vue_type_template_id_9124e9b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _monthygoals_vue_vue_type_template_id_9124e9b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _monthygoals_vue_vue_type_template_id_9124e9b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/monthygoals/monthygoals.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDMEU7QUFDTDs7O0FBR3JFO0FBQ3lLO0FBQ3pLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21vbnRoeWdvYWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MTI0ZTliNCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbW9udGh5Z29hbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL21vbnRoeWdvYWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9tb250aHlnb2Fscy9tb250aHlnb2Fscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!****************************************************************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/monthygoals/monthygoals.vue?vue&type=template&id=9124e9b4&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_monthygoals_vue_vue_type_template_id_9124e9b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./monthygoals.vue?vue&type=template&id=9124e9b4&mpType=page */ 33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_monthygoals_vue_vue_type_template_id_9124e9b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_monthygoals_vue_vue_type_template_id_9124e9b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_monthygoals_vue_vue_type_template_id_9124e9b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_monthygoals_vue_vue_type_template_id_9124e9b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 33 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/fwh/chengzhangriji-uniapp/pages/monthygoals/monthygoals.vue?vue&type=template&id=9124e9b4&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", { staticClass: _vm._$s(1, "sc", "head"), attrs: { _i: 1 } }, [
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "tabbar"), attrs: { _i: 2 } },
        [
          _c("view", {
            staticClass: _vm._$s(3, "sc", "tab"),
            attrs: { _i: 3 },
            on: { click: _vm.handleLastMonth }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(4, "sc", "tab"), attrs: { _i: 4 } },
            [
              _c(
                "picker",
                {
                  attrs: { _i: 5 },
                  on: {
                    change: function($event) {
                      return _vm.bindDateChange($event)
                    }
                  }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(6, "sc", "picker"),
                      attrs: { _i: 6 }
                    },
                    [
                      _vm._v(
                        _vm._$s(6, "t0-0", _vm._s(_vm.year)) +
                          _vm._$s(6, "t0-1", _vm._s(_vm.month))
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _c("view", {
            staticClass: _vm._$s(7, "sc", "tab"),
            attrs: { _i: 7 },
            on: { click: _vm.handleNextMonth }
          })
        ]
      )
    ]),
    _c(
      "view",
      { staticClass: _vm._$s(8, "sc", "table"), attrs: { _i: 8 } },
      [
        _c("view", { staticClass: _vm._$s(9, "sc", "th"), attrs: { _i: 9 } }, [
          _c("view", {
            staticClass: _vm._$s(10, "sc", "td"),
            attrs: { _i: 10 }
          }),
          _c("view", {
            staticClass: _vm._$s(11, "sc", "td"),
            attrs: { _i: 11 }
          }),
          _c("view", {
            staticClass: _vm._$s(12, "sc", "td"),
            attrs: { _i: 12 }
          }),
          _c("view", {
            staticClass: _vm._$s(13, "sc", "td"),
            attrs: { _i: 13 }
          }),
          _c("view", {
            staticClass: _vm._$s(14, "sc", "td"),
            attrs: { _i: 14 }
          })
        ]),
        _vm._l(_vm._$s(15, "f", { forItems: _vm.table }), function(
          value,
          index,
          $20,
          $30
        ) {
          return [
            _c(
              "view",
              {
                key: _vm._$s(15, "f", {
                  forIndex: $20,
                  keyIndex: 0,
                  key: value.id + "_0"
                }),
                staticClass: _vm._$s("16-" + $30, "sc", "tr"),
                attrs: { _i: "16-" + $30 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("17-" + $30, "sc", "td1"),
                    attrs: { _i: "17-" + $30 }
                  },
                  [_vm._v(_vm._$s("17-" + $30, "t0-0", _vm._s(value.name)))]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("18-" + $30, "sc", "td2"),
                    attrs: { _i: "18-" + $30 }
                  },
                  [
                    _vm._l(
                      _vm._$s(19 + "-" + $30, "f", {
                        forItems: value.children
                      }),
                      function(value2, index2, $21, $31) {
                        return _vm._$s("19-" + $30 + "-" + $31, "i", _vm.update)
                          ? [
                              _c(
                                "view",
                                {
                                  key: _vm._$s(19 + "-" + $30, "f", {
                                    forIndex: $21,
                                    keyIndex: 0,
                                    key: index2 + "_0"
                                  }),
                                  staticClass: _vm._$s(
                                    "20-" + $30 + "-" + $31,
                                    "sc",
                                    "aa"
                                  ),
                                  attrs: { _i: "20-" + $30 + "-" + $31 }
                                },
                                [
                                  _c(
                                    "view",
                                    {
                                      staticClass: _vm._$s(
                                        "21-" + $30 + "-" + $31,
                                        "sc",
                                        "td3"
                                      ),
                                      attrs: { _i: "21-" + $30 + "-" + $31 }
                                    },
                                    [
                                      _c(
                                        "view",
                                        {
                                          staticClass: _vm._$s(
                                            "22-" + $30 + "-" + $31,
                                            "sc",
                                            "td3-son"
                                          ),
                                          attrs: { _i: "22-" + $30 + "-" + $31 }
                                        },
                                        [
                                          _c("input", {
                                            attrs: {
                                              value: _vm._$s(
                                                "23-" + $30 + "-" + $31,
                                                "a-value",
                                                value2.importanceLevel
                                              ),
                                              _i: "23-" + $30 + "-" + $31
                                            },
                                            on: {
                                              blur: function($event) {
                                                return _vm.handleLevel(
                                                  $event,
                                                  value2
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      ),
                                      _c(
                                        "view",
                                        {
                                          staticClass: _vm._$s(
                                            "24-" + $30 + "-" + $31,
                                            "sc",
                                            "td3-son"
                                          ),
                                          attrs: { _i: "24-" + $30 + "-" + $31 }
                                        },
                                        [
                                          _c("textarea", {
                                            attrs: {
                                              value: _vm._$s(
                                                "25-" + $30 + "-" + $31,
                                                "a-value",
                                                value2.content
                                              ),
                                              _i: "25-" + $30 + "-" + $31
                                            },
                                            on: {
                                              blur: function($event) {
                                                return _vm.handleContent(
                                                  $event,
                                                  value2
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      ),
                                      _c(
                                        "view",
                                        {
                                          staticClass: _vm._$s(
                                            "26-" + $30 + "-" + $31,
                                            "sc",
                                            "td3-son"
                                          ),
                                          attrs: { _i: "26-" + $30 + "-" + $31 }
                                        },
                                        [
                                          _c("textarea", {
                                            attrs: {
                                              value: _vm._$s(
                                                "27-" + $30 + "-" + $31,
                                                "a-value",
                                                value2.aimMeasures
                                              ),
                                              _i: "27-" + $30 + "-" + $31
                                            },
                                            on: {
                                              blur: function($event) {
                                                return _vm.handleMeasures(
                                                  $event,
                                                  value2
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      ),
                                      _c("view", {
                                        staticClass: _vm._$s(
                                          "28-" + $30 + "-" + $31,
                                          "sc",
                                          "td3-son"
                                        ),
                                        class: _vm._$s(
                                          "28-" + $30 + "-" + $31,
                                          "c",
                                          value2.complete == true
                                            ? "iconfont icon-zhengque"
                                            : ""
                                        ),
                                        attrs: { _i: "28-" + $30 + "-" + $31 },
                                        on: {
                                          click: function($event) {
                                            return _vm.handleComplete(value2)
                                          }
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            ]
                          : _vm._e()
                      }
                    )
                  ],
                  2
                )
              ]
            )
          ]
        })
      ],
      2
    ),
    _c(
      "view",
      { staticClass: _vm._$s(29, "sc", "box"), attrs: { _i: 29 } },
      [
        _c("view", {
          staticClass: _vm._$s(30, "sc", "quarter"),
          attrs: { _i: 30 }
        }),
        _c("view", {
          staticClass: _vm._$s(31, "sc", "unfinished-part"),
          attrs: { _i: 31 }
        }),
        _vm._l(_vm._$s(32, "f", { forItems: _vm.reasonArr }), function(
          value,
          index,
          $22,
          $32
        ) {
          return _vm._$s("32-" + $32, "i", _vm.update1)
            ? [
                _c(
                  "view",
                  {
                    key: _vm._$s(32, "f", {
                      forIndex: $22,
                      keyIndex: 0,
                      key: value.type + "_0"
                    }),
                    staticClass: _vm._$s("33-" + $32, "sc", "reason"),
                    attrs: { _i: "33-" + $32 }
                  },
                  [
                    _c("text", [
                      _vm._v(_vm._$s("34-" + $32, "t0-0", _vm._s(value.type)))
                    ]),
                    _c("textarea", {
                      attrs: {
                        value: _vm._$s("35-" + $32, "a-value", value.content),
                        _i: "35-" + $32
                      },
                      on: {
                        blur: function($event) {
                          return _vm.handleReason($event, value)
                        }
                      }
                    })
                  ]
                )
              ]
            : _vm._e()
        })
      ],
      2
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 34 */
/*!**********************************************************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/pages/monthygoals/monthygoals.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_monthygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./monthygoals.vue?vue&type=script&lang=js&mpType=page */ 35);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_monthygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_monthygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_monthygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_monthygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_monthygoals_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlrQixDQUFnQixvbEJBQUcsRUFBQyIsImZpbGUiOiIzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb250aHlnb2Fscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vbnRoeWdvYWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/fwh/chengzhangriji-uniapp/pages/monthygoals/monthygoals.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 8));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _myAxios = __webpack_require__(/*! ../../utils/myAxios.js */ 11);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  data: function data() {\n    return {\n      table: [{\n        id: 1,\n        name: '工作指标',\n        children: [{\n          complete: false,\n          content: '',\n          importanceLevel: '',\n          aimMeasures: '',\n          month: '',\n          type: '工作指标',\n          year: new Date().getFullYear() },\n\n        {\n          complete: false,\n          content: '',\n          importanceLevel: '',\n          aimMeasures: '',\n          month: '',\n          type: '工作指标',\n          year: new Date().getFullYear() },\n\n        {\n          complete: false,\n          content: '',\n          importanceLevel: '',\n          aimMeasures: '',\n          month: '',\n          type: '工作指标',\n          year: new Date().getFullYear() },\n\n        {\n          complete: false,\n          content: '',\n          importanceLevel: '',\n          aimMeasures: '',\n          month: '',\n          type: '工作指标',\n          year: new Date().getFullYear() },\n\n        {\n          complete: false,\n          content: '',\n          importanceLevel: '',\n          aimMeasures: '',\n          month: '',\n          type: '工作指标',\n          year: new Date().getFullYear() }] },\n\n\n\n      {\n        id: 2,\n        name: '其他目标',\n        children: [{\n          complete: false,\n          content: '',\n          importanceLevel: '学习计划',\n          aimMeasures: '',\n          month: '',\n          type: '其他目标',\n          year: new Date().getFullYear() },\n\n        {\n          complete: false,\n          content: '',\n          importanceLevel: '健康计划',\n          aimMeasures: '',\n          month: '',\n          type: '其他目标',\n          year: new Date().getFullYear() },\n\n        {\n          complete: false,\n          content: '',\n          importanceLevel: '本季度反省',\n          aimMeasures: '',\n          month: '',\n          type: '其他目标',\n          year: new Date().getFullYear() }] }],\n\n\n\n\n      reasonArr: [{\n        content: '',\n        type: '未完成目标的障碍和原因' },\n\n      {\n        content: '',\n        type: '客服障碍的对策和方法' },\n\n      {\n        content: '',\n        type: '本月份创新与收获' }],\n\n\n      month: new Date().getMonth() + 1,\n      year: new Date().getFullYear(),\n      update: true,\n      update1: true };\n\n  },\n  methods: {\n\n    // 自选时间\n    bindDateChange: function bindDateChange(e) {var\n      value = e.detail.value;\n      this.month = new Date(value).getMonth() + 1;\n      this.year = new Date(value).getFullYear();\n      this.getUserQuarter();\n      this.getUserSummary();\n    },\n\n    // 上月\n    handleLastMonth: function handleLastMonth() {\n      if (this.month - 1 == 0) {\n        this.month = 12;\n        this.year--;\n      } else {\n        this.month--;\n      }\n      this.getUserQuarter();\n      this.getUserSummary();\n    },\n\n    //下月\n    handleNextMonth: function handleNextMonth() {\n      if (this.month + 1 == 13) {\n        this.month = 1;\n        this.year++;\n      } else {\n        this.month++;\n      }\n      this.getUserQuarter();\n      this.getUserSummary();\n    },\n\n    // 更新月度总结\n    handleReason: function handleReason(e, value2) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var value, data, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  content: value,\n                  month: _this.month,\n                  type: value2.type,\n                  userid: uni.getStorageSync('userID'),\n                  year: _this.year };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateSummarize',\n                    data: data }));case 5:res = _context.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this.getUserSummary();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n\n    // 更新完成状态\n    handleComplete: function handleComplete(value2) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var data, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                data = {\n                  complete: !value2.complete,\n                  content: value2.content,\n                  importanceLevel: value2.importanceLevel,\n                  aimMeasures: value2.aimMeasures,\n                  type: value2.type,\n                  month: _this2.month,\n                  userId: uni.getStorageSync('userID'),\n                  year: _this2.year };\n\n                // 有ID才能选择打勾\n                if (!value2.id) {_context2.next = 7;break;}\n                data.id = value2.id;_context2.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateOrInsertAirms',\n                    data: data }));case 5:res = _context2.sent;\n\n                // console.log(data)\n                if (res.data.statusCode == 200) {\n                  _this2.getUserQuarter();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context2.stop();}}}, _callee2);}))();\n\n    },\n\n    // 更新方法和措施\n    handleMeasures: function handleMeasures(e, value2) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var value, data, res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value2.content,\n                  importanceLevel: value2.importanceLevel,\n                  aimMeasures: value,\n                  type: value2.type,\n                  month: _this3.month,\n                  userId: uni.getStorageSync('userID'),\n                  year: _this3.year };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context3.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateOrInsertAirms',\n                    data: data }));case 5:res = _context3.sent;\n\n                // console.log(data)\n                if (res.data.statusCode == 200) {\n                  _this3.getUserQuarter();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n\n    // 更新目标内容\n    handleContent: function handleContent(e, value2) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var value, data, res;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value,\n                  importanceLevel: value2.importanceLevel,\n                  aimMeasures: value2.aimMeasures,\n                  type: value2.type,\n                  month: _this4.month,\n                  userId: uni.getStorageSync('userID'),\n                  year: _this4.year };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context4.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateOrInsertAirms',\n                    data: data }));case 5:res = _context4.sent;\n\n                // console.log(data)\n                if (res.data.statusCode == 200) {\n                  _this4.getUserQuarter();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context4.stop();}}}, _callee4);}))();\n    },\n\n    //更新类别信息\n    handleLevel: function handleLevel(e, value2) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var value, data, res;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value2.content,\n                  importanceLevel: value,\n                  aimMeasures: value2.aimMeasures,\n                  type: value2.type,\n                  month: _this5.month,\n                  userId: uni.getStorageSync('userID'),\n                  year: _this5.year };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }\n                // console.log(data)\n                _context5.next = 5;return (0, _myAxios.myAxios)({\n                  method: 'post',\n                  url: '/anonymous/updateOrInsertAirms',\n                  data: data });case 5:res = _context5.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this5.getUserQuarter();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context5.stop();}}}, _callee5);}))();\n    },\n\n    // 获取用户月度信息\n    getUserQuarter: function getUserQuarter() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var res, _res$data, otherTarget, workIndex;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:\n                _this6.update = false;_context6.next = 3;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/findAimsByCondition',\n                    data: {\n                      month: _this6.month,\n                      userId: uni.getStorageSync('userID'),\n                      year: _this6.year } }));case 3:res = _context6.sent;\n\n\n                if (res.data.statusCode == 200 && res.data.otherTarget && res.data.workIndex) {\n                  // 更新页面数据之前先还原初始数据\n                  _this6.table = [{\n                    id: 1,\n                    name: '工作指标',\n                    children: [{\n                      complete: false,\n                      content: '',\n                      importanceLevel: '',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '工作指标',\n                      year: new Date().getFullYear() },\n\n                    {\n                      complete: false,\n                      content: '',\n                      importanceLevel: '',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '工作指标',\n                      year: new Date().getFullYear() },\n\n                    {\n                      complete: false,\n                      content: '',\n                      importanceLevel: '',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '工作指标',\n                      year: new Date().getFullYear() },\n\n                    {\n                      complete: false,\n                      content: '',\n                      importanceLevel: '',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '工作指标',\n                      year: new Date().getFullYear() },\n\n                    {\n                      complete: false,\n                      content: '',\n                      importanceLevel: '',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '工作指标',\n                      year: new Date().getFullYear() }] },\n\n\n\n                  {\n                    id: 2,\n                    name: '其他目标',\n                    children: [{\n                      complete: false,\n                      content: '',\n                      importanceLevel: '学习计划',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '其他目标',\n                      year: new Date().getFullYear() },\n\n                    {\n                      complete: false,\n                      content: '',\n                      importanceLevel: '健康计划',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '其他目标',\n                      year: new Date().getFullYear() },\n\n                    {\n                      complete: false,\n                      content: '',\n                      importanceLevel: '本季度反省',\n                      aimMeasures: '',\n                      quarter: '',\n                      quarterOrMonthFlag: 'quarter',\n                      type: '其他目标',\n                      year: new Date().getFullYear() }] }];_res$data =\n\n\n\n\n                  res.data, otherTarget = _res$data.otherTarget, workIndex = _res$data.workIndex;\n                  workIndex.forEach(function (v, i) {\n                    _this6.table[0].children[i] = v;\n                    _this6.table[0].children.length = 5;\n                  });\n                  otherTarget.forEach(function (v, i) {\n                    if (v.importanceLevel == '学习计划') {\n                      _this6.table[1].children[0] = v;\n                    } else if (v.importanceLevel == '健康计划') {\n                      _this6.table[1].children[1] = v;\n                    } else if (v.importanceLevel == '本季度反省') {\n                      _this6.table[1].children[2] = v;\n                    } else {\n                      table[1].children.push(v);\n                    }\n                    _this6.table[1].children.length = 3;\n                  });\n                } else {\n                  uni.showToast({\n                    title: '获取季度信息失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                // console.log(this.table)\n                _this6.update = true;case 6:case \"end\":return _context6.stop();}}}, _callee6);}))();\n    },\n\n    // 获取用户月度总结\n    getUserSummary: function getUserSummary() {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var res, result;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:\n                _this7.update1 = false;_context7.next = 3;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/querySummarize',\n                    data: {\n                      month: _this7.month,\n                      userid: uni.getStorageSync('userID'),\n                      year: _this7.year } }));case 3:res = _context7.sent;\n\n\n                if (res.data.statusCode == 200 && res.data.result) {\n                  // 初始化数据\n                  _this7.reasonArr = [{\n                    content: '',\n                    type: '未完成目标的障碍和原因' },\n\n                  {\n                    content: '',\n                    type: '客服障碍的对策和方法' },\n\n                  {\n                    content: '',\n                    type: '本季度创新与收获' }];\n\n\n                  result = res.data.result;\n                  result.forEach(function (v) {\n                    for (var i = 0; i < _this7.reasonArr.length; i++) {\n                      if (v.type == _this7.reasonArr[i].type) {\n                        _this7.reasonArr[i] = v;\n                      }\n                    }\n                  });\n                } else {\n                  uni.showToast({\n                    title: '获取月总结失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                _this7.update1 = true;case 6:case \"end\":return _context7.stop();}}}, _callee7);}))();\n    } },\n\n  onLoad: function onLoad() {\n    this.getUserQuarter();\n    this.getUserSummary();\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbW9udGh5Z29hbHMvbW9udGh5Z29hbHMudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUVBLHFFO0FBQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBLGFBREE7QUFFQSxvQkFGQTtBQUdBO0FBQ0EseUJBREE7QUFFQSxxQkFGQTtBQUdBLDZCQUhBO0FBSUEseUJBSkE7QUFLQSxtQkFMQTtBQU1BLHNCQU5BO0FBT0Esd0NBUEE7O0FBU0E7QUFDQSx5QkFEQTtBQUVBLHFCQUZBO0FBR0EsNkJBSEE7QUFJQSx5QkFKQTtBQUtBLG1CQUxBO0FBTUEsc0JBTkE7QUFPQSx3Q0FQQSxFQVRBOztBQWtCQTtBQUNBLHlCQURBO0FBRUEscUJBRkE7QUFHQSw2QkFIQTtBQUlBLHlCQUpBO0FBS0EsbUJBTEE7QUFNQSxzQkFOQTtBQU9BLHdDQVBBLEVBbEJBOztBQTJCQTtBQUNBLHlCQURBO0FBRUEscUJBRkE7QUFHQSw2QkFIQTtBQUlBLHlCQUpBO0FBS0EsbUJBTEE7QUFNQSxzQkFOQTtBQU9BLHdDQVBBLEVBM0JBOztBQW9DQTtBQUNBLHlCQURBO0FBRUEscUJBRkE7QUFHQSw2QkFIQTtBQUlBLHlCQUpBO0FBS0EsbUJBTEE7QUFNQSxzQkFOQTtBQU9BLHdDQVBBLEVBcENBLENBSEE7Ozs7QUFrREE7QUFDQSxhQURBO0FBRUEsb0JBRkE7QUFHQTtBQUNBLHlCQURBO0FBRUEscUJBRkE7QUFHQSxpQ0FIQTtBQUlBLHlCQUpBO0FBS0EsbUJBTEE7QUFNQSxzQkFOQTtBQU9BLHdDQVBBOztBQVNBO0FBQ0EseUJBREE7QUFFQSxxQkFGQTtBQUdBLGlDQUhBO0FBSUEseUJBSkE7QUFLQSxtQkFMQTtBQU1BLHNCQU5BO0FBT0Esd0NBUEEsRUFUQTs7QUFrQkE7QUFDQSx5QkFEQTtBQUVBLHFCQUZB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REFGQTtBQUdBO0FBQ0EseUNBREE7QUFFQSwwREFGQTtBQUdBLHVDQUhBLEVBSEEsR0FGQSxTQUVBLEdBRkE7OztBQVdBO0FBQ0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsdUNBRkE7O0FBSUE7QUFDQSwrQkFEQTtBQUVBLHNDQUZBLEVBSkE7O0FBUUE7QUFDQSwrQkFEQTtBQUVBLG9DQUZBLEVBUkE7OztBQWFBLHdCQWZBLEdBZUEsUUFmQSxDQWVBLE1BZkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBTkE7QUFPQSxpQkF2QkEsTUF1QkE7QUFDQTtBQUNBLHdDQURBO0FBRUEsZ0NBRkE7QUFHQSxpQ0FIQTs7QUFLQTtBQUNBLHNDQXpDQTtBQTBDQSxLQXBYQSxFQXpHQTs7QUErZEEsUUEvZEEsb0JBK2RBO0FBQ0E7QUFDQTtBQUNBLEdBbGVBLEUiLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3PlxuXHRcdDwhLS0g6aG26YOodGFi5qCPIC0tPlxuXHRcdDx2aWV3IGNsYXNzPVwiaGVhZFwiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJiYXJcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJcIiBAdGFwPVwiaGFuZGxlTGFzdE1vbnRoXCI+5LiK5pyIPC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhYlwiPlxuXHRcdFx0XHRcdDxwaWNrZXIgbW9kZT1cImRhdGVcIiBAY2hhbmdlPVwiYmluZERhdGVDaGFuZ2UoJGV2ZW50KVwiPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwaWNrZXJcIj57e3llYXJ9feW5tOesrCB7e21vbnRofX0g5pyIPC92aWV3PlxuXHRcdFx0XHRcdDwvcGlja2VyPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGFiXCIgQHRhcD1cImhhbmRsZU5leHRNb250aFwiPuS4i+aciDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0XG5cdFx0PCEtLSDooajmoLzpg6jliIYgLS0+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGFibGVcIj5cblx0XHRcdFx0XHQ8IS0tIOihqOWktCAtLT5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRoXCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRkXCI+57G75YirPC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZFwiPumHjeimgee6p+WIqzwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGRcIj7nm67moIflhoXlrrk8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRkXCI+5pa55rOV5ZKM5o6q5pa9PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZFwiPuWujOaIkOaJk+WLvjwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PCEtLSDooajmoLzkuLvkvZMgLS0+XG5cdFx0XHRcdFx0PGJsb2NrIHYtZm9yPVwiKHZhbHVlLGluZGV4KSBpbiB0YWJsZVwiIDprZXk9XCJ2YWx1ZS5pZFwiPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0clwiPlxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRkMVwiPnt7dmFsdWUubmFtZX19PC92aWV3PlxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRkMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxibG9jayB2LWlmPVwidXBkYXRlXCIgdi1mb3I9XCIodmFsdWUyLGluZGV4MikgaW4gdmFsdWUuY2hpbGRyZW5cIiA6a2V5PVwiaW5kZXgyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGQzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZDMtc29uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICA8aW5wdXQgdHlwZT1cInRleHRcIiA6dmFsdWU9XCJ2YWx1ZTIuaW1wb3J0YW5jZUxldmVsXCIgQGJsdXI9XCJoYW5kbGVMZXZlbCgkZXZlbnQsdmFsdWUyKVwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGQzLXNvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgPHRleHRhcmVhIDp2YWx1ZT1cInZhbHVlMi5jb250ZW50XCIgQGJsdXI9XCJoYW5kbGVDb250ZW50KCRldmVudCx2YWx1ZTIpXCIgY2xhc3M9XCJcIj48L3RleHRhcmVhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRkMy1zb25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIDx0ZXh0YXJlYSA6dmFsdWU9XCJ2YWx1ZTIuYWltTWVhc3VyZXNcIiBjbGFzcz1cIlwiIEBibHVyPVwiaGFuZGxlTWVhc3VyZXMoJGV2ZW50LHZhbHVlMilcIj48L3RleHRhcmVhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRkMy1zb25cIiA6Y2xhc3M9XCJ2YWx1ZTIuY29tcGxldGU9PXRydWU/J2ljb25mb250IGljb24temhlbmdxdWUnOicnXCIgQHRhcD1cImhhbmRsZUNvbXBsZXRlKHZhbHVlMilcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Jsb2NrPlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC9ibG9jaz5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdFx0PCEtLSDlraPluqbmgLvnu5Ppg6jliIYgLS0+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm94XCI+XG5cdFx0XHRcdCAgPHZpZXcgY2xhc3M9XCJxdWFydGVyXCI+5pys5pyI5bqm55qE55uu5qCH5oC757uTKOivt+WcqOavj+Wto+W6puacq+WbnuWIsOacrOS4muWvueW6lOS4iuihqOaAu+e7k+WIhuaekCk8L3ZpZXc+XG5cdFx0XHRcdCAgPHZpZXcgY2xhc3M9XCJ1bmZpbmlzaGVkLXBhcnRcIj5cblx0XHRcdFx0ICA8L3ZpZXc+XG5cdFx0XHRcdCAgPGJsb2NrIHYtaWY9XCJ1cGRhdGUxXCIgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIHJlYXNvbkFyclwiIDprZXk9XCJ2YWx1ZS50eXBlXCI+XG5cdFx0XHRcdCAgICA8dmlldyBjbGFzcz1cInJlYXNvblwiPlxuXHRcdFx0XHQgICAgICA8dGV4dD57e3ZhbHVlLnR5cGV9fTwvdGV4dD5cblx0XHRcdFx0ICAgICAgPHRleHRhcmVhIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIiBAYmx1cj1cImhhbmRsZVJlYXNvbigkZXZlbnQsdmFsdWUpXCI+PC90ZXh0YXJlYT5cblx0XHRcdFx0ICAgIDwvdmlldz5cblx0XHRcdFx0ICA8L2Jsb2NrPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cblxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQge215QXhpb3N9IGZyb20gJy4uLy4uL3V0aWxzL215QXhpb3MuanMnXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGFibGU6IFt7XG5cdFx0XHRcdFx0XHRpZDogMSxcblx0XHRcdFx0XHRcdG5hbWU6ICflt6XkvZzmjIfmoIcnLFxuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IFt7XG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdGltcG9ydGFuY2VMZXZlbDogJycsXG5cdFx0XHRcdFx0XHRcdFx0YWltTWVhc3VyZXM6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdG1vbnRoOiAnJyxcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAn5bel5L2c5oyH5qCHJyxcblx0XHRcdFx0XHRcdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcblx0XHRcdFx0XHRcdFx0XHRpbXBvcnRhbmNlTGV2ZWw6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdGFpbU1lYXN1cmVzOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRtb250aDogJycsXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+W3peS9nOaMh+aghycsXG5cdFx0XHRcdFx0XHRcdFx0eWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXG5cdFx0XHRcdFx0XHRcdFx0aW1wb3J0YW5jZUxldmVsOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRhaW1NZWFzdXJlczogJycsXG5cdFx0XHRcdFx0XHRcdFx0bW9udGg6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflt6XkvZzmjIfmoIcnLFxuXHRcdFx0XHRcdFx0XHRcdHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdGltcG9ydGFuY2VMZXZlbDogJycsXG5cdFx0XHRcdFx0XHRcdFx0YWltTWVhc3VyZXM6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdG1vbnRoOiAnJyxcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAn5bel5L2c5oyH5qCHJyxcblx0XHRcdFx0XHRcdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcblx0XHRcdFx0XHRcdFx0XHRpbXBvcnRhbmNlTGV2ZWw6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdGFpbU1lYXN1cmVzOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRtb250aDogJycsXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+W3peS9nOaMh+aghycsXG5cdFx0XHRcdFx0XHRcdFx0eWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpZDogMixcblx0XHRcdFx0XHRcdG5hbWU6ICflhbbku5bnm67moIcnLFxuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IFt7XG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdGltcG9ydGFuY2VMZXZlbDogJ+WtpuS5oOiuoeWIkicsXG5cdFx0XHRcdFx0XHRcdFx0YWltTWVhc3VyZXM6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdG1vbnRoOiAnJyxcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAn5YW25LuW55uu5qCHJyxcblx0XHRcdFx0XHRcdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcblx0XHRcdFx0XHRcdFx0XHRpbXBvcnRhbmNlTGV2ZWw6ICflgaXlurforqHliJInLFxuXHRcdFx0XHRcdFx0XHRcdGFpbU1lYXN1cmVzOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRtb250aDogJycsXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+WFtuS7luebruaghycsXG5cdFx0XHRcdFx0XHRcdFx0eWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXG5cdFx0XHRcdFx0XHRcdFx0aW1wb3J0YW5jZUxldmVsOiAn5pys5a2j5bqm5Y+N55yBJyxcblx0XHRcdFx0XHRcdFx0XHRhaW1NZWFzdXJlczogJycsXG5cdFx0XHRcdFx0XHRcdFx0bW9udGg6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflhbbku5bnm67moIcnLFxuXHRcdFx0XHRcdFx0XHRcdHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0cmVhc29uQXJyOiBbe1xuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pyq5a6M5oiQ55uu5qCH55qE6Zqc56KN5ZKM5Y6f5ZugJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXG5cdFx0XHRcdFx0XHR0eXBlOiAn5a6i5pyN6Zqc56KN55qE5a+5562W5ZKM5pa55rOVJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5pyI5Lu95Yib5paw5LiO5pS26I63J1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0bW9udGg6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEsXG5cdFx0XHRcdHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcblx0XHRcdFx0dXBkYXRlOnRydWUsXG5cdFx0XHRcdHVwZGF0ZTE6dHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0XG5cdFx0XHQvLyDoh6rpgInml7bpl7Rcblx0XHRcdGJpbmREYXRlQ2hhbmdlKGUpe1xuXHRcdFx0XHRsZXQge3ZhbHVlfT1lLmRldGFpbFxuXHRcdFx0XHR0aGlzLm1vbnRoPW5ldyBEYXRlKHZhbHVlKS5nZXRNb250aCgpKzFcblx0XHRcdFx0dGhpcy55ZWFyPW5ldyBEYXRlKHZhbHVlKS5nZXRGdWxsWWVhcigpXG5cdFx0XHRcdHRoaXMuZ2V0VXNlclF1YXJ0ZXIoKVxuXHRcdFx0XHR0aGlzLmdldFVzZXJTdW1tYXJ5KClcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOS4iuaciFxuXHRcdFx0aGFuZGxlTGFzdE1vbnRoKCl7XG5cdFx0XHQgICAgaWYodGhpcy5tb250aC0xPT0wKXtcblx0XHRcdCAgICAgIHRoaXMubW9udGg9MTJcblx0XHRcdCAgICAgIHRoaXMueWVhci0tXG5cdFx0XHQgICAgfWVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLm1vbnRoLS1cblx0XHRcdFx0XHR9XG5cdFx0XHQgICAgdGhpcy5nZXRVc2VyUXVhcnRlcigpXG5cdFx0XHQgICAgdGhpcy5nZXRVc2VyU3VtbWFyeSgpXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvL+S4i+aciFxuXHRcdFx0aGFuZGxlTmV4dE1vbnRoKCl7XG5cdFx0XHRcdGlmKHRoaXMubW9udGgrMT09MTMpe1xuXHRcdFx0XHRcdHRoaXMubW9udGg9MVxuXHRcdFx0XHRcdHRoaXMueWVhcisrXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHRoaXMubW9udGgrK1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZ2V0VXNlclF1YXJ0ZXIoKVxuXHRcdFx0XHR0aGlzLmdldFVzZXJTdW1tYXJ5KClcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOabtOaWsOaciOW6puaAu+e7k1xuXHRcdFx0YXN5bmMgaGFuZGxlUmVhc29uKGUsdmFsdWUyKXtcblx0XHRcdFx0bGV0IHt2YWx1ZX0gPSBlLmRldGFpbFxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdFx0XHRjb250ZW50OiB2YWx1ZSxcblx0XHRcdFx0XHRtb250aDogdGhpcy5tb250aCxcblx0XHRcdFx0XHR0eXBlOiB2YWx1ZTIudHlwZSxcblx0XHRcdFx0XHR1c2VyaWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyksXG5cdFx0XHRcdFx0eWVhcjogdGhpcy55ZWFyXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHZhbHVlMi5pZCkge1xuXHRcdFx0XHRcdGRhdGEuaWQgPSB2YWx1ZTIuaWRcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgbXlBeGlvcyh7XG5cdFx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRcdFx0dXJsOiAnL2Fub255bW91cy91cGRhdGVTdW1tYXJpemUnLFxuXHRcdFx0XHRcdGRhdGFcblx0XHRcdFx0fSlcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcblx0XHRcdFx0XHR0aGlzLmdldFVzZXJTdW1tYXJ5KClcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTon5pu05paw5aSx6LSlLOivt+mHjeivlScsXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOabtOaWsOWujOaIkOeKtuaAgVxuXHRcdFx0YXN5bmMgaGFuZGxlQ29tcGxldGUodmFsdWUyKXtcblx0XHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFx0Y29tcGxldGU6ICF2YWx1ZTIuY29tcGxldGUsXG5cdFx0XHRcdFx0Y29udGVudDogdmFsdWUyLmNvbnRlbnQsXG5cdFx0XHRcdFx0aW1wb3J0YW5jZUxldmVsOiB2YWx1ZTIuaW1wb3J0YW5jZUxldmVsLFxuXHRcdFx0XHRcdGFpbU1lYXN1cmVzOiB2YWx1ZTIuYWltTWVhc3VyZXMsXG5cdFx0XHRcdFx0dHlwZTogdmFsdWUyLnR5cGUsXG5cdFx0XHRcdFx0bW9udGg6IHRoaXMubW9udGgsXG5cdFx0XHRcdFx0dXNlcklkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpLFxuXHRcdFx0XHRcdHllYXI6IHRoaXMueWVhclxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIOaciUlE5omN6IO96YCJ5oup5omT5Yu+XG5cdFx0XHRcdGlmICh2YWx1ZTIuaWQpIHtcblx0XHRcdFx0XHRkYXRhLmlkID0gdmFsdWUyLmlkXG5cdFx0XHRcdFx0bGV0IHJlcyA9IGF3YWl0IG15QXhpb3Moe1xuXHRcdFx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRcdFx0XHR1cmw6ICcvYW5vbnltb3VzL3VwZGF0ZU9ySW5zZXJ0QWlybXMnLFxuXHRcdFx0XHRcdFx0ZGF0YVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YSlcblx0XHRcdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xuXHRcdFx0XHRcdFx0dGhpcy5nZXRVc2VyUXVhcnRlcigpXG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOWksei0pSzor7fph43or5UnLFxuXHRcdFx0XHRcdFx0XHRpY29uOidub25lJyxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5pu05paw5pa55rOV5ZKM5o6q5pa9XG5cdFx0XHRhc3luYyBoYW5kbGVNZWFzdXJlcyhlLHZhbHVlMil7XG5cdFx0XHRcdGxldCB7dmFsdWV9ID0gZS5kZXRhaWxcblx0XHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFx0Y29tcGxldGU6IHZhbHVlMi5jb21wbGV0ZSxcblx0XHRcdFx0XHRjb250ZW50OiB2YWx1ZTIuY29udGVudCxcblx0XHRcdFx0XHRpbXBvcnRhbmNlTGV2ZWw6IHZhbHVlMi5pbXBvcnRhbmNlTGV2ZWwsXG5cdFx0XHRcdFx0YWltTWVhc3VyZXM6IHZhbHVlLFxuXHRcdFx0XHRcdHR5cGU6IHZhbHVlMi50eXBlLFxuXHRcdFx0XHRcdG1vbnRoOiB0aGlzLm1vbnRoLFxuXHRcdFx0XHRcdHVzZXJJZDogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKSxcblx0XHRcdFx0XHR5ZWFyOiB0aGlzLnllYXJcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodmFsdWUyLmlkKSB7XG5cdFx0XHRcdFx0ZGF0YS5pZCA9IHZhbHVlMi5pZFxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCByZXMgPSBhd2FpdCBteUF4aW9zKHtcblx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdFx0XHR1cmw6ICcvYW5vbnltb3VzL3VwZGF0ZU9ySW5zZXJ0QWlybXMnLFxuXHRcdFx0XHRcdGRhdGFcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YSlcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcblx0XHRcdFx0XHR0aGlzLmdldFVzZXJRdWFydGVyKClcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTon5pu05paw5aSx6LSlLOivt+mHjeivlScsXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOabtOaWsOebruagh+WGheWuuVxuXHRcdFx0YXN5bmMgaGFuZGxlQ29udGVudChlLHZhbHVlMil7XG5cdFx0XHRcdGxldCB7dmFsdWV9ID0gZS5kZXRhaWxcblx0XHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFx0Y29tcGxldGU6IHZhbHVlMi5jb21wbGV0ZSxcblx0XHRcdFx0XHRjb250ZW50OiB2YWx1ZSxcblx0XHRcdFx0XHRpbXBvcnRhbmNlTGV2ZWw6IHZhbHVlMi5pbXBvcnRhbmNlTGV2ZWwsXG5cdFx0XHRcdFx0YWltTWVhc3VyZXM6IHZhbHVlMi5haW1NZWFzdXJlcyxcblx0XHRcdFx0XHR0eXBlOiB2YWx1ZTIudHlwZSxcblx0XHRcdFx0XHRtb250aDogdGhpcy5tb250aCxcblx0XHRcdFx0XHR1c2VySWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyksXG5cdFx0XHRcdFx0eWVhcjogdGhpcy55ZWFyXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHZhbHVlMi5pZCkge1xuXHRcdFx0XHRcdGRhdGEuaWQgPSB2YWx1ZTIuaWRcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgbXlBeGlvcyh7XG5cdFx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRcdFx0dXJsOiAnL2Fub255bW91cy91cGRhdGVPckluc2VydEFpcm1zJyxcblx0XHRcdFx0XHRkYXRhXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XG5cdFx0XHRcdFx0dGhpcy5nZXRVc2VyUXVhcnRlcigpXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOWksei0pSzor7fph43or5UnLFxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvL+abtOaWsOexu+WIq+S/oeaBr1xuXHRcdFx0YXN5bmMgaGFuZGxlTGV2ZWwoZSx2YWx1ZTIpe1xuXHRcdFx0XHRsZXQge3ZhbHVlfSA9ZS5kZXRhaWxcblx0XHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFx0Y29tcGxldGU6IHZhbHVlMi5jb21wbGV0ZSxcblx0XHRcdFx0XHRjb250ZW50OiB2YWx1ZTIuY29udGVudCxcblx0XHRcdFx0XHRpbXBvcnRhbmNlTGV2ZWw6IHZhbHVlLFxuXHRcdFx0XHRcdGFpbU1lYXN1cmVzOiB2YWx1ZTIuYWltTWVhc3VyZXMsXG5cdFx0XHRcdFx0dHlwZTogdmFsdWUyLnR5cGUsXG5cdFx0XHRcdFx0bW9udGg6IHRoaXMubW9udGgsXG5cdFx0XHRcdFx0dXNlcklkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpLFxuXHRcdFx0XHRcdHllYXI6IHRoaXMueWVhclxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh2YWx1ZTIuaWQpIHtcblx0XHRcdFx0XHRkYXRhLmlkID0gdmFsdWUyLmlkXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YSlcblx0XHRcdFx0bGV0IHJlcyA9IGF3YWl0IG15QXhpb3Moe1xuXHRcdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvdXBkYXRlT3JJbnNlcnRBaXJtcycsXG5cdFx0XHRcdFx0ZGF0YVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xuXHRcdFx0XHRcdHRoaXMuZ2V0VXNlclF1YXJ0ZXIoKVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOifmm7TmlrDlpLHotKUs6K+36YeN6K+VJyxcblx0XHRcdFx0XHRcdGljb246J25vbmUnLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g6I635Y+W55So5oi35pyI5bqm5L+h5oGvXG5cdFx0XHRhc3luYyBnZXRVc2VyUXVhcnRlcigpe1xuXHRcdFx0XHR0aGlzLnVwZGF0ZT1mYWxzZVxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgbXlBeGlvcyh7XG5cdFx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRcdFx0dXJsOiAnL2Fub255bW91cy9maW5kQWltc0J5Q29uZGl0aW9uJyxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRtb250aDogdGhpcy5tb250aCxcblx0XHRcdFx0XHRcdHVzZXJJZDogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKSxcblx0XHRcdFx0XHRcdHllYXI6IHRoaXMueWVhclxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwJiZyZXMuZGF0YS5vdGhlclRhcmdldCYmcmVzLmRhdGEud29ya0luZGV4KXtcblx0XHRcdFx0XHQvLyDmm7TmlrDpobXpnaLmlbDmja7kuYvliY3lhYjov5jljp/liJ3lp4vmlbDmja5cblx0XHRcdFx0XHR0aGlzLnRhYmxlPSBbe1xuXHRcdFx0XHRcdFx0XHRpZDogMSxcblx0XHRcdFx0XHRcdFx0bmFtZTogJ+W3peS9nOaMh+aghycsXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbe1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbXBvcnRhbmNlTGV2ZWw6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0YWltTWVhc3VyZXM6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhcnRlcjogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWFydGVyT3JNb250aEZsYWc6ICdxdWFydGVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflt6XkvZzmjIfmoIcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0eWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdGltcG9ydGFuY2VMZXZlbDogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRhaW1NZWFzdXJlczogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWFydGVyOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXJPck1vbnRoRmxhZzogJ3F1YXJ0ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+W3peS9nOaMh+aghycsXG5cdFx0XHRcdFx0XHRcdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1wb3J0YW5jZUxldmVsOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdGFpbU1lYXN1cmVzOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXI6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhcnRlck9yTW9udGhGbGFnOiAncXVhcnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAn5bel5L2c5oyH5qCHJyxcblx0XHRcdFx0XHRcdFx0XHRcdHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbXBvcnRhbmNlTGV2ZWw6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0YWltTWVhc3VyZXM6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhcnRlcjogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWFydGVyT3JNb250aEZsYWc6ICdxdWFydGVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflt6XkvZzmjIfmoIcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0eWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdGltcG9ydGFuY2VMZXZlbDogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRhaW1NZWFzdXJlczogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWFydGVyOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXJPck1vbnRoRmxhZzogJ3F1YXJ0ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+W3peS9nOaMh+aghycsXG5cdFx0XHRcdFx0XHRcdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRpZDogMixcblx0XHRcdFx0XHRcdFx0bmFtZTogJ+WFtuS7luebruaghycsXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbe1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbXBvcnRhbmNlTGV2ZWw6ICflrabkuaDorqHliJInLFxuXHRcdFx0XHRcdFx0XHRcdFx0YWltTWVhc3VyZXM6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhcnRlcjogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWFydGVyT3JNb250aEZsYWc6ICdxdWFydGVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflhbbku5bnm67moIcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0eWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdGltcG9ydGFuY2VMZXZlbDogJ+WBpeW6t+iuoeWIkicsXG5cdFx0XHRcdFx0XHRcdFx0XHRhaW1NZWFzdXJlczogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWFydGVyOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXJPck1vbnRoRmxhZzogJ3F1YXJ0ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+WFtuS7luebruaghycsXG5cdFx0XHRcdFx0XHRcdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1wb3J0YW5jZUxldmVsOiAn5pys5a2j5bqm5Y+N55yBJyxcblx0XHRcdFx0XHRcdFx0XHRcdGFpbU1lYXN1cmVzOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdHF1YXJ0ZXI6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhcnRlck9yTW9udGhGbGFnOiAncXVhcnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAn5YW25LuW55uu5qCHJyxcblx0XHRcdFx0XHRcdFx0XHRcdHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0bGV0IHtvdGhlclRhcmdldCx3b3JrSW5kZXh9PXJlcy5kYXRhXG5cdFx0XHRcdFx0IHdvcmtJbmRleC5mb3JFYWNoKCh2LCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGFibGVbMF0uY2hpbGRyZW5baV09dlxuXHRcdFx0XHRcdFx0XHR0aGlzLnRhYmxlWzBdLmNoaWxkcmVuLmxlbmd0aCA9IDVcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdG90aGVyVGFyZ2V0LmZvckVhY2goKHYsIGkpID0+IHtcblx0XHRcdFx0XHRcdGlmKHYuaW1wb3J0YW5jZUxldmVsPT0n5a2m5Lmg6K6h5YiSJyl7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGFibGVbMV0uY2hpbGRyZW5bMF09dlxuXHRcdFx0XHRcdFx0fWVsc2UgaWYodi5pbXBvcnRhbmNlTGV2ZWw9PSflgaXlurforqHliJInKXtcblx0XHRcdFx0XHRcdFx0dGhpcy50YWJsZVsxXS5jaGlsZHJlblsxXT12XG5cdFx0XHRcdFx0XHR9ZWxzZSBpZih2LmltcG9ydGFuY2VMZXZlbD09J+acrOWto+W6puWPjeecgScpe1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRhYmxlWzFdLmNoaWxkcmVuWzJdPXZcblx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHR0YWJsZVsxXS5jaGlsZHJlbi5wdXNoKHYpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLnRhYmxlWzFdLmNoaWxkcmVuLmxlbmd0aCA9IDNcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTon6I635Y+W5a2j5bqm5L+h5oGv5aSx6LSlLOivt+mHjeivlScsXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy50YWJsZSlcblx0XHRcdFx0dGhpcy51cGRhdGU9dHJ1ZVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g6I635Y+W55So5oi35pyI5bqm5oC757uTXG5cdFx0XHRhc3luYyBnZXRVc2VyU3VtbWFyeSgpe1xuXHRcdFx0XHR0aGlzLnVwZGF0ZTE9ZmFsc2Vcblx0XHRcdFx0bGV0IHJlcyA9IGF3YWl0IG15QXhpb3Moe1xuXHRcdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvcXVlcnlTdW1tYXJpemUnLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdG1vbnRoOnRoaXMubW9udGgsXG5cdFx0XHRcdFx0XHR1c2VyaWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyksXG5cdFx0XHRcdFx0XHR5ZWFyOiB0aGlzLnllYXJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCYmcmVzLmRhdGEucmVzdWx0KXtcblx0XHRcdFx0XHQvLyDliJ3lp4vljJbmlbDmja5cblx0XHRcdFx0XHR0aGlzLnJlYXNvbkFycj0gW3tcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICfmnKrlrozmiJDnm67moIfnmoTpmpznoo3lkozljp/lm6AnXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ+WuouacjemanOeijeeahOWvueetluWSjOaWueazlSdcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAn5pys5a2j5bqm5Yib5paw5LiO5pS26I63J1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0XHRsZXQge3Jlc3VsdH09cmVzLmRhdGFcblx0XHRcdFx0XHRyZXN1bHQuZm9yRWFjaCh2PT57XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVhc29uQXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gdGhpcy5yZWFzb25BcnJbaV0udHlwZSkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVhc29uQXJyW2ldID0gdlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTon6I635Y+W5pyI5oC757uT5aSx6LSlLOivt+mHjeivlScsXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy51cGRhdGUxPXRydWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uTG9hZCgpIHtcblx0XHRcdHRoaXMuZ2V0VXNlclF1YXJ0ZXIoKVxuXHRcdFx0dGhpcy5nZXRVc2VyU3VtbWFyeSgpXG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XG5wYWdle1xuICBiYWNrZ3JvdW5kOiAjRUZGM0Y2O1xufVxuLmhlYWR7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogNTBycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDdycHg7XG59XG4udGFiYmFyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMzc4cnB4O1xuICBoZWlnaHQ6IDM2cnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gIGJvcmRlci1yYWRpdXM6IDVycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC50YWIge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE1cnB4O1xuICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICY6bnRoLWNoaWxkKDIpe1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGNvbG9yOiAjMkVDRTk0O1xuICAgICAgcGlja2Vye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlIHtcbiAgYm9yZGVyOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gIG1hcmdpbjogMCAxNHJweDtcbiAgY29sb3I6ICMyMTlkOWM7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC50aCB7XG4gICAgaGVpZ2h0OiA0MHJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICMyMjcwNUQ7XG4gICAgZm9udC1zaXplOiAxM3JweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAudGQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgICBib3JkZXItbGVmdDogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgd2lkdGg6IDcycnB4O1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoMil7XG4gICAgICAgIHdpZHRoOiA3MnJweDtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDMpLCY6bnRoLWNoaWxkKDQpe1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICB3aWR0aDogMzZycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC50ciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAuYWF7XG4gICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAudGQzLXNvbntcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDBycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC50ZDEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAgIGJhY2tncm91bmQ6ICMyMjcwNUQ7XG4gICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICAgICAgd2lkdGg6IDcycnB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGZvbnQtc2l6ZTogMTNycHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAudGQye1xuICAgICAgZmxleDogMTtcbiAgICAgIC50ZDN7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTA4cnB4O1xuICAgICAgICAmLXNvbntcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgIHdpZHRoOiA3MnJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMUM1RTU1O1xuXHRcdFx0XHRcdFx0aW5wdXR7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNycHg7XG5cdFx0XHRcdFx0XHR9XG4gICAgICAgICAgfVxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpLCY6bnRoLWNoaWxkKDMpe1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpudGgtY2hpbGQoMyl7XG4gICAgICAgICAgICB0ZXh0YXJlYXtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgd2lkdGg6IDM2cnB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRhcmVhe1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uYm94e1xuICBtYXJnaW46IDE3cnB4IDE0cnB4IDA7XG4gIGJvcmRlcjogMXJweCBzb2xpZCAjMUM1RTU1O1xufVxuLnF1YXJ0ZXJ7XG4gIGhlaWdodDogNDBycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMjI3MDVEO1xuICBmb250LXNpemU6IDEzcnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udW5maW5pc2hlZC1wYXJ0e1xuICBoZWlnaHQ6IDE1NHJweDtcbiAgYm9yZGVyLXRvcDogMXJweCBzb2xpZCAjMUM1RTU1O1xuICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICMxQzVFNTU7XG59XG4ucmVhc29ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDE1NHJweDtcbiAgJjpsYXN0LWNoaWxke1xuICAgIHRleHQsdGV4dGFyZWF7XG4gICAgICBib3JkZXItYm90dG9tOiAwcnB4O1xuICAgIH1cbiAgfVxuICB0ZXh0e1xuICAgIHdpZHRoOiAxNDRycHg7XG4gICAgcGFkZGluZzowIDZycHggO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgZm9udC1zaXplOiAxNXJweDtcbiAgICBjb2xvcjogIzFDNUU1NTtcbiAgfVxuICB0ZXh0YXJlYXtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgYm9yZGVyLWxlZnQ6IDFycHggc29saWQgIzFDNUU1NTtcbiAgfVxufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!********************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/App.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 37);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDeUs7QUFDekssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!*********************************************************************!*\
  !*** F:/fwh/chengzhangriji-uniapp/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 38);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThpQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRTpcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUU6XFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFFOlxcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/fwh/chengzhangriji-uniapp/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch(options) {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n    uni.setStorageSync('userID', '10');\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:8\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:11\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9wdGlvbnMiLCJ1bmkiLCJzZXRTdG9yYWdlU3luYyIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxrQkFBU0MsT0FBVCxFQUFrQjtBQUMzQixpQkFBWSxZQUFaO0FBQ0FDLE9BQUcsQ0FBQ0MsY0FBSixDQUFtQixRQUFuQixFQUE0QixJQUE1QjtBQUNBLEdBSmE7QUFLZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVBhO0FBUWRDLFFBQU0sRUFBRSxrQkFBVztBQUNsQixpQkFBWSxVQUFaO0FBQ0EsR0FWYSxFIiwiZmlsZSI6IjM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBMYXVuY2gnKVxuXHRcdHVuaS5zZXRTdG9yYWdlU3luYygndXNlcklEJywnMTAnKVxuXHR9LFxuXHRvblNob3c6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXG5cdH0sXG5cdG9uSGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///38\n");

/***/ })
],[[0,"app-config"]]]);