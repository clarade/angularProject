import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appMoviehighlight]"
})
export class MoviehighlightDirective {
  @HostBinding("style.color") color: string;
  constructor() {}
  @HostListener("mouseenter") mouseEnterEvent(eventData: Event) {
    this.color = "green";
  }

  @HostListener("mouseleave") mouseLeaveEvent(eventData: Event) {
    this.color = "black";
  }
}
