import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'textReplace'})
export class TextReplacePipe implements PipeTransform {
  transform(value: any, delimiter: string) : Object {
    return value.replace(delimiter, " ");
  }
}