import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';


import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-about',
  imports: [ RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

callNow() {
  if (isPlatformBrowser(this.platformId)) {
    window.open("tel:3179439599");
  }
}
}