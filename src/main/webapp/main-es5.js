(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<router-outlet></router-outlet>\r\n<!--\r\n<app-page >Loading...</app-page>\r\n-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/searchbar/searchbar.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/searchbar/searchbar.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <form class=\"form\">\r\n      <mat-form-field class=\"full-width\">\r\n          <input type=\"text\" id=\"searchTextId\" [(ngModel)]=\"searchText\" name=\"searchText\" placeholder=\"Search By Item Name\" matInput  [matAutocomplete]=\"auto\">\r\n        <mat-autocomplete #auto=\"matAutocomplete\">\r\n          <mat-option style=\"cursor:pointer;\" *ngFor=\"let el of (elements| searchItemName: searchText)\"(click)=\"loadItemPage(el)\" \r\n              [value]=\"el.name\">\r\n              [{{el.name}}]\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n    </form>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/welcome/welcome.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/welcome/welcome.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=jumbotron>\r\n    Welcome!<br>\r\n    <div *ngIf='!passedVar.datadone'>\r\n    <mat-progress-spinner \r\n        class=\"example-margin\"\r\n        [color]=\"warn\"\r\n        [mode]=\"indeterminate\"\r\n>\r\n    </mat-progress-spinner>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/wishlist/wishlist.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/wishlist/wishlist.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron\">\r\n<h1>Your WishList</h1>  <!--maybe one day<button (click)='refreshh()' mat-raised-button color=\"warn\">Refresh</button>-->\r\n<mat-nav-list>\r\n  <mat-list-item *ngFor=\"let wish of curuser.loggeduser.items\" >\r\n      <button (click)=\"loadItem(wish)\" mat-mini-fab color=\"accent\">Go</button>\r\n    <button (click)='df(wish.id)' mat-raised-button color=\"warn\">REMOVE</button>\r\n    {{wish.name}} \r\n  </mat-list-item>\r\n</mat-nav-list>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <h2>Login </h2>\r\n    <form >\r\n        <div *ngIf=\"badlogin\" >Bad Username or Password</div>\r\n        <div class=\"form-group\">\r\n          <label for=\"UserName\">UserName</label>\r\n          <input  type=\"text\" class=\"form-control\" id=\"UserName\"  aria-describedby=\"UserName\" placeholder=\"Enter UserName\" \r\n          [(ngModel)]= \"User.username\" name=\"UserName\" required > \r\n          \r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n          <label for=\"Password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" \r\n          [(ngModel)]= \"User.password\" name = \"password\"\r\n          id=\"Password\" placeholder=\"Password\" required>\r\n        \r\n        </div>\r\n        <button (click) = login() type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n      </form>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/navbar/dialogbox.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/navbar/dialogbox.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group dynamicHeight=true (click)=\"resetLoginBoolean\">\r\n    <mat-tab label=\"Login\">\r\n<h3 mat-dialog-title>Login </h3>\r\n<mat-error *ngIf=\"badlogin\">Incorrect login info</mat-error>\r\n<div mat-dialog-content class=\"example-container\">\r\n    <mat-form-field  >\r\n        \r\n        <input matInput placeholder=\"Enter your Username\"  [(ngModel)]=\"data.username\" >\r\n        \r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field >\r\n        <input matInput placeholder=\"Enter your password\" [(ngModel)]=\"data.password\"[type]=\"hide ? 'text' : 'password'\">\r\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n        </button>\r\n    \r\n       \r\n    </mat-form-field>\r\n\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button *ngIf=\"passedVar.logged\" (click)=\"onNoClick()\">No Thanks</button>\r\n    <button *ngIf='passedVar.logged' mat-button type=\"submit\" (click)=login() [disabled]=\"flag\">Login</button> \r\n    <button *ngIf=\"!passedVar.logged\" mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Done</button>\r\n</div >\r\n<br>\r\n\r\n</mat-tab>\r\n\r\n<mat-tab *ngIf=\"passedVar.logged\" label=\"Register\">\r\n        <h3 mat-dialog-title>Register</h3>\r\n        <mat-error *ngIf=\"badlogin\">Username Taken</mat-error>\r\n    <mat-form-field  class=\"example-container\">\r\n        <input matInput placeholder=\"Enter your Username\"  [(ngModel)]=\"data.username\" >\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field class=\"example-container\">\r\n        <input matInput placeholder=\"Enter your password\" [(ngModel)]=\"data.password\"[type]=\"hide ? 'text' : 'password'\">\r\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n        </button>\r\n    \r\n       \r\n    </mat-form-field>\r\n    <div mat-dialog-actions>\r\n            <button mat-button *ngIf=\"passedVar.logged\" (click)=\"onNoClick()\">No Thanks</button>\r\n            <button *ngIf='passedVar.logged' mat-button type=\"submit\" (click)=register() [disabled]=\"flag\">Register</button> \r\n            <button *ngIf=\"!passedVar.logged\" mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Done</button>\r\n        </div >\r\n        <br>\r\n  </mat-tab>\r\n\r\n</mat-tab-group>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/navbar/navbar.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/navbar/navbar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar\">\r\n    <a class=\"navbar-brand\" href=\"#\">AQutioneer+</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"wishlist\" *ngIf=\"!passedVar.logged\">Wish List</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"itempage\" *ngIf=\"!passedVar.logged\">Transaction List</a>\r\n          </li>\r\n      </ul>\r\n      <app-searchbar *ngIf='!passedVar.logged'></app-searchbar>\r\n      <button *ngIf='passedVar.logged' mat-raised-button (click)=\"openDialog()\">Login/Register</button>\r\n      \r\n    </div>\r\n\r\n  </nav>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page/page.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"height:100px;\">\r\n\r\n    <mat-form-field class=\"container\">\r\n\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" value='{{it.name}}'placeholder=\"Search\">\r\n    </mat-form-field>\r\n</mat-toolbar>\r\n<div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n            <td mat-cell *matCellDef=\"let row\">\r\n                <row itemId='{{row.item}}'>{{row.item}} </row>\r\n            </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Favorite </th>\r\n            <td mat-cell *matCellDef=\"let row\">\r\n                    <button color=\"accent\" (click)='addf(row.item,row.ownerRealm,passedVar.loggeduser.id)' mat-icon-button aria-label=\" heart icon\">\r\n                            <mat-icon>favorite</mat-icon>\r\n                          </button>\r\n            </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"owner\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Owner </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.owner}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"quantity\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Quantity </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.quantity}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"bid\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Bid </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.bid}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"buyout\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Buyout </th>\r\n            <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.buyout }} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"timeLeft\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Time Left </th>\r\n            <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.timeLeft }} </td>\r\n        </ng-container>\r\n        <tr mat-header-row class=\"make-darker\" *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row class=\"make-dark\" *matRowDef=\"let row; columns: displayedColumns;\">\r\n        </tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"20\"></mat-paginator>\r\n</div>\r\n<button (click)=loadScript() class=\"btn btn-primary\"></button>"

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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _component_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/wishlist/wishlist.component */ "./src/app/component/wishlist/wishlist.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _component_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/welcome/welcome.component */ "./src/app/component/welcome/welcome.component.ts");







var routes = [
    { path: 'server-select',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    {
        path: 'wishlist',
        component: _component_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_4__["WishlistComponent"]
    },
    {
        path: 'itempage',
        component: _page_page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"]
    },
    {
        path: '',
        component: _component_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _login_passedVar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/passedVar */ "./src/app/login/passedVar.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_loadlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/loadlist.service */ "./src/app/service/loadlist.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(passedVar, router, http, dat) {
        this.passedVar = passedVar;
        this.router = router;
        this.http = http;
        this.dat = dat;
        this.url = 'http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/Api/';
        this.title = 'testing2';
        if (this.passedVar.processesed) {
            this.dat.getlist().subscribe(function (data) {
                passedVar.auctions = data.auctions;
                passedVar.datadone = true;
            });
        }
        this.passedVar.processesed = false;
        /*
        passedVar.auctions =
         [
           {auc:2046327290,item:159535,owner:"Sekcmexi",ownerRealm:"Arthas",bid:2259532,buyout:2300000,quantity:1,timeLeft:"VERY_LONG",},
           {auc:2047441418,item:24588,owner:"Lowkeygreens",ownerRealm:"Arthas",bid:32516400,buyout:32516400,quantity:4,timeLeft:"VERY_LONG",}
           ]
           */
    }
    AppComponent.ctorParameters = function () { return [
        { type: _login_passedVar__WEBPACK_IMPORTED_MODULE_2__["global"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _service_loadlist_service__WEBPACK_IMPORTED_MODULE_5__["LoadlistService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_passedVar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/passedVar */ "./src/app/login/passedVar.ts");
/* harmony import */ var _login_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/navbar/navbar.component */ "./src/app/login/navbar/navbar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _page_injectedRow__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./page/injectedRow */ "./src/app/page/injectedRow.ts");
/* harmony import */ var _component_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./component/searchbar/searchbar.component */ "./src/app/component/searchbar/searchbar.component.ts");
/* harmony import */ var _pipe_search_item_name_pipe__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pipe/search-item-name.pipe */ "./src/app/pipe/search-item-name.pipe.ts");
/* harmony import */ var _component_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./component/wishlist/wishlist.component */ "./src/app/component/wishlist/wishlist.component.ts");
/* harmony import */ var _component_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./component/welcome/welcome.component */ "./src/app/component/welcome/welcome.component.ts");

























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_6__["PageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _login_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _login_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["loginpop"],
                _page_injectedRow__WEBPACK_IMPORTED_MODULE_52__["MyComponent"],
                _component_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_53__["SearchbarComponent"],
                _pipe_search_item_name_pipe__WEBPACK_IMPORTED_MODULE_54__["SearchItemNamePipe"],
                _component_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_55__["WishlistComponent"],
                _component_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_56__["WelcomeComponent"],
            ],
            entryComponents: [_login_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["loginpop"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_49__["MatToolbarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_18__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_20__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_34__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_35__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_45__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_49__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_16__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["ScrollingModule"],
            ],
            providers: [_login_passedVar__WEBPACK_IMPORTED_MODULE_10__["global"],],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/searchbar/searchbar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/searchbar/searchbar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".poor{\r\n    color: #9d9d9d\r\n}\r\n.common{\r\n    color:#ffffff\r\n}\r\n.uncommon{\r\n    color: #1eff00\t\r\n}\r\n.rare{\r\n    color: #0070dd\t\r\n}\r\n.epic{\r\n    color: #a335ee\t\r\n}\r\n.legendary{\r\n    color: #ff8000\t\r\n}\r\n.artifact{\r\n    color: #e6cc80\t\r\n}\r\n.blizz-blue{\r\n    color: #00ccff\t\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NlYXJjaGJhci9zZWFyY2hiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvb3J7XHJcbiAgICBjb2xvcjogIzlkOWQ5ZFxyXG59XHJcbi5jb21tb257XHJcbiAgICBjb2xvcjojZmZmZmZmXHJcbn1cclxuLnVuY29tbW9ue1xyXG4gICAgY29sb3I6ICMxZWZmMDBcdFxyXG59XHJcbi5yYXJle1xyXG4gICAgY29sb3I6ICMwMDcwZGRcdFxyXG59XHJcbi5lcGlje1xyXG4gICAgY29sb3I6ICNhMzM1ZWVcdFxyXG59XHJcbi5sZWdlbmRhcnl7XHJcbiAgICBjb2xvcjogI2ZmODAwMFx0XHJcbn1cclxuLmFydGlmYWN0e1xyXG4gICAgY29sb3I6ICNlNmNjODBcdFxyXG59XHJcblxyXG4uYmxpenotYmx1ZXtcclxuICAgIGNvbG9yOiAjMDBjY2ZmXHRcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/searchbar/searchbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/searchbar/searchbar.component.ts ***!
  \************************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_login_passedVar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/login/passedVar */ "./src/app/login/passedVar.ts");






var SearchbarComponent = /** @class */ (function () {
    //grabs the json file and then loads it in the elements array
    //Which the html grabs and populates the table
    function SearchbarComponent(http, route, passedVar) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.passedVar = passedVar;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        //json file contains all Items in game
        this._jsonURL = 'assets/ItemList.json';
        //Search Text
        this.searchText = '';
        this.getJSON().subscribe(function (data) {
            _this.elements = data;
            _this.passedVar.itemlist = data;
        });
    }
    //Get the Json of the ItemList
    SearchbarComponent.prototype.getJSON = function () {
        return this.http.get(this._jsonURL);
    };
    SearchbarComponent.prototype.ngOnInit = function () { };
    //When an item is clicked in the table will then load another component with item details
    SearchbarComponent.prototype.loadItemPage = function (clickedItem) {
        this.route.navigate(['itempage', clickedItem]);
    };
    SearchbarComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_login_passedVar__WEBPACK_IMPORTED_MODULE_5__["global"] }
    ]; };
    SearchbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchbar',
            template: __webpack_require__(/*! raw-loader!./searchbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/searchbar/searchbar.component.html"),
            styles: [__webpack_require__(/*! ./searchbar.component.css */ "./src/app/component/searchbar/searchbar.component.css")]
        })
    ], SearchbarComponent);
    return SearchbarComponent;
}());



/***/ }),

/***/ "./src/app/component/welcome/welcome.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/welcome/welcome.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom_cont{\r\n    max-width: 100%;\r\n    max-height: 100%\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tX2NvbnR7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/welcome/welcome.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/welcome/welcome.component.ts ***!
  \********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_passedVar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../login/passedVar */ "./src/app/login/passedVar.ts");



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(passedVar) {
        this.passedVar = passedVar;
        console.log(this.passedVar.datadone);
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.ctorParameters = function () { return [
        { type: _login_passedVar__WEBPACK_IMPORTED_MODULE_2__["global"] }
    ]; };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/component/welcome/welcome.component.css")]
        })
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/component/wishlist/wishlist.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/wishlist/wishlist.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list-item{\r\nbackground-color: blanchedalmond\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbGlzdC1pdGVte1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/component/wishlist/wishlist.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/wishlist/wishlist.component.ts ***!
  \**********************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_login_passedVar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/login/passedVar */ "./src/app/login/passedVar.ts");





//TODO Add the min price to wishlist
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'Application/json',
    })
};
var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(route, curuser, http) {
        this.route = route;
        this.curuser = curuser;
        this.http = http;
        this.url = 'http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/Api/';
        this.memeber = curuser.loggeduser;
        this.list = this.memeber.items;
    }
    WishlistComponent.prototype.ngOnInit = function () {
    };
    WishlistComponent.prototype.loadItem = function (wish) {
        if (wish != null || wish != undefined) {
            this.route.navigate(['itempage', wish]);
        }
    };
    WishlistComponent.prototype.df = function (member_id) {
        var send = {
            serialNumber: 0,
            name: null,
            id: member_id
        };
        console.log(send);
        this.http.post(this.url + "removeFavorite", send, httpOptions).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    WishlistComponent.prototype.refreshh = function () {
        this.curuser.loggeduser.id;
        var send = {};
        this.http.post(this.url + "list", send, httpOptions).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    WishlistComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_login_passedVar__WEBPACK_IMPORTED_MODULE_4__["global"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! raw-loader!./wishlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/component/wishlist/wishlist.component.css")]
        })
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _passedVar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passedVar */ "./src/app/login/passedVar.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var LoginComponent = /** @class */ (function () {
    function LoginComponent(passedVar, http) {
        this.passedVar = passedVar;
        this.http = http;
        this.User = {
            username: null,
            password: null
        };
        this.test2url = 'http://localhost:8080/wowapi/';
        this.testurl = 'http://localhost:8080/TestPiple/Api/login';
        this.url = 'http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/Api/login';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log(this.User);
        //this.http.post<User[]>( this.url, this.User, httpOptions).subscribe(
        // data=>{ console.log(data),
        this.passedVar.logged = !this.passedVar.logged;
        // },
        //   error=> {console.log(error),this.badlogin=true} )
    };
    LoginComponent.prototype.login2 = function () {
        this.http.get(this.test2url).subscribe(function (data) { console.log(data); }, function (error) { return console.log(error); });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _passedVar__WEBPACK_IMPORTED_MODULE_2__["global"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());

// this.http.get<files[]>(this.transurl,httpOptions).subscribe(
//  data=>
//  { this.returned = data
//    console.log(data)
//})


/***/ }),

/***/ "./src/app/login/navbar/navbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/login/navbar/navbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-container2{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n  }\r\n  \r\n  .example-container2 > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .navbar-custom{\r\n    background-color: darkturquoise\r\n  }\r\n  \r\n  .nav-link{\r\n    -webkit-text-decoration-color: black;\r\n            text-decoration-color: black\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFO0VBQ0Y7O0VBQ0E7SUFDRSxvQ0FBMkI7WUFBM0I7O0VBRUYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNvbnRhaW5lcjJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyMiA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWN1c3RvbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmt0dXJxdW9pc2VcclxuICB9XHJcbiAgLm5hdi1saW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBibGFja1xyXG5cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/login/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/login/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent, loginpop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginpop", function() { return loginpop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _passedVar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../passedVar */ "./src/app/login/passedVar.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(passedVar, dialog) {
        this.passedVar = passedVar;
        this.dialog = dialog;
        this.hide = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(loginpop, {
            data: { username: this.username, password: this.password }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.user = result;
            console.log(_this.user);
        });
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _passedVar__WEBPACK_IMPORTED_MODULE_3__["global"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/login/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());

var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var loginpop = /** @class */ (function () {
    function loginpop(passedVar, dialogRef, http, router, data) {
        this.passedVar = passedVar;
        this.dialogRef = dialogRef;
        this.http = http;
        this.router = router;
        this.data = data;
        this.url = 'http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/Api/';
    }
    loginpop.prototype.ngOnInit = function () {
        this.flag = false;
    };
    loginpop.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    loginpop.prototype.login = function () {
        var _this = this;
        console.log(this.data);
        this.flag = !this.flag;
        this.http.post(this.url + "login", this.data, httpOptions).subscribe(function (data) {
            _this.passedVar.loggeduser = data;
            console.log(_this.passedVar.loggeduser),
                _this.passedVar.logged = !_this.passedVar.logged;
            _this.badlogin = false;
        }, function (error) {
            console.log(error);
            _this.badlogin = true;
            _this.delay(500).then(function (any) { return _this.flag = !_this.flag; }); //jank way to stop inputs spam, only unlocks after 500 ms
        });
    };
    loginpop.prototype.delay = function (ms) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return console.log(""); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    loginpop.prototype.register = function () {
        var _this = this;
        this.flag = !this.flag;
        this.http.post(this.url + "create", this.data, httpOptions).subscribe(function (data) {
            console.log(data),
                _this.passedVar.loggeduser = data[0];
            _this.passedVar.logged = !_this.passedVar.logged;
        }, function (error) {
            console.log(error);
            _this.badlogin = true;
            _this.delay(500).then(function (any) { return _this.flag = !_this.flag; }); //jank way to stop inputs spam, only unlocks after 500 ms
        });
    };
    loginpop.prototype.resetLoginBoolean = function () {
        console.log("Fired");
        this.badlogin = false;
    };
    loginpop.ctorParameters = function () { return [
        { type: _passedVar__WEBPACK_IMPORTED_MODULE_3__["global"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    loginpop = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! raw-loader!./dialogbox.html */ "./node_modules/raw-loader/index.js!./src/app/login/navbar/dialogbox.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/login/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], loginpop);
    return loginpop;
}());



/***/ }),

/***/ "./src/app/login/passedVar.ts":
/*!************************************!*\
  !*** ./src/app/login/passedVar.ts ***!
  \************************************/
/*! exports provided: global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return global; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var global = /** @class */ (function () {
    function global() {
        this.loaded = false;
        this.logged = true;
        this.processesed = true;
        this.notprocessesed = true;
        this.datadone = false;
    }
    global = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], global);
    return global;
}());



/***/ }),

/***/ "./src/app/page/injectedRow.ts":
/*!*************************************!*\
  !*** ./src/app/page/injectedRow.ts ***!
  \*************************************/
/*! exports provided: MyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComponent", function() { return MyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_2__);



var MyComponent = /** @class */ (function () {
    function MyComponent() {
    }
    MyComponent.prototype.ngOnInit = function () {
        Object(q__WEBPACK_IMPORTED_MODULE_2__["delay"])(250).then(this.loadScript);
    };
    MyComponent.prototype.loadScript = function () {
        $WowheadPower.refreshLinks();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MyComponent.prototype, "itemId", void 0);
    MyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'row',
            template: "\n  <h6>\n  <a href=\"https://www.wowhead.com/item={{itemId}} \"  data-wh-icon-size=\"large\">Loading...</a>\n  \n  </h6>\n  "
        })
    ], MyComponent);
    return MyComponent;
}());



/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 95%;\r\n    margin-left:auto; \r\n    margin-right:auto;\r\n  }\r\n  .make-dark {\r\n    background-color: rgba(98, 112, 129, 0.712)\r\n    \r\n}\r\n  mat-paginator{\r\n  width: 95%;\r\n  margin-left:auto; \r\n  margin-right:auto;\r\n}\r\n  mat-form-field{\r\n  \r\n  display: -webkit-box;\r\n  \r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n  .make-darker {\r\n  background-color: white\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0U7O0FBRUo7RUFDQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0VBQ0E7O0VBRUUsb0JBQWE7O0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCO0VBQ0E7RUFDRTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bzsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICB9XHJcbiAgLm1ha2UtZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk4LCAxMTIsIDEyOSwgMC43MTIpXHJcbiAgICBcclxufVxyXG5tYXQtcGFnaW5hdG9ye1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luLWxlZnQ6YXV0bzsgXHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5tYWtlLWRhcmtlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_passedVar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/passedVar */ "./src/app/login/passedVar.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_loadlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/loadlist.service */ "./src/app/service/loadlist.service.ts");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var PageComponent = /** @class */ (function () {
    function PageComponent(passedVar, route, http, dat) {
        this.passedVar = passedVar;
        this.route = route;
        this.http = http;
        this.dat = dat;
        this.displayedColumns = ['name', 'id', 'quantity', 'owner', 'bid', 'buyout', 'timeLeft',];
        this.url = 'http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/Api/';
        //this.dat.getlist().subscribe()
        this.list = this.passedVar.auctions;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.list);
    }
    PageComponent.prototype.ngOnInit = function () {
        this.it = {
            id: +this.route.snapshot.paramMap.get('id'),
            name: this.route.snapshot.paramMap.get('name'),
            quality: +this.route.snapshot.paramMap.get('quality')
        };
        // Assign the data to the data source for the table to render
        if (this.passedVar.notprocessesed) {
            for (var index = 0; index < this.list.length; index++) {
                this.list[index].buyout = (this.list[index].buyout / 1000);
                this.list[index].buyout = this.list[index].buyout.toFixed(0);
                this.list[index].bid = (this.list[index].bid / 1000);
                this.list[index].bid = this.list[index].bid.toFixed(0);
                this.list[index].timeLeft = (this.list[index].timeLeft.replace("_", " "));
                this.list[index].ownerRealm = this.checkjson(this.list[index].item);
            }
        }
        this.passedVar.notprocessesed = false;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    PageComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    PageComponent.prototype.loadScript = function () {
        $WowheadPower.refreshLinks();
        this.applyFilter(this.it.name);
    };
    PageComponent.prototype.checkjson = function (itemnumber) {
        try {
            this.hold = this.passedVar.itemlist.find(function (x) { return x.id == itemnumber; }).name;
        }
        finally {
            return this.hold;
        }
    };
    PageComponent.prototype.addf = function (serialNumber, name, member_id) {
        var send = {
            serialNumber: serialNumber,
            name: name,
            member_id: member_id
        };
        this.http.post(this.url + "addFavorite", send, httpOptions).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    PageComponent.ctorParameters = function () { return [
        { type: _login_passedVar__WEBPACK_IMPORTED_MODULE_3__["global"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _service_loadlist_service__WEBPACK_IMPORTED_MODULE_6__["LoadlistService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], PageComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], PageComponent.prototype, "sort", void 0);
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/index.js!./src/app/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")]
        })
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/pipe/search-item-name.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipe/search-item-name.pipe.ts ***!
  \***********************************************/
/*! exports provided: SearchItemNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItemNamePipe", function() { return SearchItemNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchItemNamePipe = /** @class */ (function () {
    function SearchItemNamePipe() {
    }
    SearchItemNamePipe.prototype.transform = function (items, itemName) {
        if (itemName && itemName.length > 1) {
            console.log("Firing");
            return this.isSimilar(items, itemName);
        }
    };
    SearchItemNamePipe.prototype.isSimilar = function (element, nameSearch) {
        var e_1, _a;
        var containItem = [];
        try {
            for (var element_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](element), element_1_1 = element_1.next(); !element_1_1.done; element_1_1 = element_1.next()) {
                var it = element_1_1.value;
                if (it.name.toLowerCase().match(nameSearch.toLowerCase()) && containItem.length < 10)
                    containItem.push(it);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (element_1_1 && !element_1_1.done && (_a = element_1.return)) _a.call(element_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return containItem;
    };
    SearchItemNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'searchItemName'
        })
    ], SearchItemNamePipe);
    return SearchItemNamePipe;
}());



/***/ }),

/***/ "./src/app/service/loadlist.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/loadlist.service.ts ***!
  \*********************************************/
/*! exports provided: LoadlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadlistService", function() { return LoadlistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoadlistService = /** @class */ (function () {
    function LoadlistService(http) {
        this.http = http;
        this.url = 'http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/Api/';
    }
    LoadlistService.prototype.getlist = function () {
        return this.http.get(this.url + "ping");
    };
    LoadlistService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoadlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoadlistService);
    return LoadlistService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\thefu\Documents\repos\Project2\PipeLine\lukes_angular_side\testing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map