import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  LoginSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      mobile: ['8959281172', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[6-9][0-9]{9}$")]],
      password: ['12345', Validators.required]
    })
  }

  ngOnInit(): void {
    let userMobile  =  localStorage.getItem("mobile");

    if(userMobile != null){
      this.router.navigate(['dashboard/post'])
      .then(() => {
        window.location.reload();
      });
    }
  }

  get f()
  { return this.loginForm.controls; }

  login(){
    this.LoginSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    
    localStorage.setItem("mobile", this.loginForm.value['mobile']);
    
    this.router.navigate(['dashboard/post'])
    .then(() => {
      window.location.reload();
    });
  }

}
