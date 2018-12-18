import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnChanges, OnInit} from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule, MatDialogModule, MatFormFieldControl,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule,
  MatSidenavModule, MatSliderModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppCharacterListComponent } from './app-character-list/app-character-list.component';
import { AppSidenavContentComponent } from './app-sidenav-content/app-sidenav-content.component';
import {FormsModule} from "@angular/forms";
import { CharacterPipePipe } from './character/character-pipe.pipe';
import { CharacterPipe } from './character/character.pipe';
import { ForceComponentComponent } from './shared/force-component/force-component.component';
import { ForceChangeDialogComponent } from './shared/force-component/force-change-dialog/force-change-dialog.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './homepage/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCharacterListComponent,
    AppSidenavContentComponent,
    CharacterPipePipe,
    CharacterPipe,
    ForceComponentComponent,
    ForceChangeDialogComponent,
    HomeComponent
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
    MatIconModule,
    MatDialogModule,
    MatSliderModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule,
    AppRoutingModule
  ],
  entryComponents: [ForceChangeDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
