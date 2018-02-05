import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DocumentComponent } from './document/document.component';
import { UserComponent } from './user/user.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {OrderBy} from './document.pipe';



@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    UserComponent,
    OrderBy
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}















