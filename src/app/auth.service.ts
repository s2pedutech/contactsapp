import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.post('',data);
  }
  signup(data:any){
    return this.http.post('',data);
  }
}
