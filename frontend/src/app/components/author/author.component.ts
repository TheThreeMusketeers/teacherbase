import { AuthorService } from './../../services/author.service';
import { Author } from './../../models/author';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(
    private authorService:AuthorService
  ) { }

  authors:Author[];

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(){
    this.authorService.getAuthors().subscribe(data=>{
      this.authors = data;
    });
  }

}
