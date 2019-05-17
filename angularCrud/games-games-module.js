(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["games-games-module"],{

/***/ "./src/app/+games/components/game-form/game-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/+games/components/game-form/game-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center jumbotron\">\n  <form [formGroup]=\"gameForm\"\n        class=\"container \">\n    <p>Name :\n      <input formControlName=\"name\"\n             class=\"col-md-6\">\n    </p>\n    <p>Year :\n      <input formControlName=\"year\"\n             class=\"col-md-6\">\n    </p>\n    <p>Image :\n      <input formControlName=\"image\"\n             class=\"col-md-6\">\n    </p>\n  </form>\n  <button type=\"button\" class=\"btn btn-danger\"  (click)=\"onSubmitClick($event)\" >Add</button>\n</div>"

/***/ }),

/***/ "./src/app/+games/components/game-form/game-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/+games/components/game-form/game-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/+games/components/game-form/game-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/+games/components/game-form/game-form.component.ts ***!
  \********************************************************************/
/*! exports provided: GameFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFormComponent", function() { return GameFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var core_services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/services/games.service */ "./src/app/core/services/games.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameFormComponent = /** @class */ (function () {
    function GameFormComponent(formBuilder, gameApi) {
        this.formBuilder = formBuilder;
        this.gameApi = gameApi;
        this.gameSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gameItem = {
            name: '',
            year: '',
            image: ''
        };
    }
    GameFormComponent.prototype.ngOnInit = function () {
        if (this.gameApi.gameToEdit) {
            this.gameForm = this.formBuilder.group(this.gameApi.gameToEdit);
        }
        else {
            this.gameForm = this.formBuilder.group(this.gameItem);
        }
    };
    GameFormComponent.prototype.onSubmitClick = function (event) {
        event.preventDefault();
        this.gameSubmitted.emit(this.gameForm.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GameFormComponent.prototype, "gameSubmitted", void 0);
    GameFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-form',
            template: __webpack_require__(/*! ./game-form.component.html */ "./src/app/+games/components/game-form/game-form.component.html"),
            styles: [__webpack_require__(/*! ./game-form.component.scss */ "./src/app/+games/components/game-form/game-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            core_services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"]])
    ], GameFormComponent);
    return GameFormComponent;
}());



/***/ }),

/***/ "./src/app/+games/components/game-item-card/game-item-card.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/+games/components/game-item-card/game-item-card.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card col\">\n  <div (click)=\"cardClicked.emit(gameItem.id)\">\n    <app-image [imgUrl]=\"gameItem.image\"></app-image>\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{gameItem.name}}</h4>\n      <p class=\"card-text\">Year: {{gameItem.year}}</p>\n    </div>\n  </div>\n  <div style=\"margin-bottom: 20px;\">\n    <div class=\"row\">\n      <div class=\"pull-left col-md-6\">\n        <app-button [message]=\"'Edit'\"\n                    [btnClass]=\"isBtnGreen ? 'greenBtn' : 'blueBtn'\"\n                    (buttonClicked)=\"goToEditHandler.emit(gameItem)\"></app-button>\n      </div>\n      <div class=\"pull-right col-md-6\">\n        <app-button [message]=\"'Toggle'\" [btnClass]=\"'yellowBtn'\"\n                (buttonClicked)=\"toggleAppBtn()\"></app-button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/+games/components/game-item-card/game-item-card.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/+games/components/game-item-card/game-item-card.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/+games/components/game-item-card/game-item-card.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/+games/components/game-item-card/game-item-card.component.ts ***!
  \******************************************************************************/
/*! exports provided: GameItemCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameItemCardComponent", function() { return GameItemCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var core_models_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/models/game */ "./src/app/core/models/game.ts");
/* harmony import */ var core_models_game__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_models_game__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameItemCardComponent = /** @class */ (function () {
    function GameItemCardComponent() {
        this.cardClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goToEditHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBtnGreen = true;
    }
    GameItemCardComponent.prototype.ngOnInit = function () {
    };
    GameItemCardComponent.prototype.toggleAppBtn = function () {
        this.isBtnGreen = !this.isBtnGreen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", core_models_game__WEBPACK_IMPORTED_MODULE_1__["Game"])
    ], GameItemCardComponent.prototype, "gameItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GameItemCardComponent.prototype, "cardClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GameItemCardComponent.prototype, "goToEditHandler", void 0);
    GameItemCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-item-card',
            template: __webpack_require__(/*! ./game-item-card.component.html */ "./src/app/+games/components/game-item-card/game-item-card.component.html"),
            styles: [__webpack_require__(/*! ./game-item-card.component.scss */ "./src/app/+games/components/game-item-card/game-item-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GameItemCardComponent);
    return GameItemCardComponent;
}());



/***/ }),

/***/ "./src/app/+games/containers/add-game/add-game.component.html":
/*!********************************************************************!*\
  !*** ./src/app/+games/containers/add-game/add-game.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n    <app-game-form (gameSubmitted)=\"onGameSubmit($event)\"></app-game-form>\n</div>"

/***/ }),

/***/ "./src/app/+games/containers/add-game/add-game.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/+games/containers/add-game/add-game.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/+games/containers/add-game/add-game.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/+games/containers/add-game/add-game.component.ts ***!
  \******************************************************************/
/*! exports provided: AddGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGameComponent", function() { return AddGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var core_services_games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/services/games.service */ "./src/app/core/services/games.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddGameComponent = /** @class */ (function () {
    function AddGameComponent(gameApi, router) {
        this.gameApi = gameApi;
        this.router = router;
        this.addedGames = [];
    }
    AddGameComponent.prototype.ngOnInit = function () {
    };
    AddGameComponent.prototype.onGameSubmit = function (game) {
        var _this = this;
        event.preventDefault();
        this.addedGames.push(game);
        this.gameApi.addGame(game)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.router.navigate(['/games']); })).subscribe();
        // () => this.router.navigate(['/games'])
    };
    AddGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-game',
            template: __webpack_require__(/*! ./add-game.component.html */ "./src/app/+games/containers/add-game/add-game.component.html"),
            styles: [__webpack_require__(/*! ./add-game.component.scss */ "./src/app/+games/containers/add-game/add-game.component.scss")]
        }),
        __metadata("design:paramtypes", [core_services_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddGameComponent);
    return AddGameComponent;
}());



/***/ }),

/***/ "./src/app/+games/containers/edit-game/edit-game.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/+games/containers/edit-game/edit-game.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <app-game-form (gameSubmitted)=\"onGameEditSubmit($event)\"></app-game-form>\n</div>"

/***/ }),

/***/ "./src/app/+games/containers/edit-game/edit-game.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/+games/containers/edit-game/edit-game.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/+games/containers/edit-game/edit-game.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/+games/containers/edit-game/edit-game.component.ts ***!
  \********************************************************************/
/*! exports provided: EditGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGameComponent", function() { return EditGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var core_services_games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/services/games.service */ "./src/app/core/services/games.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditGameComponent = /** @class */ (function () {
    function EditGameComponent(gameApi, router) {
        this.gameApi = gameApi;
        this.router = router;
    }
    EditGameComponent.prototype.ngOnInit = function () {
    };
    EditGameComponent.prototype.onGameEditSubmit = function (game) {
        var _this = this;
        event.preventDefault();
        this.gameApi.editGame(game)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.router.navigate(['/games']); })).subscribe();
    };
    EditGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-game',
            template: __webpack_require__(/*! ./edit-game.component.html */ "./src/app/+games/containers/edit-game/edit-game.component.html"),
            styles: [__webpack_require__(/*! ./edit-game.component.scss */ "./src/app/+games/containers/edit-game/edit-game.component.scss")]
        }),
        __metadata("design:paramtypes", [core_services_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditGameComponent);
    return EditGameComponent;
}());



/***/ }),

/***/ "./src/app/+games/containers/game-profile/game-profile.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/+games/containers/game-profile/game-profile.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"gameProfile$ | async as profile\"\n     class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <app-image [imgUrl]=\"profile.image\"\n                 [customHeight]=\"750\"\n                 [customWidth]=\"500\"></app-image>\n    </div>\n    <div class=\"col-md-6\">\n      <h1>{{profile.name}}</h1>\n      <h3>{{profile.year}}</h3>\n      <div class=\"container\">\n        <app-button (buttonClicked)=\"goToEdit(profile)\"\n                    [btnClass]=\"'greenBtn'\"\n                    [message]=\"'Edit'\"></app-button>\n        <br>\n        <app-button (buttonClicked)=\"deleteGameWithId(profile)\"\n                    [btnClass]=\"'yellowBtn'\"\n                    [message]=\"'Delete'\"></app-button>\n        <br>\n        <app-button (buttonClicked)=\"goToList()\"\n                    [message]=\"'Go to list'\"\n                    [btnClass]=\"'blueBtn'\"></app-button>\n        <br>\n        <app-button (buttonClicked)=\"goBack()\"\n                    [btnClass]=\"'redBtn'\"\n                    [message]=\"'Go back'\"></app-button>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/+games/containers/game-profile/game-profile.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/+games/containers/game-profile/game-profile.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host div {\n  padding-top: 50px; }\n"

/***/ }),

/***/ "./src/app/+games/containers/game-profile/game-profile.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/+games/containers/game-profile/game-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: GameProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameProfileComponent", function() { return GameProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var core_services_games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/services/games.service */ "./src/app/core/services/games.service.ts");
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





var GameProfileComponent = /** @class */ (function () {
    function GameProfileComponent(route, router, location, gameApi) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.gameApi = gameApi;
        this.listBtnClass = 'background-color : "red"';
    }
    GameProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameProfile$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) { return _this.gameApi.getGameById(params.get('id')); }));
    };
    GameProfileComponent.prototype.goToList = function () {
        this.router.navigate(['/games']);
    };
    GameProfileComponent.prototype.goBack = function () {
        this.location.back();
    };
    GameProfileComponent.prototype.goToEdit = function (game) {
        this.router.navigate(['/games/edit', game.id]);
        this.gameApi.gameToEdit = game;
    };
    GameProfileComponent.prototype.deleteGameWithId = function (game) {
        this.gameApi.deleteGame(game).subscribe();
        this.router.navigate(['/games']);
    };
    GameProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-profile',
            template: __webpack_require__(/*! ./game-profile.component.html */ "./src/app/+games/containers/game-profile/game-profile.component.html"),
            styles: [__webpack_require__(/*! ./game-profile.component.scss */ "./src/app/+games/containers/game-profile/game-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            core_services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"]])
    ], GameProfileComponent);
    return GameProfileComponent;
}());



/***/ }),

/***/ "./src/app/+games/containers/games-list/games-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/+games/containers/games-list/games-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n    <div class=\"row\">\n        <app-game-item-card *ngFor=\"let game of gamesList$ | async\"\n                            [gameItem]=\"game\"\n                            (cardClicked)=\"goToDetail($event)\" (goToEditHandler)=\"goToEdit($event)\"></app-game-item-card>\n    </div>\n</div> -->\n\n<div class=\"flex-grid\">\n    <app-game-item-card *ngFor=\"let game of gamesList$ | async\"\n    [gameItem]=\"game\"\n    (cardClicked)=\"goToDetail($event)\" (goToEditHandler)=\"goToEdit($event)\"></app-game-item-card>\n</div>\n"

/***/ }),

/***/ "./src/app/+games/containers/games-list/games-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/+games/containers/games-list/games-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 1080px; }\n  :host .flex-grid {\n    width: 1080px;\n    margin: auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center; }\n  :host .flex-grid .app-game-item-card {\n      flex: 1 0 auto; }\n"

/***/ }),

/***/ "./src/app/+games/containers/games-list/games-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/+games/containers/games-list/games-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: GamesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesListComponent", function() { return GamesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var core_services_games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/services/games.service */ "./src/app/core/services/games.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var core_store_games_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/store/games.actions */ "./src/app/core/store/games.actions.ts");
/* harmony import */ var core_store_games_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/store/games.state */ "./src/app/core/store/games.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GamesListComponent = /** @class */ (function () {
    function GamesListComponent(store, gameApi, router) {
        this.store = store;
        this.gameApi = gameApi;
        this.router = router;
    }
    GamesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameApi.getGameList().subscribe(function (data) { return _this.store.dispatch(new core_store_games_actions__WEBPACK_IMPORTED_MODULE_4__["GetAllGames"](data)); });
        this.gamesList$ = this.store.select(core_store_games_state__WEBPACK_IMPORTED_MODULE_5__["GameState"].getGames);
    };
    GamesListComponent.prototype.goToDetail = function (id) {
        this.router.navigate(['/games', id]);
    };
    GamesListComponent.prototype.goToEdit = function (game) {
        this.router.navigate(['/games/edit', game.id]);
        this.gameApi.gameToEdit = game;
    };
    GamesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-games-list',
            template: __webpack_require__(/*! ./games-list.component.html */ "./src/app/+games/containers/games-list/games-list.component.html"),
            styles: [__webpack_require__(/*! ./games-list.component.scss */ "./src/app/+games/containers/games-list/games-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_node_modules_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            core_services_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GamesListComponent);
    return GamesListComponent;
}());



/***/ }),

/***/ "./src/app/+games/games-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/+games/games-routing.module.ts ***!
  \************************************************/
/*! exports provided: GamesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesRoutingModule", function() { return GamesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/games-list/games-list.component */ "./src/app/+games/containers/games-list/games-list.component.ts");
/* harmony import */ var _games_containers_game_profile_game_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! +games/containers/game-profile/game-profile.component */ "./src/app/+games/containers/game-profile/game-profile.component.ts");
/* harmony import */ var _games_containers_add_game_add_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! +games/containers/add-game/add-game.component */ "./src/app/+games/containers/add-game/add-game.component.ts");
/* harmony import */ var _games_containers_edit_game_edit_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! +games/containers/edit-game/edit-game.component */ "./src/app/+games/containers/edit-game/edit-game.component.ts");
/* harmony import */ var core_authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/authentication/guards/auth.guard */ "./src/app/core/authentication/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _containers_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_2__["GamesListComponent"]
    },
    {
        path: 'add',
        component: _games_containers_add_game_add_game_component__WEBPACK_IMPORTED_MODULE_4__["AddGameComponent"],
        canActivate: [core_authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'edit/:id',
        component: _games_containers_edit_game_edit_game_component__WEBPACK_IMPORTED_MODULE_5__["EditGameComponent"]
    },
    {
        path: ':id',
        component: _games_containers_game_profile_game_profile_component__WEBPACK_IMPORTED_MODULE_3__["GameProfileComponent"]
    }
];
var GamesRoutingModule = /** @class */ (function () {
    function GamesRoutingModule() {
    }
    GamesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GamesRoutingModule);
    return GamesRoutingModule;
}());



/***/ }),

/***/ "./src/app/+games/games.module.ts":
/*!****************************************!*\
  !*** ./src/app/+games/games.module.ts ***!
  \****************************************/
/*! exports provided: GamesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesModule", function() { return GamesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _containers_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/games-list/games-list.component */ "./src/app/+games/containers/games-list/games-list.component.ts");
/* harmony import */ var _games_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./games-routing.module */ "./src/app/+games/games-routing.module.ts");
/* harmony import */ var _containers_game_profile_game_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/game-profile/game-profile.component */ "./src/app/+games/containers/game-profile/game-profile.component.ts");
/* harmony import */ var _components_game_item_card_game_item_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/game-item-card/game-item-card.component */ "./src/app/+games/components/game-item-card/game-item-card.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _containers_add_game_add_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/add-game/add-game.component */ "./src/app/+games/containers/add-game/add-game.component.ts");
/* harmony import */ var _games_components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! +games/components/game-form/game-form.component */ "./src/app/+games/components/game-form/game-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _containers_edit_game_edit_game_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/edit-game/edit-game.component */ "./src/app/+games/containers/edit-game/edit-game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var GamesModule = /** @class */ (function () {
    function GamesModule() {
    }
    GamesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _games_routing_module__WEBPACK_IMPORTED_MODULE_3__["GamesRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            declarations: [_containers_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_2__["GamesListComponent"], _containers_game_profile_game_profile_component__WEBPACK_IMPORTED_MODULE_4__["GameProfileComponent"], _components_game_item_card_game_item_card_component__WEBPACK_IMPORTED_MODULE_5__["GameItemCardComponent"], _containers_add_game_add_game_component__WEBPACK_IMPORTED_MODULE_7__["AddGameComponent"], _games_components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_8__["GameFormComponent"], _containers_edit_game_edit_game_component__WEBPACK_IMPORTED_MODULE_10__["EditGameComponent"]]
        })
    ], GamesModule);
    return GamesModule;
}());



/***/ }),

/***/ "./src/app/core/models/game.ts":
/*!*************************************!*\
  !*** ./src/app/core/models/game.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// export interface Game {
//     id: number | string;
//     name: string;
//     year: number | string;
//     image: string;
// }


/***/ }),

/***/ "./src/app/core/services/games.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/games.service.ts ***!
  \************************************************/
/*! exports provided: GamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesService", function() { return GamesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var GamesService = /** @class */ (function () {
    function GamesService(httpC) {
        this.httpC = httpC;
        this.gamesURL = 'http://localhost:3000/games';
    }
    // ---CRUD--- //
    // READ
    GamesService.prototype.getGameList = function () {
        return this.httpC.get(this.gamesURL);
    };
    // READ
    GamesService.prototype.getGameById = function (id) {
        return this.httpC.get(this.gamesURL + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error); }));
    };
    // CREATE
    GamesService.prototype.addGame = function (game) {
        return this.httpC.post(this.gamesURL, game, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error); }));
    };
    // UPDATE
    GamesService.prototype.editGame = function (game) {
        return this.httpC.put(this.gamesURL + "/" + game.id, game)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error); }));
    };
    // DELETE
    GamesService.prototype.deleteGame = function (game) {
        return this.httpC.delete(this.gamesURL + "/" + game.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (success) { return console.log(success); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error); }));
    };
    GamesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GamesService);
    return GamesService;
}());



/***/ })

}]);
//# sourceMappingURL=games-games-module.js.map