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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesComponent"] },
    { path: 'details/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_2__["DetailsComponent"] },
    { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <app-sidebar></app-sidebar>\n\n  <div id=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'employees';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _table_salary_table_salary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table-salary/table-salary.component */ "./src/app/table-salary/table-salary.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <- NgModel lives here












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_11__["EmployeesComponent"],
                _table_salary_table_salary_component__WEBPACK_IMPORTED_MODULE_12__["TableSalaryComponent"],
                _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_14__["DataTableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-table/data-table-datasource.ts":
/*!*****************************************************!*\
  !*** ./src/app/data-table/data-table-datasource.ts ***!
  \*****************************************************/
/*! exports provided: DataTableSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSource", function() { return DataTableSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _sorter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sorter */ "./src/app/sorter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * Data source for the TableSalary view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var DataTableSource = /** @class */ (function (_super) {
    __extends(DataTableSource, _super);
    function DataTableSource(paginator, sort, data) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = data;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    DataTableSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginators length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    DataTableSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side).
     */
    DataTableSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side).
     */
    DataTableSource.prototype.getSortedData = function (data) {
        return _sorter__WEBPACK_IMPORTED_MODULE_3__["Sorter"].sort(this.sort, data);
    };
    return DataTableSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));



/***/ }),

/***/ "./src/app/data-table/data-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/data-table/data-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n    <ng-container matColumnDef=\"year\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Year</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.year }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"jan\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Jan</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.jan }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"feb\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Feb</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.feb }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"mar\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Mar</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.mar }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"apr\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Apr</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.apr }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"may\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>May</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.may }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"jun\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Jun</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.jun }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"jul\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Jul</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.jul }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"aug\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Aug</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.aug }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"sep\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Sep</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.sep }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"okt\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Okt</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.okt}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"nov\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Nov</th>\n        <td mat-cell *matCellDef=\"let row\">{{ row.nov }}</td>\n      </ng-container>\n\n    <ng-container matColumnDef=\"dec\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Dec</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.dec}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <!-- [length]=\"dataSource.data.length\" -->\n  <mat-paginator #paginator\n    [pageIndex]=\"0\"\n    [pageSize]=\"50\"\n    [pageSizeOptions]=\"[1, 25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/data-table/data-table.component.scss":
/*!******************************************************!*\
  !*** ./src/app/data-table/data-table.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/data-table/data-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/data-table/data-table.component.ts ***!
  \****************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_table_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-table-datasource */ "./src/app/data-table/data-table-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @title Basic use of `<table mat-table>`
 */
var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['year', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _data_table_datasource__WEBPACK_IMPORTED_MODULE_2__["DataTableSource"](this.paginator, this.sort, this.source);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DataTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DataTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "source", void 0);
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.scss */ "./src/app/data-table/data-table.component.scss")],
        })
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-data */ "./src/app/mock-data.ts");
/* harmony import */ var _models_employee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/employee */ "./src/app/models/employee.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = 'https://localhost:44302/api/Employees';
    }
    /**
     * GET employees from the server
     */
    DataService.prototype.getEmployees = function () {
        var _this = this;
        // TODO change 'values' to 'employees'
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (employees) { return _this.log('fetched employees'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getEmployees', [])));
    };
    DataService.prototype.getEmployee = function (employeeId) {
        var _this = this;
        return this.http.get(this.url + "/" + employeeId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.log("fetched employee id=" + employeeId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getHero id=" + employeeId)));
    };
    DataService.prototype.updateEmployee = function (employee) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_3__["EMPLOYEES"][0]);
        // return this.http.delete(
        //   this.baseUrl + "/" + id,
        //   { headers: this.getCommonHeaders() }
        // ).pipe(
        //   map(res => res.json()),
        //   catchError (this.handleErrors)
        // );
    };
    DataService.prototype.deleteEmployee = function (employee) {
        //TODO
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _models_employee__WEBPACK_IMPORTED_MODULE_4__["Employee"]());
    };
    DataService.prototype.getPosts = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    DataService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    DataService.prototype.log = function (message) {
        console.log("DataService: " + message);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"employee$\">\n  <h1>Edit Employee</h1>\n\n  <form (ngSubmit)=\"onSubmit()\" #employeeForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" required\n        [(ngModel)]=\"employee$.name\" name=\"name\" #name=\"ngModel\">\n      <div [hidden]=\"name.valid || name.pristine\"\n        class=\"alert alert-danger\">\n          Name is required\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" required\n        [(ngModel)]=\"employee$.email\" name=\"email\" #email=\"ngModel\">\n      <div [hidden]=\"email.valid || email.pristine\"\n        class=\"alert alert-danger\">\n          Email is required\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"phone\">Phone</label>\n      <input type=\"text\" class=\"form-control\" id=\"phone\" required\n        [(ngModel)]=\"employee$.phone\" name=\"phone\" #phone=\"ngModel\">\n      <div [hidden]=\"phone.valid || phone.pristine\"\n        class=\"alert alert-danger\">\n          Phone is required\n      </div>\n    </div>\n\n    <button type=\"button\" class=\"btn btn-link\" (click)=\"onBack()\">Back</button>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!employeeForm.form.valid\">Save</button>\n\n  </form>\n\n  <div *ngIf=\"employee$.salaries !== undefined\">\n    <app-data-table [source]=\"employee$.salaries\"></app-data-table>\n  </div>\n  \n  <div *ngIf=\"employee$.salaries === undefined\">\n    No Salaries for {{ employee$.name }}\n  </div>\n  \n</div>\n  \n\n\n"

/***/ }),

/***/ "./src/app/details/details.component.scss":
/*!************************************************!*\
  !*** ./src/app/details/details.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\n  float: right; }\n\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_employee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/employee */ "./src/app/models/employee.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(data, route, location) {
        var _this = this;
        this.data = data;
        this.route = route;
        this.location = location;
        this.employee$ = new _models_employee__WEBPACK_IMPORTED_MODULE_3__["Employee"]();
        this.isEditMode = false;
        this.route.params.subscribe(function (params) { return _this.employee$.id = params.id; });
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getEmployee(this.employee$.id).subscribe(function (data) { return _this.employee$ = data; });
    };
    DetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.data.updateEmployee(this.employee$)
            .subscribe(function () {
            console.log("Employee updated");
            _this.location.back();
        }, function () { console.log("Failed to update employee"); });
    };
    DetailsComponent.prototype.onBack = function () {
        this.location.back();
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.html":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Employees</h1>\n\n\n\n<!--[@listStagger]=\"employees$\"-->\n<ul>\n  <li *ngFor=\"let employee of employees$\">\n    <span>\n      <a routerLink=\"/details/{{ employee.id }}\">{{ employee.name }}</a>\n      <i class=\"material-icons right\" (click)=\"onDeleteClicked(employee)\">delete</i>\n    </span>\n    <ul>\n      <li>{{ employee.email }}</li>\n      <li>{{ employee.phone }}</li>\n      <li>{{ employee.birthday }}</li>\n    </ul>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/employees/employees.component.scss":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(data) {
        this.data = data;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("employees ngOnInit() called");
        this.data.getEmployees().subscribe(function (data) { return _this.employees$ = data; });
    };
    EmployeesComponent.prototype.onDeleteClicked = function (employee) {
        if (confirm("Are you sure you want to delete this employee?")) {
            this.employees$ = this.employees$.filter(function (e) { return e !== employee; });
            this.data.deleteEmployee(employee).subscribe();
        }
    };
    EmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.scss */ "./src/app/employees/employees.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/mock-data.ts":
/*!******************************!*\
  !*** ./src/app/mock-data.ts ***!
  \******************************/
/*! exports provided: EMPLOYEES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPLOYEES", function() { return EMPLOYEES; });
var EMPLOYEES = [
    { id: 1, name: "Adam Hrin", birthday: "09.03.1997", email: "adam.hrin@gmail.com", phone: "0915636998",
        salaries: [
            {
                year: 2013,
                jan: 123,
                feb: 456,
                mar: 759,
                apr: 147,
                may: 258,
                jun: 369,
                jul: 753,
                aug: 159,
                sep: 125,
                okt: 456,
                nov: 453,
                dec: 489
            },
            {
                year: 2014,
                jan: 123,
                feb: 456,
                mar: 4129,
                apr: 147,
                may: 258,
                jun: 369,
                jul: 753,
                aug: 159,
                sep: 125,
                okt: 456,
                nov: 453,
                dec: 489
            },
            {
                year: 2015,
                jan: 123,
                feb: 456,
                mar: 789123,
                apr: 147,
                may: 258,
                jun: 369,
                jul: 753,
                aug: 159,
                sep: 125,
                okt: 456,
                nov: 453,
                dec: 489
            },
            {
                year: 2016,
                jan: 123,
                feb: 456,
                mar: 789753,
                apr: 147,
                may: 258,
                jun: 369,
                jul: 753,
                aug: 159,
                sep: 125,
                okt: 456,
                nov: 453,
                dec: 489
            },
            {
                year: 2017,
                jan: 123,
                feb: 456,
                mar: 789,
                apr: 147,
                may: 258,
                jun: 369,
                jul: 753,
                aug: 159,
                sep: 125,
                okt: 456,
                nov: 453,
                dec: 489
            }
        ]
    },
    { id: 2, name: "Michal Hrin", birthday: "10.04.1993", email: "michal.hrin@gmail.com", phone: "0904256789",
        salaries: [
            {
                year: 2013,
                jan: 123,
                feb: 456,
                mar: 759,
                apr: 147,
                may: 258,
                jun: 369,
                jul: 753,
                aug: 159,
                sep: 125,
                okt: 456,
                nov: 453,
                dec: 489
            },
            {
                year: 2014,
                jan: 123,
                feb: 456,
                mar: 4129,
                apr: 147,
                may: 258,
                jun: 369,
                jul: 753,
                aug: 159,
                sep: 125,
                okt: 456,
                nov: 453,
                dec: 489
            },
            {
                year: 2015,
                jan: 123,
                feb: 456,
                mar: 789123,
                apr: 147,
                may: 258,
                jun: 369,
                jul: 753,
                aug: 159,
                sep: 125,
                okt: 456,
                nov: 453,
                dec: 489
            }
        ]
    },
    { id: 3, name: "Miroslav Hrin", birthday: "11.05.1968", email: "miroslav.hrin@gmail.com", phone: "0934526014",
        salaries: [
            {
                year: 2013,
                jan: 123,
                feb: 456,
                mar: 759,
                apr: 147,
                may: 258,
                jun: 369,
                jul: 753,
                aug: 159,
                sep: 125,
                okt: 456,
                nov: 453,
                dec: 489
            },
            {
                year: 2014,
                jan: 123,
                feb: 456,
                mar: 4129,
                apr: 147,
                may: 258,
                jun: 369,
                jul: 753,
                aug: 159,
                sep: 125,
                okt: 456,
                nov: 453,
                dec: 489
            },
            {
                year: 2015,
                jan: 123,
                feb: 456,
                mar: 789123,
                apr: 147,
                may: 258,
                jun: 369,
                jul: 753,
                aug: 159,
                sep: 125,
                okt: 456,
                nov: 453,
                dec: 489
            },
            {
                year: 2016,
                jan: 123,
                feb: 456,
                mar: 789753,
                apr: 147,
                may: 258,
                jun: 369,
                jul: 753,
                aug: 159,
                sep: 125,
                okt: 456,
                nov: 453,
                dec: 489
            },
            {
                year: 2017,
                jan: 123,
                feb: 456,
                mar: 789,
                apr: 147,
                may: 258,
                jun: 369,
                jul: 753,
                aug: 159,
                sep: 125,
                okt: 456,
                nov: 453,
                dec: 489
            }
        ] },
    { id: 4, name: "Michal Franek", birthday: "12.06.1997", email: "michal.franek@gmail.com", phone: "0902183467", salaries: [] },
    { id: 5, name: "Dominik Rohal", birthday: "13.07.1996", email: "dominik.rohal@gmail.com", phone: "0919371564", salaries: [] }
];


/***/ }),

/***/ "./src/app/models/employee.ts":
/*!************************************!*\
  !*** ./src/app/models/employee.ts ***!
  \************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Posts</h1>\n\n<ul>\n  <li *ngFor=\"let post of posts$\">\n    <a>{{ post.title }}</a>\n    <p>{{ post.body }}</p>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = /** @class */ (function () {
    function PostsComponent(data) {
        this.data = data;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getPosts().subscribe(function (data) { return _this.posts$ = data; });
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li>\n      <a routerLink=\"\" [class.activated]=\"currentUrl == '/'\">\n        <i class=\"material-icons\">supervised_user_circle</i>\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"posts\" [class.activated]=\"currentUrl == '/posts'\">\n        <i class=\"material-icons\">trending_up</i>\n      </a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background: #2D2E2E;\n  height: 100%; }\n  nav ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0; }\n  nav ul li a {\n      color: #fff;\n      padding: 20px;\n      display: block; }\n  nav ul li .activated {\n      background-color: #00a8ff; }\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (_) {
            if (_ instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.currentUrl = _.url;
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sorter.ts":
/*!***************************!*\
  !*** ./src/app/sorter.ts ***!
  \***************************/
/*! exports provided: Sorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sorter", function() { return Sorter; });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.sort = function (sort, data) {
        var _this = this;
        if (!sort.active || sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'year': return _this.compare(+a.year, +b.year, isAsc);
                case 'jan': return _this.compare(+a.jan, +b.jan, isAsc);
                case 'feb': return _this.compare(+a.feb, +b.feb, isAsc);
                case 'mar': return _this.compare(+a.mar, +b.mar, isAsc);
                case 'apr': return _this.compare(+a.apr, +b.apr, isAsc);
                case 'jun': return _this.compare(+a.jun, +b.jun, isAsc);
                case 'jul': return _this.compare(+a.jul, +b.jul, isAsc);
                case 'aug': return _this.compare(+a.aug, +b.aug, isAsc);
                case 'sep': return _this.compare(+a.sep, +b.sep, isAsc);
                case 'okt': return _this.compare(+a.okt, +b.okt, isAsc);
                case 'nov': return _this.compare(+a.nov, +b.nov, isAsc);
                case 'dec': return _this.compare(+a.dec, +b.dec, isAsc);
                default: return 0;
            }
        });
    };
    /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
    Sorter.compare = function (a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    return Sorter;
}());



/***/ }),

/***/ "./src/app/table-salary/table-salary-datasource.ts":
/*!*********************************************************!*\
  !*** ./src/app/table-salary/table-salary-datasource.ts ***!
  \*********************************************************/
/*! exports provided: TableSalaryDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSalaryDataSource", function() { return TableSalaryDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    {
        year: 2013,
        jan: 123,
        feb: 456,
        mar: 759,
        apr: 147,
        may: 258,
        jun: 369,
        jul: 753,
        aug: 159,
        sep: 125,
        okt: 456,
        nov: 453,
        dec: 489
    },
    {
        year: 2014,
        jan: 123,
        feb: 456,
        mar: 4129,
        apr: 147,
        may: 258,
        jun: 369,
        jul: 753,
        aug: 159,
        sep: 125,
        okt: 456,
        nov: 453,
        dec: 489
    },
    {
        year: 2015,
        jan: 123,
        feb: 456,
        mar: 789123,
        apr: 147,
        may: 258,
        jun: 369,
        jul: 753,
        aug: 159,
        sep: 125,
        okt: 456,
        nov: 453,
        dec: 489
    },
    {
        year: 2016,
        jan: 123,
        feb: 456,
        mar: 789753,
        apr: 147,
        may: 258,
        jun: 369,
        jul: 753,
        aug: 159,
        sep: 125,
        okt: 456,
        nov: 453,
        dec: 489
    },
    {
        year: 2017,
        jan: 123,
        feb: 456,
        mar: 789,
        apr: 147,
        may: 258,
        jun: 369,
        jul: 753,
        aug: 159,
        sep: 125,
        okt: 456,
        nov: 453,
        dec: 489
    }
];
/**
 * Data source for the TableSalary view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var TableSalaryDataSource = /** @class */ (function (_super) {
    __extends(TableSalaryDataSource, _super);
    function TableSalaryDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    TableSalaryDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginators length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    TableSalaryDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    TableSalaryDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    TableSalaryDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'year': return compare(+a.year, +b.year, isAsc);
                case 'jan': return compare(+a.jan, +b.jan, isAsc);
                case 'feb': return compare(+a.feb, +b.feb, isAsc);
                case 'mar': return compare(+a.mar, +b.mar, isAsc);
                case 'apr': return compare(+a.apr, +b.apr, isAsc);
                case 'jun': return compare(+a.jun, +b.jun, isAsc);
                case 'jul': return compare(+a.jul, +b.jul, isAsc);
                case 'aug': return compare(+a.aug, +b.aug, isAsc);
                case 'sep': return compare(+a.sep, +b.sep, isAsc);
                case 'okt': return compare(+a.okt, +b.okt, isAsc);
                case 'nov': return compare(+a.nov, +b.nov, isAsc);
                case 'dec': return compare(+a.dec, +b.dec, isAsc);
                default: return 0;
            }
        });
    };
    return TableSalaryDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/table-salary/table-salary.component.html":
/*!**********************************************************!*\
  !*** ./src/app/table-salary/table-salary.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8 data-table\">\n\n  <table mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n    \n    <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n    <ng-container matColumnDef=\"year\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Year</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.year }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"jan\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Jan</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.jan }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"feb\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Feb</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.feb }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"mar\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Mar</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.mar }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"apr\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Apr</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.apr }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"may\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>May</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.may }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"jun\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Jun</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.jun }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"jul\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Jul</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.jul }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"aug\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Aug</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.aug }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"sep\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Sep</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.sep }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"okt\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Okt</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.okt}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"nov\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Nov</th>\n        <td mat-cell *matCellDef=\"let row\">{{ row.nov }}</td>\n      </ng-container>\n\n    <ng-container matColumnDef=\"dec\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Dec</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.dec}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n    [length]=\"dataSource.data.length\"\n    [pageIndex]=\"0\"\n    [pageSize]=\"50\"\n    [pageSizeOptions]=\"[1, 25, 50, 100, 250]\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/table-salary/table-salary.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/table-salary/table-salary.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data-table {\n  width: 80%;\n  margin: 20px auto; }\n"

/***/ }),

/***/ "./src/app/table-salary/table-salary.component.ts":
/*!********************************************************!*\
  !*** ./src/app/table-salary/table-salary.component.ts ***!
  \********************************************************/
/*! exports provided: TableSalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSalaryComponent", function() { return TableSalaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _table_salary_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-salary-datasource */ "./src/app/table-salary/table-salary-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableSalaryComponent = /** @class */ (function () {
    function TableSalaryComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['year', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    }
    TableSalaryComponent.prototype.ngOnInit = function () {
        this.dataSource = new _table_salary_datasource__WEBPACK_IMPORTED_MODULE_2__["TableSalaryDataSource"](this.paginator, this.sort);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TableSalaryComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TableSalaryComponent.prototype, "sort", void 0);
    TableSalaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-salary',
            template: __webpack_require__(/*! ./table-salary.component.html */ "./src/app/table-salary/table-salary.component.html"),
            styles: [__webpack_require__(/*! ./table-salary.component.scss */ "./src/app/table-salary/table-salary.component.scss")]
        })
    ], TableSalaryComponent);
    return TableSalaryComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Employees</h1>\n\n<!--[@listStagger]=\"employees$\"-->\n<ul>\n  <li *ngFor=\"let employee of employees$\">\n    <a routerLink=\"/details/{{ employee.id }}\">{{ employee.name }}</a>\n    <ul>\n      <li>{{ employee.email }}</li>\n      <li>{{ employee.phone }}</li>\n      <li>{{ employee.age }}</li>\n      <li>{{ employee.birthday }}</li>\n    </ul>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(data) {
        this.data = data;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getEmployees().subscribe(function (data) { return _this.employees$ = data; });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], UsersComponent);
    return UsersComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Adam\solteq-assignment\code\employees-ng-client\solteq-employees-ng-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map