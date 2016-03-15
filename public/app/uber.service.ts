import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';

@Injectable()
export class UberService {
  constructor(private _http: Http) { }

  journey(journey, headers) {
    let uberPromise = new Promise((resolve, reject) => {
      console.log('hi from uber promise')
      this._http.post('/api/uber/journey', journey , {
            headers: headers
            })
            .map(res => res.json())
            .subscribe(
              data => {
                  console.log('Promise from uberPromise ', data);
                  resolve(data);
                }, 
              err => reject(err),
              () => console.log('uber received')
            );
    });
    
    return uberPromise;
  }
}