import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService:HttpServiceService) { }

  registerUser(data: any){

    console.log("data in user service ",data);

    return this.httpService.post('user/userSignUp',data);
  }
  loginuser(data: any){
    // console.log("dara in user service ",data);
    return this.httpService.post('user/login',data);
  }

}
