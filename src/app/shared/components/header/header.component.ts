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
     this.animateMenu();
  }
  toggleShowGoOut(){
     this.showGoOut = !this.showGoOut;
  }
   toggleShow(){
     this.show = !this.show;
  }

  animateMenu(){
     if (this.menuAppear) {
        // console.log('go in')
        this.toggleShow();
        setTimeout(() => {
           this.toggleShow();
        }, 1500);
     } else {
        // console.log('go out')
        this.toggleShowGoOut();
        setTimeout(() => {
           this.toggleShowGoOut();
        }, 2002);
     }
  }
  
}
