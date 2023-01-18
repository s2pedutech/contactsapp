import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform = new FormGroup({
    email : new FormControl('', [Validators.required,Validators.email]),
    name: new FormControl('',[Validators.required]),
    phone: new FormControl(),
    rollNo: new FormControl(),
    password: new FormControl()
  });

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  signup(){
    console.log(this.signupform.value);
    this.auth.signup(this.signupform.value).subscribe(success => {
      console.log(success);
      // navigate to login
      this.router.navigate(['/shared/login'])
    }, error => {
      console.log(error);
      
    })
  }
}
