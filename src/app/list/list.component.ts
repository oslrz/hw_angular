import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
objectKeys(obj: any) {
  return obj['result']
}
  constructor() { }
  posts:any=[];

  ngOnInit(): void {
    for(let i = 0;i<localStorage.length;i++){
      let key:any = localStorage.key(i)
      let data:any = JSON.parse(localStorage.getItem(key)||'{}');
      this.posts.push(data)
    }
    console.log('this.posts',typeof this.posts[0])
    // for(let elem of this.posts){
    //   console.log(this.objectKeys(elem))
    // }
  }
 

}
