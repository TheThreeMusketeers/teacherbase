import { LoginUser } from './../models/login';
import { RegisterUser } from './../models/user';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  PATH = environment.path;
  TOKEN_KEY="token";
  
    register(registerUser:RegisterUser){
      let headers = new HttpHeaders();
      headers = headers.append("Content-Type","application/json");
      this.http.post(this.PATH+"/user/register",registerUser,{headers:headers}).subscribe();
    }

    login(loginUser:LoginUser){
      let headers = new HttpHeaders();
      headers = headers.append("Content-Type","application/json");
      this.http.post(this.PATH+"/user/login",loginUser,{headers:headers}).subscribe(data=>{
          this.saveToken(data['access_token']);
      });
    }

    logOut(){
      localStorage.removeItem(this.TOKEN_KEY);
    }

    get isAuthenticated(){
      return !!localStorage.getItem(this.TOKEN_KEY);
    }

    get token(){
      return localStorage.getItem(this.TOKEN_KEY);
    }

    saveToken(token){
      localStorage.setItem(this.TOKEN_KEY,token);
    }
  
}//cs
