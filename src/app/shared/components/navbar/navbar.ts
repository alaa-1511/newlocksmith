import { Component, HostListener, Inject, inject, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { FlowbiteService } from '../../../core/service/service/flowbite-service';
import { initFlowbite } from 'flowbite';
import { isPlatformBrowser, NgClass, ViewportScroller } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink ,RouterLinkActive,NgClass ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(
    private flowbiteService: FlowbiteService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  isScrolled: WritableSignal<boolean> = signal(false);
  activeSection: WritableSignal<string> = signal('');
  private viewportScroller = inject(ViewportScroller);

  scrollTo(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.isScrolled.set(window.scrollY > 50);

    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 150;

    sections.forEach((section: any) => {
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        this.activeSection.set(section.id);
      }
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.flowbiteService.loadFlowbite(() => {
        initFlowbite();
      });
    }
  }
callNow() {
  window.location.href = "tel:+13179439599";
}



}
