import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [

    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

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

}
