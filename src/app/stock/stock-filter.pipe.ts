import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(list: any[], filed: string, keyword: string): any {
    debugger;
    if (!filed || !keyword) {
      return list;
    }
    return list.filter(item => {
      let itemFieldValue = item[filed].toLowerCase();
      return itemFieldValue.indexOf(keyword) >= 0;
    })
  }

}
