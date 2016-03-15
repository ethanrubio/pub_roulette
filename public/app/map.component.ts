import { Component } from 'angular2/core';

@Component({
  selector: 'my-map',
  styles: [`
    #map {
        height: 300px;
    }
  `],
  templateUrl: 'app/map.component.html'
})
export class MapComponent {
  constructor() {
    this.map = null;
  }
  
  loadMap(lat, long, barName, endLat, endLong) {
    let latLng = new google.maps.LatLng(lat, long);
    let barPosition = {lat: endLat, lng: endLong};

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    let startMarker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

    let startContent = `<h4>Your Location</h4>`;

    this.addInfoWindow(startMarker, startContent);
    
    let endMarker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: barPosition
    });

    let endContent = `<h4>${barName}</h4>`;

    this.addInfoWindow(endMarker, endContent);
  }

  addInfoWindow(marker, content){
    
    console.log('addInfoWindow is called! ', marker, content);

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.open(this.map, marker);
    });

  }

}
