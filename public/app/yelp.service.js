System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var yelpAPI;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            yelpAPI = (function () {
                function yelpAPI(http) {
                }
                yelpAPI.prototype.search = function () {
                    var _this = this;
                    return Promise.resolve();
                    this.http.post("https://httpbin.org/post", "firstname=Nic")
                        .subscribe(function (data) {
                        var alert = Alert.create({
                            title: "Data String",
                            subTitle: data.json().data,
                            buttons: ["close"]
                        });
                        _this.nav.present(alert);
                    }, function (error) {
                        console.log(JSON.stringify(error.json()));
                    });
                };
                yelpAPI = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], yelpAPI);
                return yelpAPI;
            }());
            exports_1("yelpAPI", yelpAPI);
        }
    }
});
//# sourceMappingURL=yelp.service.js.map