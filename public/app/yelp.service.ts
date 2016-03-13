import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class yelpAPI {
  constructor(http: Http) { }

  search() {
    return Promise.resolve();
    this.http.post("https://httpbin.org/post", "firstname=Nic")
    .subscribe(data => {
        var alert = Alert.create({
            title: "Data String",
            subTitle: data.json().data,
            buttons: ["close"]
        });
        this.nav.present(alert);
    }, error => {
        console.log(JSON.stringify(error.json()));
    });
  }
}
