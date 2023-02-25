import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    margin: 15,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private _TrendingService:TrendingService, private spinner: NgxSpinnerService) { }

  moviesList:any[]=[];
  TvShowsList:any[]=[];
  imgBaseUrl:string = this._TrendingService.imgBaseUrl;
  term:string='';


  getMovies()
  {
    this.spinner.show();
    this._TrendingService.getTrending('movie').subscribe(
      {
        next: (response) =>
        {this.moviesList = response.results
          .map((item: any)=>({
            ...item,
            isExpanded: false,
          }))
          ;}
        ,
        complete: () =>
        {this.spinner.hide();}
      })
  }
  getTvShows()
  {
    this._TrendingService.getTrending('tv').subscribe(
      {
        next: (response) =>
        {this.TvShowsList = response.results
          .map((item: any)=>({
            ...item,
            isExpanded: false,
          }))
          ;}
      })
  }
  seemore(movie:any)
  {
    movie.isExpanded=true;
  }
  seeless(movie:any)
  {
    movie.isExpanded=false;
  }

  ngOnInit(): void {
    this._TrendingService.searchFilter.subscribe(
      {
        next: (value)=>
        {this.term=value;}
      });
    this.getMovies();
    this.getTvShows();
  }

}
