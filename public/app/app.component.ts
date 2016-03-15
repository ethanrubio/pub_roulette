import { Component, OnInit } from 'angular2/core';
import { Http, ConnectionBackend, HTTP_PROVIDERS, Headers } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from "ng2-material/all";
import { MapComponent } from './map.component';
import { YelpService } from './yelp.service';
import { UberService } from './uber.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES, MapComponent],
  providers: [
    ROUTER_PROVIDERS,
    Http,
    ConnectionBackend,
    HTTP_PROVIDERS,
    MATERIAL_PROVIDERS,
    YelpService,
    UberService,
    MapComponent
  ]
})
@RouteConfig([

])
export class AppComponent implements OnInit {
  title = 'Pub Roulette'

  constructor(
    private _http:Http, 
    private _yelp:YelpService, 
    private _uber:UberService,
    private _map:MapComponent
    ) {
    this._http = _http;
    this._yelp = _yelp;
    this._uber = _uber;
    this._map = _map;
  }

  roulette() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((Position) => {
        console.log(Position);
        let lat = Position.coords.latitude;
        let long = Position.coords.longitude;
        let position = "lat=" + lat + "&long=" + long;
        var headers = new Headers();
        
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                  
        this._yelp.search(position, headers)
          .then(result => {
            let barName = result.name;
            let endLat = result.location.coordinate.latitude;
            let endLong = result.location.coordinate.longitude;
            let journey = "startLat=" + lat + "&startLong=" + long + "&endLat=" + endLat + "&endLong=" + endLong;
            this._uber.journey(journey, headers)
              .then(result => {
                console.log('this is the uber result from the roulette call ', result);
                this._map.loadMap(lat, long, barName, endLat, endLong);
              });
          })
            .catch(error => {
              console.log(error);
            });       
      });
      }
    }
}
