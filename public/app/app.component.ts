import { Component, OnInit } from 'angular2/core';
import { Http, ConnectionBackend, HTTP_PROVIDERS, Headers } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from "ng2-material/all";
import { MapComponent } from './map.component';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    Http,
    ConnectionBackend,
    HTTP_PROVIDERS,
    MATERIAL_PROVIDERS
  ]
})
@RouteConfig([

])
export class AppComponent implements OnInit {
  title = 'Pub Roulette';

  constructor(private _http:Http) {
    this._http = _http;
    this.map = null;
  }

  ngOnInit() {
    let latLng = new google.maps.LatLng(34.0193815, -118.49430719999998);
    let myLatLng = {lat: 34.0193815, lng: -118.49430719999998};

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: myLatLng
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.open(this.map, marker);
    });

  }

  roulette() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((success, error) => {
        if (success) {

          console.log(success);

          let lat = success.coords.latitude;
          let long = success.coords.longitude;
          let position = "lat=" + lat + "&long=" + long;

          var headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded');

          this._http.post('/api/yelp/location', position , {
            headers: headers
            })
            .map(res => res.json())
            .subscribe(
              data => {
                console.log(data)
                // startLat: startLat, startLong: startLong, endLat: endLat, endLong: endLong
                let endLat = data.location.coordinate.latitude;
                let endLong = data.location.coordinate.longitude;
                let journey = "startLat=" + lat + "&startLong=" + long + "&endLat=" + endLat + "&endLong=" + endLong;
                this._http.post('/api/uber/journey', journey , {
                  headers: headers
                  })
                  .map(res => res.json())
                  .subscribe(
                    data => console.log(data),
                    err => console.log(err),
                    () => console.log('uber received')
                  );
                }, // call uber api
              err => console.log(err),
              () => console.log('yelp received')
            );


          // new Promise((resolve, reject) => {
          //   resolve(success);
          //   console.log(reject);
          // });
        } else {
          console.log(error);
        }
      });
      }
    }
}
