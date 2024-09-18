import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordUpper'
})
export class WordUpperPipe implements PipeTransform {

  transform(value: string, wordPart: string[]): string {

    let result:string = value
    wordPart.forEach((item : string):void =>  {
      result  = result.replace(new RegExp('[A-Za-z]*' + item  + '[a-z]*' ,  'g'), (match: string) => {
        return match.toUpperCase()
      })
    })

    return result
  }

}
