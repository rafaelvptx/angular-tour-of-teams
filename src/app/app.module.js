"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var leagues_component_1 = require("./leagues.component");
var seasons_component_1 = require("./seasons.component");
var days_component_1 = require("./days.component");
var matchs_component_1 = require("./matchs.component");
var league_service_1 = require("./league.service");
var season_service_1 = require("./season.service");
var day_service_1 = require("./day.service");
var match_service_1 = require("./match.service");
var team_service_1 = require("./team.service");
var matchsTeam_component_1 = require("./matchsTeam.component");
/////////////////////////////////////////////////////////////////////////////////////
// Cette classe décrit comment les éléments de l'application s'intègrent entre eux.
// Pour plus d'informations:  https://angular.io/docs/ts/latest/guide/appmodule.html
/////////////////////////////////////////////////////////////////////////////////////
// @NgModule est un decorateur qui identifies AppModule en tant que classe modulaire.
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        // BrowserModule : le module BrowserModule indique que cette application doit fonctionner dans un navigateur.
        // FormsModule : Permet d'utiliser des formulaire comme les boutons retours.
        // HttpModule : Ce module inclut les fonctions http
        // JsonpModule : Ce module inclut les fonctions Json
        // AppRoutingModule : AppRoutingModule est un module  qui gère les problèmes de routage de l'application.
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routing_module_1.AppRoutingModule
        ],
        // Declaration des différents composants que compose l'application
        declarations: [
            app_component_1.AppComponent,
            leagues_component_1.LeaguesComponent,
            seasons_component_1.SeasonsComponent,
            days_component_1.DaysComponent,
            matchs_component_1.MatchsComponent,
            matchsTeam_component_1.MatchsTeamComponent
        ],
        // Ici declarer les classes ayant leur liaison avec l'API
        providers: [league_service_1.LeagueService, season_service_1.SeasonService, day_service_1.DayService, match_service_1.MatchService, team_service_1.TeamService],
        // Le composant racine que Angular crée et insère dans la page Web index.html
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map