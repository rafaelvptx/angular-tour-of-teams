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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
        this.teamsUrl = 'api/team'; // URL to web api
    }
    TeamService.prototype.setTeamsUrl = function (nameLeague, nameSeason) {
        this.teamsUrl = 'http://localhost:8080/' + nameLeague + '/' + nameSeason + '/equipes';
    };
    TeamService.prototype.getTeams = function () {
        return this.http.get(this.teamsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // throw error
    TeamService.prototype.handleError = function (error) {
        console.error('An error occurred team service', error); // throw error
        return Promise.reject(error.message || error);
    };
    return TeamService;
}());
TeamService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TeamService);
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map