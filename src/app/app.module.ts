import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SwapiService } from './swapi.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SwapiService]
})
export class AppModule { }
