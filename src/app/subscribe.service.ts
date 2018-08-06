import { Injectable } from '@angular/core';
import { Http } from '../../node_modules/@angular/http';

import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor( private http: Http) { }
  getData():Observable<any>
  {
    return this.http.get("https://jsonplaceholder.typicode.com/photos").pipe(map(data => data.json()))
  }
}
