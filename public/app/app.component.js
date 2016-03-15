System.register(['angular2/core', 'angular2/http', 'angular2/router', "ng2-material/all", './map.component', './yelp.service', './uber.service', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, all_1, map_component_1, yelp_service_1, uber_service_1;
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
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (yelp_service_1_1) {
                yelp_service_1 = yelp_service_1_1;
            },
            function (uber_service_1_1) {
                uber_service_1 = uber_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_http, _yelp, _uber, _map) {
                    this._http = _http;
                    this._yelp = _yelp;
                    this._uber = _uber;
                    this._map = _map;
                    this.title = 'Pub Roulette';
                    this._http = _http;
                    this._yelp = _yelp;
                    this._uber = _uber;
                    this._map = _map;
                }
                AppComponent.prototype.roulette = function () {
                    var _this = this;
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (Position) {
                            console.log(Position);
                            var lat = Position.coords.latitude;
                            var long = Position.coords.longitude;
                            var position = "lat=" + lat + "&long=" + long;
                            var headers = new http_1.Headers();
                            headers.append('Content-Type', 'application/x-www-form-urlencoded');
                            _this._yelp.search(position, headers)
                                .then(function (result) {
                                var barName = result.name;
                                var barAddress = result.location.display_address[0] + ' ' + result.location.display_address[2];
                                var endLat = result.location.coordinate.latitude;
                                var endLong = result.location.coordinate.longitude;
                                var journey = 'startLat=' + lat + '&startLong=' + long + '&endLat=' + endLat + '&endLong=' + endLong;
                                _this._uber.journey(journey, headers)
                                    .then(function (result) {
                                    console.log('this is the uber result from the roulette call ', result);
                                    _this._map.loadMap(lat, long, barName, barAddress, endLat, endLong);
                                });
                            })
                                .catch(function (error) {
                                console.log(error);
                            });
                        });
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, all_1.MATERIAL_DIRECTIVES, map_component_1.MapComponent],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            http_1.Http,
                            http_1.ConnectionBackend,
                            http_1.HTTP_PROVIDERS,
                            all_1.MATERIAL_PROVIDERS,
                            yelp_service_1.YelpService,
                            uber_service_1.UberService,
                            map_component_1.MapComponent
                        ]
                    }),
                    router_1.RouteConfig([]), 
                    __metadata('design:paramtypes', [http_1.Http, yelp_service_1.YelpService, uber_service_1.UberService, map_component_1.MapComponent])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map