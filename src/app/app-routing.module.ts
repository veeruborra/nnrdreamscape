import { CaseComponent } from './case/case.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path:'cases' ,component: CasesComponent },
  { path:'case/:id' ,component: CaseComponent },
  { path:'about' ,component: AboutComponent },
  { path: '', redirectTo: '/cases', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
