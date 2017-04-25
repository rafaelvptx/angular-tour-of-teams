import { NgModule }                         from '@angular/core';
import { RouterModule, Routes }             from '@angular/router';
import { LeaguesComponent }                 from './leagues.component';
import { MatchsComponent }                  from './matchs.component';
import { DaysComponent}                     from './days.component';
import { SeasonsComponent}                  from './seasons.component';

// ICI sont affectés les redirections des URL avec l'appel des components
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: LeaguesComponent },
    { path: 'home/leagues',  component: SeasonsComponent },
    { path: 'home/leagues/seasons', component: DaysComponent },
    { path: 'home/leagues/seasons/matchs', component: MatchsComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
