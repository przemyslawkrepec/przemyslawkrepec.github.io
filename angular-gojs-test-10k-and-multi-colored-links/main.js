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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  Click on a node to edit its text or change its color.\r\n  <app-diagram-editor [model]=\"model\">\r\n  </app-diagram-editor>\r\n</div>\r\n"

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
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.model = null;
        var blocks = [
            { key: 1, text: 'Device 1', color: 'lightblue' },
            { key: 2, text: 'Device 2', color: 'orange' },
        ];
        for (var i = 3; i < 10000; i++) {
            blocks.push({ key: i, text: 'Device ' + i, color: 'lightgreen' });
        }
        console.log(blocks);
        var links = [
            { from: 1, to: 2, colors: ['red', 'blue'] },
        ];
        for (var i = 2; i < 10000; i++) {
            links.push({ from: i - 1, to: i, colors: ['red', 'blue'] });
        }
        this.model = new gojs__WEBPACK_IMPORTED_MODULE_2__["GraphLinksModel"](blocks, links);
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _diagram_editor_diagram_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./diagram-editor/diagram-editor.component */ "./src/app/diagram-editor/diagram-editor.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], _diagram_editor_diagram_editor_component__WEBPACK_IMPORTED_MODULE_7__["DiagramEditorComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/diagram-editor/MultiColoredLinkTool.ts":
/*!********************************************************!*\
  !*** ./src/app/diagram-editor/MultiColoredLinkTool.ts ***!
  \********************************************************/
/*! exports provided: MultiColoredLinkTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiColoredLinkTool", function() { return MultiColoredLinkTool; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_1__);


var MultiColoredLinkTool = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MultiColoredLinkTool, _super);
    function MultiColoredLinkTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiColoredLinkTool.prototype.makeGeometry = function () {
        var geo = gojs__WEBPACK_IMPORTED_MODULE_1__["Link"].prototype.makeGeometry.call(this);
        var colors = this.data.colors;
        if (Array.isArray(colors) && colors.length > 0) {
            var paths = []; // find all path Shapes
            this.elements.each(function (elt) {
                if (elt.isPanelMain && elt instanceof gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"]) {
                    paths.push(elt);
                }
            });
            var numcolors = Math.min(colors.length, paths.length);
            if (numcolors > 0) {
                var seclen = geo.flattenedTotalLength / numcolors; // length of each color section
                for (var i = 0; i < paths.length; i++) { // go through all path Shapes
                    var shape = paths[i];
                    if (i < numcolors) {
                        shape.visible = true; // make sure this Shape can be seen
                        shape.stroke = colors[i]; // and assign a color
                        if (i === 0) { // and a stroke dash array so that it only draws the needed fraction
                            shape.strokeDashArray = [seclen, 99999];
                        }
                        else {
                            shape.strokeDashArray = [0, i * seclen, seclen, 99999];
                        }
                    }
                    else { // unneeded Shapes are not visible
                        shape.visible = false;
                    }
                }
            }
        }
        return geo;
    };
    return MultiColoredLinkTool;
}(gojs__WEBPACK_IMPORTED_MODULE_1__["Link"]));

// function MultiColoredLink() {
//   go.Link.call(this);
// }


/***/ }),

/***/ "./src/app/diagram-editor/diagram-editor.component.css":
/*!*************************************************************!*\
  !*** ./src/app/diagram-editor/diagram-editor.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".diagramsPanel {\r\n  width:100%;\r\n  white-space:nowrap;\r\n}\r\n\r\n.diagramDiv {\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  width: 100%;\r\n  height: 80vh;\r\n}\r\n\r\n.paletteDiv {\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  width: 19%;\r\n  height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhZ3JhbS1lZGl0b3IvZGlhZ3JhbS1lZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2RpYWdyYW0tZWRpdG9yL2RpYWdyYW0tZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhZ3JhbXNQYW5lbCB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbn1cclxuXHJcbi5kaWFncmFtRGl2IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbn1cclxuXHJcbi5wYWxldHRlRGl2IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB3aWR0aDogMTklO1xyXG4gIGhlaWdodDogODB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/diagram-editor/diagram-editor.component.html":
/*!**************************************************************!*\
  !*** ./src/app/diagram-editor/diagram-editor.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"diagramsPanel\">\r\n  <div #diagramDiv class=\"diagramDiv\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/diagram-editor/diagram-editor.component.ts":
/*!************************************************************!*\
  !*** ./src/app/diagram-editor/diagram-editor.component.ts ***!
  \************************************************************/
/*! exports provided: DiagramEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagramEditorComponent", function() { return DiagramEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _MultiColoredLinkTool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MultiColoredLinkTool */ "./src/app/diagram-editor/MultiColoredLinkTool.ts");






var DiagramEditorComponent = /** @class */ (function () {
    function DiagramEditorComponent(dialog) {
        var _this = this;
        this.dialog = dialog;
        this.diagram = new gojs__WEBPACK_IMPORTED_MODULE_3__["Diagram"]();
        this.palette = new gojs__WEBPACK_IMPORTED_MODULE_3__["Palette"]();
        this.nodeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modelChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        var $ = gojs__WEBPACK_IMPORTED_MODULE_3__["GraphObject"].make;
        // Place GoJS license key here:
        // (go as any).licenseKey = "..."
        this.diagram = new gojs__WEBPACK_IMPORTED_MODULE_3__["Diagram"]();
        this.diagram.initialContentAlignment = gojs__WEBPACK_IMPORTED_MODULE_3__["Spot"].Center;
        this.diagram.allowDrop = true;
        this.diagram.undoManager.isEnabled = true;
        this.diagram.addDiagramListener("ChangedSelection", function (e) {
            var node = e.diagram.selection.first();
            _this.nodeSelected.emit(node instanceof gojs__WEBPACK_IMPORTED_MODULE_3__["Node"] ? node : null);
        });
        this.diagram.addModelChangedListener(function (e) { return e.isTransactionFinished && _this.modelChanged.emit(e); });
        this.diagram.nodeTemplate =
            $(gojs__WEBPACK_IMPORTED_MODULE_3__["Node"], "Auto", {
                click: function (e, node) { _this.openDialog(node.data); }
            }, new gojs__WEBPACK_IMPORTED_MODULE_3__["Binding"]("location", "loc", gojs__WEBPACK_IMPORTED_MODULE_3__["Point"].parse).makeTwoWay(gojs__WEBPACK_IMPORTED_MODULE_3__["Point"].stringify), $(gojs__WEBPACK_IMPORTED_MODULE_3__["Shape"], {
                fill: "white", strokeWidth: 0,
                portId: "", cursor: "pointer",
                // allow many kinds of links
                fromLinkable: true, toLinkable: true,
                fromLinkableSelfNode: true, toLinkableSelfNode: true,
                fromLinkableDuplicates: true, toLinkableDuplicates: true
            }, new gojs__WEBPACK_IMPORTED_MODULE_3__["Binding"]("fill", "color")), $(gojs__WEBPACK_IMPORTED_MODULE_3__["TextBlock"], { margin: 8 /*, editable: true*/ }, new gojs__WEBPACK_IMPORTED_MODULE_3__["Binding"]("text") /*.makeTwoWay()*/));
        // this.diagram.linkTemplate =
        //   $(go.Link,
        //     // allow relinking
        //     { relinkableFrom: true, relinkableTo: true },
        //     $(go.Shape),
        //     $(go.Shape, { toArrow: "OpenTriangle" })
        //   );
        this.diagram.linkTemplate =
            $(_MultiColoredLinkTool__WEBPACK_IMPORTED_MODULE_5__["MultiColoredLinkTool"], {
                routing: gojs__WEBPACK_IMPORTED_MODULE_3__["Link"].AvoidsNodes, corner: 10,
            }, $(gojs__WEBPACK_IMPORTED_MODULE_3__["Shape"], { isPanelMain: true, strokeWidth: 4 }), $(gojs__WEBPACK_IMPORTED_MODULE_3__["Shape"], { isPanelMain: true, strokeWidth: 4 }));
        this.palette = new gojs__WEBPACK_IMPORTED_MODULE_3__["Palette"]();
        this.palette.nodeTemplateMap = this.diagram.nodeTemplateMap;
        // initialize contents of Palette
        this.palette.model.nodeDataArray =
            [
                { text: "Alpha", color: "lightblue" },
                { text: "Beta", color: "orange" },
                { text: "Gamma", color: "lightgreen" },
                { text: "Delta", color: "pink" },
                { text: "Epsilon", color: "yellow" }
            ];
    }
    Object.defineProperty(DiagramEditorComponent.prototype, "model", {
        get: function () { return this.diagram.model; },
        set: function (val) { this.diagram.model = val; },
        enumerable: true,
        configurable: true
    });
    DiagramEditorComponent.prototype.ngOnInit = function () {
        this.diagram.div = this.diagramRef.nativeElement;
        this.palette.div = this.paletteRef.nativeElement;
    };
    DiagramEditorComponent.prototype.openDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], {
            width: '250px',
            data: { key: data.key, text: data.text, color: data.color }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.diagram.model.commit(function (m) {
                    m.set(data, "text", result.text);
                    m.set(data, "color", result.color);
                }, "modified node properties");
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('diagramDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DiagramEditorComponent.prototype, "diagramRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paletteDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DiagramEditorComponent.prototype, "paletteRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", gojs__WEBPACK_IMPORTED_MODULE_3__["Model"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [gojs__WEBPACK_IMPORTED_MODULE_3__["Model"]])
    ], DiagramEditorComponent.prototype, "model", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DiagramEditorComponent.prototype, "nodeSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DiagramEditorComponent.prototype, "modelChanged", void 0);
    DiagramEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diagram-editor',
            template: __webpack_require__(/*! ./diagram-editor.component.html */ "./src/app/diagram-editor/diagram-editor.component.html"),
            styles: [__webpack_require__(/*! ./diagram-editor.component.css */ "./src/app/diagram-editor/diagram-editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DiagramEditorComponent);
    return DiagramEditorComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.css":
/*!*******************************************!*\
  !*** ./src/app/modal/modal.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modal/modal.component.html":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Node key: {{data.key}}</h1>\r\n<div mat-dialog-content>\r\n  text:\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"data.text\">\r\n  </mat-form-field>\r\n  color:\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"data.color\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>OK</button>\r\n  <button mat-button [mat-dialog-close]=\"null\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/modal/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


// import { environment } from './environments/environment';
// if (environment.production) {
//   enableProdMode();
// }
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /usr/src/app/angular-gojs-diagram/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map