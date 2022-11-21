import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading:boolean=false;

  loginForm:FormGroup = new FormGroup({
    'email': new FormControl(null,[Validators.required,Validators.email]),
    'password': new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z][0-9]{3}$/)])
  })
  submitForm(){
    this.isLoading=true;
    if(this.loginForm.invalid){
      return;
    }
    this._AuthService.signIn(this.loginForm.value).subscribe((response)=>{
      if(response.message=='success')
      {
        // this._ToastrService.success('Hello world!', 'login succesfully!');
        this.isLoading=false;
        localStorage.setItem('userToken',response.token);
        this._AuthService.saveUserData();
        this._Router.navigateByUrl('/home')
      }
      else{
        // this._ToastrService.error(response.message, 'login error!');
        this.isLoading=false;
        alert(response.message)
      }
    })
  }

  constructor(private _AuthService:AuthService, private _Router:Router) { }

  ngOnInit(): void {
  }

}
