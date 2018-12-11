import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule, MatFormFieldControl,
  MatFormFieldModule, MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppCharacterListComponent } from './app-character-list/app-character-list.component';
import { AppSidenavContentComponent } from './app-sidenav-content/app-sidenav-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCharacterListComponent,
    AppSidenavContentComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
