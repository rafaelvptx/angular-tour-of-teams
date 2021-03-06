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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var league_service_1 = require("./league.service");
var season_service_1 = require("./season.service");
// Object league et API
var LeaguesComponent = (function () {
    function LeaguesComponent(router, leagueService, seasonService) {
        this.router = router;
        this.leagueService = leagueService;
        this.seasonService = seasonService;
        this.leagues = [];
        this.seasons = [];
    }
    // Initialisation
    LeaguesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leagueService.getLeagues()
            .then(function (leagues) { return _this.leagues = leagues.slice(0, 5); });
        this.seasonService.getSeasons()
            .then(function (seasons) { return _this.seasons = seasons.slice(0, 5); });
    };
    // Action selection league
    LeaguesComponent.prototype.onSelect = function (league) {
        this.l = league;
        // Route
        this.router.navigate(['/home/leagues', { l: this.l.name }]);
    };
    return LeaguesComponent;
}());
LeaguesComponent = __decorate([
    core_1.Component({
        selector: 'my-leagues',
        templateUrl: './leagues.component.html',
        styleUrls: ['./leagues.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        league_service_1.LeagueService,
        season_service_1.SeasonService])
], LeaguesComponent);
exports.LeaguesComponent = LeaguesComponent;
//# sourceMappingURL=leagues.component.js.map