import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from './swapi.model';

@Injectable()
export class SwapiService {
  baseUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getBaseUrl(){
    return this.baseUrl;
  }

  getPeopleFromId(id: number): Promise<People>{
    let url = this.baseUrl + '/people/' + id + '/';
    return this.getPeopleFromUrl(url);
  }

  getPeopleFromUrl(url: string): Promise<People>{
    return this.http.get<People>(url).toPromise();
  }

  
}
