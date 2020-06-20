import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public name;
  public phone;
  public city;
  public email;
  public edit = false;
  public nameValue: any;
  public phoneValue: any;
  public cityValue: any;
  public emailValue: any;

  public IdValue: any;
  constructor( private request: RequestService,
    private route: ActivatedRoute) {


      this.route.queryParams.subscribe((params: any) => {
        this.edit = params.edit;
        this.nameValue = params.name;
        this.phoneValue = params.phone;
        this.cityValue = params.city;
       this.emailValue = params.email;
        this.IdValue = params.id;
        this.setForm();
    });

     }



     setForm() {
      if (!this.edit) {
        this.name = new FormControl('', Validators.required);
        this.phone = new FormControl('', Validators.required);
        this.email = new FormControl('', Validators.required);
            this.city = new FormControl('', Validators.required);

        return;
      }

      this.name = new FormControl(this.nameValue, Validators.required);
      this.phone = new FormControl(this.phoneValue, Validators.required);
      this.city = new FormControl(this.cityValue, Validators.required);
      this.email = new FormControl(this.emailValue, Validators.required);

    }



    public submit() {
      const data = {
        name: this.name.value,
        phone: this.phone.value,
        city:this.city.value,
        email:this.email.value
      };
      if (!this.edit) {
        return this.request.createContact(data).subscribe((response: any) => {
          console.log(response);
        });
      }

      return this.request.updateContact(this.IdValue, data).subscribe((response: any) => {
        console.log(response);
      });
    }

  ngOnInit() {
  }

}
