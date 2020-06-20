import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable()
export class RequestService {

constructor(private http:HttpClient,private storage:StorageService) { }



login(body){
  return this.http.post('http://localhost:5000/user/login',body)
}


loadcontactlist(){
  const header=new HttpHeaders({
    Authorization: this.storage.get('token')
  });

  return this.http.get('http://localhost:5000/contact',{headers:header});
}

createContact(body) {
  const headers = new HttpHeaders({
    Authorization: this.storage.get('token')
  });

  return this.http.post('http://localhost:5000/contact/add', body, {headers});
}

updateContact(id, body){
  const headers = new HttpHeaders({
    Authorization: this.storage.get('token')
  });

  return this.http.post(`http://localhost:5000/contact/update?id=${id}` , body, {headers});
}

}
