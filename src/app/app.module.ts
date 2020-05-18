import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SwapiService } from "./swapi.service";

import { HttpClientModule } from "@angular/common/http";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";

import { far } from "@fortawesome/free-regular-svg-icons";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, FormsModule, HttpClientModule, NgbModule, FontAwesomeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [SwapiService]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
