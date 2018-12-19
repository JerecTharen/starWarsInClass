import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {CharacterDetailComponent} from "../../character/character-detail/character-detail.component";
import {NoDetailComponent} from "../../character/character-detail/no-detail/no-detail.component";

const detailRoute: Routes = [
  {path: 'characters/:id', component: CharacterDetailComponent},
  {path: '', component:NoDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DetailRoutingModule { }
