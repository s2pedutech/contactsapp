import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  add(contact:any){
    return this.http.post('',contact);
  }
  update(contact:any){
    return this.http.put('',contact);
  }
  delete(contact:any){
    return this.http.delete('');
  }
  getall(){
    return this.http.get('');
  }
}
