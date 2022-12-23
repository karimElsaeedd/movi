import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TrendingService } from '../trending.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService:AuthService,private _TrendingService:TrendingService) { }

  isLogin:boolean=false;
  term:string='';

  sendTerm()
  {
    this._TrendingService.emitSearchFilter(this.term);
  }

  logOut()
  {
    this._AuthService.signOut();
  }

  ngOnInit(): void {

    this.isLogin=true;
    // this._AuthService.userData.subscribe({
    //   next:()=>{
    //     if (this._AuthService.userData.getValue() != null) {
    //     }
    //     else
    //     {
    //       this.isLogin=false;
    //     }
    //   }
    // })
  }

}
