import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _TrendingService:TrendingService, private spinner: NgxSpinnerService) { }

  moviesList:any[]=[];
  TvShowsList:any[]=[];
  imgBaseUrl:string = this._TrendingService.imgBaseUrl;
  isSeemore:boolean=false;
  term:string='';


  getMovies()
  {
    this.spinner.show();
    this._TrendingService.getTrending('movie').subscribe((response)=>{
      this.moviesList = response.results;
    })
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }
  getTvShows()
  {
    this._TrendingService.getTrending('tv').subscribe((response)=>{
      this.TvShowsList = response.results;
    })
  }
  seemore()
  {
    this.isSeemore=true;
  }
  seeless()
  {
    this.isSeemore=false;
  }

  ngOnInit(): void {
    this._TrendingService.searchFilter.subscribe((value)=>{
    this.term=value;
  });
    this.getMovies();
    this.getTvShows();
  }

}
