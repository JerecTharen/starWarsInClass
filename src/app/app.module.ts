import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnChanges, OnInit} from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule, MatFormFieldControl,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppCharacterListComponent } from './app-character-list/app-character-list.component';
import { AppSidenavContentComponent } from './app-sidenav-content/app-sidenav-content.component';
import {FormsModule} from "@angular/forms";
import { CharacterPipePipe } from './character/character-pipe.pipe';
import { CharacterPipe } from './character/character.pipe';
import { ForceComponentComponent } from './shared/force-component/force-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCharacterListComponent,
    AppSidenavContentComponent,
    CharacterPipePipe,
    CharacterPipe,
    ForceComponentComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
