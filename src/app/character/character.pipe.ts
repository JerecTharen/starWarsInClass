import { Pipe, PipeTransform } from '@angular/core';
import { Character} from "../app-character-list/characterInterface";

@Pipe({
  name: 'character'
})
export class CharacterPipe implements PipeTransform {

  transform(characters: Array<Character>, args?: string): Array<Character> {
    if (characters !== undefined){
      return characters.filter((character: Character) => character.name.includes(args));
    }
  }

}
