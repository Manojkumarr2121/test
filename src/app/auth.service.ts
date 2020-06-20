import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private storage:StorageService,
  private router:Router) { }


isValiduser(redirecthome = false){
  if(!this.storage.get('token')){
 this.router.navigate(['login']);
 return false;
  }
  return redirecthome ? this.router.navigate(['home']): true;

}

logout(){
  this.storage.clear();
  this.router.navigate(['login']);
}
}
