import { CasesService } from './../shared/services/cases.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {
  case: any = {};
    bgImageUrl = "";
    leftColor = ['', '', '', '', '', '', '', '', '', '', '', '', '']
    rightColor =[
    'rgb(252, 228, 115)', 
    'rgb(202, 190, 159)', 
    'rgb(237, 237, 237)', 
    'rgb(234, 234, 236)', 
    'rgb(234, 234, 236)', 
    'rgb(255, 204, 0)', 
    'rgb(245, 234, 175)', 
    'rgb(219, 217, 222)', 
    'rgb(216, 216, 216)', 
    'rgb(233, 246, 249)', 
    'rgb(202, 199, 186)', 
    'rgb(217, 224, 226)', 
    'rgb(217, 224, 226)']
    breakUp = '';
    firstPart = '';
    secondPart = '';
  constructor(
    private caseService: CasesService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.caseService.getCaseById(id).subscribe(
        (data) => {
          this.case = data['0'];
          this.bgImageUrl = this.case.background_url;
          console.log(this.case);
        },
        (error) => console.log(error)
      )
    }
  }

}
