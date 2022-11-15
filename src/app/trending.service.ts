import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  getTrending(mediaType:any):Observable<any>
  {
    return this._HttpClient.get(`http://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
  }

  constructor(private _HttpClient:HttpClient) { }
}
