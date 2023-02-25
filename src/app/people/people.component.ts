import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  constructor(private _TrendingService:TrendingService, private spinner: NgxSpinnerService) { }

  peopleList:any[]=[];
  imgBaseUrl:string = this._TrendingService.imgBaseUrl;
  term:string='';


  getPeople()
  {
    this.spinner.show();
    this._TrendingService.getTrending('person').subscribe(
      {
        next:(response) =>
        {this.peopleList = response.results;}
        ,
        complete:() =>
        {this.spinner.hide();}
      })
  }

  ngOnInit(): void {
    this._TrendingService.searchFilter.subscribe((value)=>{
    this.term=value;
  });
    this.getPeople();
  }

}
