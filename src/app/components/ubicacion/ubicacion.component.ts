import { Location } from './../../models/location.model';
import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Servicio } from '../../models/servicio.model';
import { CommonModule } from '@angular/common';
import { MiniaturaServicioComponent } from '../miniatura-servicio/miniatura-servicio.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioContentComponent } from "../servicio-content/servicio-content.component";

@Component({
  selector: 'app-ubicacion',
  imports: [
    CommonModule,
    MiniaturaServicioComponent,
    ServicioContentComponent
],
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.scss'
})
export class UbicacionComponent {

  servicios: Servicio[] = [];
  UBICACIONES_VALIDAS = ['playa-grande', 'playa-varese', 'playas-la-perla', 'playas-del-sur'];
  titulo = '';

  
    constructor(private api: ApiServiceService, private route: ActivatedRoute, private router: Router){
  
    }
  
    /*ngOnInit(){

      this.route.paramMap.subscribe(params => {
        const nombre = params.get('nombre') ?? '';
        if (!this.UBICACIONES_VALIDAS.includes(nombre.toLowerCase())) {
          this.router.navigate(['/home']); // o podés usar ['/'] si es el home
          return;
        }

        this.setTitulo(nombre);
      });
    }*/

      ngOnInit(){
        this.route.paramMap.subscribe(params => {
          const idParam = params.get('id');
          const id = idParam !== null ? Number(idParam) : null;
        
          if (id !== null && !isNaN(id)) {
            this.api.getLocationById(id).subscribe({
              next: (location) => {
                this.titulo = this.setTitulo(location.name);
                this.servicios = location.products;
              },
              error: (err) => {
                console.error('Error al obtener la ubicación', err);
              }
            });
          } else {
            console.error('ID inválido');
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

    /*obtenerServicios(nombre: string){

      this.api.getServiceByLocationName(nombre).subscribe({
        next: (servicios) =>{
          this.servicios = servicios;
          console.log(servicios);
        },
        error: (error) =>{
          console.error(error);
        }
      });

    }*/

}
