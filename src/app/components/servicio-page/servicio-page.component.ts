import { Component } from '@angular/core';
import { ServicioContentComponent } from "../servicio-content/servicio-content.component";
import { SideBarComponent } from "../side-bar/side-bar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicio-page',
  imports: [
    SideBarComponent,
    RouterModule
  ],
  templateUrl: './servicio-page.component.html',
  styleUrl: './servicio-page.component.scss'
})
export class ServicioPageComponent {

}
