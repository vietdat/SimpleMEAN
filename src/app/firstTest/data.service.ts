import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  result: any;

  constructor(private _http: Http) { }

  getUsers() {
    console.log('asdfafasdfasd fa sdf asd f asdfasd')
    return this._http.get("/api/register")
      .map(result => this.result = 'result.json()');
  }

}
