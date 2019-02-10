import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ContactsComponent } from './contacts/contacts.component';
import { RelationComponent } from './relation/relation.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    RelationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:'contacts',component:ContactsComponent},
    {path:'',redirectTo:'contacts',pathMatch:'full'},
    {path:'relations',component:RelationComponent}
      
    ]
   ),
   AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
