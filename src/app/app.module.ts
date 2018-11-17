import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopComponent } from './view/top/top.component';
import { HeaderComponent } from './view/header/header.component';
import { NewComponent } from './view/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    HeaderComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
