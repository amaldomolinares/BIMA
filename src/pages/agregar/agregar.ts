import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite} from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { SQLiteObject } from '@ionic-native/sqlite';
import { Http, Headers, RequestOptions } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

hideMe=false;
estado:any;

  constructor(public navCtrl: NavController,
    private sqlite: SQLite,
    private toast: Toast,
    public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  hide() {

    if (this.estado =="malo"){
  this.hideMe = true;
  }
}

}
