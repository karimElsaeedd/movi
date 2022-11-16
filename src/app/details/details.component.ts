import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  currentId:number=0;
  mediaType:string=''
  details:any={};
  imgBaseUrl:string = this._TrendingService.imgBaseUrl;

  constructor(private _ActivatedRoute:ActivatedRoute, private _TrendingService:TrendingService) {
    this.currentId = this._ActivatedRoute.snapshot.params.id;
    this.mediaType = _ActivatedRoute.snapshot.params.mediaType;
  }

  getTrendingDetails()
  {
    this._TrendingService.getTrendingDetails(this.mediaType,this.currentId).subscribe((response)=>{
      this.details = response
      console.log(response);

    })
  }

  ngOnInit(): void {
    this.getTrendingDetails();
  }

}
