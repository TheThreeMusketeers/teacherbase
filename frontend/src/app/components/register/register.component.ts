import { RegisterUser } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService:AuthService
  ) { }

  registerUser:any={};

  ngOnInit() {
  }

  register(registerUser:RegisterUser){
    this.authService.register(registerUser);
  }

}//cs
