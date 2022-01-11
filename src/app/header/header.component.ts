import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean = false;
  userName: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let userMobile  =  localStorage.getItem("mobile");

    if(userMobile != null){
      this.isLoggedIn = true;
      this.userName = userMobile
    }
    else{
      this.isLoggedIn = false;
    }
  }

  logout(){
    localStorage.clear();
    setTimeout(() => {
      this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
    }, 1000);
  }

}
