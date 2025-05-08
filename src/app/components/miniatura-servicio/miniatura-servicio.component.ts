import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-miniatura-servicio',
  imports: [],
  templateUrl: './miniatura-servicio.component.html',
  styleUrl: './miniatura-servicio.component.scss'
})
export class MiniaturaServicioComponent {

  @Input()
  name: String = 'Servicio';
  @Input()
  thumbnail: String = 'Imagen servicio';

  constructor(){}

  ngOnInit(){

  }

}
