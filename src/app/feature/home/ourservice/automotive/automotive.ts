import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-automotive',
  imports: [],
  templateUrl: './automotive.html',
  styleUrl: './automotive.css',
})
export class Automotive {

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

  phone = '+123456789';
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
