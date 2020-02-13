import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MenuComponent } from "./menu/menu.component";
import { SignUpComponent } from "./signup/signup.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { RacletteComponent } from "./raclette/raclette.component";

const routes: Routes = [
  { path: "menu", component: MenuComponent },
  { path: "signup", component: SignUpComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "movie-list", component: MovieListComponent },
  { path: "raclette", component: RacletteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
