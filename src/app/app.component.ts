import { Component, VERSION, Input } from "@angular/core";
import { SwapiService } from "./swapi.service";
import { People } from "./swapi.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentPeople: People = null;
  @Input() currentPeopleId: number = 1;

  constructor(public swapi: SwapiService) {}

  ngOnInit() {
    console.log("AppComponent.ngOnInit: start", this.currentPeople);

    this.swapi
      .getPeopleFromId(1)
      .then(p => {
        this.currentPeople = p;

        console.log("AppComponent.ngOnInit:", this.currentPeople);
      })
      .catch(err => {
        console.error("AppComponent.ngOnInit:", err);
      });

    console.log("AppComponent.ngOnInit: end", this.currentPeople);
  }

  onInput() {
    if (this.currentPeopleId != null && this.currentPeopleId | 0) {
      this.swapi
        .getPeopleFromId(this.currentPeopleId)
        .then(p => {
          this.currentPeople = p;

          console.log("AppComponent.ngOnInit:", this.currentPeople);
        })
        .catch(err => {
          console.error("AppComponent.ngOnInit:", err);
        });

      console.log("AppComponent.ngOnInit: end", this.currentPeople);
    }
  }

  piu() {
    this.currentPeopleId++;
    this.swapi
      .getPeopleFromId(this.currentPeopleId)
      .then(p => (this.currentPeople = p))
      .catch(err => console.error(err));
  }
  meno() {
    if (this.currentPeopleId <= 1) {
      console.log("Errore");
    } else {
      this.currentPeopleId--;
      this.swapi
        .getPeopleFromId(this.currentPeopleId)
        .then(p => (this.currentPeople = p))
        .catch(err => console.error(err));
    }
  }
}
