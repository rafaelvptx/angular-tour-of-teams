import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
   <ul>
        <li><a class="active" href="">Home</a></li>
        <li><a href="home/apropos">A propos</a></li>
    </ul>
    <div id="page"><router-outlet></router-outlet></div>` // Call other typescript
})

export class AppComponent {

}
