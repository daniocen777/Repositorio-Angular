import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'documento'
})
export class DocumentoPipe implements PipeTransform {

  transform(value: number): string {
    if (value == 1) {
      return "DN";
    }

    if (value == 2) {
      return "CE";
    }

    if (value == 3) {
      return "PA";
    }
    return "";

  }

}
