import { Component, HostListener } from '@angular/core';
import { PlayaSectionComponent } from "../playa-section/playa-section.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    PlayaSectionComponent, 
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 

}
