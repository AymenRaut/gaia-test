import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutToetComponent } from './about-toet/about-toet.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:"", redirectTo: "/home", pathMatch:'full'},
  {path: 'home', component:HomePageComponent},
  {path: 'about-toet', component:AboutToetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
