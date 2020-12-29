import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  ResetFrom!: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.ResetFrom = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required ]]
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.ResetFrom.controls[controlName].hasError(errorName);
  }

  resetPassword(loginform:any) {
    let reqData = {
      password: loginform.password

    }
    console.log(reqData);
    this.route.navigate(['login'])
  }
}
