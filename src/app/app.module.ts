import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import{RouterModule,Routes} from '@angular/router';
var routes:Routes = [
  {
    path: 'shared', 
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: 'contacts', 
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
  },{
    path: '', redirectTo: 'shared', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
