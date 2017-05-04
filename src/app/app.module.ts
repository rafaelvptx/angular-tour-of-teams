import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { FormsModule }                  from '@angular/forms'; // <-- NgModel lives here
import { HttpModule, JsonpModule }      from '@angular/http';
import {AppRoutingModule}               from "./app-routing.module";
import { AppComponent }                 from './app.component';
import { LeaguesComponent }             from './leagues.component';
import { SeasonsComponent }             from './seasons.component';
import { DaysComponent }                from './days.component';
import { MatchsComponent }              from './matchs.component';
import { LeagueService }                from "./league.service";
import { SeasonService }                from "./season.service";
import { DayService }                   from "./day.service";
import { MatchService }                 from "./match.service";
import {TeamService}                    from "./team.service";
import {MatchsTeamComponent}            from "./matchsTeam.component";
import {AproposComponent}               from "./apropos.component";

/////////////////////////////////////////////////////////////////////////////////////
// Cette classe décrit comment les éléments de league'application s'intègrent entre eux.
// Pour plus d'informations:  https://angular.io/docs/ts/latest/guide/appmodule.html
/////////////////////////////////////////////////////////////////////////////////////

// @NgModule est un decorateur qui identifies AppModule en tant que classe modulaire.
@NgModule({

  // BrowserModule : le module BrowserModule indique que cette application doit fonctionner dans un navigateur.
  // FormsModule : Permet d'utiliser des formulaire comme les boutons retours.
  // HttpModule : Ce module inclut les fonctions http
  // JsonpModule : Ce module inclut les fonctions Json
  // AppRoutingModule : AppRoutingModule est un module  qui gère les problèmes de routage de league'application.
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],

  // Declaration des différents composants que compose league'application
  declarations: [
    AppComponent,
    LeaguesComponent,
    SeasonsComponent,
    DaysComponent,
    MatchsComponent,
    MatchsTeamComponent,
    AproposComponent
  ],

  // Ici declarer les classes ayant leur liaison avec league'API
  providers: [ LeagueService, SeasonService, DayService, MatchService , TeamService ],

  // Le composant racine que Angular crée et insère dans la page Web index.html
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
