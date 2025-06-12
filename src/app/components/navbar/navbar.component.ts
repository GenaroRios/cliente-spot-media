import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule }    from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-navbar',
  imports: [

    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      if(event.url === '/')
      {
        this.fade();
      }
    });
  }

  private fade(){
    
    if (isPlatformBrowser(this.platformId)) {
      const nav = document.getElementById("navbar") as HTMLAnchorElement;
      nav.classList.add('fade-out');
      nav.style.animationDelay = '0s'
      setTimeout(()=>{
        void nav.offsetWidth;
        nav.classList.remove('fade-out');
      }, 2500);
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
