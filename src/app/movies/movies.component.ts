import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesList:any[]=[];
  imgBaseUrl:string = this._TrendingService.imgBaseUrl;

  getMovies()
  {
    this._TrendingService.getTrending('movie').subscribe((response)=>{
      this.moviesList = response.results;
    })
  }

  constructor(private _TrendingService:TrendingService) { }

  ngOnInit(): void {
    this.getMovies();
  }

}
