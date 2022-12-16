import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public form : FormGroup;
  showPassword:boolean = false;

  constructor(
      public formBuilder: FormBuilder,
      private http: HttpClient,
      public userService: UserService,
      public router:Router
    ) { 
    this.form = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)]],
      password: ['',[Validators.required]],
    });
    this.userService.userLogin = false
  }

  
  ngOnInit() {
  }

  logForm(){
    if(this.form.valid){
      /* >>>>>> Post Example  <<<<<<<< */
      // this.http.post('urlExample',this.form).toPromise().then(resJson=>{
        // console.log(resJson)
        // this.form.reset()
      // }).catch(errorMessages=>{
        // console.log(errorMessages)
        // this.form.reset()
      // }).finally()    
      this.router.navigate(['products']);
    }
  }

  changePasswordVisibility(){
    this.showPassword = !this.showPassword
    let input = document.getElementById('password') as HTMLIonInputElement;
    if(this.showPassword){
        return input.type = 'text' 
    }
    return input.type = 'password'
  }
}
