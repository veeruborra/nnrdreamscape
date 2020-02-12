import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOn:boolean = false;
  menuAppear:boolean = false;
  showGoOut:boolean = false;
  show:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setMenuOn(){
     this.menuOn = !this.menuOn;
  }
  toggleMenu(){
     this.menuAppear = !this.menuAppear;
  }
  toggleShowGoOut(){
     this.showGoOut = !this.showGoOut;
  }
  
}
