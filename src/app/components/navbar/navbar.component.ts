import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [

    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() 
  home: boolean = false;

  constructor(){}

  ngOnInit(){
    if (this.home)
    {
      const nav = document.getElementById("navbar") as HTMLAnchorElement;
      nav.style.opacity = '0'
      setTimeout(()=>{
        nav.style.opacity = '1';
        nav.style.transition = 'opacity 1s ease';
      }, 4000);
    }
  }

}
