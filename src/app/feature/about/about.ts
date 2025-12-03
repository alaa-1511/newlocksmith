import { Component } from '@angular/core';


import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-about',
  imports: [ RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
callNow() {
  window.location.href = "tel:+13179439599";
}
}
