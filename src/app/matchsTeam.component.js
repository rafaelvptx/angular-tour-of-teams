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
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var match_service_1 = require("./match.service");
// Permet de gérer league'affichage du composant match en fonction d'une equipe
var MatchsTeamComponent = (function () {
    function MatchsTeamComponent(matchService, route, location) {
        this.matchService = matchService;
        this.route = route;
        this.location = location;
    }
    MatchsTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Récupération des paramétres d'affichage
        this.route.params.subscribe(function (p) { return _this.nameLeague = p['l']; });
        this.route.params.subscribe(function (p) { return _this.nameSeason = p['s']; });
        this.route.params.subscribe(function (p) { return _this.selectedTeam = p['t']; });
        this.matchService.setMatchsUrlForTeam(this.nameLeague, this.nameSeason, this.selectedTeam);
        this.getMatchs();
    };
    MatchsTeamComponent.prototype.goBack = function () {
        this.location.back();
    };
    MatchsTeamComponent.prototype.getMatchs = function () {
        var _this = this;
        this.matchService.getMatchs().then(function (matchs) { return _this.matchs = matchs; });
    };
    MatchsTeamComponent.prototype.onSelect = function (match) {
        this.selectedMatch = match;
    };
    return MatchsTeamComponent;
}());
MatchsTeamComponent = __decorate([
    core_1.Component({
        selector: 'my-matchs',
        templateUrl: './matchsTeam.component.html',
        styleUrls: ['./matchsTeam.component.css']
    }),
    __metadata("design:paramtypes", [match_service_1.MatchService,
        router_1.ActivatedRoute,
        common_1.Location])
], MatchsTeamComponent);
exports.MatchsTeamComponent = MatchsTeamComponent;
//# sourceMappingURL=matchsTeam.component.js.map