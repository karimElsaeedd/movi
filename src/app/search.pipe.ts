import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(trendingItems:any[],trem:string): any[] {
    return trendingItems.filter((item)=>item.title.toLowerCase().includes(trem.toLowerCase()));
  }

}
