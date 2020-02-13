import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {}

  @HostListener("mouseenter") mouseEnterEvent(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "background-color",
      "yellow"
    );
  }

  @HostListener("mouseleave") mouseLeaveEvent(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "background-color",
      "transparent"
    );
  }
}
