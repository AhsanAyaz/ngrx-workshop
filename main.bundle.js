webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_notes_component__ = __webpack_require__("../../../../../src/app/notes/notes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: 'notes',
        component: __WEBPACK_IMPORTED_MODULE_2__notes_notes_component__["a" /* NotesComponent */]
    }, {
        path: '**',
        redirectTo: 'notes'
    }];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notes_notes_component__ = __webpack_require__("../../../../../src/app/notes/notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notes_list_notes_list_component__ = __webpack_require__("../../../../../src/app/notes-list/notes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notes_header_notes_header_component__ = __webpack_require__("../../../../../src/app/notes-header/notes-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notes_editor_notes_editor_component__ = __webpack_require__("../../../../../src/app/notes-editor/notes-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_notes_service__ = __webpack_require__("../../../../../src/app/services/notes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_notes_notes_reducer__ = __webpack_require__("../../../../../src/app/store/notes/notes.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__store_notes_notes_effects__ = __webpack_require__("../../../../../src/app/store/notes/notes.effects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__notes_notes_component__["a" /* NotesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__notes_header_notes_header_component__["a" /* NotesHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__notes_editor_notes_editor_component__["a" /* NotesEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__notes_list_notes_list_component__["a" /* NotesListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__ngrx_store__["i" /* StoreModule */].forRoot({ notes: __WEBPACK_IMPORTED_MODULE_16__store_notes_notes_reducer__["b" /* notesReducer */] }),
                __WEBPACK_IMPORTED_MODULE_17__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_18__store_notes_notes_effects__["a" /* NotesEffects */]]),
                __WEBPACK_IMPORTED_MODULE_15__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 25 //  Retains last 25 states
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_toastr__["a" /* ToastrModule */].forRoot({
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_notes_service__["a" /* NotesService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/notes-editor/notes-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-container\" *ngIf=\"$activeNote | async as note\">\n  <div class=\"editor-top-section\">\n    {{note.cts | date: 'medium'}}\n  </div>\n  <div class=\"editor-input\">\n      <textarea name=\"editorInput\" id=\"notesEditor\" rows=\"16\" (ngModelChange)=\"onInputChange($event)\" [(ngModel)]=\"note.text\"></textarea>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/notes-editor/notes-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n  variables that we can use in our notes app\n  within components so we don't have to use hex code\n  everywhere.\n*/\n.editor-container {\n  max-height: 100%;\n  overflow: hidden; }\n  .editor-container .editor-top-section {\n    text-align: center;\n    font-size: 14px;\n    color: #757575;\n    padding: 10px 30px 5px 30px; }\n  .editor-container .editor-input {\n    max-height: 100%;\n    margin-top: 10px;\n    overflow: auto; }\n    .editor-container .editor-input textarea {\n      padding: 0 20px;\n      width: 100%;\n      height: 100%;\n      outline: none;\n      border: none;\n      resize: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notes-editor/notes-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_notes_notes_selectors__ = __webpack_require__("../../../../../src/app/store/notes/notes.selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_notes_notes_actions__ = __webpack_require__("../../../../../src/app/store/notes/notes.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotesEditorComponent = (function () {
    function NotesEditorComponent(store) {
        this.store = store;
    }
    NotesEditorComponent.prototype.ngOnInit = function () {
        this.$activeNote = this.store.select(__WEBPACK_IMPORTED_MODULE_2__store_notes_notes_selectors__["a" /* selectActiveNote */]);
    };
    /**
     * @author Ahsan Ayaz
     * @desc Triggered when the text of the input changes.
     * Saves the text to the server
     */
    NotesEditorComponent.prototype.onInputChange = function (noteText) {
        var _this = this;
        if (noteText === void 0) { noteText = ''; }
        this.$activeNote
            .first()
            .subscribe(function (note) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_notes_notes_actions__["v" /* UpdateNote */]({
                note: note
            }));
        });
    };
    NotesEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notes-editor',
            template: __webpack_require__("../../../../../src/app/notes-editor/notes-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notes-editor/notes-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], NotesEditorComponent);
    return NotesEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notes-header/notes-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notes-header\">\n  <div class=\"left-content\">\n    <div class=\"app-name\">\n      Notes App\n    </div>\n  </div>\n  <div class=\"right-content\">\n    <button\n      *ngIf=\"$callInProgress | async\"\n      class=\"spinner btn btn-sm btn-light fa fa-refresh add-note-btn\">\n    </button>\n    <button\n      class=\"btn btn-sm btn-danger fa fa-trash add-note-btn\"\n      (click)=\"deleteSelectedNote()\"\n      *ngIf=\"($activeNote | async)\"\n      [disabled]=\"$callInProgress | async\">\n    </button>\n    <button\n      class=\"btn btn-sm btn-light fa fa-plus add-note-btn\"\n      (click)=\"addNote()\"\n      [disabled]=\"(($activeNote | async)?.text == '') || ($callInProgress | async)\">\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/notes-header/notes-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n  variables that we can use in our notes app\n  within components so we don't have to use hex code\n  everywhere.\n*/\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner {\n  position: relative;\n  width: 32px;\n  background: none;\n  border: none;\n  padding: 0; }\n  .spinner::before {\n    position: absolute;\n    color: white;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    margin: auto;\n    -webkit-animation: spinner 0.8s linear infinite;\n            animation: spinner 0.8s linear infinite;\n    width: 14px;\n    height: 16px; }\n\n:host {\n  background: #1976D2;\n  color: #FFFFFF; }\n  :host .notes-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    padding: 20px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    :host .notes-header .left-content {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n    :host .notes-header .right-content {\n      justify-self: flex-end;\n      height: 32px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notes-header/notes-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_notes_notes_actions__ = __webpack_require__("../../../../../src/app/store/notes/notes.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_notes_notes_selectors__ = __webpack_require__("../../../../../src/app/store/notes/notes.selectors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotesHeaderComponent = (function () {
    function NotesHeaderComponent(store) {
        this.store = store;
    }
    NotesHeaderComponent.prototype.ngOnInit = function () {
        this.$activeNote = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store_notes_notes_selectors__["a" /* selectActiveNote */]);
        this.$callInProgress = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store_notes_notes_selectors__["b" /* selectCallInProgress */]);
    };
    /**
     * @author Ahsan Ayaz
     * @desc Triggers when the add button is clicked.
     * It emits a new note above the component tree
     */
    NotesHeaderComponent.prototype.addNote = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_notes_notes_actions__["d" /* AddNote */]({
            note: {
                text: '',
                cts: new Date(),
                active: false,
                selected: false
            }
        }));
    };
    /**
     * @author Ahsan Ayaz
     * @desc Triggers when the delete button is clicked from the top header
     */
    NotesHeaderComponent.prototype.deleteSelectedNote = function () {
        var _this = this;
        this.$activeNote
            .first()
            .subscribe(function (activeNote) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_notes_notes_actions__["j" /* DeleteNote */]({
                note: activeNote
            }));
        });
    };
    NotesHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notes-header',
            template: __webpack_require__("../../../../../src/app/notes-header/notes-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notes-header/notes-header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], NotesHeaderComponent);
    return NotesHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notes-list/notes-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notes-list\" [@listAnimation]=\"($notesList | async)?.length.toString()\">\n  <div class=\"note-item\" *ngFor=\"let note of ($notesList | async);\" (click)=\"showNote(note)\" [class.active]=\"note._id === ($activeNote | async)?._id\">\n    <div class=\"title\">\n      {{note.text ? note.text : 'New Note'}}\n    </div>\n    <div class=\"date\">\n      {{note.cts | amTimeAgo}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/notes-list/notes-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n  variables that we can use in our notes app\n  within components so we don't have to use hex code\n  everywhere.\n*/\n.notes-list {\n  padding-top: 10px;\n  max-height: 100%;\n  overflow: auto; }\n  .notes-list .note-item {\n    padding: 10px 20px;\n    border-bottom: 1px solid #BDBDBD; }\n    .notes-list .note-item.active {\n      background: #e8e8e8; }\n    .notes-list .note-item.selected {\n      background: #2196F3; }\n      .notes-list .note-item.selected .title, .notes-list .note-item.selected .date {\n        color: white; }\n    .notes-list .note-item .title {\n      max-width: -webkit-max-content;\n      max-width: -moz-max-content;\n      max-width: max-content;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      font-size: 14px;\n      color: #212121; }\n    .notes-list .note-item .date {\n      font-size: 12px;\n      color: #757575; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notes-list/notes-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_notes_notes_selectors__ = __webpack_require__("../../../../../src/app/store/notes/notes.selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_notes_notes_actions__ = __webpack_require__("../../../../../src/app/store/notes/notes.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotesListComponent = (function () {
    function NotesListComponent(store) {
        this.store = store;
    }
    NotesListComponent.prototype.ngOnInit = function () {
        this.$notesList = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store_notes_notes_selectors__["c" /* selectNotesList */]);
        this.$activeNote = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store_notes_notes_selectors__["a" /* selectActiveNote */]);
    };
    /**
     * @author Ahsan Ayaz
     * @desc This is triggered when a note item is clicked from the list.
     * Emits an event above so the parent can perform appropriate action.
     * @param note - the note on which the user clicked to show its contents
     */
    NotesListComponent.prototype.showNote = function (note) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store_notes_notes_actions__["s" /* SetActiveNote */]({
            note: note
        }));
    };
    NotesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notes-list',
            template: __webpack_require__("../../../../../src/app/notes-list/notes-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notes-list/notes-list.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('listAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('200ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.3s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0, offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, offset: 1.0 }),
                            ]))
                        ]), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('200ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.3s ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateY(-100%)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], NotesListComponent);
    return NotesListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notes/notes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notes-app container\">\n  <app-notes-header></app-notes-header>\n  <div class=\"notes-app-content\">\n    <app-notes-list></app-notes-list>\n    <app-notes-editor>\n    </app-notes-editor>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/notes/notes.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n  variables that we can use in our notes app\n  within components so we don't have to use hex code\n  everywhere.\n*/\n:host {\n  max-height: 500px;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n  :host .notes-app {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%;\n    width: 100%; }\n    :host .notes-app app-notes-header {\n      height: 70px; }\n    :host .notes-app .notes-app-content {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      :host .notes-app .notes-app-content app-notes-list, :host .notes-app .notes-app-content app-notes-editor {\n        border: 1px solid #BDBDBD; }\n      :host .notes-app .notes-app-content app-notes-list {\n        width: 30%; }\n      :host .notes-app .notes-app-content app-notes-editor {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notes/notes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_notes_notes_actions__ = __webpack_require__("../../../../../src/app/store/notes/notes.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotesComponent = (function () {
    function NotesComponent(store) {
        this.store = store;
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_notes_notes_actions__["o" /* GetNotes */]());
    };
    NotesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__("../../../../../src/app/notes/notes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notes/notes.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/notes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_notes_app_config__ = __webpack_require__("../../../../../src/config/notes-app.config.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NotesService = (function () {
    function NotesService(http) {
        this.http = http;
        this.notesApiUrl = __WEBPACK_IMPORTED_MODULE_7__config_notes_app_config__["a" /* NOTES_APP_CONFIG */].apiBaseUrl + "/notes";
    }
    /**
     * @author Ahsan Ayaz
     * @desc This returns the notes to be shown in the notes app.
     * @return {Observable<Array<Note>>} - an observable of the notes array which contains
     * individual notes (Note)
     */
    NotesService.prototype.getNotes = function () {
        return this.http.get("" + this.notesApiUrl)
            .map(function (res) { return res.notes; });
    };
    /**
     * @author Ahsan Ayaz
     * @desc Sends the save new note call to the server.
     * @param note - the new note to be saved
     * @return {Observable<Note>} containing the note received from the server
     * which we added (contains the _id of the note too)
     */
    NotesService.prototype.addNewNote = function (note) {
        return this.http.post("" + this.notesApiUrl, __assign({}, note))
            .map(function (res) { return res.note; });
    };
    /**
     * @author Ahsan Ayaz
     * @desc Deletes the note using the server api
     * @param note - the note to be deleted
     * @return {Observable} - contains properties to identify if the note was deleted or not
     */
    NotesService.prototype.deleteNote = function (note) {
        return this.http.delete(this.notesApiUrl + "/" + note._id)
            .map(function (res) { return res.result; });
    };
    /**
     * @author Ahsan Ayaz
     * @desc Sends the update note call to the server resulting in an updated note
     * saved on the db.
     * @param note - the note to update
     * @return {Observable<Note>} contains the updated note that was saved on the server
     */
    NotesService.prototype.updateNote = function (note) {
        return this.http.patch(this.notesApiUrl + "/" + note._id, __assign({}, note))
            .map(function (res) { return res.note; });
    };
    NotesService.prototype.getCount = function (text) {
        // there could be an http call here
        var wsRegex = /\s+/gi;
        var wordCount = text.trim().replace(wsRegex, ' ').split(' ').length;
        var charCount = text.length;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].of(wordCount);
    };
    NotesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], NotesService);
    return NotesService;
}());



/***/ }),

/***/ "../../../../../src/app/store/notes/notes.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GET_NOTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GET_NOTES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GET_NOTES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SET_ACTIVE_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DELETE_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DELETE_NOTE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DELETE_NOTE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_NOTE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_NOTE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return UPDATE_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return UPDATE_NOTE_SUCCESS; });
/* unused harmony export UPDATE_NOTE_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return UpdateNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return UpdateNoteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return UpdateNoteFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DeleteNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DeleteNoteSuccess; });
/* unused harmony export DeleteNoteFailure */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AddNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AddNoteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AddNoteFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SetActiveNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GetNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GetNotesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GetNotesFailure; });
var GET_NOTES = '[Notes] GetNotes';
var GET_NOTES_SUCCESS = '[Notes] GetNotesSuccess';
var GET_NOTES_FAILURE = '[Notes] GetNotesFailure';
var SET_ACTIVE_NOTE = '[Notes] SetActiveNote';
var DELETE_NOTE = '[Notes] DeleteNote';
var DELETE_NOTE_SUCCESS = '[Notes] DeleteNoteSuccess';
var DELETE_NOTE_FAILURE = '[Notes] DeleteNoteFailure';
var ADD_NOTE = '[Notes] AddNote';
var ADD_NOTE_SUCCESS = '[Notes] AddNoteSuccess';
var ADD_NOTE_FAILURE = '[Notes] AddNoteFailure';
var UPDATE_NOTE = '[Notes] UpdateNote';
var UPDATE_NOTE_SUCCESS = '[Notes] UpdateNoteSuccess';
var UPDATE_NOTE_FAILURE = '[Notes] UpdateNoteFailure';
var UpdateNote = (function () {
    function UpdateNote(payload) {
        this.payload = payload;
        this.type = UPDATE_NOTE;
    }
    return UpdateNote;
}());

var UpdateNoteSuccess = (function () {
    function UpdateNoteSuccess(payload) {
        this.payload = payload;
        this.type = UPDATE_NOTE_SUCCESS;
    }
    return UpdateNoteSuccess;
}());

var UpdateNoteFailure = (function () {
    function UpdateNoteFailure(payload) {
        this.payload = payload;
        this.type = UPDATE_NOTE_FAILURE;
    }
    return UpdateNoteFailure;
}());

var DeleteNote = (function () {
    function DeleteNote(payload) {
        this.payload = payload;
        this.type = DELETE_NOTE;
    }
    return DeleteNote;
}());

var DeleteNoteSuccess = (function () {
    function DeleteNoteSuccess(payload) {
        this.payload = payload;
        this.type = DELETE_NOTE_SUCCESS;
    }
    return DeleteNoteSuccess;
}());

var DeleteNoteFailure = (function () {
    function DeleteNoteFailure(payload) {
        this.payload = payload;
        this.type = DELETE_NOTE_FAILURE;
    }
    return DeleteNoteFailure;
}());

var AddNote = (function () {
    function AddNote(payload) {
        this.payload = payload;
        this.type = ADD_NOTE;
    }
    return AddNote;
}());

var AddNoteSuccess = (function () {
    function AddNoteSuccess(payload) {
        this.payload = payload;
        this.type = ADD_NOTE_SUCCESS;
    }
    return AddNoteSuccess;
}());

var AddNoteFailure = (function () {
    function AddNoteFailure(payload) {
        this.payload = payload;
        this.type = ADD_NOTE_FAILURE;
    }
    return AddNoteFailure;
}());

var SetActiveNote = (function () {
    function SetActiveNote(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_NOTE;
    }
    return SetActiveNote;
}());

var GetNotes = (function () {
    function GetNotes() {
        this.type = GET_NOTES;
    }
    return GetNotes;
}());

var GetNotesSuccess = (function () {
    function GetNotesSuccess(payload) {
        this.payload = payload;
        this.type = GET_NOTES_SUCCESS;
    }
    return GetNotesSuccess;
}());

var GetNotesFailure = (function () {
    function GetNotesFailure(payload) {
        this.payload = payload;
        this.type = GET_NOTES_FAILURE;
    }
    return GetNotesFailure;
}());



/***/ }),

/***/ "../../../../../src/app/store/notes/notes.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notes_actions__ = __webpack_require__("../../../../../src/app/store/notes/notes.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_notes_service__ = __webpack_require__("../../../../../src/app/services/notes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NotesEffects = (function () {
    function NotesEffects(actions$, notesService) {
        var _this = this;
        this.actions$ = actions$;
        this.notesService = notesService;
        /**
         * @author Ahsan Ayaz
         * @desc Fetches the notes from the server
         */
        this.$getNotes = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_8__notes_actions__["l" /* GET_NOTES */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .mergeMap(function (payload) {
            return _this.notesService.getNotes();
        })
            .mergeMap(function (notes) {
            // on success, dispatch success and set first item active
            return [
                new __WEBPACK_IMPORTED_MODULE_8__notes_actions__["q" /* GetNotesSuccess */]({
                    notes: notes
                }),
                new __WEBPACK_IMPORTED_MODULE_8__notes_actions__["s" /* SetActiveNote */]({})
            ];
        })
            .catch(function () {
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_8__notes_actions__["p" /* GetNotesFailure */]({
                error: 'Could not fetch notes'
            }));
        });
        /**
         * @author Ahsan Ayaz
         * @desc Adds the note to the server
         */
        this.$addNote = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_8__notes_actions__["a" /* ADD_NOTE */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .mergeMap(function (payload) {
            return _this.notesService.addNewNote(payload.note);
        })
            .mergeMap(function (note) {
            // on success, dispatch success and set first item active
            return [
                new __WEBPACK_IMPORTED_MODULE_8__notes_actions__["f" /* AddNoteSuccess */]({
                    note: note
                }),
                new __WEBPACK_IMPORTED_MODULE_8__notes_actions__["s" /* SetActiveNote */]({})
            ];
        })
            .catch(function () {
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_8__notes_actions__["e" /* AddNoteFailure */]({
                error: 'Could not add note'
            }));
        });
        /**
         * @author Ahsan Ayaz
         * @desc Deletes the note from the server
         */
        this.$deleteNote = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_8__notes_actions__["g" /* DELETE_NOTE */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .mergeMap(function (payload) {
            return _this.notesService.deleteNote(payload.note);
        })
            .mergeMap(function (data) {
            // on success, dispatch success and set first item active
            return [
                new __WEBPACK_IMPORTED_MODULE_8__notes_actions__["k" /* DeleteNoteSuccess */]({
                    data: data
                }),
                new __WEBPACK_IMPORTED_MODULE_8__notes_actions__["s" /* SetActiveNote */]({})
            ];
        })
            .catch(function () {
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_8__notes_actions__["e" /* AddNoteFailure */]({
                error: 'Could not delete note'
            }));
        });
        /**
         * @author Ahsan Ayaz
         * @desc Updates the active note and sends to the server
         */
        this.$updateNote = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_8__notes_actions__["t" /* UPDATE_NOTE */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .debounceTime(300)
            .switchMap(function (payload) {
            return _this.notesService.updateNote(payload.note);
        })
            .mergeMap(function (note) {
            // on success, dispatch success
            return [
                new __WEBPACK_IMPORTED_MODULE_8__notes_actions__["x" /* UpdateNoteSuccess */]({
                    note: note
                })
            ];
        })
            .catch(function () {
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_8__notes_actions__["w" /* UpdateNoteFailure */]({
                error: 'Could not update note'
            }));
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], NotesEffects.prototype, "$getNotes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], NotesEffects.prototype, "$addNote", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], NotesEffects.prototype, "$deleteNote", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], NotesEffects.prototype, "$updateNote", void 0);
    NotesEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_9__services_notes_service__["a" /* NotesService */]])
    ], NotesEffects);
    return NotesEffects;
}());



/***/ }),

/***/ "../../../../../src/app/store/notes/notes.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialState; });
/* harmony export (immutable) */ __webpack_exports__["b"] = notesReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notes_actions__ = __webpack_require__("../../../../../src/app/store/notes/notes.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    notesList: [],
    callInProgress: false,
    activeNote: null
};
function notesReducer(state, action // USE NotesActions.Actions
) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__notes_actions__["l" /* GET_NOTES */]:
            return __assign({}, state, { callInProgress: true });
        case __WEBPACK_IMPORTED_MODULE_0__notes_actions__["n" /* GET_NOTES_SUCCESS */]:
            return __assign({}, state, { notesList: action.payload.notes, callInProgress: false });
        case __WEBPACK_IMPORTED_MODULE_0__notes_actions__["m" /* GET_NOTES_FAILURE */]:
            return __assign({}, state, { callInProgress: false });
        case __WEBPACK_IMPORTED_MODULE_0__notes_actions__["r" /* SET_ACTIVE_NOTE */]:
            return __assign({}, state, {
                activeNote: action.payload.note ? action.payload.note : state.notesList[0]
            });
        case __WEBPACK_IMPORTED_MODULE_0__notes_actions__["a" /* ADD_NOTE */]:
            return __assign({}, state, { callInProgress: true });
        case __WEBPACK_IMPORTED_MODULE_0__notes_actions__["c" /* ADD_NOTE_SUCCESS */]:
            return __assign({}, state, {
                notesList: [action.payload.note].concat(state.notesList),
                callInProgress: false
            });
        case __WEBPACK_IMPORTED_MODULE_0__notes_actions__["b" /* ADD_NOTE_FAILURE */]:
            return __assign({}, state, { callInProgress: false });
        case __WEBPACK_IMPORTED_MODULE_0__notes_actions__["g" /* DELETE_NOTE */]:
            return __assign({}, state, { callInProgress: true });
        case __WEBPACK_IMPORTED_MODULE_0__notes_actions__["i" /* DELETE_NOTE_SUCCESS */]:
            return __assign({}, state, { notesList: state.notesList.filter(function (note) { return (note._id !== state.activeNote._id); }),
                callInProgress: false
            });
        case __WEBPACK_IMPORTED_MODULE_0__notes_actions__["h" /* DELETE_NOTE_FAILURE */]:
            return __assign({}, state, { callInProgress: false });
        case __WEBPACK_IMPORTED_MODULE_0__notes_actions__["t" /* UPDATE_NOTE */]:
            return __assign({}, state, { callInProgress: true });
        case __WEBPACK_IMPORTED_MODULE_0__notes_actions__["u" /* UPDATE_NOTE_SUCCESS */]:
        case __WEBPACK_IMPORTED_MODULE_0__notes_actions__["h" /* DELETE_NOTE_FAILURE */]:
            return __assign({}, state, { callInProgress: false });
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/store/notes/notes.selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export selectNotes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selectNotesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectActiveNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectCallInProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notes_reducer__ = __webpack_require__("../../../../../src/app/store/notes/notes.reducer.ts");


var selectNotes = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('notes');
var selectNotesList = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(selectNotes, function (state) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_1__notes_reducer__["a" /* initialState */]; }
    return state.notesList;
});
var selectActiveNote = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(selectNotes, function (state) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_1__notes_reducer__["a" /* initialState */]; }
    return state.activeNote;
});
var selectCallInProgress = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(selectNotes, function (state) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_1__notes_reducer__["a" /* initialState */]; }
    return state.callInProgress;
});


/***/ }),

/***/ "../../../../../src/config/notes-app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NOTES_APP_CONFIG; });
var NOTES_APP_CONFIG = {
    apiBaseUrl: 'https://ahsanayaz.com/api/v1'
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map