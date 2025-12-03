import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-term',
  imports: [],
  templateUrl: './term.html',
  styleUrl: './term.css',
})
export class Term {

    constructor(@Inject(PLATFORM_ID) private platformId: any) {}

callNow() {
  if (isPlatformBrowser(this.platformId)) {
    window.open("tel:3179439599");
  }
}
}
