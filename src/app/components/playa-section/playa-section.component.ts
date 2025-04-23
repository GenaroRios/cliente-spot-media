import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-playa-section',
  standalone: true,
  imports:[

    CommonModule,
    MatButtonModule

  ],
  templateUrl: './playa-section.component.html',
  styleUrls: ['./playa-section.component.scss']
})
export class PlayaSectionComponent {
  playas = ['LA PERLA', 'VARESE', 'PLAYA GRANDE', 'PLAYAS DEL SUR'];

  //Platform id sirve para identificar la plataforma en la que se esta ejecutando el programa
  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit()
  {
    if (isPlatformBrowser(this.platformId))
    {
      window.addEventListener('load', () => {

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
        }, 3000); // 3 segundos de pantalla de carga
      });
    }
    
  }
}

