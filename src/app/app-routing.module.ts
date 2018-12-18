import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./homepage/home/home.component";
import {AppCharacterListComponent} from "./app-character-list/app-character-list.component";
import {AppSidenavContentComponent} from "./app-sidenav-content/app-sidenav-content.component";

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'characters', component: AppCharacterListComponent},
  {path: '', component: HomeComponent},
  // {path: 'characters/:id', component: AppSidenavContentComponent}
];
@NgModule({
  exports: [ RouterModule],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ]
})
export class AppRoutingModule { }
