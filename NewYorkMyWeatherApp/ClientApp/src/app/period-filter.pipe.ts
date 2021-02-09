import { Pipe, PipeTransform } from '@angular/core';
import { Period } from './forecast.service';

@Pipe({
  name: 'periodFilter'
})
export class PeriodFilterPipe implements PipeTransform {

  transform(items: Period[], filter: number): any {
    if (!items || !filter) {
      return items;
    }
    console.log(filter)
    return items.filter(item => item.number == filter);
  }
}
