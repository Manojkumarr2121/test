import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor() { }

get(key:string){
const rawuserdata=localStorage.getItem('userdata');
try{
  const userData=JSON.parse(rawuserdata);
  console.log(userData[key]);
  return userData[key] ? userData[key] : null;
}
catch (error) {
return '';
}


}

set(userdata){
  localStorage.setItem('userdata',JSON.stringify(userdata));
}

clear(){
  localStorage.removeItem('userdata');
}

}
