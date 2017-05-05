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
// Manipulate object day
var DayService = (function () {
    function DayService(http) {
        this.http = http;
        this.daysUrl = 'api/days'; // URL to web api
    }
    DayService.prototype.setDaysUrl = function (nameLeague, nameSeason) {
        this.daysUrl = 'http://localhost:8080/' + nameLeague + '/' + nameSeason + '/journees';
    };
    DayService.prototype.getDays = function () {
        return this.http.get(this.daysUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DayService.prototype.handleError = function (error) {
        console.error('An error occurred day service', error); // throw error service
        return Promise.reject(error.message || error);
    };
    DayService.prototype.getDay = function (id) {
        var url = this.daysUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    return DayService;
}());
DayService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DayService);
exports.DayService = DayService;
//# sourceMappingURL=day.service.js.map