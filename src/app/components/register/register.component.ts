import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserServiceService} from '../../Services/UserService/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder,private router:Router,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.pattern("^[A-Z]{1}[a-z]{2,}"),Validators.required,Validators.minLength(3)]],
      lastname: ['', [Validators.pattern("^[A-Z]{1}[a-z]{2,}"),Validators.required,Validators.minLength(3)]],
      email:['',[Validators.pattern("^[a-zA-Z0-9+-]+(?:\\.[a-zA-Z0-9-]+)*@[a-zA-Z0-9]+(?:\\.[a-zA-Z]{2,}){1,2}$"),Validators.required]],
      password:['',[Validators.pattern("^(?=.[0-9])" + "(?=.[a-z])(?=.[A-Z])" + "(?=.[@#$%^&+=])" + "(?=\\S+$).{8,}$"),Validators.required,Validators.minLength(8)]],
      cpassword:['',Validators.required]

   },{ validator: this.checkPasswords });
  
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.cpassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }


 /*  register($event:any){
    let reqdata = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }

    console.log(" req data ", reqdata);
    console.log(" calling register", $event);
  } */

  register = (registerFormValue: { firstname: any; lastname: any; email: any; password: any; }) =>{
    try{
      let newUser = {
        firstName: registerFormValue.firstname,
        lastName: registerFormValue.lastname,
        email: registerFormValue.email,
        password: registerFormValue.password,
        service: 'advance'
      }
      console.log(newUser);
      this.userService.registerUser(newUser).subscribe((response: any) =>{
        console.log("Register  successufully ",response);
      })
  }catch(error){
    console.log(error);
  }
}
 
  public hasError=(controlName:string,errorName:string)=>{
    return this.registerForm.controls[controlName].hasError(errorName);
  }
  login()
  {
    this.router.navigate(['login']);
  }

} 
