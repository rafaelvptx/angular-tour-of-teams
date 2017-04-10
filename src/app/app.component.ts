import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
   <ul>
        <li><a class="active" href="">Home</a></li>
        <li><a href="">Journ&eacute;es</a></li>
        <li><a href="">Equipes</a></li>
         <li><a  href="">Retour</a></li>
   
     
    </ul>
    <div id="page"><router-outlet></router-outlet></div>`
})

export class AppComponent {

}
