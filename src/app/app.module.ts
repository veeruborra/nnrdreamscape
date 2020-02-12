import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CasesComponent } from './cases/cases.component';
import { HttpClientModule } from '@angular/common/http';
import { CaseComponent } from './case/case.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CasesComponent,
    CaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
