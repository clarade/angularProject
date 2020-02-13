import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-raclette",
  templateUrl: "./raclette.component.html",
  styleUrls: ["./raclette.component.css"]
})
export class RacletteComponent implements OnInit {
  title = "Raclette Party";

  isThisIngredientVital: boolean = true;
  displayGuestList: boolean = true;
  songList: string[] = ["Au DD, Popopop, Tengon/Interlude"];

  constructor() {}

  ngOnInit(): void {}
}
