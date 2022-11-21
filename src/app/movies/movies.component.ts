import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesList:any[]=[];
  imgBaseUrl:string = this._TrendingService.imgBaseUrl;
  term:string='';
  pageNum:number=1;

  getMovies(pageNumber:number)
  {
    this.spinner.show();
    this.pageNum=pageNumber;
    this._TrendingService.getPaginatedMoviesTvshows('movie',pageNumber).subscribe((response)=>{
      this.moviesList = response.results;
    },
    ()=>{

    },
    ()=>{
      this.spinner.hide();
    })
  }
  next()
  {
    if(this.pageNum==5)
    {
      this.pageNum=1;
      this.getMovies(this.pageNum);
    }
    else
    {
      this.pageNum++;
      this.getMovies(this.pageNum);
    }
  }
  prev()
  {
    if(this.pageNum==1)
    {
      this.pageNum=5;
      this.getMovies(this.pageNum);
    }
    else
    {
      this.pageNum--;
      this.getMovies(this.pageNum);
    }
  }

  constructor(private _TrendingService:TrendingService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this._TrendingService.searchFilter.subscribe((value)=>{
      this.term=value;
    });
    this.getMovies(this.pageNum);
  }

}
