import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-residential',
  imports: [],
  templateUrl: './residential.html',
  styleUrl: './residential.css',
})
export class Residential {
 openKeys = signal(false);
  openProgramming = signal(false);
  openIgnition = signal(false);

  // Toggle functions
  toggleKeys() {
    this.openKeys.set(!this.openKeys());
  }

  toggleProgramming() {
    this.openProgramming.set(!this.openProgramming());
  }

  toggleIgnition() {
    this.openIgnition.set(!this.openIgnition());
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }
  }
 callNow() {
  window.location.href = "tel:+13179439599";
}
}
