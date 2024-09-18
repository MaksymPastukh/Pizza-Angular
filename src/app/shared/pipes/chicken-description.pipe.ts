import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chickenDescription'
})
export class ChickenDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/([Cc]hi(?:ck|e)[a-z]+)/g, (match: string) => {
      return match.toUpperCase()
    })
  }

}
