import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

results;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: Http
  
  ) {
  }

  findCharacter(name){
    this.http.get('https://swapi.co/api/people/?search=' + name)
      .toPromise()
      .then(response => this.results =response.json().results);
    console.log('finding ' + name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
