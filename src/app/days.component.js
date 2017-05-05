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
var day_service_1 = require("./day.service");
var team_service_1 = require("./team.service");
// Manipulate component/Page day and call API
var DaysComponent = (function () {
    function DaysComponent(route, router, dayService, teamService) {
        this.route = route;
        this.router = router;
        this.dayService = dayService;
        this.teamService = teamService;
    }
    DaysComponent.prototype.getDays = function () {
        var _this = this;
        this.dayService.getDays().then(function (days) { return _this.days = days; });
    };
    DaysComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams().then(function (teams) { return _this.teams = teams; });
    };
    // Initialisation
    DaysComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Recuperation des parameters d'affichage
        this.route.params.subscribe(function (p) { return _this.nameLeague = p['l']; });
        this.route.params.subscribe(function (p) { return _this.selectedSeason = p['s']; });
        // Initialisation des variables pour routing suivant
        this.dayService.setDaysUrl(this.nameLeague, this.selectedSeason);
        this.teamService.setTeamsUrl(this.nameLeague, this.selectedSeason);
        // Recuperation des informations pour affichages
        this.getDays();
        this.getTeams();
    };
    // Action pour la selection d un day
    DaysComponent.prototype.onSelect = function (day) {
        this.selectedDay = day;
        // Route
        this.router.navigate(['/home/leagues/seasons/matchs', {
                l: this.nameLeague,
                s: this.selectedSeason,
                d: this.selectedDay.name
            }]);
    };
    // Action pour la selection d une team
    DaysComponent.prototype.onSelectTeam = function (team) {
        this.selectedTeam = team;
        // Route
        this.router.navigate(['/home/leagues/seasons/matchsTeam', {
                l: this.nameLeague,
                s: this.selectedSeason,
                t: this.selectedTeam.name
            }]);
    };
    return DaysComponent;
}());
DaysComponent = __decorate([
    core_1.Component({
        selector: 'my-days',
        templateUrl: './days.component.html',
        styleUrls: ['./days.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        day_service_1.DayService,
        team_service_1.TeamService])
], DaysComponent);
exports.DaysComponent = DaysComponent;
//# sourceMappingURL=days.component.js.map