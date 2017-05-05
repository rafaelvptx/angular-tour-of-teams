import { NgModule }                         from '@angular/core';
import { RouterModule, Routes }             from '@angular/router';
import { LeaguesComponent }                 from './leagues.component';
import { MatchsComponent }                  from './matchs.component';
import { DaysComponent}                     from './days.component';
import { SeasonsComponent}                  from './seasons.component';
import {MatchsTeamComponent}                from './matchsTeam.component';
import {AproposComponent}                   from './apropos.component';

// ICI sont affectés les redirections des URL avec league'appel des components
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: LeaguesComponent },
    { path: 'home/apropos', component: AproposComponent },
    { path: 'home/leagues',  component: SeasonsComponent },
    { path: 'home/leagues/seasons', component: DaysComponent },
    { path: 'home/leagues/seasons/matchs', component: MatchsComponent },
    { path: 'home/leagues/seasons/matchsTeam', component: MatchsTeamComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
