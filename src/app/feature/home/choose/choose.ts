import { Component, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-choose',
  imports: [],
  templateUrl: './choose.html',
  styleUrl: './choose.css',
})
export class Choose {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }
  }

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const video = this.bgVideo.nativeElement;

      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
    }
  }

}
