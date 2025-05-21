import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServicioContentComponent } from "../servicio-content/servicio-content.component";
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { ViewportScroller } from '@angular/common';

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
