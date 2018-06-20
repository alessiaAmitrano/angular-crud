import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  url = 'http://localhost:3000/data';
  // source = 'films'

  constructor(private http: HttpClient) { }

  getLibrary(): any {
    // this.http.get(`${this.url}/${this.source}`).subscribe(res => console.log('res', res));
    this.http.get(this.url).subscribe(res => console.log('res', res));
  }

}
