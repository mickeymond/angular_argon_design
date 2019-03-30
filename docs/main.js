(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#auth-page {\r\n    height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXV0aC1wYWdlIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularArgonDesign';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#name-in-text {\r\n    font-style: italic;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hbWUtaW4tdGV4dCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <section class=\"section section-shaped section-lg\">\r\n      <div class=\"shape shape-style-1 bg-gradient-default\">\r\n      </div>\r\n      <div class=\"container py-md\">\r\n        <div class=\"row row-grid justify-content-between align-items-center\">\r\n          <div class=\"col-lg-6\">\r\n            <h3 class=\"display-3 text-white text-center\">TrustMyVote\r\n              <span class=\"text-white\">No more doubting if your vote really counts</span>\r\n            </h3>\r\n            <p class=\"text-white\">\r\n              USSD voting for events is organized almost everyday in Ghana. Some notable events include VGMAs, Ghana's most beatiful, Ghana beverage awards, Ghana startups awards, Ghana movie wards etc. There has been several intances where candidates in some categories of these awards complain of organizers cheating them by rigging the voting process. A popular case was the notable issue relating 'song of the year' category in the recent Vodafone Ghana Music awards. The assumption is that, organizers input votes for their favourite candidates and that the results and winners were not the original. <strong id=\"name-in-text\">TrustMyVote</strong> seeks to address this issue by implementing a software platform that allows event organizers to create events for people to vote using Blockchain to store votes where they cannot be altered.\r\n            </p>\r\n          </div>\r\n          <div class=\"col-lg-5 mb-lg-auto\">\r\n            <div class=\"transform-perspective-right\">\r\n              <div class=\"card bg-secondary shadow border-0\">\r\n                <div class=\"card-header bg-white pb-5\">\r\n                  <div class=\"text-muted text-center mb-3\">\r\n                    <small>Sign in with</small>\r\n                  </div>\r\n                  <div class=\"btn-wrapper text-center\">\r\n                    <a href=\"#\" class=\"btn btn-neutral btn-icon\">\r\n                      <span class=\"btn-inner--icon\">\r\n                        <img src=\"./assets/img/icons/common/google.svg\">\r\n                      </span>\r\n                      <span class=\"btn-inner--text\">Google</span>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card-body px-lg-5 py-lg-5\">\r\n                  <div class=\"text-center text-muted mb-4\">\r\n                    <small>Or sign in with credentials</small>\r\n                  </div>\r\n                  <form role=\"form\">\r\n                    <div class=\"form-group mb-3\">\r\n                      <div class=\"input-group input-group-alternative\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                        </div>\r\n                        <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"input-group input-group-alternative\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                        </div>\r\n                        <input class=\"form-control\" placeholder=\"Password\" type=\"password\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                      <input class=\"custom-control-input\" id=\" customCheckLogin2\" type=\"checkbox\">\r\n                      <label class=\"custom-control-label\" for=\" customCheckLogin2\">\r\n                        <span>Remember me</span>\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                      <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n</main>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container\">\r\n      <div class=\"row align-items-center justify-content-md-between\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"copyright\">\r\n            &copy; 2019\r\n            <a routerLink=\"/\">TrustMyVote</a>.\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-global\">\r\n    <nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom\">\r\n      <div class=\"container\">\r\n        <a class=\"navbar-brand mr-lg-5\" routerLink=\"/\">\r\n          TrustMyVote\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar_global\" aria-controls=\"navbar_global\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"navbar-collapse collapse\" id=\"navbar_global\">\r\n          <div class=\"navbar-collapse-header\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6 collapse-brand\">\r\n                <a routerLink=\"/login\">\r\n                  Sign In\r\n                </a>\r\n              </div>\r\n              <div class=\"col-6 collapse-close\">\r\n                <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar_global\" aria-controls=\"navbar_global\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  <span></span>\r\n                  <span></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\r\n            <li class=\"nav-item dropdown\">\r\n              <a href=\"#\" class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\">\r\n                <i class=\"ni ni-ui-04 d-lg-none\"></i>\r\n                <span class=\"nav-link-inner--text\">Go To</span>\r\n              </a>\r\n              <div class=\"dropdown-menu dropdown-menu-xl\">\r\n                <div class=\"dropdown-menu-inner\">\r\n                  <a routerLink=\"/\" class=\"media d-flex align-items-center\">\r\n                    <div class=\"icon icon-shape bg-gradient-primary rounded-circle text-white\">\r\n                      <i class=\"ni ni-spaceship\"></i>\r\n                    </div>\r\n                    <div class=\"media-body ml-3\">\r\n                      <h6 class=\"heading text-primary mb-md-1\">All Events</h6>\r\n                      <p class=\"description d-none d-md-inline-block mb-0\">\r\n                        View all the events currently hosted by TrustMyVote\r\n                      </p>\r\n                    </div>\r\n                  </a>\r\n                  <a routerLink=\"/\" class=\"media d-flex align-items-center\">\r\n                    <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                      <i class=\"ni ni-palette\"></i>\r\n                    </div>\r\n                    <div class=\"media-body ml-3\">\r\n                      <h6 class=\"heading text-primary mb-md-1\">My Events</h6>\r\n                      <p class=\"description d-none d-md-inline-block mb-0\">\r\n                        View events managed by you.\r\n                      </p>\r\n                    </div>\r\n                  </a>\r\n                  <a routerLink=\"/\" class=\"media d-flex align-items-center\">\r\n                    <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                      <i class=\"ni ni-palette\"></i>\r\n                    </div>\r\n                    <div class=\"media-body ml-3\">\r\n                      <h6 class=\"heading text-primary mb-md-1\">Create Event</h6>\r\n                      <p class=\"description d-none d-md-inline-block mb-0\">\r\n                        Create your event.\r\n                      </p>\r\n                    </div>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n          <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\r\n            <li class=\"nav-item\">\r\n              <form action=\"\">\r\n                  <div class=\"form-group mb-0\">\r\n                    <div class=\"input-group input-group-alternative\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\r\n                    </div>\r\n                  </div>\r\n              </form>\r\n            </li>\r\n            <li class=\"nav-item d-none d-lg-block ml-lg-4\">\r\n              <a routerLink=\"/login\" class=\"btn btn-neutral btn-icon\">\r\n                <span class=\"nav-link-inner--text\">Sign In</span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html")
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"position-relative\">\r\n        <!-- shape Hero -->\r\n        <section class=\"section section-lg section-shaped pb-250\">\r\n          <div class=\"shape shape-style-1 shape-default\">\r\n          </div>\r\n          <div class=\"container py-lg-md d-flex\">\r\n            <div class=\"col px-0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <h1 class=\"display-3  text-white\">Find your event and vote</h1>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- SVG separator -->\r\n          <div class=\"separator separator-bottom separator-skew\">\r\n            <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n            </svg>\r\n          </div>\r\n        </section>\r\n        <!-- 1st Hero Variation -->\r\n    </div>\r\n    <section class=\"section section-lg pt-lg-0 mt--200\">\r\n        <div class=\"container\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"row row-grid\">\r\n                <div class=\"col-lg-4\">\r\n                  <div class=\"card card-lift--hover shadow border-0\">\r\n                    <div class=\"card-body py-5\">\r\n                      <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\r\n                        <i class=\"ni ni-check-bold\"></i>\r\n                      </div>\r\n                      <h6 class=\"text-primary text-uppercase\">Download Argon</h6>\r\n                      <p class=\"description mt-3\">Argon is a great free UI package based on Bootstrap 4 that includes the most important components and features.</p>\r\n                      <div>\r\n                        <span class=\"badge badge-pill badge-primary\">design</span>\r\n                        <span class=\"badge badge-pill badge-primary\">system</span>\r\n                        <span class=\"badge badge-pill badge-primary\">creative</span>\r\n                      </div>\r\n                      <a href=\"#\" class=\"btn btn-primary mt-4\">Learn more</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                  <div class=\"card card-lift--hover shadow border-0\">\r\n                    <div class=\"card-body py-5\">\r\n                      <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\r\n                        <i class=\"ni ni-istanbul\"></i>\r\n                      </div>\r\n                      <h6 class=\"text-success text-uppercase\">Build Something</h6>\r\n                      <p class=\"description mt-3\">Argon is a great free UI package based on Bootstrap 4 that includes the most important components and features.</p>\r\n                      <div>\r\n                        <span class=\"badge badge-pill badge-success\">business</span>\r\n                        <span class=\"badge badge-pill badge-success\">vision</span>\r\n                        <span class=\"badge badge-pill badge-success\">success</span>\r\n                      </div>\r\n                      <a href=\"#\" class=\"btn btn-success mt-4\">Learn more</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                  <div class=\"card card-lift--hover shadow border-0\">\r\n                    <div class=\"card-body py-5\">\r\n                      <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\r\n                        <i class=\"ni ni-planet\"></i>\r\n                      </div>\r\n                      <h6 class=\"text-warning text-uppercase\">Prepare Launch</h6>\r\n                      <p class=\"description mt-3\">Argon is a great free UI package based on Bootstrap 4 that includes the most important components and features.</p>\r\n                      <div>\r\n                        <span class=\"badge badge-pill badge-warning\">marketing</span>\r\n                        <span class=\"badge badge-pill badge-warning\">product</span>\r\n                        <span class=\"badge badge-pill badge-warning\">launch</span>\r\n                      </div>\r\n                      <a href=\"#\" class=\"btn btn-warning mt-4\">Learn more</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </section>\r\n</main>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mickeymond\Documents\Projects\Personal\AngularArgonDesign\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map