import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angReact';
  show = true;
  ngOnInit(){
    setTimeout(()=>{
        this.show = false;
    },4700);
  }
}
