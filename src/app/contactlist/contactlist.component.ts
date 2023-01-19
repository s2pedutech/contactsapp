import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  contacts:any = [];
  constructor(private contactSer:ContactService, private router:Router) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(){
    this.contactSer.getall().subscribe(success => {
      console.log(success);
      let data:any = success;
      this.contacts = data.data;

    }, error => {
      console.log(error);
      
    })
  }

  update(contact:any){
    this.router.navigate(['/contacts/addcontact'], {
      queryParams: contact
    })
  }
  delete(id:any){
    this.contactSer.delete(id).subscribe(success => {
      this.getAllContacts();
    }, error => {
      console.log(error);
      
    })
  }

}
