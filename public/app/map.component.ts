import { Component, OnInit } from 'angular2/core';
import { ANGULAR2_GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component({
  selector: 'my-map',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES], // this loads all angular2-google-maps directives in this component
  // the following line sets the height of the map - Important: if you don't set a height, you won't see a map!!
  styles: [`
    #map {
        width: 100%;
        height: 100%;
    }
  `],
  templateUrl: 'app/map.component.html'
})
export class MapComponent implements OnInit {
  constructor() {
    this.map = null;
  }

  ngOnInit() {

    this.map = new google.maps.Map(document.getElementById("map"));
  }

}
