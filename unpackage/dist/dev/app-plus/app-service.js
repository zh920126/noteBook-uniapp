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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 8));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _myAxios = __webpack_require__(/*! ../../utils/myAxios.js */ 11);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  data: function data() {\n    return {\n      userDream: [{\n        name: '人生蓝图',\n        url: '/pages/blueprint/blueprint' },\n\n      {\n        name: '季度目标',\n        url: '/pages/quarterlygoals/quarterlygoals' },\n\n      {\n        name: '月度目标',\n        url: '/pages/monthygoals/monthygoals' },\n\n      {\n        name: '周目标',\n        url: '/pages/weekgoals/weekgoals' }],\n\n\n      userInfo: uni.getStorageInfoSync('userInfo').name || {\n        name: '樊文花',\n        mobile: '130123456789',\n        component: '广州樊文花化妆品有限公司',\n        address: '珠江新城K11管理中心',\n        qqNumber: 1234567890,\n        wechatNumber: '1212121212121',\n        email: '12121212@163.com' },\n\n      update: true };\n\n  },\n  onLoad: function onLoad(options) {\n    __f__(\"log\", options, \" at pages/index/index.vue:114\");\n    // this.getUserInfo()\n  },\n  methods: {\n    // 更新用户邮箱\n    handleUserEmail: function handleUserEmail(e, value2) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var value, data, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  address: value2.address,\n                  email: value,\n                  mobile: +value2.mobile,\n                  name: value2.name,\n                  qqNumber: value2.qqNumber,\n                  wechatNumber: value2.wechatNumber,\n                  userid: uni.getStorageSync('userID') };_context.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateUserInfo',\n                    data: data }));case 4:res = _context.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this.getUserInfo();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 6:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n\n    // 更新用户wechat\n    handleUserWechat: function handleUserWechat(e, value2) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var value, data, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  address: value2.address,\n                  email: value2.email,\n                  mobile: +value2.mobile,\n                  name: value2.name,\n                  qqNumber: value2.qqNumber,\n                  wechatNumber: value,\n                  userid: uni.getStorageSync('userID') };_context2.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateUserInfo',\n                    data: data }));case 4:res = _context2.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this2.getUserInfo();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 6:case \"end\":return _context2.stop();}}}, _callee2);}))();\n    },\n\n    // 更新用户QQ\n    handleUserQQ: function handleUserQQ(e, value2) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var value, data, res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  address: value2.address,\n                  email: value2.email,\n                  mobile: 0,\n                  name: value2.name,\n                  qqNumber: +value,\n                  wechatNumber: value2.wechatNumber,\n                  userid: uni.getStorageSync('userID') };_context3.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateUserInfo',\n                    data: data }));case 4:res = _context3.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this3.getUserInfo();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 6:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n\n    // 更新用户地址\n    handleUserAddress: function handleUserAddress(e, value2) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var value, data, res;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  address: value,\n                  email: value2.email,\n                  mobile: 0,\n                  name: value2.name,\n                  qqNumber: value2.qqNumber,\n                  userid: uni.getStorageSync('userID'),\n                  wechatNumber: value2.wechatNumber };_context4.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateUserInfo',\n                    data: data }));case 4:res = _context4.sent;\n\n                __f__(\"log\", data, \" at pages/index/index.vue:219\");\n                __f__(\"log\", res, \" at pages/index/index.vue:220\");\n                if (res.data.statusCode == 200) {\n                  _this4.getUserInfo();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 8:case \"end\":return _context4.stop();}}}, _callee4);}))();\n    },\n\n    // 获取用户信息\n    getUserInfo: function getUserInfo() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var res;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n                _this5.update = false;_context5.next = 3;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/queryUserInfo',\n                    data: {\n                      code: '123',\n                      userid: uni.getStorageSync('userID') } }));case 3:res = _context5.sent;\n\n\n                if (res.data.statusCode == 200) {\n                  _this5.userInfo = res.data.result;\n                } else {\n                  uni.showToast({\n                    title: '获取用户信息失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                _this5.update = true;case 6:case \"end\":return _context5.stop();}}}, _callee5);}))();\n    },\n\n    // 路由跳转\n    goToelsePage: function goToelsePage(v) {\n      __f__(\"log\", v, \" at pages/index/index.vue:257\");\n      uni.navigateTo({\n        url: v });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRUEscUU7QUFDQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSx5Q0FGQTs7QUFJQTtBQUNBLG9CQURBO0FBRUEsbURBRkEsRUFKQTs7QUFRQTtBQUNBLG9CQURBO0FBRUEsNkNBRkEsRUFSQTs7QUFZQTtBQUNBLG1CQURBO0FBRUEseUNBRkEsRUFaQSxDQURBOzs7QUFrQkE7QUFDQSxtQkFEQTtBQUVBLDhCQUZBO0FBR0EsaUNBSEE7QUFJQSw4QkFKQTtBQUtBLDRCQUxBO0FBTUEscUNBTkE7QUFPQSxpQ0FQQSxFQWxCQTs7QUEyQkEsa0JBM0JBOztBQTZCQSxHQS9CQTtBQWdDQSxRQWhDQSxrQkFnQ0EsT0FoQ0EsRUFnQ0E7QUFDQTtBQUNBO0FBQ0EsR0FuQ0E7QUFvQ0E7QUFDQTtBQUNBLG1CQUZBLDJCQUVBLENBRkEsRUFFQSxNQUZBLEVBRUE7QUFDQSxxQkFEQSxHQUNBLFFBREEsQ0FDQSxLQURBO0FBRUEsb0JBRkEsR0FFQTtBQUNBLHlDQURBO0FBRUEsOEJBRkE7QUFHQSx3Q0FIQTtBQUlBLG1DQUpBO0FBS0EsMkNBTEE7QUFNQSxtREFOQTtBQU9BLHNEQVBBLEVBRkE7O0FBV0E7QUFDQSxrQ0FEQTtBQUVBLG9EQUZBO0FBR0EsOEJBSEEsR0FYQSxTQVdBLEdBWEE7O0FBZ0JBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBLGdDQUZBO0FBR0EsaUNBSEE7O0FBS0EsaUJBeEJBO0FBeUJBLEtBM0JBOztBQTZCQTtBQUNBLG9CQTlCQSw0QkE4QkEsQ0E5QkEsRUE4QkEsTUE5QkEsRUE4QkE7QUFDQSxxQkFEQSxHQUNBLFFBREEsQ0FDQSxLQURBO0FBRUEsb0JBRkEsR0FFQTtBQUNBLHlDQURBO0FBRUEscUNBRkE7QUFHQSx3Q0FIQTtBQUlBLG1DQUpBO0FBS0EsMkNBTEE7QUFNQSxxQ0FOQTtBQU9BLHNEQVBBLEVBRkE7O0FBV0E7QUFDQSxrQ0FEQTtBQUVBLG9EQUZBO0FBR0EsOEJBSEEsR0FYQSxTQVdBLEdBWEE7O0FBZ0JBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBLGdDQUZBO0FBR0EsaUNBSEE7O0FBS0EsaUJBeEJBO0FBeUJBLEtBdkRBOztBQXlEQTtBQUNBLGdCQTFEQSx3QkEwREEsQ0ExREEsRUEwREEsTUExREEsRUEwREE7QUFDQSxxQkFEQSxHQUNBLFFBREEsQ0FDQSxLQURBO0FBRUEsb0JBRkEsR0FFQTtBQUNBLHlDQURBO0FBRUEscUNBRkE7QUFHQSwyQkFIQTtBQUlBLG1DQUpBO0FBS0Esa0NBTEE7QUFNQSxtREFOQTtBQU9BLHNEQVBBLEVBRkE7O0FBV0E7QUFDQSxrQ0FEQTtBQUVBLG9EQUZBO0FBR0EsOEJBSEEsR0FYQSxTQVdBLEdBWEE7O0FBZ0JBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBLGdDQUZBO0FBR0EsaUNBSEE7O0FBS0EsaUJBeEJBO0FBeUJBLEtBbkZBOztBQXFGQTtBQUNBLHFCQXRGQSw2QkFzRkEsQ0F0RkEsRUFzRkEsTUF0RkEsRUFzRkE7QUFDQSxxQkFEQSxHQUNBLFFBREEsQ0FDQSxLQURBO0FBRUEsb0JBRkEsR0FFQTtBQUNBLGdDQURBO0FBRUEscUNBRkE7QUFHQSwyQkFIQTtBQUlBLG1DQUpBO0FBS0EsMkNBTEE7QUFNQSxzREFOQTtBQU9BLG1EQVBBLEVBRkE7O0FBV0E7QUFDQSxrQ0FEQTtBQUVBLG9EQUZBO0FBR0EsOEJBSEEsR0FYQSxTQVdBLEdBWEE7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EscUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBLGlCQTFCQTtBQTJCQSxLQWpIQTs7QUFtSEE7QUFDQSxlQXBIQSx5QkFvSEE7QUFDQSxzQ0FEQTtBQUVBO0FBQ0Esa0NBREE7QUFFQSxtREFGQTtBQUdBO0FBQ0EsaUNBREE7QUFFQSwwREFGQSxFQUhBLEdBRkEsU0FFQSxHQUZBOzs7QUFVQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EseUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBO0FBQ0EscUNBbkJBO0FBb0JBLEtBeElBOztBQTBJQTtBQUNBLGdCQTNJQSx3QkEySUEsQ0EzSUEsRUEySUE7QUFDQTtBQUNBO0FBQ0EsY0FEQTs7QUFHQSxLQWhKQSxFQXBDQSxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJpbmRleFwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJpbmRleC10b3BcIj5cclxuXHRcdFx0PCEtLSA8dmlldyBjbGFzcz1cImltZ1wiPlxyXG5cdFx0XHRcdDxpbWFnZSBtb2RlPVwiYXNwZWN0RmlsbFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZS9pbV9iZ0Zsb3dlckAyeC5wbmdcIj5cclxuXHRcdFx0XHQ8L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+IC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImluZGV4LWhlYWRlclwiPumrmOaViOW3peS9nCDlv6vkuZDnlJ/mtLs8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaW5kZXgtdGl0bGVcIj7mlLnlj5jku47ku4rlpKnlvIDlp4s8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNhcmRcIj5cclxuXHRcdFx0PCEtLSDpobbpg6jog4zmma8gLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmdcIj5cclxuXHRcdFx0XHQ8YmxvY2sgdi1pZj1cInRydWVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlckF2YXRhclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJcIiBtb2RlPVwid2lkdGhGaXhcIiBzcmM9XCJodHRwczovL2RzczIuYmRzdGF0aWMuY29tLzcwY0Z2blNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTMxMDQ3NDkxMDQsNDIwNzQzMzU5OCZmbT0yNiZncD0wLmpwZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHQ8YmxvY2sgdi1lbHNlPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyQXZhdGFyXCI+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gb3Blbi10eXBlPVwiZ2V0VXNlckluZm9cIiBiaW5kOnRhcD1cImhhbmRsZUdldFVzZXJJbmZvXCI+5oiR55qE54Wn54mHPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VySW5mb1wiIHYtaWY9XCJ1cGRhdGVcIj5cclxuXHRcdFx0ICAgICAgPHZpZXcgY2xhc3M9XCJ1c2VyLW5hbWVcIj5cclxuXHRcdFx0ICAgICAgICA8dmlldyBjbGFzcz1cInVzZXItbmFtZS10aXRsZVwiPlxyXG5cdFx0XHQgICAgICAgICAgPHZpZXc+5aeT5ZCNPC92aWV3PlxyXG5cdFx0XHQgICAgICAgICAgPHZpZXcgY2xhc3M9XCJuYW1lXCI+e3t1c2VySW5mby5uYW1lfX08L3ZpZXc+XHJcblx0XHRcdCAgICAgICAgPC92aWV3PlxyXG5cdFx0XHQgICAgICAgIDx2aWV3IGNsYXNzPVwidXNlci1uYW1lLXBob25lXCI+XHJcblx0XHRcdCAgICAgICAgICA8dmlldz7miYvmnLo8L3ZpZXc+XHJcblx0XHRcdCAgICAgICAgICA8dmlldyBjbGFzcz1cIm5hbWVcIj57e3VzZXJJbmZvLm1vYmlsZX19PC92aWV3PlxyXG5cdFx0XHQgICAgICAgIDwvdmlldz5cclxuXHRcdFx0ICAgICAgPC92aWV3PlxyXG5cdFx0XHQgICAgICA8dmlldyBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0ICAgICAgICA8dmlldz7ljZXkvY08L3ZpZXc+XHJcblx0XHRcdCAgICAgICAgPHZpZXc+e3t1c2VySW5mby5jb21wb25lbnR9fTwvdmlldz5cclxuXHRcdFx0ICAgICAgPC92aWV3PlxyXG5cdFx0XHQgICAgICA8dmlldyBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0ICAgICAgICA8dmlldz7lnLDlnYA8L3ZpZXc+XHJcblx0XHRcdCAgICAgICAgPHZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgOnZhbHVlPVwidXNlckluZm8uYWRkcmVzc1wiIEBibHVyPVwiaGFuZGxlVXNlckFkZHJlc3MoJGV2ZW50LHVzZXJJbmZvKVwiPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQgICAgICA8L3ZpZXc+XHJcblx0XHRcdCAgICAgIDx2aWV3IGNsYXNzPVwiaXRlbS1xcVwiPlxyXG5cdFx0XHQgICAgICAgIDx2aWV3IGNsYXNzPVwicXFcIj5cclxuXHRcdFx0ICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1RUVwiPjwvdmlldz5cclxuXHRcdFx0ICAgICAgICAgIDx2aWV3IGNsYXNzPVwibmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgOnZhbHVlPVwidXNlckluZm8ucXFOdW1iZXJcIiBAYmx1cj1cImhhbmRsZVVzZXJRUSgkZXZlbnQsdXNlckluZm8pXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQgICAgICAgIDwvdmlldz5cclxuXHRcdFx0ICAgICAgICA8dmlldyBjbGFzcz1cIndlY2hhdFwiPlxyXG5cdFx0XHQgICAgICAgICAgPHZpZXcgY2xhc3M9XCJpY29uZm9udCBpY29uLXdlaXhpblwiPjwvdmlldz5cclxuXHRcdFx0ICAgICAgICAgIDx2aWV3IGNsYXNzPVwibmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgOnZhbHVlPVwidXNlckluZm8ud2VjaGF0TnVtYmVyXCIgQGJsdXI9XCJoYW5kbGVVc2VyV2VjaGF0KCRldmVudCx1c2VySW5mbylcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdCAgICAgICAgPC92aWV3PlxyXG5cdFx0XHQgICAgICA8L3ZpZXc+XHJcblx0XHRcdCAgICAgIDx2aWV3IGNsYXNzPVwiZW1haWxcIj5cclxuXHRcdFx0ICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1lbWFpbFwiPjwvdmlldz5cclxuXHRcdFx0ICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZW1haWwtZGVzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSA6dmFsdWU9XCJ1c2VySW5mby5lbWFpbFwiIEBibHVyPVwiaGFuZGxlVXNlckVtYWlsKCRldmVudCx1c2VySW5mbylcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdCAgICAgIDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5bqV6YOo5a+86IiqIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWRyZWFtXCI+XHJcblx0XHRcdDxibG9jayB2LWZvcj1cIih2LGkpIGluIHVzZXJEcmVhbVwiIDprZXk9XCJ2LnVybFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1kcmVhbS1pdGVtXCIgQHRhcD1cImdvVG9lbHNlUGFnZSh2LnVybClcIiA+e3t2Lm5hbWV9fTwvdmlldz5cclxuXHRcdFx0PC9ibG9jaz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7bXlBeGlvc30gZnJvbSAnLi4vLi4vdXRpbHMvbXlBeGlvcy5qcydcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHVzZXJEcmVhbTogW3tcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+S6uueUn+iTneWbvicsXHJcblx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9ibHVlcHJpbnQvYmx1ZXByaW50J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+Wto+W6puebruaghycsXHJcblx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9xdWFydGVybHlnb2Fscy9xdWFydGVybHlnb2FscydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfmnIjluqbnm67moIcnLFxyXG5cdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvbW9udGh5Z29hbHMvbW9udGh5Z29hbHMnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3dlZWtnb2Fscy93ZWVrZ29hbHMnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHR1c2VySW5mbzogdW5pLmdldFN0b3JhZ2VJbmZvU3luYygndXNlckluZm8nKS5uYW1lIHx8IHtcclxuXHRcdFx0XHRcdG5hbWU6J+aoiuaWh+iKsScsXHJcblx0XHRcdFx0XHRtb2JpbGU6JzEzMDEyMzQ1Njc4OScsXHJcblx0XHRcdFx0XHRjb21wb25lbnQ6J+W5v+W3nuaoiuaWh+iKseWMluWmhuWTgeaciemZkOWFrOWPuCcsXHJcblx0XHRcdFx0XHRhZGRyZXNzOifnj6DmsZ/mlrDln45LMTHnrqHnkIbkuK3lv4MnLFxyXG5cdFx0XHRcdFx0cXFOdW1iZXI6MTIzNDU2Nzg5MCxcclxuXHRcdFx0XHRcdHdlY2hhdE51bWJlcjonMTIxMjEyMTIxMjEyMScsXHJcblx0XHRcdFx0XHRlbWFpbDonMTIxMjEyMTJAMTYzLmNvbSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHVwZGF0ZTp0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQob3B0aW9ucykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhvcHRpb25zKVxyXG5cdFx0XHQvLyB0aGlzLmdldFVzZXJJbmZvKClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOabtOaWsOeUqOaIt+mCrueusVxyXG5cdFx0XHRhc3luYyBoYW5kbGVVc2VyRW1haWwoZSx2YWx1ZTIpe1xyXG5cdFx0XHRcdGxldCB7dmFsdWV9PWUuZGV0YWlsXHJcblx0XHRcdFx0bGV0IGRhdGE9e1xyXG5cdFx0XHRcdFx0YWRkcmVzczp2YWx1ZTIuYWRkcmVzcyxcclxuXHRcdFx0XHRcdGVtYWlsOnZhbHVlLFxyXG5cdFx0XHRcdFx0bW9iaWxlOit2YWx1ZTIubW9iaWxlLFxyXG5cdFx0XHRcdFx0bmFtZTp2YWx1ZTIubmFtZSxcclxuXHRcdFx0XHRcdHFxTnVtYmVyOnZhbHVlMi5xcU51bWJlcixcclxuXHRcdFx0XHRcdHdlY2hhdE51bWJlcjp2YWx1ZTIud2VjaGF0TnVtYmVyLFxyXG5cdFx0XHRcdFx0dXNlcmlkOnVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IHJlcz1hd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRcdG1ldGhvZDoncG9zdCcsXHJcblx0XHRcdFx0XHR1cmw6Jy9hbm9ueW1vdXMvdXBkYXRlVXNlckluZm8nLFxyXG5cdFx0XHRcdFx0ZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0VXNlckluZm8oKVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifmm7TmlrDlpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDmm7TmlrDnlKjmiLd3ZWNoYXRcclxuXHRcdFx0YXN5bmMgaGFuZGxlVXNlcldlY2hhdChlLHZhbHVlMil7XHJcblx0XHRcdFx0bGV0IHt2YWx1ZX09ZS5kZXRhaWxcclxuXHRcdFx0XHRsZXQgZGF0YT17XHJcblx0XHRcdFx0XHRhZGRyZXNzOnZhbHVlMi5hZGRyZXNzLFxyXG5cdFx0XHRcdFx0ZW1haWw6dmFsdWUyLmVtYWlsLFxyXG5cdFx0XHRcdFx0bW9iaWxlOit2YWx1ZTIubW9iaWxlLFxyXG5cdFx0XHRcdFx0bmFtZTp2YWx1ZTIubmFtZSxcclxuXHRcdFx0XHRcdHFxTnVtYmVyOnZhbHVlMi5xcU51bWJlcixcclxuXHRcdFx0XHRcdHdlY2hhdE51bWJlcjp2YWx1ZSxcclxuXHRcdFx0XHRcdHVzZXJpZDp1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCByZXM9YXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3VwZGF0ZVVzZXJJbmZvJyxcclxuXHRcdFx0XHRcdGRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0XHR0aGlzLmdldFVzZXJJbmZvKClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTon5pu05paw5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5pu05paw55So5oi3UVFcclxuXHRcdFx0YXN5bmMgaGFuZGxlVXNlclFRKGUsdmFsdWUyKXtcclxuXHRcdFx0XHRsZXQge3ZhbHVlfT1lLmRldGFpbFxyXG5cdFx0XHRcdGxldCBkYXRhPXtcclxuXHRcdFx0XHRcdGFkZHJlc3M6dmFsdWUyLmFkZHJlc3MsXHJcblx0XHRcdFx0XHRlbWFpbDp2YWx1ZTIuZW1haWwsXHJcblx0XHRcdFx0XHRtb2JpbGU6MCxcclxuXHRcdFx0XHRcdG5hbWU6dmFsdWUyLm5hbWUsXHJcblx0XHRcdFx0XHRxcU51bWJlcjordmFsdWUsXHJcblx0XHRcdFx0XHR3ZWNoYXROdW1iZXI6dmFsdWUyLndlY2hhdE51bWJlcixcclxuXHRcdFx0XHRcdHVzZXJpZDp1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCByZXM9YXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3VwZGF0ZVVzZXJJbmZvJyxcclxuXHRcdFx0XHRcdGRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0XHR0aGlzLmdldFVzZXJJbmZvKClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTon5pu05paw5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5pu05paw55So5oi35Zyw5Z2AXHJcblx0XHRcdGFzeW5jIGhhbmRsZVVzZXJBZGRyZXNzKGUsdmFsdWUyKXtcclxuXHRcdFx0XHRsZXQge3ZhbHVlfT1lLmRldGFpbFxyXG5cdFx0XHRcdGxldCBkYXRhPXtcclxuXHRcdFx0XHRcdGFkZHJlc3M6dmFsdWUsXHJcblx0XHRcdFx0XHRlbWFpbDp2YWx1ZTIuZW1haWwsXHJcblx0XHRcdFx0XHRtb2JpbGU6MCxcclxuXHRcdFx0XHRcdG5hbWU6dmFsdWUyLm5hbWUsXHJcblx0XHRcdFx0XHRxcU51bWJlcjp2YWx1ZTIucXFOdW1iZXIsXHJcblx0XHRcdFx0XHR1c2VyaWQ6dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKSxcclxuXHRcdFx0XHRcdHdlY2hhdE51bWJlcjp2YWx1ZTIud2VjaGF0TnVtYmVyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCByZXM9YXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3VwZGF0ZVVzZXJJbmZvJyxcclxuXHRcdFx0XHRcdGRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0XHR0aGlzLmdldFVzZXJJbmZvKClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTon5pu05paw5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g6I635Y+W55So5oi35L+h5oGvXHJcblx0XHRcdGFzeW5jIGdldFVzZXJJbmZvKCl7XHJcblx0XHRcdFx0dGhpcy51cGRhdGU9ZmFsc2VcclxuXHRcdFx0XHRsZXQgcmVzPSBhd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRcdG1ldGhvZDoncG9zdCcsXHJcblx0XHRcdFx0XHR1cmw6Jy9hbm9ueW1vdXMvcXVlcnlVc2VySW5mbycsXHJcblx0XHRcdFx0XHRkYXRhOntcclxuXHRcdFx0XHRcdFx0Y29kZTonMTIzJyxcclxuXHRcdFx0XHRcdFx0dXNlcmlkOnVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0XHR0aGlzLnVzZXJJbmZvPXJlcy5kYXRhLnJlc3VsdFxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifojrflj5bnlKjmiLfkv6Hmga/lpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy51cGRhdGU9dHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g6Lev55Sx6Lez6L2sXHJcblx0XHRcdGdvVG9lbHNlUGFnZSh2KXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh2KVxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDp2XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XHJcblx0cGFnZXtcclxuXHRcdGJhY2tncm91bmQ6ICNFRkYzRjY7XHJcblx0LmluZGV4IHtcclxuXHRcdGNvbG9yOiAjMjE5ZDljO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHJcblx0XHQmLXRvcCB7XHJcblx0XHRcdGhlaWdodDogMjcxcnB4O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFCb1FBQUFMa0NBTUFBQUFSUktlbEFBQUFYVkJNVkVVYWFWMGJhVjBiYVY0YmFsNGNhVjRjYWw0Y2FsOGNhMThkYWw0ZGFsOGRhMThlYTE4ZWEyQWViR0FmYkdBZmJHRWdiR0VnYldFZ2JXSWhiV0VoYldJaGJtSWhibU1pYldJaWJtSWlibU1qYm1NamIyTWpiMlFrYjJRbGNHVzErdmN2QUFCY2YwbEVRVlFZR2V6QmlXS2p5TFlzMEFCTzZwVlNpTUdWZlEySUhmLy9tYS9uTHB0RVFwQWFiTVZhb0lpSXlJT0FJaUlpRHdLS2lJZzhDQ2dpSXZJZ29JaUl5SU9BSWlJaUR3S0tpSWc4Q0NnaUl2SWdvSWlJeUlPQUlpSWlEd0tLaUlnOENDZ2lJdklnb0lpSXlJT0FJaUlpRHdLS2lJZzhDQ2dpSXZJZ29JaUl5SU9BSWlJaUR3S0tpSWc4Q0NnaUl2SWdvSWlJeUlPQUlpSWlEd0tLaUlnOENDZ2lJdklnb0lpSXlJT0FJaUlpRHdLS2lJZzhDQ2dpSXZJZ29JaUl5SU9BSWlJaUR3S0tpSWc4Q0NnaUl2SWdvSWlJeUlPQUlpSWlEd0tLaUlnOENDZ2lJdklnb0lpSXlJT0FJaUlpRHdLS2lJZzhDQ2dpSXZJZ29JaUl5SU9BSWlJaUR3S0tpSWc4Q0NnaUl2SWdvSWlJeUlPQUlpSWlEd0tLaUlnOENDZ2lJdklnb0lpSXlJT0FJaUlpRHdLS2lJZzhDQ2dpSXZJZ29JaUl5SU9BSWlJaUR3S0tpSWc4Q0NnaUl2SWdvSWlJeUlPQUlpSWlEd0tLaUlnOENDZ2lJdklnb0lpSXlJT0FJaUlpRHdLS2lJZzhDQ2dpSXZJZ29JaUl5SU9BSWlJaUR3S0tpSWc4Q0NnaUl2SWdvSWlJeUlPQUlpSWlEd0tLaUlnOENDZ2lJdklnb0lpSXlJT0FJaUlpRHdLS2lJZzhDQ2dpSXZJZ29JaUl5SU9BSWlJaUR3S0tpTWpFcWZVWmdLTFlIYXB3b3R3SUtDSWlINDMxLy9CQjVvTlJiZ0FVRVpGZldZa1lIeWpKZ1NJaThvc1djL0xHS0dtQklpTHlML000STJ1TmtoSW9JaUwvR0F1Y2w3OVRFZ0pGUk9SdlE0YUx2RkdTQVVWRTVDOWpoaVYrVWxJQlJVVGtUMVpnbVlOUjBnQkZST1JQSGt2bFBTVUpVRVJFL3REZ0NnMGxCVkJFUkg0MzRDcmVLTnVCSWlKQ21zTjFpb0ZQdzA1OUg5N2U2cnF1RG4rcmYvZjIxdmVEOFptQklpSkNOcmhheThleVByVDFZZThLbkZmc2ZQWFdHNThSS0NJaU5LeFFHaDlpQ0cyNUwzQ3QzZkhud0NjRGlvZ0lEMWlqR0hoWDFvZktGOWpDSGNPSnp3TVVFWkVCS3pXOEV3dU5MNUNJcnp2alV3QkZSTVJqTFRmdzF1eTk4aGxTYzFVd1Bod29Jdkx5ZXNTNWczZTRwRExlenRBZUN0eU1xLzdQK0ZDZ2lNakw4NGdwQi83TzNncGNVQnR2WVdoOWhwdHpkYy9IQVVWRVhsMlBtTUIvaEF3WGxEM1RzdUF6M0V0V0J1TmpnQ0lpcjg0am91ZC9yTVFsLzJ0R3BqSTJPOXliYTBjK0FDZ2k4dUo2UkxUOElPQ3lYVE55dTdIWjRURmNOZkRlUUJHUkYrY3h0ZU1uUTRFRi9sZDF4ZzJHeXVHUi9sY052Q3RRUk9TMTlZZ1krSm50c1l4dkI2NHlOanM4bm10RzNnOG9JdkxhRHBqeW5MSUtTMlcrSFhpZHNkbmhXYmpXZUNlZ2lNaExHeERSTWVZTjE5aFg3OFpsckhWNExtWFB1d0JGUkY2YXgxVEd1QzdEZFFyZjlzYnpyUDJCSjVRM3h0c0RSVVJlV1krSW1qTkdoK3NWdmc0bnhsblk0MmtkZXQ0YUtDTHl5andpUnM2eENpdTVReHNHZm1EQkk0azhkN3ZEb2E3ZlF2ZUg4UGE3cGk0UFAxeWVZd3NYakRjRmlvaThzQTRSam1mMEJUWW85c2MyOUViU2dzY211YS9mUXRlZlRqelBodkJXSDM0VVdDV3JqVGNFaW9pOE1JZUlONTVqRmJZckhEYllIZHZlZUsxVGFNcGRocXVWQTI4R0ZCRjVYUzFpak9jTk96ek1qeXFjdUlYMWpjOXhIZC96UmtBUmtaZGxpQ2w1VVZmZy9uNVU0Y1Ewckd0OGhpdjRqamNCaW9pOExJK1lrWmRabStPTzNERU1UTzNVK2d5THVZNDNBSXFJdktxQW1JcUxXSnZqSGpMZmRNWmJPYlVlUzdtZXlZRWlJaTlxekJDUkdSZXlVT0MyM0RFWWI4MjZLc2N5dm1kaW9JaklhektIbUorOFF1ZHhPNTN4WGs2Tnd5S0hrVW1CSWlLdjZZaVlIYTh6VmpsdXhGWEJlRGRqNDdCRVpVd0lGQkY1U1RXaUJsN3RONCtiS1E3dHdIc1pxZ3lYWmEweEdWQkU1QlhWaUtxNGhvVTlibWhmdlJ2dm96dmdzcUpuS3FDSXlBdXFFSlViVjdKUTRwYUtRenZ3SHF4MXVNaVBUQU1VRVhrNTVoSFhjWXUrY3JpcGZmVnV2TDIreEVXVk1RVlFST1RWdEJuaUR0eksrbEQ1SERkVUhOcUJ0MloxaGd1S25nbUFJaUt2cFhlWWtSblRzRDVVUHNmdCtMb3ozcFQ5ZExpZ05HNEdpb2k4a3ZHQVdZRkpXZDhlZjJTNGxhTDhlZUl0ZFE3bjVZRmJnU0lpcjhNcXpDdDVDOVkxUjRjYnlYelRHVyttOXpqUEc3Y0JSVVJlUnNneEx6ZmV6aWswdnNCdHVDb1liNlQzT0NzTDNBUVVFWGtSZzhjNVBXL04rclowdUluaTBBNjhpZDdqck5LNEFTZ2k4aEtzd2xsdnZKTWhIQjF1WWw4RlkzcWR3emw1ei9WQUVaRlg4RFBEV1FmZWsvV3R6M0VMeGFFZG1Gb29jRTV0WEFzVUVmbitlb2Z6ZHNhN3MvZmFaN2dGWDNmR3BOb01aN2lSSzRFaUl0K2RIWEJCWVh5UVV6anVjQXV1Nm96cFdJVnpBdGNCUlVTK042dHhTVGJ5b1lhZlI0Y2JjSFhQWkU0ZVoxUmNCUlFSK2RiZWMxeVNEWHc4Njl0RGdlUXkzeG9UNlhQTTJ4dFhBRVZFdnJIQjQ2Smk0TE93cnZFNVVuUHR5Q1Nzd3J4aTRQVkFFWkZ2eXlwY1ZveDhMdFkzUGtOYXU4YVl3bW1QZVlGWEEwVkV2cXVmR1M3Ykc1K1J2VmMrUTByN1lFemdaNFpaRGE4RmlvaDhUNzNEQWhXZjJDbFVQNUJRT1hBN08yRFd3WGdkVUVUa094b1BXS0RvK1BTR2NIUkl4UVhqWmwyR09jNTRGVkJFNVB1eEdndGtyZkZyc0w0NTVFaWpITGlWbFpoVERMd0dLQ0x5N1lRY0N4eU5YNHE5VnorUXdyN2pWbDJHT1lGWEFFVkV2cG5CWXdFLzhDc2Eya09CellwZzNNWU9tTk55T1ZCRTVGdXhJeFp3UGI4dWU2OTIyQ2hyak5zRXpDbU5TNEVpSXQvSnp3eVhaWUZmbmZXTno3QkpPWElUMjJPR015NEVpb2g4SDczREFwWHhleGhhbjJHRDByaEpneGw1ejJWQUVaSHZ3a29zNEVkK0o2ZldaMWl0TW03UjU1alJjaEZRUk9SN3NBWUx1SjdmejlENkRDdFZ4ZzNNWThiUnVBQW9Jdkl0ZEFVdXkxcCtWMzN0c0U1bDNLREJERGZ5TWxCRTVCc1lQUlk0R3I4ekMxV09GZktmM0tETE1PTW5Md0pGUkw0OHE3R0FIL2o5bmRvOXJ1ZDZyamM2ekRnWUx3QkZSTDY2a09PeXZPT0xzSERJY0MwL2NEWHptSkcvOHp4UVJPUnJHejBXcUkydnBLOGNybFFaVjZzeHB6U2VBNHFJZkdWV1k0R0Q4ZVVNbGNOVjhzRFZBdVprUDNrR0tDTHloWVVjbDdtZXIybHNISzdoUjY0MVpKamplczRDUlVTK3JOSGpzaXp3aFExVmppdlV4cFhHSFdiNW5qTkFFWkV2eW1vc1VCbGZYRjltV013TlhNa09tT2Q3Um9FaUlsL1RlNDdML0VBaGc4ZGl0WEdsQm1lNDFqZ0Zpb2g4UmFQSFpYbWcvTVVhaDRYY3lKVUN6aW9IZmdhS2lIdzlWbU9CeWlqLzZVc3MxSENsazhOWnU4YjRBU2dpOHVYMERwZjVrZktSTlJrV2NTUFhNWThMOXNINEgxQkU1SXV4RXBlNW5oTFJlU3lSQmE3VTRDTGZHdjhHaW9oOExUOHpYTllhSlc0b3NVUmxYS2ZQY05tK05mNEJGQkg1U2thUHl3NUdtV2QxaHN2Y3lIWE1Zd2xYZFNRb0l2SjFXSTNMM0VBNXo1b2Nsd1d1MUdBaEQ0cUlmQm05dzBWWm9GeG1iWTZMS3E1MGNsaUlJaUpmaEIxeDJkSDRtcXdQYlgwNCtKMC9sTTI3OFNKcmMxemlqU3MxV0lZaUlsL0RlNDZMZGdOZlVOOGVIRDRwalJkWmsrR0NZdUJLbzhjU0ZCSDVDc3pqb2l6d3BaejYwQng5Z2FpczUyVlc0WkxBdFVLT3l5Z2k4Z1VFWEZZWlg0TDFvYTBPdXdJWHZITUJLM0ZCdzdXc3hrVVVFWGw2bzhkRnU0SGZtcDM2MEJ6OXJzQmlKeTR4N0hCZWFWekxLbHhBRVpGbjErS2k3Q2UvSlJ2NnQ3WTY3QXFzc09NeUljZFplK05xVm1jNGh5SWl6MjMwdUtneWZpZW5QcnpWcGQ4VjJDWndHYXR3bGpPdVo0M0RQSXFJUExVV0YrMEdmZ09uUHJ6VlI3OHJrSXpqVXNNTzV4UWp0K2dQbUVNUmtTYzJlbHlTQlg1ZHB6NjgxVWUvSzNBVFBSY0xPQ2NidUlrMU9hSW9Jdks4V2x4VUdyOFlPL1hoclM3OXJzQ3RWVnpPUE01NTUwWmRtV0dLSWlMUHlqd3VjUU8vQmp2MW9hMFBmbGZnamdwZTR5Zk9lZWRXOWx1Snp5Z2k4cVFDTG1yNTFPelVoN1krZUZmZ1FZelhHUGM0NDUzYldmRDRnQ0lpVDhrOExqa1luOUdwRDIxOThLN0E0d1ZlcDhFWmdVbDBWWTUvVVVUa0diM251Q0R2K1VSczZFTmJIWFlGbmtyREsvVVo1Z1VtTWpRT2Y2R0l5UE94Q3BkVXhzZXpVeC9hbzk4VmVGS2UxektQZVlISldGYzVBQlFSZVRxand3VzdFeC9JaHREV2gxMkJwK2Q0dlFiejNwbVNCVkJFNU5tMHVDVHdFV3dJYi9WaFYrQVo1YnZLWVlvcmRCbG12VE1wVUVUa3VaakhCZDU0VnphRXR2SU9UeWd2M0tGcVFuL2lIeHdtVGx6aDVERHJuU21CSWlKUHBjOXhYdGJ4WHF4L3E3M0RzOG5kajBQZGhHNHdmdFJqb3VNYTVqRnJZRUtnaU1nenFYQkJhYnc5NjBQbEhaNU00WTlONkUrYzUvQlo0RG9sNW1RRDB3RkZSSjZIL2NCNXJ1ZHRXZjkyM09kNExwa3JtM0RpWlJVK2UrTktOZVlVSTVNQlJVU2VScGZodk1wNE94WnFYK0NwNUQvS0pnekdwUUkrcTdsV3dCeG5UQVVVRVhrV0RjNXpQVy9FdXNabmVCcVo4OGNtZE1acjlmaXM1bW9kNXV5TmlZQWlJcy9CUE02cmpEZlJWenM4aGR6NVl4TzZFMWM3NGJPYTYzV1lVeklSVUVUa0tmUTV6bklEYjhEK3I4endXTG56eC9xdEc0d0o0TE1ETnhneXpLaVpCaWdpOGd4YW5GY1oweHRLUEVqdS9LRnVRbmN5Sm9YUGFtNHhaSmdSbUFRb0l2SjRWdUlzMXpNNUN3NzNsVHQvcU52UW5ZeTNnczlxYmpKa21ERXdCVkJFNU9GR2g3TXFZMnBqbGVFZWN2ZmpVRFZ2WFgvaVBlQ3ptdHYwbUZFWUV3QkZSQjZ0ejNCTzFqRzEzdU9XQ25jNDFtK2hQeG52NjRUUEdtN1VZY1lQNDNhZ2lNaUR0VGpMRzlPeTRIQUx1ZlBINXEwN0dSOG00TFBBclFKbVZOd09GQkY1S0N0eFZtQmExdVJJS0hlK3JOOUNmekkrZ1FhZjlkd3NZRWJMelVBUmtVZXlQYzdaalV6S21nemI1YzZYOVZ2b1Rud3lIcDhadDZzeFkrQldvSWpJQTQwRnpxbVlsTlVaTnNqZG9XN0RZSHhXaHM4eXBuQkFYR0hjQ0JRUmVadyt3eGw1ejVTc3hrck9WMi9kaVU4djREUFBGR3lIdUFNM0FrVkVIaWJnSEc5TXlKb00xM1BINXYzRXIyS1B6Mm9tTWVhSWE3a05LQ0x5S0RYT2FaaFN5SEdkekZmaHhDOWx3RVRITkFiTUdMZ0pLQ0x5R0ZiaWpHSmdRcjNETmR3eG5QajFlRXd3bFlDNHdyZ0ZLQ0x5RUxiSEdkNll6dWl4WEZFRjQ1ZjBqZ25QWkNyRWxkd0NGQkY1QkhNNG8yRTZWbUd4Zlh2aVYyVTVKZ0tUc1IzaUFqY0FSVVFlWUN3d0wrdVpUc2l4a0EvR0wreUFLV002bGlFcU02NEhpb2pjMzVCajNzNll6T2l4akEvR0w2M0ZWTW1VZXNSNXJnZUtpTnhkbjJIZTBaaUsxVmhrSDR4ZlhFREV5S1FheFAza2FxQ0l5TDI5NDR5V3lRd09DN2pHK09VRlJIZ201aEUzY2kxUVJPVE8zakV2NjVtS1ZWaWc3UGtOQk1RTVRNeHlSSG11QllxSTNGZkFQR2RNWlhDNHlQMDBmZ2MxWWc1TXJrZmNUNjRFaW9qY1ZjQzhnekdWQmhlVlBiOEY4NGdhbVY2RE9PTTZvSWpJUFFYTXE1bks2SEJCVmh1L2h6NUhWTTFiMkNQS2N4MVFST1NPQXVZRnBoSndRZEVhdndjN0lzNFpiOEV5UkFXdUFvcUkzRS9Bckt4bklsYml2Q0x3dS9pWlk4YkEyd2lJeW94cmdDSWlkeE13cXhpWnlPQndsZ3Y4TG5xSE9RMXZwVVRVOGZRWDR6VkFFWkY3Q1pqbGpJbTBPS3NJL0M1NmoxbDczb3psdUN3ckNyZmJINDUxK3hiNkUyZUJJaUozOG81WjNwaUdIWEJPSHZoZDlCN3pjdVB0ZExoYVZ1ekxKdlFuZmdhS2lOekhPMmFWVEdSd09LY3hmZzhXSE00WmVFc2xWaXQ4OWRZYi93V0tpTnpGZ0ZrMUV3azQ1Mmo4SG9ZcXcxbUJOMlVadHNsOUZRYitBUlFSdVljaHc1eUdpVlE0WXpmd1c3QjJod3NhM2xpSEZOd3hES0NJeUIyTU9lWUVwbUY3ek10KzhqdXdkbytMS3Q2Y1J5b1VFYms5YzVnVG1NYm9NSzgwZm4zVzdySEFnYmMzSWhXS2lOeWM3VEVuTUkwaHh5elg4OHZycXgwVzhjWTdxSkVJUlVSdTdvQTVIZE40eDd6SytMVlo4QmtXMmh2dndRcWtRUkdSVzZzeHAyTWFBYk9LbmwrWmhhckFjanZqZlhSSWd5SWlOOVppVHNjMEFtYVZ4aS9MdXNyaEtqdmp2ZXlRQkVWRWJ1c2RjenFtMFdKT0Z2aEZXVGc2WEd0bnZKc0JTVkJFNUtaT0dXWjBUS1BHblAzSXI4ZUdVUGtNSyt5TWQzUkFDaFFSdVNWem1CR1lSbzA1TmIrVVV4K2EwaGRZTGZUOTZRKzhpeEVwVUVUa2xqeG1CS1pSWTA3Z3M3UFRxZS9mM3VyallWY1VTQ2dyM000ZnF1YXRINHkzVWlJQmlvamNVSTBaTmRPb01jT05mQjZuMy9WOUg5N2F1cTRPQjcvYnVhTEFuUlM3UXgxNlkyb2pFcUNJeU8wRXpLaVpSc0FNYjN3RU93MTkvL2JXMXZYaGNOanRka1ZSNEZtNFEvdHVUS2pFZGhRUnVaa0JNMHFtRVRDajV0MVlIOTZhK3VCM1JZRXZZRjhGWXhvallyS21QbmlYWXhtS2lOeUtGWWp6eGlUZU1TUHdMb1pRK1J4ZlQrYmIzcmlkUjR6eEw2Y3V2TlVIbCtNY2lvamN5Z0Z4TzJNUzc0akxldDdjOFBQbzhLVzV0dWRHUFdJQ1A3RSsxQWVIS0lxSTNNaFB4QlVqa3hnUVZ3eThxVk00T253TG1XK05XemhFVkl5enZqbit5UEFSUlVSdVk4Q01nVW1NR2FLYzhXYXNiMzJHYjJWWEQxd3RJTUx4SEh0dkRnWCtSUkdSbXpDSHVNQWtyRUJVTnZKR3V0cmhXOHFybnV0WWhnampKZFkxUHNjZktDSnlFMGZFdFV6Q0hPSUczc0twOWZqTy9sZVBYS05DUk10RkxGUU9GQkc1aFlDNGttbDR4SFZNcjZ0eWZIK3VOVjV0UUlUbllxQ0l5QTJNaU5zWms2Z1Exekl4Kzc4U0w2TWNlQzJIcVl5TGdTSWlOK0FSbFkxTW9rVmN6YlM2RXEvRkJlTlYzaERSY3lsUVJDUzlGbkU5azNoSDNJRXBEVldHMTVQVnhpc1lJaW91QllxSUpEY2lybVVTSjhRNVl6cGhqMmZnZnBIL0JiZFdqbHpPWWNweEtWQkVKRG1QcUFPVHNBSlJoVEVWYXpJOFZ1SExKdlRHV2FmVHFlKzY4UFpXMStYQk81Y2pvY1BBcFZwRUdCY0NSVVJTYXhHVkc1UFlJeW9ibU1oWTRURnk5K05RTjZFN0dWZXdVeGZlbXFOM0diWTdERnpHRUJHNEVDZ2lrdGlJdUo1SlZJanJtY1pZNG82eTNQbEQzYngxM2NtWXpLa0x0WGZZNURCeUVZZXBrZ3VCSWlLSmVVUTFUQ0lnTGpDSnNjVE5aYm5iSGFybXJSdU1OM1Y2YjBxSDFVcmpBaldtY2k0RWlvaWsxU05xenlST2lHdVpnbFZJTGM5ejUzNGNEc2U2Zm5zTDNYQXkzdGtwTktYREtyWHhvZzRSeG1WQUVaR2t6Q0VtTTZaZ0RsRWxVd2c1TnNtZDg0ZERYYmR2b2V1NjA4bjRQS3dMdFM5d3BUendFa1BFTzVjQlJVU1NhaEVWbUVTSktHZmNidngvV0NOM2g2b0ozZW5FcitBVW1vUERGZjdmd0FzOHBob3VBNHFJcEdTSUtwbEVpNmhzNUdaVzRVcnVVSWZPK0JVTjRiakRVcFh4ckJaVG5zdUFJaUlwSFJDVEdWTVlFTmR4czhGaHVjdzNZZUJYMTdjK3d4SjV6M042VEJWY0JoUVJTV2hBVk1jVXJFQlV4YTJzeGxMdUdFNzhOdnJhWVlHRGNaNGhnc3VBSWlJSkhSQlRNZ21QcUQyM0doMFd5UTdCK04xWTYzQlJGampQWVdyZ0lxQ0lTRG85WWpKakNnMmlDdU5HSWNNQ3JoNzRUVm5qY0VscG5GTmlLbkFSVUVRa0hZK1luMHloUjl6QWpTcGNsbFVEdjdXK3hBVjV6eGt0cGhvdUFvcUlKTk1qeGpNRnl4QVZ1STN0Y1ZIWjgvdXpPc2Q1bFRHcXgxVEpSVUFSa1dRY1lrYW00QkYxNURhand3VjViWHdORmdxYzVVYkdHS1oyWEFRVUVVbWxRMHpORkJwRU9lTW1RNEh6WERDK2tGRGdyTUFZVE9WY0JCUVJTZVVISW5KakFqMmlzcEdiREJuT0tqcSttbERnbk1vNDVUREZSVUFSa1VSNnhIUk13REpFOWR4a3lIQk9IdmlDck0xd2hqTk9IREJsWEFJVUVVbkVJOEl6Qlkrb2hwdWNNcHlSdGNiWFpCWE9jQ00vcXpFMWNBbFFSQ1NOQVRFbkp0QWc2c0JOeGdKbmxNYlhkZktZVjR6ODVBMVRnVXVBSWlKcGxJZzRNb0VlVWM2NGhUbk1jd05mVzhneHF4ajRVWWVwTnk0QmlvZ2tNU0xHdUoxbGlEcHhrd05tWllHM1pLZStEMjkvQzMxL01qNGZLekVyRy9oQmo2bUdTNEFpSWtuVWlHaVlnRWRVNENZdFpwWEdHN0FodFBWaFZ4U0lLTnloRGdPZlN1OHdKK3Y1cXhPbUtpNEJpb2lrWUJtbWN1TjJEYUlxYm5MQ25MeG5ZcWZRbHJzQ0M3Z3FHSitHVlpqMXpsOWg2c0FsUUJHUkZBSWlXbTdYSTJyUGJSeG1sTVowckc5TGgrdTRkdVN6NkhQTUNmd0ZwanlYQUVWRVVuQ1l5bzJiV1k2WTNMaEppN2lzWXlMV3Q3N0FPcTQxUGdjN1lFN2dmM0pNT0M0QmlvZ2swQ09pNVhZSFJQWGN4REpFN1VhbWNBcEhoMjJxa2M4aFlFN0xmK1dZY0Z3Q0ZCRkpvTVJVYnR6c0o2TGV1RTJGcUlOeHM2SDFHVklvUno2Rms4T01tdjl3bUhCY0FoUVIyYzRRMFhLekU2SU8zTVlRVlhPam9mVVowcW1NejhBT21GSHpidzRUamt1QUlpTGJOWmpLalZ1WlE0d3pidE1ncHVZV3A5Wm5TTXoxZkFwdm1GSHlMdzRUamt1QUlpTGJPVXkxM0t4QzFNQ05ja1NVWE0zQ01jZE5WSHdLZllhNDB2Z0hod25ISlVBUmtjMEdUR1hHcmQ0UkZiaFJoNGlkY1oyaGRyZ2RiM3dHbzBQYzN2Zzdod25ISlVBUmtjMHFUTlhjeWpMRWxOeXFRc1RJRlN5VUdXNnJHUGtNekNOdWJ5UWRKaHlYQUVWRXRySU1VOGF0UEdLY2NTdUhxWlpYRzFxSE95aEdQb1VLY2M1SWh3bkhKVUFSa2ExK3cxVEpyUnBFamR6S01KVWJyMktoekhBbnhjaW44SVk0TjlKaHduRUpVRVJrSzQrcGtSc05pQXJjTEdDcTRSWDZhb2Q3Y3NhbkVCQlhqQTRUbmt1QUlpSWJHYVk4TnpLSG1JcmJ2V0hLdUpDMUhuZm4rUnlHREZGRmhva0Rsd0JGUkRacU1SVzRVWVdZblhHN0doT09pM1NWdzBNMGZBNURnYVdPWEFJVUVkbG9qNG1NRy9XSUdwbEFqWW1TRjFud2VKeUJ6MkVzc0ZETkpVQVJrVzBNVXcyM3NSd3hnU204WWVMSTgwNk5RMXE1ODRmRHNhNFBoNE1yY0pIams3QWRsbW00QkNnaXNrMkxLZU0ySldKS0p2R0dxWjZ6ckt0eXBPTU9UUmlNSDFuWEhIS2NFL2drYklkRjNyZ0VLQ0t5amNPRTV6WUJNYzZZUkkrSXNtZUVkYlZES3U3UUJPTzhVK3N3S3pNK0NkdGhpWTVMZ0NJaW14aW1BamV4RERFRDB6QkVaYjRkalA4YVFuc29rRWJ1NnpCd2diSEtNS1Boc3pDSEJRWXVBWXFJYk5KaUlqTnU0aEhUTUpVQzg5eHU1M2M3bHlHTjdNY3g5TWJsckVLYzQ5TXdqOHRPWEFJVUVkbkVZYUxrSmo4UjQ1bE1oWHNvZlBOdXZON0pJYXJuMDdBZEx1SWlvSWpJRm9hcG5sc1lZakpqTWdOdXJEZzBuWEV0cXhCVDhYbllEaGZrWEFRVUVka2lZQ0xuSmg0eFBSTnl1Sm5NTjUxeG94b1JPWitJN1hDZTR5S2dpTWdXSGhNVnQvaUptSW9wZGJpSjRoaE9US0pDeElsUHhCek84bHdFRkJIWndERFZjd05EakRNbTVaQmFjUXpHZEJ5bUFwL0pXT0NjaW91QUlpSWJkSmpJdUlWSHpJbHBEVWdwODYweHJST21qbndxWTRZekdpNENpb2hzVUdMaXdBMStJcVpsYWcxU2NWWFBHeWd4c2VOekdUTE1DMXdFRkJIWklNZEU0SHFHbUQzVE95QUYxNDY4alJGVGZESTk1dlZjQkJRUldjOHdaVnpQSThhWW5qbHM1VnZqN1RoTUdKOU13S3dURndGRlJOYnJNT0c1WGtCTTRDM1lIbHVVd1hoVE5TWk9mRFl0NW5BWlVFUmt2UVlURFZlekRCR2V0MkVIckpTVm5mSFdBaVk2UHAwS00wWXVBb3FJckZkaW91ZHFKV0tNdDlKZ2hhTHFlUThuVEFRK253UGluSEVKVUVSa1BZY0pydFlqSnZCMkJvZnJ1R2JndldEaWpjL0hIT0lxTGdHS2lLeUhDYysxckVDRTV5MVptMkdwekFmakhXSGlqVS9JQ3NRRkxnQ0tpS3cyWUtMaFdoVmlSdDZXVlZqQzFUM3ZEQk52ZkVZRFpveThEQlFSV2UwbkpucXVkRUpNeTV1enh1RXNWM1hHdXpOTUJENmxEbkhPZUJFb0lyTGFFUk5jeXlQQzhTNkd5aUVxODAxbmZJZ0JFeDJmVTR1NGloZUJJaUtyT1h6bXVOSlB4QXk4Rnd2SEhYNlYreVlZSHlkZ1l1Q1RLaEVYZUFrb0lySWFKbzVjeHpKRVZMd3ZHOExiSDBKMzRxTTFtREErS2RzaGJ1UUZvSWpJV2dNbWZuS2RFaEdGOFhWNVRQQnBXWVlvWnp3UEZCRlo2eWNtQnE0eUlLYm50Mldub1E5dmIyLzFudzYvcS8vMDl2Ylc5LzNKU0V6cytMeDZ4RlU4RHhRUldldUlDYTdqRUhIZ2QzUHEzNXFqM3hVRjFqanlpYldJQ3p3TEZCRlp5K0V6eDFVQ1lvemZ4aERhY2xkZ204Qm5WaUp1NURtZ2lNaGFtQ2k1aG1XSWFQa2RXR2g4Z1NTTXo4d2NvcHp4REZCRVpLVUJFdzNYcUJEaCtOWFplK1V6cEZNMm9UYytyVEZEVk1VelFCR1JsUUltQWxjWUVOUHpLenVGc3NCTkZMNE92ZkVKQmNRRnpnTkZSRmFxTURGd0JZK0lBNzhzQzRjY04xYjRLZ3g4TWhXaXNwR3pRQkdSbFR3bXVNSTdZb3hmVTE4NzNJMDcvaHo0UlBhSWNzWTVvSWpJU2prK3kzazlLeERSOGl2cXFneDN0NitDOFRsWWhxaUtjMEFSa1pVdzRYbTlGaEhPK09WMFpZWkhjVlV3UG9FT2NZRXpRQkdSZFU2WU9QSnFsaUdpNXhjelZCa2V6RldkOGRFcVJHVWo0MEFSa1hVNlREUzhXb1VJenkvRjJoMmVnMjlQZkt3OW9wd3hDaFFSV2VjTkU0SFhPaUZtNEJmU2wzZ20vNnQ2UHBCbGlLb1lCWXFJckZOam91TzFEb2c0OHN1dzRQQjBzckxqd3dURUJjYUFJaUxySERCeDRwVjZSR1RHTDhLYUhNOHBLenMrU0ltb2JHUUVLQ0t5anNNRXIrVVIwZkpyc0FyUExLc0dQb0k1UkRuakZDZ2lzazZPQ1Y2cFEwUnUvQXJHRWsvUHRjYjdHeEJYY1FvVUVWa0hFd1d2NUJBUitBVlloYS9oMFBIdUdzUU5uQUJGUkZhcE1PRjRuWUFJeCtkbkZiWnpoN3F1bTdmUWRhZlRpWDg0OWFIeFNDMXZqSGUyUjVRemZnYUtpS3hnQjB4NVhzVnlSUFI4ZWo5emJKQzVReDE2NDR3aFEzTGx3THV5REZFTlB3TkZSSzVuZTBRY2VKVVdFWjdQcm5kWUo5K1ZUUmlNWjNVWmJtSGY4WjRDNGtaK0FvcUlYTTBjWW82OGhtV0lHUGpjN0lDcjVUK09UUmlNbDFtRnFCeWJGY0Y0UHlXaVBEOEJSVVN1TlJhSXFubU5GaEVIUHJjVzE4bktNSEN4MFNHbUdFaWUrdTZ0T2Y3SXNWcmVHTy9GTWtUOTVFZWdpTWlWaGh4eERhOWdHU0pHUHJQUjRRcVpiMCs4Um91b3ZmRlhwKzZ0OGhuV3lCcmpuWFNJeW93ZmdDSWkxM25QTU9PTlYyZ1JjZVF6YTdDY3EzcGV4enlpS21PRTlVM3BjTFdzTWQ1SGlTalBEMEFSa2FzRXpIcmpjcFlod3ZpOFJvZWxYRFB5V2o4UkZ6alB1c1pudUU3V0d1L0JDa1M5ODFlZ2lNZzEzakh2amN1MWlLajR2Rm9zNUZyajFjd2pLdXQ1eVNtVUdhNlJCOTVEajZqTStBdFFST1FLUGM0SVhNd3lUR1hHWjJVSExKSlZJMWY0aWJqZHlFV0cxdUVLcnVjZFZJZzY4aGVnaU1oeVE0WXpPaTRXRU5Id1dmVTVsaWc3cmpGNnhCMk1pOWx2WlliRi9NaWJNNGVvbnY4QlJVUVdHektjMDNHeEFsT1o4VW0xV0NCdmpLdTBtTkh3U2wyWllhbmFlR3M5b3B6eFg2Q0l5RkpqZ2JNNkxoVVEwZkE1V1luTGZPQTZvOE9Nd0JXNk1zTXkrVS9lV29Xb212OENSVVFXR2d1YzEzRXBoNm5NK0pUTTRhSnk0RW9OWmhRRDE3R3d4ekorNUcxWmdhZ1Qvd0dLaUN4akRoZDBYS2hEUk1Pbk5PUzRwREt1TkRyTTJCdlhzeWJISWcxdnEwZVU1ejlBRVpGRnpPR1NqZ3Q1VEdYR1ovU09TeXJqV2czbVZNWnRPbzhsM01DYktoSDFrMzhEUlVTV3NEMHU2cmpNZ0lpYXp5amdnc3E0MXZnRGN3SzNHeXNzVVJ0dnlISkVHZjhDaW9nc3NjZGxnY3VVaURBK29Scm5IWXlyQmN6SmVpWmhiWTdMM01nYjZoRGwrUmRRUkdTQkVndThjUkZEUk1VblZPT3MzY0RWck1TY25UR1pVT0N5aGpkVUlpcndUNkNJeUdVVmxuampJaFVpak0rbnhEbDU0SHA5Z1RsSFkwckI0U0p2dkJuTEVKTVovd0NLaUZ4VVk1RTNMbUVacGlvK254TG5WTWIxR3N3S1RLMXp1Q1I3NTgwRVJKWDhBeWdpY2ttTlpSb3UwU0ppNU5NcGNZWTdjVDN6bUZNTXZJRlE0SkxLZUNzZVVlLzhIU2dpY3NGUExGUnpDWWVwa2srbnhCa3ROK2h6elBIRzIyaHpYT0JHM3NpSXFOeElnaUlpNXdVc2RlUUNQU0lHUHBzYTgvWWpOMmd3cStITldJMExzcDQzMGlMcVNCSVVFVGtyWUxFREZ5Z3g1ZmxzV3N4NzR3Ym1NU2Z2ZVV0MndBVXRiOFFocWlkQkVaRnozckhjRDE1bWlPaDViOGF6QW1hNUV6Y1ljc3p4eGh2ckhjNDdHRzlpUUZSdUJFVkV6bmpIakYyR0NjZkxmbUxLOGQ3R2t1ZjBtRlVhTjJneHErRWRoQXhuT2VOTlZJaXFDSXFJekh2SGpNSWNKbkplNWpBVmVHZm1EanpqbEdGTzRBWldZazdXOHk2c3hGbkZ3RnV3SEZFOUtDSXlhOENNYk9RQlU3eG93RlRPZXl0UmM1NFZtTEVidWNIb01HZHZ2SmZlNGF6QVcrZ3dneUlpYzRZTU13YXl4cFR4a2hKVERlK3NCMnJPMjJPR04yN1FaNWhUR2UvSEtwejFrN2ZnRVVjUmtSbERoaG1CWkl1cEV5OHdUR1hHTzNQQUcyZFZtRkZ6aXhaenNzRDdHaHpPcVhrRGhqaUtpTVFOR1dhODhYY0JVeDB2Q0ppcWVHY2RnRGZPQ1pnUnVFV0ZPYnVSOTJZMXppbDVBeTJpS0NJU05XYVlVZkVQQTZZQ0wvaUJxWkYzNWdHOGNjYUFHWUViMkI1ekt1TUQ5QTVuZUdONkRqRVVFWWt4aHhrbC8yU1lhbmplZ0ttU2QyYjRYY000eXhFWHVNSG9NQ01MZkF5cmNNYmVtTnlBR0lxSXhGU1k0WTEvd2RTUjUxV1k2bmxuditGM05hUHNCK0lDTitnenpOaU5mSmd1dzd5OU1ia1NFUlFSaVFpWXNUUCtMY2VFNTFtV1ljTHgzaXI4N3NDb0krSUNOd2lZVXhrZnlQYVl0emVtWmhtbUtDSXlOV0JHWWZ5SHcwVE9zd0ttZnZMZVBIN25HTk1pcnVZR0xXWmtnUS9XWUo0enBoWXdSUkdSQ1NzUWw0MzgxeEZUUEd1UGljeDRiem4rd0lnZWNTVTNxREREalh5NFBzZXN2VEcxSFNZb0lqSnh3SXlCL3dtWUduakdpS21LZDRjL0RaeXdIRkY3NDJwV1lrWmxmQUxtTVd0dlRHekFCRVZFUG1zeG8rTXZUcGdLUEtQQzFNaTd3NTlhVG5oRTVjYlZiSThaZ1UraXdheTlNYkVLbjFGRTVKTUJNd0kveUREUjhJd01FNTczaHo4NWZsWWhidUJxNWhEblRud2FmWVk1SlJPekhKOVFST1FqS3hEWDhDT1BpUVBuL1lhcGpuZG4rSXZ4b3g1eExWY3poN2lEOFltTURuTXFKaGJ3Q1VWRVB2S0lxL2hKaXduSGVSNFRHUjhBZjZuNWdlV0lLcm5hNkJCWDg3bllBWE5hSnVieEVVVkVQbWdSZCtCblBhWTR5ekJWOHdId2w4ejRxeEpSenJqV1dDQXU4T20wbUJPWTFna2ZVVVRrVndQaTlzWUpUUFdjVTJQSytBQTUvbEx4RisrSUc3aldXQ0FxNi9tRXVnd3plcVpWNFFPS2lQekNIS0tjY2NwaG91V2NIQk9laitEd3Q1SC9zZ3hSRGRjYUMwUzVrVTlwS0JDWGpVektjdnlLSWlLL09DSXFIeGxSWWFMa2pBNVRIUi9oZ0w4NTR6K09pUEpjYXl3UXRUYytLWE9JYzhha092eUtJaUwvQ1lnYkdCTXc0VGlqeEVUR2gyandqNHAvR3hDVkdWY2FDMFI1NDJWRGFJOStWeFQ0UTFZNGYyeERiN3cxODRqelRNdmpGeFFSK1pjaHJtT1VZY29ZWlppcStSQUIvNnI1RjQrb3dKWEdBbEVsTHpqOUxCMW11TEo5Tjk2UWVjUlZUR3JFTHlnaThpK1BxTUFaR1NaNlJyV1lHdmtRaHYvVS9FT1BLTStWekNHcTVqa1dmSVpMQ3QvMnZCWHppQXRNcXNKL0tDTHlqd1pSTmVkNFROU01jcGpZODBFSy9PZGdKRDFpTXVNNjVoRFZjTjdZT0N6bTJ4TnZ3bmFJT3pFbHkvRXZpb2o4YlVEVWdiTWFURGpHREpnS2ZKQURmcEgzSEJBVnVJN3RFVlZ6anJVN1hDbXJldDZBN1JEbGpDa0YvSXNpSW44eGg1akNPS3ZIbERHaXdwVHhRUUkrMkdlSThWekpJNnJtak01amxhenFtWndWaURvd3FSMytRUkdSdjFTSTZqblBNTlV4SXNORXlVY3hMR0ZjcDBKVXpTaHJjcXpuZ2pHeE1VTlV5NVFHL0lNaUluL3FFZFh3bkF3VE5hZCt3MVRQaC9HNHJPVTZEYUpxeGxpRnJjcVJhZldJT3pHbEkvNUdFWkUvbUVPTTUxa2VFNDVUSGhNWkh5ZmdvaDNYQ1lpcUdXRU5VaWhISmhVUTVZd0pXWWEvVUVUa0R4VmlNdU5aRmFhTW54bW1LajZPNGFJVFYra1JWVE1pNUVqa01ES2xHbEUxVXdyNEMwVkVmdGNqcXVONUFWT0JuN1dZR3ZsQUpTNm91Y3FZSWFiazFMQkRRcFV4SVkrb2Q2Yms4Q2VLaUpCV0lLYmlCU09tUEQ5em1IQjhwQUhuT2VNYTVoRGpPV0VWMHNvRDB6R0htTXlZVUk4L1VVU0VyQkhqakpjNFRCay9HakRWOHFFOHp1cTVpa2ZNM3ZoWjc1RGN3WmpNQ1ZFbFV6cmdEeFFSNFlDb2dSYzFtT3I0VVlVcDQwTjFPS2ZrS2hWaWRzWlByTUl0NUQyVENZaDZaMElqL2tBUkVUckVOTHhzeEZUSmozSk03UGxnTzh6TGpHc0V4T1RHVDBhSEc2bVlUSTJZekpoUWhkOVJSS1JCak9NU0RoTVpQeGd3MWZMQmVzd0xYR1BNRURQd2s1RGhadmJHVlBhSU9USWh5d0ZRUkY3ZWlLZ1RsMmd3MWZGWERhYU1qM2JBSE04MXpDRW04Sk1hdCtSR0ptSVpZbm9tRkFCUVJGNmVSMHpEUlF4VEpYL2xNT0g1Y0lZNXhqV09pR240a1huY1ZqWXdrUjR4amludEFJcklxM3RIak9OQ0hsUEcveGltQWgrdlJWekxOUUppRHZ6SUhHNHRHNWhJZzVpV0NRMEFSZVRGV1k2WUV4Y0ttR3I1bjRBcDQ4T1pROVNlYTR5SWNjWVB4Z0tMNWU1dzhNNjVIRmZLQmliaUVETXlvUklVa1JkWElhYmhZamttSFAvak1lSDVjUFlEY1NldVlBNFIyY2dQaGd4TDdJNU5PUEVYcCs2dDlqbVd5Z2FtVVNQbXdJUU1GSkhYZGtLTTQzSTFwa2Ird3pBVitIQWw0aHF1VVNHbTR3ZERoa3N5M3c2Y1lWM2xzRWcyTW9rZVVUMFRBa1hrdFhuRURGek9NRlh6SHgybWpJLzJFM0dPYS9TSXFmakJrT0c4ck94NWdYVlZoc3VjTVlrTU1ZNEpnU0x5MG5yRUhIbU5FaE01LzFGaFlzOUhHekRqeEJYTUlXTFBENFlNWi8wSXhrWDZLc01sbmtsNFJBV21BNHJJUzNPSXlJelhHRERWODI4NUpsbyttQldJYTduR0VSR1o4VmRqaG5QS2dWY0llMXpRTUlVR1Vaa3hHVkJFWGxtTG1NRHJlRXlVL011QUtlTmoyUS9FN2JsR2o1aWV2eG9MbkZHT3ZOSlk0cnlCQ2ZTSWE1Z01LQ0l2ekRKRWVGNnB4NVR4VHpVbUhCL0w5b2pMakN0WWdZaUt2ektIZVllUks0d2x6bkhHN1F4eG1URVZVRVJlV0lXWUU2L2xNTkh3VHc0VExSL0s5cGdSdUVhRkNHZjhsY2NzMTNPbGs4Y1pSeWFRSTY1aUtxQ0l2SzRSTVJXdjFtRWk0eDhNVXlNZnFTOHdvK0lhQTJKTy9GV0ZXUzAzNkhQTTY3bWR3d3hqSXFDSXZLNFNFWm54ZWc0VGdiOXJNZUg0UUw5NXpISEdOUndpR3Y0cVlNNSs1Q1pXWVpiamRnZk1LSmtJS0NJdmEwQk00QW85SmdyK3ptT2k0cU1NVllaWjJjZzFmaUppejErTkdXWTAzS3pMTUNkd3N4cHpqR21BSXZLeVBDSWNWL0dZYUVuRFZNK0hHQ3FIYzNxdVlSa2lqTDl5aU10NkptQjd6TWlNVzdXWVV6RU5VRVJlVlkrWW5xc01tQnJaWVNMai9WazRaRGp2amFzY0VkSHlWelhpZHNZa3JNU01obHU5WVpZeENWQkVYcFZIaE9kS0IwdzRxekJSOHE2c2IzMk9pMHF1TWlEQzhWY0Q0a3BqS2pYaU11TkdiNWhWTVFsUVJGNVVqNWlCSzQyWTJqdE1CTjdMRUJwZllCRnZYT1gvSWVMRVg1aERWTVdFYXNTMTNDaGduakVGVUVSZWxFZkVnYXRWV01SNGF6YUU5cmd2c056T3VNcFBSTlQ4Vlkyb21rblZpTXFNMjNTWTF6QUZVRVJlVTQrWWthdFpoZ1VjYjJjSWJlVWRydWFNcTFpR0tXZjh4WWlvbW9tVmlBcmNwc084akNtQUl2S2FQQ0lxYmhDd1FNMGJzTDQ5N2d1c1ZJeGNwMFZFejE5NXhOUk16ZmFJK2NGdEFzNElUQUFVa1pmVUk4YTR4UTZYOVV6THVzWm4yR0puWE1jeVRCMzRxeDR4SmRPekRERWpOM25ER1k0SmdDTHlrandpS200eTRLS01LWFhWRGx2dGpDdlZpQmo1SzRlSVBXK2hRMHpOVFJxYzAzTTdVRVJlMFlBWTR6WkhYT0taelArVlNNQWJWekpFMVB4VlFJUXoza1NKaUl5YjFEam53TzFBRVhsRkpTSXFibVFaTGdoTVk2d3lwRkJ4dFJKVHVmRlhCU0pPWE9ZVTJycXUyekJ3R2NzUTBYT0xBODR5YmdhS3lBc3l4QmkzQ3JqZ3hCU0dBOUlJWEcxRVJNZGZCVVFFTG1EQlovaVhEOFlGV2tUVTNHS0hzMnB1Qm9ySUM2b1FVWEk3ajdNS0pqQWVrTWIreFBWS1RIbCs0RERsZVpsVitLd2NlWkVWbUhMY0lzZFpHVGNEUmVUMVdJYUlrZHVOT092SXpheEdHa1hnQmlNaUJ2NnF3MVJtdk1RcXhCeU5sd1JFY0F0YzhCdTNBa1hrOVRTSThFeWh3VG1CVzQwT1NiakFUU3BNSGZpQngxVGdKYjFEWEJaNFNZNnBnZXNOdU1CeksxQkVYaytCaUo1Sk9KeGgzQ2dnaGF3YXVJMGhZdUN2Umt6dGVFbUxlVWZqZVEybUF0Y0x1TVM0RVNnaUw2ZER4QSttTVdDZTQwWTF0blAxd00wcVRKWDhvTUpVend0S25PT01aeG1tYXE1WDRaS0dHNEVpOG5JOElnSVRxVENyNGpZVk5uTFZ1ekVCUThUSUR6Sk1ISGhCaWZPS2tXZDVUSlJjeitHUy8zRWpVRVJlellpSWpLbVl3NXpBVFdwczRNcTJaeW9OcGlwKzBHRnE0SGtsTGlsR25oTXc0YmtlUG1nUTBYTWJVRVJlVFkySWhzbjBtR1Bjb3NVNjJZOHFERXdxdzVUeGd4SVRudWMxdU13Wnp6Qk1PSzdXNDROVGhhbUsyNEFpOG1veVJCalRLUkZYY0lzZVY4dCtITnZPbUZ6QVZNV1BNa3dFbnRWaGliM3hqQUtmNVZ5dHdRZG1PU1l5YmdPS3lJdjVEUkVsRTdJY1VVZHVZQm11OGVQWWRzWWJjWmd5ZnRCaEl1ZFpsbUdSaW1jYzhGbk8xUncrSUFPbU9tNENpc2lMOFlqb21WS0hxTUFOUEJaeWgrYmRlRXM5cGtwK1ZHR2k0bGtlQy9XYzErQ3puR3NaUGlLWlk2TGtKcUNJdkJaRGhHTmFKV0pPWEM5Z2dmelE5c2FiTzJCcTVFY09FejNQNmJGVXdYa0JuK1ZjSytDRG5HU0RLZU1Xb0lpOGxnWVJEZE95REZNWjE3TU1GN2dxR08vQ01GWHlJOE5FeHJNY0ZndWMxZUd6bkd0NWZPQklHcVorNHhhZ2lMeVcveUhDbUZqQWxPZDZOYzd5d1hnM05hWUdmaFF3Y2VBNUFjczV6dXJ3bWVOS2hvODhmK2N4VVhJTFVFUmVTbzhJeitROEpocXVaamlqN0hoWEdTWThQemxpSXZBY2h5djBuTlBoTThlVldueDA1TzhDcG93YmdDTHlVaXBFL01ia2pwam91VnFET2U2bjhiNDZUSFg4eEdIaXhETjZYT1BBT1cvNDdNQ1ZmdUNqaHI4elRQM0dEVUFSZVNrWnBqS210OE9FY1MzTEVPZDczcDNIaE9Obm1NaDVUb21JUXhqTWh1QXhZWnhSNGJPSzZ3ejRKUEFQSGhNbE53QkY1SlYwaUtpWVhvYlBIRmNMaUhJOTc4OHc5Wk9mREpqd1BDZkRoQi81dDk3aGs0WXpIRDVydVU2SlR3YitvY1ZFeGcxQUVYa2xKU0o2Sm1lWU9ISzFQV0pxNHdNMC83ODlPRkZzRkZtMkJicEJMMzNLZ0JuczdGdUFpUDMvbi9scTZ1NnFqR1FVQ0xVVmEwRkpoQUVQcGVLRUZrckRmOGtML3BRd1RxQzAzRVFRRW41M2hkWnhPOUFZODBRRUVRbjMxMEx4M0VvUWtYUThSUXFsWXFpQzRqbWhRc2p6ZDVMZ1Q1NVJOUlRoSmlVQ0NYOUtvWlRjRGpUR1BKRy9FRkZ5Zis5UXJ0eXFnWmIwUEVVTFRSaktvUFNjNEJBbytLY1dmN293UmhLRUx0eEVFSHJoVHprVXgrMUFZOHdUS1JEUmMzOGxGRzZXUWV0NWpnSktSc1ZCNFJTRWhJRWNmL0tNZUlOU2NKTTNoTjc0azRjbTNBdzB4anlSQkpyakFUS0V2bkN6QkVyTmN3aTBsa3FLVU1vSlZ3UktobnI4S1JFcUg5QmFidEZEYWZqVEZWckR6VUJqelBOb0VWSHlBQ2xDSmJlNlFybndKQjVLUWcySzR3U1BRRThsdzU4eWhqNFF3UzNFUWVuNFN3b2w0MmFnTWVaNWxJam91VCtCNHJtVmgvTE9rMlJRS2lwWEtEa24xUGhUUXExRG9PQWZwRUJFd1MwS2FNSmZjbWpjRERUR1BJOFVXc0lEOUZCNmJsVkRFWjVEb0ExVXJsRGVPS0hDbjE0WTRSQW9oUCtRT2tGTXp3MHFhQmYrelVOcnVSVm9qSGthUFNKS0hzQkQ0V1lGUWlsUDBrQjVwZFpCcVRpaHdwOXlSdFFJcGJYd3U2dlBFSmR6QTQrSW5IOFRhQ1czQW8weFQ2TkNSTXNEVkFpOWNMTWNvWXduY1ZBOHRSWkt3d2s1L3BRelFoRGhzc3hoWE0vMXZpS200VDhjRk1ldFFHUE0wM0NJRUI0Z1EraU5tK1VJNVR5SFFCTnFMWlIzVHNqeHB5K015YkJXd2ZWNlJQWDhSd2xOdUJGb2pIa1dnb2lNUjdnZzFIQ3pIS0djNTJpZ0ZJeG9vYnh6UW9VL1hSampzWlp3dFQ1QkZQL1ZRdlBjQ0RUR1BBdVBDTThqUUdtNVdZNVF4bk00S0MwaldpaWVFeW9FaEJHU1lKMkdxdzBYUkdYOGwwQXJ1UkZvakhrV0pTS0VCK2loQ0RlckVISThoVUJKR05OQ2FUbWhSc0F6cHNRcUwxeHR1Q0N1NW04eUtCZHVCQnBqbmtVS3pmRUlIcUdFMjNrb3dqTTBVRXJHdEZCYVR2QUlaSXdac01yQXRZWUxSdlQ4VFFOTnVBMW9qSGtTVjBTVVBFS05VTWJ0cmxBYW5zRkI2UmpUUW1rNW9VTklHSk5oQmMrMWhndEdKUHpkRlpybk5xQXg1a2swaUdoNWhCeWhramRJRUxyd0JBSWxZVlFQNVowVEJLR0dNUjJXcTdoV24yQk14ajhrVU42NERXaU1lUkk1SW9SSGNBaDUzcUNBVXZQK0dpZ2xvNjVRM2prbFFjQXhLc05TQmRmNmluRU4vNUJCdVhBYjBCanpKRkpvam9lQTB2RUdMYlNlZDVkQjZSZ2xVTjQ1SlVPb1pjd1ZDMlhDbFJwTXVQSVBEVFJ1QXhwam5zTVZFVFdQSUZDRXQwaWhwQVB2VEtBa0hBR2w0cFFhb1l4Uk5SYkpoT3RJamdtT2YrcWc5ZHdFTk1ZOEI0K0lqa2Y0aWxEQ205VFFMZ1B2eTBNcE9DSkZxT0tVRGtyUHFCd0xsRnlwZDVoU01nRE5jeFBRR1BNY1NrVHdFRFZDTDd5SkpOQXVBKzhxaC9JWFJ6aUVjazZDa2pOS0NzeHF1RktOYVIwREwxQktiZ0lhWTU3REYyaU9oM2hEcU9CdGFrUWtIZThwZ1NJY2tTSDB3a2tabEo1eFRZSko3c3AxQm9kcENVTnZVREp1QWhwam5rTUNyZUloWGhDcWVSdEpFTlB3Zmpvb0djZFVDRjA0NlM4b0dVZElsV0pVMGdoWGtRcHpDb1k4bEpTYmdNYVlweUNJNkhpSUJDSFBHeldJS25rM0pSVFBNUjRLSndtMGptUEVaNGhLS3VFNm5jT3NscUVlbW5BTDBCanpGRHBFQ0k4Z1VIcmVTQzZJeW9SMzRxQUl4L1JRaEpNS0tLbHduRFFaUXE4ZnduWGtEUXNJRldnZHR3Q05NVS9oSFpyaklWb292SmxIM0t2d0xnU0s0eWlCMG5GU0I2M2l0SzdPWFlvZjBxejB3clY4aWdVS2FnNks1eGFnTWVZcGxORGVlSWgzaEZMZTdvSzRWK0U5TkZCS2pyc2cxSERhRjJnOUY1Q3JjSk0rd3lKL1VjdWhsTndDTk1ZOGhReWE1eUZxaEJ4djV6R2k1RDFrVUZxT3l4RjY0elFQN1NJOGpMeGhJYUZXUS9uQ0xVQmp6Rk53MEs0OFJJVlF6dHNKeHZTOGd3U0tjRnlEa09PTUM3U2NCNUVhU3hXTThGQVNiZ0VhWTU1Q0FpWGhNZDRRcXJpRERDTXlIdThLeFhGQ0Q0VXpQQ0lxSHVJanhXSi9NZUlLVGJnQmFJeDVCZ0l0NHpGeWhONTVzeUhIS09IaFBKU2FVNkIwbk9FUTRiay9mOEZ5aVRBR1dzc05RR1BNTTdoQ3EzZ01oMURMV3pXWTRIbTRIRXJQS1E2aG1qTTZ4SHpsenZ3RmF4U01jbEFhYmdBYVk1NUJDKzByaitFUXV2STJVbUJLeGNOZG9BaW5WQWhsbkZNZ3huTkgwcVJZcDJWVUJ1V05HNERHbUdmd0RrMTRqQlFoM2taZU1Tbm4wUVJLeWtrZEZPRU1TUkJUY1M5U0oxZ3BZVndKNVF2LzBmc3F6MTVlOHJ6eVYwNENqVEhQb0lLUzhDQUlKYnhOZ1drbGo5WkN5VGd0UWVndnp2R0l5b1I3NkF1c1Z6S3VocEx3Qi9GWmd0OGtSU3NjQlJwam5rRUJKZU5CRUhLOFNZMFpOWTlXUTZrNExVT280S3dDVVlubnJjUi93UllENHp3MElka1gwSkphT0FJMHhqeURERXJKWTF3UnluaUxIbk5hSHEyQTRqbXRnU0tjSXc1eFdjOWI5RVdDVFJ4SDlOQmFkaGxHbE1JbzBCanpEQndVejJQMENCVzhoY01jNGRFY2xKN1RCTXBmbkhWTk1DSWZ1TkZRTzh6SkNrUTFIQ0hReWdMajBxK01BWTB4endEYWxjZG9FYXA0Z3daekNoNE9tbkNHUXlqanZBNmpzbzdyRFkzRHJFdkhERkhDTVZqdFRhaUJ4cGduSU5CNEVJL1FPN2VUQkhNNkh1MEtKZVdjR3NyQWVSN2pYQ05jb3l0Zk1DOXBoSUtvZ3FOU3JPWUdLcUF4NWduMFVGNTRrSGVFUExmem1GUHljQjVLeGprRGxKSUxWSmlTL1o5d2tXdVRKVmlpRkpJVm9ucU9jbGd2NlJrQ2pURlB3RU41NDBFcWhGcHU1ekRqamNlcm9WU2M1UkJLaEF0VW1QYmE5SndrWFpNbFdLWVkrRjJDR01keEdUWkllZ1pBWTh3VHFLRTBQRWlGMEpXYkNhYTVsbmRRUVBHY1ZVUHhYS0xDTEZmNlRxaEk1NnZzZ3NYeWdULzhoU2pQY1cvWUl1bjVKOUFZOHdSS0tDMFBraU1rM014alhKSTFBKy9pQlVyUFdRTVV4MFVhTE9OZThyS3E2dmVtcXFvOGU3bGduYnpuTHhsaUV1RzRDcHRjaEg4QWpURlBJSU1pUEVpR0VMZDdRNXlydndydkpvVWluUGNLcGVVaUhzY3JldjZ0UjFURkNlL1l4Z2wvQnhwam5zQUZvWVJIY1FpazNPNEZNYlh3cnFDa1hNQkRlZVV5WFlKakZRUC9WU0JLT09FZEcxWDhIV2lNZVFKUVhuaVVGQUhIN1M3UVhvVDMxVU5KaFBNRVdzZGxCb2ZqSkxYd040S29nbE04dG1yNUc5QVk4L24xVU41NGxCU0JGMjZYUWttRmQrYWhsVnlnZ0pKeElTbHdFT2VGZjZnUTFYTktpNjBTNGI5QVk4em41NkhVUEFwQ09iZExvWGplVzQySW52TjZhQjJYOGdrT1VIUU1TSUtZakpONmJKYnhYNkF4NXZPcm9YZ2VSQkRLdVIwMDRiMlZpTWk0d0Jjby8rTmlrbUZuYVNWVWFrUjFuSFRGZGgzL0FScGpQcjhDU3MrRFhCR3F1QjBVeDd2TEVQT1Y4enkwbHN1MUtYWlV0SXlRQkRHTzA2N1l6Z24vQmhwalByOFhLTUtEdEFoVjNPd0tKZWZkT2NSY2hQTlNLQmV1SURWMjh0b0lvMnBFdFp3bW1PYks5N3JBaUlaL0E0MHhuMThLaFVkcEVYcm5aajJVbkhlWElLcmh2QnBhd3pXa3hPMWNJeHdoQ1dJYzUyQ0thL21kTklnVC9nSWFZejQvS0NtUDhvN1FPemRyb2VTOE44RUk0U3hKb0NUQ1ZhUktjSXZYUmppdVFsVExPWmlRQzM4WkhHSnEvZ0lhWXo2OUs1UVhIcVZHcU9WbUhzb0w3KzJLRVFYbjFkQUtyaVR2RHRza3VSZE9FVVE1enNLNGd2K1NGMFFrd3A5QVk4eW4xMExKZVpRS29aYWJaVkJTM2x1TE1UMW5TUUt0NDJwOW1XQ3RyTzQ1cDBCVXgxa1lsZk4zY2tIRUIzOENqVEdmbm9kUzhpaHZDTFhjeWlOQ2VHZnZHUFBDZVJVMEo5eWdLeDJXU3JPbTV3STlvakxPd3hnbi9FT1BDTWVmUUdQTXAvY09wZVpSY29TdTNHaEFUTXM3cXpEcWc3TWtnVlp4Ry9Gdkw1aHh5ZXF2d29VeVJQV2NoekVkQXcwaU92NEFHbU0rdlFyS080L2lFTHB5RzNHSXFYaG5PVVlsd2xrTklucHUxL3NxY3lsQ3FjdmVhdDl6amErSXlya0FSdVJVWHFDVi9BRTB4bng2YjFCYUhzVWhkT1UyQmFLU2p2ZmxNTzZOc3lTRjVvUzN1bDY3dG4zL3hyZHRkeFZ1SUFtaUJpNkFFUU9WRGxyQ0gwQmp6S2VYUTJsNUZJY1F0L25BbUt6alBhV1kwSE9XUjBUSkIxQWhxdVFTaU1zWWtVTnIrUjFvalBuME1paFhIaVZEaUp0Y01lSC8xVDN2QmxPY2NOWUxJcjd5ZEZkRUpjSUZCSEV0STNwb0piOERqVEdmbm9OeTVWRnloTGpKQzZhbHBSZmVnMkJTelZrOUloTGh5Y1FoNm9OTFhCR1ZNT29WaXVOM29ESG0wM05RZUpnY0lXN2hzVUNhbGUvdjcwMVZWWG5tTHRuQUkxd3g3Y3BaYjRod3duTlZpSHJoSWxkRWxZenkwSVRmZ01hWVR5K0Z3c1BrQ0hHTFY2eFg4QWc5cGpuaEhFa1E4Y1pUOVlqcnVVaUhxSlpSa2tEeC9BWTB4bng2S1JRZXBrSWc1UWFDT0ZlK3Y3OVhXWUtZa2tkb01hUGlMSStZaGljU2g2aVN5N1NJRXNZVlVFcCtBeHBqUHIwVW9ZU0hxUkJJdVVHRG1Mem5MOWNtU3hDNENJL2dNYWZuckF3eEhjOVRJaW9WTHVNUmszRkVDeVhqTjZBeDV0T0Rrdkl3RlFJcE44aWdwUjMvY1BWbDV2QkQ2ckxLQ3cveGpqbE9PRWNRa3d3OGkwZGN4NFZxeE5RY0lWQlNmZ01hWXo0OUtDa1BVeUdRY29NVVNpSTh4VHRtdlhHV1I4eEZlSTRCY1FXWHFoRFRjVXdHUlVpQ3hwaFBEMHJLdzFRSXBGeFBvTFU4eHp2bWVjN0tFT09FWnhDSHFFUzQxQnRpaEdOcUtEMUowQmp6NlVGSmVaaDNCRkt1MTBQSmVaSUs4NUtCY3lSQnpLdndCRG5pV2k2V0ljSnhWQWZGa3dTTk1aOGVsSlNIZVVjZzVYb3RsSjRucWJDQUU4N3BFUFVxdkxzS2NRV1hjNGg0NHlpQjhrNFNOTVo4ZWxCU0h1WWRnWlRydlNQa2VKWUtTNVNjVlNFcTU3MTV4RG5oY2draVBNZEJxVWlDeHBoUEQwckN3N3dqa0hLOWQ0UktucVhDSXA2elhoRlY4TDU2ak9pNW5DQ201emlIVUVFU05NWjhlaWtVSHVZZGdaVHJ2U1BrZVpZS3kvU2NJeW1pQ3VFZDlRbmlhcTdRSTRZVE1vUnlrcUF4NXROTG9mQXdIb0dVNjcwajFQSXNGWlpKaEhONnhMMEs3MlpJRUpkeERZK0lGMDdJRWNwSmdzYVlUeStGSWp4S2l4RFg4d2kxUEV1RmhaeHdqa2ZjcS9CT2hndmlMc0kxYWtTVW5QQ0dVRTRTTk1aOGVnN0tsVWRwRWVKNkxVS2VaNm13Vk01WkplS2M4QzRHaHhFOVY4a1I0VG1oUk9pRkpHaU0rZlFjbEo1SGFSSGllajFDTmM5U1k3R1NzekxFWFFiZXdYREJDTTkxSENLRUUzS0VNcEtnTWViVHk2QzBQRXFMRU5jVGhES2U1UjJoNUJVakdzNFJoN2lrNCtHR0MwYVVYQWtSS2Fka0NPVWtRV1BNcDVkRDhUeEtpeEEzUUNqaFdkNFJTaVhGQ004NWNzRUl6NE1ORjR4NDVVbzlJbkpPY1FqbEpFRmp6S2RYUXFsNWxDdEN3dlVjUWgxUDRoRksyV09NNTV3aHdZaVNoK29TakhEQ2xUd2lHazZCa3BNRWpUR2ZYZzNsalVlNUluVGxlamxDSlUvU0lwU1NIbU8rY2s2ZllNU3I4RGdlWTVLQmE3MGg0c29KVnlodkpFRmp6S2YzRGlYalVhNElYYmxlalZBaVBFZUxVRXF5eEppdm5OTW5HSEhwZVpRR28zcXU1cUFsbk9LaFZDUkJZOHluMTBLNThDaUNVTWYxT2loLzhSeFhoRktTOG9veFh6bW54YWdQSGtJS2pHcTVtaUFpNDVRYXlqdEowQmp6NlYyaDhUQUl0VnhQb0dROGh5Q1U4aHRKTWNaelRvdFJoWEIvZzhNb3ovVThJaHBPeWFCNGtxQXg1dk9EMXZNb0NMWGM0QUpGZUE2RVVuN1hZNVRubkJhakxqMzMxaVVZMVhDREVoRTlwemdvTFVuUUdQUDVwVkE4ajRMUU96ZklvVFE4QnhUKzRER3E1cHcrd2FpYXU1SVM0eXB1NFJEQlNkQ3VKRUZqek9mM0JVckpvNlFJdkhPREJrckdjNlFJOGFjU293cmhqRDdCcUd6Z2ZnYUhjUlczR0JDUmNVb1BqZCtBeHBqUHI0VHloVWRKRWFpNVFRK041M0FJOFNkNXhhaFg0WXpyQmVNK3VCZVBDUlUzYVJCUmNZcUhrdkliMEJqeitYbG9QSXBEb09JVzBIcWVJa05JK0pPa0dPVUd6aGhlTUM0VDdrRXlUS2k0alVORXh5a2xGTWR2UUdQTTU5ZEQ2M21RRElHY1d6Z29ucWQ0UStqS1gzcE04SndocnhpWGZQQjJINWhTY1J0QmpIQktCcVhnTjZBeDVnbEErK0JCQ2dSeWJ2RUs1WjJucUJCcStiY1dFMHJPa0FJVHNvRzNHVEpNOGR5b1JvVGpwQVJLelc5QVk4d1QrQUtsNEVFcUJCdzNxS0RWUE1VN1FpMy84WTRKWHdiT3FER2w0UTJrd2lUUHJSd2kzamhGb0hsK0F4cGpua0FKNWNLRDFBZzRybGNoNHAybmFCSHkvRmVGS1o0elBLYTRubHQxRjB4cXVWV1BHTThwWDZGZCtRMW9qSGtDSHByd0dPOElwRnhMQ3NSNG5xSkg2SjIvS1RHbEVFN3JVMHg1RTI0eFpKaVU5dHlzUkl4d1NnMk4zNEhHbUNjZzBEeVAwU0xFbFFhSEtPRXBCS0dLdnlzd0pmV2NKcStZa241d05Ta3d6UTNjTGtGRXdra1psQy84RGpUR1BJTVVTc2xqZEFoeEhZODR4NU1rQ09UOFE0RkptWEJhaVVuLzY3bUtWSmlSQzdmN0N6RVpKMTJndlBFNzBCanpESElvanNlNEluVGxDdktHRVo0bmNRaGsvRk9GYWJWd2tzZTBOK0ZpMHFTWVVmTVdHV0lhVGhGb250K0J4cGhuMEVBVEhrSVE2cmpjNERBaUZaNGtROEF4VUdGYTZqbXB2MkJTMG5BaGY4R014UE1XQTZKNlR1bWdYZmtkYUl4NUJqMDB6Mk1nNUxuWVY0enlQRXVKUU1xUXg0ei9kWndpcjVoMjZiaEE2ekRIRGJ4SmlTaE9xcUVrL0FFMHhqeUZCRXJKWXlCVWM2a0dvektleGlORXBVc3dJK3M0UVVyTXlBYk9hQjFtRmNLYlNJSVl4MGtabEl3L2dNYVlwNUJCdWZBWUtRSWxGeW94S2hsNG1oYWhLNVdydzV5czVRU1BPWlZ3Z25lWWxYamV5Q09xNUtRVVNzVWZRR1BNVTJpZ1hYa0loMERPWlFxTWEza2VRY2hUa3d5em5CZU82bFBNU0QxSFNKMWkzdXZBV3psRXRad2kwRHIrQUJwam5zSVZXc05ET0FRY0Z5a3hydUdaRUtvWlUySmVVZzBjSTYrWTQxcEdEQ1dXcUhtekZuSENLVitoQ1g4QWpUSFBJWUdTOFJBNUFpbVhhREN1NUtrY0FpV2oyZ1FMdkhyaGlCcXpuT2VmeEw5aUNYZmw3VEpFT1U2cW9EaitCQnBqbmtNT1RYaUVBaUV1MEdGY3dYTVZDR1NNazFjc2tSUXQ0M3FIV1drOThHL3lmd1dXcWJtREhuRnZuSlJCS2ZrVGFJeDVEaDVheXlOVUNBbG5TWUpSQlU5V0kzRGhtQnJMSk1YL0NTT2t4QUt1YksvWDNwY09DNzBPM0VPQk9NOUowRnIrQkJwam5vTkFLM21FR3FHT3M3NWdWTUd6ZlVXSW8zcUhwYkpHcVBVdjJGdml1WXNCSTY2YzBrTVQvZ1FhWTU2RWc1THdDTzhJZWM1cE1Lcmk2UVNobnFPa3hIS3ViSVdoOW9KZHZRbjNVU0F1NGFRUEtJNi9nTWFZSjlGQTYzaUFGcUdhTXdhTThud0FDSGxPNkIzV2NLVVgvc20vWWpjdlBYY3lZRVRHU1FXVWtyK0F4cGduMFVNcmVZQWVvWnd6TW94cCtRaStJRkJ5aXRSWUtjbEszd24vSmo3QlBpNHRkMU5nUk1OSkZ5Z3Rmd0dOTWMvQ1FVbDRnQ3RDanROYWpFaDZQb1EzQkRKT0d6SnNjWGw1emZQczVZS2RKQTMzTTJCTXp5a0NUZmdMYUl4NUZpVzBsZ2RBS09Va3VTRHVNdkF4ZUFRU3ptbFRuQzJwaFRzcU1JYVRQSlNNZndPTk1jK2lnMWJ3QUZDRVV6emlYb1FQb2tkSU9FZHFuS3NTN3FuSG1JeVRTaWdOL3dZYVk1NUdBazI0UDRkUXp5a1hSR1hDaDRIUVY4NlRONXdtcVlYN3lqQ201aVFIcGVmZlFHUE0weWloZlhCL0JVS2VFenlpTXVIamNBaVVYT0thNHhScExkeFpoMUV0cHdpVWhIL3JRR1BNMCtpZ09lNnZScWptaEMrSXlZUVA1QTJCak12MEdlN09lZUh1SEVZSnA3UlFDdjd0QlRUR1BBOEhyZWZ1V29SeWp1c1Jrd2tmaVVjZzRWSmRocnZLV2g3Z0E2TmVPS21FNHZtTEIyaU1lUjRsdElLN0U0UWN4eFdJZUJVK2xDdENWeTdXNTdpWHBCeDRCRWt3cXVRa0IwWDRrMXdBR21PZXg0QUk0ZTVTaERoS0VPR0VEd1loenhYNkF2ZmdQb1RIS0RHdTVSU0I0dmhMQTRER21DZmlvTlhjWFlaUXp6RWYwSktCanlaRElPY3FVcWM0VmxMMlBNb1ZFNFJUUEpTS1Awa0NnTWFZSi9JQkxSSHVyVWJJYzh3cnRKWVBwMFlnNVVyaXYrQTR4Vi9DNDJRWTV6aXBoTkx4cHpkOFEyUE1FeEZFTk55YlI2am1DSUZXOHZHMENBbFg2NHNFUjhpODhFZ2ZtRkJ4MGdXaGhELzErSTdHbUdkU1FMdHdiNEpReGhFZVNpcDhQSUtRNXdiaU0rd3JLZjhTSGtzU1RHZzVSYUJrL0NuRGR6VEdQSk1PRVo1N1E4aHhSQW5GOHhFNUJISnVJNDNEWGx6VDgzZ1pwZ2luZUNpZVAzajhRR1BNVTNIUUxzS2RmVUZJR09jUWNueElKUUlwTnh0cWg1dGxkY2U3K0lvcGpwTUtLTUx2Sk1VUE5NWThGWStJaGpzckVlb1lCOFh6SVhtRXJyeUIrT0tDcmR6YlI4OTdrUVJUS2s1S0VITDhvY1JQTk1ZOEZVbWdKY0o5ZVlRYVJ2VUlKWHhNZ2xEREc0a3Z2MkNkTkNzL2V0NVZqa2tkcDNSUVNuNTN4UzgweGp5WENoRTE5OVVqVkRES0kxVHlRVGtFTXU1QmZGMjhwSmpqc3FMMnZmRHVQQ1lsbkZSQ2FmbGRobDlvakhrdWdoamh2aEJ5aktvUmF2bWdTb1NFKzdtMi9yMTZ5elBuWFByRHhYMlQ1VlgxN3R0ZWVKWUIwekpPY2xDRTMzemdielRHUEprQ0VRWDM1UkFTeGxRSUNSOVVpMURMenkvRE5NOHBBdVdWMzBpQ3Y5RVk4MlI2eFBUYzFSdENMV055QkJ3ZmxTQlU4dE9yTVVNNHhVT3ArYzBiL2tGanpMUEpFT0c0cXcrRWFzYmtDT1I4V0s4SXBQenNPc3h3bkpSQjZVajIrQmVOTWMrbVE4d0g5OVFqbERNbVIrQ05ENnRCNk1yUFRSTE1LRGxGb1BFYmgzL1JHUE4wTXNRSTk0VFFoVEU1QWhVZlZvOVF6Yy90QythMG5OSkN5VWcyK0EyTk1VK25RMHpHUFRtRWhCRTVBaFVmVjRLQTQ2ZFdZaFlubFZCcVV2QTdHbU9lVDRZWXp4MjlJZVFaa1NOUThYRVZDQWsvTVk5WkdTY2xVRG95dys5b2pIaytQV0lTNFg0K0VDb1pVU0tRODNIOWhWRER6NnZIUE04cFBUU3l3eDlvakhsQ09XSXk3cWRIeURHaVFzRHhjUWxDanArV3BKZ25uRkpDY1pRVWY2QXg1Z2tOaVByZ2ZxQUlOWThRSDFpR2tQQ1RFb2Q1anBNY2xKSWwva1JqekRONlE5VEEzVGlFV21vdFFsYytyZ2FoaHA5VWhnVWFUaG1nK1NzQ05NWThJMEdVRSs3bERhR1NtaURrK2JnRUljZlBxY1FTQTZmVTBQb3ZDTkFZODVRYVJKWGNpMGZJTVNKQm9PQURjd2dOL0l3YUxPRTR5V0VKR21PZWtsd1E1Ym1US3hTaGxpRWtmRndOUWpVL0lZOUZLazRac0FpTk1jK3BROXpBblNRSXRkUXFoUDdpNHhLRUhEK2ZyMWltNTVRU2k5QVk4NlF5UkRuaFBqS0VTbW9kUWhrZjJDdENQVCticjFqR2NkTC93eUkweGp3cFFWek9mZFFJT1dvQ1plRGora0NvNUNmVFk2R1NVM29zUTJQTXMyb1ExM0FYSFJTaDlvcFF3Y2NsQ0NYOFhQb0VDL1djVW1JWkdtT2Vsa1BjVis1Qm9IaHFEWlNlanl0SHFPVm4waWRZeUhIUy84TXlOTVk4clN2aWtvRjdjQWpsMUFUSy8vaTRXb1FLZmlKOWdxVktUaG13RUkweHo2dEduQlB1b0VRb1ljUVhLQjk4WEFsQ3drL2pLNWJyT2FYQklnbG9qSGxpRG5Hdnd0dDVLRDIxQnRxVkQ2dENxT0ZuOFJYTE9VN0tzRWdMR21PZTJCVWpDdDVPb0RUVUJKb1RQcW9CSWNkUHdtT0ZrcE93U0VuUUdQUE0zakdpNGUwdUNHV01LS0M5Q2gvVkswSTlQNFVHYS9TYzBtTUpKd1NOTVU4dHd3alBteFZRaEZxUGlJS1B5aU5VOGpPb3NJYmpwQThza0F3a2FJeDVhcEpnUk1kYmVTZ3RJekpFRkh4UWdsQWkvTStUQW1NU1JOU2NWR0tCbGlSb2pIbHVIVVlrUFc5MGhWSXlva05Nd1FkVklPVDVYeWRmTUNiemlCZzRLY084aHQrQXhwZ25WMlBFWmVDTlVvUlN4bVNJeVlRUHFVZm9sZjl4d3dWam5OVFFIS2VsbUZYd085QVk4K3d5akhEQzI3eEI2Um5SSWNvSkg1SkRxT2QvV3BkZ1RESXdnOVp3V29vNUw4THZRR1BNczVNTFJud1Izc1JEcVJpVEl5cnQrSWplRVNyNVg5WmdYRWRCaEhBYTVqamhENkF4NXVuMUdKUHhKZ0xGTVdiQWlKb1BTQkJLaFA5WmttUGNPK21odlhJR1psd0cvZ1FhWTR6SG1JSTNjVkNFTVJWR1pBTWZUNEdRNTMvVjREQ3VKT21nZWM1SU1TbnArUXRvakRHc01LYmlMVW9vRFdQRVljd0hIMDZIMEJmK1IzbE1LRWgyaUJET2NKaVM5UHdiYUl3eFpJWXhEVy9RUW5sbFZJZFIyY0JINHhEcStWOGtKU1prL0NhSFZuQk9oZ2xKejMrQXhoaER5Z3ZHZU40QW1qQ3F4TGhLK0ZocWhBcitCdzBPRXpJaE9TQ2k1WndhNHk0RC93VWFZOHczY3NHWXI5d3VnK0laSlE3ajBxOThLQUpGK0ovemdTa3Z3bThLYUFsbkRSajFJdndOYUl3eDMxMFRqT200bVlkU01HNUlNQ0hyK1VnS2hENzRIeU1acHJ3SXZ4a1FVWEdldzRoYytEdlFHR04rNkRBbTZibVZRRWs0b3NXa2ZPRGo2QkJ5L0cveENhYThDcjhyRVRGd1hvdTRobjhDalRIbUo0OHh5Y0N0SEpTV0l4cE1Ld1krRElkUXkvOFFLVEFwRTM0bkNiUXZYQ0pIUk5JeEFCcGp6QzhlWXk0RE4ycWdGQnhUWVVZeDhFRjhJSlR4djhNbm1KUUxmL2hBaE9jUzhnS2xFSVpBWTR6NVc0VXhUcmpORlpwd1RJVTVlYytISUFsQ0hmOGpKTU8wZ3I4NFJBZ1hrUXgvdXJUVVFHT00rVWVKTVYrRTJ6Z29mM0ZVaFZsWnkwZFFJcFR4ditFRE0wciswaUdpNEZMK2duODV6eGpRR0dQK1ZXQk14bTFLS0FYSE5aam52UEIwQTVTZS93Rzl3NHgzL3ExQVJNZmx1akpMVTZTdWFJUnhvREhHL0NiSG1JS2JETkNFNHp3V1NDcmgyVEtFY2o0OGVjT01wT1hmQkJHT3V3S05NZVkza21GTXhVMGNGTThKZllvbDhvN25hcUgwZkhCTmdobVhLLzlSSWVLZHV3S05NZVoza21HTTV4WU5sSXhUNUJXTHVGcDRwZ3RDT1I5YTV6RG5WZml2QkJIQ1hZSEdHUE1IZWNHWXI5eEFvQWtuMVZpbzZIaWVCa3JQeDlWbm1GVUkvK1VSVVhCZm9ESEcvRWxlTUtibkJxOVFHazdySEJaeXRmQWtraUNVOFZFTkJlWjk4SGRmRU5GeFg2QXh4Z1RrQlNPU2dldDVLSytjSVNVV3kxcWVvNExTOFNGSmlYbXU1Kzk2UkRqdUREVEdtSkJjTU1JSlZ4Tm93am45Q3haTHlwNG5FQ2daSDVEVVdLQVEvcUZBeEFkM0JocGpqREpjTU9LVjZ4VlFhczd6Q1paempmRHVDaWdkSDQzVUNSYjQ0SjhFRVlsd1o2QXh4bWpEQlNOS3J0WkJjVnhBU3F5Ui9SL3ZySWZpK0Zpa1NyQ0E2eG1vRUZGeWI2QXh4a1FNQ1VZMFhNMUI2YmpFa0dPTnBPeDVWeGtVendjeWxGaWtGQVlrUWNUQXZZSEdHQlBUSnhqUmNhMGFTc0ZsK2d5cnVGcDRQeTJVaS9CUjlBVVd1WFJVUGhDUmNYZWdNY1pFOVJpUkRGeEpvQ1RDaGJvTTY3eDY0YjA0S0EwZlE1ZGhtVUtvWFJEUmNuZWdNY2JFdFJqaGhDc1ZVRHdYNnpLc1ZMUzhEdzhsRVo1UHZNTXlhY2VJRmhFWDdnODB4cGdSTFVZVVhLbUQ4c29WK2dJcnBkWEFlN2hBS1hrMnFSSXM5Q2FNeVJCUmMzK2dNY2FNOFJqUmNDVUhaZUFhVWlWWTZZc1hIczVEdS9KVWJZYWxYTStvRGhHSmNIK2dNY2FNZXNlSWp1dlVVQ3F1STk1aHJhTGowUzVRTXA1SDZoU0xOUnlSSWFMa0FVQmpqQmxYSWU0aVhFV2dwRnl0eTdDV3E0V0g4dEMrOGlUL2wyRzVYRGlpUjh6QUE0REdHRE9oUUZ6T2RRb29IZGVUS3NGYVJjY2pYYUNrd2hQMFpZTGxYTWRSQlNJS0hnRTB4cGdwR2VJYXJ0SkR5YmxKbTJFdDU0V0g4ZEFxM3B2VUwxZ2hhVGh1UUV6UEk0REdHRE5GWGhCMzVTcGZvQWkza2RwaHBhUVNIdVVDcmVjOVNmT0tWVXJoaEFJUkdROEJHbVBNcE9HQ0tDZGN3ME9wdUZsWFlLMmk1ekU4Tk1lN2tTYkRPdm5BS1FOaVdoNENOTWFZYVQzaVNxNGhLVUlKYnlEK0ZTdmxQUS9ob05XOEMybGVzVkxXY1ZxQkNNZGpnTVlZTTZORlhNODFLaWllTjVIYVlaMnM1d0ZhUlBRODNOQTRyT1U2enJnaXh2TVlvREhHektrUjVZUXJDSlJYM3FvckU2eVNEOXhmQnMwSkQ5V1ZEcXU1bHJOeVJGeDRFTkFZWTJibGlLcTRSZ2FsNSszK3lyRktLZHhiajRpQ2h4RmZKRmpQdFp6WEk4YnpJS0F4eHN3U2g2aWVLM1JRQ3U1QlBsNnhRdXE1dHh3UkRRL1JsaS9Zd25rdWtTRWlGUjRFTk1hWWVRT2kvc2MxSEJUaFBxUjJXQzRidUs4Qk1aNTc2NXNNMjJRdEYra1EwL0Fvb0RIR0xPQVI5Y0VWUEpTYXUrbkxGSXRWd2wyVmlDbUYrK21hTE1GR2VjZUZIQ0pTNFZGQVk0eFpva1JNSWx4T1VvUWM5OVFXV01wMTNKT2tpRWxLNFE1Ni8vYUM3WXFCU3pXSWFYZ1kwQmhqbGhDSG1KSXIxRkJhN2tvK3ZtQ2hRcmlqRDR4NGJZVGI5YjdPSEc2UjFzTEZKRUZFS2p3TWFJd3hpMXdSTlhBNWdaSnhiME9WWUpHMDQ0NWVNTXFWclhBZDZYM3psbDF3cXkrZWE1U0lhWGdjMEJoamxta1FrM09GQWtySC9iVUZGaW1GdStreDZaS1Z2cnR5eHJYejcxV2VPZXlqNkxuS0ZUR3A4RGlnTWNZczlJcVlqc3YxVUhJZVFXcUhCVnpQM1pSWTRPSmU4N0txM3IveDNUZisvZjI5cWFveXoxN2NCYnR5dFhDbERERU5Ed1FhWTh4Q0EySXlycEJCR1hpTXJzQUNOZmNpS1I1STBYRzFGakVYSGdrMHhwaWxHc1IwWEs2RlV2QW9VaWVZbFFsMzB1SlJ1SGZoZW5KQmpPZVJRR09NV2N3aHduRUZCMFY0SFArS09XbkhuV1I0QkduWmM1TWFNWTZIQW8weFpyRWVNUzJYODFCcUhxa3ZNS2ZtUGdUbksxcHVKSWhxZVNqUUdHT1dLeENSY1lVTFFvbndVRU9CR2Jsd0Z4N255cnh3c3h3eEdZOEZHbVBNY29LWW5zdDVLQTBQSmlXbXVaNjd5SENlMTBaNGd3NVJQWThGR21QTUNnMGljaTRuS1VJWEhrNUtUUFBjZytBa21SZmVSQzZJeVhrdzBCaGpWcEFVRWNMbGFpaWV4NU1Da3hydXdlTUVtUmZlcWtMVXdJT0J4aGl6Um9PSWlzc0psQXZ2b2M4d3BlUWVjdHpYcFd5RnR4c1FWZkpvb0RIR3JIS0JsZ2lYSzZGNDNrV2JZc0tyOEhhUzRINWVtNEg3eUJDVENJOEdHbVBNS2g0Um5zc0psQXZ2UTBwTWNBTnYxK0UrTHFVWDd1VURVWjZIQTQweFpwMEx0RmV1VUVMeHZKUE9ZZHlsNSsxS0hDN0p2WEJIa2lERzhYaWdNY2FzODRFSTRYSUM1Y0o3a1JMamtwNDNFNGNqSlZsejVjNXlSUFU4SG1pTU1ldElBcTNtQ2dVVXo3dnBIVVlsSFc4MjRDaXU4RmZ1N3l1aWN0NEJhSXd4SzFYUUhGY1lvRng0UDFKZzNGZmV6R04vYVZaM3drTklnaWpoSFlER0dMUFNnSWllS3hSUVBPL0lZOXhYM3F6QW5seFJkOExqRklocWVBK2dNY2FzbFVHcnVjSUE1Y0o3R2w0dzZpdHZKUTV4Q2RhNFpHOU5LenpZVjBRNTNnVm9qREZydGRBYzF5aWdlTjZUbEJqbGVhc2VjU1hKNjdWdC9YdGRGZmtYNTlJVW9kUzk1Rlh0TytGZFNJS29ubmNCR21QTWFnbTBnU3NNVUJMaFhYbU0rc3BiZlNCdVlJUmMvOFY3S3hEMXh2c0FqVEZtdFJKYXd6VUtLRFh2cTc5Z1RNOWJGWWpLK1dBOG9sTGhmWURHR0xOYUJ5M2pHZ09VUkhoZjhvSVJTYzhiaVVOVXg0Y2lpR3Q1SjZBeHhxeVhRa200eWh1VWtuY21CVVlrQTI5MFJWUXFmQ1Fab25MZUMyaU1NZXVWMERxdUlkQUczbHVORVplQk4vS0lLdmxBYWtRbHduc0JqVEZtdlI1YXpWVktLRG52em1PRUU5Nm9SRlRIaDlFaHp2TnVRR09NMlNDQmtuTVZnZGJ6N2xxTXlIZ2plVVdNRXo0SXVTQXE0LzJBeGhpelFRN2x3blZLS0JudnIwc1FWL0pHa2lDbTRJUElFWlVJN3djMHhwZ05QRFRoS3BKQTZYaC8vUVZ4SDd4Umh5alBoOUFncnVVZGdjWVlzOEVWV3N0MUdpaU9KeGd1aU90NG8zZEVEWHdBSGVJSzNoTm9qREZiSkZEZXVZNmtVRDU0Z3VHQ3FHVGdqUXJFT09IcEpFWFVSWGhQb0RIR2JKRkJLYm1TaDVJSVR6Q2tpSExDMjRoRFRNbXp5UmZFZGJ3cjBCaGp0cWlnWkZ6TFFYbmpHZm9FVVFWdk5DU0k4VHhaaWJpYTl3VWFZOHdXSG9yaldoMjBubWZvRTBSOThFWWRvbnFlNmdOeHI3d3owQmhqdHVpaGNiVU15djk0aWg1eFBXLzBqcGlMOEVRZDRoTGhuWUhHR0xPRlFCT3UxVVA3NENsYVJEbmhqZDRROHlvOHpaQWdydVc5Z2NZWXMwa0s1Y3JWY2lpSjhCUWVVUVZ2SkMrSUtYa1djWWdyZVhlZ01jWnM0cUMwWEUyZ1ZUeEhqYWdQM2toU3hEUThoN3dpN3BYM0J4cGp6Q1laRk0vMUttaFhucU5FMUpVMzZoSDFsYWNvRUpjSzd3ODB4cGhOU2lnMTE1TVVTc2FUdkNMRzhWWWVNY21WSjZnd291Y0pRR09NMmFTQ1VuRUREKzJENTVBTFltcmVxa1RNUlhoM0RVWjg4QXlnTWNaczhnNmw1Qll2VUJMaE9YcEVYWG1yVjhSOEVkNlp4NGlTWnhoQVk0elp4RVBKdVVVUHJlQkpQR0ljYnlVWHhCUzhyNjhZOGNvekRCZlFHR00yYWFGazNDU0gxdkVrTldKcTNxcEhWTVY3K29vUkYrRUp4QUUweHBoTk9paU9td2kwVkhpU0RERTliK1VSNVhrL1h6RWl1ZklFNGdEUUdHTTJ1VUp4M0thQlZ2SWtraURpaFRlckVOWHhYcjVpVE1jVHlDdStvVEhHYkhLRjRyaVJnOWJ6SkIxaVBHK1dJU2E1OGo2K1lvem5HVEo4UjJPTTJVU2dwTnlvZytaNGxob1JpZkJXNGhCekVkNkR4NWlhWnlqd0E0MHhaaHNvS2JmS29kVTh5eXNpQ3Q3c2lxZ3Z3dU41akNsNGhoSS8wUmhqdG9HU2NpdEpvRjE1RWtrUTBmTm1IbEVGRDlkZ1RNNHpWUGlGeGhpekRaU1VtM2xvVG5nU2p3akgyNVdJcW5pd0VtTXk0UWtxL0kzR0dMTU5ORzdub0ZVOFM0YUlEOTd1RlZHZVI1SWNZMTZFSjZqd0R4cGp6RGJRdUYyUGlKNG5rUVJhSXJ5WlhCRFY4emppTU9aRmVJSUcvNkl4eG13RGpUY29vVG5oU1R3aVN0NnVSMVFxUEVwL3daZ1g0UWs4ZmtOampOa0dHbThnS2JTU1o4a1JJYnlkUjVRVEhzTmoxSXZ3QkI2L296SEdiQU9OdCtnUTBmRWtra0FydUlNU1VRV1BJQ1ZHdlFoUDRQRUhHbVBNTnRCNGt3SmFLanlKUjBUUDI4a0xvaHJ1VDc1ZzFJdndCQjUvb2pIR2JBT05ONUVFV3NHenZFREx1SU1oUVZUSHZYMU5NT3BGZUFLUEFJMHhaaHRvdk0wSElqeFAwaU9pNHc1YVJDWENYVW1KY2EvQ0UzaUVhSXd4MjBEampUSkVERHhKQ2MxeER5V2lNdTZwZHhpWENVL1FRS0V4eG13RGpUY1NSRGpoT1NTQjFuSVByNGdxdVJ1cE1LRVFucUNDUm1PTTJRWWFiK1VSVWZJa0hsckdQVWlDcUk0NzZSMG1WRHhEaFFnYVk4dzIwSGl6REJHZUozSFFPdTZoUlZRaTNJTVVtUExPTTVTSW9USEdiQU9OTjVNRVdqTHdIQjIwakxzb0VaVnpCejdCbEpabktCQkZZNHpaNUFvbDVlMDhJcHp3SEJtMGpydDRRWlRuclRxSEtaZWVaeWdRUjJPTTJlUUtKZVVPTWtTVVBFY1BMZU11aGdSUndwdjBHU1k1NFFra3h3Z2FZOHdtVnlncGR5QUpJanpQVVVEcnVRdVBxSXczNkhOTWV4T2VRRjRSNTBCampObmtDaVhsSGp3aWtvR25FR2c1OTFFZzZpdTM2blBNYUhnR2NZaDdFZEFZWXphNVFrbTVpd0lSVG5pS0VwcHdGNUlpSmhGdTh0Y3JaaVFkenpCY0VQY2lCSTB4WnBNcmxKUzdFSWVJZ3FjUWFCWDMwU0dxNG5wU3A1aVRDYy9RcDRoN0VSSTB4cGhOT2lncDk5RWpwdUVwU2lpSmNCOGxvZ2F1MU9hWVYvTVVYWUs0RnlFSkdtUE1KaTJVbER1cEVkUHhEQUx0Zy9zUWg1aWNhM1JsZ25scHgxTjRqSGdSZmdNYVk4d21MWlNVZTNsRlJETHdEQ1VVeDUzMGlPcTRWRnNtV0tJUW5zSmp4S3Z3TzlBWVl6WnBvYVRjaXlER0NVOGcwRnJ1cEVKTXppV3VUWVpsRXM5elZCaVJDWDhBalRGbWt4Wkt5dDE0eE9ROFF3RWw0MDdFSWFibk5HbWJMTUZTbWZBVWttTkVKdndKTk1hWVRWb29LZmRUSXFiaENRWm9BM2ZTSVNibkdPbDhtVjJ3UXZMQmM0akRpRXo0QzJpTU1adTBVRkx1Unh4aXZ2SUVHWlNTZXlrUmMzbko4cXArZi9mZFQrL3ZUZldXdjF5d1dpWTh4M0RCaUVMNE45QVlZelpwb2FUYzBZQ1lwT2Y5ZFZBUzdrVlNIQ2hwZVpJdXdZaVMvd0tOTVdhVEZrcktQWG5FWElUMzU2RDh4YjIwT002YjhDUWVZeXIrQmpUR21FMWFLQ2wzVlNMR0NlL09ROG00bXd3SGNUM1BVbUdNNSs5QVk0elpwSVdTY2xmaUVKUHgvaElvd3IwSURwRjRua1VLalBIOEEyaU1NWnUwVUZMdWEwZ1FVL0x1YWlnVmQ5UGdBS1h3TE9Jd3B1V2ZRR09NMmFTRmtuSm5IYUlhM3B0QVNiZ2ZoNzFsQTAvVHBSaVI5QXlBeGhpelNRc2w1ZDVxUkhuZVd3R2w1VzQ2N0N2cmVKNFBqRWw3aGtCampObWtoWkp5ZHptaWV0NVpCNlhnZmpMc3lMVThVWWt4YnFBQ0dtUE1KaTJVbExzVGg1aWs1NTA1S01MZFhMRWIxL0pFOG9veHIwSU5OTWFZVFZwbzNOK0FxTXZBKzNxSDhoZjM4NFo5WkIzUDFGOHdwaEJHZ01ZWXMwa1BqUWZ3aUxvSTcwcWdaTnlQSk5oQjBmTlVIcU1xUm9IR0dMUEpGUnFQMENES0NlOHFoeUxjVDROYnBiWHdYQ1ZHZWNhQnhoaXp5UlVhRDFFZ3lnbnY2UzhvSDl5UHBMaEozdkprOGdWamtwWWpRR09NMlVTZ0NZOGdMNGg2RmQ1VGd0QXJkOVJndTljUDRkbTZGR011UGNlQXhoaXpEYlFyRHlFWFJHVzhweEtLY0QrU1lwdXNFWjZ2d2FnWDRTalFHR08yZ2RiekdEM2lDdDVSRDZYaGpocXNkM243Uy9nQUpNZW9URGdPTk1hWWJWSW9MUS9pRVZmd2poeENyOXlScEZqbGt2c3JIMFB2TUtya0ZOQVlZN1p4VUZvZXBVRmN3ZnVwb1FoMzVMR1V5K3BXK0RBOHhubE9BbzB4WmhzSDVaMkhLUkZYOEc0R0tKNDdraFF6VXBlWHRiL3lvVWlCVVVuUGFhQXh4bXlUUTZsNW5BeHhCZS9HSVpSeFR6VmlrdmYzOXB2cmxRK3BkeGpsaEROQVk0elpwb0pTOFRqeWdyaUM5MUpERWU1SUVEWHdnZFVZVndqbmdNWVlzODA3bEp3SGtndmlDdDdKQU9VdjdxbEVUTVdISlJuR05ad0hHbVBNTmkyVWpFY2FFc1FWdkJPSFVNRTlEWWo1ZjN4VVhZcFJTY3NGUUdPTTJhYUg0bmlvSGlNSzNrZU5VTUpkRllqcCtaZ3FqTHRjdWNUL0I5ZDRDQjN4elBLQUFBQUFBRWxGVGtTdVFtQ0MpO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblx0XHRcdC5pbWcge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRyaWdodDogMHJweDtcclxuXHRcdFx0XHRib3R0b206IDBycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAzOTFycHg7XHJcblx0XHRcdFx0d2lkdGg6IDMwMHJweDtcclxuXHJcblx0XHRcdFx0aW1hZ2Uge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHR0b3A6IDgwcnB4O1xyXG5cdFx0XHRcdFx0cmlnaHQ6IC0yMHJweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQmLWhlYWRlciB7XHJcblx0XHRcdHdpZHRoOiAxOTBycHg7XHJcblx0XHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRcdG1hcmdpbjogMTRycHggMCAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdCYtdGl0bGUge1xyXG5cdFx0XHR3aWR0aDogMzAycnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDYwcnB4O1xyXG5cdFx0XHRmb250LXNpemU6IDQzcnB4O1xyXG5cdFx0XHRtYXJnaW4tdG9wOiA4cnB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdH1cclxuXHJcblx0XHQuY2FyZCB7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0d2lkdGg6IDQ3NnJweDtcclxuXHRcdFx0aGVpZ2h0OiA2MTVycHg7XHJcblx0XHRcdG1hcmdpbjogLTEyNHJweCBhdXRvIDA7XHJcblx0XHRcdHotaW5kZXg6IDI7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDdycHg7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDE2cnB4IHNvbGlkICM1RkFFODk7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdGJveC1zaGFkb3c6IDBweCA1cnB4IDExcnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG5cdFx0XHQuYmcge1xyXG5cdFx0XHRcdGhlaWdodDogMTk3cnB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQkNJQUFBRzJDQVlBQUFDcUhpZWhBQUJYT0VsRVFWUjQydTNkQ1ppbFdWb1grQUlHb2RuSEFiZlJGcEVSQndVSGROUVJwVVVXYmUxdUVTaDZxWXpJaU1oWWNzK00zQ0l6SXpJN1dTb2pia1JXVmxVV2l2MEl0cURRbUpXeDVWYUFPTGdnMGl5eTZPQ0lvSUtpSURpQWJEWjBrM1BlRzNHcm8yNmM3NjdmdlhGdnhPODh6Ky9KN095czJQTis1L3QvNzNuZnA1NXFjYjM1WFRjK2FuUnQ2YThlWGx1NmZYaXQ4aDJqYTVYL01McGErYlgwK3ljQUFBREF3UkJaUUdRQ2tRMUVSaEJaUVdRR1Q1VzFSdTg5KzVtanEwdmZkSGkxOGl1KzRBQUFBTUF1S1RPSTdDQXloSTREaURjK3Z2TVJLZUZZVHQ3dml3b0FBQUEwclpaSUdVSmtDWkVwdEJWQ1BMT3g5Qm1wdk9KSGZCRUJBQUNBRHZ6dzRYdExmNlNsRUdKazdlWWIwbi93ODc1b0FBQUFRQmQrL3ZEcTh1YzBEQ0hlOXA3RlR6Njh1dlJmZmJFQUFBQ0FFbzVxL096STNhWFg1eXNodm0zbG85TnhqTy8zaFFJQUFBQktzN3IwQTAvZnZmMjYzZE14MXBaZThBVUNBQUFBU3JkZWVmNDFJY1NoemNWUFRhTTJmc01YQndBQUFPaUI5NzMxVzc3cUQ3NGFSS1F5aVhmN29nQUFBQUE5UEtMeDdtb0k4ZlRkR3grVGVrUDhxaThLQUFBQTBEdEx2eG9aUkJyWHVmUTJYd3dBQUFDZzF5S0RpQ2FWWCsrTEFRQUFBUFRhNk9yUzMweEJST1c5dmhnQUFBQkF6NE9JbEVGRUVQRnp2aGdBQUFCQXo2MHUvZGVZbVBIcnZoZ0FBQUJBSDRLSVgzL0tGd0lBQUFEb0YwRUVBQUFBSUlnQUFBQUFCQkVBQUFBQWdnZ0FBQUJBRUFFQUFBQWdpQUFBQUFBRUVRQUFBSUFnQWdBQUFFQVFBUUFBQUFnaUFBQUFBQVFSQUFBQWdDQUNBQUFBRUVRQUFBQUFDQ0lBQUFBQVFRUjdhbUo5K2NtUmJWTWJLMDltTm05dDJiajE1TVQ5NTE1MSt2N3RKMmNlYkpsOStQeVQ4dzlmcUxydzZJVW5jNDlmZk5YOEszZGV0WkJjU0g5bnpOY1pBQUFBUWNUd21VNUJ3YkhOMXdZRXRYQWduTnNSRUZ4ODlNRnc0SEpkUVBET2IvMmF2b3FQeS9jUEFBQUFRY1NRR0UrdVBPNS9nRkNXaFZkZThuMEVBQUJBRURFc0xxYmpEOE1hUXRSTXBxTWZ2cGNBQUFBSUlnYmNxWFQ4WXRoRGlCREhTSHcvQVFBQUVFUU1lRStJNitsWVE1bEhKSzZtSXg0MWwxSWZpWm9MMjcwbFF2UjAyTmw3NG1RS0VZNXYxdHlxZmx3MWswbXQyZVhFZHRYRDBkVG9zdjU5eDl2MVBRVUFBRUFRTWFoOUlkWXJUK1l6ZlNIaXowNjlKaGg0TGsyNDJCRU1ySDh3R0RpeVI4Y2hvcWRGL2NjZHdZZnZLd0FBQUlLSUFSVlZDdlUzODFFZEVXSERNSHo4bHpNZi94RjlJZ0FBQUJCRURKNDREcEU3V25GcWlQb3N4UEdPK284L1JvLzYvZ0lBQUNDSUdDQXpCWDBoTGd4Wmo0VUlIZW8vaHdnbmZJOEJBQUFRUkF5SWFQYTQ4TXFkYkgrRjhhSDdYSGIzaWJqeStFWGZad0FBQUFRUmcyS3VvQy9FMUpEMGhhaDNOZE5zYzl6M0dRQUFBRUhFM2p0YjBCZmlaSXQ5SWFLSjVZbjBkd2VwSVdTTTdLei9mR0swcCs4M0FBQUFnb2c5ZEhSekpSdEN0Tm9YNHZUOUQ0WVkxd2FvZ3VKRUdpMWEvem5OUHRBbkFnQUFBRUhFbnRucUMvRlN0aS9FV0l0dm83NjU1YUEwdHB4TW4xdjk1elduVHdRQUFBQ0NpTDF6K1hHK0w4VGtSdXRITE9xRGlDc3B4QmlVejIrK3J2bG1mS3hqdnU4QUFBQUlJdnJ2YkRxbTBFMWZpSm9yajNmZjdKZjVjVWFEeWZpWVRxYWpGdTAybTd6d2FIZWZpQmw5SWdBQUFCQkU5TmV4elZ2WkVPSjhCOGNxTG1adTlpZEthbG9aMVFzN3AxKzBjMlRrOEhhQVVmK3huVW1OT2YwTUFBQUFJSWpvazVoc2NhM0x2aEE3eldZcUs2WkxhbGlacTJpSUVLWFYvMzV5ZlhjanprdVA5SWtBQUFCQUVORVhZOVdqRkx2N1FrUXdNZGxoRlVPdTZpQW1WblQ3c2ViZWJpY2pPT3ViY1paOWRBUUFBQUJCQkcxVUwzUWJIRVF3VVAvMnpuWTVKak1xS3E1bnFqYXVkREQxSW5kMFpGQkdqQUlBQUNDSTJMZU9GL1NGT1Bld3U5QWdkL3lobXhHZTQrdHAya1ZkQTh3UWxRMmQ5SjQ0bGFtc09IMWZud2dBQUFBRUVUMHpXZEFYNGtxSGZTSHExYi9keTEzMFlZZ2VEcm5BcEozZUVQWFZGV1VHSlFBQUFBZ2lhR0NyTDhTZFV2dEMxTHRhOS9ZWE91ekRFQk10Y2lIRTJTNG1YY1RuWDMvTVkwR2ZDQUFBQUFRUnZYSCtZYjR2eFBFT0t3eHlMbWFxR09LSVJUdHZZNmFnTDhSY0NWTXVjbFVXY2FURXp3Y0FBQUNDaUJJVlRaNlk3YktaWkwxem1iQ2puWWFRMGZ0aDRaWHkra0swVW1seDR2NXpma1lBQUFBUVJKUmxLdDNBRjAyZWFLVXZSTnlvbjArOUZFNm5tL2htZnovWEVMS2RuZzV6bVlxRitOamJIZFZaV0cyUmFkU3BUd1FBQUFDQ2lKSkVjSEMxb0MvRWtSWXFET29yS1pwTjFzaU44R3gxTXNYWmdyNFFweC9jTHZYclVSL0t6S2NLREQ4ckFBQUFDQ0pLY09IUkMxMzFoYWp2cVhDOVNYUEh5Y3hraWxiR2doNHRHQ2w2NlZINTFRcVhNMVVYUjBwcTFna0FBSUFnNHNBcTZndHh0bzIrRUJjelFVYWptL2FvT0dpM3llUkV3VWpSK1ZUSk1kR0RnQ0Q2WXV3T1p2U0pBQUFBUUJEUnNhbUN5Uk9YSDcvWTlVMzdUSk4rRGZOMVIwSGlmemNLTHVKanl2V0ZtTjdvelRTTDNQR1JWcW8yQUFBQUVFVDRRbVNNcitYN1FuUXllU0pYVlhHeXlaU0ozSWpNc1RhQ2puQ3FoNU1zWXB6bzdzYWQra1FBQUFBZ2lPaElMZ2hvZDNwRm8rcUJaaU0vY3lNOEp6UFZEY2NMK2tKY2ZOVDdLUlpYTWxVWUUrdCtkZ0FBQUJCRXRPVlVDWDBoZHBwY1gybDczR1ZNeWFqL2IrckhiMDRXOUlXSVNvN3hQbnlkY21GSkowRU5BQUFBZ29nRGE3cWdMMFN6WnBITjdEN0cwUGp0SGN0VU91dzh6akZXclVpNGsrMExNZFdqdmhDdFZHUE1QdEFuQWdBQUFFRkVTNkwzdzN4SmZTSHExZmViYURyQ00xTkZNYnVqR2VUNWgvbStFQ2Z2OTI5eVJVeisyTlhJczh2QUJnQUFBRUhFZ2U4TGNYVGpWay9lOWtTYkl6eHJmUitLUm9xZWYvaEMzNzltdVlhZVkzNldBQUQyaGZHMTVUVHRiYVc2LzR4anlyRWZqVXJocU82TmZlRENLM2RlYzFRNEhyYkZRN3o0LzA2bG84YStob0Fnb29FekQyNW5iKzdqejN2VlQyR215UkdLaGJvakluRVVZeXFGRjljTCtrTHNSUUFRdlM1MmZWNzZSQUFBREozWVN4NU4rN2pZLzE1TWU3ejVWKzVrOThmdE9HNWZDQWdpOG1aNjFCZGlwMXdEekJOTmpsSE0xVlZSWE45T2wrdmZUcVRRazEwZUhlblVpY3puZGZhQjlCc0FZRmlPSmtlMXc2VlU2WkRiRDNkckx5cDJBVUhFVUx6NExtVFMzdmtTK2tMc2xCdmgyV3dLeC9sTXRVSE9pYzNuOXV6ck41bnBFM0ZKbndnQWdJR3VmRGkrK1Z4MXo5YUw4S0hmSStVQlFjVFFtY3YwYm9nWDVKbVNKMCtVTmNLejNybUhleitsb3Y0SVNYejk5SWtBQUJnczBXZzhIb1JkNnpKOHVMWmRwWHY1MFoxc3RXNnZLb3dCUWNTK2NMYWdMOFRwSGh3dHlEV2ZiRFpoSWpmQ3MzNEU2Q0RjOE9mNlJFeHZPQThJQURBSW9vSTFLbTNicVg2NHZ0MkRMUFo1OFhBc2VrZE1iaXkvWnU5NXBHRGluSWxxZ0NDaTZLakU1a3IyeGZKU0Q4dkg1aCsvdEN0TmJ2VDNwelpXR2liUlIvYW9MMFM5M0JTUDA3b2tBd0RzZVFWRWpIeHZOWUNJS3RjSUxLTEJaTE1qeXRVUW9vVm1saW9pQUVIRWpyNFF1Wkswc3Z0Q3RISU1wTkg3RzErdkZMNm9IeHVnRHNTNXdNUjVRQUNBdmR2cnpqNW9MWUM0dGgwK3RITXN1WlZLQ0VFRUlJaW9jL2x4dmkvRWRNbDlJZXFkeng1aEtINmYwWVF5OTRMZXJNbmxYcFQ3NVJKMS84QUFBUHBmcWRwS0Q0Z1lDeDkvZDd5REtvdWlTb2dZK1ZuL3ZnVVJnQ0NpMmhmaStld0w1Nm43dlo4OGtXcytXVFR4WXJLZ2FpTkNsRUg2ZXNZNXdTdVpSRHpPRlBvSEJnRFF2Mk1ZdWVyYitnZHZVYlhhNmNPM1JwVVFGN2Vic05kWFlhaVNCUTU4RUZIVS9MRmZMNUM1OTUrcmJvaWIrMXdING9VZUh4M3ByTW9qSCt3YzM5U3NFZ0NnSDJMZjFhd0tJb0tDeVM3MmtjMHFJV3A3MlByLzcveERRUVJ3d0lPSVhJSWJmeGE5R1BhcWw4S0ZUQWh5b2VEbS91aUFUYUlvT2pveU8yQkhSd0FBOXFPNDhUK1hPZnBiZndTajIrUEhyVlJDMVA3ZXJuM2hRL3RDNElBSEVia1h6MTczaGRncDEzeXlmcVJSYmdKRk9QTmdzS1pRVEtVTFRhNEIwcUNNRkFVQTJPOUhNYTQwYUJnWkZSSW5Temg2M0VvbFJNMU01cUZiUDQ0L0E0S0lnWFk1YzI1dXNvOUJSRmg0cFhpRVoxUk01Rzd1THczWTJicWlveU9ETkZJVUFHQy9pZ2RwQ3cyT1lrUkFVTVp4M2xZcklScFZ5enF1Q3h6NElHSTIwNmp5Uko5VDJsd1lFcFVTNHdVMzkvTUQyQmVpNk9qSU1SY2FBSUNlaXFPNlJmMGc0cytMR3FIM3NoS2k1dXlEMjN0YWZRd0lJZ1pTcmxua2hUNDMwTG1RT2NjWGxSRFJNRFBYMlhobXdGNjhpNDZPbk5VWEFnQ2c1M3ZaNndVaFJEelFtaXpwNFZXelNvaWlZN2dYTXcvY0hOa0ZEbndRTVpIcDBkRHZNWk5uTWtseDBhaWxHUGZaemZHSk9IWVNGNnhUNmUyY1MxVU1sOUw3cVZWZHpLVmVEdTFlcklxT2pnemFTRkVBZ1AzbWVJTVFJbzd4anBmWWU2S1RFR0xyQ1BLZFhVM2hmZStBQXg5RWhHaW1XUCtpMnMrK0JrV1RKam9aS1RxK0hRN0VoU2xDaXhpUEZLSEd3aXQzV25vZmx4NjFIaUFVSFIwWnhKR2lBQUQ3NmpoR2d4Q2l6R2xsazEyRUVCT1ppUmtYSHhuZENRZ2lxczVuamtZYzMreGZuNGpwVERmaFJpTkY0MFU5L3B2b1pSSFZGSEcwSXlvUW1zMktic1hDamthWnplU09qZ3ppU0ZFQWdQMWt1cUFpZFdzaVJYbFQxYlo2UWhSVVhEUUpJWXFPUUorK2Y5djNFQkJFYkpXMTdhNUlPTmZIK2NhNXREaDNYQ1RHTVpVUk5qVFNhbitNVTBNeVVoUUFZRCtKQ29XaS9lREpFaCtrUlFpeDBHWmp5bnJuTXMzTVp6U3FCQVFSSDN5aHJYK1J2TkxuSGdlOURoZ2FpZmNkbjIrVThiWFNQS2dvaFo5N3BDOEVETElJUFk5c2l5TmNNK2xKVlZXcVlvb0txNXA0V2hXaFlwaE5tOGlvR2dzWFVoVlU5SktwaWM3cE5iRlp2ZERDMHpFQXVuc2RMem9tVVhvbHhPT1hDbzhLdC9wYVgvK3h4djdSZFFJUVJPeDhvY3drdnVOOWZQKzVQaFZsaWlNWE1TWTBiaFRpNWlLcVFDSlFhTGVYUXh3UG1SK1NrYUl3N0dXM1VkSzZNeUNvaFFQaDNJNkFJRHFTMThLQnkzVUJRYitEelg1V2t3RWNORVhOek11c1NKMHNvUklpVEsydlpCdG8rajRDZ29nZGNpTTArOVhyWUtMNmd0OTlSVVFrMTNHQmlodUJlS0laTnpIeDFMUE1RT1ZTNWdJNGlDTkZZVmlOVjRQSk8zdFdJZFhQUGpNQXRDN0dvdWRlZDgrWEdBQTNQSTdSWm9pUW13b1hSM3Q5THdGQnhBNG5NejBQemo3b3o1Tzl5MjFVUTBTdmlJdmJZVU84bUVkWUVpTTUrMUhtbHJ1Z1ZKc082UXNCcFNscUFqdE1KbFZIQVpUcWFLYnBZOWtWQmcybll6eHEvK2hkYnJMYUVkY0hRQkJSLytLN3UzeHNyZzk5SW9yUzdhZzhpSjRORVpERStlMzQrUGJ5NnpOVDBCZkNDQ1lvVDFFVDJHRnp3aE12Z0ZJcjVYSkg3YW9UMWZwUUNYR3BneDVndVlsd2x4L3JKUVlJSXJMcWowZjB1cUhPOFlKMCsveUFuYkdlS0xnNDdSd3BDblRmRStKNmlVMXI0L1VzbmtiVnhFYXk1c0oyYjRrUTFWVTdlMDlFK0JrOVpMYmNxbjVjTlZGOVZXdDJXZXNKRTFWWnUxL0RCSlFBWlRtZm1Ud1IxNHVwa283RmJvM292TlB4aU01V1AyYkhNZ0JCUkJ0OUlxWjcxQ2ZpU01Ib3BUZ2JQbWpkaE9jSytrSk02d3NCNVR6dEttb0NtLzdzMUd1Q2dlZXExVW12QmdQckh3d0c5cXJjTlo3RzVZNlErYjRDbEZPUjJzc0pHWTBhVTNZYVFzUjE0WHJtNGQ2NDd5Y2dpR2k5TFBwTUQvb2Z4SXQ2YmtwR0JCT0RkcmI2YkVGZkNLazJsT2ZTa0lkOWx6TWZ2M1BBQU4zTDlWbTRWTks0OU1rZVZFSnM3YWR2RDN5MUx5Q0lHQ2hUbWRTNUZ6MFFjdVZxMVhQVm00TjFjMS9VR09tQ3Ntc296Wmw5RVBhZHk3eW14ZFFlMzErQWNoK1FSVWhkUnREYjhEakdvODVEaUxIcVVlZmRiOWQwTlVBUTBVUjlLZG0xa2tmUlJkaVFlOUUvTjRCOUlYSkhSNjZXMkJnSmxOem0rMElNVzloM0xCTmFudlAwQzZDcjZ0bmNhUGZUSlJ6SjZGVWxSTWhOb2RPa0VoQkVkRmdpWFZZem9NbkN2aEF2RGx4ZmlOeEkwVEliSThGQlY5UUVkaGpEdm9uMVN2WjF6ZmNab0x4cXVUTDY3MnoxaEhpcEp5RkVVWGh5WElVY0lJaG80WVUvYzY3dFpBa2wwbU1GNS95dWxWUmlWMjk4dSt5dWt3dEswVWpSay9wQ1FHbUttc0FPYTlpWGUzMVRQUVhRMlI0dTkrQ3EyeU52dldoTTJXd1ByWGt4SUlob3RWUTZVMkpjUnBuMGhZSytFTjJreEJFMHpLU3BIaWRTUUJEaFFYeWNVY213TTQxZWFMUGhYZkZJVVgwaG9DeEZUV0JiRGZ2aTMzVDh1eCtraHBEbk0xT0hqbTU0Q2diUXJ0TzU0dzFkTnFqc1pTVkViVTk2WFRVRUlJam9ybktoL29WMG9jcytFYm56Y2lIQ2cyYUplRHdkalFROHpnVEdtZXM0T2hMcDh2V0NpMG5PbFJiVDZDTU4ra0tNK1ljQnBUaTZ1ZEpWRTlqVE81NDRYUnVnQ29wYy81dlpCL3BFQUpSeHZPRm9GemYwV3owaFhpcTlNV1d6bzgxWFZFTUFnb2cyUzZZei9SRTZIYXM1VmRDTXJ0YTRwMWJWY0xKVzFmQm9xNnJoV2h0QlF6T3RsTVVWalJTTmozMXl3eGcrS0s4dlJIZGhYLzNyeWFBMHRvelh5UHJQYTA2ZkNJQzI1Q3BUdTdtaGIxZ0pVVklJVVZSTmExSUdJSWhvMDJ5bVI4S0pEdm9qakJlY202NVZXWlFWTkRSeitrSHpEc3ZETWxJVWh0bmxFc0srK2lCaWtKNDQxWGRoajQ5Vk5SVkFHdy9ETXBVRm5lN0YrbEVKVVJTd0cvVU9DQ0k2S1ozZXVGVktqNFJjbVZvL3pEOStxWG9oaTQrNWxiTjV3ekpTRklhN0wwUTVUV0N2UE41OXMxL214em0rZlp6c1pIcGRhTGZaWkZSMDdYNGk1bnd3UUtkOUZoWTZESnY3VVFsUkZKeEVWZS9FdW1wYURvWTRRaitmL3AzR3ozMzBkeGxkOVRVUlJIUzVFZSsyNisrcGdyNFFaWWlMVk55TVhFd1hrdGtVRnNSTlE0UW5rNmtFYnF5REMxVitwS2krRUZEbVJhcXNKckFYTXpmN1pXMzQ2cWY3dE5zZkp0Y1A1OHlEMjM0R0FGcVFtenJSeVd0b3YwS0lNMTAyWG9iOWNPUzJQanc4cWtHcklLSmJ1WDRKRSt1dC9iY3pCWDBoMmhFWGtGcFZRN3pRSDA5UEo2TlRmcGtKODFqbTZXb3ZSNHJDUVgzQ1ZXWVQyTnpSc2VtU3p1SG1LaHJhR1JjM3ViNlMyZlRxRXdIUWlxdVppcmQyOTJQOUNpSGlBVmh1cnh2dncvZVNZVFcxM3Q2OVZxNktQcHFLdC96d2U3MVMyaDVPRUxHUG5NdjBUR2hsUXo3UllFWnp2cXJoeFdwVnc2bGFWY1A2U3Q4cUVYb3hVaFNvRC92eVphdWROc0ROVlIyVTBjdWxhTHBQdXlNNDZ6ZkFaUjhkQWRpdk4wRGRqdXpzVndnUkZiaTVnSDNCa1F5RzJNVWRZOGpQdGxpSmREUlQ4ZHBxRlZQMEg2eUZlWEZQNk4rT0lLSmhLZlZzQ3owVGNuMGg0b2Nzem9lZjZFRlZROWszSGNidFFYbG1INVRmQkRhWHZwL3Q4dC90ZEVFVjE1VU9wbDdram81TVNmc0JHanFkT1paeHFvMGpEdjBLSVNhcURURHZaUGU2cG1Rd3JITDk4bHJadTNRYVJFUWJnUG93enoyWUlPSTE1ZFR0SnRORlorVk9EOWdaNmFuTWVhYmFUWWUrRUZDT29uRm0zVGFCelIxLzZLWTdlWlFGem1lT2FIWDZaQ3ZYSDZlZE1rV0FneWpYOUxIVnlybCtoUkRqYTh1RjArQk82d2ZFUGdzQ1crbmoxV2tRa2Rzcm5UZHBSaERSNkt4ZUdDLzhRVndwdkFBTTB1ZFVORkpVT1IyVXA5ZE5ZTHN0MzIxV3hkVnViNGo2NmdwajNBRGFPOFpYLzRDbzFTYnAvUXNoOGtjTnQyNmdQTWxsK0I5QVg4OGNMUjN2VVJDUjY5RjNmRk9UVjBIRUR1Y2Zaa2JSWlRiblJUT1U1d2Z3dkUrdWJMcWJtdzRnMXhmaVRxbDlJWnFGcEFzZDltRW9xdUk2MjhXVHJkeUdla0dmQ0lCQ001a0F0NVdiKzM0ZXh5Z0tJVFFrWnIvSVBaaHBkanlxa3lBaTkrODkrZ3Y2SGdnaWRqVVJhV1dEZnJtZ0w4U2dkVUV0Nmd0eDFwa2tLREhBN0gwVDJJdVoxNXp4OWZZM3Zya2pXbk1sYkNvdlpVdU1uUjBHYUxVc3ZOblQwY1loUkhsSGJlTkpjZEZ4REVkNjJVOXkvUUdiVlNaMUVrVGtoZ1VZZFM2SXlMN0lOOXVrbnkxb1JuZHF3R1lvRnpXanV5ekpocDZIZldVM0lNcE45V21uSVdUUmRKK3lqbWpsS2kxT21Dc1AwSEsxNnVURzhwNkhFUEYrNWd0Q2lIbGQvdG1IY2ovdlJ4czhTR28zaUpnb09BSnl4TDhsUVVST2JoVGRXSVBrYkJEUFE1ZmRqQTdZcmRzbXNIR2pIc2ZCb3VGWHM3K2ZhM0xVenZHcXVZSXFyblpIZFJaV1cyUmVHL1dKQUdqdHVOMjFCc2ZaK2hWQ1JCWGZ0WUwzRXgrdkd5ZUdRZHpuakxmeDk4OWtxcE11TnVqMzEyNFFrWDM3YmV5UHhyWS9KMEhFQVhFaDB5ZGlPbTNXanhRMG80c1g1L0VCK3h5S210R1ZkZE1CK2tMa204QmVhekhscnEra2FEWlpJemZDczlYSkZHZjdNTjBuMXlkaTN2bEhnT3pyWmF0SDVQb1JRb3cxT0dKWUM5Yzl4R0tZS28xaVA5THEwWWVpaW9XaW4vbDJnNGhzeFVXTDkyTkhkNFNEbHgvdDMyTlJnb2dtcGRieEE1WnIyaE0vcUZNRDFoY2lkKzdRV1NRb09iQXNhQUxiYWwrSStyRHdlcFBtanBPWlJrZXRqQVU5V2xERjFZdnBQcm5lT1o2Z0FkUlYwN1g0ZXQ2UEVDSStscUorRUxXQVJFOElodUwrYmZPNWpodHg1eDVDRi8yMzdRUVJuZlNnK09ENzJYM0VmcitPekJWRU5MbEFYQys0RUp3Y3NEUFFSYzNvQm0ya0tPekh2aER0TklITm5ROXVkTlBlemhPMG5Tbi90VDVPOTVuTjlNOHhtZ3FnZVlWYmZaK3h5WUsrUG1XR0VISHpWTFMvM1RwZTk3d1FncUZ4dW91cFlPMU10V2duaUpqcllDcEhVUWl4TlZubkJVSEVRWEN0d1F2elh2NHd4QkdRdUZrSmNaR0tjOWsxOFNRMmQ5R2ExeGNDU2cwcXMwMWdINy9ZOVUzN1RKTlN2ZnJ5dnZrR3FYcHNIaTgvN3U5MG45em0rcHhaOHdCTncreWRQWDk2WFFrUk4xSlhHbFJCeEhYaTVIMVZ0QXlYbU5SVmRQL1dTaGlScXd6S1ZibTJHa1FjS1RqeU1kN0N2OCtpZ1BEWTVpMUJ4RUU2WTFRa2Zsakg2cDQ4MWdLQ3VGR3BoUVB4d3hRTjZXcmlCN1ZtTm0zUUk4d0lVZVk5bDI0YXF0SkZKczVXMTF4dklSUnBkREdaMlRCQ0Q4b0tBcStXMUFRMnR4RnRWbUdWNi8weTFrYlEwZXZwUHRFa2QvZlpZbjBpQU9vckVYYjNJbHZwZVNWRXZJKzVnaDVpT3dQdUtmdEdobFQ4akhjYVJ1VDJaWE9aaDB5dEJoRzVmZGo1QjgzNmdhMFUzdmVkM3NmaG9DQ2kvaUpSMEdkaFowTzZUc09CZmpxdEx3U1VwcWdKYkNjSmRhNTZvTm5Jejl3SXo4bk1odkY0UVYrSWkzMDRvcFhycFRPeDdtY0g0TlVibElKeHpMMnFoSWdueGMwZXNHMVYranFLd2NFTkk4WUtLdUtuMWxmYURpSmFmVnV0aHhENys1aXJJR0xYRC9HdG9RZ2FHcm1vTHdTVTVsUUpmU0hxTjRidGpydk1OYUt0Nzd3OHVjZlRmWEpoeVg0dEpRVG94UGxNWTd4akJjZHJ1MmtZR1JXeHVTWjh1YXErNDE2bkVVWThPWmVwWWpoWHQ4OXJKWWc0a1dtYzJlZ0k3MEVPSVFRUkxaYm5ESlBxVFllbmtGRGFCUzEzZ1dqV0xMS1ozSWkwUm44LzEzMTU1M0dPc1dwRndwMDluZTZUcThhWWZhQlBCRUJOYnVyU3RaSXFJU0tNanB1aVJwTXc2a3ZGeDMxUEVFYTgrdThuOTI5enJNMGc0a3FML1NhYWhSQ243aCtNaHQrQ2lCMm1NczFGOWtLYzA3dTZMY2JpWGRvV2xRNjEzaEx4OUhGbjM0bEk0T0pteFVVRnloRzlIK1pMNmd2UnJERlMweEdlbVNxSzJSM05JSXZtd1BkenVzK1J6RVg4Y3BlQkRjQitEeUs2Q1NFaWFHNG5mS2dGNlhwQklJelkvZC9rK3FqczNFYzFDeUttY3hNNDZub0xDaUVFRVlYbmc2NDI2U1I4ZFVkQU1MY2pJTGpRSUNDSUVYWTEwUmsvZmtpbnErY0JWMTV0Y21teUJReFBYNGlqRzdkNjhyWW4yaHpoV1R1Q1ZWVEZ0UmZUZlhLdm9jNGRBMnhwcFY5RFVRZ3h2bjNrNGxRNnFoZHZwOTJlWmJGdlBlb1lCc0tJd2pBaVY5bDVkVWZqN1daQlJPN29WZTc5Q0NFRUVidFQ2b0luaXM3T3djRnpwbUFtOVptU21zRG0raWswbTNKVDM4Z3N5ditLcXJpdUZpVHd2WDhkM1gwUm52RWFDbEQ0R3ZuYWl0aVhxcFBXNG1ZaytoREYzNDhBb2FpSFJDc1QxT0xtU0FVRXdvald3b2pjdjdYYWlQVkdRVVFFaGJtUm5VZnFIaklKSVFRUkxmZUZjTDRaRHA2Wkh2V0YyQ25YQVBORWt3dFFmY2xnclVvcmQ2WnhjbytxckU1a1BxK3pKdmdBRkliUXZUcmlHemRJS203WmIwZG14M3NjUnB6TlBJaXFOUlJ2RkVTY3p2eDNsK3FHQjVRZFFzUURwL0VoL3pkKzRJT0lxWUlmaW1nZXA2UVlEdDVGTHBlR3o1ZlFGK0sxRjZOYmJVL2hPUCt3dGJQRjBTOW1yNzUrdVdaUGwvU0pBR2hZYlZlR2hlM3FCOGN2MkkvSDV5OXRIMnVLZTdZTEhmeWN0eHBHVEdRcVRhOXY3d0ViQlJHNW5tSTdQOGFpRUNMKzdHU2IrN1k0M2graFp1M3ppWDVjd3hvNkh1Z2dZcnpnVFBOQ3BwUUcyUDl5allyaUlqRlRjbGxyV1NNOGQ0MmFlcmozVlZ3TG1RdTRVQmVnVXUwWFZtYjRFRWYwSXNTZTJSQStjUEFxMStNZUxpb0p4a3NPSXk1bUh2eEU0RkFVUk9UK2ZINW5iNG1TUW9ob0Z6QlgwTDlzTC9xQ0NTSzZWTlEwNkpnMEdRNmNzd1ZQcWs3MzRHaEJydmxrc3drVHVSR2VnMWpGbFRzRFBXMlRERkFZZURjVE4wOXhqWWpYMTdqeHFVNUo4OENNQTJLMnlaR211S0dQQnpGVDZ5dWxoQkc1WUNHcVpYTi9IZytKTG1YdUoydEhMYm9OSWVMQmVIeGNDMDJhMDE1OEpJZ1lLcWNLMHJXeitrTEFnWE4wYzZXZ2UzbnZYdGlqS1ZuOVJyUFpNYkpHbTlSQnFlTEtQYm1JQzdXZk00QXRVV1VYcjVYeDJyaHowbHFJUDR2L0w4S0d1R2thWHhNNGNMQk5OK2l0c091aFRub29FNVVEWTEyR0VibUsrYW1OM2NjMjRtM2xLa0hqMzIwM0lVU0VIaGRiSFBjN3pBL1JuL0lEL2RvZlh2L2c0ZUQxaGNoZGtNcnVDOUhLVTdGRzcyOTh2VElVRjZCY1lES3NTVDBBTUJqM2J1M2NtRWNGdzlrR0RWdWJoUkgxRDFWcVJ5MGlYTGljZmg5QnhjbnRxb2Y2a2V6VlhpMGRoQkN4ejR2eHZMbCtFMFdWSVBFMW1SN2lxVGdITG9pSWIvSjhRVjhJM1lYaDRJa0FNdmZpM3VzWDl2UFpJd3pGNy9QRTVuQlVjZVVhVmk0MHFmWUFBR2p0cU1MelRZOHExTitzNTVwYk5nb2o0Z0hQN0haRHlIaHcxR2dFYnR3L3h2dUl2eHVWdEZNTjN1N0p6SFNNK0RoaVQ5aHExY2RDcXFpTnNHUS85RE04Y0VIRXBZS3plVWVkWVlZRDJCZmkrVDJiNVp4clBsazA4V0t5b0dwajBLcTRvaFR5U2lib3ZicWphUk1BUUxmN2pVYk5HNHViVzk1K1RYUExvakNpbTRjOHh3dDZldTBNSWNhMkh6QmRlZHo2eHgrZjYvRTluSXdtaU9oUzBkaWtNK2JjdzRGVDFQeXhYOGNJY3U4L2QrRWJXeXVlN2pOb1ZWem5DeHBLSGRjQUdBRG8wWkhRYUZaNXZZMHFpV3B6eSswcWgxd1ljYUtMZmN0azNRalErSDN0UVZOVU1jenVHTDNaU3FQYStGZ24xMWYyNWZmdXdBUVJNd1ZuZGViTXVJY0RLWGRFSy80c2ptL3RWUytGQzVrUTVFTEJ6ZjJnVlhFVkhSMloxUUFZQU9qMThmdTFhSmg5TzF1WjJiaTU1WFBWNlY0eG1TWjZTNVR4Z0RyMlJGZTNlMG5FdzVoNCtGU3R5bTh4Z0tqMW9CamY1OSt6QXhGRXhGUEQrTUhxZHpNNllIRGxYdmo3MmZBbjEzeXlmb1JuMGV6c1FhdmltbHBmemdhOWd6SlNGQUE0T09JQjlJVTIraTVjNmVHRHFGYVBqOFRIR2gvenpBRnFGM0FnZ29qY0QwQjhzMmMyVnZ4amhRUHFjdVoxWWJMUHJ3bjF6WloyanZDY0txaml1alJnRXlpS2pvNE0wa2hSQU9EZ2lRZk9wOVBEbS9rV0FvbGVQT1E1V25BTXVMNGE5MHlEQ1IrQ2lDRjJ0cUF2eEdsOUllQkFtODAwcWp4eHY3OU5nSEpoU0NUeTR3VTM5NE5ZeFZWMGRPU1l2aEFBd0lCNDlYaEVRU0FRdlJ0NjhUNnoxUS9iN1FFTytsNXBYd2NSUnpkWHN0LzhTMmJhZ3d0UzV1SVFKWEg5dlluZlBjSnpxbUJXOWlCV2NSVWRIVG1yTHdRQU1JQ3FEU1ByUm9CR0ZlZGtEeDcwMUZlTnh2dUo5ejJwWW5SL0J4RmJmU0ZlMnRObWRNQWd2MFpVOW56TVpHNlNUOUZad2hqMzJjMkZNSTZkUlBnU282dWlBM004RmFoZEhPZFNMNGQyTDRwRlIwY0diYVFvQUVCdWJ4Uk5KV04vMWN1anBGSGxHaFczMGJSUzM2d0RFa1NjelpSZHg2WjVXbDhJWUZ0dWZuTS8reG9VVFpyb1pLVG8rSFk0RUJlNnVLaWVUOVVXYzlzZG9GdDVINWZhbUNCVWRIUmtRUU5nQUtDa3FzdUZGcHROZHFwYW9mRHcrWDN4dWRUR2tnb2lCdUg4ZCtiYzhxaytuLzhHQnR2NXpOR0k0NXY5ZTUyWTNsaHBxWWxScllvcmJ2TGp2NGxrUGFvcDRtaEhWQ0JjSytIaXRyQ2pVV1l6dWFNamd6aFNGQUFZUGxNdDdJL0sxTXRlRGYzK1hFNE0wZjN1dmcwaUpqZVdYN001di9EUW1XWGd0WTVuS2hMNm1TWkhzTkRLTE9rWUszV3R4MGw2cS8weFRnM0pTRkVBWVAvc3ozcXBsM3VZZm44dXcxUVZzYStiVlVhSmRaUW82OTRPRkwxRzdKNGwzZDhlQjcwT0dKcVZKTWJuRzQyVFdqbTNPRjNRRjJMdWtiNFFBRUI1KzdQcmZkd2Y5ZkxvZnI4L2w2TkRkTi83bEI5MjRDQ2J6L1JRR04valBoVmxpaU1YTVNZMEtoNGk4WTlrUGk2NDdmWnlpT01oODBNeVVoUUFHRzdUMjFQRW9vZFZMeDN2dzQxN3Z6NlhFNXZEMVlaQUVBRWNhTGtSbXYzcWRWQTAzYWRkODQ5ZnFsWWxSRGxlclFvc3ppU1dHYWprWm04UDRraFJBSUJXOW1DeForcjFPTTJvaUlnaEN0Ry9jTXFlU1JBQlVITXkwL01nTGhqOWVOK1gyNmlHaUY0UkY3ZkRodWpURUdGSmpPVHN4eWlvM0pqUjZraFJmU0VBZ0NFeWsvWlA4UkJxNTNHSitQM1VldmtoUWU2QlUrejlvbkxCS0U5QkJIREFUYTd2N21ZODE0YytFYmtSdzdVeG1wSE9SMEFTRjh2SjlaVTl2bURuKzBLME1sSVVBR0N2UllWb1BNVEpqUjZ2NmNVWXp6ajIwYWhQVit3Rmp4emc0NjJDQ09EQXEwK3I0OGE3bDBsMTBZWHAvSUIxT3Q1Szh1ODBIQ2tLQURDSTRpaEVWSksyMGl3eWptbVUvZjZQTmdnaVh2c1E2b1doYWpJcGlBRG9ZWitJNlI3MWlZamtPemNwSTBaMERscVozbHhCWDRocFp4d0JnQUUwdHJZMU1yT2Q0Ni9SMURzZXZwVFpmSHU4K3ZZcTFZZE1yZmY4dWxNTlJNYlhsZ1VSQUFmQnFVeWZpRjdNbEk2TFkyNUtSZ1FUa3dOV21uZTJvQzlFZkszOHpBQUFnNlRXRkxMVkp1RHhZQ1VlUk1VUjFLaEdxRDBraWxDaTJ3ZERzenYyVUdkU3NCQ1ZHZWRick15b2ZXem4wOGUyM3gvOENDSUFwWHNiSzMzcGdWQ1VpZy9hdUtXaVVzSzRZUHQ1QVFBR2FjOFNlN2FXcXc3U1RYNDAyNjVWUDhSL1h4OFFkSE5NWXlhenB6eTcvWEJycTFmRjdZYTlLblpWYSt6ajVwYUNDSUNrL2lJVXlYaVpiejh1SXJrTHpMa0I3QXVST3pvU0Y4MXhQeWNBd0I2TG93c1JGc3kzY1VNZnpjQ1AxZlZoeUlVUW5lN05hc0ZHMFg3dmJGMmxiVFFrandDbDFTcUpXblBMdlc1aUxvZ0FLTm1sVEQrRXN1WTlUeGIyaFhoeDRCTHUzSm5LNmxncmZTRUFnRDAwWFQzaTBQck5leHpUbUszZXZDOW5LeW1LM2s0RUZoRkd4TjV0SVlVZGpScEp4dHV1VlRoRXY2OElHSXJlN3RuTXNkK0o3U01sOHkxK1RyWG1sc2YyUVhOTFFRUkFFbWY0Nmwvb1Q1YlFEeUdDaGx3SlhsemNlakd5YVh6N25HUW5BVWZSU05HVCtrSUFBSHQ0L09KS0c4MG5JeEE0Y2IvNE9NUFJCbUZCVkZxY3J0c1QxcXBrNCtZL3FqRGlmNTlPYjM5MGRmY0RuS2h5aU9NWjE5b0lJMnI3eFhqN3VVYmhqWnBiRHRyeFhrRUVRTHRuK2pKOUVjcm9pWENob0MvRThTNlM3QWdhSW5HUGkyeUVCL0Z4eG9Wd1o0T21oVGFuV3hTUEZOVVhBZ0RZRzFHUjJVb0ZSSzNCWTdNS3pzWWh4TlpOZmE3aFplN2oyTm5rY3VmSE1WSGRwN1VmUnV5c3NxaFZaTFFTU0F4cmRZUWdBbUE3aWE2L3dDeDAyU2ZpNVAyaWM0TFBONjFxaUF0ZVhGZ2lsWStMVVJ3ZGljcUs2MjJVN3NVVGdWYURqYUsrRUdOK05nQ0F2YXBZTFpqaXRYT3ZFZzBnV3htOTJVb0ljU3p6WUNiZVIveTN1ZXFKM0FqNDJ1UzFic0tJMm40dzlwSlhtdlRDR0xSK1k0SUlnRGJOWmNyK09oMnJXWlRnUitYQ3pxcUdrN1dxaGtkYlZRM1gyZ2dhbXJuYVFoQlJORkkwUHZiSmpXVS9Gd0RBbmpsV1VMRjVNVDJnT2RwR0pVQXJJVVRJOVF5TDBlVzVpV0lST09TbVpNenYySDkxRzBiczdJOXhvYUEveHFuN3R3VVJBTU5zTnRNajRVUUgvUkhHQy9wQzFLb3N5Z29hbWpuZHdnVnVXRWFLQWdBSFV6eXdpUnZ3aGUzSkVlMzIyR29VUXB6YXNjK0x0M3M5YzlSaWZLMVNHRVFjTHRqejdUd3VVVllZRWFMeUkvWjM4OXRWc3NOOGhGWVFBYkRqUWxWR2o0UkxiVFFhS3RQODQ1ZXFUWTdpWTI2bEI4V3dqQlFGQU9oMGI5ZEtDRkgwUU9yODluSGFSa0hFcWN4UjNOZ0w3bnpiWllZUis0VWdBbUJISlVNbnh4dDJPbFhRRjZJTWNTR05jNExSa1hrMmhRVnhyQ011c0pQcDR0WnVMNGZpa2FMNlFnQUFCeXVFaUwzUHRZSW1sYzJDaU5nLzVpb3A2aXMzaEJHQ0NJQkN1WDRKRSt1dC9iY3pMWFoyYmpienVsYlZFQmU0NDZscUljNEZUcFE0Nm5PckwwVC9Sb29DQUF4cUNGRlVKVnJyNjlVc2lBam5Na2RkYzgzSmhSR0NDSUNzM0lXa2xiRklFUlFzdkhLbmphcUdGNnRWRGFkcVZRM3JLMzJyUk9qRlNGRUFnR0VNSWNMbHpJT29uZjJ5bWdVUlUrc3IyUWM4WXdVUHJvUVJnZ2lBMThoMVo1NXRvV2RDcmkvRTllMm1TaWQ2VU5YUXFhS1Jvck1QOUlVQUFJWjhIOWRCQ0RHVm1YeXhVQmNpTkFzaWlzS01vb2M4d2doQkJNQnJ4TkdFWGFWNWRRMkg2aFhOdUQ0OVlCZVNxVXczNksyK0VDL3FDd0VBN01zUUl2N3NWSU1wYU9jZlBOODBER2dsaU1nZTcyaXdoenpvWVlRZ0FxQk9iZ3pUZUZINTMrWks5Z0p5NmRGZ2pWTXFHaWthaWYrRXZoQUF3RDROSVU0MkdFbmVhcVBKVm9LSXdvYVg2eXZDQ0VFRVFIUFJLTEwrWWpDVEthM2I2Z3Z4VW1hTTVwMkJ1N21QU1J1NWk5d3hmU0VBZ0FNWVFvVDg2TTBYTWcrZW1nY1JJVGNDOUZ5VDQ2OEhOWXdRUkFEVU9aRzVLT1V1QkpjTCtrSk1iNndNMU9kVDFCZmlyTDRRQU1BUWkycUQ0cDRRelcvaWM5V2l1WWMwclFZUlJ6TEhZSXVhVnJZYVJweG9FcVlJSWdEMmljbE1uNGk1dWpOK1p4ODgzMVlqcEwweVhUQlN0Rm5mQ3dDQVFWZlVwK3RrQy91eG1ZMWIyYXJXL0ZIYzFvS0lrR3RnM3RySGt3OGpMang4UVJBQmNGQXNaTTRMMXRMczNHU05RYnhRaks5WHFoZFVmU0VBZ0gxWnhaclprNTFzOGFIUWhjeFIzTk1GVlJUdEJCRzVmZUtWZ29DamxUQml2MWF3Q2lJQVdydzRUYWZrUEVydWNtbDFsUGFORDlqbmtFdmtROHpYOWowR0FQYURHTE1lRDR6aVFjdUpGa09JaWJYbGJKUEs0dWJrclFjUllmNlZPNWw5NUVyTFlVVHR5TWpGdEpjYjM2ZmZOMEVFUUl0OUZlS0NjK1Z4dmkvRTFJRDFoWWhFUHhkQ25Ea2dzNmtCZ0lPajNUSGt1U01kNXg4V1Z4NjBHMFMwKy9iTCtKd0VFUUQ3UUFRTHVjQ2gwM09JL1RSVDBCZGkwRWFLQWdEc3lSSGN4KzFWTExRYlJMUmJjWEVRQ1NJQUNoUjFMMzV0dXQzL20vdTRpTVVSa1JDTk5XTzBhTTN4WkNGVERqaXZMd1FBUUVjOUhOb05Jb3FPK1E1YVUzTkJCTUFBdXZqb2hZWWhSSnpmMjFrMk43RWREb1NvcUtpRkEzSHhpak9MTlhIaHFvbHpqUkZtaEF2cC9jMmxveDlWNlV4Z25DK3N1ZDVDS0ZJay90dVpBVHM2QWdDd0YzSTl0SnFOeU93a2lKakpWTmRlYmJGcHBTQUM0QUE3VTlCblllZGM2RTdEZ1g0NnJTOEVBRUMxa3JUKzRjNjFIWlBSeWd3aXd0WE1FWkNqSGc0SklnQWFtZDY0TlJSQlF5TVg5WVVBQUtnNmxYbklOTnZDZU14T2c0aE8zNThnQXVBQXkwM09HQ2JWa2FMcnZvOEFBT0Y0SmxDWWJLR0hWcWRCUlBUMXFxK2dqY2xtdmhlQ0NJQ3NxVXpwM2w2WVQySEMxVzJYMDVuR1M5dWkwcUhXVytKYzZqT3hzKzlFbkhPTVJrdzZNd01BdkZhdEIxanM4MDYxR0FwMEdrU0U2QTlXQ3lPaUI5aVk3NEVnQWlCbnJPQk0zODdtajFkM0JBUnpPd0tDQ3cwQ2d1TXBJS2laU2NjK1lreFVtRnhmZWJYSnBja1dBQUM5RmZ1dGRnS0JYQkRSYm1XRFBaNGdBcUNoQ3lsQXlBVVFVYzduNndNQWNMQkVsV2w5cGV5MHBwT0NDSUJlOTRYUVdBZ0E0T0NLYVJkWFVpVnNISnVOL2FLdmlTQUNvSnkrRU9rQ2src0xjZVd4ODN3QUFDQ0lBQ2k1NUM3WEYySWhCUk5Ibk9rREFBQkJCRUNaYWgyVTZ4M1RGd0lBQUFRUkFHVTZWZEFYNHF5K0VBQUFJSWdBS05OMFFWK0l5Nmt2aEs4UEFBQUlJZ0JLTTc1ZXFYWSt6dldGTU9zWkFBQUVFUUNsdXZUb3hleVJqS01iK2tJQUFJQWdBcUJFWng3Y3pvWVE4ZWUrUGdBQUlJZ0FLTTFNUVYrSXVVZjZRZ0FBZ0NBQ29FVFIrMkhobGQxOUllYjFoUUFBQUVFRVFObm1NbjBob2pvaXFpUjhmUUFBUUJBQlVKcXpCWDBoVHVzTEFRQUFnZ2lBTWgzZFhNbUdFSmNldmVEckF3QUFnZ2lBOG16MWhkamRuSEwrOFowbjQrdStQZ0FBSUlnQUtQVkl4dlBadmhEVCtrSUFBSUFnQXFCc3N3OTNCeEduN2ovbmF3TUFBSUlJZ1BKTmJpdy91YmJqYU1hRkZFejR1Z0FBZ0NBQ29HZU9wRDRScCsvZmZuSnM4NWF2QndBQUNDSUFBQUFBUVFRQUFBQ0FJQUlBQUFBUVJBQUFBQUFJSWdBQUFBQkJCQUFBQUNDSUFBQUFBQkJFQUFBQUFJSUlBQUFBQUVFRUFBQUFJSWdBQUFBQUJCRUFBQUFBZ2dnQUFBQkFFQUVIMHZqYThwT1pqWlVuSis4LzkrVHNnK2VmWEh6MHdwTzVSeTgrdWZMNHhTZFhIOTk1c3ZES25TZlhYbm5weVR1LzlXdXFycWZmTHlUeC81MjZmOXZYRUFCZ3lFMnNMejg1c20wcTdRdG5ObTl0MmJqMTVFVGFJOWFjVG51L013KzJ6RDU4L3NuNWh5OVVYWWo5WTlvNzFzeW4vV05ON0NVdnBMOHo1dXVNSUFJT3ByZ0FIRTBYbGJoNFhFd1hoTGc0MUFLR1RoMVBiOC9YRmdDZ1A2WlRVSEJzODdVQlFTMGNDT2QyQkFRWEgzMHdITGhjRnhCMHV3ZHNWM3hjdm44SUl1QUFKZHhSN1hBcEpkWFhkMVEybENVdWNyN09BQUM5cm1LdHBJclYvZ2NJWlltS1d0OUhCQkd3enlzZmptOUcrUEJpVDhLSG5lSW9oNjg1QUVCdnhaNXJXRU9JbXNuMGdNejNFa0VFN0ROeHJpLzZQRnpyTW55NHR0MEQ0dktqTzlWZkcvM2Q2Q2ZoYXc4QTBEdW5Vblhyc0ljUUlZNlIrSDRpaUlCOUl0TGxPQ0xSVHZYRDlTUkNobWdlRkkySG9uZkU1TWJ5YXhvSlJiQXgzeVNJdUN5SUFBRG9hVStJTWl0Y2EwM0hhNktDdHViQ2RtK0pFRDBkZHZhZWlLTytVWEc3NVZiMTQ2cVpUR3JOTGllMnF4Nk9wa2FYanZRaWlJQjlXZ0Z4UGwwa1dyMDR4WVVuTGdCeDhaaG9VaHBYRFNGYWFHU2tJZ0lBb0VkOUlkWXIyWWRDODlYcFpUdURnZWVxVTlCZURRYldQeGdNSE5tajR4RFIwNkwrNDQ3Z3cvY1ZRUVFNcVFnUlpoKzBGa0JjMnc0ZjR1TFVUc0F4MzJJekpFRUVBRUJ2UkpYQ3Jxcld0TGViYm1OZnQ1Y3VaejcrSS9wRUlJaUE0Uk5sY2EzMGdJaXV5dkYzeHp1b3NpaXFoSWlSbi9Ydld4QUJBRkMrT0E2UjI0K2RHcUkrQzNHOG8vN2pQMmIwTzRJSUdLNWpHSE9aVkxrK0lZK095cDJtNUkwcUlTNXVuK21ycjhJd05RTUFvRnd6QlgwaExneFpqNFVJSGVvL2h3Z25mSThSUk1BUWlKNE96YW9nSWlqb1ppUlNzMHFJK0R0am1iTittZzRCQUpSN0JIY2hzeWVML2dyalEvZTVWREpWdTZwcEVVVEFRQnVybHJTOTBQUUlScmZuQkZ1cGhLajl2ZnIvZjFhcURRQlFtcm1DdmhCVFE5SVhvbDV1RlB5NDd6T0NDQmpjb3hoWEdqU01qQXFKa3lXY0VXeWxFbUpubWVBd24xTUVBQmhrWnd2NlFyUzY1NHVIVXlmUzN4MmtocERuTXcvVllyU243emVDQ0Jnd2NSRlphSEFVSXdLQ2lSSXVNSzFXUXRTY1NLT2g2di9lY1EySEFBQzZkblJ6SmJzbmE3VXZ4T243dDEvendHcFFLaWh5KzhlWS91WjdqaUFDQnVraXRGSGNEeUwrUEY3TXk2cTRhTFVTb2xGS1B6MmtaWUlBQUlQVkYrS2xiRitJc1JiZlJuMXp5MEZwYkRtWk9kbzdwMDhFZ2dnWUhORlorSHBCQ0JFWG9zbVN5dXlhVlVJVVhmQXVaczRzanZtK0FRQjA1ZkxqZkYrSXlZM1c5MzcxZThnNDRqc29uMS85dzYvNFdPMGhFVVRBQURqZUlJUzRsRVprbHRYVXA5TVFJdFIzY0o0Zm9Bc2NBTUJ3OW9WNHZxdStFRFgxdmNWaVgxbm14eGw3MGZpWVRxYnEzSGIzcFJjZTdlNFRNYU5QQklJSTJPc3pnY1VoUkpsbjZDYTdDQ0VtTW1WMUZ4OFozUWtBMEUwMWJHNWYxc2w0OUl1Wm0vMkprcXBwWTQrNGMvcEZPMGRHRG04SEdQVWYyNWwwNU5mUEFJSUkyQ1BSWTZFb2hEaDF2N3dYNksyZUVBVVZGMDFDaUtJTDVlbjdMaUFBQUozdXphNTEyUmRpcDlsTVpVVlp2Ynh5RlEzSDJtaFlQcm0ra3FuNDFTY0NRUVRzaWNtQ0MxQzFIRy96dVZJdmRBdHROcWFzZCs3aDg1bVNPbzBxQVFBNnFUQzRrdWtMRWZ2Q1RudUM1YW9PeW1oeW5udTduWXpnckcvR1dmYlJFUkJFUUFzbUdoeVRLTDBTNG5FKzdJZ1N2bFlUOS9uSG1nd0JBSlJodHFBdlJEZkJRUVFEOVcvdmJKZEhmSXNxZDY5ME1QVWlkM1JreWtNdEJCSFFYM09aQ1JSbG41ZWJMS0VTSWt4bHkrbjBod0FBYU5meGdyNFFVWDNhM2I1djkzNnRteEdlNCt1VjdFT3pxR3pvcFBmRXFVeGxoV08rQ0NLZ2o0cTZJNTkvV0Y1anlvYkhNZG9NRVNJYzJWMjE4Wnp2SlFCQUNjZHlyM1RZRjZKZS9kdTkzRVVmaGtzRkQ4M2E2UTFSWDExUlpsQUNnZ2hvcDJ5dUlBVXZzOEtnNFhTTU5vNWoxRnpOdkswakpYVmhCZ0E0T0gwaDdwVGFGNkxabm0yaHd6NE11WWRRVzBjOWJuZjErZGNmODFqUUp3SkJCUFJlekZ5ZXoxUXBSR2d3WHRMN2FGUUowVWwzNGx4NmZmbXhMc2NBQU8wNC96QmZFWHU4d3dxRGZCK0czVlVNY2NTaW5iY3hVOUFYWXE2RUtSZTVLb3M0VXVMbkEwRUU5UGtDRkMvMFpUWHEyUnJSZWFmakVaMnRmc3lPWlFBQXRLNW84c1RzZytkTGZUKzVLV2Z0N0RNbkNoNW9kZG9Yb3BWS2l4UDJsUWdpb0hkbU1wVUZaVTdJYU5TWXN0TVFZanhUUWhmL2U5ejNFd0NnSlZOcGoxWTBlYUtWL1ZuY3FKOVBlN25UNlNhKzJkL1BOWVJzcDZkRHJwbDZmT3p0anVvczNBOW5qaWpyRTRFZ0Fub28xMmZoMHFNWFN3c2h5cTZFMkxxWTNlNXBRMDBBZ1AzZUYrSnFRVitJVnZwdDFWZFNOSnVza1J2aDJlcGtpck1GZlNGT2x6alJMZGNuSXZhd2ZsWVFSRUFQNU5McDZ5MWVnTG82anZHbzh4QWkvcnRjaGNXTWVjOEFBQzI1a1BaaTNmU0ZxTytwY0wxSmM4ZkpUQVZ1SzJOQis5Rk12ZVp5cHVwQ0UzUUVFZENESkh3aFU0NVh4dHprWGxWQ0ZKMWwxS1FTQUtDN3ZoQm4yK2dMY1RFVFpEUzZhWSs5WDd0TkppY0tSb3BHTS9XSkhnUUVzNWt4OXNjMzlZbEFFQUdseWpYbGlSSzljbnBDdk5TVEVLSW9QQ216cXpNQXdMN3RDMUV3ZWFMZGh6cTVtL2FaSnYwYTZrZTR6emZZZDhhZUx6Nm1YT1h1ZEkrcVlIUEhSODQ1K29zZ0Fzb1RUUjF6Q2ZPeExtL29lOUdZOGpYaHlmM2VoQ2NBQUFkaC81ZnJDOUhKNUlsY1ZjWEpKbE1tY2lNeXg5b0lPbm85SVMzR2llNXUzR21maVNBQ1NuTTZkN3loeXdhVnZheUVxUFdjdUs0YUFnQ2dJN2tnb05NSFVibnFnV1lqUDNNalBDY3oxUTNIQy9wQ1hIelUreWtXVnpKVkdCUHJmbllRUkVEUGVrTWM3ZUtHZnFzbnhFdWxONlpzZHZHVVVnTUFOSGVxaEw0UXI5MzdyYlE5N3ZKMHBySzFmdnptWkVGZmlLams2TWVZOWx4WWNzeERMd1FSMEwxY3l0ek5EWDNEU29pU1FvaWlaTnlrREFDQXhxWUwra0xNZFZrTnUzcy8yZmp0SGN2czUzWWU1eGlyVmlUY3lmYUZtT3JUbmkrMzU1eDlvRThFZ2dqbzJseW1zdUJFaHgyQisxRUpNVkVRZERSTDNRRUFEcnJZUjgyWDFCZWlYbjIvaWFZalBETlZGTE03bWtHZWY1anZDM0h5ZnY4bVY4UlI0TEtQTDRNZ2dnTXYxMmRob2NOcWlINVVRaFFGSjlkS3VIZ0NBQnpVdmhCSE4yNzE1RzFQdERuQ3M5YjNvV2lrNlBrOWVQQ1VhK2c1NW1jSlFRUjBMamQxSXNaNERtb0lrUnN4MnU5a0hBQmdLUGQ5QmZ1b1R2WityZlpUYUhac3RuNy9HRWN4cGdvYWtrY2dzQmNCUUZUZDd2cTg5SWxBRUFIbGx0QWRhYk95b0Y4aFJDVDF1WXZTcFVlT1pBQUFORExUbzc0UU8rVWFZSjVvOHJDb3Z0STFQc1pjQlVKVXYwN3VVZlhyaWN6bmRiYWs4QVlFRVJ3NFU1bHplZTJlZWV0WENCR2puSElka3hjY3lRQUFhTm9YWXVHVjNUZjM4eVh2bzNJalBKdE40VGlmcVRiSTZiUi9XU243MEV5ZmlFdjZSQ0NJZ003a1JpYWRhdU9JUTc5Q2lHcFRwVmZ5SFpOTnlRQUFxTFJWZGRDcmZWUlpJenpyblh1NDkxTXE2dmU4OGZYVEp3SkJCSlIwVVdxMTVLMWZJY1Q0Mm5LMlBDK2NWaElIQU5EUTJZSytFTDNZUitXYVR6YXJ0ajFXTUpKOTV3alFRYmpoei9XSm1ON1FKd0pCQkxSOW9hZy9KM2kxeFdrWi9Rc2hLdFdMVDc1anN2bk5BQUFOajBwc3JoVHUxM3IxUHVjZnY3U3J0MFBEbzhJYks0VWh4TFVPZXBmMVNtNktSMVJ6K0RsREVBRnRtTW04NkxkeWM5L1A0eGhGSVlRemVRQUF6ZmRTdWY1YTh6M3VyelhYNWdqUDhmVktZUkJ4YklBbVUrUUNrNHNhcGlPSWdPNzdReHh2MGdTb2NRaFJYdGxjSk45Rnh6RUdwVHdQQUdDUVhYNmM3d3N4M2VQK1d1ZXpSeGlLMzJjMG9jenQrWm8xdWV5M1hNUEtoU2JWSGlDSWdEcVI0TzdxRDdHeHZPY2hSTHlmK1lJUUl2N2NoQXdBZ0daOUlaN1A3cVhhYVVwZTVzT3Vvb2tYa3dWVkd4R2lETnFSNWl1Wi9XbXJ4NXBCRUFIYjZpc09HcDNmNjFjSWNUeVYzMTByZUQveDhSNFJRZ0FBTkZUVS9MRmZ4d2h5N3o5WDNUQ1cyWThPNm1qMk9MNmMrNW9lMzlTc0VrRUV0SlhxMXIrUXpoWDBYZWhIQ0RIVzRBVytkaHhESlFRQVFITzV5dEw0cytqRnNGZTlGQzVrUXBBTEJYdS9vd00yaWFMbzZNanNBNDNURVVSQTF4ZUkzSHptZm9RUThiRVU5WU9vQlNSNlFnQUF0Q2EzbitwMVg0aWRjczBuNjBkNDVpWlFoRE1ETnBwOUt1MkZyMmYyd25xV0lZaUFEa1RTM096TTRGWUljYWVuSVVSY2JLNFhCQjNWOUR5RkkxN2tBUUJhZHprenRXS3lqMEZFcUgrUXRmTUljRHlFeXUzL0xnM1lCSXFpb3lPRE5GSVVCQkVNbFZ3S3ZYTThVcThySVk2bTkzV2xRUlZFWEp4T21zc01BTkMyMlV5anloTjlhRkxaTEF5SlNvbnhncHY3K1FIc0MxRjBkT1NZdmhBSUlxRHpTb1Npa3IxZVZrTEUrOGpObHE0L3d6alY1OVFlQUdDL3lEV0x2UER3aFQ3ZnhPK2V6aGI3dTl6VXRuZ0FOVE5nZTcraW95Tm45WVZBRUFGZEpPV1poRGN1RHIycWhKaGN6MTk0NnAxM0ZBTUFvQ3NUbVI0Ti9SNHptWHZvVmZRdzZuUVhWYkN4YjR4akp4RytuRXB2SjNxZXhaNjFWblV4bDNvNVRMWlphVkYwZEdUUVJvcUNJSUtoY3o2VFVzY0xlRkVsUktjTkl5UGR6aVhpdVRGTnhoOEJBSlFqbWluVzc3ZjYyZGVnYU5KRUp5TkZ4N2ZEZ2RnclJtZ1IrOWpZbXhidFczTVAwMXI5dUl1T2pnemlTRkVRUkRCMExtU3FFNjZWVkFrUnFYT2s0STBtWWJ5bUNpS1Z1STM3bmdBQTlQU2gwL0hOL3ZXSm1NNU1hR3MwVWpSdTh1Ty9pVjRXc1krTUIxbFJnWEN0UVZQelZpM3NhSlRaVEZFRjc2Q05GQVZCQlBzbWlPZ21oSWlVdXAzd29WWmxvUmNFQUVENWptY3FFbktqMm50M1BHUzU2VjR3OW8zUnZMeU1zS0dSVnZ0am5CcVNrYUlnaUdCb3RkS3ZvU2lFR044K2NoSG44T0x0dEh2eGlBRGlxR01ZQUFBOWN5UVRCRnpwYzQrRFhnY01qY1Q3anM4M0pvaTA4bEJ0dXFBdnhOd2pmU0VRUkVCNUZSRk4ramJNUDM2cFdob1h5WEIwQjc3UTVsbThYRGZrS0JGVUFRRUEwQi96bVgxYlA0L0Q1dnBVbENtT1hNU1kwTmluUnRWQ1ZJRkVvTkJ1TDRjNEhqSS9KQ05GUVJEQlVEdFhNQmU1YlBHaUhoY0dMK0lBQUh2LzRLbGZ2UTRtR2t4aWEyOHYrVkwxWVZqc1hhTlJaVFJYandkYlpRWXFsekxUUEFaeHBDZ0lJaGg2dVpGS1phYlRVZjNnK0FVQXdONDVtZWw1RUpXdS9YamZsOXVvaG9oZUVSZTN3NGFveG8yd0pFWnlqdTNobnZpMHZoQUlJcUI4eDFzY3FkU3FhRFFVRjdZWkhZVUJBQWJDNVBydXlSVnpmZWdURVh2Q292NWowYk1oQXBMWU04Ykh0NWRmbjVtQ3ZoQ3RqQlFGUVFSMGFPN1JpeDAxL3RsNUZpL0s0OFlkdXdBQUdFajF4eVBpeHJ1WGxRYkgwOTR3TzY2OWp4TTdXajg2Y3FmaFNGRVFSRUFQaytCSXBlUE1YUVFMTzhXZnhmOFhZY04wOVN5ZXdBRUFZTmo3UkV6M3FJSTFKblhrSm1WRTVlellnSDFkNWdyNlFrenJDNEVnQWdBQW9IT25NbjBpenZTZy8wRUVEYmtwR1JGTVRBNVk5ZXpaZ3I0UThiWHlNNE1nQWdBQW9Bc3hZYUlmUFJET0YweGtPN0U1V0RmM1J3dU9qa1RsaUo4WEJCRUFBQUFscUcvSUdGVUtaYjc5RXdWTjBNOE5ZRitJM05HUm1Ob3g3dWNFUVFRQUFFQTVMbVg2SVV5VjFBdGhzckF2eElzRDF4Y2lOMUkwUXBvcGZTRVFSQUFBQUpUbnpQM2RQUkZPbHRBUElZS0dxQ2JJOVlVNDBvTytFRkcxRUcrM2s0Q2phS1RvU1gwaEVFUUFBQUNVYXliVEY2R01uZ2dYQ3ZwQ3hBalBUdDltQkEwemFhckhpUlFRUkhnUUgyZFVNdXdjUTdyUTVuU0w0cEdpK2tJZ2lBQUFBQ2hkVkJEVTk0bFk2TEpQeE1uNytiNFFFUjQwcTJxSW94QXhIajVHeFVjZmlUZzZFcFVWMXpOSFBJckVTTkJXZzQyaXZoQmpmallRUkFBQUFQVEdYS1kvUXFkak5TTkl5SVVHVWJtd3M2cmhaSzJxNGRGV1ZjTzFOb0tHWnE2MkVFUVVqUlNOajMxeVk5blBCWUlJQUFDQVhwbk45RWc0MFVGL2hQR0N2aEMxS291eWdvWm1Uais0M2ZSakhaYVJvaUNJQUFBQTlwMmpHN2RLNlpHUW04RFJEL09QWDNveWw5NTNmTXl0OUtBWWxwR2lJSWdBQUFEMnBhaGs2T1I0dzA2bkN2cENsQ0dPUzBUZmg0dnBHTWRzQ2d2aVdFZUVKNVBwR0VpN3ZSeUtSNHJxQ3dHQ0NBQUFvRzl5L1JJbTFsdjdiMmNLK2tLMEk0NXUxS29henFTakZjZFQxVUpNdjVnb2NkVG5WbCtJL28wVUJVRUVBQUJBZ1hPWm5nbkhXamptRUVIQndpdDMycWhxZUxGYTFYQ3FWdFd3dnRLM1NvUmVqQlFGUVFRQUFFQUhJblNvdjBHZmJhRm5RcTR2UklRT01SSGpSQStxR2pwVk5GSjA5b0crRUNDSUFBQUEraTZPSnV3YXVmbm94WWIvVFJ5aDZIUnFSVDlOcGMvdGVyWXZ4SXY2UW9BZ0FnQUEyQ3U1MFp2akJYLzM2T1pLTm9TNDlPaUZnZnFjaWthS1JrK0tDWDBoUUJBQkFBRHNuV2dVV1gvRFBwUHBuN0RWRitLbHpCak5Pd04zY3grVE5uS0J5VEY5SVVBUUFRQUE3SzBUbVQ0S1p6UEhMQzRYOUlXSWZoQ0Q5UGtVOVlVNHF5OEVDQ0lBQUlDOU41bnBFekZYMXljaWJ1SnpOL2N4QldPUVBwZnBncEdpemZwZWdDRENGd0VBQU9paitpTVhjVE5mYStpWW02d1JMandjc0w0UTY1WHFNUkY5SVVBUUFRQUFETGdMbVQ0UjB4dTNxbE0xcm1VcURLSVI1UGlBZlE2NWthTGg2SWErRUNDSUFBQUFCa3F1cjBLTTZZeFJsN20rRUZNRDFoZmk5UDM4U05FekF6WlNGQVFSQUFBQVNRUUx1Y0FoZDNOL2NzRDZRc3dVOUlVWXRKR2lJSWdBQUFEWTRWcEI4TERUK1Qzb0N4RkhRT0tJU0lqR21qRmF0T1o0c3ZESzdyNFE4L3BDZ0NBQ0FBQVliQmNmdmRBd2hJaStFR003L3Y3RWRqZ1FvcUtpRmc0Y1RXSWthRTBjajZpWmZmaDhOY3dJRjlMN20wdEhQNnBTZjRmNUZDalVYRzhoRkNrUy8rM01nQjBkQVVFRUFBQkFuVE1GZlJacXJuVVJEdlRUYVgwaFFCQUJBQUFNdnBpU01ReEJReU1YOVlVQVFRUUFBREFjY3BNemhrbDFwT2k2N3lNSUlnQUFnSUUzbGZvOFhCK0FveGZ6S1V5NHV1MXk2aHR4YVZ0VU90UjZTNXhMZlNaMjlwMDRzZm5jazJPcEw4VzQ3eU1JSWdBQWdNRVhEU2pqeHI5Ujg4ZXJPd0tDdVIwQndZVUdBY0h4RkJEVXpLUmpIOU9wZ1dTWVhGOTV0Y21seVJZZ2lBQUFBQTZZQ3lsQXlBVVFNUnJUMXdjRUVRQUFBRDN2Q3pINzRIbGZIeEJFQUFBQWxHY3FIWlBJOVlXNDh2akY2bkVOWHlNUVJBQUFBSlFpR2p2bStrSXNwR0RpaUw0TklJZ0FBQUFvVTB5aHlCM0pPS1l2QkFnaUFBQUF5blNxb0MvRVdYMGhRQkFCQUFCUXB1bUN2aENYVTE4SVh4OFFSQUFBQUpSbWZMM3laTDZnTDhTRXZoQWdpQUFBQUNqVHBVY3ZabzlrSE4zUUZ3SUVFYjRJQUFCQWljNDh1SjBOSWVMUGZYMEFRUVFBQUZDYW1ZSytFSE9QOUlVQUJCRUFBRUNKb3ZmRHdpdTcrMExNNndzQkNDSUFBSUN5eldYNlFrUjFSRlJKK1BvQWdnZ0FBS0EwWnd2NlFweldGd0lRUkFBQUFHVTZ1cm1TRFNFdVBYckIxd2NRUkFBQUFPWFo2Z3V4dXpubC9PTTdUOGJYZlgwQVFRUUFBRkRxa1l6bnMzMGhwdldGQUFRUkFBQkEyV1lmN2c0aVR0MS96dGNHRUVRQUFBRGxtOXhZZm5KdHg5R01DeW1ZOEhVQkJCRUFBRURQSEVsOUlrN2Z2LzNrMk9ZdFh3OUFFQUVBQUFBSUlnQUFBQUJCQkFBQUFJQWdBZ0FBQUJCRUFBQUFBQWdpQUFBQUFFRUVBQUFBSUlnQUFBQUFFRVFBQUFBQWdnZ0FBQUFBUVFRQUFBQWdpQUFBQUFBUVJBQUFBQUNDQ0FBQUFFQVFBUUFBQUNDSUFBQUFBQVFSQUFBQUFJSUlBQUFBUUJBQkFBQUFDQ0lBQUFBQUJCRUFBQUNBSUFJQUFBQkFFQUVBQUFBSUlnQUFBQUJCQkFBQUFJQWdBZ0FBQUJCRUFBQUFBQWdpQUFBQUFFRUVBQUFBSUlnQUFBQUFFRVFBQUFBQWdnZ0FBQUFBUVFRQUFBQWdpQUFBQUFBT2JoRHhqdFhGVHhsWlhUdy91bFo1UExwYStUVmZGQUFBQUtCRS95UDU5c05yU3hjT3J5Ly93YWQycnFmdnpyNXVkTzNtbXc2dlZtNmxVT0w3ZkxFQUFBQ0FkbzJ1THYzbzZIcmxyNCtzVmI3a0xadVZqMzJxMVRWMmQvbDNqYXd0VFIxZVhicWYzc2d2KzJJQ0FBQUF1NnhXZmlPZHRQaEhvMnVMRncvZFhmelVwOHBZMCsrYS92Q1J0WnR2U0pVUzd4eGRXL3FIcWFUaVYzMnhBUUFBNEVBR0R4OUl2LzVnS2xxNGt6S0N2enJSVHRWRE44RkVxcFQ0M0pSNExLVjMvaVBwMTkveXpRQUFBSUI5ZXR4aXJmSnpxVGpoRzBkWEY5ODZ0bjdqRTU3YTZ6VnlkK24xNlFNYkgxMWYvcWIwNjgvNEpnRUFBTUF3Qnc5THY1bCsvYTZ0a3hFci85ZU5KemMrOUtsQlhzL2NYZnFNZEh6alJQcWc3NllQK21kOUV3RUFBR0NBZzRmVnl2dGpjTVhvdmFXVjBaZHZ2cWt2eHkxNkdreHMzUHowa2RYSytYUis1QjhjM2hyZDRSc05BQUFBZTJycHAxUGJoYTlMeHkzKzJqT1A3M3pjVS90MWpYemp5a2VQcmkyL0taVjVQSmMrOGZjbXYrR2JEd0FBQUQzM2kybXM1cU1VUGx3YXZiZjRXVThkMURYeWJTbVlXRjM4Z3VRclUvT0w3MDUrMHc4SEFBQUFkRjN4OEtzUlBLUVRDbWNQclQ3NzJUZHVESGlmaDcxYTBYM3o4UHJ5bDZaeElPOUtLYzFQK01FQkFBQ0FGcTFXZmpnOTRGOCt2Rjc1L0RmZU9mVVJVb1lPMXVqZHIvNWZSOWFXM25iNDN0TFhwT01jUDVTK3NPLzN3d1VBQUFEVlZnZnZUYUhEclVQM2JuN3g2TnJOLzBXSzBJdkdsMy92blI4M2NtLzVMNmRxaVVwcWZ2azlla3dBQUFCd2dJS0hmNTRlMGk4ZVdsdjhTMC9mdmZFeFVvSTlXUEdGVDBjNXZpaDlNNzQ2K2E3a2ZYNDRBUUFBR0hZeFVuTzc0dUhtNFpjWHZ5aUdQMGdCQmpTWUdGdGIva3RSTVpFYWMzenY5amZPRHpFQUFBQ0RIVHlzVlg0cjNjUCtjQW9lbmorOGV2TXRUOTlkK25oMytVTjZsR1AwNWFVM1JvS1Vqbkw4czFUQ29tSUNBQUNBdmJkYStVRDY5WWRIMTVmdXBBRGl5OGJ2M3Z3a2QvSDdzbUxpOXV2U04vanpEcTh0WDAvZjhHOVAvcnQvQUFBQUFQU2g0dUUzVStYKzkwZkZ3OGhhNVVzMGx6eXd3Y1RUSDNaNGZmR1BweCtLMDhuZlQzN2FQeEFBQUFCSzhLc3BlUGpPMGRYRnJ6eTBWdmxDelNXdHd2V08xY1ZQR1ZsZEhFc3AxZGVsSDV3ZmkzTTYvZ0VCQUFEUXNPSmhkZW1YVXdYK3R4NWVYYnh5YUdQcHoweS9hL3JEM1dGYkhhMnh1OHUvS3lWWWIwMUoxdGVrVU9LSDBnK1lCcGdBQUFBSHZzZkQwaThtRDBmdkxWNGNYYS84eWFmdjN2MHdkOUJXajQ1ekxIMThhaWJ5eHNQVmthSEwzN2xWYnVNZklRQUF3RDZ2ZVBpUDZkZHZUbFVQeDBmdnJYem1VMCtlZklnN1pHdFBWcFRiUlBvMXNsbzVuMzRvNzZZZnp2L2tIeWtBQU1CUWUzOTFsT1phNVd2VHZkNUlIT0YzOTJzTjlCcTV1L1Q2a2JXbHQ2VnhvUytrNHh6dlRXTlpmc00vWkFBQWdJRVZFeFcvUGQzSGZjWEl2YVcvK016ak94L256dFlhNnZYbUJ6YythbVJ0OFMra1JPMWFxcGo0MWhSUS9KSi82QUFBQUh0MHpHS3Q4clBKYXFwMk9CdVRGUFYzc1BiOXVuSGp4b2VtaGlhZk5YcXZjaktGRTkrUy9pSDhsQmNEQUFDQW52bnhOSURnRzFLMXc5VGI3OTM4dys1S0xTdXRaMVlydi9mUXZhVXZUMTFYbjA4VkUrOU42ZHo3dkZnQUFBQzBYZTN3dmxTSi9qM3AxK2RTdGNPWHhpUkVkNXlXMWNKNit1N3QxNDJzM1h4RCtzY3psLzRScmFWdzRqOTdVUUVBQU5nVlBQemM0ZFhsKzZtL3crWDBZUGR6NDE3S0hhVmxsYlRHMWhjLytmQzl4YmRYbTJCR3dyZTZwR29DQUFBNFNLSEQrNU1mT3J3OXplTFE1dUtudWxPMHJINEdFKysrOFpIcFNNZWZUdjhJVDZkL2pOK2MwcitmU0wvK2xoY29BQUJnZjFqNm1mVHJabFE3cFA1Nm4vZjAzUnNmNDA3UXNnWnN2ZjJiYjN6aXlMM2x2NXord1g1RitnZjdTZ29tZnQ2TEZ3QUFNUEJXbDM0OS9mcmRxUUw4dWRIVjViZEdSYmc3UE1zYTB2V08xY1ZQaVgvSWgxY3J0MUpBOFkvVFAreGY5a0lIQUFEc1hlaFErVUI2YVBxanlkODV2TDUwTEVab1RyOXIrc1BkdlZuV1BsMDNudHo0MEpHMVovOW9lZ0VZVDZuajN4aGRyL3lMRkU3OHBoZEVBQUNnWjBjc1ZpdnIxWWFTTHovNytjODhmdWZIdVRPenJBTyszdnpneGtjZDJsaitjNlAzRmkrbVZISTF2Vmo4dEJkTEFBQ2dBNm1wL3RMM3BsOWZqR2I3amxoWWx0WHlTbzB3ZjI5cUNQTmxLWmhZVGk4aTM1RisvZis4cUFJQUFEWFJMRC81OFZSbC9TMGpxNHZubjFtOStUblJWTi9kbEdWWnBhM29Oekd5dHZoME9zcXhtRkxPYjZ2TzdQVUNEQUFBQnl4MFdMcVU3Z3Yrd3RqNmpVOXdsMlJaVnQ5WGxGb2R1cmY0cGFsNllpa3FKMUxmaVYvMFFnMEFBTVBlVUhMcFA2V0hqMnVqcTB0WFIxY1h2MkJzL1htaGcyVlpBN3FlUFBVaGh6WXJuemE2dm5Tb2VpNnNPb0tuOG10ZXpBRUFZR0JEaC9Rd2NlazdSbFlyTjhmV0sxLzh0dmRVZm84Ykc4dXlobnI5K2UrODhUOGRXbHY2WStuYzJGZzYxdkZDZXBIN3poUk8vSUlYZlFBQTZQc1JpemhlL2UyamE4c3IwVXp5N2ZkdS9tRjNMSlpsSFpnMWNuL2xENHlzVmI0a2xYcDlaWG94M0V4K3lzVUJBQUJLODFOcGJPWm1Pa2I5enZUclc4WTNudnQ5N2tJc3k3THExdmpkbTU5MGFHM3hMMjJkUmF1ZVNmdEpGeEFBQUdoUzZaQjZPcVRxNDQxMHpHSmg5T1dsTjhhKzJ0MkZaVmxXaCt2dDMzempFdyt2TDM1Uk90cHhKYjJ3M2tzdnNQL2V4UVlBZ0lON3ZHTHBQeDllWDc0ZmxRNmphemZmTkhiM3h1OXkxMkJabHRYajlZNkhpLy96TXk4LysvbXAzOFNGOUdMODk5Slp0eDlOdjc3ZmhRa0FnSDFXNmZDVDZXSGNlbFE2ak55NytaZkg3aTRMSFN6THNnWmxqWHpqeWtjL3MzcnpjMGJ2VlU2bUYrMi9uV1ljZjUrSkhRQUFESW4zcDBxSGY1T0NoNWRUUDRjckkvZVcvbUpVQnR2bFc1WmxEZG02OGVUR2gwWW40TVAzbHI1OFpIWHBxK0xjWENwaCszY3BvUGd0RnpzQUFQYm1hRVhsRjFMZzhJK1RPNmx4KytRNzdsYis1SnNmM1Bnb3UzZkxzcXg5dko2K2UrTmpEcjI4OUdkRzdpMGVUUmVEcjAzK2VVcWVmOFdGRVFDQUVnT0hlUGoxRStuWDFXb1R5YlhsTjQzY1hYcTkzYmhsV1piMWF2WEVXS3FlR0ZsYmVsdTZXQ3lseW9sdlRUMG9mc1pGRkFDQUZyd3ZWZC8rVUFvYzNqMnlXamw3Nk9YRlAvL0Y2emMrd1M3YnNpekxhbnNkV24zMmQ4Y1p2ZEY3aXhkVFFQRjMwZ1htKzFOQThhc3V0Z0FBQjNocXhkclN0Nlc5NFhQcGY0K24vZUpudi9IT3FZK3djN1lzeTdKNldENXg0ME1QYlM1K2FqclQ5OWVxWlhicmxXOUpGNkYvbFk1My9JYUxNd0RBdmdrY2ZpbUZEZCtkOW5qdlNnK2xUbzZzTGIvaDZidTNmN3ZOc0dWWmxqVXdLL1dlK0czUDNGMzZqT3J4anZYS1Y4WjV3SzN1eDBhTEFnQU1yTldsWDArLy9tRGF0LzNkUTJ1TGMrbC8vNVYzck43Ni9YYTNsbVZaMXRDdXNlKzg4WkVwUmYrczBmV2xRK2tDdDVnQ2lnY3h2Y09GSHdDZ3J4VU92NWxDaG44ZEl6TFRYdXpheUZybFMwYlhidjZocCs4Ky9XRjJySlpsV2RhQldER202ZkQ2NGg5UFp3eEhxdzB5VTBDUmZ2OFRxZnp2QXpZTEFBQWRpMnJVSDB0N3F2VVk0VDZXcWxXamFqV3FWKzFBTGN1eUxLdUZnQ0lsOS9lVEZGQXNDU2dBQUQ1NHBDTDJSajhlZTZWcTFXbFVuNllxMUtoR3RhTzBMTXV5ckJKV2FvNzB1dWpLUEhwdjZWQWFDM1V6WFhBM1V0TC9ZNk5yZWxBQUFBY25jQmhadlRseWFIWDVzMk52Wklkb1daWmxXWHV3M3ZqNHprY2NXbHY2WTJtS3gxc1ByeTh0cEVxS3Y1dDhiN3BnLzZMTkN3QXdQS29qMG44d0pwS2xIZzVmbVg3L2pNREJzaXpMc29ac3ZYM3oyZCtabmg1OGJwcmtNWlVxSjVhM255VDhtMnF6SmhzZUFHQXZta2F1THYxazJvdDhXL3I5aXpFVzg5QmE1UXRIN2k2OS9xa25UMzJJM1p0bFdaWmw3ZE5WSFRXNmNldlQwOU9HTDR1dTBXbEQ4RTNKdjloK0VtR1RCQUIwT2FHaTh2NjB0L2kzNmZlYmNad2lWVytPanR5ci9JbTBCL2tZT3pITHNpekxzajY0bmp6NWtMSDF4VTlPelo3ZW1IcFJuRXViaUwrVk5oRC9KUFdpK0M4MlZRQkEwWEdLNU8rbjMzOUZIQlVkdmZmc1o4YlJVUnNyeTdJc3k3SzZXaE9ibFk4OWZEZE44N2kzK1Bhb29rZ2JqcitYam5wRUw0cGZzQWtEZ1AxYzNWQTkwdmxqeWNNVU50dytmRy9wMk9HWEs1Ly90bzJ2L24xcGkrQTRoV1ZabG1WWi9WL2pkMjkrMGpPck56OW5iSFZ4TE1vdjAwYmxiclhaMUdybFYyemdBR0FvamxMOFZqcEs4Ui9UZGZ3ZnBsLy9adXJkY0hIazN0S2JEMjFXUG0zNlhlLzZjTHNkeTdJc3k3S0dacjN0UFpYZk03SzIvSWEwbVltR21VdnBtTWQ2MnZEOHExUk44ZXMyZmdEUTk4RGhaOU9EZ24rV0ptMjlPLzErcnRvdjZ0N0taNzc1d1kyUHNtdXhMTXV5TEd0L3I5UVorOURxczcvNzhPcnk1NHlzVmtiU1J1aWRxZHp6RzlLbTZKK21qZEpQeDVNWkcwWUFhTnY3NGhoRnVxNSthNnBzK0J2cEFjRDUxTGZocjhXbzc3ZDhmZVZqYlVBc3k3SXN5N0lLMXRpN2IzemtNeHMzUDMxMGJmbE5xY3YyNmJTUmVyN2FlWHUxOGk4ZCtRRGdnSSsvL1BubzA1U3VoOStTcnBPTEtXaVlUTC8vdkhlczN2cjlUOTk5K3NQc0lpekxzaXpMc25xd1J0Wldmc2N6cTVVL25UWmo3eGhacTh5bk02MWZuelpoLzNmeUg1TDMyNmdDTU1UTklkK1hBdmhVMWJDMFZkV3d0blRoMEwzRkwwMTlHejdybWNmdi9EaTdBTXV5TE11eXJBRmIwKythL3ZERDY4dC84TkJhNVF2VHI5UFJRRE9lR2xXZkhxMVZmczRtRjRDOWJneVp3b1dmU2I5K2R3b2F2bWxrZGVtclJ0Y1dKOUlJN1QvL2p0V3YvdjAzYnR6NFVGZHp5N0lzeTdLc2ZiUmlGT25vNXNwbkhycFgrZUxSOWFVemg5Y3J0OUptOE9XdGNhVFZqYUgrRkFCMEhUU2szNzgzQmVFdnArTVRLNlBybFpPSFZtKytaV1R0MlQvNjlOM2JyM00xdGl6THNpekxzbDVkMFo5aTdON3kvNWJPM0g1QlBLRkttOGdiYVZQNXQ5T0c4anZTazZ0L20zNzlIemJhQUFmODZNUmE1Y2Vyb3k3WEtuOG5oUTVma1Jvdkg5bTZidHo4UTNFZGNUVzFMTXV5TE11eVNsMXYzM3oyZHo2enV2aC94cG5kdzJ1THM5Rk1NMjFHVjFObzhYM1YwV2lxS2dDRzEycmx2NlhYOFI5TVFjTkdDcUR2YlBWb1dQcnlrWTJiZnlvbVBzWGtKMWRDeTdJc3k3SXNhNkJXcmFvaXp2dU8zbHM2TkxLMmREbHRibDlNYzl2dnBVM3Q5NlFON245TUc5emZ0T0VINktzUHBOZmduMDIvL2tBNmpuYy8vZnExMGZCNFpIVnhMS29aMHUvLzl6Yy91UEZScm1LV1pWbVdaVm5Xdmx6UmpPeHRtNVhmczFWWmtmcFZyRmFPcDM0Vk44ZWl6SGQ5NlIra0RmS1BwcWR3ditUR0FhQWwveU85anY2N0ZQTCswL1Q3OTZTcWhsc3BDRDZYQW9hM0hsNWQvcHdVREgveTAzZHYvRFpYSDh1eUxNdXlMTXRxc3Q3eTlaYytkdXplelQ5OCtPWEs1NmRnWW5Ua1hxcXVXSys4bEo3bTNVdWI3ZThhalhQS3E1VmZjUk1DN05OK0RGRTk5dE1wV1BpQjlGcjNLUDM2ZGRHVDRmRHE0blI2SGZ3clkrdlAvaDl2ZjNEckUxMHRMTXV5TE11eUxLdmZnVVdhQnZLT2RCemswTWJOUHpleXR2aDBLajgrbFRidlg1MSsvZHRwSS84NGJkeS9Qd1VZUDZuWkpqQWdreVYrTHZuUjVCL0ZpT1gwT3ZWQyt2M2M2TDJiaDFQZytoZEg3NjE4NXNqYXl1OTR5aWhMeTdJc3k3SXN5eHIrbGNxVFAyYmsvc29mR0xsMzgwK2xzWEp2U2pjRjQybEN5RnlVTXFmQTRodlNyNitrQU9OZnhGTkl2U3lBRnYzMzVNZVNmMUt0MkZwZi9odFJ1VEI2cjNJeUhUZjc4aFEyZkY2TXJveHc0ZW03VDMrWVYyTExzaXpMc2l6THN2SXJkWWQvK3U3TlQzcm03dEpuSEZwNzlndEgxNWNPUlFmNXcydkxLeW1rK0x2cGYvK0Q5QlR6WDZZLys1a1VZUHlHbXpIWVY4Y2lmam45Ky80UHlYdlQvOTVNLzhiZlZRMFhWaGVQajd4ODgwc092YnowWjk2eHV2Z3BUOSs5L1RvdmxwWmxXWlpsV1pabDdjbWFTRWRFM3BhYXdoMWFYZjdzUTJ1Vkx4eGRYWDdyNFh0THg2SXpmYnFCdVowbWlIeER1cWw1a0h4Mzh2OVd5N05YSys5MzB3YzlEQlJXbDk1WDdiT3dWdm1SNmxHSXJYSERmeXNGQ3pkSFZwY3VqYXhXamtUVDNGVEo4TG5wMytzZmlSR1ZHanRhbG1WWmxtVlpscldmVjZxNldQcjRlTEk2Y3EveUorSjgrT0Y3aTI5UG9jV0pkR08wRUdmSHEwZEcwaFBaZEVQMWo5UC8vcUY0U3B2K3YxOTBrOGtCNnFtUWpra3QvWHo2L1k5WEd6ZXVMZjNEQ0JSUzc1ZXZTNzlmcVk0SlhsMmVUZ0hEbDhVeGlFTnJTMy9zbWRYSzd6V08wcklzeTdJc3k3SXNxOHlWR3RtTnJkLzRoTEgzcENxTWRPTTFzcmI4aHRHWGwvNXFlc0k3RWtGR0NpNnViamZ0dkpQT3FiOTdhOXJJMHJkdFYyVDh5MnFnc1ZiNWI0NlYwTk94a2x1VlAvOHUrZUhrdTlLZnZaTGNUUUhDMTBmUWxxb1N2aW9xRTZKNjZORGE0ak14RFdMazd0S2ZqWjRLRVNaRVh4Zi8yQzNMc2l6THNpekxzdmJaR252M2pZK01maGhSbWJFVmFpejkyUlJxdlBIUXZhVXZqOUwxNUd4cXdKY3FOQ3JMNlNieWEwZlhLOTlZZlNLOWRWUDVUNnFUU1dJS3dPclNUMjdmZVA2YW0vQWhFNk53VjVmK2EvcmVwWUJxNmY5SnYzNWZIR1ZJLzkvajdSRHJHOUwzL2ErblAxc2F1YmM0bjQ0Y25hNDJlMDFWQ0ZISkV6MFRvcDlLSEU5S2ZSTisrL1M3M3ZYaC9tVlpsbVZabG1WWmxtVlpmVjBqMzdqeTBTTnJOMzdIeVAybDF4L2FySHhhTmVSSUUwdEcxbTYrSVFVYlg1UnVmdCtTbm9SL2VmcnowUlIrVE1YbzFYU2plekhkM0Y1TFRRRy9NbTU2aytkU1k5QTcxUUFrbnFLdlZyNHgzUlMvWit2bU9EVVJqQnZsdGFYdjJEci92L1JQMDgzeVAwdHY1M3ZTbjMxdit2OStJUDMraDlMdmZ5UnVycE4vdlQzZDRNZlQ3Lzk5K3ZXbjBxLy9LYjNOLzVMKys1OU4vLzNQcDkvL1F2cjFsOUt2djVMKzdOZlM3OStYM3RjSGR0KzRMMzBnL3IvcTM2biszZXAvOHd2VnR4RnZLNzNOZU52YjcrUGZiNzNQZU4veE1WUS9saC9aK3RncVB4QWZhM3pNMVk4OVBvY0lBRkl6MUszUExSb2xWb09BOTFTUDZhVGpDTld2UmFwMFNYLzN1VFQ5WlhHcmlXTDZtdDFidkJoZnd4UU1URzFWeGl3K2ZXajE1bHVlZVhueGk2SUhRbnI3ZnpKR1F4NjZXL20wVkhYdytnaWZwaDFmc0N6THNxeWVyZjhmMjdWdjFUanp3SG9BQUFBQVNVVk9SSzVDWUlJPSk7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblxyXG5cdFx0XHRcdC51c2VyQXZhdGFyIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxNTdycHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDIwM3JweDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdFx0XHR0b3A6IDUycnB4O1xyXG5cdFx0XHRcdFx0bGVmdDogNTAlO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogN3JweDtcclxuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuXHRcdFx0XHRcdHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcblxyXG5cdFx0XHRcdFx0YnV0dG9uIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICM1RkFFODk7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aW1hZ2Uge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0dG9wOiA1MCU7XHJcblx0XHRcdFx0XHRsZWZ0OiA1MCU7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHRcdFx0XHRcdHdpZHRoOiAxNTdycHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LmJ0bnMge1xyXG5cdFx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDI4MHJweDtcclxuXHRcdFx0bWFyZ2luOiA2MHJweCBhdXRvO1xyXG5cdFx0XHRib3JkZXI6IDFycHggZGFzaGVkICMwMDA7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0XHRcdGJ1dHRvbiB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdFx0XHRjb2xvcjogaW5oZXJpdDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC51c2VySW5mbyB7XHJcblx0XHRcdG1hcmdpbi10b3A6IDkzcnB4O1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNDdycHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRycHg7XHJcblx0XHRcdGNvbG9yOiAjQUZCNUIzO1xyXG5cclxuXHRcdFx0Jj52aWV3IHtcclxuXHRcdFx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjdycHg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lml0ZW0ge1xyXG5cdFx0XHRcdCY+dmlldyB7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdHRleHRhcmVhe1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIycnB4O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTFycHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjMjU3MDY1O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnVzZXItbmFtZSB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQmPnZpZXcge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHJcblx0XHRcdFx0XHQmPnZpZXcge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdFx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTFycHg7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDE1MHJweDtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMjU3MDY1O1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuaXRlbS1xcSB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHJcblx0XHRcdFx0LnFxLFxyXG5cdFx0XHRcdC53ZWNoYXQge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHJcblx0XHRcdFx0XHQmPnZpZXcge1xyXG5cdFx0XHRcdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjOTNEOEFBO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMXJweDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTUwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMjU3MDY1O1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0XHRcdFx0XHRcdHRleHRhcmVhe1xyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5lbWFpbCB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0XHRcdCY+dmlldyB7XHJcblx0XHRcdFx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzkzRDhBQTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTFycHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjMjU3MDY1O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0XHRcdHRleHRhcmVhe1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQudXNlci1kcmVhbSB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGhlaWdodDogNjZycHg7XHJcblx0XHRcdG1hcmdpbjogNzNycHggNDlycHggMDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuXHRcdFx0Ji1pdGVtIHtcclxuXHRcdFx0XHR3aWR0aDogMTMwcnB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoNDMsIDE5NCwgNzgsIDEpO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDdycHg7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogMHJweCAxMHJweCAxMHJweCByZ2JhKDQzLCAxOTQsIDc4LCAuNSk7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjJycHg7XHJcblx0XHRcdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG5cdFx0XHRcdCY6bnRoLWNoaWxkKDIpIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMTI5LCAyMDcsIDY5LCAxKTtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDBycHggMTBycHggMTBycHggcmdiYSgxMjksIDIwNywgNjksIC41KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCY6bnRoLWNoaWxkKDMpIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoNDMsIDE5NCwgMTg5LCAxKTtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDBycHggMTBycHggMTBycHggcmdiYSg0MywgMTk0LCAxODksIC41KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCY6bnRoLWNoaWxkKDQpIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoNDYsIDE1NiwgMjM5LCAxKTtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDBycHggMTBycHggMTBycHggcmdiYSg0NiwgMTU2LCAyMzksIC41KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

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
eval("/* WEBPACK VAR INJECTION */(function(__f__, wx) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 8));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _myAxios = __webpack_require__(/*! ../../utils/myAxios.js */ 11);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n\n\n{\n  data: function data() {\n    return {\n      tabs: [{\n        name: '人生蓝图一' },\n\n      {\n        name: '人生蓝图2' },\n\n      {\n        name: '人生蓝图3' }],\n\n\n      arr: [{\n        type: '事业' },\n\n      {\n        type: '财富' },\n\n      {\n        type: '家庭生活' },\n\n      {\n        type: '学习成长' },\n\n      {\n        type: '人际关系' },\n\n      {\n        type: '健康计划' }],\n\n\n      array: [{\n        type: '事业' },\n\n      {\n        type: '财富' },\n\n      {\n        type: '家庭生活' },\n\n      {\n        type: '学习成长' },\n\n      {\n        type: '人际关系' },\n\n      {\n        type: '健康计划' }],\n\n\n      cate: [{\n        name: '' },\n\n      {\n        name: '类别' },\n\n      {\n        name: '序号' },\n\n      {\n        name: '目标内容' },\n\n      {\n        name: '方法和措施' },\n\n      {\n        name: '起止时间' },\n\n      {\n        name: '完成打勾' }],\n\n\n      cateList: [{\n        name: '事业(工作)目标',\n        children: [{\n          parentType: '事业(工作)目标',\n          count: 1,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '事业(工作)目标',\n          count: 2,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '事业(工作)目标',\n          count: 3,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '事业(工作)目标',\n          count: 4,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '事业(工作)目标',\n          count: 5,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '事业(工作)目标',\n          count: 6,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '事业(工作)目标',\n          count: 7,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '事业(工作)目标',\n          count: 8,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false }] },\n\n\n\n      {\n        name: '财富目标',\n        children: [{\n          parentType: '财富目标',\n          count: 1,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '财富目标',\n          count: 2,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '财富目标',\n          count: 3,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '财富目标',\n          count: 4,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false }] },\n\n\n\n      {\n        name: '家庭生活',\n        children: [{\n          parentType: '家庭生活',\n          count: 1,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '家庭生活',\n          count: 2,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '家庭生活',\n          count: 3,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '家庭生活',\n          count: 4,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false }] },\n\n\n\n      {\n        name: '学习成长',\n        children: [{\n          parentType: '学习成长',\n          count: 1,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '学习成长',\n          count: 2,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '学习成长',\n          count: 3,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '学习成长',\n          count: 4,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false }] },\n\n\n\n      {\n        name: '人际关系',\n        children: [{\n          parentType: '人际关系',\n          count: 1,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '人际关系',\n          count: 2,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '人际关系',\n          count: 3,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '人际关系',\n          count: 4,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false }] },\n\n\n\n      {\n        name: '健康计划',\n        children: [{\n          parentType: '健康计划',\n          count: 1,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '健康计划',\n          count: 2,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '健康计划',\n          count: 3,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false },\n\n        {\n          parentType: '健康计划',\n          count: 4,\n          type: '',\n          content: '',\n          measures: '',\n          startTime: '',\n          complete: false }] }],\n\n\n\n\n      changeIndex: 0,\n      update: true,\n      completionTime: 3 };\n\n  },\n  methods: {\n    // tab栏切换\n    handleClick: function handleClick(e) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var index;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n\n                index =\n                e.currentTarget.dataset.index;\n                //判断用户点击的是哪一项\n                if (index == 0) {\n                  _this.getUserBlPrint();\n                } else if (index == 1) {\n                  _this.getUserBlPrint2();\n                } else {\n                  _this.viewBlPrint3();\n                }\n                _this.changeIndex = index;case 3:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n\n    // 人生蓝图3是否完成\n    handleComplete: function handleComplete(e) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var data, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                data = e;\n                data.userid = uni.getStorageSync('userID');\n                //已经写有内容的才能标注是否完成\n                __f__(\"log\", Boolean(data.id), \" at pages/blueprint/blueprint.vue:479\");if (!\n                data.id) {_context2.next = 9;break;}\n                data.complete = !data.complete;_context2.next = 7;return (\n                  (0, _myAxios.myAxios)({\n                    url: '/anonymous/updateBlueprintDetailed',\n                    method: 'post',\n                    data: data }));case 7:res = _context2.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this2.viewBlPrint3();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 9:case \"end\":return _context2.stop();}}}, _callee2);}))();\n\n    },\n\n    // 人生蓝图3起止时间更新\n    bindDateChange: function bindDateChange(e, value2) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var value, data, res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                value = e.detail.value;\n                data = value2;\n                data.startTime = value;\n                data.userid = uni.getStorageSync('userID');_context3.next = 6;return (\n                  (0, _myAxios.myAxios)({\n                    url: '/anonymous/updateBlueprintDetailed',\n                    method: 'post',\n                    data: data }));case 6:res = _context3.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this3.viewBlPrint3();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 8:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n\n    // 人生蓝图3方法措施更新\n    handleMeasures: function handleMeasures(e, value2) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var value, data, res;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n                value = e.detail.value;\n                data = value2;\n                data.measures = value;\n                data.userid = uni.getStorageSync('userID');_context4.next = 6;return (\n                  (0, _myAxios.myAxios)({\n                    url: '/anonymous/updateBlueprintDetailed',\n                    method: 'post',\n                    data: data }));case 6:res = _context4.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this4.viewBlPrint3();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 8:case \"end\":return _context4.stop();}}}, _callee4);}))();\n    },\n\n    // 人生蓝图3目标内容更新\n    handleContent: function handleContent(e, value2) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var value, data, res;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n                value = e.detail.value;\n                data = value2;\n                data.content = value;\n                data.userid = uni.getStorageSync('userID');_context5.next = 6;return (\n                  (0, _myAxios.myAxios)({\n                    url: '/anonymous/updateBlueprintDetailed',\n                    method: 'post',\n                    data: data }));case 6:res = _context5.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this5.viewBlPrint3();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 8:case \"end\":return _context5.stop();}}}, _callee5);}))();\n    },\n\n    // 人生蓝图3类别更新\n    handleCate: function handleCate(e, value2) {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var value, data, res;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:\n                value = e.detail.value;\n                data = value2;\n                data.type = value;\n                data.userid = uni.getStorageSync('userID');_context6.next = 6;return (\n                  (0, _myAxios.myAxios)({\n                    url: '/anonymous/updateBlueprintDetailed',\n                    method: 'post',\n                    data: data }));case 6:res = _context6.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this6.viewBlPrint3();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 8:case \"end\":return _context6.stop();}}}, _callee6);}))();\n    },\n\n    // 蓝图2数据更新\n    handleUpdate5: function handleUpdate5(e) {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var index, value, data, res;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:\n                // 从event当中获取参数\n\n                index =\n                e.currentTarget.dataset.index;\n\n                value =\n                e.detail.value;\n                data = {\n                  completionTime: 5,\n                  type: _this7.array[index].type,\n                  content: value,\n                  userid: uni.getStorageSync('userID') };\n\n                if (_this7.array[index].id) {\n                  data.id = _this7.array[index].id;\n                }\n                __f__(\"log\", data, \" at pages/blueprint/blueprint.vue:605\");_context7.next = 7;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateBlueprint',\n                    data: data }));case 7:res = _context7.sent;\n\n                // console.log(res)\n                // 更新成功之后，需要重新获取数据进行页面渲染\n                if (res.data.statusCode == 200) {\n                  _this7.getUserBlPrint2();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    duration: 500,\n                    icon: 'none' });\n\n                }case 9:case \"end\":return _context7.stop();}}}, _callee7);}))();\n    },\n\n    // 蓝图1数据更新\n    handleUpdate3: function handleUpdate3(e) {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var index, value, data, res;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:\n                // 从event当中获取参数\n\n                index =\n                e.currentTarget.dataset.index;\n\n                value =\n                e.detail.value;\n                data = {\n                  completionTime: 3,\n                  type: _this8.arr[index].type,\n                  content: value,\n                  userid: uni.getStorageSync('userID') };\n\n                if (_this8.arr[index].id) {\n                  data.id = _this8.arr[index].id;\n                }\n                __f__(\"log\", data, \" at pages/blueprint/blueprint.vue:642\");_context8.next = 7;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateBlueprint',\n                    data: data }));case 7:res = _context8.sent;\n\n                // console.log(res)\n                // 更新成功之后，需要重新获取数据进行页面渲染\n                if (res.data.statusCode == 200) {\n                  _this8.getUserBlPrint();\n                } else {\n                  uni.showToast({\n                    title: '更新失败,请重试',\n                    duration: 500,\n                    icon: 'none' });\n\n                }case 9:case \"end\":return _context8.stop();}}}, _callee8);}))();\n    },\n\n    // 获取蓝图3的数据内容\n    viewBlPrint3: function viewBlPrint3() {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var res, content, _loop, i;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:\n                _this9.update = false;_context9.next = 3;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/queryBlueprintDetailed',\n                    data: {\n                      userid: wx.getStorageSync('userID') } }));case 3:res = _context9.sent;\n\n\n                // console.log(res);\n                // 更新视图\n                if (res.statusCode === 200 && res.data.result.content) {\n                  content = res.data.result.content;_loop = function _loop(\n                  i) {\n                    content.forEach(function (v) {\n                      if (_this9.cateList[i].name === v.parentType) {\n                        _this9.cateList[i]['children'][v.count - 1] = v;\n                      }\n                    });};for (i = 0; i < _this9.cateList.length; i++) {_loop(i);\n                  }\n                } else {\n                  uni.showToast({\n                    title: '获取蓝图3数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                _this9.update = true;case 6:case \"end\":return _context9.stop();}}}, _callee9);}))();\n    },\n\n    // 获取蓝图2的数据\n    getUserBlPrint2: function getUserBlPrint2() {var _this10 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var data, res, userBluePrint;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:\n                _this10.update = false;\n                data = {\n                  completionTime: 5,\n                  userid: uni.getStorageSync('userID') };_context10.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/queryBlueprint',\n                    data: data }));case 4:res = _context10.sent;\n\n                if (res.data.message == '查询成功' && res.data.result.content) {\n                  userBluePrint = res.data.result.content;\n                  // 创建对象进行数据筛选\n                  userBluePrint.forEach(function (v) {\n                    if (v.type == '事业') {\n                      _this10.array[0] = v;\n                    }\n                    if (v.type == '财富') {\n                      _this10.array[1] = v;\n                    }\n                    if (v.type == '家庭生活') {\n                      _this10.array[2] = v;\n                    }\n                    if (v.type == '学习成长') {\n                      _this10.array[3] = v;\n                    }\n                    if (v.type == '人际关系') {\n                      _this10.array[4] = v;\n                    }\n                    if (v.type == '健康计划') {\n                      _this10.array[5] = v;\n                    }\n                  });\n                  // console.log(this.array)\n                } else {\n                  uni.showToast({\n                    title: '获取人生蓝图2数据失败,请重试',\n                    duration: 500,\n                    icon: 'none' });\n\n                }\n                _this10.update = true;case 7:case \"end\":return _context10.stop();}}}, _callee10);}))();\n    },\n\n    // 进入页面就获取蓝图1的数据\n    getUserBlPrint: function getUserBlPrint() {var _this11 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {var data, res, userBluePrint;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:\n                _this11.update = false;\n                data = {\n                  completionTime: 3,\n                  userid: uni.getStorageSync('userID') };_context11.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/queryBlueprint',\n                    data: data }));case 4:res = _context11.sent;\n\n                if (res.data.message == '查询成功' && res.data.result.content) {\n                  userBluePrint = res.data.result.content;\n                  // 创建对象进行数据筛选\n                  userBluePrint.forEach(function (v) {\n                    if (v.type == '事业') {\n                      _this11.arr[0] = v;\n                    }\n                    if (v.type == '财富') {\n                      _this11.arr[1] = v;\n                    }\n                    if (v.type == '家庭生活') {\n                      _this11.arr[2] = v;\n                    }\n                    if (v.type == '学习成长') {\n                      _this11.arr[3] = v;\n                    }\n                    if (v.type == '人际关系') {\n                      _this11.arr[4] = v;\n                    }\n                    if (v.type == '健康计划') {\n                      _this11.arr[5] = v;\n                    }\n                  });\n\n                } else {\n                  uni.showToast({\n                    title: '获取人生蓝图1数据失败,请重试',\n                    duration: 500,\n                    icon: 'none' });\n\n                }\n                _this11.update = true;case 7:case \"end\":return _context11.stop();}}}, _callee11);}))();\n    } },\n\n  onLoad: function onLoad() {\n    this.getUserBlPrint();\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"], __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvYmx1ZXByaW50L2JsdWVwcmludC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrR0EscUU7OztBQUdBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTs7QUFHQTtBQUNBLHFCQURBLEVBSEE7O0FBTUE7QUFDQSxxQkFEQSxFQU5BLENBREE7OztBQVdBO0FBQ0Esa0JBREE7O0FBR0E7QUFDQSxrQkFEQSxFQUhBOztBQU1BO0FBQ0Esb0JBREEsRUFOQTs7QUFTQTtBQUNBLG9CQURBLEVBVEE7O0FBWUE7QUFDQSxvQkFEQSxFQVpBOztBQWVBO0FBQ0Esb0JBREEsRUFmQSxDQVhBOzs7QUE4QkE7QUFDQSxrQkFEQTs7QUFHQTtBQUNBLGtCQURBLEVBSEE7O0FBTUE7QUFDQSxvQkFEQSxFQU5BOztBQVNBO0FBQ0Esb0JBREEsRUFUQTs7QUFZQTtBQUNBLG9CQURBLEVBWkE7O0FBZUE7QUFDQSxvQkFEQSxFQWZBLENBOUJBOzs7QUFpREE7QUFDQSxnQkFEQTs7QUFHQTtBQUNBLGtCQURBLEVBSEE7O0FBTUE7QUFDQSxrQkFEQSxFQU5BOztBQVNBO0FBQ0Esb0JBREEsRUFUQTs7QUFZQTtBQUNBLHFCQURBLEVBWkE7O0FBZUE7QUFDQSxvQkFEQSxFQWZBOztBQWtCQTtBQUNBLG9CQURBLEVBbEJBLENBakRBOzs7QUF1RUE7QUFDQSx3QkFEQTtBQUVBO0FBQ0EsZ0NBREE7QUFFQSxrQkFGQTtBQUdBLGtCQUhBO0FBSUEscUJBSkE7QUFLQSxzQkFMQTtBQU1BLHVCQU5BO0FBT0EseUJBUEE7O0FBU0E7QUFDQSxnQ0FEQTtBQUVBLGtCQUZBO0FBR0Esa0JBSEE7QUFJQSxxQkFKQTtBQUtBLHNCQUxBO0FBTUEsdUJBTkE7QUFPQSx5QkFQ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QUZBOztBQU1BO0FBQ0Esa0NBREE7QUFFQSxvREFGQTtBQUdBLDhCQUhBLEdBTkEsU0FNQSxHQU5BOztBQVdBO0FBQ0EsK0JBREEsR0FDQSx1QkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFuQkE7O0FBcUJBLGlCQXhCQSxNQXdCQTtBQUNBO0FBQ0EsNENBREE7QUFFQSxpQ0FGQTtBQUdBLGdDQUhBOztBQUtBO0FBQ0Esc0NBMUNBO0FBMkNBLEtBclVBLEVBbldBOztBQTBxQkEsUUExcUJBLG9CQTBxQkE7QUFDQTtBQUNBLEdBNXFCQSxFIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PCEtLSDpobbpg6h0YWLmoI8gLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImhlYWRcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJiYXJcIj5cclxuXHRcdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIHRhYnNcIiA6a2V5PVwidmFsdWUubmFtZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgQHRhcD1cImhhbmRsZUNsaWNrXCIgOmRhdGEtaW5kZXg9aW5kZXggY2xhc3M9XCJ0YWJcIiA6Y2xhc3M9XCIgY2hhbmdlSW5kZXg9PWluZGV4PyAnb24nOicnXCI+XHJcblx0XHRcdFx0XHRcdHt7dmFsdWUubmFtZX19XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDwhLS0g6KGo5qC86YOo5YiGLS3kurrnlJ/ok53lm74xIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0YWJsZVwiIHYtaWY9XCJjaGFuZ2VJbmRleD09MFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhYmxlLXRoZWFkXCI+XHJcblx0XHRcdFx0PHRleHQ+57G75YirPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0Pui/keacn+ebruaghygxfjPlubTlhoUpPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDxibG9jayB2LWZvcj1cIih2YWx1ZSxpbmRleCkgaW4gYXJyXCIgOmtleT1cInZhbHVlLnR5cGVcIiB2LWlmPVwidXBkYXRlXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0clwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZDFcIj57e3ZhbHVlLnR5cGV9fTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGQyXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBAYmx1cj1cImhhbmRsZVVwZGF0ZTNcIiA6ZGF0YS1pbmRleD1pbmRleCBtYXhsZW5ndGg9XCItMVwiIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9ibG9jaz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8IS0tIOihqOagvOmDqOWIhi0t5Lq655Sf6JOd5Zu+MiAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidGFibGVcIiB2LWVsc2UtaWY9XCJjaGFuZ2VJbmRleD09MVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhYmxlLXRoZWFkXCI+XHJcblx0XHRcdFx0PHRleHQ+57G75YirPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0Pui/keacn+ebruaghyg15bm05YaFKTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIGFycmF5XCIgOmtleT1cInZhbHVlLnR5cGVcIiB2LWlmPVwidXBkYXRlXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0clwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZDFcIj57e3ZhbHVlLnR5cGV9fTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGQyXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBAYmx1cj1cImhhbmRsZVVwZGF0ZTVcIiA6ZGF0YS1pbmRleD1pbmRleCBtYXhsZW5ndGg9XCItMVwiIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9ibG9jaz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8IS0tIOihqOagvOmDqOWIhi0t5Lq655Sf6JOd5Zu+MyAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidGFibGVcIiB2LWVsc2UtaWY9XCJjaGFuZ2VJbmRleD09MlwiPlxyXG5cdFx0XHQ8IS0tIOmhtumDqOmDqOWIhiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZS1oZWFkXCI+XHJcblx0XHRcdFx0PGJsb2NrIHYtZm9yPVwiKHZhbHVlLGluZGV4KSBpbiBjYXRlXCIgOmtleT1cInZhbHVlLm5hbWVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+e3t2YWx1ZS5uYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PCEtLSDlhoXlrrnpg6jliIYgLS0+XHJcblx0XHRcdDxibG9jayB2LWZvcj1cIih2YWx1ZSxpbmRleCkgaW4gY2F0ZUxpc3RcIiA6a2V5PVwidmFsdWUubmFtZVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50LWxlZnRcIj57e3ZhbHVlLm5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGFpblwiPlxyXG5cdFx0XHRcdFx0XHQ8YmxvY2sgdi1pZj1cInVwZGF0ZVwiIHYtZm9yPVwiKHZhbHVlMixpbmRleDIpIGluIHZhbHVlLmNoaWxkcmVuXCIgOmtleT1cInZhbHVlMi5jb3VudFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSDnsbvliKsgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgQGJsdXI9XCJoYW5kbGVDYXRlKCRldmVudCx2YWx1ZTIpXCIgOnZhbHVlPVwidmFsdWUyLnR5cGVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSDluo/lj7cgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldz57e3ZhbHVlMi5jb3VudH19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSDnm67moIflhoXlrrkgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdCAgPHRleHRhcmVhIEBibHVyPVwiaGFuZGxlQ29udGVudCgkZXZlbnQsdmFsdWUyKVwiIDp2YWx1ZT1cInZhbHVlMi5jb250ZW50XCI+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0g5pa55rOV5o6q5pa9IC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBAYmx1cj1cImhhbmRsZU1lYXN1cmVzKCRldmVudCx2YWx1ZTIpXCIgOnZhbHVlPVwidmFsdWUyLm1lYXN1cmVzXCI+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0g6YCJ5oup5pe26Ze0IC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQgPHBpY2tlciBtb2RlPVwiZGF0ZVwiIDp2YWx1ZT1cInZhbHVlMi5zdGFydFRpbWVcIiBAY2hhbmdlPVwiYmluZERhdGVDaGFuZ2UoJGV2ZW50LHZhbHVlMilcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBpY2tlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJvcGFjaXR5OjBcIj7pgInmi6nml7bpl7Q8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dD57e3ZhbHVlMi5zdGFydFRpbWU9PW51bGw/Jyc6dmFsdWUyLnN0YXJ0VGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9waWNrZXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIOWujOaIkOaJk+WLviAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IDpjbGFzcz1cInZhbHVlMi5jb21wbGV0ZT09dHJ1ZT8naWNvbmZvbnQgaWNvbi16aGVuZ3F1ZSc6JydcIiBAdGFwPVwiaGFuZGxlQ29tcGxldGUodmFsdWUyKVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L2Jsb2NrPlxyXG5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge1xyXG5cdFx0bXlBeGlvc1xyXG5cdH0gZnJvbSAnLi4vLi4vdXRpbHMvbXlBeGlvcy5qcydcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRhYnM6IFt7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfkurrnlJ/ok53lm77kuIAnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5Lq655Sf6JOd5Zu+MidcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfkurrnlJ/ok53lm74zJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGFycjogW3tcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+S6i+S4midcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICfotKLlr4wnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5a625bqt55Sf5rS7J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+WtpuS5oOaIkOmVvydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICfkurrpmYXlhbPns7snXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5YGl5bq36K6h5YiSJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0YXJyYXk6IFt7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICfkuovkuJonXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAn6LSi5a+MJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+WutuW6reeUn+a0uydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICflrabkuaDmiJDplb8nXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5Lq66ZmF5YWz57O7J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+WBpeW6t+iuoeWIkidcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGNhdGU6IFt7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICcnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn57G75YirJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+W6j+WPtydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfnm67moIflhoXlrrknXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5pa55rOV5ZKM5o6q5pa9J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+i1t+atouaXtumXtCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICflrozmiJDmiZPli74nXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0Y2F0ZUxpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICfkuovkuJoo5bel5L2cKeebruaghycsXHJcblx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbe1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+S6i+S4mijlt6XkvZwp55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICfkuovkuJoo5bel5L2cKeebruaghycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogMixcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn5LqL5LiaKOW3peS9nCnnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDMsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+S6i+S4mijlt6XkvZwp55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiA0LFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICfkuovkuJoo5bel5L2cKeebruaghycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogNSxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn5LqL5LiaKOW3peS9nCnnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDYsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+S6i+S4mijlt6XkvZwp55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiA3LFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICfkuovkuJoo5bel5L2cKeebruaghycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogOCxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn6LSi5a+M55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IFt7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn6LSi5a+M55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICfotKLlr4znm67moIcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDIsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+i0ouWvjOebruaghycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogMyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn6LSi5a+M55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiA0LFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICflrrbluq3nlJ/mtLsnLFxyXG5cdFx0XHRcdFx0XHRjaGlsZHJlbjogW3tcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICflrrbluq3nlJ/mtLsnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDEsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+WutuW6reeUn+a0uycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogMixcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn5a625bqt55Sf5rS7JyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiAzLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICflrrbluq3nlJ/mtLsnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDQsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WtpuS5oOaIkOmVvycsXHJcblx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbe1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+WtpuS5oOaIkOmVvycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogMSxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn5a2m5Lmg5oiQ6ZW/JyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiAyLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICflrabkuaDmiJDplb8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDMsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+WtpuS5oOaIkOmVvycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogNCxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5Lq66ZmF5YWz57O7JyxcclxuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IFt7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn5Lq66ZmF5YWz57O7JyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICfkurrpmYXlhbPns7snLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDIsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+S6uumZheWFs+ezuycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogMyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn5Lq66ZmF5YWz57O7JyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiA0LFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICflgaXlurforqHliJInLFxyXG5cdFx0XHRcdFx0XHRjaGlsZHJlbjogW3tcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICflgaXlurforqHliJInLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDEsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50VHlwZTogJ+WBpeW6t+iuoeWIkicsXHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudDogMixcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRtZWFzdXJlczogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydFRpbWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRUeXBlOiAn5YGl5bq36K6h5YiSJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50OiAzLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lYXN1cmVzOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VGltZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudFR5cGU6ICflgaXlurforqHliJInLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnQ6IDQsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVhc3VyZXM6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRUaW1lOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGNoYW5nZUluZGV4OiAwLFxyXG5cdFx0XHRcdHVwZGF0ZTogdHJ1ZSxcclxuXHRcdFx0XHRjb21wbGV0aW9uVGltZTogM1xyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8gdGFi5qCP5YiH5o2iXHJcblx0XHRcdGFzeW5jIGhhbmRsZUNsaWNrKGUpIHtcclxuXHRcdFx0XHRsZXQge1xyXG5cdFx0XHRcdFx0aW5kZXhcclxuXHRcdFx0XHR9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuXHRcdFx0XHQvL+WIpOaWreeUqOaIt+eCueWHu+eahOaYr+WTquS4gOmhuVxyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLmdldFVzZXJCbFByaW50KClcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDEpIHtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0VXNlckJsUHJpbnQyKClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy52aWV3QmxQcmludDMoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmNoYW5nZUluZGV4ID0gaW5kZXhcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOS6uueUn+iTneWbvjPmmK/lkKblrozmiJBcclxuXHRcdFx0YXN5bmMgaGFuZGxlQ29tcGxldGUoZSl7XHJcblx0XHRcdFx0bGV0IGRhdGE9ZVxyXG5cdFx0XHRcdGRhdGEudXNlcmlkPXVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyk7XHJcblx0XHRcdFx0Ly/lt7Lnu4/lhpnmnInlhoXlrrnnmoTmiY3og73moIfms6jmmK/lkKblrozmiJBcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhCb29sZWFuKGRhdGEuaWQpKVxyXG5cdFx0XHRcdGlmKGRhdGEuaWQpe1xyXG5cdFx0XHRcdFx0ZGF0YS5jb21wbGV0ZT0hZGF0YS5jb21wbGV0ZVxyXG5cdFx0XHRcdFx0bGV0IHJlcz1hd2FpdCBcdG15QXhpb3Moe1xyXG5cdFx0XHRcdFx0XHR1cmw6Jy9hbm9ueW1vdXMvdXBkYXRlQmx1ZXByaW50RGV0YWlsZWQnLFxyXG5cdFx0XHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHRcdFx0dGhpcy52aWV3QmxQcmludDMoKVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOifmm7TmlrDmlbDmja7lpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDkurrnlJ/ok53lm74z6LW35q2i5pe26Ze05pu05pawXHJcblx0XHRcdGFzeW5jIGJpbmREYXRlQ2hhbmdlKGUsdmFsdWUyKXtcclxuXHRcdFx0XHRsZXQge3ZhbHVlfT1lLmRldGFpbFxyXG5cdFx0XHRcdGxldCBkYXRhPXZhbHVlMlxyXG5cdFx0XHRcdGRhdGEuc3RhcnRUaW1lPXZhbHVlXHJcblx0XHRcdFx0ZGF0YS51c2VyaWQ9dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKTtcclxuXHRcdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3VwZGF0ZUJsdWVwcmludERldGFpbGVkJyxcclxuXHRcdFx0XHRcdG1ldGhvZDoncG9zdCcsXHJcblx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG5cdFx0XHRcdFx0dGhpcy52aWV3QmxQcmludDMoKVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifmm7TmlrDmlbDmja7lpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDkurrnlJ/ok53lm74z5pa55rOV5o6q5pa95pu05pawXHJcblx0XHRcdGFzeW5jIGhhbmRsZU1lYXN1cmVzKGUsdmFsdWUyKXtcclxuXHRcdFx0XHRsZXQge3ZhbHVlfT1lLmRldGFpbFxyXG5cdFx0XHRcdGxldCBkYXRhPXZhbHVlMlxyXG5cdFx0XHRcdGRhdGEubWVhc3VyZXM9dmFsdWVcclxuXHRcdFx0XHRkYXRhLnVzZXJpZD11bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpO1xyXG5cdFx0XHRcdGxldCByZXM9YXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHR1cmw6Jy9hbm9ueW1vdXMvdXBkYXRlQmx1ZXByaW50RGV0YWlsZWQnLFxyXG5cdFx0XHRcdFx0bWV0aG9kOidwb3N0JyxcclxuXHRcdFx0XHRcdGRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0XHR0aGlzLnZpZXdCbFByaW50MygpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOS6uueUn+iTneWbvjPnm67moIflhoXlrrnmm7TmlrBcclxuXHRcdFx0YXN5bmMgaGFuZGxlQ29udGVudChlLHZhbHVlMil7XHJcblx0XHRcdFx0bGV0IHt2YWx1ZX09ZS5kZXRhaWxcclxuXHRcdFx0XHRsZXQgZGF0YSA9dmFsdWUyXHJcblx0XHRcdFx0ZGF0YS5jb250ZW50PXZhbHVlXHJcblx0XHRcdFx0ZGF0YS51c2VyaWQ9dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKTtcclxuXHRcdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xuXHRcdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVCbHVlcHJpbnREZXRhaWxlZCcsXG5cdFx0XHRcdFx0bWV0aG9kOidwb3N0Jyxcblx0XHRcdFx0XHRkYXRhXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHRcdHRoaXMudmlld0JsUHJpbnQzKClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+abtOaWsOaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDkurrnlJ/ok53lm74z57G75Yir5pu05pawXHJcblx0XHRcdGFzeW5jIGhhbmRsZUNhdGUoZSx2YWx1ZTIpe1xyXG5cdFx0XHRcdGxldCB7dmFsdWV9PWUuZGV0YWlsXHJcblx0XHRcdFx0bGV0IGRhdGEgPXZhbHVlMlxyXG5cdFx0XHRcdGRhdGEudHlwZT12YWx1ZVxyXG5cdFx0XHRcdGRhdGEudXNlcmlkPXVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyk7XHJcblx0XHRcdFx0bGV0IHJlcz0gYXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHR1cmw6Jy9hbm9ueW1vdXMvdXBkYXRlQmx1ZXByaW50RGV0YWlsZWQnLFxyXG5cdFx0XHRcdFx0bWV0aG9kOidwb3N0JyxcclxuXHRcdFx0XHRcdGRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0XHR0aGlzLnZpZXdCbFByaW50MygpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmm7TmlrDmlbDmja7lpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g6JOd5Zu+MuaVsOaNruabtOaWsFxyXG5cdFx0XHRhc3luYyBoYW5kbGVVcGRhdGU1KGUpIHtcclxuXHRcdFx0XHQvLyDku45ldmVudOW9k+S4reiOt+WPluWPguaVsFxyXG5cdFx0XHRcdGxldCB7XHJcblx0XHRcdFx0XHRpbmRleFxyXG5cdFx0XHRcdH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG5cdFx0XHRcdGxldCB7XHJcblx0XHRcdFx0XHR2YWx1ZVxyXG5cdFx0XHRcdH0gPSBlLmRldGFpbFxyXG5cdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0Y29tcGxldGlvblRpbWU6IDUsXHJcblx0XHRcdFx0XHR0eXBlOiB0aGlzLmFycmF5W2luZGV4XS50eXBlLFxyXG5cdFx0XHRcdFx0Y29udGVudDogdmFsdWUsXHJcblx0XHRcdFx0XHR1c2VyaWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuYXJyYXlbaW5kZXhdLmlkKSB7XHJcblx0XHRcdFx0XHRkYXRhLmlkID0gdGhpcy5hcnJheVtpbmRleF0uaWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvdXBkYXRlQmx1ZXByaW50JyxcclxuXHRcdFx0XHRcdGRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHQvLyDmm7TmlrDmiJDlip/kuYvlkI7vvIzpnIDopoHph43mlrDojrflj5bmlbDmja7ov5vooYzpobXpnaLmuLLmn5NcclxuXHRcdFx0XHRpZiAocmVzLmRhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0VXNlckJsUHJpbnQyKClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pu05paw5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiA1MDAsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDok53lm74x5pWw5o2u5pu05pawXHJcblx0XHRcdGFzeW5jIGhhbmRsZVVwZGF0ZTMoZSkge1xyXG5cdFx0XHRcdC8vIOS7jmV2ZW505b2T5Lit6I635Y+W5Y+C5pWwXHJcblx0XHRcdFx0bGV0IHtcclxuXHRcdFx0XHRcdGluZGV4XHJcblx0XHRcdFx0fSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcblx0XHRcdFx0bGV0IHtcclxuXHRcdFx0XHRcdHZhbHVlXHJcblx0XHRcdFx0fSA9IGUuZGV0YWlsXHJcblx0XHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHRjb21wbGV0aW9uVGltZTogMyxcclxuXHRcdFx0XHRcdHR5cGU6IHRoaXMuYXJyW2luZGV4XS50eXBlLFxyXG5cdFx0XHRcdFx0Y29udGVudDogdmFsdWUsXHJcblx0XHRcdFx0XHR1c2VyaWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuYXJyW2luZGV4XS5pZCkge1xyXG5cdFx0XHRcdFx0ZGF0YS5pZCA9IHRoaXMuYXJyW2luZGV4XS5pZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0XHRcdGxldCByZXMgPSBhd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsOiAnL2Fub255bW91cy91cGRhdGVCbHVlcHJpbnQnLFxyXG5cdFx0XHRcdFx0ZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdC8vIOabtOaWsOaIkOWKn+S5i+WQju+8jOmcgOimgemHjeaWsOiOt+WPluaVsOaNrui/m+ihjOmhtemdoua4suafk1xyXG5cdFx0XHRcdGlmIChyZXMuZGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0dGhpcy5nZXRVc2VyQmxQcmludCgpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+abtOaWsOWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogNTAwLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g6I635Y+W6JOd5Zu+M+eahOaVsOaNruWGheWuuVxyXG5cdFx0XHRhc3luYyB2aWV3QmxQcmludDMoKXtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZT1mYWxzZVxyXG5cdFx0XHRcdGxldCByZXM9YXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3F1ZXJ5Qmx1ZXByaW50RGV0YWlsZWQnLFxyXG5cdFx0XHRcdFx0ZGF0YTp7XHJcblx0XHRcdFx0XHRcdHVzZXJpZDp3eC5nZXRTdG9yYWdlU3luYygndXNlcklEJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0Ly8g5pu05paw6KeG5Zu+XHJcblx0XHRcdFx0aWYocmVzLnN0YXR1c0NvZGU9PT0yMDAmJnJlcy5kYXRhLnJlc3VsdC5jb250ZW50KXtcclxuXHRcdFx0XHRcdGxldCB7Y29udGVudH09cmVzLmRhdGEucmVzdWx0XHJcblx0XHRcdFx0XHRmb3IobGV0IGk9MDtpPHRoaXMuY2F0ZUxpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQuZm9yRWFjaCh2PT57XHJcblx0XHRcdFx0XHRcdFx0aWYodGhpcy5jYXRlTGlzdFtpXS5uYW1lPT09di5wYXJlbnRUeXBlKXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY2F0ZUxpc3RbaV1bJ2NoaWxkcmVuJ11bdi5jb3VudC0xXT12XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifojrflj5bok53lm74z5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlPXRydWVcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vIOiOt+WPluiTneWbvjLnmoTmlbDmja5cclxuXHRcdFx0YXN5bmMgZ2V0VXNlckJsUHJpbnQyKCkge1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlID0gZmFsc2VcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdGNvbXBsZXRpb25UaW1lOiA1LFxyXG5cdFx0XHRcdFx0dXNlcmlkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCByZXMgPSBhd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsOiAnL2Fub255bW91cy9xdWVyeUJsdWVwcmludCcsXHJcblx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZiAocmVzLmRhdGEubWVzc2FnZSA9PSAn5p+l6K+i5oiQ5YqfJyAmJiByZXMuZGF0YS5yZXN1bHQuY29udGVudCkge1xyXG5cdFx0XHRcdFx0bGV0IHVzZXJCbHVlUHJpbnQgPSByZXMuZGF0YS5yZXN1bHQuY29udGVudFxyXG5cdFx0XHRcdFx0Ly8g5Yib5bu65a+56LGh6L+b6KGM5pWw5o2u562b6YCJXHJcblx0XHRcdFx0XHR1c2VyQmx1ZVByaW50LmZvckVhY2godiA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+S6i+S4micpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFycmF5WzBdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+i0ouWvjCcpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFycmF5WzFdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+WutuW6reeUn+a0uycpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFycmF5WzJdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+WtpuS5oOaIkOmVvycpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFycmF5WzNdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+S6uumZheWFs+ezuycpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFycmF5WzRdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+WBpeW6t+iuoeWIkicpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFycmF5WzVdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5hcnJheSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6I635Y+W5Lq655Sf6JOd5Zu+MuaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogNTAwLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlID0gdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g6L+b5YWl6aG16Z2i5bCx6I635Y+W6JOd5Zu+MeeahOaVsOaNrlxyXG5cdFx0XHRhc3luYyBnZXRVc2VyQmxQcmludCgpIHtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZSA9IGZhbHNlXHJcblx0XHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHRjb21wbGV0aW9uVGltZTogMyxcclxuXHRcdFx0XHRcdHVzZXJpZDogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvcXVlcnlCbHVlcHJpbnQnLFxyXG5cdFx0XHRcdFx0ZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT0gJ+afpeivouaIkOWKnycgJiYgcmVzLmRhdGEucmVzdWx0LmNvbnRlbnQpIHtcclxuXHRcdFx0XHRcdGxldCB1c2VyQmx1ZVByaW50ID0gcmVzLmRhdGEucmVzdWx0LmNvbnRlbnRcclxuXHRcdFx0XHRcdC8vIOWIm+W7uuWvueixoei/m+ihjOaVsOaNruetm+mAiVxyXG5cdFx0XHRcdFx0dXNlckJsdWVQcmludC5mb3JFYWNoKHYgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAodi50eXBlID09ICfkuovkuJonKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hcnJbMF0gPSB2XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHYudHlwZSA9PSAn6LSi5a+MJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYXJyWzFdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+WutuW6reeUn+a0uycpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFyclsyXSA9IHZcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAodi50eXBlID09ICflrabkuaDmiJDplb8nKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hcnJbM10gPSB2XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHYudHlwZSA9PSAn5Lq66ZmF5YWz57O7Jykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYXJyWzRdID0gdlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+WBpeW6t+iuoeWIkicpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFycls1XSA9IHZcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+iOt+WPluS6uueUn+iTneWbvjHmlbDmja7lpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDUwMCxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnVwZGF0ZSA9IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dGhpcy5nZXRVc2VyQmxQcmludCgpXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxyXG5cdHBhZ2Uge1xyXG5cdFx0YmFja2dyb3VuZDogI0VGRjNGNjtcclxuXHR9XHJcblxyXG5cdC5oZWFkIHtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRoZWlnaHQ6IDUwcnB4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdHBhZGRpbmc6IDdycHg7XHJcblx0fVxyXG5cclxuXHQudGFiYmFyIHtcclxuXHRcdG1hcmdpbjogYXV0bztcclxuXHRcdHdpZHRoOiAzNzhycHg7XHJcblx0XHRoZWlnaHQ6IDM2cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXJweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG5cdFx0LnRhYiB7XHJcblx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTVycHg7XHJcblx0XHRcdGNvbG9yOiAjNDA0MDQwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5vbiB7XHJcblx0XHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDQ2LCAyMDYsIDE0OCwgMSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQudGFibGUge1xyXG5cdFx0Ym9yZGVyOiAxcnB4IHNvbGlkICMxQzVFNTU7XHJcblx0XHRtYXJnaW46IDAgMTRycHg7XHJcblx0XHRjb2xvcjogIzIxOWQ5YztcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG5cdFx0Ji10aGVhZCB7XHJcblx0XHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICMyMjcwNUQ7XHJcblxyXG5cdFx0XHR0ZXh0IHtcclxuXHRcdFx0XHR3aWR0aDogNzJycHg7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFycHggc29saWQgIzFDNUU1NTtcclxuXHRcdFx0XHRib3JkZXItbGVmdDogMXJweCBzb2xpZCAjMUM1RTU1O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTNycHg7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG5cdFx0XHRcdCY6bnRoLWNoaWxkKDIpIHtcclxuXHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LnRpdGxlLWhlYWQge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cclxuXHRcdFx0Jj52aWV3IHtcclxuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFycHggc29saWQgIzFDNUU1NTtcclxuXHRcdFx0XHRib3JkZXItbGVmdDogMXJweCBzb2xpZCAjMUM1RTU1O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICMyMjcwNUQ7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTNycHg7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG5cdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDcycnB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDBycHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmOm50aC1jaGlsZCgyKSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNzJycHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmOm50aC1jaGlsZCgzKSB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzZycHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmOm50aC1jaGlsZCg0KSB7XHJcblx0XHRcdFx0XHR3aWR0aDogMjEwcnB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JjpudGgtY2hpbGQoNSkge1xyXG5cdFx0XHRcdFx0ZmxleDogMTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCY6bnRoLWNoaWxkKDYpIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA4NnJweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzZycHg7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250ZW50IHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHJcblx0XHRcdCYtbGVmdCB7XHJcblx0XHRcdFx0d2lkdGg6IDcycnB4O1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFycHggc29saWQgIzFDNUU1NTtcclxuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdGJvcmRlci10b3A6IDBycHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogIzIyNzA1RDtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxM3JweDtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHR3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG5cclxuXHRcdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMHJweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5jb250YWluIHtcclxuXHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiAxcnB4IHNvbGlkICMxQzVFNTU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCYtcmlnaHQge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRcdFx0Jj52aWV3IHtcclxuXHRcdFx0XHRcdGJvcmRlcjogMXJweCBzb2xpZCAjMUM1RTU1O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDBycHg7XHJcblx0XHRcdFx0XHRib3JkZXItdG9wOiAwcnB4O1xyXG5cdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcblx0XHRcdFx0XHRpbnB1dCxcclxuXHRcdFx0XHRcdHRleHRhcmVhIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogNzJycHg7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1sZWZ0OiAwcnB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCY6bnRoLWNoaWxkKDIpIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDM2cnB4O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQmOm50aC1jaGlsZCgzKSB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAyMTBycHg7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0JjpudGgtY2hpbGQoNCkge1xyXG5cdFx0XHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAzNnJweDtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0JjpudGgtY2hpbGQoNSkge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogODZycHg7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdFx0XHRcdFx0cGlja2VyIHtcclxuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiA5OTtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR0ZXh0IHtcclxuXHRcdFx0XHRcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQudHIge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRoZWlnaHQ6IDE0MXJweDtcclxuXHJcblx0XHRcdC50ZDEge1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0d2lkdGg6IDcycnB4O1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFycHggc29saWQgIzFDNUU1NTtcclxuXHRcdFx0XHRib3JkZXItbGVmdDogMXJweCBzb2xpZCAjMUM1RTU1O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogIzIyNzA1RDtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRmb250LXNpemU6IDEzcnB4O1xyXG5cclxuXHRcdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMHJweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC50ZDIge1xyXG5cdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjMUM1RTU1O1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiAxcnB4IHNvbGlkICMxQzVFNTU7XHJcblxyXG5cdFx0XHRcdHRleHRhcmVhIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHQudGQyIHtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDBycHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 8));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _myAxios = __webpack_require__(/*! ../../utils/myAxios.js */ 11);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  data: function data() {\n    return {\n      weekDays: ['周', '天'],\n      weekPerformance: [{\n        content: '',\n        type: '目标完成情况' },\n\n      {\n        content: '',\n        type: '目标完成情况' },\n\n      {\n        content: '',\n        type: '目标完成情况' },\n\n      {\n        content: '',\n        type: '目标完成情况' },\n\n      {\n        content: '',\n        type: '目标完成情况' },\n\n      {\n        content: '',\n        type: '目标完成情况' }],\n\n\n      reason: [{\n        content: '',\n        type: '未完成目标的原因及障碍' },\n\n      {\n        content: '',\n        type: '未完成目标的原因及障碍' },\n\n      {\n        content: '',\n        type: '未完成目标的原因及障碍' }],\n\n\n      service: [{\n        content: '',\n        type: '克服障碍的对策和方法' },\n\n      {\n        content: '',\n        type: '克服障碍的对策和方法' },\n\n      {\n        content: '',\n        type: '克服障碍的对策和方法' }],\n\n\n      harvest: [{\n        content: '',\n        type: '本周创新与收获' },\n\n      {\n        content: '',\n        type: '本周创新与收获' },\n\n      {\n        content: '',\n        type: '本周创新与收获' }],\n\n\n      weeklyPlan: [{\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false },\n\n      {\n        content: '',\n        type: '本周目标',\n        complete: false }],\n\n\n      otherPlan: [{\n        type: '学习计划',\n        content: '',\n        complete: false },\n\n      {\n        type: '健康计划',\n        content: '',\n        complete: false },\n\n      {\n        type: '本周反省',\n        content: '',\n        complete: false }],\n\n\n      shareArray: [\n      {\n        type: '1',\n        content: '' },\n\n      {\n        type: '2',\n        content: '' },\n\n      {\n        type: '3',\n        content: '' }],\n\n\n      weekDate: [\n      {\n        name: '周一',\n        type: 1 },\n      {\n        name: '周二',\n        type: 2 },\n      {\n        name: '周三',\n        type: 3 },\n      {\n        name: '周四',\n        type: 4 },\n      {\n        name: '周五',\n        type: 5 },\n      {\n        name: '周六',\n        type: 6 },\n      {\n        name: '周日',\n        type: 7 }],\n\n\n      todayThings: [\n      {\n        index: 1,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 2,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 3,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 4,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 5,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 6,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 7,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 8,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 9,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 10,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 11,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 12,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 13,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 14,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 15,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 16,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n\n      {\n        index: 17,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' },\n      {\n        index: 17,\n        complete: false,\n        time: '',\n        parentType: '今日事项',\n        type: '',\n        content: '' }],\n\n\n      todaySummary: [\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' },\n\n      {\n        parentType: '今日总结',\n        content: '' }],\n\n\n\n      week: 0,\n      year: new Date().getFullYear(),\n      month: 0,\n      days: 0,\n      time: new Date().getTime(),\n      update: true,\n      update1: true,\n      update2: true,\n      update3: true,\n      changeIndex: 0,\n      whichDay: 1 };\n\n  },\n  methods: {\n\n    // 选择时间\n    handleChangeTime: function handleChangeTime(e) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var date;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                date = new Date(e.detail.value);\n                _this.month = date.getMonth() + 1;\n                _this.year = date.getFullYear();\n                _this.days = date.getDate();\n                _this.time = date.getTime();\n                _this.getDateNow();\n                _this.getWeek();\n                _this.getDayPlan();case 8:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n\n    // 切换周--天\n    handleChangeTab: function handleChangeTab(index) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                _this2.changeIndex = index;\n                if (index == 0) {\n                  _this2.getWeeklyTarget();\n                  _this2.getWeeklySummary();\n                  _this2.getSharePlan();\n                } else {\n                  _this2.getDateNow();\n                  _this2.getDayPlan();\n                }case 2:case \"end\":return _context2.stop();}}}, _callee2);}))();\n    },\n\n    // 切换周几\n    handleChoseDate: function handleChoseDate(index) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                if (index - _this3.whichDay > 0) {\n                  _this3.time = _this3.time + 24 * 60 * 60 * 1000 * Math.abs(index - _this3.whichDay);\n                } else if (index - _this3.whichDay < 0) {\n                  _this3.time = _this3.time - 24 * 60 * 60 * 1000 * Math.abs(index - _this3.whichDay);\n                }\n                _this3.whichDay = index;\n                _this3.getDateNow();\n                // 同时重新获取数据\n                _this3.getDayPlan();case 4:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n\n    // 获取时间\n    getDateNow: function getDateNow() {\n      __f__(\"log\", this.time, \" at pages/weekgoals/weekgoals.vue:688\");\n      var date = new Date(this.time);\n      var year = date.getFullYear();\n      var month = date.getMonth() + 1;\n      var days = date.getDate();\n      var whichDay = date.getDay();\n      whichDay = whichDay === 0 ? 7 : whichDay;\n      this.year = year;\n      this.month = month;\n      this.days = days;\n      this.whichDay = whichDay;\n    },\n    /****************************************************天-部分数据***********************************************/\n    // 更新日总结改进\n    handleUpdateSummary: function handleUpdateSummary(e, value2) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var value, data, res;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  content: value,\n                  parentType: value2.parentType,\n                  userId: uni.getStorageSync('userID'),\n                  week: +_this4.week,\n                  year: +_this4.year,\n                  whichDay: +_this4.whichDay };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context4.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateDayPlan',\n                    data: data }));case 5:res = _context4.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this4.getDayPlan();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context4.stop();}}}, _callee4);}))();\n    },\n\n    // 更新日目标完成状态\n    handleComplete2: function handleComplete2(value) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var data, res;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n                data = {\n                  complete: !value.complete,\n                  content: value.content,\n                  parentType: value.parentType,\n                  type: value.type,\n                  time: value.time,\n                  userId: uni.getStorageSync('userID'),\n                  week: +_this5.week,\n                  year: +_this5.year,\n                  whichDay: +_this5.whichDay };if (!\n\n                value.id) {_context5.next = 8;break;}\n                data.id = value.id;_context5.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateDayPlan',\n                    data: data }));case 5:res = _context5.sent;\n\n                __f__(\"log\", res, \" at pages/weekgoals/weekgoals.vue:751\");\n                if (res.data.statusCode == 200) {\n                  _this5.getDayPlan();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 8:case \"end\":return _context5.stop();}}}, _callee5);}))();\n\n    },\n\n    // 更新日内容\n    handleUpdateContent: function handleUpdateContent(e, value2) {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var value, data, res;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value,\n                  parentType: value2.parentType,\n                  type: value2.type,\n                  time: value2.time,\n                  userId: uni.getStorageSync('userID'),\n                  week: +_this6.week,\n                  year: +_this6.year,\n                  whichDay: +_this6.whichDay };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context6.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateDayPlan',\n                    data: data }));case 5:res = _context6.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this6.getDayPlan();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context6.stop();}}}, _callee6);}))();\n    },\n\n    // 日计划选择时间\n    bindDateChange: function bindDateChange(e, value2) {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var value, data, res;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value2.content,\n                  parentType: value2.parentType,\n                  type: value2.type,\n                  time: value,\n                  userId: uni.getStorageSync('userID'),\n                  week: +_this7.week,\n                  year: +_this7.year,\n                  whichDay: +_this7.whichDay };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context7.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateDayPlan',\n                    data: data }));case 5:res = _context7.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this7.getDayPlan();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context7.stop();}}}, _callee7);}))();\n    },\n\n    // 更新日计划分类\n    handleChangeType: function handleChangeType(e, value2) {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var value, data, res;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value2.content,\n                  parentType: value2.parentType,\n                  type: value,\n                  time: value2.time,\n                  userId: uni.getStorageSync('userID'),\n                  week: +_this8.week,\n                  year: +_this8.year,\n                  whichDay: +_this8.whichDay };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context8.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateDayPlan',\n                    data: data }));case 5:res = _context8.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this8.getDayPlan();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context8.stop();}}}, _callee8);}))();\n    },\n\n    // 获取日计划数据\n    getDayPlan: function getDayPlan() {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var data, res, result, j, k;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:\n                _this9.update3 = false;\n                data = {\n                  userId: uni.getStorageSync('userID'),\n                  week: +_this9.week,\n                  whichDay: +_this9.whichDay,\n                  year: +_this9.year };_context9.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/findAimsByConditionForDayPlan',\n                    data: data }));case 4:res = _context9.sent;\n\n                __f__(\"log\", data, \" at pages/weekgoals/weekgoals.vue:877\");\n                __f__(\"log\", res, \" at pages/weekgoals/weekgoals.vue:878\");\n                if (res.data.statusCode == 200 && res.data.result) {\n                  result = res.data.result;\n                  // 数据初始化\n                  _this9.todayThings = [\n                  {\n                    index: 1,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 2,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 3,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 4,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 5,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 6,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 7,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 8,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 9,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 10,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 11,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 12,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 13,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 14,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 15,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 16,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n\n                  {\n                    index: 17,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' },\n                  {\n                    index: 18,\n                    complete: false,\n                    time: '',\n                    parentType: '今日事项',\n                    type: '',\n                    content: '' }],\n\n\n                  _this9.todaySummary = [\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' },\n\n                  {\n                    parentType: '今日总结',\n                    content: '' }];\n\n\n                  j = 0;\n                  k = 0;\n                  result.forEach(function (v, i) {\n                    if (v.parentType === '今日事项') {\n                      _this9.todayThings[j] = v;\n                      _this9.todayThings.length = 18;\n                      j++;\n                    }\n                    if (v.parentType === '今日总结') {\n                      _this9.todaySummary[k] = v;\n                      _this9.todaySummary.length = 18;\n                      k++;\n                    }\n                  });\n                } else {\n                  uni.showToast({\n                    title: '获取日计划失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                _this9.update3 = true;case 9:case \"end\":return _context9.stop();}}}, _callee9);}))();\n    },\n\n    /****************************************************周-部分数据***********************************************/\n    // 下一周\n    handleNextWeek: function handleNextWeek() {\n      if (this.week + 1 === 53) {\n        this.week = 1;\n        this.year++;\n      } else {\n        this.week++;\n      }\n      this.time = this.time + 60 * 60 * 24 * 7 * 1000;\n      if (this.changeIndex == 0) {\n        this.getWeeklyTarget();\n        this.getWeeklySummary();\n        this.getSharePlan();\n      } else {\n        this.getDayPlan();\n      }\n      this.getDateNow();\n    },\n\n    // 上一周\n    handleLastWeek: function handleLastWeek() {\n      if (this.week - 1 === 0) {\n        this.week = 52;\n        this.year--;\n      } else {\n        this.week--;\n      }\n      this.time = this.time - 60 * 60 * 24 * 7 * 1000;\n      if (this.changeIndex == 0) {\n        this.getWeeklyTarget();\n        this.getWeeklySummary();\n        this.getSharePlan();\n      } else {\n        this.getDayPlan();\n      }\n      this.getDateNow();\n    },\n\n    // 分享数据更新\n    handleShare: function handleShare(e, value2) {var _this10 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var value, data, res;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  content: value,\n                  type: value2.type,\n                  timeSign: +('' + _this10.year + _this10.week),\n                  userid: uni.getStorageSync('userID') };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context10.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateShare',\n                    data: data }));case 5:res = _context10.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this10.getSharePlan();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context10.stop();}}}, _callee10);}))();\n    },\n\n    // 其他目标更新\n    handleOtherComplete: function handleOtherComplete(value) {var _this11 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {var data, res;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:\n                data = {\n                  complete: !value.complete,\n                  content: value.content,\n                  timeSign: +('' + _this11.year + _this11.week),\n                  type: value.type,\n                  userid: uni.getStorageSync('userID'),\n                  id: value.id };\n\n                // 必须是里面已经填写了内容的才可以打勾\n                if (!value.id) {_context11.next = 7;break;}_context11.next = 4;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateWeekPlan',\n                    data: data }));case 4:res = _context11.sent;\n\n                _this11.weeklyPlan.forEach(function (v) {\n                  if (v.id === value.id) {\n                    v.complete = !v.complete;\n                  }\n                });\n                if (res.data.statusCode == 200) {\n                  _this11.getWeeklyTarget();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context11.stop();}}}, _callee11);}))();\n\n    },\n\n    // 其他目标更新\n    handleOtherPlan: function handleOtherPlan(e, value2) {var _this12 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var value, data, res;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value,\n                  timeSign: +('' + _this12.year + _this12.week),\n                  type: value2.type,\n                  userid: uni.getStorageSync('userID') };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context12.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateWeekPlan',\n                    data: data }));case 5:res = _context12.sent;\n\n                __f__(\"log\", res.data.message, \" at pages/weekgoals/weekgoals.vue:1244\");\n                if (res.data.statusCode == 200) {\n                  _this12.getWeeklyTarget();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 8:case \"end\":return _context12.stop();}}}, _callee12);}))();\n    },\n\n    // 本周目标完成状态更新\n    handleComplete: function handleComplete(value) {var _this13 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var data, res;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:\n                data = {\n                  complete: !value.complete,\n                  content: value.content,\n                  timeSign: +('' + _this13.year + _this13.week),\n                  type: value.type,\n                  userid: uni.getStorageSync('userID'),\n                  id: value.id };\n\n                // 必须是里面已经填写了内容的才可以打勾\n                if (!value.id) {_context13.next = 6;break;}_context13.next = 4;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateWeekPlan',\n                    data: data }));case 4:res = _context13.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this13.getWeeklyTarget();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 6:case \"end\":return _context13.stop();}}}, _callee13);}))();\n\n    },\n\n    // 本周目标更新\n    handleUpdatePlan: function handleUpdatePlan(e, value2) {var _this14 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14() {var value, data, res;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  complete: value2.complete,\n                  content: value,\n                  timeSign: +('' + _this14.year + _this14.week),\n                  type: value2.type,\n                  userid: uni.getStorageSync('userID') };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context14.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateWeekPlan',\n                    data: data }));case 5:res = _context14.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this14.getWeeklyTarget();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context14.stop();}}}, _callee14);}))();\n    },\n\n    // 上周总结-本周创新与收获\n    handleHarvest: function handleHarvest(e, value2) {var _this15 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15() {var value, data, res;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  content: value,\n                  timeSign: +('' + _this15.year + _this15.week),\n                  type: value2.type,\n                  year: _this15.year,\n                  userid: uni.getStorageSync('userID') };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context15.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateSummarize',\n                    data: data }));case 5:res = _context15.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this15.getWeeklySummary();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context15.stop();}}}, _callee15);}))();\n    },\n\n    // 上周总结-克服障碍的对策和方法\n    handleService: function handleService(e, value2) {var _this16 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16() {var value, data, res;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  content: value,\n                  timeSign: +('' + _this16.year + _this16.week),\n                  type: value2.type,\n                  year: _this16.year,\n                  userid: uni.getStorageSync('userID') };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context16.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateSummarize',\n                    data: data }));case 5:res = _context16.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this16.getWeeklySummary();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context16.stop();}}}, _callee16);}))();\n    },\n\n    // 上周总结-未完成目标的原因及障碍\n    handleReason: function handleReason(e, value2) {var _this17 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17() {var value, data, res;return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  content: value,\n                  timeSign: +('' + _this17.year + _this17.week),\n                  type: value2.type,\n                  year: _this17.year,\n                  userid: uni.getStorageSync('userID') };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context17.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateSummarize',\n                    data: data }));case 5:res = _context17.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this17.getWeeklySummary();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context17.stop();}}}, _callee17);}))();\n    },\n\n    // 上周总结-目标完成情况\n    handleWeekPerformance: function handleWeekPerformance(e, value2) {var _this18 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18() {var value, data, res;return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:\n                value = e.detail.value;\n                data = {\n                  content: value,\n                  timeSign: +('' + _this18.year + _this18.week),\n                  type: value2.type,\n                  year: _this18.year,\n                  userid: uni.getStorageSync('userID') };\n\n                if (value2.id) {\n                  data.id = value2.id;\n                }_context18.next = 5;return (\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/updateSummarize',\n                    data: data }));case 5:res = _context18.sent;\n\n                if (res.data.statusCode == 200) {\n                  _this18.getWeeklySummary();\n                } else {\n                  uni.showToast({\n                    title: '更新数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }case 7:case \"end\":return _context18.stop();}}}, _callee18);}))();\n\n    },\n\n    // 时间转化为周数\n    getWeek: function getWeek() {\n      var date = new Date(this.time);\n      var beginDate = new Date(date.getFullYear(), 0, 1);\n      var week = Math.ceil((parseInt((date - beginDate) / (24 * 60 * 60 * 1000)) + 1 + beginDate.getDay()) / 7);\n      this.week = week;\n    },\n\n    // 获取分享数据\n    getSharePlan: function getSharePlan() {var _this19 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19() {var data, res, result;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:\n                _this19.update2 = false;\n                data = {\n                  timeSign: +('' + _this19.year + _this19.week),\n                  userid: uni.getStorageSync('userID') };_context19.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/queryShare',\n                    data: data }));case 4:res = _context19.sent;\n\n                if (res.data.statusCode == 200 && res.data.result) {\n                  result = res.data.result;\n                  _this19.shareArray = [\n                  {\n                    type: '1',\n                    content: '' },\n\n                  {\n                    type: '2',\n                    content: '' },\n\n                  {\n                    type: '3',\n                    content: '' }],\n\n\n                  result.forEach(function (v) {\n                    _this19.shareArray.forEach(function (value, index) {\n                      if (v.type === value.type) {\n                        _this19.shareArray[index] = v;\n                      }\n                    });\n                  });\n                } else {\n                  uni.showToast({\n                    title: '获取分享数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                _this19.update2 = true;case 7:case \"end\":return _context19.stop();}}}, _callee19);}))();\n    },\n\n    // 获取周目标数据\n    getWeeklyTarget: function getWeeklyTarget() {var _this20 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {var data, res, result;return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:\n                _this20.update1 = false;\n                data = {\n                  timeSign: +('' + _this20.year + _this20.week),\n                  userid: uni.getStorageSync('userID') };_context20.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/queryWeekPlan',\n                    data: data }));case 4:res = _context20.sent;\n\n                // console.log(res)\n                if (res.data.statusCode == 200 && res.data.result) {\n                  // 初始化数据\n                  _this20.weeklyPlan = [{\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false },\n\n                  {\n                    content: '',\n                    type: '本周目标',\n                    complete: false }],\n\n\n                  _this20.otherPlan = [{\n                    type: '学习计划',\n                    content: '',\n                    complete: false },\n\n                  {\n                    type: '健康计划',\n                    content: '',\n                    complete: false },\n\n                  {\n                    type: '本周反省',\n                    content: '',\n                    complete: false }];\n\n\n                  result = res.data.result;\n                  result.forEach(function (v, i) {\n                    if (v.type == '本周目标') {\n                      _this20.weeklyPlan[i] = v;\n                      _this20.weeklyPlan.length = 18;\n                    }\n                    _this20.otherPlan.forEach(function (value, index) {\n                      if (value.type == v.type) {\n                        _this20.otherPlan[index] = v;\n                      }\n                    });\n                  });\n                } else {\n                  uni.showToast({\n                    title: '获取数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                _this20.update1 = true;case 7:case \"end\":return _context20.stop();}}}, _callee20);}))();\n    },\n\n    // 获取周总结数据\n    getWeeklySummary: function getWeeklySummary() {var _this21 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21() {var data, res, result, j, k, l, g, i;return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:\n                _this21.update = false;\n                // 获取总结数据\n                data = {\n                  userid: uni.getStorageSync('userID'),\n                  timeSign: +('' + _this21.year + _this21.week),\n                  year: _this21.year };_context21.next = 4;return (\n\n                  (0, _myAxios.myAxios)({\n                    method: 'post',\n                    url: '/anonymous/querySummarize',\n                    data: data }));case 4:res = _context21.sent;\n\n                if (res.data.statusCode == 200 && res.data.result) {\n                  result = res.data.result;\n                  _this21.weekPerformance = [{\n                    content: '',\n                    type: '目标完成情况' },\n\n                  {\n                    content: '',\n                    type: '目标完成情况' },\n\n                  {\n                    content: '',\n                    type: '目标完成情况' },\n\n                  {\n                    content: '',\n                    type: '目标完成情况' },\n\n                  {\n                    content: '',\n                    type: '目标完成情况' },\n\n                  {\n                    content: '',\n                    type: '目标完成情况' }],\n\n\n\n                  _this21.reason = [{\n                    content: '',\n                    type: '未完成目标的原因及障碍' },\n\n                  {\n                    content: '',\n                    type: '未完成目标的原因及障碍' },\n\n                  {\n                    content: '',\n                    type: '未完成目标的原因及障碍' }],\n\n\n                  _this21.service = [{\n                    content: '',\n                    type: '克服障碍的对策和方法' },\n\n                  {\n                    content: '',\n                    type: '克服障碍的对策和方法' },\n\n                  {\n                    content: '',\n                    type: '克服障碍的对策和方法' }],\n\n\n                  _this21.harvest = [{\n                    content: '',\n                    type: '本周创新与收获' },\n\n                  {\n                    content: '',\n                    type: '本周创新与收获' },\n\n                  {\n                    content: '',\n                    type: '本周创新与收获' }];\n\n\n                  j = 0;\n                  k = 0;\n                  l = 0;\n                  g = 0;\n                  for (i = 0; i < result.length; i++) {\n                    if (result[i].type == '目标完成情况') {\n                      _this21.weekPerformance[j] = result[i];\n                      _this21.weekPerformance.length = 6;\n                      j++;\n                    }\n                    if (result[i].type == '未完成目标的原因及障碍') {\n                      _this21.reason[k] = result[i];\n                      _this21.reason.length = 3;\n                      k++;\n                    }\n                    if (result[i].type == '克服障碍的对策和方法') {\n                      _this21.service[l] = result[i];\n                      _this21.service.length = 3;\n                      l++;\n                    }\n                    if (result[i].type == '本周创新与收获') {\n                      _this21.harvest[g] = result[i];\n                      _this21.harvest.length = 3;\n                      g++;\n                    }\n                  }\n\n                } else {\n                  uni.showToast({\n                    title: '获取数据失败,请重试',\n                    icon: 'none',\n                    duration: 500 });\n\n                }\n                _this21.update = true;case 7:case \"end\":return _context21.stop();}}}, _callee21);}))();\n    } },\n\n  onLoad: function onLoad() {\n    this.getWeek();\n    this.getWeeklySummary();\n    this.getWeeklyTarget();\n    this.getSharePlan();\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvd2Vla2dvYWxzL3dlZWtnb2Fscy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyTUEscUU7QUFDQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFDQSxtQkFEQTtBQUVBLHNCQUZBOztBQUlBO0FBQ0EsbUJBREE7QUFFQSxzQkFGQSxFQUpBOztBQVFBO0FBQ0EsbUJBREE7QUFFQSxzQkFGQSxFQVJBOztBQVlBO0FBQ0EsbUJBREE7QUFFQSxzQkFGQSxFQVpBOztBQWdCQTtBQUNBLG1CQURBO0FBRUEsc0JBRkEsRUFoQkE7O0FBb0JBO0FBQ0EsbUJBREE7QUFFQSxzQkFGQSxFQXBCQSxDQUZBOzs7QUEyQkE7QUFDQSxtQkFEQTtBQUVBLDJCQUZBOztBQUlBO0FBQ0EsbUJBREE7QUFFQSwyQkFGQSxFQUpBOztBQVFBO0FBQ0EsbUJBREE7QUFFQSwyQkFGQSxFQVJBLENBM0JBOzs7QUF3Q0E7QUFDQSxtQkFEQTtBQUVBLDBCQUZBOztBQUlBO0FBQ0EsbUJBREE7QUFFQSwwQkFGQSxFQUpBOztBQVFBO0FBQ0EsbUJBREE7QUFFQSwwQkFGQSxFQVJBLENBeENBOzs7QUFxREE7QUFDQSxtQkFEQTtBQUVBLHVCQUZBOztBQUlBO0FBQ0EsbUJBREE7QUFFQSx1QkFGQSxFQUpBOztBQVFBO0FBQ0EsbUJBREE7QUFFQSx1QkFGQSxFQVJBLENBckRBOzs7QUFrRUE7QUFDQSxtQkFEQTtBQUVBLG9CQUZBO0FBR0EsdUJBSEE7O0FBS0E7QUFDQSxt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QUFFQSx1Q0FGQSxFQUpBOztBQVFBO0FBQ0EsK0JBREE7QUFFQSx1Q0FGQSxFQVJBLENBMUJBOzs7QUF1Q0E7QUFDQSwrQkFEQTtBQUVBLHNDQUZBOztBQUlBO0FBQ0EsK0JBREE7QUFFQSxzQ0FGQSxFQUpBOztBQVFBO0FBQ0EsK0JBREE7QUFFQSxzQ0FGQSxFQVJBLENBdkNBOzs7QUFvREE7QUFDQSwrQkFEQTtBQUVBLG1DQUZBOztBQUlBO0FBQ0EsK0JBREE7QUFFQSxtQ0FGQSxFQUpBOztBQVFBO0FBQ0EsK0JBREE7QUFFQSxtQ0FGQSxFQVJBLENBcERBOzs7QUFpRUEsbUJBbkVBLEdBbUVBLENBbkVBO0FBb0VBLG1CQXBFQSxHQW9FQSxDQXBFQTtBQXFFQSxtQkFyRUEsR0FxRUEsQ0FyRUE7QUFzRUEsbUJBdEVBLEdBc0VBLENBdEVBO0FBdUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQTlGQSxNQThGQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSxnQ0FGQTtBQUdBLGlDQUhBOztBQUtBO0FBQ0Esc0NBbEhBO0FBbUhBLEtBMWtDQSxFQXpiQTs7QUFxZ0RBLFFBcmdEQSxvQkFxZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTFnREEsRSIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDwhLS0g5pi+56S65ZGoIC0tPlxyXG5cdFx0PGJsb2NrIHYtaWY9XCJjaGFuZ2VJbmRleD09MFwiPlxyXG5cdFx0XHQ8IS0tIOmhtumDqHRhYuagjyAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJiYXJcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIndlZWtUYWJcIj5cclxuXHRcdFx0XHRcdDxibG9jayB2LWZvcj1cIih2YWx1ZSxpbmRleCkgaW4gd2Vla0RheXNcIiA6a2V5PVwidmFsdWVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IEB0YXA9XCJoYW5kbGVDaGFuZ2VUYWIoaW5kZXgpXCIgOmNsYXNzPVwiY2hhbmdlSW5kZXg9PT1pbmRleD8nb24nOicnXCI+e3t2YWx1ZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLWNoYW5nZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJcIiBAdGFwPVwiaGFuZGxlTGFzdFdlZWtcIj7kuIrkuIDlkag8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhYlwiPlxyXG5cdFx0XHRcdFx0XHR7e3llYXJ9feW5tCDnrKx7e3dlZWt9feWRqFxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJcIiBAdGFwPVwiaGFuZGxlTmV4dFdlZWtcIj7kuIvkuIDlkag8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8IS0tIOihqOagvOaVsOaNrumDqOWIhiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrXCI+XHJcblx0XHRcdFx0PCEtLSDlt6bovrnooajmoLwgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLWxlZnRcIiB2LWlmPVwidXBkYXRlXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndlZWstbGVmdC1pdGVtXCI+5LiK5ZGo5oC757uTPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLWxlZnQtaXRlbVwiPuebruagh+WujOaIkOaDheWGtTwvdmlldz5cclxuXHRcdFx0XHRcdCA8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIHdlZWtQZXJmb3JtYW5jZVwiIDprZXk9XCJNYXRoLnJhbmRvbSgpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLWxlZnQtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBjbGFzcz1cIm15dGV4dFwiIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIiBAYmx1cj1cImhhbmRsZVdlZWtQZXJmb3JtYW5jZSgkZXZlbnQsdmFsdWUpXCI+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2Vlay1sZWZ0LWl0ZW1cIj7mnKrlrozmiJDnm67moIfnmoTljp/lm6Dlj4rpmpznoo08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIHJlYXNvblwiIDprZXk9XCJNYXRoLnJhbmRvbSgpXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2Vlay1sZWZ0LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0PHRleHRhcmVhIGNsYXNzPVwibXl0ZXh0XCIgQGJsdXI9XCJoYW5kbGVSZWFzb24oJGV2ZW50LHZhbHVlKVwiIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2Vlay1sZWZ0LWl0ZW1cIj7lhYvmnI3pmpznoo3nmoTlr7nnrZblkozmlrnms5U8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIHNlcnZpY2VcIiA6a2V5PVwiTWF0aC5yYW5kb20oKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndlZWstbGVmdC1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBjbGFzcz1cIm15dGV4dFwiIEBibHVyPVwiaGFuZGxlU2VydmljZSgkZXZlbnQsdmFsdWUpXCIgOnZhbHVlPVwidmFsdWUuY29udGVudFwiPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L2Jsb2NrPiBcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2Vlay1sZWZ0LWl0ZW1cIj7mnKzlkajliJvmlrDkuI7mlLbojrc8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIGhhcnZlc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLWxlZnQtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJteXRleHRcIiBAYmx1cj1cImhhbmRsZUhhcnZlc3QoJGV2ZW50LHZhbHVlKVwiIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDlj7PovrnooajmoLwgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLXJpZ2h0XCIgdi1pZj1cInVwZGF0ZTFcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLXJpZ2h0LXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0XCI+5bqP5Y+3PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+5pys5ZGo55uu5qCHPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldz4xLuivt+WcqOS4iuWRqOS6lOeahOinhOWIkuWhq+WGmTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXc+Mi7mjInnm67moIfph43opoHnqIvluqbop4TliJLmnInpmZDpobrluo88L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3PjMu5a6M5oiQ5LiA6aG5LOWcqOWujOaIkOaXtumZkOWkhOaJk+WLvjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodFwiPuWujOaIkOacn+mZkDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIHdlZWtseVBsYW5cIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndlZWstcmlnaHQtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0XCI+e3tpbmRleCsxfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJteXRleHRcIiA6dmFsdWU9XCJ2YWx1ZS5jb250ZW50XCIgQGJsdXI9XCJoYW5kbGVVcGRhdGVQbGFuKCRldmVudCx2YWx1ZSlcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodFwiIDpjbGFzcz1cInZhbHVlLmNvbXBsZXRlPT10cnVlPydpY29uZm9udCBpY29uLXpoZW5ncXVlJzonJ1wiIEB0YXA9XCJoYW5kbGVDb21wbGV0ZSh2YWx1ZSlcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0PCEtLSDlupXpg6jlm77niYfku6Xlj4rlhbbku5borqHliJLpg6jliIYgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZm9vdGVyXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb290ZXItbGVmdFwiPuW5v+WRiuS9jVxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvb3Rlci1yaWdodFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb290ZXItcmlnaHQtdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZS1sZWZ0XCI+5pys5ZGo5YW25LuW55uu5qCHPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx06K+35rOo5oSP6KeE5YiS5L2g55qE55Sf5rS777yM5bmz6KGh5L2g55qE5Lq655Sf77yM5Lul5LiL55uu5qCH5YGa5Yiw5omTJ+KImics5pys5ZGo5pyJ54m55Yir55qE5pel5a2Q5ZCX77yf6K+35qCH5rOoICjnlJ/ml6Uv6IqC5pelL+e6quW/teaXpSlcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PGJsb2NrIHYtZm9yPVwiKHZhbHVlLGluZGV4KSBpbiBvdGhlclBsYW5cIiA6a2V5PVwidmFsdWUudHlwZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb290ZXItcmlnaHQtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHQgPHZpZXcgY2xhc3M9XCJjb250ZW50LWxlZnRcIj57e3ZhbHVlLnR5cGV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0IDx2aWV3IGNsYXNzPVwiY29udGVudC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQgPHRleHRhcmVhIGNsYXNzPVwibXl0ZXh0XCIgOnZhbHVlPVwidmFsdWUuY29udGVudFwiIEBibHVyPVwiaGFuZGxlT3RoZXJQbGFuKCRldmVudCx2YWx1ZSlcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQgPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJ2YWx1ZS5jb21wbGV0ZT09dHJ1ZT8naWNvbmZvbnQgaWNvbi16aGVuZ3F1ZSc6JydcIiBAdGFwPVwiaGFuZGxlT3RoZXJDb21wbGV0ZSh2YWx1ZSlcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0XHQ8IS0tIOWIhuS6q+mDqOWIhiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzaGFyZVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hhcmUtdG9wXCI+5pys5ZGo5pyA5oOz5YiG5Lqr55qE5LiJ54K5PC92aWV3PlxyXG5cdFx0XHRcdDxibG9jayB2LWlmPVwidXBkYXRlMlwiIHYtZm9yPVwiKHZhbHVlLGluZGV4KSBpbiBzaGFyZUFycmF5XCIgOmtleT1cInZhbHVlLnR5cGVcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNoYXJlLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hhcmUtY29udGVudC1sZWZ0XCI+e3t2YWx1ZS50eXBlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNoYXJlLWNvbnRlbnQtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0PHRleHRhcmVhIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIiBAYmx1cj1cImhhbmRsZVNoYXJlKCRldmVudCx2YWx1ZSlcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0PC9ibG9jaz5cclxuXHRcdFxyXG5cdFx0PCEtLSDmmL7npLrlpKkgLS0+XHJcblx0XHQ8YmxvY2sgdi1lbHNlPlxyXG5cdFx0XHQ8IS0tIOmhtumDqHRhYmJhciAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJiYXJcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIndlZWtUYWJcIj5cclxuXHRcdFx0XHRcdDxibG9jayB2LWZvcj1cIih2YWx1ZSxpbmRleCkgaW4gd2Vla0RheXNcIiA6a2V5PVwidmFsdWVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IEB0YXA9XCJoYW5kbGVDaGFuZ2VUYWIoaW5kZXgpXCIgOmNsYXNzPVwiY2hhbmdlSW5kZXg9PT1pbmRleD8nb24nOicnXCI+e3t2YWx1ZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZWVrLWNoYW5nZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJcIiBAdGFwPVwiaGFuZGxlTGFzdFdlZWtcIj7kuIrkuIDlkag8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhYlwiPlxyXG5cdFx0XHRcdFx0XHR7e3llYXJ9feW5tCDnrKx7e3dlZWt9feWRqFxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWJcIiBAdGFwPVwiaGFuZGxlTmV4dFdlZWtcIj7kuIvkuIDlkag8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g5ZGo5LiALeWRqOaXpXRhYuagjyAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJkYXlzLXRhYlwiPlxyXG5cdFx0XHRcdDxibG9jayB2LWZvcj1cIih2YWx1ZSxpbmRleCkgaW4gd2Vla0RhdGVcIiA6a2V5PVwidmFsdWUudHlwZVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkYXlzXCIgOmNsYXNzPVwid2hpY2hEYXk9PShpbmRleCsxKT8nb24nOicnXCIgQHRhcD1cImhhbmRsZUNob3NlRGF0ZShpbmRleCsxKVwiPnt7dmFsdWUubmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDml6XmnJ/pgInmi6kgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZGF0ZVwiPlxyXG5cdFx0XHQgIDxwaWNrZXIgbW9kZT1cImRhdGVcIiAgQGNoYW5nZT1cImhhbmRsZUNoYW5nZVRpbWVcIj5cclxuXHRcdFx0ICAgIDx0ZXh0Pnt7eWVhcn195bm0e3ttb250aH195pyIe3tkYXlzfX3ml6U8L3RleHQ+XHJcblx0XHRcdCAgPC9waWNrZXI+XHJcblx0XHRcdCAgICA8dmlldyBjbGFzcz1cImljb25mb250IGljb24tcmlsaVwiPjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOavj+aXpeaVsOaNriAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJkYWlseVwiIHYtaWY9XCJ1cGRhdGUzXCI+XHJcblx0XHRcdCAgPHZpZXcgY2xhc3M9XCJkYWlseS1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhdGVnb3J5XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2F0ZU5hbWVcIj7mjIlBQkPliIbnsbs8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2F0ZU5hbWVcIj7otbfmraLml7bpl7Q8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2F0ZU5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyA+5LuK5aSp5LqL6aG5IOimgeS6i+esrOS4gDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyA+Qeexu+acgOmHjeimgSBC57G75YW25qyhIEPnsbvmrKHph43opoE8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXRlTmFtZVwiPuWujOaIkOaJk+WLvjwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOWGheWuuemDqOWIhiAtLT5cclxuXHRcdFx0XHQ8YmxvY2sgdi1mb3I9XCIodmFsdWUsaW5kZXgpIGluIHRvZGF5VGhpbmdzXCIgOmtleT1cIk1hdGgucmFuZG9tKClcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHRcdCAgICAgIDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiA6dmFsdWU9XCJ2YWx1ZS50eXBlXCIgQGJsdXI9XCJoYW5kbGVDaGFuZ2VUeXBlKCRldmVudCx2YWx1ZSlcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQgICAgICA8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdCAgICAgICA8cGlja2VyIG1vZGU9XCJkYXRlXCIgOnZhbHVlPVwidmFsdWUudGltZVwiIEBjaGFuZ2U9XCJiaW5kRGF0ZUNoYW5nZSgkZXZlbnQsdmFsdWUpXCI+XHJcblx0XHRcdFx0XHQgICAgICAgIDx2aWV3IGNsYXNzPVwicGlja2VyXCI+XHJcblx0XHRcdFx0XHQgICAgICAgICAgPHRleHQgc3R5bGU9XCJvcGFjaXR5OjBcIj7pgInmi6nml7bpl7Q8L3RleHQ+XHJcblx0XHRcdFx0XHQgICAgICAgICAgPHRleHQ+e3t2YWx1ZS50aW1lPT1udWxsPycnOnZhbHVlLnRpbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdCAgICAgICAgPC92aWV3PlxyXG5cdFx0XHRcdFx0ICAgICAgPC9waWNrZXI+XHJcblx0XHRcdFx0XHQgICAgICA8L3ZpZXc+XHJcblx0XHRcdFx0XHQgICAgICA8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdCAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwidG9kYXlUaGluZ3NcIiA6dmFsdWU9XCJ2YWx1ZS5jb250ZW50XCIgQGJsdXI9XCJoYW5kbGVVcGRhdGVDb250ZW50KCRldmVudCx2YWx1ZSlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdCAgICAgIDwvdmlldz5cclxuXHRcdFx0XHRcdCAgICAgIDx2aWV3IGNsYXNzPVwiY29udGVudFwiIDpjbGFzcz1cInZhbHVlLmNvbXBsZXRlPT10cnVlPydpY29uZm9udCBpY29uLXpoZW5ncXVlJzonJ1wiIEB0YXA9XCJoYW5kbGVDb21wbGV0ZTIodmFsdWUpXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0ICAgIDwvdmlldz5cclxuXHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRhaWx5LXJpZ2h0XCI+XHJcblx0XHRcdFx0ICAgIDx2aWV3IGNsYXNzPVwiZGFpbHktcmlnaHQtdGl0bGVcIj5cclxuXHRcdFx0XHQgICAgICA8dGV4dCA+5oC757uTPC90ZXh0PlxyXG5cdFx0XHRcdCAgICAgIDx0ZXh0ID7mlLnov5s8L3RleHQ+XHJcblx0XHRcdFx0ICAgIDwvdmlldz5cclxuXHRcdFx0XHQgICAgPGJsb2NrIHYtZm9yPVwiKHZhbHVlLGluZGV4KSBpbiB0b2RheVN1bW1hcnlcIj5cclxuXHRcdFx0XHQgICAgICA8dmlldyBjbGFzcz1cImRlc1wiPlxyXG5cdFx0XHRcdCAgICAgICAgPHRleHRhcmVhIDp2YWx1ZT1cInZhbHVlLmNvbnRlbnRcIiBAYmx1cj1cImhhbmRsZVVwZGF0ZVN1bW1hcnkoJGV2ZW50LHZhbHVlKVwiPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0ICAgICAgPC92aWV3PlxyXG5cdFx0XHRcdCAgICA8L2Jsb2NrPlxyXG5cdFx0XHRcdCAgPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0PC9ibG9jaz5cclxuXHRcdFxyXG5cdFx0XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge215QXhpb3N9IGZyb20gJy4uLy4uL3V0aWxzL215QXhpb3MuanMnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR3ZWVrRGF5czpbJ+WRqCcsJ+WkqSddLFxyXG5cdFx0XHRcdHdlZWtQZXJmb3JtYW5jZTogW3tcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0cmVhc29uOiBbe1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acquWujOaIkOebruagh+eahOWOn+WboOWPiumanOeijSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pyq5a6M5oiQ55uu5qCH55qE5Y6f5Zug5Y+K6Zqc56KNJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKrlrozmiJDnm67moIfnmoTljp/lm6Dlj4rpmpznoo0nXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRzZXJ2aWNlOiBbe1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+WFi+acjemanOeijeeahOWvueetluWSjOaWueazlSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5YWL5pyN6Zqc56KN55qE5a+5562W5ZKM5pa55rOVJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICflhYvmnI3pmpznoo3nmoTlr7nnrZblkozmlrnms5UnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0aGFydmVzdDogW3tcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajliJvmlrDkuI7mlLbojrcnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOWIm+aWsOS4juaUtuiOtydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo5Yib5paw5LiO5pS26I63J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdHdlZWtseVBsYW46IFt7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdG90aGVyUGxhbjogW3tcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+WtpuS5oOiuoeWIkicsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICflgaXlurforqHliJInLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo5Y+N55yBJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0c2hhcmVBcnJheTpbXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgdHlwZTonMScsXHJcblx0XHRcdFx0ICAgICAgICBjb250ZW50OicnXHJcblx0XHRcdFx0ICAgICAgfSxcclxuXHRcdFx0XHQgICAgICB7XHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicyJyxcclxuXHRcdFx0XHQgICAgICAgIGNvbnRlbnQ6JydcclxuXHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdCAgICAgIHtcclxuXHRcdFx0XHQgICAgICAgIHR5cGU6JzMnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgIF0sXHJcblx0XHRcdFx0d2Vla0RhdGU6W1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiflkajkuIAnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOjFcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHRuYW1lOiflkajkuownLFxyXG5cdFx0XHRcdFx0XHR0eXBlOjJcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHRuYW1lOiflkajkuIknLFxyXG5cdFx0XHRcdFx0XHR0eXBlOjNcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHRuYW1lOiflkajlm5snLFxyXG5cdFx0XHRcdFx0XHR0eXBlOjRcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHRuYW1lOiflkajkupQnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOjVcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHRuYW1lOiflkajlha0nLFxyXG5cdFx0XHRcdFx0XHR0eXBlOjZcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHRuYW1lOiflkajml6UnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOjdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHR0b2RheVRoaW5nczpbXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6MSxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6MixcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6MyxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6NCxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6NSxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6NixcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6NyxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6OCxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6OSxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6MTAsXHJcblx0XHRcdFx0ICAgICAgICBjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHQgICAgICAgIHRpbWU6JycsXHJcblx0XHRcdFx0ICAgICAgICBwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdCAgICAgICAgdHlwZTonJyxcclxuXHRcdFx0XHQgICAgICAgIGNvbnRlbnQ6JydcclxuXHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdCAgICAgIHtcclxuXHRcdFx0XHQgICAgICAgIGluZGV4OjExLFxyXG5cdFx0XHRcdCAgICAgICAgY29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0ICAgICAgICB0aW1lOicnLFxyXG5cdFx0XHRcdCAgICAgICAgcGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHQgICAgICAgIHR5cGU6JycsXHJcblx0XHRcdFx0ICAgICAgICBjb250ZW50OicnXHJcblx0XHRcdFx0ICAgICAgfSxcclxuXHRcdFx0XHQgICAgICB7XHJcblx0XHRcdFx0ICAgICAgICBpbmRleDoxMixcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6MTMsXHJcblx0XHRcdFx0ICAgICAgICBjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHQgICAgICAgIHRpbWU6JycsXHJcblx0XHRcdFx0ICAgICAgICBwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdCAgICAgICAgdHlwZTonJyxcclxuXHRcdFx0XHQgICAgICAgIGNvbnRlbnQ6JydcclxuXHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdCAgICAgIHtcclxuXHRcdFx0XHQgICAgICAgIGluZGV4OjE0LFxyXG5cdFx0XHRcdCAgICAgICAgY29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0ICAgICAgICB0aW1lOicnLFxyXG5cdFx0XHRcdCAgICAgICAgcGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHQgICAgICAgIHR5cGU6JycsXHJcblx0XHRcdFx0ICAgICAgICBjb250ZW50OicnXHJcblx0XHRcdFx0ICAgICAgfSxcclxuXHRcdFx0XHQgICAgICB7XHJcblx0XHRcdFx0ICAgICAgICBpbmRleDoxNSxcclxuXHRcdFx0XHQgICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdCAgICAgICAgdGltZTonJyxcclxuXHRcdFx0XHQgICAgICAgIHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0ICAgICAgICB0eXBlOicnLFxyXG5cdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6MTYsXHJcblx0XHRcdFx0ICAgICAgICBjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHQgICAgICAgIHRpbWU6JycsXHJcblx0XHRcdFx0ICAgICAgICBwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdCAgICAgICAgdHlwZTonJyxcclxuXHRcdFx0XHQgICAgICAgIGNvbnRlbnQ6JydcclxuXHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdCAgICAgIHtcclxuXHRcdFx0XHQgICAgICAgIGluZGV4OjE3LFxyXG5cdFx0XHRcdCAgICAgICAgY29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0ICAgICAgICB0aW1lOicnLFxyXG5cdFx0XHRcdCAgICAgICAgcGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHQgICAgICAgIHR5cGU6JycsXHJcblx0XHRcdFx0ICAgICAgICBjb250ZW50OicnXHJcblx0XHRcdFx0ICAgICAgfSwge1xyXG5cdFx0XHRcdCAgICAgICAgaW5kZXg6MTcsXHJcblx0XHRcdFx0ICAgICAgICBjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHQgICAgICAgIHRpbWU6JycsXHJcblx0XHRcdFx0ICAgICAgICBwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdCAgICAgICAgdHlwZTonJyxcclxuXHRcdFx0XHQgICAgICAgIGNvbnRlbnQ6JydcclxuXHRcdFx0XHQgICAgICB9XHJcblx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0dG9kYXlTdW1tYXJ5OltcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0ICAgXHJcblx0XHRcdFx0d2VlazogMCxcclxuXHRcdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXHJcblx0XHRcdFx0bW9udGg6MCxcclxuXHRcdFx0XHRkYXlzOjAsXHJcblx0XHRcdFx0dGltZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcblx0XHRcdFx0dXBkYXRlOnRydWUsXHJcblx0XHRcdFx0dXBkYXRlMTp0cnVlLFxyXG5cdFx0XHRcdHVwZGF0ZTI6dHJ1ZSxcclxuXHRcdFx0XHR1cGRhdGUzOnRydWUsXHJcblx0XHRcdFx0Y2hhbmdlSW5kZXg6MCxcclxuXHRcdFx0XHR3aGljaERheToxXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczp7XHJcblx0XHRcdFxyXG5cdFx0Ly8g6YCJ5oup5pe26Ze0XHJcblx0XHRhc3luYyBoYW5kbGVDaGFuZ2VUaW1lKGUpe1xyXG5cdFx0XHRsZXQgZGF0ZT1uZXcgRGF0ZShlLmRldGFpbC52YWx1ZSlcclxuXHRcdFx0dGhpcy5tb250aD1kYXRlLmdldE1vbnRoKCkrMVxyXG5cdFx0XHR0aGlzLnllYXI9ZGF0ZS5nZXRGdWxsWWVhcigpXHJcblx0XHRcdHRoaXMuZGF5cz1kYXRlLmdldERhdGUoKVxyXG5cdFx0XHR0aGlzLnRpbWU9ZGF0ZS5nZXRUaW1lKClcclxuXHRcdFx0dGhpcy5nZXREYXRlTm93KClcclxuXHRcdFx0dGhpcy5nZXRXZWVrKClcclxuXHRcdFx0dGhpcy5nZXREYXlQbGFuKClcclxuXHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0Ly8g5YiH5o2i5ZGoLS3lpKlcclxuXHRcdGFzeW5jIGhhbmRsZUNoYW5nZVRhYihpbmRleCl7XHJcblx0XHRcdHRoaXMuY2hhbmdlSW5kZXg9aW5kZXhcclxuXHRcdFx0aWYoaW5kZXg9PTApe1xyXG5cdFx0XHRcdHRoaXMuZ2V0V2Vla2x5VGFyZ2V0KClcclxuXHRcdFx0XHR0aGlzLmdldFdlZWtseVN1bW1hcnkoKVxyXG5cdFx0XHRcdHRoaXMuZ2V0U2hhcmVQbGFuKClcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5nZXREYXRlTm93KClcclxuXHRcdFx0XHR0aGlzLmdldERheVBsYW4oKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDliIfmjaLlkajlh6BcclxuXHRcdGFzeW5jIGhhbmRsZUNob3NlRGF0ZShpbmRleCl7XHJcblx0XHRcdGlmKChpbmRleC10aGlzLndoaWNoRGF5KT4wKXtcclxuXHRcdFx0XHR0aGlzLnRpbWU9dGhpcy50aW1lKzI0KjYwKjYwKjEwMDAqTWF0aC5hYnMoaW5kZXgtdGhpcy53aGljaERheSlcclxuXHRcdFx0fWVsc2UgaWYoKGluZGV4LXRoaXMud2hpY2hEYXkpPDApe1xyXG5cdFx0XHRcdHRoaXMudGltZT10aGlzLnRpbWUtMjQqNjAqNjAqMTAwMCpNYXRoLmFicyhpbmRleC10aGlzLndoaWNoRGF5KVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMud2hpY2hEYXk9aW5kZXhcclxuXHRcdFx0dGhpcy5nZXREYXRlTm93KClcclxuXHRcdFx0Ly8g5ZCM5pe26YeN5paw6I635Y+W5pWw5o2uXHJcblx0XHRcdHRoaXMuZ2V0RGF5UGxhbigpXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDojrflj5bml7bpl7RcclxuXHRcdGdldERhdGVOb3coKXtcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy50aW1lKVxyXG5cdFx0XHRsZXQgZGF0ZT1uZXcgRGF0ZSh0aGlzLnRpbWUpXHJcblx0XHRcdGxldCB5ZWFyPWRhdGUuZ2V0RnVsbFllYXIoKVxyXG5cdFx0XHRsZXQgbW9udGg9ZGF0ZS5nZXRNb250aCgpKzFcclxuXHRcdFx0bGV0IGRheXM9ZGF0ZS5nZXREYXRlKClcclxuXHRcdFx0bGV0IHdoaWNoRGF5PWRhdGUuZ2V0RGF5KClcclxuXHRcdFx0d2hpY2hEYXk9d2hpY2hEYXk9PT0wPzc6d2hpY2hEYXlcclxuXHRcdFx0dGhpcy55ZWFyPXllYXJcclxuXHRcdFx0dGhpcy5tb250aD1tb250aFxyXG5cdFx0XHR0aGlzLmRheXM9ZGF5c1xyXG5cdFx0XHR0aGlzLndoaWNoRGF5PXdoaWNoRGF5XHJcblx0XHR9LFxyXG5cdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirlpKkt6YOo5YiG5pWw5o2uKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblx0XHQvLyDmm7TmlrDml6XmgLvnu5PmlLnov5tcclxuXHRcdGFzeW5jIGhhbmRsZVVwZGF0ZVN1bW1hcnkoZSx2YWx1ZTIpe1xyXG5cdFx0XHRsZXQge3ZhbHVlfT1lLmRldGFpbFxyXG5cdFx0XHRsZXQgZGF0YT17XHJcblx0XHRcdFx0Y29udGVudDp2YWx1ZSxcclxuXHRcdFx0XHRwYXJlbnRUeXBlOnZhbHVlMi5wYXJlbnRUeXBlLFxyXG5cdFx0XHRcdHVzZXJJZDp1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpLFxyXG5cdFx0XHRcdHdlZWs6K3RoaXMud2VlayxcclxuXHRcdFx0XHR5ZWFyOit0aGlzLnllYXIsXHJcblx0XHRcdFx0d2hpY2hEYXk6K3RoaXMud2hpY2hEYXlcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih2YWx1ZTIuaWQpe1xyXG5cdFx0XHRcdGRhdGEuaWQ9dmFsdWUyLmlkXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHJlcz1hd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVEYXlQbGFuJyxcclxuXHRcdFx0XHRkYXRhXHJcblx0XHRcdH0pXHJcblx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0dGhpcy5nZXREYXlQbGFuKClcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTon5pu05paw5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vIOabtOaWsOaXpeebruagh+WujOaIkOeKtuaAgVxyXG5cdFx0YXN5bmMgaGFuZGxlQ29tcGxldGUyKHZhbHVlKXtcclxuXHRcdFx0bGV0IGRhdGE9e1xyXG5cdFx0XHRcdGNvbXBsZXRlOiF2YWx1ZS5jb21wbGV0ZSxcclxuXHRcdFx0XHRjb250ZW50OnZhbHVlLmNvbnRlbnQsXHJcblx0XHRcdFx0cGFyZW50VHlwZTp2YWx1ZS5wYXJlbnRUeXBlLFxyXG5cdFx0XHRcdHR5cGU6dmFsdWUudHlwZSxcclxuXHRcdFx0XHR0aW1lOnZhbHVlLnRpbWUsXHJcblx0XHRcdFx0dXNlcklkOnVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyksXHJcblx0XHRcdFx0d2VlazordGhpcy53ZWVrLFxyXG5cdFx0XHRcdHllYXI6K3RoaXMueWVhcixcclxuXHRcdFx0XHR3aGljaERheTordGhpcy53aGljaERheVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHZhbHVlLmlkKXtcclxuXHRcdFx0XHRkYXRhLmlkPXZhbHVlLmlkXHJcblx0XHRcdFx0bGV0IHJlcz1hd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRcdG1ldGhvZDoncG9zdCcsXHJcblx0XHRcdFx0XHR1cmw6Jy9hbm9ueW1vdXMvdXBkYXRlRGF5UGxhbicsXHJcblx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0RGF5UGxhbigpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Ly8g5pu05paw5pel5YaF5a65XHJcblx0XHRhc3luYyBoYW5kbGVVcGRhdGVDb250ZW50KGUsdmFsdWUyKXtcclxuXHRcdFx0bGV0IHt2YWx1ZX09ZS5kZXRhaWxcclxuXHRcdFx0bGV0IGRhdGE9e1xyXG5cdFx0XHRcdGNvbXBsZXRlOnZhbHVlMi5jb21wbGV0ZSxcclxuXHRcdFx0XHRjb250ZW50OnZhbHVlLFxyXG5cdFx0XHRcdHBhcmVudFR5cGU6dmFsdWUyLnBhcmVudFR5cGUsXHJcblx0XHRcdFx0dHlwZTp2YWx1ZTIudHlwZSxcclxuXHRcdFx0XHR0aW1lOnZhbHVlMi50aW1lLFxyXG5cdFx0XHRcdHVzZXJJZDp1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpLFxyXG5cdFx0XHRcdHdlZWs6K3RoaXMud2VlayxcclxuXHRcdFx0XHR5ZWFyOit0aGlzLnllYXIsXHJcblx0XHRcdFx0d2hpY2hEYXk6K3RoaXMud2hpY2hEYXlcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih2YWx1ZTIuaWQpe1xyXG5cdFx0XHRcdGRhdGEuaWQ9dmFsdWUyLmlkXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHJlcz1hd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVEYXlQbGFuJyxcclxuXHRcdFx0XHRkYXRhXHJcblx0XHRcdH0pXHJcblx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0dGhpcy5nZXREYXlQbGFuKClcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTon5pu05paw5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vIOaXpeiuoeWIkumAieaLqeaXtumXtFxyXG5cdFx0YXN5bmMgYmluZERhdGVDaGFuZ2UoZSx2YWx1ZTIpe1xyXG5cdFx0XHRsZXQge3ZhbHVlfT1lLmRldGFpbFxyXG5cdFx0XHRsZXQgZGF0YT17XHJcblx0XHRcdFx0Y29tcGxldGU6dmFsdWUyLmNvbXBsZXRlLFxyXG5cdFx0XHRcdGNvbnRlbnQ6dmFsdWUyLmNvbnRlbnQsXHJcblx0XHRcdFx0cGFyZW50VHlwZTp2YWx1ZTIucGFyZW50VHlwZSxcclxuXHRcdFx0XHR0eXBlOnZhbHVlMi50eXBlLFxyXG5cdFx0XHRcdHRpbWU6dmFsdWUsXHJcblx0XHRcdFx0dXNlcklkOnVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyksXHJcblx0XHRcdFx0d2VlazordGhpcy53ZWVrLFxyXG5cdFx0XHRcdHllYXI6K3RoaXMueWVhcixcclxuXHRcdFx0XHR3aGljaERheTordGhpcy53aGljaERheVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHZhbHVlMi5pZCl7XHJcblx0XHRcdFx0ZGF0YS5pZD12YWx1ZTIuaWRcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdG1ldGhvZDoncG9zdCcsXHJcblx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3VwZGF0ZURheVBsYW4nLFxyXG5cdFx0XHRcdGRhdGFcclxuXHRcdFx0fSlcclxuXHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHR0aGlzLmdldERheVBsYW4oKVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOifmm7TmlrDmlbDmja7lpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Ly8g5pu05paw5pel6K6h5YiS5YiG57G7XHJcblx0XHRhc3luYyBoYW5kbGVDaGFuZ2VUeXBlKGUsdmFsdWUyKXtcclxuXHRcdFx0bGV0IHt2YWx1ZX09ZS5kZXRhaWxcclxuXHRcdFx0IGxldCBkYXRhPXtcclxuXHRcdFx0XHRjb21wbGV0ZTp2YWx1ZTIuY29tcGxldGUsXHJcblx0XHRcdFx0Y29udGVudDp2YWx1ZTIuY29udGVudCxcclxuXHRcdFx0XHRwYXJlbnRUeXBlOnZhbHVlMi5wYXJlbnRUeXBlLFxyXG5cdFx0XHRcdHR5cGU6dmFsdWUsXHJcblx0XHRcdFx0dGltZTp2YWx1ZTIudGltZSxcclxuXHRcdFx0XHR1c2VySWQ6dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKSxcclxuXHRcdFx0XHR3ZWVrOit0aGlzLndlZWssXHJcblx0XHRcdFx0eWVhcjordGhpcy55ZWFyLFxyXG5cdFx0XHRcdHdoaWNoRGF5Oit0aGlzLndoaWNoRGF5XHJcblx0XHRcdH1cclxuXHRcdFx0aWYodmFsdWUyLmlkKXtcclxuXHRcdFx0XHRkYXRhLmlkPXZhbHVlMi5pZFxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCByZXM9YXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0bWV0aG9kOidwb3N0JyxcclxuXHRcdFx0XHR1cmw6Jy9hbm9ueW1vdXMvdXBkYXRlRGF5UGxhbicsXHJcblx0XHRcdFx0ZGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG5cdFx0XHRcdHRoaXMuZ2V0RGF5UGxhbigpXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6J+abtOaWsOaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDojrflj5bml6XorqHliJLmlbDmja5cclxuXHRcdGFzeW5jIGdldERheVBsYW4oKXtcclxuXHRcdFx0dGhpcy51cGRhdGUzPWZhbHNlXHJcblx0XHRcdGxldCBkYXRhPXtcclxuXHRcdFx0XHR1c2VySWQ6dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKSxcclxuXHRcdFx0XHR3ZWVrOit0aGlzLndlZWssXHJcblx0XHRcdFx0d2hpY2hEYXk6K3RoaXMud2hpY2hEYXksXHJcblx0XHRcdFx0eWVhcjordGhpcy55ZWFyXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHJlcz1hd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdHVybDonL2Fub255bW91cy9maW5kQWltc0J5Q29uZGl0aW9uRm9yRGF5UGxhbicsXHJcblx0XHRcdFx0ZGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCYmcmVzLmRhdGEucmVzdWx0KXtcclxuXHRcdFx0XHRsZXQge3Jlc3VsdH09cmVzLmRhdGFcclxuXHRcdFx0XHQvLyDmlbDmja7liJ3lp4vljJZcclxuXHRcdFx0XHR0aGlzLnRvZGF5VGhpbmdzPVtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW5kZXg6MSxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0XHRcdHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0XHRcdHR5cGU6JycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGluZGV4OjIsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHR0aW1lOicnLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdFx0XHR0eXBlOicnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OicnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbmRleDozLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHRcdFx0dGltZTonJyxcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHRcdFx0dHlwZTonJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW5kZXg6NCxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0XHRcdHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0XHRcdHR5cGU6JycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGluZGV4OjUsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHR0aW1lOicnLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdFx0XHR0eXBlOicnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OicnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbmRleDo2LFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHRcdFx0dGltZTonJyxcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHRcdFx0dHlwZTonJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW5kZXg6NyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0XHRcdHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0XHRcdHR5cGU6JycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGluZGV4OjgsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHR0aW1lOicnLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdFx0XHR0eXBlOicnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OicnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbmRleDo5LFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHRcdFx0dGltZTonJyxcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHRcdFx0dHlwZTonJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW5kZXg6MTAsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHR0aW1lOicnLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdFx0XHR0eXBlOicnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OicnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbmRleDoxMSxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0XHRcdHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0XHRcdHR5cGU6JycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGluZGV4OjEyLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHRcdFx0dGltZTonJyxcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHRcdFx0dHlwZTonJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW5kZXg6MTMsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHR0aW1lOicnLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdFx0XHR0eXBlOicnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OicnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbmRleDoxNCxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0XHRcdHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0XHRcdHR5cGU6JycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGluZGV4OjE1LFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTpmYWxzZSxcclxuXHRcdFx0XHRcdFx0dGltZTonJyxcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5LqL6aG5JyxcclxuXHRcdFx0XHRcdFx0dHlwZTonJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW5kZXg6MTYsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHR0aW1lOicnLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnRUeXBlOifku4rml6XkuovpobknLFxyXG5cdFx0XHRcdFx0XHR0eXBlOicnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OicnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbmRleDoxNyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0XHRcdHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0XHRcdHR5cGU6JycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHRpbmRleDoxOCxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRpbWU6JycsXHJcblx0XHRcdFx0XHRcdHBhcmVudFR5cGU6J+S7iuaXpeS6i+mhuScsXHJcblx0XHRcdFx0XHRcdHR5cGU6JycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdHRoaXMudG9kYXlTdW1tYXJ5PVtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFyZW50VHlwZTon5LuK5pel5oC757uTJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDonJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XHRsZXQgaj0wXHJcblx0XHRcdFx0bGV0IGs9MFxyXG5cdFx0XHRcdFx0cmVzdWx0LmZvckVhY2goKHYsaSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZih2LnBhcmVudFR5cGU9PT0n5LuK5pel5LqL6aG5Jyl7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50b2RheVRoaW5nc1tqXT12ICBcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRvZGF5VGhpbmdzLmxlbmd0aD0xOFxyXG5cdFx0XHRcdFx0XHRcdGorK1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmKHYucGFyZW50VHlwZT09PSfku4rml6XmgLvnu5MnKXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRvZGF5U3VtbWFyeVtrXT12XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50b2RheVN1bW1hcnkubGVuZ3RoPTE4XHJcblx0XHRcdFx0XHRcdFx0aysrXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOifojrflj5bml6XorqHliJLlpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnVwZGF0ZTM9dHJ1ZVxyXG5cdFx0fSxcclxuXHRcdFx0XHJcblx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWRqC3pg6jliIbmlbDmja4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHRcdC8vIOS4i+S4gOWRqFxyXG5cdFx0aGFuZGxlTmV4dFdlZWsoKXtcclxuXHRcdFx0XHRpZiAodGhpcy53ZWVrICsgMSA9PT0gNTMpIHtcclxuXHRcdFx0XHRcdHRoaXMud2VlayA9IDFcclxuXHRcdFx0XHRcdHRoaXMueWVhcisrXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLndlZWsrK1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnRpbWU9dGhpcy50aW1lKzYwKjYwKjI0KjcqMTAwMFxyXG5cdFx0XHRcdGlmKHRoaXMuY2hhbmdlSW5kZXg9PTApe1xyXG5cdFx0XHRcdFx0dGhpcy5nZXRXZWVrbHlUYXJnZXQoKVxyXG5cdFx0XHRcdFx0dGhpcy5nZXRXZWVrbHlTdW1tYXJ5KClcclxuXHRcdFx0XHRcdHRoaXMuZ2V0U2hhcmVQbGFuKClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0RGF5UGxhbigpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuZ2V0RGF0ZU5vdygpXHJcblx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdC8vIOS4iuS4gOWRqFxyXG5cdFx0aGFuZGxlTGFzdFdlZWsoKXtcclxuXHRcdFx0aWYgKHRoaXMud2VlayAtIDEgPT09IDApIHtcclxuXHRcdFx0XHR0aGlzLndlZWsgPSA1MlxyXG5cdFx0XHRcdHRoaXMueWVhci0tXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMud2Vlay0tXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50aW1lPXRoaXMudGltZS02MCo2MCoyNCo3KjEwMDBcclxuXHRcdFx0aWYodGhpcy5jaGFuZ2VJbmRleD09MCl7XHJcblx0XHRcdFx0dGhpcy5nZXRXZWVrbHlUYXJnZXQoKVxyXG5cdFx0XHRcdHRoaXMuZ2V0V2Vla2x5U3VtbWFyeSgpXHJcblx0XHRcdFx0dGhpcy5nZXRTaGFyZVBsYW4oKVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLmdldERheVBsYW4oKVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuZ2V0RGF0ZU5vdygpXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDliIbkuqvmlbDmja7mm7TmlrBcclxuXHRcdGFzeW5jIGhhbmRsZVNoYXJlKGUsdmFsdWUyKXtcclxuXHRcdFx0bGV0IHt2YWx1ZX09ZS5kZXRhaWxcclxuXHRcdFx0bGV0IGRhdGE9e1xyXG5cdFx0XHRcdGNvbnRlbnQ6dmFsdWUsXHJcblx0XHRcdFx0dHlwZTp2YWx1ZTIudHlwZSxcclxuXHRcdFx0XHR0aW1lU2lnbjorKCcnICsgdGhpcy55ZWFyICsgdGhpcy53ZWVrKSxcclxuXHRcdFx0XHR1c2VyaWQ6dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHZhbHVlMi5pZCl7XHJcblx0XHRcdFx0ZGF0YS5pZD12YWx1ZTIuaWRcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmVzPSBhd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVTaGFyZScsXHJcblx0XHRcdFx0ZGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG5cdFx0XHRcdHRoaXMuZ2V0U2hhcmVQbGFuKClcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTon5pu05paw5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vIOWFtuS7luebruagh+abtOaWsFxyXG5cdFx0YXN5bmMgaGFuZGxlT3RoZXJDb21wbGV0ZSh2YWx1ZSl7XHJcblx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdGNvbXBsZXRlOiAhdmFsdWUuY29tcGxldGUsXHJcblx0XHRcdFx0Y29udGVudDogdmFsdWUuY29udGVudCxcclxuXHRcdFx0XHR0aW1lU2lnbjogKygnJyArIHRoaXMueWVhciArIHRoaXMud2VlayksXHJcblx0XHRcdFx0dHlwZTogdmFsdWUudHlwZSxcclxuXHRcdFx0XHR1c2VyaWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJyksXHJcblx0XHRcdFx0aWQ6dmFsdWUuaWRcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyDlv4XpobvmmK/ph4zpnaLlt7Lnu4/loavlhpnkuoblhoXlrrnnmoTmiY3lj6/ku6XmiZPli75cclxuXHRcdFx0aWYodmFsdWUuaWQpe1xyXG5cdFx0XHRcdGxldCByZXMgPSBhd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsOiAnL2Fub255bW91cy91cGRhdGVXZWVrUGxhbicsXHJcblx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR0aGlzLndlZWtseVBsYW4uZm9yRWFjaCh2ID0+IHtcclxuXHRcdFx0XHRcdGlmICh2LmlkID09PSB2YWx1ZS5pZCkge1xyXG5cdFx0XHRcdFx0XHR2LmNvbXBsZXRlID0gIXYuY29tcGxldGVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0XHR0aGlzLmdldFdlZWtseVRhcmdldCgpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFx0XHJcblx0XHQvLyDlhbbku5bnm67moIfmm7TmlrBcclxuXHRcdGFzeW5jIGhhbmRsZU90aGVyUGxhbihlLHZhbHVlMil7XHJcblx0XHRcdGxldCB7dmFsdWV9PWUuZGV0YWlsXHJcblx0XHRcdGxldCBkYXRhPXtcclxuXHRcdFx0XHRjb21wbGV0ZTogdmFsdWUyLmNvbXBsZXRlLFxyXG5cdFx0XHRcdGNvbnRlbnQ6IHZhbHVlLFxyXG5cdFx0XHRcdHRpbWVTaWduOiArKCcnICsgdGhpcy55ZWFyICsgdGhpcy53ZWVrKSxcclxuXHRcdFx0XHR0eXBlOiB2YWx1ZTIudHlwZSxcclxuXHRcdFx0XHR1c2VyaWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJylcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih2YWx1ZTIuaWQpe1xyXG5cdFx0XHRcdGRhdGEuaWQ9dmFsdWUyLmlkXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHJlcz1hd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRtZXRob2Q6J3Bvc3QnLFxyXG5cdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVXZWVrUGxhbicsXHJcblx0XHRcdFx0ZGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YS5tZXNzYWdlKVxyXG5cdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG5cdFx0XHRcdHRoaXMuZ2V0V2Vla2x5VGFyZ2V0KClcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTon5pu05paw5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vIOacrOWRqOebruagh+WujOaIkOeKtuaAgeabtOaWsFxyXG5cdFx0YXN5bmMgaGFuZGxlQ29tcGxldGUodmFsdWUpe1xyXG5cdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRjb21wbGV0ZTogIXZhbHVlLmNvbXBsZXRlLFxyXG5cdFx0XHRcdGNvbnRlbnQ6IHZhbHVlLmNvbnRlbnQsXHJcblx0XHRcdFx0dGltZVNpZ246ICsoJycgKyB0aGlzLnllYXIgKyB0aGlzLndlZWspLFxyXG5cdFx0XHRcdHR5cGU6IHZhbHVlLnR5cGUsXHJcblx0XHRcdFx0dXNlcmlkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpLFxyXG5cdFx0XHRcdGlkOnZhbHVlLmlkXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8g5b+F6aG75piv6YeM6Z2i5bey57uP5aGr5YaZ5LqG5YaF5a6555qE5omN5Y+v5Lul5omT5Yu+XHJcblx0XHRcdGlmKHZhbHVlLmlkKXtcclxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvdXBkYXRlV2Vla1BsYW4nLFxyXG5cdFx0XHRcdFx0ZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0V2Vla2x5VGFyZ2V0KClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTon5pu05paw5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHRcdFxyXG5cdFx0Ly8g5pys5ZGo55uu5qCH5pu05pawXHJcblx0XHRhc3luYyBoYW5kbGVVcGRhdGVQbGFuKGUsdmFsdWUyKXtcclxuXHRcdFx0bGV0IHt2YWx1ZX09ZS5kZXRhaWxcclxuXHRcdFx0bGV0IGRhdGE9e1xyXG5cdFx0XHRcdGNvbXBsZXRlOiB2YWx1ZTIuY29tcGxldGUsXHJcblx0XHRcdFx0Y29udGVudDogdmFsdWUsXHJcblx0XHRcdFx0dGltZVNpZ246ICsoJycgKyB0aGlzLnllYXIgKyB0aGlzLndlZWspLFxyXG5cdFx0XHRcdHR5cGU6IHZhbHVlMi50eXBlLFxyXG5cdFx0XHRcdHVzZXJpZDogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHZhbHVlMi5pZCl7XHJcblx0XHRcdFx0ZGF0YS5pZD12YWx1ZTIuaWRcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdG1ldGhvZDoncG9zdCcsXHJcblx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3VwZGF0ZVdlZWtQbGFuJyxcclxuXHRcdFx0XHRkYXRhXHJcblx0XHRcdH0pXHJcblx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0dGhpcy5nZXRXZWVrbHlUYXJnZXQoKVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOifmm7TmlrDmlbDmja7lpLHotKUs6K+36YeN6K+VJyxcclxuXHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFx0XHJcblx0XHQvLyDkuIrlkajmgLvnu5Mt5pys5ZGo5Yib5paw5LiO5pS26I63XHJcblx0XHRhc3luYyBoYW5kbGVIYXJ2ZXN0KGUsdmFsdWUyKXtcclxuXHRcdFx0bGV0IHt2YWx1ZX0gPSBlLmRldGFpbFxyXG5cdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0ICBjb250ZW50OiB2YWx1ZSxcclxuXHRcdFx0ICB0aW1lU2lnbjogKygnJyArIHRoaXMueWVhciArIHRoaXMud2VlayksXHJcblx0XHRcdCAgdHlwZTogdmFsdWUyLnR5cGUsXHJcblx0XHRcdCAgeWVhcjogdGhpcy55ZWFyLFxyXG5cdFx0XHQgIHVzZXJpZDogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHZhbHVlMi5pZCl7XHJcblx0XHRcdFx0ZGF0YS5pZD12YWx1ZTIuaWRcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvdXBkYXRlU3VtbWFyaXplJyxcclxuXHRcdFx0XHRkYXRhXHJcblx0XHRcdH0pXHJcblx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0dGhpcy5nZXRXZWVrbHlTdW1tYXJ5KClcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTon5pu05paw5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0Ly8g5LiK5ZGo5oC757uTLeWFi+acjemanOeijeeahOWvueetluWSjOaWueazlVxyXG5cdFx0YXN5bmMgaGFuZGxlU2VydmljZShlLHZhbHVlMil7XHJcblx0XHRcdGxldCB7dmFsdWV9ID0gZS5kZXRhaWxcclxuXHRcdFx0bGV0IGRhdGEgPSB7XG4gICAgICAgIGNvbnRlbnQ6IHZhbHVlLFxuICAgICAgICB0aW1lU2lnbjogKygnJyArIHRoaXMueWVhciArIHRoaXMud2VlayksXG4gICAgICAgIHR5cGU6IHZhbHVlMi50eXBlLFxuICAgICAgICB5ZWFyOiB0aGlzLnllYXIsXG4gICAgICAgIHVzZXJpZDogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKVxuICAgICAgfVxyXG5cdFx0XHRpZih2YWx1ZTIuaWQpe1xyXG5cdFx0XHRcdGRhdGEuaWQ9dmFsdWUyLmlkXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHJlcz1hd2FpdCBteUF4aW9zKHtcclxuXHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHR1cmw6ICcvYW5vbnltb3VzL3VwZGF0ZVN1bW1hcml6ZScsXHJcblx0XHRcdFx0ZGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG5cdFx0XHRcdHRoaXMuZ2V0V2Vla2x5U3VtbWFyeSgpXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6J+abtOaWsOaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdC8vIOS4iuWRqOaAu+e7ky3mnKrlrozmiJDnm67moIfnmoTljp/lm6Dlj4rpmpznoo1cclxuXHRcdGFzeW5jIGhhbmRsZVJlYXNvbihlLHZhbHVlMil7XHJcblx0XHRcdGxldCB7dmFsdWV9ID1lLmRldGFpbFxyXG5cdFx0XHRsZXQgZGF0YSA9IHtcbiAgICAgICAgY29udGVudDogdmFsdWUsXG4gICAgICAgIHRpbWVTaWduOiArKCcnICsgdGhpcy55ZWFyICsgdGhpcy53ZWVrKSxcbiAgICAgICAgdHlwZTogdmFsdWUyLnR5cGUsXG4gICAgICAgIHllYXI6IHRoaXMueWVhcixcbiAgICAgICAgdXNlcmlkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpXG4gICAgICB9XHJcblx0XHRcdGlmKHZhbHVlMi5pZCl7XHJcblx0XHRcdFx0ZGF0YS5pZD12YWx1ZTIuaWRcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvdXBkYXRlU3VtbWFyaXplJyxcclxuXHRcdFx0XHRkYXRhXHJcblx0XHRcdH0pXHJcblx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0dGhpcy5nZXRXZWVrbHlTdW1tYXJ5KClcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTon5pu05paw5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOjUwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0Ly8g5LiK5ZGo5oC757uTLeebruagh+WujOaIkOaDheWGtVxyXG5cdFx0YXN5bmMgaGFuZGxlV2Vla1BlcmZvcm1hbmNlKGUsdmFsdWUyKXtcclxuXHRcdFx0XHRsZXQge3ZhbHVlfSA9IGUuZGV0YWlsXHJcblx0XHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHRjb250ZW50OiB2YWx1ZSxcclxuXHRcdFx0XHRcdHRpbWVTaWduOiArKCcnICsgdGhpcy55ZWFyICsgdGhpcy53ZWVrKSxcclxuXHRcdFx0XHRcdHR5cGU6IHZhbHVlMi50eXBlLFxyXG5cdFx0XHRcdFx0eWVhcjogdGhpcy55ZWFyLFxyXG5cdFx0XHRcdFx0dXNlcmlkOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJRCcpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKHZhbHVlMi5pZCl7XHJcblx0XHRcdFx0XHRkYXRhLmlkPXZhbHVlMi5pZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdFx0bWV0aG9kOidwb3N0JyxcclxuXHRcdFx0XHRcdHVybDonL2Fub255bW91cy91cGRhdGVTdW1tYXJpemUnLFxyXG5cdFx0XHRcdFx0ZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0V2Vla2x5U3VtbWFyeSgpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+abtOaWsOaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246NTAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vIOaXtumXtOi9rOWMluS4uuWRqOaVsFxyXG5cdFx0Z2V0V2VlaygpIHtcclxuXHRcdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnRpbWUpO1xyXG5cdFx0XHRsZXQgYmVnaW5EYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuXHRcdFx0bGV0IHdlZWsgPSBNYXRoLmNlaWwoKHBhcnNlSW50KChkYXRlIC0gYmVnaW5EYXRlKSAvICgyNCAqIDYwICogNjAgKiAxMDAwKSkgKyAxICsgYmVnaW5EYXRlLmdldERheSgpKSAvIDcpO1xyXG5cdFx0XHR0aGlzLndlZWs9d2Vla1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Ly8g6I635Y+W5YiG5Lqr5pWw5o2uXHJcblx0XHRhc3luYyBnZXRTaGFyZVBsYW4oKXtcclxuXHRcdFx0dGhpcy51cGRhdGUyPWZhbHNlXHJcblx0XHRcdGxldCBkYXRhPXtcclxuXHRcdFx0XHR0aW1lU2lnbjogKygnJyArIHRoaXMueWVhciArIHRoaXMud2VlayksXHJcblx0XHRcdFx0dXNlcmlkOnVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJylcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdG1ldGhvZDoncG9zdCcsXHJcblx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3F1ZXJ5U2hhcmUnLFxyXG5cdFx0XHRcdGRhdGFcclxuXHRcdFx0fSlcclxuXHRcdFx0aWYocmVzLmRhdGEuc3RhdHVzQ29kZT09MjAwJiZyZXMuZGF0YS5yZXN1bHQpe1xyXG5cdFx0XHRcdGxldCB7cmVzdWx0fT1yZXMuZGF0YVxyXG5cdFx0XHRcdHRoaXMuc2hhcmVBcnJheT1bXHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICB7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgIHR5cGU6JzEnLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICBjb250ZW50OicnXHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICB0eXBlOicyJyxcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgY29udGVudDonJ1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgfSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgdHlwZTonMycsXHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbnRlbnQ6JydcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgIH0sXHJcblx0XHRcdFx0XHRcdFx0XHQgICAgXSxcclxuXHRcdFx0XHRyZXN1bHQuZm9yRWFjaCh2PT57XHJcblx0XHRcdFx0XHR0aGlzLnNoYXJlQXJyYXkuZm9yRWFjaCgodmFsdWUsaW5kZXgpPT57XHJcblx0XHRcdFx0XHRcdGlmKHYudHlwZT09PXZhbHVlLnR5cGUpe1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hhcmVBcnJheVtpbmRleF09dlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6J+iOt+WPluWIhuS6q+aVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudXBkYXRlMj10cnVlXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDojrflj5blkajnm67moIfmlbDmja5cclxuXHRcdGFzeW5jIGdldFdlZWtseVRhcmdldCgpe1xyXG5cdFx0XHR0aGlzLnVwZGF0ZTE9ZmFsc2VcclxuXHRcdFx0bGV0IGRhdGE9e1xyXG5cdFx0XHRcdHRpbWVTaWduOiArKCcnICsgdGhpcy55ZWFyICsgdGhpcy53ZWVrKSxcclxuXHRcdFx0XHR1c2VyaWQ6IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcklEJylcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmVzPWF3YWl0IG15QXhpb3Moe1xyXG5cdFx0XHRcdG1ldGhvZDoncG9zdCcsXHJcblx0XHRcdFx0dXJsOicvYW5vbnltb3VzL3F1ZXJ5V2Vla1BsYW4nLFxyXG5cdFx0XHRcdGRhdGFcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRpZihyZXMuZGF0YS5zdGF0dXNDb2RlPT0yMDAmJnJlcy5kYXRhLnJlc3VsdCl7XHJcblx0XHRcdFx0Ly8g5Yid5aeL5YyW5pWw5o2uXHJcblx0XHRcdFx0dGhpcy53ZWVrbHlQbGFuPSBbe1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOebruaghycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICfmnKzlkajnm67moIcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo55uu5qCHJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHR0aGlzLm90aGVyUGxhbj0gW3tcclxuXHRcdFx0XHRcdFx0dHlwZTogJ+WtpuS5oOiuoeWIkicsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICflgaXlurforqHliJInLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAn5pys5ZGo5Y+N55yBJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XHRsZXQge3Jlc3VsdH0gPXJlcy5kYXRhXHJcblx0XHRcdFx0cmVzdWx0LmZvckVhY2goKHYsIGkpID0+IHtcclxuXHRcdFx0XHRcdGlmICh2LnR5cGUgPT0gJ+acrOWRqOebruaghycpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy53ZWVrbHlQbGFuW2ldID0gdlxyXG5cdFx0XHRcdFx0XHR0aGlzLndlZWtseVBsYW4ubGVuZ3RoID0gMThcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMub3RoZXJQbGFuLmZvckVhY2goKHZhbHVlLGluZGV4KT0+e1xyXG5cdFx0XHRcdFx0XHRpZih2YWx1ZS50eXBlPT12LnR5cGUpe1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMub3RoZXJQbGFuW2luZGV4XT12XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6J+iOt+WPluaVsOaNruWksei0pSzor7fph43or5UnLFxyXG5cdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudXBkYXRlMT10cnVlXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDojrflj5blkajmgLvnu5PmlbDmja5cclxuXHRcdGFzeW5jIGdldFdlZWtseVN1bW1hcnkoKSB7XHJcblx0XHRcdFx0dGhpcy51cGRhdGU9ZmFsc2VcclxuXHRcdFx0XHQvLyDojrflj5bmgLvnu5PmlbDmja5cclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdHVzZXJpZDogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySUQnKSxcclxuXHRcdFx0XHRcdHRpbWVTaWduOiArKCcnICsgdGhpcy55ZWFyICsgdGhpcy53ZWVrKSxcclxuXHRcdFx0XHRcdHllYXI6IHRoaXMueWVhclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgbXlBeGlvcyh7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHRcdHVybDogJy9hbm9ueW1vdXMvcXVlcnlTdW1tYXJpemUnLFxyXG5cdFx0XHRcdFx0ZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYgKHJlcy5kYXRhLnN0YXR1c0NvZGU9PTIwMCYmcmVzLmRhdGEucmVzdWx0KSB7XHJcblx0XHRcdFx0XHRsZXR7cmVzdWx0fT1yZXMuZGF0YVxyXG5cdFx0XHRcdFx0dGhpcy53ZWVrUGVyZm9ybWFuY2UgPSBbe1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ+ebruagh+WujOaIkOaDheWGtScsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAn55uu5qCH5a6M5oiQ5oOF5Ya1JyxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICfnm67moIflrozmiJDmg4XlhrUnLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ+ebruagh+WujOaIkOaDheWGtScsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAn55uu5qCH5a6M5oiQ5oOF5Ya1JyxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHRoaXMucmVhc29uID0gW3tcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+acquWujOaIkOebruagh+eahOWOn+WboOWPiumanOeijSdcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+acquWujOaIkOebruagh+eahOWOn+WboOWPiumanOeijSdcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+acquWujOaIkOebruagh+eahOWOn+WboOWPiumanOeijSdcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRcdHRoaXMuc2VydmljZSA9IFt7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflhYvmnI3pmpznoo3nmoTlr7nnrZblkozmlrnms5UnXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflhYvmnI3pmpznoo3nmoTlr7nnrZblkozmlrnms5UnXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICflhYvmnI3pmpznoo3nmoTlr7nnrZblkozmlrnms5UnXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0dGhpcy5oYXJ2ZXN0ID0gW3tcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOWIm+aWsOS4juaUtuiOtydcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOWIm+aWsOS4juaUtuiOtydcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ+acrOWRqOWIm+aWsOS4juaUtuiOtydcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdGxldCBqPTA7XHJcblx0XHRcdFx0XHRcdGxldCBrPTA7XHJcblx0XHRcdFx0XHRcdGxldCBsPTA7XHJcblx0XHRcdFx0XHRcdGxldCBnPTA7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0W2ldLnR5cGUgPT0gJ+ebruagh+WujOaIkOaDheWGtScpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLndlZWtQZXJmb3JtYW5jZVtqXT1yZXN1bHRbaV1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMud2Vla1BlcmZvcm1hbmNlLmxlbmd0aCA9IDZcclxuXHRcdFx0XHRcdFx0XHRcdGorK1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmIChyZXN1bHRbaV0udHlwZSA9PSAn5pyq5a6M5oiQ55uu5qCH55qE5Y6f5Zug5Y+K6Zqc56KNJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucmVhc29uW2tdPXJlc3VsdFtpXVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMucmVhc29uLmxlbmd0aCA9IDNcclxuXHRcdFx0XHRcdFx0XHRrKytcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0W2ldLnR5cGUgPT0gJ+WFi+acjemanOeijeeahOWvueetluWSjOaWueazlScpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNlcnZpY2VbbF09cmVzdWx0W2ldXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNlcnZpY2UubGVuZ3RoID0gM1xyXG5cdFx0XHRcdFx0XHRcdFx0bCsrXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdFtpXS50eXBlID09ICfmnKzlkajliJvmlrDkuI7mlLbojrcnKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5oYXJ2ZXN0W2ddPXJlc3VsdFtpXVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5oYXJ2ZXN0Lmxlbmd0aCA9IDNcclxuXHRcdFx0XHRcdFx0XHRcdGcrK1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTon6I635Y+W5pWw5o2u5aSx6LSlLOivt+mHjeivlScsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlPXRydWVcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdFx0dGhpcy5nZXRXZWVrKClcclxuXHRcdFx0XHR0aGlzLmdldFdlZWtseVN1bW1hcnkoKVxyXG5cdFx0XHRcdHRoaXMuZ2V0V2Vla2x5VGFyZ2V0KClcclxuXHRcdFx0XHR0aGlzLmdldFNoYXJlUGxhbigpXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxyXG5wYWdle1xuICBiYWNrZ3JvdW5kOiAjRUZGM0Y2O1xufVxuLnRhYmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDUwcnB4O1xuICBwYWRkaW5nOiA3cnB4IDE0cnB4O1xuICBmb250LXNpemU6IDE1cnB4O1xuICAud2Vla1RhYntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMzZycHg7XG4gICAgd2lkdGg6IDI1MnJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cnB4O1xuICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgIGJhY2tncm91bmQ6cmdiYSgyNDgsMjQ4LDI0OCwxKTtcbiAgICAmPnZpZXd7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgICAgIC5vbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMkVDRTk0O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gIH1cbiAgLndlZWstY2hhbmdle1xuICAgIHdpZHRoOiAzNzhycHg7XG4gICAgaGVpZ2h0OiAzNnJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVycHg7XG4gICAgLnRhYiB7IFxuICAgICAgZmxleDogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAmOm50aC1jaGlsZCgyKXtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgICAgY29sb3I6ICMyRUNFOTQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxufVxuLndlZWt7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAwIDE0cnB4O1xuICAmLWxlZnR7XG4gICAgd2lkdGg6IDIyMXJweDtcbiAgICBib3JkZXI6IDFycHggc29saWQgIzFDNUU1NTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICYtaXRlbXtcbiAgICAgIGhlaWdodDogNTRycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICY6bnRoLWNoaWxkKDEpLCY6bnRoLWNoaWxkKDIpe1xuICAgICAgICBoZWlnaHQ6IDQwcnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjI3MDVEO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmb250LXNpemU6IDEzcnB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDkpLCY6bnRoLWNoaWxkKDEzKSwmOm50aC1jaGlsZCgxNyl7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjcwNUQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNycHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICBib3JkZXItYm90dG9tOiAwcnB4O1xuICAgICAgfVxuICAgICAgLm15dGV4dHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLXJpZ2h0e1xuICAgIHdpZHRoOiA0OTFycHg7XG4gICAgYm9yZGVyOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAmLXRpdGxle1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogODBycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjI3MDVEO1xuICAgICAgZm9udC1zaXplOiAxM3JweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgLmxlZnR7XG4gICAgICAgIHdpZHRoOiAzNnJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAucmlnaHR7XG4gICAgICAgIHdpZHRoOiA5MHJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY2VudGVye1xuICAgICAgICB3aWR0aDogMzY1cnB4O1xuICAgICAgICBmb250LXNpemU6IDE1cnB4O1xuICAgICAgICBib3JkZXItbGVmdDogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLmljb257XG4gICAgICAgICAgbWFyZ2luOiAwIDM2cnB4IDAgMjZycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9ue1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi1jb250ZW50e1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogNTRycHg7XG4gICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIC5sZWZ0LC5yaWdodCwuY2VudGVye1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDBycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5sZWZ0e1xuICAgICAgICB3aWR0aDogMzZycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNnJweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAgIH1cbiAgICAgIC5yaWdodHtcbiAgICAgICAgd2lkdGg6IDkwcnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgICAgfVxuICAgICAgLmNlbnRlcntcbiAgICAgICAgd2lkdGg6IDM2NXJweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgICAgIGJvcmRlci10b3A6IDBycHg7XG4gICAgICAgIC5teXRleHR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gXG59XG4uZm9vdGVye1xuICBoZWlnaHQ6IDI0MXJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDlycHggMTRycHggMDtcbiAgJi1sZWZ0e1xuICAgIHdpZHRoOiAyMjJycHg7XG4gICAgYmFja2dyb3VuZDogIzJFQ0U5NDtcbiAgICBmb250LXNpemU6IDQ5cnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAmLXJpZ2h0e1xuICAgIHdpZHRoOiA0OTFycHg7XG4gICAgYm9yZGVyOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAmLXRpdGxle1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogNzlycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjI3MDVEO1xuICAgICAgZm9udC1zaXplOiAxM3JweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgLnRpdGxlLWxlZnR7XG4gICAgICAgIHdpZHRoOiAxMjZycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnRpdGxlLXJpZ2h0e1xuICAgICAgICB3aWR0aDogMjMxcnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMnJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi1jb250ZW50e1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogNTRycHg7XG4gICAgICAuY29udGVudC1sZWZ0e1xuICAgICAgICB3aWR0aDogMTI2cnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgICAgICBmb250LXNpemU6IDEzcnB4O1xuICAgICAgICBjb2xvcjogIzFDNUU1NTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50LWNlbnRlciwuY29udGVudC1yaWdodHtcbiAgICAgICAgd2lkdGg6IDE4MnJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgICAgICBib3JkZXItbGVmdDogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgICAgICAmPnZpZXd7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubXl0ZXh0e1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cclxuLnNoYXJle1xyXG5cdG1hcmdpbjogOXJweCAxNHJweCAwO1xyXG5cdHdpZHRoOiA3MjJycHg7XHJcblx0Ym9yZGVyOiAxcnB4IHNvbGlkICMxQzVFNTU7XHJcblx0Ji10b3B7XHJcblx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0YmFja2dyb3VuZDogIzIyNzA1RDtcclxuXHRcdGZvbnQtc2l6ZTogMTNycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0Ji1jb250ZW50e1xyXG5cdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQmLWxlZnR7XHJcblx0XHRcdHdpZHRoOiA3MnJweDtcclxuXHRcdFx0Ym9yZGVyLXRvcDogMXJweCBzb2xpZCAjMUM1RTU1O1xyXG5cdFx0XHRmb250LXNpemU6IDIycnB4O1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdH1cclxuXHRcdCYtcmlnaHR7XHJcblx0XHRcdHdpZHRoOiA2NTBycHg7XHJcblx0XHRcdGJvcmRlci10b3A6IDFycHggc29saWQgIzFDNUU1NTtcclxuXHRcdFx0Ym9yZGVyLWxlZnQ6IDFycHggc29saWQgIzFDNUU1NTtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0dGV4dGFyZWF7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uZGF5cy10YWJ7XG4gIG1hcmdpbjogNXJweCAxNHJweCAycnB4O1xuICBwYWRkaW5nOiAwIDgxcnB4O1xuICBoZWlnaHQ6IDM2cnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVycHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICNENkQ2RDY7XG4gICY+dmlld3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5vbntcbiAgICBjb2xvcjogIzJFQ0U5NDtcbiAgICBib3JkZXItYm90dG9tOiAzcnB4IHNvbGlkICMyRUNFOTQ7XG4gIH1cbn1cclxuLmRhdGV7XG4gIGhlaWdodDogNDBycHg7XG4gIG1hcmdpbjogMCAxNHJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3JweDtcbiAgY29sb3I6ICM0MDQwNDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBpY2tlcntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1zaXplOiAjNDA0MDQwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAmPnZpZXd7XG4gICAgZm9udC1zaXplOiAyMHJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcnB4O1xuICB9XG59XHJcbi5kYWlseXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgMTRycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gICYtbGVmdHtcbiAgICB3aWR0aDogMzU1cnB4O1xuICAgIGJvcmRlcjogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgIC5jYXRlZ29yeXtcbiAgICAgIGhlaWdodDogNTRycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZm9udC1zaXplOiAxM3JweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgJj52aWV3e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAgICAgYmFja2dyb3VuZDogIzIyNzA1RDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICY6bnRoLWNoaWxkKDEpe1xuICAgICAgICAgIHdpZHRoOiAzNnJweDtcbiAgICAgICAgICBib3JkZXItbGVmdDowcnB4O1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgIHdpZHRoOiA5MHJweDtcbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCgzKXtcbiAgICAgICAgICB3aWR0aDogMTkzcnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAmPnZpZXd7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgd2lkdGg6IDM2cnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDc5cnB4O1xuICAgICAgJj52aWV3e1xuICAgICAgICBib3JkZXItbGVmdDogMXJweCBzb2xpZCAjMUM1RTU1O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICMxQzVFNTU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICY6bnRoLWNoaWxkKDEpe1xuICAgICAgICAgIHdpZHRoOiAzNnJweDtcbiAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICB3aWR0aDogOTBycHg7XG4gICAgICAgICAgcGlja2Vye1xuICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XG4gICAgICAgICAgICB0ZXh0e1xuICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNXJweDtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDhycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpudGgtY2hpbGQoMyl7XG4gICAgICAgICAgd2lkdGg6IDE5M3JweDtcbiAgICAgICAgICB0ZXh0YXJlYXtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgd2lkdGg6IDM2cnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLXJpZ2h0e1xuICAgIHdpZHRoOiAzNTVycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAmLXRpdGxle1xuICAgICAgaGVpZ2h0OiA1NHJweDtcbiAgICAgIGJhY2tncm91bmQ6ICMyMjcwNUQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNycHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dHtcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICBtYXJnaW46IDAgMjBycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmRlc3tcbiAgICAgIGhlaWdodDogNzlycHg7XG4gICAgICBib3JkZXI6IDFycHggc29saWQgIzFDNUU1NTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBib3JkZXItdG9wOiAwcnB4O1xuICAgICAgdGV4dGFyZWF7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

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