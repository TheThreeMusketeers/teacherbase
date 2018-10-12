import { Author } from './../models/author';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private http:HttpClient
  ) { }

  PATH = environment.path;

  getAuthors():Observable<Author[]>{
    return this.http.get<Author[]>(this.PATH+"/author/list");
  }

}//cs
