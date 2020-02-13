import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  defaultAppearanceMovieList: boolean = true;
  isThisElementIsEntered: boolean = true;
  showMovies: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
