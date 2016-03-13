System.register(['angular2/core', 'angular2/http', 'angular2/router', "ng2-material/all", 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, all_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_http) {
                    this._http = _http;
                    this.title = 'Pub Roulette';
                    this._http = _http;
                    this.map = null;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var latLng = new google.maps.LatLng(34.0193815, -118.49430719999998);
                    var myLatLng = { lat: 34.0193815, lng: -118.49430719999998 };
                    var mapOptions = {
                        center: latLng,
                        zoom: 15,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
                    var marker = new google.maps.Marker({
                        map: this.map,
                        animation: google.maps.Animation.DROP,
                        position: myLatLng
                    });
                    var content = "<h4>Information!</h4>";
                    this.addInfoWindow(marker, content);
                };
                AppComponent.prototype.addInfoWindow = function (marker, content) {
                    var infoWindow = new google.maps.InfoWindow({
                        content: content
                    });
                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.open(this.map, marker);
                    });
                };
                AppComponent.prototype.roulette = function () {
                    var _this = this;
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (success, error) {
                            if (success) {
                                console.log(success);
                                var lat_1 = success.coords.latitude;
                                var long_1 = success.coords.longitude;
                                var position = "lat=" + lat_1 + "&long=" + long_1;
                                var headers = new http_1.Headers();
                                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                                _this._http.post('/api/yelp/location', position, {
                                    headers: headers
                                })
                                    .map(function (res) { return res.json(); })
                                    .subscribe(function (data) {
                                    console.log(data);
                                    // startLat: startLat, startLong: startLong, endLat: endLat, endLong: endLong
                                    var endLat = data.location.coordinate.latitude;
                                    var endLong = data.location.coordinate.longitude;
                                    var journey = "startLat=" + lat_1 + "&startLong=" + long_1 + "&endLat=" + endLat + "&endLong=" + endLong;
                                    _this._http.post('/api/uber/journey', journey, {
                                        headers: headers
                                    })
                                        .map(function (res) { return res.json(); })
                                        .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('uber received'); });
                                }, // call uber api
                                function (// call uber api
                                    err) { return console.log(err); }, function () { return console.log('yelp received'); });
                            }
                            else {
                                console.log(error);
                            }
                        });
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, all_1.MATERIAL_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            http_1.Http,
                            http_1.ConnectionBackend,
                            http_1.HTTP_PROVIDERS,
                            all_1.MATERIAL_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([]), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map