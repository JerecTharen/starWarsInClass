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

@NgModule({
  declarations: [
    AppComponent,
    AppCharacterListComponent,
    AppSidenavContentComponent,
    CharacterPipePipe,
    CharacterPipe,
    ForceComponentComponent,
    ForceChangeDialogComponent
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
    MatSliderModule
  ],
  entryComponents: [ForceChangeDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
