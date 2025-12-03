import { Component, ElementRef, ViewChild, Inject, PLATFORM_ID, signal, HostListener, inject } from '@angular/core';
import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import * as AOS from 'aos';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero',
  imports: [CarouselModule, ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const video = this.bgVideo.nativeElement;
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
    }
  }



  mainOp: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsEach: false,
    navSpeed: 700,
    nav: false,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  };

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }
  }
showPhoneIcon = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.showPhoneIcon.set(scrollY > 50);
  }
 private scroller = inject(ViewportScroller);

  scrollToSection() {
    this.scroller.scrollToAnchor('footform');
  }

  scrollToSection2() {
    this.scroller.scrollToAnchor('ourservice');
  }
callNow() {
  window.location.href = "tel:+201234567890";
}

}
