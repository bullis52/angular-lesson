import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringify'
})
export class StringifyPipe implements PipeTransform {

  transform(value: object,stri:object,...args: unknown[]): string {
    return value.toString();
  }

}
