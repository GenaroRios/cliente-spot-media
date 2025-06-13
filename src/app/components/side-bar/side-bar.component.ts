import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import { simpleLocation } from '../../models/simpleLocation.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [

    MatButtonModule,
    RouterModule,
    CommonModule

  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  menuOpen = false;

  locations: simpleLocation[] = [];

  constructor(private api: ApiServiceService, private router: Router){}

  ngOnInit(){
    this.api.getLocations().subscribe({
      next: (data) =>{
        this.locations = data;
        console.log(data);
      },
      error: (error) =>{
        console.error(error);
      }
    });

  }

  setTitulo(nombre: string) {
    const partes = nombre.toUpperCase().split(' ');
    if (partes.length <= 1) return nombre;

    const primeraPalabra = partes[0];
    const resto = partes.slice(1).join(' ');

    return `${primeraPalabra}<br>${resto}`;

  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }
}
