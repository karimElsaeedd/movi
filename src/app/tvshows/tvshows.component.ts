import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  TvShowsList:any[]=[];
  imgBaseUrl:string = this._TrendingService.imgBaseUrl

  getTvShows()
  {
    this._TrendingService.getTrending('tv').subscribe((response)=>{
      this.TvShowsList = response.results;
    })
  }


  constructor(private _TrendingService:TrendingService) { }

  ngOnInit(): void {
    this.getTvShows();
  }

}
