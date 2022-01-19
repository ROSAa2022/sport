import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tts'
})
export class TtsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
