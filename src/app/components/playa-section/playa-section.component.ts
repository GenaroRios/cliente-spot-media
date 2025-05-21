import { simpleLocation } from './../../models/simpleLocation.model';
import { ApiServiceService } from './../../services/api-service.service';
import { CommonModule, isPlatformBrowser} from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-playa-section',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
],
  templateUrl: './playa-section.component.html',
  styleUrls: ['./playa-section.component.scss']
})
export class PlayaSectionComponent {
  playas = [{name:'LA PERLA', link: 'playas-la-perla'}, {name:'VARESE', link:'playa-varese'}, {name: 'PLAYA GRANDE', link:'playa-grande'}, {name:'PLAYAS DEL SUR', link: 'playas-del-sur'}];

  locations: simpleLocation[] = [];
  //Platform id sirve para identificar la plataforma en la que se esta ejecutando el programa
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private api: ApiServiceService){}

  ngOnInit()
  {
    this.api.getLocations().subscribe({
      next: (locations) => {
        this.locations = locations;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
    if (isPlatformBrowser(this.platformId))
    {
        setTimeout(() => {
          const loadScreen = document.getElementById('load-screen') as HTMLAnchorElement;
          const homeContent = document.getElementById('home-content') as HTMLAnchorElement;
      
          loadScreen.style.opacity = '0';
          loadScreen.style.transition = 'opacity 1s ease';
      
          setTimeout(() => {
            loadScreen.style.display = 'none';
            homeContent.style.opacity = '1';
            homeContent.style.transition ='opacity 1s ease';
          }, 1000); // Espera a que la transición de opacidad termine
        }, 1500); // 3 segundos de pantalla de carga
    }
    
  }
}

