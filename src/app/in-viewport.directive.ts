import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInViewport]'
})
export class InViewportDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.checkVisibility();
  }

  private checkVisibility() {
    const element = this.elementRef.nativeElement;
    const rect = element.getBoundingClientRect();
    const isVisible = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

    if (isVisible) {
      this.renderer.addClass(element, 'in-view');
    } else {
      this.renderer.removeClass(element, 'in-view');
    }
  }
}
