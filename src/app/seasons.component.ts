import 'rxjs/add/operator/switchMap';
import { Component, OnInit }                                from '@angular/core';
import { Router, ActivatedRoute }                           from '@angular/router';
import { Location }                                         from '@angular/common';
import { Season }                                           from './season';
import { SeasonService }                                    from './season.service';
// Manipulate page et component season + initialize link API
@Component({
    selector: 'my-seasons',
    templateUrl: './seasons.component.html',
    styleUrls: [ './seasons.component.css']
})
export class SeasonsComponent implements OnInit {
    nameLeague: string = '';
    url: string = '';
    seasons: Season[] = [];
    selectedSeason: Season;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private seasonService: SeasonService) { }
    ngOnInit(): void  {
        // Recuperation des parameters d'affichage
        this.route.params.subscribe(p => this.nameLeague = p['l']);
        // Initialisation des parameters pour route
        this.seasonService.setSeasonUrl(this.nameLeague);
        this.seasonService.getSeasons().then(seasons => this.seasons = seasons);
    }
    // Action select season
    onSelect(season: Season): void {
        this.selectedSeason = season;
        this.router.navigate(['/home/leagues/seasons', {l: this.nameLeague, s: this.selectedSeason.name}]);
    }
}
