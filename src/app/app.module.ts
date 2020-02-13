import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignUpComponent } from "./signup/signup.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { HighlightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviehighlightDirective } from './movie-list/moviehighlight.directive';
import { MenuComponent } from './menu/menu.component';
import { RacletteComponent } from './raclette/raclette.component';

@NgModule({
  declarations: [AppComponent, SignUpComponent, UserProfileComponent, HighlightDirective, DisplayGuestsDirective, MovieListComponent, MoviehighlightDirective, MenuComponent, RacletteComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
