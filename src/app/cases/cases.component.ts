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

}
