import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../request.service';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userlistcontact:any;
  public username=new FormControl('',Validators.required);
  public password=new FormControl('',Validators.required);

  constructor(private request:RequestService,
    private storage:StorageService,private router:Router,private auth:AuthService) { }

  ngOnInit() {
    if(!this.auth.isValiduser(true)){
      return ;
  }

  }

  login(){
  let body={
    username:this.username.value,
    password:this.password.value
  };
this.request.login(body).subscribe((response:any)=>{

  if(!response){
    console.log('something went wrong');
    return;
  }

  if(response.status == 'error'){
    console.log(response.msg);
    this.storage.clear();
    return;
  }
 this.storage.set(response.result);
this.router.navigate(['home']);
})

}
}
