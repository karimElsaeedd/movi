import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _TrendingService:TrendingService) { }

  moviesList:any[]=[];
  TvShowsList:any[]=[];
  imgBaseUrl:string='https://image.tmdb.org/t/p/original'

  getMovies()
  {
    this._TrendingService.getTrending('movie').subscribe((response)=>{
      this.moviesList = response.results;
    })
  }
  getTvShows()
  {
    this._TrendingService.getTrending('tv').subscribe((response)=>{
      this.TvShowsList = response.results;
    })
  }

  ngOnInit(): void {
    this.getMovies();
    this.getTvShows();
  }

}
