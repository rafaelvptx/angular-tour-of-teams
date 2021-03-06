"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var leagues_component_1 = require("./leagues.component");
var matchs_component_1 = require("./matchs.component");
var days_component_1 = require("./days.component");
var seasons_component_1 = require("./seasons.component");
var matchsTeam_component_1 = require("./matchsTeam.component");
var apropos_component_1 = require("./apropos.component");
// ICI sont affectés les redirections des URL avec league'appel des components
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: leagues_component_1.LeaguesComponent },
    { path: 'home/apropos', component: apropos_component_1.AproposComponent },
    { path: 'home/leagues', component: seasons_component_1.SeasonsComponent },
    { path: 'home/leagues/seasons', component: days_component_1.DaysComponent },
    { path: 'home/leagues/seasons/matchs', component: matchs_component_1.MatchsComponent },
    { path: 'home/leagues/seasons/matchsTeam', component: matchsTeam_component_1.MatchsTeamComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map