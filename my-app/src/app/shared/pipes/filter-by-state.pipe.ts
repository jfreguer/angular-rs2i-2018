import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../enums/state.enum';

@Pipe({
  name: 'filterByState'
})
export class FilterByStatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args === State.LIVREE) {
      return value ? value.filter(item => item.state === State.LIVREE) : [];
    } else {
      return value ? value.filter(item => item.state !== State.LIVREE) : [];
    }
  }
}
