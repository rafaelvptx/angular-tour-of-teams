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
var season_service_1 = require("./season.service");
// Manipulate page et component season + initialize link API
var SeasonsComponent = (function () {
    function SeasonsComponent(route, router, seasonService) {
        this.route = route;
        this.router = router;
        this.seasonService = seasonService;
        this.nameLeague = '';
        this.url = '';
        this.seasons = [];
    }
    SeasonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Recuperation des parameters d'affichage
        this.route.params.subscribe(function (p) { return _this.nameLeague = p['l']; });
        // Initialisation des parameters pour route
        this.seasonService.setSeasonUrl(this.nameLeague);
        this.seasonService.getSeasons().then(function (seasons) { return _this.seasons = seasons; });
    };
    // Action select season
    SeasonsComponent.prototype.onSelect = function (season) {
        this.selectedSeason = season;
        this.router.navigate(['/home/leagues/seasons', { l: this.nameLeague, s: this.selectedSeason.name }]);
    };
    return SeasonsComponent;
}());
SeasonsComponent = __decorate([
    core_1.Component({
        selector: 'my-seasons',
        templateUrl: './seasons.component.html',
        styleUrls: ['./seasons.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        season_service_1.SeasonService])
], SeasonsComponent);
exports.SeasonsComponent = SeasonsComponent;
//# sourceMappingURL=seasons.component.js.map