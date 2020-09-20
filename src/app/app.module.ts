import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownModule } from 'ngx-countdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ReportComponent } from './components/report/report.component';
@NgModule({
  declarations: [
    AppComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    CountdownModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
