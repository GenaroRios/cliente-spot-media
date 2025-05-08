import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
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

  @Input() home: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes['home'].currentValue && isPlatformBrowser(this.platformId)) {
      if (this.home)
        {
          const nav = document.getElementById("navbar") as HTMLAnchorElement;
          nav.style.transition = 'none';
          nav.style.opacity = '0';
          setTimeout(()=>{
            nav.style.transition = 'opacity 1s ease';
            nav.style.opacity = '1';
          }, 2500);
        }
    }
  }

}
