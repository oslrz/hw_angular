import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<div><router-outlet></router-outlet></div>`
})
export class AppComponent implements OnInit {
  // constructor(private http: HttpClient) {}
  // posts: any = [];
  // readonly URL: string =
  //   "https://api.themoviedb.org/3/movie/popular?api_key=a679d71f5f6c9ed7b240e4fa588b1a76";
   ngOnInit() {
  //   this.http.get(this.URL).subscribe((response) => {
  //     console.log(response);
  //     this.posts = response;
  //   });
  }

  

  // objectKeys(obj: any) {
  //   return obj['results'];
  // }
}
