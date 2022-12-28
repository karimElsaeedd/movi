import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable ,BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  imgBaseUrl:string='https://image.tmdb.org/t/p/original'

  constructor(private _HttpClient:HttpClient) { }

  searchFilter = new BehaviorSubject<string>('');
  emitSearchFilter(value:string)
  {
    this.searchFilter.next(value)
  }

  getPaginatedMoviesTvshows(mediaType:any,pageNumber:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }

  getTrending(mediaType:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
  }
  getTrendingDetails(mediaType:any, id:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
  }
  // getPeople(mediaType:any, id:number):Observable<any>
  // {
  //   return this._HttpClient.get(`https://api.themoviedb.org/3/person/{person_id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
  // }

}
