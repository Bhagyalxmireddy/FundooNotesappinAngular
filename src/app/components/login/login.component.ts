import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder,private route:Router,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required ]]
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  loginUser(loginform:any) {
    let reqData = {
      email: loginform.email,
      password: loginform.password

    }
    console.log(reqData);
    this.userService.loginuser(reqData).subscribe((res:any)=>{
      console.log(" Login successfully ",res);
      localStorage.setItem('token',res['id']);
      this.route.navigate(['dashboard'])
    })
  }

 
}
