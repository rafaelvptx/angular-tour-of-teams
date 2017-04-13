import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/leagues" routerLinkActive="active">Leagues</a>
        </nav>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title = 'Coop';
}