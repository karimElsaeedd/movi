import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  imgBaseUrl:string='https://image.tmdb.org/t/p/original'

  constructor(private _HttpClient:HttpClient) { }



  getTrending(mediaType:any):Observable<any>
  {
    return this._HttpClient.get(`http://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
  }
  getTrendingDetails(mediaType:any, id:number):Observable<any>
  {
    return this._HttpClient.get(`http://api.themoviedb.org/3/${mediaType}/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
  }

}
