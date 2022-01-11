import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postList=[];

  constructor(public http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((Response: any) => {

      this.postList=Response.slice(0, 10);
      console.log(this.postList)
    });

  }

}
