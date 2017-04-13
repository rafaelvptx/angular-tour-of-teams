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
var LeaguesComponent = (function () {
    function LeaguesComponent(router, leagueService) {
        this.router = router;
        this.leagueService = leagueService;
        this.leagues = [];
    }
    LeaguesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leagueService.getLeagues()
            .then(function (leagues) { return _this.leagues = leagues; });
    };
    LeaguesComponent.prototype.onSelect = function (league) {
        this.selectedLeague = league;
        this.router.navigate(['/home/leagues', { name: this.selectedLeague.name }]);
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
        league_service_1.LeagueService])
], LeaguesComponent);
exports.LeaguesComponent = LeaguesComponent;
//# sourceMappingURL=leagues.component.js.map