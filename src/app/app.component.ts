import { Component } from '@angular/core';

import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contacts';
  constructor(private router: Router) {}
  public clicked: boolean = false;

  onClickMe(){
    this.clicked=true;
    console.log(this.clicked)
    setTimeout (() => {
      this.router.navigate(['/contacts'])
   }, 3000);
  }
}
