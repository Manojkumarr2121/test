import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RequestService } from '../request.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userlistcontact:any;

  constructor(private auth:AuthService,private request:RequestService,private route:Router) {


   }

  ngOnInit() {

    if(!this.auth.isValiduser()){
      return ;
    }

    this.request.loadcontactlist().subscribe((contacts : any)=>{
      this.userlistcontact=contacts.result;
      console.log(contacts);
    });

  }

  logout(){
    this.auth.logout();
  }
  createTask() {
    this.route.navigate(['contact'], {
      queryParams: {
        edit: false
      }
    });
  }

  edit(contact) {
    this.route.navigate(['contact'], {
      queryParams: {
        edit: true,
        name: contact.username,
        phone: contact.phone,
        city:contact.city,
        email:contact.email,
        id: contact._id
      }
    });
  }

}
