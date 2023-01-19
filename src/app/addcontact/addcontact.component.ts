import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  contactForm = new FormGroup({
    id : new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    description: new FormControl(),
    phone: new FormControl()
  });
  constructor(private router:Router, private actRoute:ActivatedRoute, private cSer:ContactService) { }

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(params => {
      this.contactForm.patchValue(params);
    })
  }

  update(){
    this.cSer.update(this.contactForm.value).subscribe(success => {
      console.log(success);
      this.router.navigate(['/contacts']);
      
    },error => {
      console.log(error);
      
    })
  }

}
