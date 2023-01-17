import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactlistComponent } from '../contactlist/contactlist.component';

import {RouterModule,Routes} from '@angular/router';
import { AddcontactComponent } from '../addcontact/addcontact.component';
var routes:Routes = [
  { path : 'contactlist', component: ContactlistComponent},
  { path: 'addcontact', component:AddcontactComponent },
  { path : '', redirectTo: 'contactlist', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    ContactlistComponent,
    AddcontactComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ContactsModule { }
