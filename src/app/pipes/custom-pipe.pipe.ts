import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.split("").reverse().join("");
  }

}
