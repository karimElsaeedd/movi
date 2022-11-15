import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterRequest } from './register-request';
import { LoginRequest } from './login-request';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  signUp(registerData:RegisterRequest):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup', registerData)
  }
  signIn(loginData:LoginRequest):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin', loginData)
  }
}
