import { Component, Input } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicio-content',
  imports: [
    
    CommonModule

  ],
  templateUrl: './servicio-content.component.html',
  styleUrl: './servicio-content.component.scss'
})
export class ServicioContentComponent {

  @Input()
  title: string = "";

  titleSecondary: String = "";
  words: String[] = [];

  @Input()
  description: string = "";

  @Input()
  image: string = "";

  ngOnInit(){
    //this.title = this.resaltarTitulo(this.title);
  }

  /*resaltarTitulo(titulo: string): string{
    const partes = titulo.toUpperCase().split(' ');
    if (partes.length === 2)
    {
      titulo = `${partes[0]}<br><span class="secondary">${partes[1]}</span>`;
      return titulo;
    }
    else if(partes.length === 3)
    {
      titulo = `${partes[0]}<br><span class="secondary">${partes[1]} ${partes[2]}</span>`;
      return titulo;
    }
    else if (partes.length === 4)
    {
      titulo = `${partes[0]} ${partes[1]}<br><span class="secondary">${partes[2]} ${partes[3]}</span>`;
      return titulo;
    }

    return partes.join('<br>');
  }*/

    resaltarTitulo(titulo: string): string {
      const partes = titulo.toUpperCase().split(' ');
      const n = partes.length;
    
      // Si solo hay una palabra, no hay división posible
      if (n === 1) return partes[0];
    
      // División del índice: si es par, mitad y mitad; si es impar, más en la segunda parte
      const mitad = Math.floor(n / 2);
    
      // Para impar, sumamos 1 a la segunda mitad
      const primeraParte = partes.slice(0, mitad).join(' ');
      const segundaParte = partes.slice(mitad).join(' ');
    
      return `${primeraParte}<br><span class="secondary">${segundaParte}</span>`;
    }

}
