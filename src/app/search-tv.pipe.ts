import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTv'
})
export class SearchTvPipe implements PipeTransform {

  transform(trendingItems:any[],trem:string): any[] {
    return trendingItems.filter((item)=>item.name.toLowerCase().includes(trem.toLowerCase()));
  }

}
