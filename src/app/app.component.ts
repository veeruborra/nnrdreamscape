import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angReact';
  show = true;
  show1 = true;
  ngOnInit(){
    setTimeout(()=>{
        this.show = false;
    },4600);
    setTimeout(()=>{
        this.show1 = false;
    },3000);
  }
}
