import { Directive, Input } from "@angular/core";

@Directive({
  selector: "[appDisplayGuests]"
})
export class DisplayGuestsDirective {
  @Input() set appDisplayGuests(condition: boolean) {
    if (condition) {
    } else {
    }
  }
  constructor() {}
}
