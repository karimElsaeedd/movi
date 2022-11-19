import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  TvShowsList:any[]=[];
  imgBaseUrl:string = this._TrendingService.imgBaseUrl;
  term:string='';
  pageNum:number=1;

  getTvShows(pageNumber:number)
  {
    this.spinner.show();
    this._TrendingService.getPaginatedMoviesTvshows('tv',pageNumber).subscribe((response)=>{
      this.TvShowsList = response.results;
    })
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }
  next()
  {
    if(this.pageNum==5)
    {
      this.pageNum=1;
      this.getTvShows(this.pageNum);
    }
    else
    {
      this.pageNum++;
      this.getTvShows(this.pageNum);
    }
  }
  prev()
  {
    if(this.pageNum==1)
    {
      this.pageNum=5;
      this.getTvShows(this.pageNum);
    }
    else
    {
      this.pageNum--;
      this.getTvShows(this.pageNum);
    }
  }


  constructor(private _TrendingService:TrendingService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this._TrendingService.searchFilter.subscribe((value)=>{
      this.term=value;
    });
    this.getTvShows(this.pageNum);
  }

}
