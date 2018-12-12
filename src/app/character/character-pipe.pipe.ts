import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterPipe'
})
export class CharacterPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
