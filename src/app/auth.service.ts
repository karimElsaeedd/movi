import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterRequest } from './register-request';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  signUp(registerData:RegisterRequest):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup', registerData)
  }
}
