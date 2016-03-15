import { Component, OnInit } from 'angular2/core';

@Component({
  selector: 'my-map',
  styles: [`
    #map {
        height: 300px;
    }
  `],
  templateUrl: 'app/map.component.html'
})
export class MapComponent implements onInit {
  constructor() {
  }
  
  ngOnInit() {
    let mapOptions = {
      center: {lat: 34.0192684, lng: -118.4965408},
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);  
  }
  
  loadMap(lat, long, barName, barAddress, endLat, endLong) {
    let latLng = new google.maps.LatLng(lat, long);
    let endLatLng = new google.maps.LatLng(endLat, endLong);
    let latlngs = [];
    latlngs.push(latLng);
    latlngs.push(endLatLng);
    let barPosition = {lat: endLat, lng: endLong};

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

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

    let endContent = `
    <h4>${barName}</h4>
    <p>${barAddress}</p>`;

    this.addInfoWindow(endMarker, endContent);
    
    // map: an instance of GMap3
    // latlng: an array of instances of GLatLng
    var latlngbounds = new google.maps.LatLngBounds();
    latlngs.forEach(n => {
      latlngbounds.extend(n);
    });
    
    this.map.setCenter(latlngbounds.getCenter());
    this.map.fitBounds(latlngbounds); 
    
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
