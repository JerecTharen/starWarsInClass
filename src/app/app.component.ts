import { Component, Input } from '@angular/core';
import { AppCharacterListComponent} from './app-character-list/app-character-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @Input() myVar: string;
  title = 'star-wars-characters';
  constructor(){
    // console.log(this.myVar);
  }
}
