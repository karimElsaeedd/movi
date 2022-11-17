import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import { RegisterRequest } from './register-request';
import { LoginRequest } from './login-request';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Router:Router)
  {
    if(localStorage.getItem('userToken'))
    {
      this.saveUserData();
    }
  }

  userData=new BehaviorSubject(null);
  saveUserData()
  {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
  }

  signUp(registerData:RegisterRequest):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup', registerData)
  }
  signIn(loginData:LoginRequest):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin', loginData)
  }
  signOut()
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }
}
