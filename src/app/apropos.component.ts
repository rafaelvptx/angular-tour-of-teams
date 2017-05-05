import { Component, OnInit }        from '@angular/core';

// Manipulate component and static page "a propos"
@Component({
  selector: 'my-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: [ './apropos.component.css']
})
export class AproposComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}
