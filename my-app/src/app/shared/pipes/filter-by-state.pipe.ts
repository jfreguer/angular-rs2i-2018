import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../enums/state.enum';

@Pipe({
  name: 'filterByState'
})
export class FilterByStatePipe implements PipeTransform {

  transform(value?: any, args?: any): any {
    /**
     * Le test ci-dessous de type "value ?" est impéaratif. Car dans le cas de souscription (observable),
     * il arrive que les données ne soient pas encore chargées lorsque le filtre est solliciité
     */
    if (args === State.LIVREE) {
      return value ? value.filter(item => item.state === State.LIVREE) : [];
    } else {
      return value ? value.filter(item => item.state !== State.LIVREE) : [];
    }
  }
}
