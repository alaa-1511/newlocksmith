import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  callNow() {
    if (isPlatformBrowser(this.platformId)) {
      window.open("tel:3179439599");
    }
  }
}