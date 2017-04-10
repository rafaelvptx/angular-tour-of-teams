"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var match_service_1 = require("./match.service");
var MatchsComponent = (function () {
    function MatchsComponent(matchService, router, location) {
        this.matchService = matchService;
        this.router = router;
        this.location = location;
    }
    MatchsComponent.prototype.ngOnInit = function () {
        this.getMatchs();
    };
    MatchsComponent.prototype.goBack = function () {
        this.location.back();
    };
    MatchsComponent.prototype.getMatchs = function () {
        var _this = this;
        this.matchService.getMatchs().then(function (matchs) { return _this.matchs = matchs; });
    };
    MatchsComponent.prototype.onSelect = function (match) {
        this.selectedMatch = match;
    };
    return MatchsComponent;
}());
MatchsComponent = __decorate([
    core_1.Component({
        selector: 'my-matchs',
        templateUrl: './matchs.component.html',
        styleUrls: ['./matchs.component.css']
    }),
    __metadata("design:paramtypes", [match_service_1.MatchService,
        router_1.ActivatedRoute,
        common_1.Location])
], MatchsComponent);
exports.MatchsComponent = MatchsComponent;
//# sourceMappingURL=matchs.component.js.map