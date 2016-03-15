System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent() {
                    this.map = null;
                }
                MapComponent.prototype.loadMap = function (lat, long, barName, endLat, endLong) {
                    var latLng = new google.maps.LatLng(lat, long);
                    var barPosition = { lat: endLat, lng: endLong };
                    var mapOptions = {
                        center: latLng,
                        zoom: 15,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
                    var startMarker = new google.maps.Marker({
                        map: this.map,
                        animation: google.maps.Animation.DROP,
                        position: latLng
                    });
                    var startContent = "<h4>Your Location</h4>";
                    this.addInfoWindow(startMarker, startContent);
                    var endMarker = new google.maps.Marker({
                        map: this.map,
                        animation: google.maps.Animation.DROP,
                        position: barPosition
                    });
                    var endContent = "<h4>" + barName + "</h4>";
                    this.addInfoWindow(endMarker, endContent);
                };
                MapComponent.prototype.addInfoWindow = function (marker, content) {
                    console.log('addInfoWindow is called! ', marker, content);
                    var infoWindow = new google.maps.InfoWindow({
                        content: content
                    });
                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.open(this.map, marker);
                    });
                };
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'my-map',
                        styles: ["\n    #map {\n        height: 300px;\n    }\n  "],
                        templateUrl: 'app/map.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=map.component.js.map