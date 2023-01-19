import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl(),
    password: new FormControl()
  });
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe(success => {
      console.log(success);
      let data:any = success;
      let id = data.data.id;
      let token = data.data.token;
      localStorage.setItem("id",id);
      localStorage.setItem("token", token);
      this.router.navigate(['/contacts']);
      
    }, error => {
      console.log(error);
      
    })
  }

}
