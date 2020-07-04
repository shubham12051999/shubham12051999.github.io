function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/AuthInterceptor.ts":
  /*!************************************!*\
    !*** ./src/app/AuthInterceptor.ts ***!
    \************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(cookie) {
        _classCallCheck(this, AuthInterceptor);

        this.cookie = cookie;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          // const idToken = localStorage.getItem("id_token");const idToken
          if (window.localStorage.getItem('refreshtoken') != null) {
            var idToken = window.localStorage.getItem('refreshtoken');

            if (idToken) {
              var cloned = req.clone({
                headers: req.headers.set("Authorization", idToken)
              });
              return next.handle(cloned);
            } else {
              return next.handle(req);
            }
          } else if (this.cookie.check("refreshtoken")) {
            var _idToken = this.cookie.get("refreshtoken");

            if (_idToken) {
              var _cloned = req.clone({
                headers: req.headers.set("Authorization", _idToken)
              });

              return next.handle(_cloned);
            } else {
              return next.handle(req);
            }
          } else {
            return next.handle(req);
          }
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _registation_registation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registation/registation.component */
    "./src/app/registation/registation.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-profile/update-profile.component */
    "./src/app/update-profile/update-profile.component.ts");
    /* harmony import */


    var _chefinfo_chefinfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chefinfo/chefinfo.component */
    "./src/app/chefinfo/chefinfo.component.ts");
    /* harmony import */


    var _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./orders/orders.component */
    "./src/app/orders/orders.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'Login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'Register',
      component: _registation_registation_component__WEBPACK_IMPORTED_MODULE_3__["RegistationComponent"]
    }, {
      path: 'Home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'Update',
      component: _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_5__["UpdateProfileComponent"]
    }, {
      path: 'ChefInfo',
      component: _chefinfo_chefinfo_component__WEBPACK_IMPORTED_MODULE_6__["ChefinfoComponent"]
    }, {
      path: 'Orders',
      component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _tiffin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tiffin.service */
    "./src/app/tiffin.service.ts");
    /* harmony import */


    var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-loading-bar/core */
    "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm2015/ngx-loading-bar-core.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(locationStrategy, http, router, cookie, TService, loadingBar) {
        _classCallCheck(this, AppComponent);

        this.locationStrategy = locationStrategy;
        this.http = http;
        this.router = router;
        this.cookie = cookie;
        this.TService = TService;
        this.loadingBar = loadingBar;
        this.title = 'SSNTiffinvala';
        this.uri = this.TService.uri;
      }

      _createClass(AppComponent, [{
        key: "disuser",
        value: function disuser() {
          if (!this.cookie.get("refreshtoken")) {
            this.router.navigate(['/Login']);
          } else {
            this.getuser();
            this.getorders();
          }
        }
      }, {
        key: "getuser",
        value: function getuser() {
          var _this = this;

          var val;
          this.http.get("".concat(this.uri, "/getdata")).subscribe(function (res) {
            val = res;
          });
          setTimeout(function () {
            if (val.result) {
              window.localStorage.setItem('user', JSON.stringify(val.Username));
              window.localStorage.setItem('refreshtoken', val.refreshtoken);
              window.localStorage.setItem('accesstoken', val.accesstoken);
            }

            _this.TService.handlestatus(val.status);
          }, 3500);
        }
      }, {
        key: "checkuser",
        value: function checkuser() {
          var _this2 = this;

          var val;
          this.http.get("".concat(this.uri, "/checkuser")).subscribe(function (res) {
            val = res;
          });
          setTimeout(function () {
            if (val.status) {
              _this2.TService.handlestatus(val.status);
            }
          }, 2000);
        }
      }, {
        key: "preventBackButton",
        value: function preventBackButton() {
          history.pushState(null, null, location.href);
          this.locationStrategy.onPopState(function () {
            history.pushState(null, null, location.href);
          });
        }
      }, {
        key: "getorders",
        value: function getorders() {
          var _this3 = this;

          var val;
          this.http.get("".concat(this.uri, "/userOrders")).subscribe(function (Response) {
            val = Response;
          });
          setTimeout(function () {
            if (val.result) {
              if (val.data) {
                var orders = val.data;
                var Corders = val.data.filter(function (order) {
                  return order.Date === _this3.TService.date || order.Date === _this3.TService.Todaydate;
                });
                window.localStorage.setItem('orders', JSON.stringify(orders));
                window.localStorage.setItem('Corders', JSON.stringify(Corders));
              } else {
                window.localStorage.setItem('orders', JSON.stringify([]));
                window.localStorage.setItem('Corders', JSON.stringify([]));
              }
            } else {} // this.TService.handlestatus(val.status);

          }, 2000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkuser();
          this.preventBackButton();
          this.disuser();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tiffin_service__WEBPACK_IMPORTED_MODULE_5__["TiffinService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_6__["LoadingBarService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
        }, {
          type: _tiffin_service__WEBPACK_IMPORTED_MODULE_5__["TiffinService"]
        }, {
          type: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_6__["LoadingBarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./material-module */
    "./src/app/material-module.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _registation_registation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./registation/registation.component */
    "./src/app/registation/registation.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _AuthInterceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./AuthInterceptor */
    "./src/app/AuthInterceptor.ts");
    /* harmony import */


    var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./update-profile/update-profile.component */
    "./src/app/update-profile/update-profile.component.ts");
    /* harmony import */


    var _header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./header-loggedin/header-loggedin.component */
    "./src/app/header-loggedin/header-loggedin.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _chefinfo_chefinfo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./chefinfo/chefinfo.component */
    "./src/app/chefinfo/chefinfo.component.ts");
    /* harmony import */


    var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ngx-loading-bar/core */
    "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm2015/ngx-loading-bar-core.js");
    /* harmony import */


    var _orders_orders_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./orders/orders.component */
    "./src/app/orders/orders.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _AuthInterceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_20__["HashLocationStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_22__["LoadingBarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _registation_registation_component__WEBPACK_IMPORTED_MODULE_14__["RegistationComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_18__["UpdateProfileComponent"], _header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_19__["HeaderLoggedinComponent"], _chefinfo_chefinfo_component__WEBPACK_IMPORTED_MODULE_21__["ChefinfoComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_23__["OrdersComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_22__["LoadingBarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _registation_registation_component__WEBPACK_IMPORTED_MODULE_14__["RegistationComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_18__["UpdateProfileComponent"], _header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_19__["HeaderLoggedinComponent"], _chefinfo_chefinfo_component__WEBPACK_IMPORTED_MODULE_21__["ChefinfoComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_23__["OrdersComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_22__["LoadingBarModule"]],
          providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _AuthInterceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
            multi: true
          }, {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_20__["HashLocationStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/chefinfo/chefinfo.component.ts":
  /*!************************************************!*\
    !*** ./src/app/chefinfo/chefinfo.component.ts ***!
    \************************************************/

  /*! exports provided: ChefinfoComponent */

  /***/
  function srcAppChefinfoChefinfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChefinfoComponent", function () {
      return ChefinfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _tiffin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tiffin.service */
    "./src/app/tiffin.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../header-loggedin/header-loggedin.component */
    "./src/app/header-loggedin/header-loggedin.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function ChefinfoComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 46);
      }
    }

    function ChefinfoComponent_ng_template_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Price");
      }
    }

    function ChefinfoComponent_ng_template_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Current Adress");
      }
    }

    function ChefinfoComponent_ng_template_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Phone Number");
      }
    }

    function ChefinfoComponent_ng_template_93_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Session");
      }
    }

    function ChefinfoComponent_ng_template_110_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Additional Note for Chef");
      }
    }

    function ChefinfoComponent_ng_template_121_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Place Order");
      }
    }

    function ChefinfoComponent_mat_card_126_tr_31_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChefinfoComponent_mat_card_126_tr_31_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17["delete"](i_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChefinfoComponent_mat_card_126_tr_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ChefinfoComponent_mat_card_126_tr_31_button_20_Template, 2, 0, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r14 = ctx.$implicit;
        var i_r15 = ctx.index;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r15 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r14.ChefName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r14.ChefMenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r14.Amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r14.Session);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r14.Type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r14.Note);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r14.Status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r14.Date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r14.Status != "Canceled" && ctx_r13.Todaydate != ctx_r13.date);
      }
    }

    function ChefinfoComponent_mat_card_126_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " > ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Current Orders");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cost");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Session");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Note");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Date of Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ChefinfoComponent_mat_card_126_tr_31_Template, 21, 10, "tr", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.orders);
      }
    } // chef[0]image="https://material.angular.io/assets/img/examples/shiba2.jpg"


    var ChefinfoComponent = /*#__PURE__*/function () {
      function ChefinfoComponent(cookie, router, http, TService) {
        _classCallCheck(this, ChefinfoComponent);

        this.cookie = cookie;
        this.router = router;
        this.http = http;
        this.TService = TService;
        this.sets = false;
        this.date = this.TService.date;
        this.Todaydate = this.TService.Todaydate;
        this.expansion2 = false;
        this.uri = this.TService.uri;
      }

      _createClass(ChefinfoComponent, [{
        key: "setdis",
        value: function setdis() {
          this.expansion2 = !this.expansion2;
          this.Total = parseInt(this.chef[0].Cost);
        }
      }, {
        key: "registerorder",
        value: function registerorder(Adress, Mobile, Session, Note) {
          var _this4 = this;

          this.sets = true;

          if (!Adress && !Mobile) {
            this.TService.snackbardisplay('please add Adress , Mobile Number and Time of Tiffin');
            this.sets = false;
          } else if (!Adress) {
            this.TService.snackbardisplay('Please Add Your Current Adress');
            this.sets = false;
          } else if (!Mobile) {
            this.TService.snackbardisplay('Please enter your working mobile number');
            this.sets = false;
          } else if (!Session) {
            // this.TService.snackbardisplay('Please choose your time for Tiffin');
            Session = this.chef[0].Session;
          }

          if (Session == 'LunchAndDinner') {
            this.Total = this.Total * 2;
            this.TService.snackbardisplay('you are selected Lunch And Dinner option so price will be doubles');
          } else {
            this.sets = true;
            console.log('i got');
            this.sets = true;
            var val;
            var ChefUserName = this.chef[0].Username;
            var Amount = this.Total;
            var Date = this.date;
            var Status = 'Pending';
            var ChefName = this.chef[0].Pname;
            var ChefMenu = this.chef[0].Menu;
            var Type = this.chef[0].TypeF;
            var obj = {
              ChefName: ChefName,
              ChefUserName: ChefUserName,
              ChefMenu: ChefMenu,
              Date: Date,
              Type: Type,
              Session: Session,
              Adress: Adress,
              Mobile: Mobile,
              Amount: Amount,
              Note: Note,
              Status: Status
            };
            console.log(obj);
            this.http.post("".concat(this.uri, "/NewOrder"), obj).subscribe(function (Response) {
              val = Response;
              console.log(Response);
            });
            setTimeout(function () {
              if (val.result) {
                _this4.TService.snackbardisplay('Order placed Sucessfully');

                _this4.getorders();
              } else {
                _this4.TService.snackbardisplay('problem');
              }

              _this4.sets = false;

              _this4.TService.handlestatus(val.status);

              _this4.sets = false;
            }, 3500);
          }
        }
      }, {
        key: "backtoHome",
        value: function backtoHome() {
          var _this5 = this;

          this.sets = true;
          setTimeout(function () {
            _this5.cookie["delete"]("cchef");

            _this5.router.navigate(['/Home']);

            _this5.sets = false;
          }, 1000);
        }
      }, {
        key: "delete",
        value: function _delete(index) {
          var _this6 = this;

          this.sets = true;
          var val; // //console.log(index);

          var obj = this.orders[index];
          obj.Status = 'Canceled';
          this.http.put("".concat(this.uri, "/UpdateOrder"), obj).subscribe(function (Response) {
            val = Response;
          });
          setTimeout(function () {
            if (val.result) {
              _this6.TService.snackbardisplay('Order sucessfully canceled');

              _this6.getorders();

              _this6.sets = false;
            } else {
              _this6.TService.snackbardisplay('Try again after some time');

              _this6.sets = false;
            }

            _this6.TService.handlestatus(val.status);
          }, 3000);
        }
      }, {
        key: "getorders",
        value: function getorders() {
          var _this7 = this;

          this.sets = true;
          var val;
          this.http.get("".concat(this.uri, "/userOrders")).subscribe(function (Response) {
            val = Response;
          });
          setTimeout(function () {
            if (val.result) {
              if (val.data) {
                _this7.orders = val.data;
                window.localStorage.setItem('orders', JSON.stringify(_this7.orders));
                _this7.Corders = val.data.filter(function (order) {
                  return order.Date === _this7.date || order.Date === _this7.Todaydate;
                });
                window.localStorage.setItem('Corders', JSON.stringify(_this7.Corders)); // //console.log(this.orders);
                // this.router.navigate(['/ChefInfo'])

                _this7.sets = false;
              } else {
                _this7.sets = false;
              }
            } else {
              _this7.sets = false;
            }

            _this7.TService.handlestatus(val.status);
          }, 3000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          // this.getorders();
          if (window.localStorage.getItem('orders') || window.localStorage.getItem('Corders')) {
            this.Corders = JSON.parse(window.localStorage.getItem('Corders'));
            this.orders = JSON.parse(window.localStorage.getItem('orders'));
          } else {
            this.getorders();
          }

          if (JSON.parse(window.localStorage.getItem("customzip"))) {
            // //console.log('log')
            this.chef = JSON.parse(window.localStorage.getItem("chefwithcustomzip")).filter(function (chef) {
              return chef.Username === JSON.parse(_this8.cookie.get("cchef"));
            }); // //console.log(this.chef)
          } else {
            try {
              var chefs = JSON.parse(window.localStorage.getItem("chefs"));
              this.chef = chefs.filter(function (chef) {
                return chef.Username === JSON.parse(_this8.cookie.get("cchef"));
              });
            } catch (_a) {//  //console.log('problem')
            }
          }
        }
      }]);

      return ChefinfoComponent;
    }();

    ChefinfoComponent.ɵfac = function ChefinfoComponent_Factory(t) {
      return new (t || ChefinfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tiffin_service__WEBPACK_IMPORTED_MODULE_4__["TiffinService"]));
    };

    ChefinfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChefinfoComponent,
      selectors: [["app-chefinfo"]],
      decls: 127,
      vars: 14,
      consts: [["style", "position: fixed;top:0; z-index: 2000;", "mode", "indeterminate", 4, "ngIf"], [1, "back"], [1, "caption"], [1, "border"], [1, "container"], [1, "btn", "btn-primary", "fixedbutton", 2, "top", "112px", 3, "click"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "title"], [2, "background-color", "white", "color", "black", "height", "200px"], [2, "color", "#777", "background-color", "rgba(15, 16, 17, 0.925)", "text-align", "center", "text-align", "justify"], [1, "border1"], [2, "text-align", "center", "padding", "20px 80px"], [1, "menu"], [1, "menu", 2, "text-align", "center"], [2, "text-align", "center"], [2, "width", "100%"], [2, "text-align", "center", "padding", "20px"], [2, "background-color", "rgba(15, 16, 17, 0.925)"], ["mat-button", "", 1, "btn", "btn-primary", 2, "font-size", "20px", "width", "200px", "letter-spacing", "5px", 3, "click"], [3, "disabled", "expanded"], [2, "color", "#777", "background-color", "#673ab7", "text-align", "center", "text-align", "justify", "padding", "20px 80px"], [1, "border1", 2, "padding-top", "13px"], ["stepper", ""], ["matStepLabel", ""], [2, "font-size", "20px"], [2, "padding-top", "50px"], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 2, "width", "100px", "letter-spacing", "5px", "font-size", "20px"], [1, "form-group"], ["appearance", "outline", "color", "primary", 2, "width", "90%", "font-size", "16px"], ["matInput", "", "placeholder", "Adress Ex. 1 Main St, New York, NY", "required", "true"], ["Adress", ""], [2, "padding-top", "30px"], ["matInput", "", "placeholder", "Mobile Number", "required", "true"], ["Mobile", ""], ["color", "primary", 2, "width", "80%", "font-size", "16px"], [3, "ngModel", "ngModelChange"], ["Session", ""], ["value", "Lunch"], ["value", "Dinner"], ["value", "LunchAndDinner"], ["color", "primary", "appearance", "outline", 2, "width", "80%", "font-size", "16px"], ["matInput", "", "placeholder", "Ex. It makes me feel..."], ["Note", ""], ["mat-raised-button", "", "color", "primary", 2, "width", "280px", "letter-spacing", "5px", "font-size", "20px", 3, "click"], [4, "ngIf"], ["mode", "indeterminate", 2, "position", "fixed", "top", "0", "z-index", "2000"], ["id", "table-wrapper"], ["id", "table-scroll"], [1, "tbl"], [1, "thed1"], [1, "index"], [1, "ordermenu"], [1, "ordernote"], [4, "ngFor", "ngForOf"], ["class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-danger", 3, "click"]],
      template: function ChefinfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChefinfoComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-loggedin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChefinfoComponent_Template_button_click_11_listener() {
            return ctx.backtoHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-title", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-content", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-content", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-expansion-panel", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-expansion-panel-header", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChefinfoComponent_Template_button_click_49_listener() {
            return ctx.setdis();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Order Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-expansion-panel", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-expansion-panel-header", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Confirm Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-vertical-stepper", null, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ChefinfoComponent_ng_template_63_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ChefinfoComponent_ng_template_71_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Current Adress");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, ChefinfoComponent_ng_template_82_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-form-field", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Working Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, ChefinfoComponent_ng_template_93_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-form-field", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Time when u want your Tiffin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-select", 36, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChefinfoComponent_Template_mat_select_ngModelChange_98_listener($event) {
            return ctx.chef[0].Session = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Lunch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Dinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Lunch And Dinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, ChefinfoComponent_ng_template_110_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Note for chef");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "textarea", 42, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, ChefinfoComponent_ng_template_121_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChefinfoComponent_Template_button_click_123_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](88);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](99);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](116);

            return ctx.registerorder(_r4.value, _r6.value, _r8.value, _r10.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Place Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, ChefinfoComponent_mat_card_126_Template, 32, 1, "mat-card", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sets);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx.chef[0].PImage, ");");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.chef[0].Pname, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.chef[0].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Menu For ", ctx.date, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.chef[0].Menu, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost:-RS.", ctx.chef[0].Cost, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.expansion2)("expanded", ctx.expansion2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Amount you need to pay :- ", ctx.Total, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.chef[0].Session);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.length != 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_6__["HeaderLoggedinComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperNext"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".fixedbutton[_ngcontent-%COMP%] {\n    position: fixed;\n    right: 0px; \n    height:120px;\n    max-width: 50px;\n    z-index: 1000;\n}\n\n.example-fill-remaining-space[_ngcontent-%COMP%] {\n    padding-left: 40%;\n  }\n\n.back[_ngcontent-%COMP%]{\n    position: relative;\n  opacity: 0.9;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  \n  height: 400px;\n  }\n\n.caption[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 70%;\n    width: 100%;\n    text-align: center;\n    color: #000;\n  }\n\n.caption[_ngcontent-%COMP%]   span.border[_ngcontent-%COMP%] {\n    background-color: #111;\n    color: #fff;\n    padding: 18px;\n    font-size: 25px;\n    letter-spacing: 10px;\n  }\n\nh3[_ngcontent-%COMP%] {\n\n    letter-spacing: 5px;\n    text-transform: uppercase;\n    font: 20px \"Lato\", sans-serif;\n    color: #fff;\n  }\n\n\n\n.menu[_ngcontent-%COMP%]{\n      letter-spacing: 5px;\n    text-transform: uppercase;\n      font: 20px \"Lato\", sans-serif;\n      color: black;\n    }\n\n.title[_ngcontent-%COMP%]{\n      letter-spacing: 5px;\n      font: 20px \"Lato\", sans-serif;\n      color: black;\n    }\n\nhr[_ngcontent-%COMP%]{\n      height: 3px;\n      text-decoration-thickness: 2em;\n      width: 100px;\n      background-color: #673ab7;\n    }\n\n.tbl[_ngcontent-%COMP%]{\n      width: 100%;\n    }\n\n\n\n\n\n#table-wrapper[_ngcontent-%COMP%] {\n      position:relative;\n    }\n\n#table-scroll[_ngcontent-%COMP%] {\n      height:150px;\n      overflow:auto;  \n      margin-top:20px;\n    }\n\n#table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n      width:100%;\n    \n    }\n\n#table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n      \n      color:black;\n    }\n\n#table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n      position:absolute;   \n      top:-20px;\n      z-index:2;\n      height:20px;\n      \n      width:35%;\n      border:1px solid red;\n    }\n\ntable[_ngcontent-%COMP%]{\n      border: 1,1,1,1;\n      border-color: #673ab7;\n    }\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\n     min-width: 100px;\n    }\n\n.index[_ngcontent-%COMP%]{\n      max-width: 20px;\n    }\n\n.ordermenu[_ngcontent-%COMP%], .ordernote[_ngcontent-%COMP%]{\n      width: 100px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlZmluZm8vY2hlZmluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0VBQ25COztBQUVGO0lBQ0ksa0JBQWtCO0VBQ3BCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYjs7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7QUFDQTs7SUFFRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixXQUFXO0VBQ2I7O0FBQ0E7O09BRUs7O0FBQ0g7TUFDRSxtQkFBbUI7SUFDckIseUJBQXlCO01BQ3ZCLDZCQUE2QjtNQUM3QixZQUFZO0lBQ2Q7O0FBQ0E7TUFDRSxtQkFBbUI7TUFDbkIsNkJBQTZCO01BQzdCLFlBQVk7SUFDZDs7QUFDQTtNQUNFLFdBQVc7TUFDWCw4QkFBOEI7TUFDOUIsWUFBWTtNQUNaLHlCQUF5QjtJQUMzQjs7QUFDQTtNQUNFLFdBQVc7SUFDYjs7QUFDQTs7Ozs7T0FLRzs7QUFDSCxLQUFLOztBQUNMO01BQ0UsaUJBQWlCO0lBQ25COztBQUNBO01BQ0UsWUFBWTtNQUNaLGFBQWE7TUFDYixlQUFlO0lBQ2pCOztBQUNBO01BQ0UsVUFBVTs7SUFFWjs7QUFDQTtNQUNFLHVCQUF1QjtNQUN2QixXQUFXO0lBQ2I7O0FBQ0E7TUFDRSxpQkFBaUI7TUFDakIsU0FBUztNQUNULFNBQVM7TUFDVCxXQUFXO01BQ1gsd0JBQXdCO01BQ3hCLFNBQVM7TUFDVCxvQkFBb0I7SUFDdEI7O0FBQ0E7TUFDRSxlQUFlO01BQ2YscUJBQXFCO0lBQ3ZCOztBQUNBO0tBQ0MsZ0JBQWdCO0lBQ2pCOztBQUNBO01BQ0UsZUFBZTtJQUNqQjs7QUFDQTtNQUNFLFlBQVk7SUFDZCIsImZpbGUiOiJzcmMvYXBwL2NoZWZpbmZvL2NoZWZpbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4ZWRidXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMHB4OyBcbiAgICBoZWlnaHQ6MTIwcHg7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwJTtcbiAgfVxuXG4uYmFja3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIGhlaWdodDogNDAwcHg7XG4gIH1cblxuLmNhcHRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNzAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICBcbiAgLmNhcHRpb24gc3Bhbi5ib3JkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMThweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gIH1cbiAgaDMge1xuXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQ6IDIwcHggXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLyogLmV4YW1wbGUtY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjc7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9ICovXG4gICAgLm1lbnV7XG4gICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250OiAyMHB4IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgZm9udDogMjBweCBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgaHJ7XG4gICAgICBoZWlnaHQ6IDNweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJlbTtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG4gICAgfVxuICAgIC50Ymx7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDIwcHgpIHtcbiAgICAgIC50Ymx7XG4gICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICB9XG4gICAgfSAqL1xuICAgIC8qICAqL1xuICAgICN0YWJsZS13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIH1cbiAgICAjdGFibGUtc2Nyb2xsIHtcbiAgICAgIGhlaWdodDoxNTBweDtcbiAgICAgIG92ZXJmbG93OmF1dG87ICBcbiAgICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICB9XG4gICAgI3RhYmxlLXdyYXBwZXIgdGFibGUge1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICBcbiAgICB9XG4gICAgI3RhYmxlLXdyYXBwZXIgdGFibGUgKiB7XG4gICAgICAvKiBiYWNrZ3JvdW5kOnllbGxvdzsgKi9cbiAgICAgIGNvbG9yOmJsYWNrO1xuICAgIH1cbiAgICAjdGFibGUtd3JhcHBlciB0YWJsZSB0aGVhZCB0aCAudGV4dCB7XG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTsgICBcbiAgICAgIHRvcDotMjBweDtcbiAgICAgIHotaW5kZXg6MjtcbiAgICAgIGhlaWdodDoyMHB4O1xuICAgICAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xuICAgICAgd2lkdGg6MzUlO1xuICAgICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XG4gICAgfVxuICAgIHRhYmxle1xuICAgICAgYm9yZGVyOiAxLDEsMSwxO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjNjczYWI3O1xuICAgIH1cbiAgICB0YWJsZSB0ZCAsdGFibGUgdGh7XG4gICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIC5pbmRleHtcbiAgICAgIG1heC13aWR0aDogMjBweDtcbiAgICB9XG4gICAgLm9yZGVybWVudSwub3JkZXJub3Rle1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChefinfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chefinfo',
          templateUrl: './chefinfo.component.html',
          styleUrls: ['./chefinfo.component.css']
        }]
      }], function () {
        return [{
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _tiffin_service__WEBPACK_IMPORTED_MODULE_4__["TiffinService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 5,
      vars: 0,
      consts: [["color", "primary"], [1, "footer-copyright", "text-center", "py-3"], ["href", "https://SSNDevelopers.web.app/"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA9 2020 Copyright: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " SSN Developers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".row[_ngcontent-%COMP%]{\n    padding-left: 5rem;\n}\n.cen[_ngcontent-%COMP%]{\n    padding-left: 5rem;\n    padding-top: 2rem;\n}\n.spacbe[_ngcontent-%COMP%]{\n    margin-top: -2rem;\n    padding-bottom: 2rem;\n    line-height: 2rem;\n    font-weight: 300;\n}\nfooter[_ngcontent-%COMP%]{\n    margin-top: 5rem;\n    background-color: #3f51b5;\n    color: white;\n    font-size: 18px;\n}\na[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: white;\n}\nul[_ngcontent-%COMP%]{\n    list-style-type: none;\n}\ndiv[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%]{\n    padding-top: 2rem;\n    font-size: 1.2rem;\n\tfont-weight: 400;\n\tpadding-left: 40px;\n\tcolor: black;\n}\n.footer-copyright[_ngcontent-%COMP%]{background-color:black; height: 2.5em;color: white;}\n.footer-copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color: red; text-decoration: none;}\n.footer-links[_ngcontent-%COMP%]{display: inline; margin-left: 6%;align-items: center;}\n.footer[_ngcontent-%COMP%] {\n    position: fixed;\n    padding-bottom: 0px;\n    padding-top: 0px;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: red;\n    color: white;\n    text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7Q0FDcEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7QUFDQSxrQkFBa0Isc0JBQXNCLEVBQUUsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUNyRSxvQkFBb0IsVUFBVSxFQUFFLHFCQUFxQixDQUFDO0FBQ3RELGNBQWMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQztBQUNuRTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XG59XG4uY2Vue1xuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cbi5zcGFjYmV7XG4gICAgbWFyZ2luLXRvcDogLTJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbmZvb3RlcntcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbnVse1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbmRpdiA+IGgye1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRwYWRkaW5nLWxlZnQ6IDQwcHg7XG5cdGNvbG9yOiBibGFjaztcbn1cbi5mb290ZXItY29weXJpZ2h0e2JhY2tncm91bmQtY29sb3I6YmxhY2s7IGhlaWdodDogMi41ZW07Y29sb3I6IHdoaXRlO31cbi5mb290ZXItY29weXJpZ2h0IGF7Y29sb3I6IHJlZDsgdGV4dC1kZWNvcmF0aW9uOiBub25lO31cbi5mb290ZXItbGlua3N7ZGlzcGxheTogaW5saW5lOyBtYXJnaW4tbGVmdDogNiU7YWxpZ24taXRlbXM6IGNlbnRlcjt9XG4uZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header-loggedin/header-loggedin.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/header-loggedin/header-loggedin.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderLoggedinComponent */

  /***/
  function srcAppHeaderLoggedinHeaderLoggedinComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderLoggedinComponent", function () {
      return HeaderLoggedinComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _tiffin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tiffin.service */
    "./src/app/tiffin.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function HeaderLoggedinComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 9);
      }
    }

    var HeaderLoggedinComponent = /*#__PURE__*/function () {
      function HeaderLoggedinComponent(http, router, cookie, TService) {
        _classCallCheck(this, HeaderLoggedinComponent);

        this.http = http;
        this.router = router;
        this.cookie = cookie;
        this.TService = TService;
        this.uri = this.TService.uri;
        this.date = this.TService.date;
        this.Todaydate = this.TService.Todaydate;
        this.sets = false;
      }

      _createClass(HeaderLoggedinComponent, [{
        key: "setuser",
        value: function setuser() {
          this.user = window.localStorage.getItem('user');
          this.user = this.user.substring(1, this.user.length - 1);
        }
      }, {
        key: "updateprofile",
        value: function updateprofile() {
          var _this9 = this;

          this.sets = true;
          setTimeout(function () {
            _this9.router.navigate(['/Update']);

            _this9.sets = false;
          }, 1000);
        }
      }, {
        key: "Orders",
        value: function Orders() {
          var _this10 = this;

          this.sets = true;
          var val;
          this.http.get("".concat(this.uri, "/UserOrders")).subscribe(function (Response) {
            val = Response; //console.log(val)
          });
          setTimeout(function () {
            if (val.result) {
              if (val.data) {
                var orders = val.data;
                var Corders = val.data.filter(function (order) {
                  return order.Date === _this10.date || order.Date === _this10.Todaydate;
                });
                window.localStorage.setItem('orders', JSON.stringify(orders));
                window.localStorage.setItem('Corders', JSON.stringify(Corders));
                _this10.sets = false;
              } else {
                _this10.sets = false;
                window.localStorage.setItem('orders', JSON.stringify([]));
                window.localStorage.setItem('Corders', JSON.stringify([]));
              } //console.log('done')


              _this10.router.navigate(['/Orders']);
            } else {
              _this10.sets = false;
            }

            _this10.TService.handlestatus(val.status);
          }, 4000);
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this11 = this;

          this.sets = true;
          var val;
          this.http["delete"]("".concat(this.uri, "/Logout")).subscribe(function (res) {
            val = res;
          });
          setTimeout(function () {
            if (val.result) {
              window.localStorage.clear();

              _this11.cookie.deleteAll();

              _this11.sets = false;

              _this11.router.navigate(['/Login']);
            }

            _this11.TService.handlestatus(val.status);
          }, 3000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setuser();
        }
      }]);

      return HeaderLoggedinComponent;
    }();

    HeaderLoggedinComponent.ɵfac = function HeaderLoggedinComponent_Factory(t) {
      return new (t || HeaderLoggedinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tiffin_service__WEBPACK_IMPORTED_MODULE_4__["TiffinService"]));
    };

    HeaderLoggedinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderLoggedinComponent,
      selectors: [["app-header-loggedin"]],
      decls: 19,
      vars: 3,
      consts: [["style", "position:fixed;", "style", "top:0px; z-index: 2000;", "mode", "indeterminate", 4, "ngIf"], ["color", "primary", 2, "font-size", "16px", "top", "2px", "z-index", "999"], [2, "color", "aliceblue"], [1, "example-fill-remaining-space"], [1, "btn", "btn-success", 2, "width", "270px", 3, "matMenuTriggerFor"], [2, "display", "inline-flex"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [2, "padding-right", "5px"], ["mode", "indeterminate", 2, "top", "0px", "z-index", "2000"]],
      template: function HeaderLoggedinComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderLoggedinComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SSNTIFFINVILLA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderLoggedinComponent_Template_button_click_12_listener() {
            return ctx.Orders();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Order History");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderLoggedinComponent_Template_button_click_14_listener() {
            return ctx.updateprofile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Update Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderLoggedinComponent_Template_button_click_16_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sets);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"]],
      styles: [".example-fill-remaining-space[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLWxvZ2dlZGluL2hlYWRlci1sb2dnZWRpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1sb2dnZWRpbi9oZWFkZXItbG9nZ2VkaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderLoggedinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header-loggedin',
          templateUrl: './header-loggedin.component.html',
          styleUrls: ['./header-loggedin.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
        }, {
          type: _tiffin_service__WEBPACK_IMPORTED_MODULE_4__["TiffinService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 9,
      vars: 0,
      consts: [["color", "primary", 2, "font-size", "16px", "top", "2px", "z-index", "999"], ["href", "", 2, "color", "aliceblue"], [2, "padding-left", "2rem"], ["routerLink", "/Login", 2, "color", "white", "text-decoration", "none"], ["routerLink", "", 2, "color", "white", "text-decoration", "none"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TIFFINVILLA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _tiffin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../tiffin.service */
    "./src/app/tiffin.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../header-loggedin/header-loggedin.component */
    "./src/app/header-loggedin/header-loggedin.component.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function HomeComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 14);
      }
    }

    function HomeComponent_mat_grid_tile_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_mat_grid_tile_18_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var chef_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.getmoreinfo(chef_r3.Username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chef_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chef_r3.Pname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", chef_r3.PImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Menu:-", chef_r3.Menu, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price:-", chef_r3.Cost, "\u20B9");
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(platform, http, router, cookie, TService) {
        _classCallCheck(this, HomeComponent);

        this.platform = platform;
        this.http = http;
        this.router = router;
        this.cookie = cookie;
        this.TService = TService;
        this.uri = this.TService.uri;
        this.date = this.TService.date;
        this.sets = false;
        this.orders = [];
        this.customzip = false;
      }

      _createClass(HomeComponent, [{
        key: "getchefswithzipcode",
        value: function getchefswithzipcode(Zipcode) {
          var _this12 = this;

          this.sets = true;
          var val;
          var obj = {
            Zipcode: Zipcode
          };
          this.http.post("".concat(this.uri, "/chefzip"), obj).subscribe(function (res) {
            val = res;
          });
          setTimeout(function () {
            if (val.result) {
              try {
                if (val.data) {
                  _this12.zipcode = Zipcode;
                  _this12.customzip = true;
                  _this12.chefs = val.users;
                  _this12.chefs = _this12.chefs.filter(function (chef) {
                    return chef.Date === _this12.date;
                  });
                  window.localStorage.setItem('chefwithcustomzip', JSON.stringify(val.users));
                  window.localStorage.setItem('customzip', JSON.stringify(true));
                } else {
                  _this12.customzip = false; //console.log('ok')

                  _this12.chefs = JSON.parse(window.localStorage.getItem('chefs'));
                  window.localStorage.setItem('customzip', JSON.stringify(false));
                  window.localStorage.setItem('chefwithcustomzip', JSON.stringify([]));

                  _this12.TService.snackbardisplay('There is no chefs Loading loacal host chefs');
                }
              } catch (_a) {
                _this12.TService.snackbardisplay('Welcome to TiffinVilla Family!');
              }

              _this12.router.navigate(['/Home']);

              _this12.sets = false;
            } else {
              // this.TService.snackbardisplay('Welcome to TiffinVilla Family!');
              _this12.sets = false;
            } // this.TService.handlestatus(val.status)

          }, 3000);
        }
      }, {
        key: "getmoreinfo",
        value: function getmoreinfo(Username) {
          var _this13 = this;

          // //console.log(Username) 
          this.cookie.set("cchef", JSON.stringify(Username), 0.02);
          this.sets = true;
          setTimeout(function () {
            _this13.sets = false;

            _this13.router.navigate(['/ChefInfo']);
          }, 1000);
        }
      }, {
        key: "getchefs",
        value: function getchefs() {
          var _this14 = this;

          this.sets = true;
          var val;
          this.http.get("".concat(this.uri, "/getchefs")).subscribe(function (res) {
            val = res;
          });
          setTimeout(function () {
            if (val.result) {
              try {
                if (val.data) {
                  window.localStorage.setItem('chefs', JSON.stringify(val.users));
                  _this14.chefs = val.users;
                  _this14.chefs = _this14.chefs.filter(function (chef) {
                    return chef.Date === _this14.date;
                  });
                  window.localStorage.setItem('customzip', JSON.stringify(false));
                } else {
                  _this14.chefs = [];
                  window.localStorage.setItem('chefs', JSON.stringify([]));

                  _this14.TService.snackbardisplay('There is no working chefs in your area!!');
                }
              } catch (_a) {
                _this14.TService.snackbardisplay('Welcome to TiffinVilla Family!');
              }

              _this14.router.navigate(['/Home']);

              _this14.sets = false;
            } else {
              _this14.TService.snackbardisplay('Welcome to TiffinVilla Family!');

              _this14.sets = false;
            }

            _this14.TService.handlestatus(val.status);
          }, 3500);
        }
      }, {
        key: "getgridsys",
        value: function getgridsys() {
          if (this.platform.ANDROID || this.platform.IOS) {
            this.col = 1;
          } else {
            this.col = 2;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.getgridsys();
          this.sets = true;

          if (!window.localStorage.getItem('refreshtoken')) {
            this.sets = false;
            this.router.navigate(['/Login']);
          }

          if (this.customzip) {
            this.chefs = JSON.parse(window.localStorage.getItem("chefwithcustomzip"));
            this.chefs = this.chefs.filter(function (chef) {
              return chef.Date === _this15.date;
            });
          } else {
            if (!window.localStorage.getItem('chefs')) {
              //console.log('got')
              this.getchefs();
            } else {
              setTimeout(function () {
                _this15.chefs = JSON.parse(window.localStorage.getItem('chefs'));
                _this15.chefs = _this15.chefs.filter(function (chef) {
                  return chef.Date === _this15.date;
                });
                _this15.sets = false;
              }, 1500);
            }

            setTimeout(function () {
              if (_this15.chefs.length == 0) {
                _this15.TService.snackbardisplay('There is no chefs avalible today');
              }
            }, 3500);
          } // this.cic.getorders();    

        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tiffin_service__WEBPACK_IMPORTED_MODULE_5__["TiffinService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 19,
      vars: 4,
      consts: [["style", "position: fixed;top:0; z-index: 2000;", "mode", "indeterminate", 4, "ngIf"], [1, "back"], [1, "caption"], [1, "border"], [1, "captiond"], [1, "borderd"], [1, "topnav"], [1, "search-container", "caption1"], ["type", "text", "placeholder", "Zipcode..", "type", "number", 1, "caption2"], ["Zipcode", ""], ["type", "submit", 3, "click"], [2, "padding-top", "5em"], [3, "cols"], [4, "ngFor", "ngForOf"], ["mode", "indeterminate", 2, "position", "fixed", "top", "0", "z-index", "2000"], [1, "example-card", "row", 2, "width", "438PX"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "title"], ["mat-card-image", "", 2, "width", "100%", 3, "src"], [1, "menu"], [1, "border1"], [1, "menu", 2, "text-align", "center"], [1, "btnplace"], ["mat-button", "", 1, "btn", "btn-primary", 3, "click"], [1, "orderbtn"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-loggedin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " SSN TiffinVilla");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return ctx.getchefswithzipcode(_r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-grid-list", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_mat_grid_tile_18_Template, 19, 4, "mat-grid-tile", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sets);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Order Date:-", ctx.date, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("cols", ctx.col);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chefs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_7__["HeaderLoggedinComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]],
      styles: [".example-fill-remaining-space[_ngcontent-%COMP%] {\n  \n  flex: 1 1 auto;\n}\n.fle[_ngcontent-%COMP%]{\n  width: 100px;\n  height: 50px;\n}\n.example-button-toggle-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 16px;\n}\n.fixedtab[_ngcontent-%COMP%]{\n    position: fixed;\n    position: -webkit-sticky;\n    top: 100px;\n    z-index: 999;\n    color: #fff;\n    background-color: black;\n}\n.back[_ngcontent-%COMP%]{\n  position: relative;\nopacity: 0.9;\nbackground-attachment: fixed;\nbackground-position: center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\n\nheight: 400px;\n}\n.caption1[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 70%;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n}\n.caption[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 30%;\n  width: 100%;\n  text-align: center;\n  color: #000;\n}\n.caption[_ngcontent-%COMP%]   span.border[_ngcontent-%COMP%] {\n  background-color: #111;\n  color: #fff;\n  padding: 18px;\n  font-size: 25px;\n  letter-spacing: 10px;\n}\n.captiond[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 60%;\n  width: 100%;\n  text-align: center;\n  color: #000;\n}\n.captiond[_ngcontent-%COMP%]   span.borderd[_ngcontent-%COMP%] {\n  background-color: #111;\n  color: #fff;\n  padding: 18px;\n  font-size: 25px;\n  letter-spacing: 5px;\n}\n.back[_ngcontent-%COMP%]{\n  background-image: url('tiffin.jpeg');\n}\n\n.caption1[_ngcontent-%COMP%] {\n  \n  color: #fff;\n  padding: 16px;\n  font-size: 20px;\n  letter-spacing:5px;\n}\n.caption2[_ngcontent-%COMP%] {\n  background-color: rgb(13, 13, 14);\n  color: #fff;\n  letter-spacing:5px;\n  width: 200px;\n}\n.topnav[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.topnav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  float: center;\n}\n.topnav[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 6px;\n  margin-top: 8px;\n  font-size: 17px;\n  border: none;\n}\n.topnav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: center;\n  padding: 6px;\n  margin-top: 8px;\n  margin-right: 16px;\n  background-color: rgb(20, 101, 221);\n  font-size: 17px;\n  color: white;\n  width: 100px;\n  border: none;\n  cursor: pointer;\n}\n.topnav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color:#673ab7;\n}\n.menu[_ngcontent-%COMP%]{\n  letter-spacing: 5px;\ntext-transform: uppercase;\n  font: 20px \"Lato\", sans-serif;\n  color: black;\n}\n.title[_ngcontent-%COMP%]{\n  letter-spacing: 5px;\n  font: 20px \"Lato\", sans-serif;\n  color: black;\n}\nhr[_ngcontent-%COMP%]{\n  height: 2px;\n  width: 100%;\n  background-color: #673ab7;\n}\n.btnplace[_ngcontent-%COMP%]{\n  text-align: right;\n}\n.btnplace[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{\n  width: 200px;\n  background-color: #673ab7;\n}\n.orderbtn[_ngcontent-%COMP%]{\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\nmat-card[_ngcontent-%COMP%]{\n  padding-bottom: 30px;\n}\nmat-grid-list[_ngcontent-%COMP%]{\n  min-height:800px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTttREFDaUQ7RUFDakQsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQixZQUFZO0FBQ1osNEJBQTRCO0FBQzVCLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9DQUFtRDtBQUNyRDtBQUNBLG1EQUFtRDtBQUNuRDtFQUNFLCtDQUErQztFQUMvQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIseUJBQXlCO0VBQ3ZCLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBLEtBQUsiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgZmxleDogMSAxIGF1dG87XG59XG4uZmxle1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5leGFtcGxlLWJ1dHRvbi10b2dnbGUtbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTZweDtcbn1cbi5maXhlZHRhYntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHRvcDogMTAwcHg7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmJhY2t7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbm9wYWNpdHk6IDAuOTtcbmJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8qIGhlaWdodDogMTAwJTsgKi9cbmhlaWdodDogNDAwcHg7XG59XG4uY2FwdGlvbjEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNzAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDMwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jYXB0aW9uIHNwYW4uYm9yZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG59XG5cbi5jYXB0aW9uZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA2MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uY2FwdGlvbmQgc3Bhbi5ib3JkZXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cbi5iYWNre1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uL2Fzc2V0cy90aWZmaW4uanBlZ1wiKTtcbn1cbi8qIGZyb20gdzNzY2hvb2wgY3NzIGZvciByZXNwb25zaXZlIHppcGNvZGUgaW5wdXQgKi9cbi5jYXB0aW9uMSB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQyLCA0NCwgMC4zNzcpOyAqL1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzo1cHg7XG59XG4uY2FwdGlvbjIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDEzLCAxNCk7XG4gIGNvbG9yOiAjZmZmO1xuICBsZXR0ZXItc3BhY2luZzo1cHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnRvcG5hdiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50b3BuYXYgLnNlYXJjaC1jb250YWluZXIge1xuICBmbG9hdDogY2VudGVyO1xufVxuXG4udG9wbmF2IGlucHV0IHtcbiAgcGFkZGluZzogNnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udG9wbmF2IC5zZWFyY2gtY29udGFpbmVyIGJ1dHRvbiB7XG4gIGZsb2F0OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMTAxLCAyMjEpO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvcG5hdiAuc2VhcmNoLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjc7XG59XG4ubWVudXtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQ6IDIwcHggXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbn1cbi50aXRsZXtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgZm9udDogMjBweCBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IGJsYWNrO1xufVxuaHJ7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcbn1cbi5idG5wbGFjZXtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uYnRucGxhY2U+YnV0dG9ue1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG59XG4ub3JkZXJidG57XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5tYXQtY2FyZHtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5tYXQtZ3JpZC1saXN0e1xuICBtaW4taGVpZ2h0OjgwMHB4IDtcbn1cbi8qICAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
        }, {
          type: _tiffin_service__WEBPACK_IMPORTED_MODULE_5__["TiffinService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _tiffin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tiffin.service */
    "./src/app/tiffin.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function LoginComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 14);
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(http, router, cookie, TService) {
        _classCallCheck(this, LoginComponent);

        this.http = http;
        this.router = router;
        this.cookie = cookie;
        this.TService = TService;
        this.sets = false;
        this.hide = true;
        this.uri = this.TService.uri;
      }

      _createClass(LoginComponent, [{
        key: "Login",
        value: function Login(Username, Password) {
          var _this16 = this;

          this.sets = true;
          var val;
          Username = Username.toLowerCase();
          var objs = {
            Username: Username,
            Password: Password
          };
          this.http.post("".concat(this.uri, "/Login"), objs).subscribe(function (Response) {
            val = Response;
          });
          setTimeout(function () {
            if (val.result) {
              if (val.data) {
                window.localStorage.setItem('user', JSON.stringify(val.Username));

                _this16.cookie.set("refreshtoken", val.token.refreshtoken, 0.05);

                window.localStorage.setItem('refreshtoken', val.token.refreshtoken);
                window.localStorage.setItem('accesstoken', val.token.accesstoken);
                _this16.sets = false;

                _this16.router.navigate(['Home']);
              } else {
                _this16.sets = false;

                _this16.router.navigate(['Login']);
              }
            } else {
              if (val.errormessage) {
                _this16.TService.snackbardisplay(val.errormessage);

                _this16.sets = false;

                _this16.router.navigate(['Login']);
              }
            }

            _this16.TService.handlestatus(val.status);
          }, 2500);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tiffin_service__WEBPACK_IMPORTED_MODULE_4__["TiffinService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 26,
      vars: 5,
      consts: [["style", "position: fixed;top:0; z-index: 2000;", "mode", "indeterminate", 4, "ngIf"], [1, "container", "formwidth"], [1, "card-body"], [1, "form-group"], ["appearance", "outline", "color", "primary"], ["matInput", "", "placeholder", "Username", "required", "true", "type", "text"], ["Username", ""], [1, "spanbet"], ["appearance", "outline"], ["matInput", "", "required", "true", "placeholder", "Password", 3, "type"], ["Password", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["routerLink", "/Register", 1, "btn", "btn-outline-primary", 2, "margin-left", "2rem"], ["mode", "indeterminate", 2, "position", "fixed", "top", "0", "z-index", "2000"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email/Mobile Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            return ctx.Login(_r1.value, _r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Registation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sets);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"]],
      styles: [".formwidth[_ngcontent-%COMP%]{\n  max-width: 50em;\n}\nmat-label[_ngcontent-%COMP%]{\n  font-size: 18px;\n}\nmat-form-field[_ngcontent-%COMP%]{\n  align-self: center;\n  width: 300px;\n}\n@media only screen and (min-device-width: 1024px) {\n  .spanbet[_ngcontent-%COMP%]{\n      padding-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFO01BQ0ksa0JBQWtCO0VBQ3RCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm13aWR0aHtcbiAgbWF4LXdpZHRoOiA1MGVtO1xufVxubWF0LWxhYmVse1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbm1hdC1mb3JtLWZpZWxke1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gIC5zcGFuYmV0e1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
        }, {
          type: _tiffin_service__WEBPACK_IMPORTED_MODULE_4__["TiffinService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-module.ts":
  /*!************************************!*\
    !*** ./src/app/material-module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/orders.component.ts":
  /*!********************************************!*\
    !*** ./src/app/orders/orders.component.ts ***!
    \********************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tiffin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tiffin.service */
    "./src/app/tiffin.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../header-loggedin/header-loggedin.component */
    "./src/app/header-loggedin/header-loggedin.component.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function OrdersComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 7);
      }
    }

    function OrdersComponent_mat_card_14_tr_30_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_mat_card_14_tr_30_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7["delete"](i_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrdersComponent_mat_card_14_tr_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OrdersComponent_mat_card_14_tr_30_button_20_Template, 2, 0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r4 = ctx.$implicit;
        var i_r5 = ctx.index;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.ChefName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.ChefMenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.Amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.Session);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.Type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.Note);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.Status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.Date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.Todaydate != ctx_r3.date && order_r4.Status != "Canceled");
      }
    }

    function OrdersComponent_mat_card_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Current Orders");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cost");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Session");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Note");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Date of Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, OrdersComponent_mat_card_14_tr_30_Template, 21, 10, "tr", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.orders);
      }
    }

    function OrdersComponent_mat_card_17_tr_31_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_mat_card_17_tr_31_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14["delete"](i_r12);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrdersComponent_mat_card_17_tr_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OrdersComponent_mat_card_17_tr_31_button_20_Template, 2, 0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r11 = ctx.$implicit;
        var i_r12 = ctx.index;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r11.ChefName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r11.ChefMenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r11.Amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r11.Session);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r11.Type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r11.Note);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r11.Status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r11.Date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.Todaydate != ctx_r10.date && order_r11.Status != "Canceled");
      }
    }

    function OrdersComponent_mat_card_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " > ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Orders History");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cost");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Session");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Note");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Date of Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, OrdersComponent_mat_card_17_tr_31_Template, 21, 10, "tr", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.orders);
      }
    }

    var OrdersComponent = /*#__PURE__*/function () {
      function OrdersComponent(http, router, TService) {
        _classCallCheck(this, OrdersComponent);

        this.http = http;
        this.router = router;
        this.TService = TService;
        this.sets = false;
        this.uri = this.TService.uri;
        this.date = this.TService.date;
        this.Todaydate = this.TService.Todaydate;
      }

      _createClass(OrdersComponent, [{
        key: "getorders",
        value: function getorders() {
          var _this17 = this;

          this.sets = true;
          var val;
          this.http.get("".concat(this.uri, "/userOrders")).subscribe(function (Response) {
            val = Response;
          });
          setTimeout(function () {
            if (val.result) {
              if (val.data) {
                _this17.orders = val.data;
                _this17.Corders = val.data.filter(function (order) {
                  return order.Date === _this17.date || order.Date === _this17.Todaydate;
                });
                window.localStorage.setItem('orders', JSON.stringify(_this17.orders));
                window.localStorage.setItem('Corders', JSON.stringify(_this17.Corders));
                _this17.sets = false;
              } else {
                _this17.sets = false;
                _this17.orders = [];
                _this17.Corders = [];
                window.localStorage.setItem('orders', JSON.stringify([]));
                window.localStorage.setItem('Corders', JSON.stringify([]));
              }

              _this17.router.navigate(['/Orders']);
            } else {
              _this17.sets = false;
            }

            _this17.TService.handlestatus(val.status);
          }, 3000);
        }
      }, {
        key: "delete",
        value: function _delete(index) {
          var _this18 = this;

          this.sets = true;
          var val; // //console.log(index);

          var obj = this.orders[index];
          obj.Status = 'Canceled';
          this.http.put("".concat(this.uri, "/UpdateOrder"), obj).subscribe(function (Response) {
            val = Response;
          });
          setTimeout(function () {
            if (val.result) {
              _this18.TService.snackbardisplay('Order sucessfully canceled');

              _this18.getorders();

              _this18.sets = false;
            } else {
              _this18.TService.snackbardisplay('Try again after some time');

              _this18.sets = false;
            }

            _this18.TService.handlestatus(val.status);
          }, 3000);
        }
      }, {
        key: "backtoHome",
        value: function backtoHome() {
          var _this19 = this;

          this.sets = true;
          setTimeout(function () {
            _this19.router.navigate(['/Home']);

            _this19.sets = false;
          }, 1000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (window.localStorage.getItem('orders')) {
            this.orders = JSON.parse(window.localStorage.getItem('orders'));
            this.Corders = JSON.parse(window.localStorage.getItem('Corders'));
          } else {
            this.getorders();
          }
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
      return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tiffin_service__WEBPACK_IMPORTED_MODULE_3__["TiffinService"]));
    };

    OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrdersComponent,
      selectors: [["app-orders"]],
      decls: 18,
      vars: 3,
      consts: [["style", "position: fixed;top:0; z-index: 2000;", "mode", "indeterminate", 4, "ngIf"], [1, "btn", "btn-primary", "fixedbutton", 2, "top", "112px", 3, "click"], ["color", "accent", "backgroundColor", "primary"], ["label", "Current Orders"], [1, "container"], [4, "ngIf"], ["label", "All Orders"], ["mode", "indeterminate", 2, "position", "fixed", "top", "0", "z-index", "2000"], [2, "color", "#777", "background-color", "#673ab7", "text-align", "center", "text-align", "justify", "padding", "20px 80px"], [1, "title"], ["id", "table-wrapper"], ["id", "table-scroll"], [1, "tbl"], [1, "thed1"], [1, "index"], [1, "ordermenu"], [1, "ordernote"], [4, "ngFor", "ngForOf"], ["class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-danger", 3, "click"]],
      template: function OrdersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrdersComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-loggedin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_Template_button_click_3_listener() {
            return ctx.backtoHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "H");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab-group", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrdersComponent_mat_card_14_Template, 31, 1, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-tab", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OrdersComponent_mat_card_17_Template, 32, 1, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sets);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Corders.lenght != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.lenght != 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_5__["HeaderLoggedinComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["#table-wrapper[_ngcontent-%COMP%] {\n        position:relative;\n      }\n      #table-scroll[_ngcontent-%COMP%] {\n        height:150px;\n        overflow:auto;  \n        margin-top:20px;\n      }\n      #table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n        width:100%;\n      \n      }\n      #table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n        \n        color:black;\n      }\n      #table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n        position:absolute;   \n        top:-20px;\n        z-index:2;\n        height:20px;\n        \n        width:35%;\n        border:1px solid red;\n      }\n      table[_ngcontent-%COMP%]{\n        border: 1,1,1,1;\n        border-color: #673ab7;\n      }\n      table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\n       min-width: 100px;\n      }\n      .index[_ngcontent-%COMP%]{\n        max-width: 20px;\n      }\n      .ordermenu[_ngcontent-%COMP%], .ordernote[_ngcontent-%COMP%]{\n        width: 100px;\n      }\n      .fixedbutton[_ngcontent-%COMP%] {\n        position: fixed;\n        right: 0px; \n        height:120px;\n        max-width: 50px;\n        z-index: 2000;\n    }\n      .title[_ngcontent-%COMP%]{\n      letter-spacing: 5px;\n      font: 20px \"Lato\", sans-serif;\n      color:white;\n    }\n      .container[_ngcontent-%COMP%]{\n      min-height: 600px;\n    }\n      mat-card[_ngcontent-%COMP%]{\n      min-height: 500px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtRQUNJLGlCQUFpQjtNQUNuQjtNQUNBO1FBQ0UsWUFBWTtRQUNaLGFBQWE7UUFDYixlQUFlO01BQ2pCO01BQ0E7UUFDRSxVQUFVOztNQUVaO01BQ0E7UUFDRSx1QkFBdUI7UUFDdkIsV0FBVztNQUNiO01BQ0E7UUFDRSxpQkFBaUI7UUFDakIsU0FBUztRQUNULFNBQVM7UUFDVCxXQUFXO1FBQ1gsd0JBQXdCO1FBQ3hCLFNBQVM7UUFDVCxvQkFBb0I7TUFDdEI7TUFDQTtRQUNFLGVBQWU7UUFDZixxQkFBcUI7TUFDdkI7TUFDQTtPQUNDLGdCQUFnQjtNQUNqQjtNQUNBO1FBQ0UsZUFBZTtNQUNqQjtNQUNBO1FBQ0UsWUFBWTtNQUNkO01BQ0E7UUFDRSxlQUFlO1FBQ2YsVUFBVTtRQUNWLFlBQVk7UUFDWixlQUFlO1FBQ2YsYUFBYTtJQUNqQjtNQUNBO01BQ0UsbUJBQW1CO01BQ25CLDZCQUE2QjtNQUM3QixXQUFXO0lBQ2I7TUFDQTtNQUNFLGlCQUFpQjtJQUNuQjtNQUNBO01BQ0UsaUJBQWlCO0lBQ25CIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgI3RhYmxlLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgICN0YWJsZS1zY3JvbGwge1xuICAgICAgICBoZWlnaHQ6MTUwcHg7XG4gICAgICAgIG92ZXJmbG93OmF1dG87ICBcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgICAgfVxuICAgICAgI3RhYmxlLXdyYXBwZXIgdGFibGUge1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgXG4gICAgICB9XG4gICAgICAjdGFibGUtd3JhcHBlciB0YWJsZSAqIHtcbiAgICAgICAgLyogYmFja2dyb3VuZDp5ZWxsb3c7ICovXG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgfVxuICAgICAgI3RhYmxlLXdyYXBwZXIgdGFibGUgdGhlYWQgdGggLnRleHQge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTsgICBcbiAgICAgICAgdG9wOi0yMHB4O1xuICAgICAgICB6LWluZGV4OjI7XG4gICAgICAgIGhlaWdodDoyMHB4O1xuICAgICAgICAvKiBwYWRkaW5nLWxlZnQ6IDEwcHg7ICovXG4gICAgICAgIHdpZHRoOjM1JTtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XG4gICAgICB9XG4gICAgICB0YWJsZXtcbiAgICAgICAgYm9yZGVyOiAxLDEsMSwxO1xuICAgICAgICBib3JkZXItY29sb3I6ICM2NzNhYjc7XG4gICAgICB9XG4gICAgICB0YWJsZSB0ZCAsdGFibGUgdGh7XG4gICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgIH1cbiAgICAgIC5pbmRleHtcbiAgICAgICAgbWF4LXdpZHRoOiAyMHB4O1xuICAgICAgfVxuICAgICAgLm9yZGVybWVudSwub3JkZXJub3Rle1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICB9XG4gICAgICAuZml4ZWRidXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHJpZ2h0OiAwcHg7IFxuICAgICAgICBoZWlnaHQ6MTIwcHg7XG4gICAgICAgIG1heC13aWR0aDogNTBweDtcbiAgICAgICAgei1pbmRleDogMjAwMDtcbiAgICB9XG4gICAgLnRpdGxle1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgIGZvbnQ6IDIwcHggXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG4gICAgLmNvbnRhaW5lcntcbiAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgIH1cbiAgICBtYXQtY2FyZHtcbiAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-orders',
          templateUrl: './orders.component.html',
          styleUrls: ['./orders.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _tiffin_service__WEBPACK_IMPORTED_MODULE_3__["TiffinService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/registation/registation.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/registation/registation.component.ts ***!
    \******************************************************/

  /*! exports provided: RegistationComponent */

  /***/
  function srcAppRegistationRegistationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistationComponent", function () {
      return RegistationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _tiffin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tiffin.service */
    "./src/app/tiffin.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function RegistationComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 32);
      }
    }

    var RegistationComponent = /*#__PURE__*/function () {
      function RegistationComponent(router, http, TService) {
        _classCallCheck(this, RegistationComponent);

        this.router = router;
        this.http = http;
        this.TService = TService;
        this.sets = false;
        this.hide = true;
        this.uri = this.TService.uri;
      }

      _createClass(RegistationComponent, [{
        key: "addUser",
        value: function addUser(FullName, Adress, Zipcode, Mobile_Number, gender, dob, Username, Password) {
          var _this20 = this;

          this.sets = true;
          var val;
          Username = Username.toLowerCase();
          var objs = {
            FullName: FullName,
            Adress: Adress,
            Zipcode: Zipcode,
            Mobile_Number: Mobile_Number,
            gender: gender,
            dob: dob,
            Username: Username,
            Password: Password
          }; // //console.log(objs);

          this.http.post("".concat(this.uri, "/Register"), objs).subscribe(function (res) {
            val = res;
          });
          setTimeout(function () {
            if (val.result) {
              _this20.TService.snackbardisplay('Please login using Username and Password');

              _this20.sets = false;

              _this20.router.navigate(['/Login']);
            } else {
              if (val.errormessage) {
                _this20.TService.snackbardisplay(val.errormessage);

                _this20.router.navigate(['/Login']);
              } else {
                _this20.TService.snackbardisplay('Please try again Some time');

                _this20.sets = false;

                _this20.router.navigate(['/Register']);
              }
            }

            _this20.TService.handlestatus(val.status);
          }, 3500);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// this.snackbar.open('hello','ok');
        }
      }]);

      return RegistationComponent;
    }();

    RegistationComponent.ɵfac = function RegistationComponent_Factory(t) {
      return new (t || RegistationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tiffin_service__WEBPACK_IMPORTED_MODULE_3__["TiffinService"]));
    };

    RegistationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistationComponent,
      selectors: [["app-registation"]],
      decls: 65,
      vars: 8,
      consts: [["style", "position: fixed;top:0; z-index: 2000;", "mode", "indeterminate", 4, "ngIf"], [1, "container", "formwidth"], [1, "card-body"], [1, "form-group"], ["appearance", "outline", "color", "primary"], ["matInput", "", "placeholder", "Full Name", "required", "true"], ["FullName", ""], [1, "spanbet"], ["matInput", "", "placeholder", "Adress", "required", "true"], ["Adress", ""], ["matInput", "", "placeholder", "Zipcode", "required", "true"], ["Zipcode", ""], ["matInput", "", "placeholder", "Mobile Number", "required", "true"], ["Mobile_Number", ""], ["aria-label", "Select gender", 2, "align-self", "center", "width", "300px", 3, "ngModel", "ngModelChange"], ["value", "male", 2, "padding-left", "3px"], [2, "padding-left", "5px"], ["value", "female", 2, "padding-left", "3px"], [1, "spanbet1"], ["color", "primary", "appearance", "outline"], ["matInput", "", 3, "matDatepicker"], ["dob", ""], ["matSuffix", "", 3, "for"], [2, "font-size", "18px"], ["picker1", ""], ["matInput", "", "placeholder", "Username", "required", "true", "type", "email"], ["Username", ""], ["appearance", "outline"], ["matInput", "", "required", "true", "placeholder", "Password", 3, "type"], ["Password", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["mode", "indeterminate", 2, "position", "fixed", "top", "0", "z-index", "2000"]],
      template: function RegistationComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegistationComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Full Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Adress");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Zipcode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mobile Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-radio-group", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistationComponent_Template_mat_radio_group_ngModelChange_29_listener($event) {
            return ctx.gender = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Gender:-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-radio-button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-radio-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "mat-datepicker-toggle", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "mat-datepicker", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Username/Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistationComponent_Template_button_click_59_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistationComponent_Template_button_click_63_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);

            return ctx.addUser(_r1.value, _r2.value, _r3.value, _r4.value, ctx.gender, _r5.value, _r7.value, _r8.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Create Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sets);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioButton"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBar"]],
      styles: [".formwidth[_ngcontent-%COMP%]{\n    max-width: 50em;\n}\n.reg[_ngcontent-%COMP%]{\n\n    \n    \n    padding-top: 5%;\n    padding-right: 10%;\n    \n    padding-left: 10%;\n  \n    width: 100%;\n    \n    \n    \n}\n.cre[_ngcontent-%COMP%]{\n    padding-left: 16em;\n    \n}\n\nmat-label[_ngcontent-%COMP%]{\n    font-size: 18px;\n  }\nmat-form-field[_ngcontent-%COMP%]{\n    align-self: center;\n    width: 300px;\n  }\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n      list-style: none;\n      display: inline-block;\n  }\n@media only screen and (min-device-width: 1024px) {\n    .spanbet[_ngcontent-%COMP%]{\n        padding-left: 20px;\n    }\n    .spanbet1[_ngcontent-%COMP%]{\n        padding-left: 90px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0YXRpb24vcmVnaXN0YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtBQUNBLDhDQUE4QztJQUMxQyw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjs7SUFFakIsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7O0dBRUc7QUFDSDtJQUNJLGVBQWU7RUFDakI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7QUFDQTtNQUNJLGdCQUFnQjtNQUNoQixxQkFBcUI7RUFDekI7QUFFQTtJQUNFO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGF0aW9uL3JlZ2lzdGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybXdpZHRoe1xuICAgIG1heC13aWR0aDogNTBlbTtcbn1cbi5yZWd7XG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ5LCA2NCwgOTMsIDAuODUpOyAqL1xuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgLyogcGFkZGluZy1ib3R0b206IDA7ICovXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIG1heC1oZWlnaHQ6IDEwMDBweDsgKi9cbiAgICAvKiBtYXgtd2lkdGg6IDkwMHB4OyAqL1xuICAgIC8qIG1hcmdpbi1ib3R0b206IC0xMXB4OyAqL1xufVxuLmNyZXtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2ZW07XG4gICAgLyogcG9zaXRpb246IGNlbnRlcjsgKi9cbn1cbi8qIGxhYmVse1xuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XG59ICovXG5tYXQtbGFiZWx7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICBtYXQtZm9ybS1maWVsZHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG4gIHVsIGxpe1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuc3BhbmJldHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICAuc3BhbmJldDF7XG4gICAgICAgIHBhZGRpbmctbGVmdDogOTBweDtcbiAgICB9XG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registation',
          templateUrl: './registation.component.html',
          styleUrls: ['./registation.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _tiffin_service__WEBPACK_IMPORTED_MODULE_3__["TiffinService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tiffin.service.ts":
  /*!***********************************!*\
    !*** ./src/app/tiffin.service.ts ***!
    \***********************************/

  /*! exports provided: TiffinService */

  /***/
  function srcAppTiffinServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TiffinService", function () {
      return TiffinService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var TiffinService = /*#__PURE__*/function () {
      function TiffinService(router, cookie, snackBar) {
        _classCallCheck(this, TiffinService);

        this.router = router;
        this.cookie = cookie;
        this.snackBar = snackBar;
        this.dat = new Date();
        this.tda = this.dat.getDate().toString();
        this.tmonth = this.dat.getMonth().toString();
        this.tyear = this.dat.getFullYear().toString();
        this.Todaydate = this.tda + '/' + this.tmonth + '/' + this.tyear;
        this.currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        this.year = parseInt(this.currentDate.getFullYear().toString());
        this.da = parseInt(this.currentDate.getDate().toString());
        this.month = parseInt(this.currentDate.getMonth().toString());
        this.date = this.da + '/' + this.month + '/' + this.year; // uri='http://localhost:4000'

        this.uri = 'https://tiffinvilla.herokuapp.com';
      }

      _createClass(TiffinService, [{
        key: "handlestatus",
        value: function handlestatus(status) {
          if (status == 401 || status == 403) {
            this.cookie.deleteAll();
            window.localStorage.clear();
            this.snackbardisplay('Your session has been expiered! Please login again');
            this.router.navigate(['/Login']);
          } else if (status == 200 || status == 201) {// //console.log('ok');
          } else if (status == 203) {
            this.snackbardisplay('please check credentials');
          } else if (status == 303) {
            this.snackbardisplay('Orders not found');
          } else {// //console.log('ok');
          }
        }
      }, {
        key: "snackbardisplay",
        value: function snackbardisplay(message) {
          this.snackBar.open(message, 'okay', {
            verticalPosition: 'top',
            panelClass: 'happy'
          });
        }
      }]);

      return TiffinService;
    }();

    TiffinService.ɵfac = function TiffinService_Factory(t) {
      return new (t || TiffinService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
    };

    TiffinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TiffinService,
      factory: TiffinService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TiffinService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/update-profile/update-profile.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/update-profile/update-profile.component.ts ***!
    \************************************************************/

  /*! exports provided: UpdateProfileComponent */

  /***/
  function srcAppUpdateProfileUpdateProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function () {
      return UpdateProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _tiffin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tiffin.service */
    "./src/app/tiffin.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../header-loggedin/header-loggedin.component */
    "./src/app/header-loggedin/header-loggedin.component.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function UpdateProfileComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 29);
      }
    }

    var UpdateProfileComponent = /*#__PURE__*/function () {
      function UpdateProfileComponent(router, http, cookie, TService) {
        _classCallCheck(this, UpdateProfileComponent);

        this.router = router;
        this.http = http;
        this.cookie = cookie;
        this.TService = TService;
        this.sets = false;
        this.hide = true;
        this.uri = this.TService.uri;
      }

      _createClass(UpdateProfileComponent, [{
        key: "addUser",
        value: function addUser(FullName, Adress, Zipcode, Mobile_Number) {
          var _this21 = this;

          this.sets = true;
          var val;
          var objs = {
            FullName: FullName,
            Adress: Adress,
            Zipcode: Zipcode,
            Mobile_Number: Mobile_Number
          };
          this.http.put("".concat(this.uri, "/UpdateProfile"), objs).subscribe(function (res) {
            val = res;
          });
          setTimeout(function () {
            if (val.result) {
              _this21.getpinfo();

              _this21.TService.snackbardisplay('Profile Information sucessfully Updated');

              _this21.router.navigate(['/Update']);

              _this21.sets = false;
            } else {
              if (val.errormessage) {
                _this21.TService.snackbardisplay(val.errormessage);
              }

              _this21.sets = false;
            } // this.TService.handlestatus(val.status)

          }, 2500);
        }
      }, {
        key: "backtoHome",
        value: function backtoHome() {
          var _this22 = this;

          this.sets = true;
          setTimeout(function () {
            _this22.router.navigate(['/Home']);

            _this22.sets = false;
          }, 1000);
        }
      }, {
        key: "changepassword",
        value: function changepassword(currpass, newpass, confpass) {
          var _this23 = this;

          this.sets = true;
          var val;

          if (newpass === confpass) {
            var obj = {
              currpass: currpass,
              newpass: newpass
            };
            this.http.post("".concat(this.uri, "/changpassword"), obj).subscribe(function (res) {
              val = res;
            });
            setTimeout(function () {
              if (val.result) {
                window.localStorage.clear();

                _this23.cookie.deleteAll();

                _this23.TService.snackbardisplay('Please login agian using new Password');

                _this23.sets = false;

                _this23.router.navigate(['/Login']);
              } else {
                _this23.TService.snackbardisplay('please try after some time or check your current password');

                _this23.sets = false;
              }

              _this23.TService.handlestatus(val.status);
            }, 2500);
          } else {
            this.TService.snackbardisplay('New Password and Confirm password not Matching');
            this.sets = false;
          }
        }
      }, {
        key: "getpinfo",
        value: function getpinfo() {
          var _this24 = this;

          this.sets = false;
          var val;
          this.http.get("".concat(this.uri, "/getuserpersonalinfo")).subscribe(function (res) {
            val = res;
          });
          setTimeout(function () {
            if (val.result) {
              _this24.fullname = val.FullName;
              _this24.adress = val.Adress;
              _this24.zipcode = val.Zipcode;
              _this24.mobile_number = val.Mobile_Number;
              _this24.sets = false;
            }

            _this24.TService.handlestatus(val.status);
          }, 2500);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.sets = true;
          this.getpinfo();
        }
      }]);

      return UpdateProfileComponent;
    }();

    UpdateProfileComponent.ɵfac = function UpdateProfileComponent_Factory(t) {
      return new (t || UpdateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tiffin_service__WEBPACK_IMPORTED_MODULE_4__["TiffinService"]));
    };

    UpdateProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateProfileComponent,
      selectors: [["app-update-profile"]],
      decls: 78,
      vars: 9,
      consts: [["style", "position: fixed;top:0px; z-index: 2000;", "mode", "indeterminate", 4, "ngIf"], ["color", "accent", "backgroundColor", "primary"], ["label", "Change Password"], [1, "container", "jumbotron", 2, "padding-top", "50px"], [1, "btn", "btn-primary", "fixedbutton", 2, "top", "112px", 3, "click"], [1, "form-group"], ["appearance", "outline", "color", "primary"], ["matInput", "", "placeholder", "Current Password", "required", "true", "type", "password"], ["currpass", ""], ["matInput", "", "placeholder", "New Password", "required", "true", "type", "password"], ["newpass", ""], [1, "spanbet"], ["appearance", "outline"], ["matInput", "", "required", "true", "placeholder", "Confirm Password", 3, "type"], ["confpass", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [2, "padding-left", "20px"], [1, "btn", "btn-outline-primary", 2, "height", "50px", "width", "100px", 3, "click"], ["label", "Edit Profile"], [1, "card-body"], ["matInput", "", "placeholder", "Full Name", "required", "true", 3, "ngModel", "ngModelChange"], ["FullName", ""], ["matInput", "", "placeholder", "Adress", "required", "true", 3, "ngModel", "ngModelChange"], ["Adress", ""], ["matInput", "", "placeholder", "Zipcode", "required", "true", 3, "ngModel", "ngModelChange"], ["Zipcode", ""], ["matInput", "", "placeholder", "Mobile Number", "required", "true", 3, "ngModel", "ngModelChange"], ["Mobile_Number", ""], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["mode", "indeterminate", 2, "position", "fixed", "top", "0px", "z-index", "2000"]],
      template: function UpdateProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UpdateProfileComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-loggedin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_6_listener() {
            return ctx.backtoHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "H");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Current Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_32_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            return ctx.changepassword(_r1.value, _r2.value, _r3.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-tab", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_41_listener() {
            return ctx.backtoHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "H");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Full Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_55_listener($event) {
            return ctx.fullname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Adress");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_61_listener($event) {
            return ctx.adress = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Zipcode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_67_listener($event) {
            return ctx.zipcode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Mobile Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_73_listener($event) {
            return ctx.mobile_number = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_76_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74);

            return ctx.addUser(_r4.value, _r5.value, _r6.value, _r7.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Update Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sets);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fullname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.zipcode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobile_number);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_6__["HeaderLoggedinComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBar"]],
      styles: [".formwidth[_ngcontent-%COMP%]{\n    max-width: 50em;\n}\n.reg[_ngcontent-%COMP%]{\n\n    \n    \n    padding-top: 5%;\n    padding-right: 10%;\n    \n    padding-left: 10%;\n  \n    width: 100%;\n    \n    \n    \n}\n.cre[_ngcontent-%COMP%]{\n    padding-left: 16em;\n    \n}\n\nmat-label[_ngcontent-%COMP%]{\n    font-size: 18px;\n  }\nmat-form-field[_ngcontent-%COMP%]{\n    align-self: center;\n    width: 300px;\n  }\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n      list-style: none;\n      display: inline-block;\n  }\n.fixedbutton[_ngcontent-%COMP%] {\n    position: fixed;\n    right: 0px; \n    height:120px;\n    max-width: 50px;\n}\n@media only screen and (min-device-width: 1024px) {\n    .spanbet[_ngcontent-%COMP%]{\n        padding-left: 20px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLXByb2ZpbGUvdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtBQUNBLDhDQUE4QztJQUMxQyw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjs7SUFFakIsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7O0dBRUc7QUFDSDtJQUNJLGVBQWU7RUFDakI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7QUFDQTtNQUNJLGdCQUFnQjtNQUNoQixxQkFBcUI7RUFDekI7QUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC91cGRhdGUtcHJvZmlsZS91cGRhdGUtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm13aWR0aHtcbiAgICBtYXgtd2lkdGg6IDUwZW07XG59XG4ucmVne1xuLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OSwgNjQsIDkzLCAwLjg1KTsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiAwOyAqL1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICBcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBtYXgtaGVpZ2h0OiAxMDAwcHg7ICovXG4gICAgLyogbWF4LXdpZHRoOiA5MDBweDsgKi9cbiAgICAvKiBtYXJnaW4tYm90dG9tOiAtMTFweDsgKi9cbn1cbi5jcmV7XG4gICAgcGFkZGluZy1sZWZ0OiAxNmVtO1xuICAgIC8qIHBvc2l0aW9uOiBjZW50ZXI7ICovXG59XG4vKiBsYWJlbHtcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xufSAqL1xubWF0LWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgbWF0LWZvcm0tZmllbGR7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuICB1bCBsaXtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAuZml4ZWRidXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMHB4OyBcbiAgICBoZWlnaHQ6MTIwcHg7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gICAgLnNwYW5iZXR7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-profile',
          templateUrl: './update-profile.component.html',
          styleUrls: ['./update-profile.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
        }, {
          type: _tiffin_service__WEBPACK_IMPORTED_MODULE_4__["TiffinService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/shree/Desktop/projects/SSNTiffinVilla-user/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map