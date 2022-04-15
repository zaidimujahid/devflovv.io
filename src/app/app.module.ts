import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { ServiceComponent } from './service/service.component';
import { WorkComponent } from './work/work.component';
import { CareerComponent } from './career/career.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    ServiceComponent,
    WorkComponent,
    CareerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
