import { Component, VERSION, Input } from "@angular/core";
import { SwapiService } from "./swapi.service";
import { Character, Film, Vehicle } from "./swapi.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentCharacterId: number = 1;

  currentCharacter: Character = null;
  currentCharacterFilmList: Film[] = null;
  currentCharacterVehicleList: Vehicle[] = null;

  constructor(public swapi: SwapiService) {}

  ngOnInit() {
    console.log("AppComponent.ngOnInit: start", this.currentCharacter);
    this.loadCharacter();
    console.log("AppComponent.ngOnInit: end", this.currentCharacter);
  }

  onInput() {
    if (this.currentCharacterId != null && this.currentCharacterId > 0) {
      this.loadCharacter();
    }
  }
  
  loadCharacter(){
    this.swapi
      .getCharacterFromId(this.currentCharacterId)
      .then(p => {
        this.currentCharacter = p;
        console.log("AppComponent.loadCharacter:", this.currentCharacter);
        return p;
      })
     .then(p => {
        return this.loadCharacterFilm();
      })
      .catch(err => {
        console.error("AppComponent.loadCharacter:", err);
      });
  }

  loadCharacterDetails(){
    this.currentCharacterFilmList =[];
    const inputList = this.currentCharacter.films;

    const promiseList: Promise<Film>[] = [];
    for (let i=0; i>inputList.length; i++){
      const filmPromise = this.swapi.getFilmFromUrl(inputList[i]);
      promiseList.push (filmPromise);
    }

    Promise.all(promiseList)
    .then(resultList => )



  }

  onPiu() {
    this.currentCharacterId++;
    this.loadCharacter();
  }
  onMeno() {
    if (this.currentCharacterId <= 1) {
      console.log("Errore");
    } else {
      this.currentCharacterId--;
      this.swapi
        .getCharacterFromId(this.currentCharacterId)
        .then(p => (this.currentCharacter = p))
        .catch(err => console.error(err));
    }
  }
}
