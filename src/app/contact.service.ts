import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  add(contact:any){
    let httpOptions = {
      headers : new HttpHeaders({
        'content-type' : 'application/json',
        "x-access-token" : '' + localStorage.getItem('token')
      })
    }
    return this.http.post('',contact,httpOptions);
  }
  update(contact:any){
    let httpOptions = {
      headers : new HttpHeaders({
        'content-type' : 'application/json',
        "x-access-token" : '' + localStorage.getItem('token')
      })
    }
    return this.http.put('',contact,httpOptions);
  }
  delete(contact:any){
    let httpOptions = {
      headers : new HttpHeaders({
        'content-type' : 'application/json',
        "x-access-token" : '' + localStorage.getItem('token')
      })
    }
    return this.http.delete('', httpOptions);
  }
  getall(){
    let httpOptions = {
      headers : new HttpHeaders({
        'content-type' : 'application/json',
        "x-access-token" : '' + localStorage.getItem('token')
      })
    }
    // u might need id as well from localstorage
    return this.http.get('',httpOptions);
  }
}
