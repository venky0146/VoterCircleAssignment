import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private router: Router) {}
  public clicked: boolean = false;

  onClickMe(){
    this.clicked=true;
    console.log(this.clicked)
    setTimeout (() => {
      this.router.navigate(['/relations'])
   }, 3000);
  }

  ngOnInit() {
  }

}
