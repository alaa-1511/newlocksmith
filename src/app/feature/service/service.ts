import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Ourservice } from "../home/ourservice/ourservice";

@Component({
  selector: 'app-service',
  imports: [CarouselModule, Ourservice],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {

 mainO: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    dotsEach: false,
    navSpeed: 700,
    nav: false,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  };

}
