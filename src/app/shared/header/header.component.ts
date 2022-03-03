import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template:
  `<mat-toolbar color="primary">
    <span>Mi Primer Aplicacion</span>
  </mat-toolbar>`
  ,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}