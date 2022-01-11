import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albumList=[];
  imgSrc: any = '';

  constructor(public http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://jsonplaceholder.typicode.com/photos')
    .subscribe((Response: any) => {

      this.albumList=Response.slice(0, 10);
      console.log(this.albumList)
    });

  }

  getImage(e: any){
    this.imgSrc = e.target.value;
  }

}
