import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';

@Injectable()
export class YelpService {
  constructor(private _http: Http) { }

  search(position, headers) {
    let yelpPromise = new Promise((resolve, reject) => {
      console.log('hi from yelp promise')
      this._http.post('/api/yelp/location', position , {
            headers: headers
            })
            .map(res => res.json())
            .subscribe(
              data => {
                  console.log(data);
                  resolve(data);
                }, 
              err => reject(err),
              () => console.log('yelp received')
            );
    });
    
    return yelpPromise;
    
    //  this._http.post('/api/yelp/location', position , {
    //         headers: headers
    //         })
    //         .map(res => res.json())
    //         .subscribe(
    //           data => {
    //             console.log(data)
    //             // startLat: startLat, startLong: startLong, endLat: endLat, endLong: endLong
    //             let endLat = data.location.coordinate.latitude;
    //             let endLong = data.location.coordinate.longitude;
    //             let journey = "startLat=" + lat + "&startLong=" + long + "&endLat=" + endLat + "&endLong=" + endLong;
    //             this._http.post('/api/uber/journey', journey , {
    //               headers: headers
    //               })
    //               .map(res => res.json())
    //               .subscribe(
    //                 data => console.log(data),
    //                 err => console.log(err),
    //                 () => console.log('uber received')
    //               );
    //             }, // call uber api
    //           err => console.log(err),
    //           () => console.log('yelp received')
    //         );
  }
}
