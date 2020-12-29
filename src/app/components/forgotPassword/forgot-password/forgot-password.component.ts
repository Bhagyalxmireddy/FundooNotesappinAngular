import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder, private route:Router){}

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.resetForm.controls[controlName].hasError(errorName);
  }


  Resetpwd(ResetPassword:any) {
    let reqData = {
      email: ResetPassword.email

    }
    console.log(reqData);
    this.route.navigate(['resetPassword'])
  }
}
