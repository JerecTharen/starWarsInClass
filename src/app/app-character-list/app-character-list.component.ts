import {Component, OnInit, OnChanges, SimpleChanges, OnDestroy, Output} from '@angular/core';
import {Character} from "./characterInterface";
import {ForceComponentComponent} from "../shared/force-component/force-component.component";
import {CharacterService} from "../character/character.service";

@Component({
  selector: 'app-character-list',
  templateUrl: './app-character-list.component.html',
  styleUrls: ['./app-character-list.component.scss']
})
export class AppCharacterListComponent implements OnInit{
  // @Output() myVar: string = "hello there";
  hideDetails: boolean = true;
  forHidden: string = "Show Details";
  forShowing: string = "Hide Details";
  characterFilter: string = "";
  characters: Array<Character>;

  constructor(private characterService: CharacterService){
    // this.characterService = characterService;
  }
  ngOnInit(){
    this.characterService.getCharacters().subscribe(characters=> this.characters = characters);
  }
  toggleDetails(): void{
    this.hideDetails = !this.hideDetails;
  }

}
