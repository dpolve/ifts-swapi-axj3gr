import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, Film } from './swapi.model';

@Injectable()
export class SwapiService {
  baseUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }


  getBaseUrl() {
    return this.baseUrl;
  }

  //
  // Character
  //
  getCharacterFromId(id: number): Promise<Character> {
    let url = this.baseUrl + '/people/' + id + '/';
    return this.getCharacterFromUrl(url);
  }

  getCharacterFromUrl(url: string): Promise<Character> {
    url = url.replace('http://', 'https://');
    return this.http.get<Character>(url).toPromise();
  }


  //
  // Film
  //
  getFilmFromId(id: number): Promise<Film> {
    let url = this.baseUrl + '/films/' + id + '/';
    return this.getFilmFromUrl(url);
  }

  getFilmFromUrl(url: string): Promise<Film> {
    url = url.replace('http://', 'https://');
    return this.http.get<Film>(url).toPromise();
  }
}
