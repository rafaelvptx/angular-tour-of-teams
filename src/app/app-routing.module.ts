import { NgModule }                         from '@angular/core';
import { RouterModule, Routes }             from '@angular/router';

import { LeaguesComponent }                 from './leagues.component';
import { MatchsComponent }                  from './matchs.component';
import { DaysComponent}                     from "./days.component";

const routes: Routes = [
    { path: '', redirectTo: '/leagues', pathMatch: 'full' },
    { path: 'leagues',  component: LeaguesComponent },
    { path: 'leagues/:name',  component: LeaguesComponent },
    { path: 'days/:name', component: DaysComponent },
    { path: 'matchs/:name', component: MatchsComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}