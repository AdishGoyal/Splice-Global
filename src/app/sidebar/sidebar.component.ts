import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isLoggedIn:boolean = false;

  constructor() { }

  ngOnInit(): void {
    let userMobile  =  localStorage.getItem("mobile");

    if(userMobile != null){
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn = false;
    }
  }

}
