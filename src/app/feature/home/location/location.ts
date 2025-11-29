import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-location',
  imports: [RouterLink],
  templateUrl: './location.html',
  styleUrl: './location.css',
})
export class Location {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }
  }




}
