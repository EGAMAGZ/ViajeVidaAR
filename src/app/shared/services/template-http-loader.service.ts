import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TemplateHttpLoaderService {

  constructor(
    private http: HttpClient
  ) { }

  loadArTemplate(): Observable<string> {
    return this.http.get("assets/templates/ar-template.njk", { responseType: 'text' });
  }
}
