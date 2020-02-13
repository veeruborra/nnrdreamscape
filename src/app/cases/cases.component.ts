import { Component, OnInit } from '@angular/core';
import { CasesService } from './../shared/services/cases.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
   cases: any = [];
  constructor(private caseService: CasesService) { }

  ngOnInit() {
    this.caseService.getCases().subscribe(
      (data) => {
        console.log(data);
        this.cases = data;
      },
      (error) => {
        console.log(error);
       }
    );
  }
  over(elem: HTMLElement) {
    let elem1: HTMLElement = document.getElementById("contentDiv0");
    let elem2: HTMLElement = document.getElementById("contentDiv1");
    let elem3: HTMLElement = document.getElementById("contentDiv2");
    let img1: HTMLElement = document.getElementById("images0");
    let img2: HTMLElement = document.getElementById("images1");
    let img3: HTMLElement = document.getElementById("images2");
    if (elem.classList.contains("contentDiv0")){
      elem1.style.width = "70%";
      elem2.style.width = "15%";
      elem3.style.width = "15%";

        // img1.style.width = "100%";
        // img2.style.width = "33.333vw";
        // img3.style.width = "33.333vw";

    } else if (elem.classList.contains("contentDiv1")) {
      elem1.style.width = "15%";
      elem2.style.width = "70%";
      elem3.style.width = "15%";

      // img1.style.width = "33.333vw";
      // img2.style.width = "100%";
      // img3.style.width = "33.333vw";

    } else if (elem.classList.contains("contentDiv2")) {
      elem1.style.width = "15%";
      elem2.style.width = "15%";
      elem3.style.width = "70%";

      // img1.style.width = "33.333vw";
      // img2.style.width = "33.333vw";
      // img3.style.width = "100%";
    } 
    elem.classList.remove('rotateText');
  }

  out(elem: HTMLElement) {
    let elem1: HTMLElement = document.getElementById("contentDiv0");
    let elem2: HTMLElement = document.getElementById("contentDiv1");
    let elem3: HTMLElement = document.getElementById("contentDiv2");

    let img1: HTMLElement = document.getElementById("images0");
    let img2: HTMLElement = document.getElementById("images1");
    let img3: HTMLElement = document.getElementById("images2");
    
    // img1.style.width = "33.333vw";
    // img2.style.width = "33.333vw";
    // img3.style.width = "33.333vw";

    elem1.style.width = "33%";
    elem2.style.width = "33%";
    elem3.style.width = "33%";
    elem.classList.add('rotateText');
  }
}
